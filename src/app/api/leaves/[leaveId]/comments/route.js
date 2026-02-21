import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { verifyToken } from "@/lib/jwt";



// =============================
// POST COMMENTS
// =============================
export async function POST(request, { params }) {
    try {
        const token = request.cookies.get("auth_token")?.value;

        if (!token) {
            return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
        }

        const decoded = verifyToken(token);

        if (!decoded?.userId) {
            return NextResponse.json({ message: "Invalid token" }, { status: 401 });
        }

        const userId = decoded.userId;
        const userRole = decoded.role;
        const leaveId = params.leaveId;

        const { message } = await request.json();

        if (!message?.trim()) {
            return NextResponse.json(
                { message: "Message is required" },
                { status: 400 }
            );
        }

        const leave = await prisma.leaveApplication.findUnique({
            where: { id: leaveId },
        });

        if (!leave) {
            return NextResponse.json(
                { message: "Leave not found" },
                { status: 404 }
            );
        }

        if (leave.userId !== userId && userRole !== "ADMIN") {
            return NextResponse.json(
                { message: "Not allowed" },
                { status: 403 }
            );
        }

        // ✅ IMPORTANT: include user
        const comment = await prisma.leaveComment.create({
            data: {
                leaveId,
                userId,
                message,
            },
            include: {
                user: {
                    select: {
                        fullName: true,
                    },
                },
            },
        });

        return NextResponse.json({ comment }, { status: 201 });

    } catch (error) {
        console.error("Error adding comment:", error);
        return NextResponse.json(
            { message: "Internal server error" },
            { status: 500 }
        );
    }
}





// =============================
// GET COMMENTS
// =============================
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

        const userId = decoded.userId;
        const userRole = decoded.role;
        const leaveId = params.leaveId;

        // 🔍 Check leave exists and include user info
        const leave = await prisma.leaveApplication.findUnique({
            where: { id: leaveId },
            include: { user: true }, // ✅ important to include user
        });

        if (!leave) {
            return NextResponse.json(
                { message: "Leave not found" },
                { status: 404 }
            );
        }

        // 🔐 Permission check
        if (leave.userId !== userId && userRole !== "ADMIN") {
            return NextResponse.json(
                { message: "You are not allowed to view comments" },
                { status: 403 }
            );
        }

        // 💬 Get comments
        const comments = await prisma.leaveComment.findMany({
            where: { leaveId },
            include: {
                user: {
                    select: {
                        fullName: true,
                        profileImageUrl: true,
                    },
                },
            },
            orderBy: {
                createdAt: "asc",
            },
        });

        // 📝 Include initial leave note as the first comment
        const initialNote = leave.reason
            ? [
                {
                    id: `leave-note-${leave.id}`, // temporary unique ID
                    leaveId: leave.id,
                    userId: leave.userId,
                    message: leave.reason,
                    createdAt: leave.createdAt,
                    user: {
                        fullName: leave.user.fullName,
                        profileImageUrl: leave.user.profileImageUrl,
                    },
                    isInitialNote: true, // optional flag for frontend
                },
            ]
            : [];

        const allComments = [...initialNote, ...comments];



        return NextResponse.json({
            success: true,
            comments: allComments,
        });

    } catch (error) {
        console.error("Error fetching comments:", error);
        return NextResponse.json(
            { success: false, message: "Internal server error" },
            { status: 500 }
        );
    }
}