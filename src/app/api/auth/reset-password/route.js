export const dynamic = "force-dynamic";

import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import crypto from "crypto";
import { PrismaClient } from "@/lib/generated/prisma";

const prisma = new PrismaClient();

export async function POST(request) {
  try {
    const { token, password, confirmpassword } = await request.json();

    // console.log(token, password, confirmpassword);

    // 1️⃣ Basic validation
    if (!token || !password || !confirmpassword) {
      return NextResponse.json({ message: "Missing required fields" }, { status: 400 });
    }

    if (password !== confirmpassword) {
      return NextResponse.json({ message: "Passwords do not match" }, { status: 400 });
    }

    if (password.length < 8) {
      return NextResponse.json(
        { message: "Password must be at least 8 characters" },
        { status: 400 }
      );
    }

    // 2️⃣ Hash incoming token (same way as stored)
    const hashedToken = crypto.createHash("sha256").update(token).digest("hex");

    // 3️⃣ Find valid user by token + expiry
    const user = await prisma.user.findFirst({
      where: {
        resetPasswordToken: hashedToken,
        resetPasswordExpires: {
          gt: BigInt(Date.now()), // token not expired
        },
        isDeleted: false,
        status: "ACTIVE",
      },
    });

    if (!user) {
      return NextResponse.json({ message: "Reset link is invalid or expired" }, { status: 400 });
    }

    // 4️⃣ Hash new password
    const hashedPassword = await bcrypt.hash(password, 12);

    // 5️⃣ Update password & clear reset fields
    await prisma.user.update({
      where: { id: user.id },
      data: {
        password: hashedPassword,
        resetPasswordToken: null,
        resetPasswordExpires: null,
        lastLoginAt: null, // optional
      },
    });

    return NextResponse.json({
      success: true,
      message: "Password reset successfully",
    });
  } catch (error) {
    console.error("RESET PASSWORD ERROR:", error);
    return NextResponse.json({ message: "Something went wrong" }, { status: 500 });
  }
}
