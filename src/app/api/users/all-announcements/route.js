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
    if (!decoded?.role) {
      return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
    }

    const userId = decoded.userId;



    let announcements;

    if (decoded.role === "HR" || decoded.role === "ADMIN") {

      // HR / ADMIN → all announcements in org
      announcements = await prisma.announcement.findMany({
        where: {
          organizationId: decoded.organizationId,
        },
        include: {
          createdBy: {
            select: {
              id: true,
              fullName: true,
              email: true,
              profileImageUrl: true,   // make sure your User model has this
              role: true,
            },
          },
        },
        orderBy: { createdAt: "desc" },
      });

    } else if (decoded.role === "EMPLOYEE") {

      // EMPLOYEE → only allowed ones
      announcements = await prisma.announcement.findMany({
        where: {
          organizationId: decoded.organizationId,
          OR: [
            { sendType: "ALL" },
            {
              recipients: {
                some: {
                  userId: decoded.userId,
                },
              },
            },
          ],
        },
        include: {
          createdBy: {
            select: {
              id: true,
              fullName: true,
              email: true,
              profileImageUrl: true,   // make sure your User model has this
              role: true,
            },
          },
        },
        orderBy: { createdAt: "desc" },
      });

    } else {
      return NextResponse.json({ message: "Unauthorized role" }, { status: 403 });
    }


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





