// app/api/users/[employeeId]/route.js

import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { verifyToken } from "@/lib/jwt";

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

    console.log("The emplyee id is", employeeId);

    const user = await prisma.user.findFirst({
      where: {
        employeeId: employeeId.trim(),
      },
      include: {
        financialDetails: true,
        department: true, // ✅ ADD THIS
        designation: true, // ✅ ADD THIS
      },
    });

    if (!user) {
      return NextResponse.json({ message: "User not found" }, { status: 404 });
    }

    const formattedUser = {
      ...user,
      password: undefined,
      resetPasswordToken: undefined,
      resetPasswordExpires: user.resetPasswordExpires ? user.resetPasswordExpires.toString() : null,
    };

    return NextResponse.json({
      success: true,
      user: formattedUser,
    });
  } catch (error) {
    console.error(error);
    return new Response("Error fetching user", { status: 500 });
  }
}
