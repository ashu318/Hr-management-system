import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { verifyToken } from "@/lib/jwt";

export async function POST(request) {
  try {
    // 1️⃣ Validate token
    const token = request.cookies.get("auth_token")?.value;
    if (!token) return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
    const decoded = verifyToken(token);
    if (!decoded) return NextResponse.json({ message: "Invalid token" }, { status: 401 });

    const data = await request.json();
    console.log("Received holiday data:", data);

    const holidayDate = new Date(data.date);

    const newHoliday = await prisma.holiday.create({
      data: {
        name: data.name,
        date: holidayDate,
        day: holidayDate.toLocaleDateString("en-IN", {
          weekday: "long",
        }),
        year: holidayDate.getFullYear(),
        type: data.type,
        description: data.description || null,

        // If org-based differe for diff org
        organizationId: "ctsl_2026",
      },
    });

    return NextResponse.json(
      {
        success: true,
        message: "Holiday created successfully",
        holidayId: newHoliday.id,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Create holiday error:", error);

    // Duplicate holiday (same date + org)
    if (error.code === "P2002") {
      return NextResponse.json(
        {
          success: false,
          message: "Holiday already exists for this date",
        },
        { status: 409 }
      );
    }

    return NextResponse.json(
      {
        success: false,
        message: error.message || "Failed to create holiday",
      },
      { status: 500 }
    );
  }
}

export async function GET(request) {
  try {
    const token = request.cookies.get("auth_token")?.value;
    if (!token)
      return NextResponse.json({ message: "Unauthorized" }, { status: 401 });

    const decoded = verifyToken(token);
    if (!decoded)
      return NextResponse.json({ message: "Invalid token" }, { status: 401 });

    const holidaysLists = await prisma.holiday.findMany({
      include: {
        organization: true,
      },
    });

    const today = new Date();

    // Separate upcoming and expired
    const upcoming = holidaysLists
      .filter(h => new Date(h.date) >= today)
      .sort((a, b) => new Date(a.date) - new Date(b.date));

    const expired = holidaysLists
      .filter(h => new Date(h.date) < today)
      .sort((a, b) => new Date(a.date) - new Date(b.date));

    const finalList = [...upcoming, ...expired];

    return NextResponse.json({
      success: true,
      holidaysList: finalList,
    });

  } catch (error) {
    console.error("Error fetching holidays:", error);
    return new Response(
      JSON.stringify({
        success: false,
        error: "Failed to fetch holidays",
      }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}
