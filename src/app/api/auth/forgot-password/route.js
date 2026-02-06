export const dynamic = "force-dynamic";
import { NextResponse } from "next/server";
import { PrismaClient } from "@/lib/generated/prisma";
import crypto from "crypto";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
const prisma = new PrismaClient();

export async function POST(request) {
  try {
    const { email } = await request.json();
    console.log("The requesyted Email:", email);

    const user = await prisma.user.findUnique({
      where: { email },
    });

    if (!user) {
      return NextResponse.json({ message: "User not found" }, { status: 404 });
    }

    if (user.status !== "ACTIVE") {
      return NextResponse.json({ message: "User account is inactive" }, { status: 403 });
    }

    // 🔐 Generate token
    const resetToken = crypto.randomBytes(32).toString("hex");
    const hashedToken = crypto.createHash("sha256").update(resetToken).digest("hex");
    const tokenExpiry = BigInt(Date.now() + 15 * 60 * 1000); // 15 minutes

    // ✅ Save hashed token + expiry in user table
    await prisma.user.update({
      where: { email },
      data: {
        resetPasswordToken: hashedToken,
        resetPasswordExpires: tokenExpiry,
      },
    });

    // 🔗 Create reset link (send raw token in URL)
    const resetLink = `${process.env.BASE_URL}/authentication/reset/reset-password/${resetToken}`;

    console.log("The reset link is ,", resetLink);

    // 📧 Send Email using Resend
    await resend.emails.send({
      from: "Crushaders Erp <noreply@odishabiz.com>",
      to: email,
      subject: "Password Reset Request",
      text: `Click the link below to reset your password:\n\n${resetLink}`,
    });

    return NextResponse.json({ message: "Email sent successfully" }, { status: 200 });
  } catch (error) {
    console.error("Error fetching users:", error);
    return NextResponse.json({ message: "Error fetching users" }, { status: 500 });
  }
}
