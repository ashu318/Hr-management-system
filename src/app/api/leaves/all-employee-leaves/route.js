export const dynamic = "force-dynamic";
import { NextResponse } from "next/server";
import { PrismaClient } from "@/lib/generated/prisma";
import { verifyToken } from "@/lib/jwt";

const prisma = new PrismaClient();

export async function GET(request) {
  try {
    // 🔐 Auth
    const token = request.cookies.get("auth_token")?.value;
    if (!token) {
      return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
    }

    const decoded = verifyToken(token);
    if (!decoded?.userId) {
      return NextResponse.json({ message: "Invalid token" }, { status: 401 });
    }

    // 👮 Role check
    if (decoded.role !== "EMPLOYEE") {
      return NextResponse.json({ message: "Unauthorized Access" }, { status: 403 });
    }

    // 📦 Fetch ALL employees leave applications
    const leaveApplications = await prisma.leaveApplication.findMany({
      orderBy: { createdAt: "desc" },
      include: {
        user: {
          select: {
            id: true,
            fullName: true,
            email: true,
          },
        },
      },
    });

    return NextResponse.json(
      {
        success: true,
        message: "Fetched all leave applications",
        leaveApplications,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("HR leave fetch error:", error);
    return NextResponse.json({ success: false, error: "Internal server error" }, { status: 500 });
  }
}
