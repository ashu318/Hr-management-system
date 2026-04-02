export const dynamic = "force-dynamic";
import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { verifyToken } from "@/lib/jwt";

export async function GET(request) {
    try {
        const token = request.cookies.get("auth_token")?.value;
        if (!token)
            return NextResponse.json({ message: "Unauthorized" }, { status: 401 });

        const decoded = verifyToken(token);
        if (!decoded)
            return NextResponse.json({ message: "Invalid token" }, { status: 401 });

        if (decoded.role !== "ADMIN") {
            return NextResponse.json({ message: "Unauthorized Access" }, { status: 403 });
        }

        const orgId = decoded.organizationId;

        const [
            totalEmployees,
            approvedLeavesThisMonth,
            notificationsThisMonth,
            pendingLeaves,
            users // ✅ ADD THIS
        ] = await Promise.all([

            prisma.user.count({
                where: { organizationId: orgId, isDeleted: false }
            }),

            prisma.leaveApplication.count({
                where: {
                    status: "APPROVED",
                    user: { organizationId: orgId }
                }
            }),

            prisma.announcement.count({
                where: { organizationId: orgId }
            }),

            prisma.leaveApplication.count({
                where: {
                    status: "PENDING",
                    user: { organizationId: orgId }
                }
            }),

            // 🎂 Users with DOB
            prisma.user.findMany({
                where: {
                    organizationId: orgId,
                    isDeleted: false,
                    dateOfBirth: { not: null }
                },
                select: {
                    id: true,
                    fullName: true,
                    dateOfBirth: true,
                    dateOfJoining: true,
                    profileImageUrl: true,
                    employeeId: true,
                }
            })
        ]);

        const today = new Date();

        // normalize today (remove time)
        today.setHours(0, 0, 0, 0);

        const upcomingBirthdays = users
            .map(user => {
                const dob = new Date(user.dateOfBirth);

                let nextBirthday = new Date(
                    today.getFullYear(),
                    dob.getMonth(),
                    dob.getDate()
                );

                // if birthday already passed → next year
                if (nextBirthday < today) {
                    nextBirthday.setFullYear(today.getFullYear() + 1);
                }

                return {
                    ...user,
                    birthdayDate: nextBirthday,
                };
            })
            .sort((a, b) => a.birthdayDate - b.birthdayDate) // nearest first
            .slice(0, 5) // ✅ ONLY NEXT 5
            .map(user => {
                const isToday =
                    user.birthdayDate.toDateString() === today.toDateString();

                return {
                    ...user,
                    formattedDate: isToday
                        ? "Today 🎉"
                        : user.birthdayDate.toLocaleDateString("en-IN", {
                            day: "numeric",
                            month: "long",
                        }),
                };
            });


        const upcomingAnniversaries = users
            .filter(user => user.dateOfJoining) // safety
            .map(user => {
                const doj = new Date(user.dateOfJoining);

                let nextAnniversary = new Date(
                    today.getFullYear(),
                    doj.getMonth(),
                    doj.getDate()
                );

                // if already passed → next year
                if (nextAnniversary < today) {
                    nextAnniversary.setFullYear(today.getFullYear() + 1);
                }

                // 🎯 Calculate years completed
                let yearsCompleted = today.getFullYear() - doj.getFullYear();
                if (nextAnniversary > today) {
                    yearsCompleted--; // not completed this year yet
                }

                return {
                    ...user,
                    anniversaryDate: nextAnniversary,
                    yearsCompleted: yearsCompleted < 0 ? 0 : yearsCompleted,
                };
            })
            .sort((a, b) => a.anniversaryDate - b.anniversaryDate)
            .slice(0, 4)
            .map(user => {
                const isToday =
                    user.anniversaryDate.toDateString() === today.toDateString();

                return {
                    ...user,
                    formattedDate: isToday
                        ? "Today 🎉"
                        : user.anniversaryDate.toLocaleDateString("en-IN", {
                            day: "numeric",
                            month: "long",
                        }),
                    isToday,
                };
            });

        return NextResponse.json({
            success: true,
            cardsinfo: {
                totalEmployees,
                approvedLeavesThisMonth,
                notificationsThisMonth,
                pendingLeaves
            },
            birthdayinfo: upcomingBirthdays ,
            anniversaryinfo: upcomingAnniversaries
        });

    } catch (error) {
        console.error(error);
        return NextResponse.json({ error: "Dashboard error" }, { status: 500 });
    }
}