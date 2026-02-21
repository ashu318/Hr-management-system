import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { verifyToken } from "@/lib/jwt";

// =============================
// UPDATE LEAVE STATUS (ADMIN ONLY)
// =============================
export async function PATCH(request, { params }) {
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


        // 🔐 Only ADMIN allowed
        if (userRole !== "ADMIN") {
            return NextResponse.json(
                { success: false, message: "Access Denied - Admin Only" },
                { status: 403 }
            );
        }

        const { status } = await request.json();

        if (!status || !["APPROVED", "REJECTED", "PENDING"].includes(status)) {
            return NextResponse.json(
                { success: false, message: "Invalid status value" },
                { status: 400 }
            );
        }

        // 🔍 Check Leave Exists
        const leave = await prisma.leaveApplication.findUnique({
            where: { id: leaveId },
        });

        if (!leave) {
            return NextResponse.json(
                { success: false, message: "Leave not found" },
                { status: 404 }
            );
        }

        // ✅ Update Status
        const updatedLeave = await prisma.leaveApplication.update({
            where: { id: leaveId },
            data: { status },
        });

        return NextResponse.json(
            {
                success: true,
                message: "Leave status updated successfully",
                leave: updatedLeave,
            },
            { status: 200 }
        );
    } catch (error) {
        console.error("Update Status Error:", error);

        return NextResponse.json(
            { success: false, message: "Internal server error" },
            { status: 500 }
        );
    }
}