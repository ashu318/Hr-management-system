import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { verifyToken } from "@/lib/jwt";


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

    const userId = decoded.userId;

    console.log("THE USERS ID", userId);
    console.log("THE ORG ID", decoded.organizationId);





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





