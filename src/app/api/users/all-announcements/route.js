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
    if (!decoded?.role || decoded.role !== "EMPLOYEE") {
      return NextResponse.json({ message: "Restricted Access - Admin Only" }, { status: 401 });
    }

    const announcements = await prisma.announcement.findMany();

    return NextResponse.json(
      {
        success: true,
        message: "Announcements fetched successfully",
        announcements,
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        message: error.message || "Failed to fetch announcements",
      },
      { status: 500 }
    );
  }
}
