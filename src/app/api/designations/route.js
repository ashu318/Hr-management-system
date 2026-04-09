import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { verifyToken } from "@/lib/jwt";

// 🔐 Common Auth Function


export async function POST(request) {
    try {
        const body = await request.json();
        const { name, title, departmentId } = body;

        if (!name || !title || !departmentId) {
            return NextResponse.json(
                { success: false, message: "All fields are required" },
                { status: 400 }
            );
        }

        const designation = await prisma.designation.create({
            data: {
                name,
                title,
                departmentId,
            },
        });

        return NextResponse.json({
            success: true,
            designation,
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
    try {
        const designations = await prisma.designation.findMany({
            include: {
                department: true, // 🔥 IMPORTANT for showing department name
            },
            orderBy: {
                createdAt: "desc",
            },
        });

        return NextResponse.json({
            success: true,
            designations,
        });
    } catch (error) {
        console.error(error);
        return NextResponse.json(
            { success: false, message: "Failed to fetch designations" },
            { status: 500 }
        );
    }
}