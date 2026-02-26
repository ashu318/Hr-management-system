import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { verifyToken } from "@/lib/jwt";
import cloudinary from "@/lib/cloudinary";

export async function POST(request, { params }) {
    try {
        const { employeeId } = params;

        // 🔐 1️⃣ AUTH CHECK
        const token = request.cookies.get("auth_token")?.value;
        if (!token) {
            return NextResponse.json(
                { message: "Unauthorized" },
                { status: 401 }
            );
        }

        const decoded = verifyToken(token);
        if (!decoded?.userId) {
            return NextResponse.json(
                { message: "Invalid token" },
                { status: 401 }
            );
        }

        if (decoded.role !== "ADMIN") {
            return NextResponse.json(
                { message: "Access denied. Admins only." },
                { status: 403 }
            );
        }

        const organizationId = decoded.organizationId;

        // 📦 2️⃣ GET FORM DATA
        const formData = await request.formData();

        const documentType = formData.get("documentType");
        const documentName = formData.get("documentName");
        const documentNumber = formData.get("documentNumber");
        const file = formData.get("file");

        if (!documentType) {
            return NextResponse.json(
                { message: "Document type is required" },
                { status: 400 }
            );
        }

        if (!file || file.size === 0) {
            return NextResponse.json(
                { message: "File is required" },
                { status: 400 }
            );
        }

        // 🚫 3️⃣ FILE VALIDATION
        const allowedTypes = [
            "application/pdf",
            "image/jpeg",
            "image/png",
            "image/jpg",
        ];

        if (!allowedTypes.includes(file.type)) {
            return NextResponse.json(
                { message: "Only PDF, JPG, PNG files are allowed" },
                { status: 400 }
            );
        }

        const maxSize = 5 * 1024 * 1024; // 5MB
        if (file.size > maxSize) {
            return NextResponse.json(
                { message: "File size must be under 5MB" },
                { status: 400 }
            );
        }

        // 👤 4️⃣ FIND USER (Organization Safe)
        const user = await prisma.user.findFirst({
            where: {
                employeeId,
                organizationId,
            },
        });

        if (!user) {
            return NextResponse.json(
                { message: "User not found" },
                { status: 404 }
            );
        }

        // 🚫 5️⃣ PREVENT DUPLICATE DOCUMENT TYPE
        const existingDocument = await prisma.userDocument.findFirst({
            where: {
                userId: user.id,
                organizationId,
                documentType,
            },
        });

        if (existingDocument) {
            return NextResponse.json(
                { message: "This document type is already uploaded" },
                { status: 400 }
            );
        }

        // ☁️ 6️⃣ UPLOAD TO CLOUDINARY
        const bytes = await file.arrayBuffer();
        const buffer = Buffer.from(bytes);

        const uploadResult = await new Promise((resolve, reject) => {
            cloudinary.uploader
                .upload_stream(
                    {
                        folder: `hrms/user-documents/${organizationId}/${employeeId}`,
                        resource_type: file.type === "application/pdf" ? "raw" : "image",
                    },
                    (error, result) => {
                        if (error) reject(error);
                        else resolve(result);
                    }
                )
                .end(buffer);
        });

        const fileUrl = uploadResult.secure_url;
        const publicId = uploadResult.public_id;

        // 💾 7️⃣ SAVE TO DATABASE
        const document = await prisma.userDocument.create({
            data: {
                userId: user.id,
                organizationId,
                documentType,
                documentName,
                documentNumber: documentNumber || null,
                fileUrl,
                filePublicId: publicId,
                fileType: file.type,
            },
        });

        return NextResponse.json({
            success: true,
            message: "Document uploaded successfully",
            document,
        });

    } catch (error) {
        console.error("Document upload error:", error);

        return NextResponse.json(
            {
                success: false,
                message: "Upload failed",
            },
            { status: 500 }
        );
    }
}

export async function GET(request, { params }) {
    try {
        const token = request.cookies.get("auth_token")?.value;
        if (!token) {
            return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
        }

        const decoded = verifyToken(token);
        if (!decoded?.userId) {
            return NextResponse.json({ message: "Invalid token" }, { status: 401 });
        }

        const { employeeId } = params;
        console.log("The empoyeeId is: ", employeeId);

        const user = await prisma.user.findFirst({
            where: { employeeId },
            include: {
                documents: true,
            },
        });

        if (!user) {
            return NextResponse.json({ message: "User not found" }, { status: 404 });
        }

        return NextResponse.json({
            success: true,
            documents: user.documents,
        });

    } catch (error) {
        console.error(error);
        return new Response("Error fetching documents", { status: 500 });
    }
}


