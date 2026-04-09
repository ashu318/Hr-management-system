export const dynamic = "force-dynamic";

import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { verifyToken } from "@/lib/jwt";

export async function GET(request) {
    try {
        // 🔐 Auth
        const token = request.cookies.get("auth_token")?.value;
        if (!token) {
            return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
        }

        const decoded = verifyToken(token);
        if (!decoded) {
            return NextResponse.json({ message: "Invalid token" }, { status: 401 });
        }

        if (decoded.role !== "ADMIN") {
            return NextResponse.json({ message: "Unauthorized Access" }, { status: 403 });
        }

        const orgId = decoded.organizationId;

        // 🔥 SINGLE USERS QUERY (reuse everywhere)
        const users = await prisma.user.findMany({
            where: {
                organizationId: orgId,
                isDeleted: false,
            },
            select: {
                id: true,
                fullName: true,
                dateOfBirth: true,
                dateOfJoining: true,
                profileImageUrl: true,
                employeeId: true,
                department: true,
                employmentType: true,
                status: true,
            },
        });


        // ✅ Sequential queries (SAFE for DB)

        const approvedLeavesThisMonth = await prisma.leaveApplication.count({
            where: {
                status: "APPROVED",
                user: { organizationId: orgId },
            },
        });

        const notificationsThisMonth = await prisma.announcement.count({
            where: { organizationId: orgId },
        });

        const pendingLeaves = await prisma.leaveApplication.count({
            where: {
                status: "PENDING",
                user: { organizationId: orgId },
            },
        });

        // 🔥 TOTAL EMPLOYEES (no extra query)
        const totalEmployees = users.length;

        // =========================
        // 🎂 DATE LOGIC
        // =========================
        const today = new Date();
        today.setHours(0, 0, 0, 0);

        // 🎂 Birthdays
        const upcomingBirthdays = users
            .filter((u) => u.dateOfBirth)
            .map((user) => {
                const dob = new Date(user.dateOfBirth);

                let nextBirthday = new Date(
                    today.getFullYear(),
                    dob.getMonth(),
                    dob.getDate()
                );

                if (nextBirthday < today) {
                    nextBirthday.setFullYear(today.getFullYear() + 1);
                }

                return { ...user, birthdayDate: nextBirthday };
            })
            .sort((a, b) => a.birthdayDate - b.birthdayDate)
            .slice(0, 5)
            .map((user) => {
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

        // 🎉 Anniversaries
        const upcomingAnniversaries = users
            .filter((u) => u.dateOfJoining)
            .map((user) => {
                const doj = new Date(user.dateOfJoining);

                let nextAnniversary = new Date(
                    today.getFullYear(),
                    doj.getMonth(),
                    doj.getDate()
                );

                if (nextAnniversary < today) {
                    nextAnniversary.setFullYear(today.getFullYear() + 1);
                }

                let yearsCompleted = today.getFullYear() - doj.getFullYear();
                if (nextAnniversary > today) {
                    yearsCompleted--;
                }

                return {
                    ...user,
                    anniversaryDate: nextAnniversary,
                    yearsCompleted: yearsCompleted < 0 ? 0 : yearsCompleted,
                };
            })
            .sort((a, b) => a.anniversaryDate - b.anniversaryDate)
            .slice(0, 4)
            .map((user) => {
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

        // =========================
        // 📊 CHARTS (NO groupBy)
        // =========================
        const groupCount = (data, key) => {
            return Object.values(
                data.reduce((acc, item) => {
                    let value = item[key];

                    // 🔥 FIX: handle object (department relation)
                    if (value && typeof value === "object") {
                        value = value.name;
                    }

                    value = value || "Unknown";

                    if (!acc[value]) {
                        acc[value] = { name: value, value: 0 };
                    }

                    acc[value].value += 1;

                    return acc;
                }, {})
            );
        };
        const charts = {
            department: groupCount(users, "department"),
            employmentType: groupCount(users, "employmentType"),
            status: groupCount(users, "status"),
        };

        // =========================
        // 🚀 FINAL RESPONSE
        // =========================
        return NextResponse.json({
            success: true,
            cardsinfo: {
                totalEmployees,
                approvedLeavesThisMonth,
                notificationsThisMonth,
                pendingLeaves,
            },
            birthdayinfo: upcomingBirthdays,
            anniversaryinfo: upcomingAnniversaries,
            charts, // 🔥 merged charts API
        });

    } catch (error) {
        console.error(error);
        return NextResponse.json(
            { error: "Dashboard error" },
            { status: 500 }
        );
    }
}