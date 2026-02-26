
import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { verifyToken } from "@/lib/jwt";
import cloudinary from "@/lib/cloudinary";

export async function DELETE(request, { params }) {
    try {
        const token = request.cookies.get("auth_token")?.value;
        if (!token) return NextResponse.json({ message: "Unauthorized" }, { status: 401 });

        const decoded = verifyToken(token);
        if (!decoded?.userId) return NextResponse.json({ message: "Invalid token" }, { status: 401 });

        if (decoded.role !== "ADMIN") {
            return NextResponse.json({ message: "Access denied. Admins only." }, { status: 403 });
        }

        const { documentId } = params;
        if (!documentId) return NextResponse.json({ message: "Document ID is required" }, { status: 400 });

        // 🔍 Find the document
        const document = await prisma.userDocument.findUnique({
            where: { id: documentId },
        });

        if (!document) return NextResponse.json({ message: "Document not found" }, { status: 404 });

        // ☁️ Delete from Cloudinary
        if (document.filePublicId) {
            await cloudinary.uploader.destroy(document.filePublicId, {
                resource_type: document.fileType === "application/pdf" ? "raw" : "image",
            });
        }

        // 💾 Delete from database
        await prisma.userDocument.delete({
            where: { id: documentId },
        });

        return NextResponse.json({
            success: true,
            message: "Document deleted from DB & Cloudinary successfully",
        });

    } catch (error) {
        console.error("Document delete error:", error);
        return NextResponse.json({ success: false, message: "Delete failed" }, { status: 500 });
    }
}