export const dynamic = "force-dynamic";

import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { verifyToken } from "@/lib/jwt";
import { BsGlobeAsiaAustralia } from "react-icons/bs";



export async function GET(request) {
  try {
    // 1️⃣ Validate token
    const token = request.cookies.get("auth_token")?.value;
    if (!token) return NextResponse.json({ message: "Unauthorized" }, { status: 401 });

    const decoded = verifyToken(token);
    if (!decoded) return NextResponse.json({ message: "Invalid token" }, { status: 401 });

    const userId = decoded.userId; // make sure your token has userId
    const currentYear = new Date().getFullYear();

    // 2️⃣ Fetch Leave Balances (Current Year Only)
    const leaveBalances = await prisma.leaveBalance.findMany({
      where: {
        userId,
        year: currentYear,
      },
      select: {
        leaveType: true,
        allocated: true,
        used: true,
        remaining: true,
        year: true,
      },
      orderBy: {
        leaveType: "asc",
      },
    });


    return NextResponse.json({
      success: true,
      leaveBalances
    });
  } catch (error) {
    console.error("Error fetching users:", error);
    return new Response(
      JSON.stringify({
        success: false,
        error: "Failed to fetch users",
      }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}
