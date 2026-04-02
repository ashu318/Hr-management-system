export const dynamic = "force-dynamic";

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
        if (!decoded) {
            return NextResponse.json({ message: "Invalid token" }, { status: 401 });
        }

        if (decoded.role !== "ADMIN") {
            return NextResponse.json({ message: "Unauthorized Access" }, { status: 403 });
        }

        const orgId = decoded.organizationId;

        // 🔥 SINGLE QUERY (instead of 3 groupBy)
        const users = await prisma.user.findMany({
            where: {
                organizationId: orgId,
                isDeleted: false,
            },
            select: {
                department: true,
                employmentType: true,
                status: true,
            },
        });

        // 🔥 Reusable grouping function
        const groupCount = (data, key) => {
            return Object.values(
                data.reduce((acc, item) => {
                    const value = item[key] || "Unknown";

                    if (!acc[value]) {
                        acc[value] = { name: value, value: 0 };
                    }

                    acc[value].value += 1;

                    return acc;
                }, {})
            );
        };

        // 🔥 Build response
        const department = groupCount(users, "department");
        const employmentType = groupCount(users, "employmentType");
        const status = groupCount(users, "status");

        return NextResponse.json({
            department,
            employmentType,
            status,
        });

    } catch (error) {
        console.error(error);
        return NextResponse.json(
            { message: "Charts API error" },
            { status: 500 }
        );
    }
}