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

    const userId = decoded.userId;

    const user = await prisma.user.findUnique({
      where: { id: userId },
      include: { organization: true },
    });

    return NextResponse.json({
      success: true,
      user: user,
    });
  } catch (error) {
    console.error("Error fetching users:", error);
    return new Response("Error fetching users", { status: 500 });
  }
}
