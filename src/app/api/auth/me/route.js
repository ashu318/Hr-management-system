
import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";


export async function GET(req) {
    try {
        const token = req.cookies.get("auth_token")?.value;
        if (!token) {
            return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
        }
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        return NextResponse.json({
            user: {
                id: decoded.userId,
                role: decoded.role,
            },
        });
    } catch {
        return NextResponse.json({ user: null });
    }
}