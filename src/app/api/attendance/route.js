
import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { verifyToken } from "@/lib/jwt";


export async function POST(request) {
    try {
        const token = request.cookies.get("auth_token")?.value;
        if (!token) {
            return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
        }

        const decoded = verifyToken(token);
        if (!decoded?.userId) {
            return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
        }

        const today = new Date();
        today.setHours(0, 0, 0, 0);

        // Check existing record
        const existing = await prisma.attendance.findUnique({
            where: {
                userId_date: {
                    userId: decoded.userId,
                    date: today,
                },
            },
        });

        if (existing?.punchIn) {
            return NextResponse.json(
                { message: "Already punched in today" },
                { status: 400 }
            );
        }

        const attendance = await prisma.attendance.create({
            data: {
                userId: decoded.userId,
                organizationId: decoded.organizationId,
                date: today,
                punchIn: new Date(),
                status: "INCOMPLETE",
            },
        });

        return NextResponse.json(
            {
                success: true,
                message: "Punch in successful",
                attendance,
            },
            { status: 201 }
        );
    } catch (error) {
        return NextResponse.json(
            {
                success: false,
                message: error.message || "Punch in failed",
            },
            { status: 500 }
        );
    }
}


export async function GET(request) {
    try {
        // 🔐 Auth
        const token = request.cookies.get("auth_token")?.value;
        if (!token) {
            return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
        }

        const decoded = verifyToken(token);
        if (!decoded?.userId) {
            return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
        }

        const today = new Date();
        today.setHours(0, 0, 0, 0); // store only date part

        const attendance = await prisma.attendance.findUnique({
            where: {
                userId_date: {
                    userId: decoded.userId,
                    date: today,
                },
            },
        });

        return NextResponse.json(
            {
                success: true,
                attendance: attendance || null,
            },
            { status: 200 }
        );
    } catch (error) {
        return NextResponse.json(
            {
                success: false,
                message: error.message || "Failed to fetch attendance",
            },
            { status: 500 }
        );
    }
}


export async function PUT(request) {
    try {
        const token = request.cookies.get("auth_token")?.value;
        if (!token) {
            return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
        }

        const decoded = verifyToken(token);
        if (!decoded?.userId) {
            return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
        }

        const today = new Date();
        today.setHours(0, 0, 0, 0);

        const attendance = await prisma.attendance.findUnique({
            where: {
                userId_date: {
                    userId: decoded.userId,
                    date: today,
                },
            },
        });

        if (!attendance || !attendance.punchIn) {
            return NextResponse.json(
                { message: "You have not punched in today" },
                { status: 400 }
            );
        }

        if (attendance.punchOut) {
            return NextResponse.json(
                { message: "Already punched out" },
                { status: 400 }
            );
        }

        const totalMinutes = Math.floor(
            (new Date().getTime() - attendance.punchIn.getTime()) / 1000 / 60
        );

        const updated = await prisma.attendance.update({
            where: { id: attendance.id },
            data: {
                punchOut: new Date(),
                totalMinutes,
                status: "PRESENT",
            },
        });

        return NextResponse.json(
            {
                success: true,
                message: "Punch out successful",
                attendance: updated,
            },
            { status: 200 }
        );
    } catch (error) {
        return NextResponse.json(
            {
                success: false,
                message: error.message || "Punch out failed",
            },
            { status: 500 }
        );
    }
}