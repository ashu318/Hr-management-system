import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { verifyToken } from "@/lib/jwt";

// POST /api/department

export async function POST(request) {
    try {
        const body = await request.json();
        const { name } = body;

        if (!name) {
            return NextResponse.json(
                { success: false, message: "Department name is required" },
                { status: 400 }
            );
        }

        const department = await prisma.department.create({
            data: {
                name,
            },
        });

        return NextResponse.json({
            success: true,
            department,
        });
    } catch (error) {
        console.error(error);
        return NextResponse.json(
            { success: false, message: "Something went wrong" },
            { status: 500 }
        );
    }
}

export async function GET() {
    const departments = await prisma.department.findMany();

    return NextResponse.json({
        success: true,
        departments,
    });
}