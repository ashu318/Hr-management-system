import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function DELETE(request, { params }) {
    try {
        const { id } = params;

        await prisma.designation.delete({
            where: { id },
        });

        return NextResponse.json({
            success: true,
            message: "Deleted successfully",
        });
    } catch (error) {
        console.error(error);
        return NextResponse.json(
            { success: false, message: "Delete failed" },
            { status: 500 }
        );
    }
}