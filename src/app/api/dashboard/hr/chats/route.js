export const dynamic = "force-dynamic";
import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { verifyToken } from "@/lib/jwt";


export async function GET(request) {
    try {
        const token = request.cookies.get("auth_token")?.value;
        if (!token)
            return NextResponse.json({ message: "Unauthorized" }, { status: 401 });

        const decoded = verifyToken(token);
        if (!decoded)
            return NextResponse.json({ message: "Invalid token" }, { status: 401 });

        if (decoded.role !== "ADMIN") {
            return NextResponse.json({ message: "Unauthorized Access" }, { status: 403 });
        }

        const orgId = decoded.organizationId;
        // Department
        const dept = await prisma.user.groupBy({
            by: ["department"],
            _count: { id: true },
        });

        const department = dept.map(d => ({
            name: d.department || "Unknown",
            value: d._count.id,
        }));

        // Employment Type
        const empType = await prisma.user.groupBy({
            by: ["employmentType"],
            _count: { id: true },
        });

        const employmentType = empType.map(e => ({
            name: e.employmentType || "Unknown",
            value: e._count.id,
        }));

        // Status
        const statusData = await prisma.user.groupBy({
            by: ["status"],
            _count: { id: true },
        });

        const status = statusData.map(s => ({
            name: s.status,
            value: s._count.id,
        }));

        return Response.json({
            department,
            employmentType,
            status,
        });

    } catch (error) {
        return NextResponse.json({ message: error.message }, { status: 500 });
    }
}