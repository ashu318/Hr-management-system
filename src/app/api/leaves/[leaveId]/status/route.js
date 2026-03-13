
import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { verifyToken } from "@/lib/jwt";
import { sendEmail } from "@/lib/email";



// =============================
// UPDATE LEAVE STATUS (ADMIN ONLY)
// =============================
export async function PATCH(request, { params }) {
    try {
        const token = request.cookies.get("auth_token")?.value;

        if (!token) {
            return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
        }

        const decoded = verifyToken(token);

        if (!decoded?.userId) {
            return NextResponse.json({ message: "Invalid token" }, { status: 401 });
        }

        const userId = decoded.userId;
        const userRole = decoded.role;
        const leaveId = params.leaveId;


        // 🔐 Only ADMIN allowed
        if (userRole !== "ADMIN") {
            return NextResponse.json(
                { success: false, message: "Access Denied - Admin Only" },
                { status: 403 }
            );
        }

        const { status } = await request.json();

        if (!status || !["APPROVED", "REJECTED", "PENDING"].includes(status)) {
            return NextResponse.json(
                { success: false, message: "Invalid status value" },
                { status: 400 }
            );
        }

        // 🔍 Check Leave Exists
        const leave = await prisma.leaveApplication.findUnique({
            where: { id: leaveId },
            include: {
                user: {
                    select: {
                        fullName: true,
                        email: true,
                    },
                },
            },
        });

        if (!leave) {
            return NextResponse.json(
                { success: false, message: "Leave not found" },
                { status: 404 }
            );
        }

        // ✅ Update Status
        const updatedLeave = await prisma.leaveApplication.update({
            where: { id: leaveId },
            data: { status },
        });

        const userEmail = leave.user.email;
        const userName = leave.user.fullName;

        let subject = "";
        let message = "";

        if (status === "APPROVED") {
            subject = "Your Leave Request Has Been Approved";
            message = `
  <!DOCTYPE html>
  <html>
  <body style="margin:0;padding:0;background:#eef1f7;font-family:'Segoe UI',Roboto,Arial,sans-serif;">

  <table width="100%" cellpadding="0" cellspacing="0" style="padding:40px 0;">
  <tr>
  <td align="center">

  <table width="620" cellpadding="0" cellspacing="0"
  style="background:#ffffff;border-radius:14px;overflow:hidden;
  box-shadow:0 12px 30px rgba(0,0,0,0.1);">

  <!-- Header -->
  <tr>
  <td style="background:#22c55e;padding:35px;text-align:center;color:white;">
  <h2 style="margin:0;">Leave Approved ✅</h2>
  <p style="margin:5px 0 0;">Crusharders HR System</p>
  </td>
  </tr>

  <!-- Body -->
  <tr>
  <td style="padding:40px;color:#2c2c2c;font-size:15px;line-height:1.6;">

  <p>Hello <strong>${userName}</strong>,</p>

  <p>Your leave request has been <strong style="color:#22c55e;">approved</strong>.</p>

  <table width="100%" cellpadding="10" style="background:#f5f7fc;border-radius:8px;margin-top:20px;">
  <tr>
  <td><strong>Leave Type</strong></td>
  <td>${leave.leaveType}</td>
  </tr>

  <tr>
  <td><strong>Start Date</strong></td>
  <td>${leave.startDate.toDateString()}</td>
  </tr>

  <tr>
  <td><strong>End Date</strong></td>
  <td>${leave.endDate.toDateString()}</td>
  </tr>
  </table>

  <br/>

  <div style="text-align:center;margin-top:25px;">
  <a href="https://dashboard.yoursite.com/leaves"
  style="background:#3454d1;color:#fff;text-decoration:none;padding:12px 26px;border-radius:6px;font-weight:bold;">
  View Dashboard
  </a>
  </div>

  </td>
  </tr>

  <!-- Footer -->
  <tr>
  <td style="background:#f5f7fc;padding:15px;text-align:center;font-size:12px;color:#777;">
  © ${new Date().getFullYear()} Crusharders. All rights reserved.
  </td>
  </tr>

  </table>

  </td>
  </tr>
  </table>

  </body>
  </html>
  `;
        }

        if (status === "REJECTED") {
            subject = "Your Leave Request Has Been Rejected";
            message = `
  <!DOCTYPE html>
  <html>
  <body style="margin:0;padding:0;background:#eef1f7;font-family:'Segoe UI',Roboto,Arial,sans-serif;">

  <table width="100%" cellpadding="0" cellspacing="0" style="padding:40px 0;">
  <tr>
  <td align="center">

  <table width="620" cellpadding="0" cellspacing="0"
  style="background:#ffffff;border-radius:14px;overflow:hidden;
  box-shadow:0 12px 30px rgba(0,0,0,0.1);">

  <!-- Header -->
  <tr>
  <td style="background:#ef4444;padding:35px;text-align:center;color:white;">
  <h2 style="margin:0;">Leave Rejected ❌</h2>
  <p style="margin:5px 0 0;">Crusharders HR System</p>
  </td>
  </tr>

  <!-- Body -->
  <tr>
  <td style="padding:40px;color:#2c2c2c;font-size:15px;line-height:1.6;">

  <p>Hello <strong>${userName}</strong>,</p>

  <p>Your leave request has been <strong style="color:#ef4444;">rejected</strong>.</p>

  <table width="100%" cellpadding="10" style="background:#f5f7fc;border-radius:8px;margin-top:20px;">
  <tr>
  <td><strong>Leave Type</strong></td>
  <td>${leave.leaveType}</td>
  </tr>

  <tr>
  <td><strong>Start Date</strong></td>
  <td>${leave.startDate.toDateString()}</td>
  </tr>

  <tr>
  <td><strong>End Date</strong></td>
  <td>${leave.endDate.toDateString()}</td>
  </tr>
  </table>

  <br/>

  <div style="text-align:center;margin-top:25px;">
  <a href="https://dashboard.yoursite.com/leaves"
  style="background:#3454d1;color:#fff;text-decoration:none;padding:12px 26px;border-radius:6px;font-weight:bold;">
  View Dashboard
  </a>
  </div>

  </td>
  </tr>

  <!-- Footer -->
  <tr>
  <td style="background:#f5f7fc;padding:15px;text-align:center;font-size:12px;color:#777;">
  © ${new Date().getFullYear()} Crusharders. All rights reserved.
  </td>
  </tr>

  </table>

  </td>
  </tr>
  </table>

  </body>
  </html>
  `;
        }

        if (status !== "PENDING") {
            await sendEmail({
                to: userEmail,
                subject,
                html: message,
            });
        }



        return NextResponse.json(
            {
                success: true,
                message: "Leave status updated successfully",
                leave: updatedLeave,
            },
            { status: 200 }
        );
    } catch (error) {
        console.error("Update Status Error:", error);

        return NextResponse.json(
            { success: false, message: "Internal server error" },
            { status: 500 }
        );
    }
}