
import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { verifyToken } from "@/lib/jwt";
import { sendEmail } from "@/lib/email";

export async function POST(request) {
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

    // 📩 Request body
    const { leaveType, startDate, endDate, reason } = await request.json();

    // ✅ Validation 1
    if (!leaveType || !startDate || !endDate || !reason) {
      return NextResponse.json({ message: "All fields are required" }, { status: 400 });
    }

    const start = new Date(startDate);
    const end = new Date(endDate);

    // ✅ Validation 2
    if (isNaN(start) || isNaN(end) || end < start) {
      return NextResponse.json({ message: "Invalid date range" }, { status: 400 });
    }

    // 📅 Calculate days
    const dayCount = Math.ceil((end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24)) + 1;



    // // 🔍 Fetch leave balance
    const leaveBalance = await prisma.leaveBalance.findUnique({
      where: {
        userId_leaveType_year: {
          userId,
          leaveType,
          year: start.getFullYear(),
        },
      },
    });

    // console.log("LEAVE BALANCE", leaveBalance);


    if (!leaveBalance) {
      return NextResponse.json({ message: "Leave type not assigned to user" }, { status: 400 });
    }

    if (dayCount > leaveBalance.remaining) {
      return NextResponse.json(
        { message: "Insufficient leave balance" },
        { status: 400 }
      );
    }


    // 🔥 Transaction
    const [application] = await prisma.$transaction([
      prisma.leaveApplication.create({
        data: {
          userId,
          leaveType,
          startDate: start,
          endDate: end,
          reason,
          status: "PENDING",
        },
      }),
      prisma.leaveBalance.update({
        where: {
          userId_leaveType_year: {
            userId,
            leaveType,
            year: start.getFullYear(),
          },
        },
        data: {
          used: {
            increment: dayCount,
          },
          remaining: {
            decrement: dayCount,
          },
        },
      }),
    ]);



    // NEW CODE START
    const user = await prisma.user.findUnique({
      where: { id: userId },
      select: { fullName: true, email: true },
    });

    const adminEmail = "shitansu.cts1025@gmail.com";
    await sendEmail({
      to: adminEmail,
      subject: "New Leave Application",
      html: `
  <!DOCTYPE html>
  <html>
  <body style="margin:0;padding:0;background:#f4f6fb;font-family:Arial,sans-serif;">

  <table width="100%" cellpadding="0" cellspacing="0" style="padding:40px 0;">
  <tr>
  <td align="center">

  <table width="600" style="background:#ffffff;border-radius:12px;overflow:hidden;box-shadow:0 8px 20px rgba(0,0,0,0.1);">

  <!-- Header -->
  <tr>
  <td style="background:#3454d1;color:#fff;padding:30px;text-align:center;">
  <h2 style="margin:0;">New Leave Application</h2>
  <p style="margin:5px 0 0;">Crusharders HR System</p>
  </td>
  </tr>

  <!-- Body -->
  <tr>
  <td style="padding:30px;color:#333;font-size:15px;line-height:1.6;">

  <p>Hello Admin,</p>

  <p>A new leave request has been submitted.</p>

  <table width="100%" cellpadding="8" style="background:#f8f9fc;border-radius:8px;">
  <tr>
  <td><strong>Employee</strong></td>
  <td>${user.fullName}</td>
  </tr>

  <tr>
  <td><strong>Leave Type</strong></td>
  <td>${leaveType}</td>
  </tr>

  <tr>
  <td><strong>Start Date</strong></td>
  <td>${startDate}</td>
  </tr>

  <tr>
  <td><strong>End Date</strong></td>
  <td>${endDate}</td>
  </tr>

  <tr>
  <td><strong>Reason</strong></td>
  <td>${reason}</td>
  </tr>
  </table>

  <br/>

  <div style="text-align:center;">
  <a href="https://testctsl.in/leaves/list"
  style="background:#3454d1;color:#fff;text-decoration:none;padding:12px 24px;border-radius:6px;display:inline-block;font-weight:bold;">
  View Leave Request
  </a>
  </div>

  </td>
  </tr>

  <!-- Footer -->
  <tr>
  <td style="background:#f1f3f9;padding:15px;text-align:center;font-size:12px;color:#777;">
  © ${new Date().getFullYear()} Crusharders. All rights reserved.
  </td>
  </tr>

  </table>

  </td>
  </tr>
  </table>

  </body>
  </html>
  `,
    });
    await sendEmail({
      to: user.email,
      subject: "Leave Request Submitted",
      html: `
<!DOCTYPE html>
<html>
<body style="margin:0;padding:0;background:#f4f6fb;font-family:Arial,sans-serif;">

<table width="100%" cellpadding="0" cellspacing="0" style="padding:40px 0;">
<tr>
<td align="center">

<table width="600" style="background:#ffffff;border-radius:12px;overflow:hidden;box-shadow:0 8px 20px rgba(0,0,0,0.1);">

<!-- Header -->
<tr>
<td style="background:#3454d1;color:#fff;padding:30px;text-align:center;">
<h2 style="margin:0;">Leave Request Submitted</h2>
<p style="margin:5px 0 0;">Crusharders HR System</p>
</td>
</tr>

<!-- Body -->
<tr>
<td style="padding:30px;color:#333;font-size:15px;line-height:1.6;">

<p>Hello <strong>${user.fullName}</strong>,</p>

<p>Your leave request has been successfully submitted and is currently under review.</p>

<table width="100%" cellpadding="8" style="background:#f8f9fc;border-radius:8px;">
<tr>
<td><strong>Leave Type</strong></td>
<td>${leaveType}</td>
</tr>

<tr>
<td><strong>Start Date</strong></td>
<td>${startDate}</td>
</tr>

<tr>
<td><strong>End Date</strong></td>
<td>${endDate}</td>
</tr>

<tr>
<td><strong>Reason</strong></td>
<td>${reason}</td>
</tr>

<tr>
<td><strong>Status</strong></td>
<td style="color:#e67e22;font-weight:bold;">Pending Approval</td>
</tr>
</table>

<br/>

<div style="text-align:center;">
<a href="https://testctsl.in/leaves/list"
style="background:#3454d1;color:#fff;text-decoration:none;padding:12px 24px;border-radius:6px;display:inline-block;font-weight:bold;">
View My Leave Requests
</a>
</div>

</td>
</tr>

<!-- Footer -->
<tr>
<td style="background:#f1f3f9;padding:15px;text-align:center;font-size:12px;color:#777;">
© ${new Date().getFullYear()} Crusharders. All rights reserved.
</td>
</tr>

</table>

</td>
</tr>
</table>

</body>
</html>
`,
    });
    // NEW CODE END


    // console.log("LEAVE APPLICATION", application);


    return NextResponse.json(
      {
        success: true,
        message: "Leave applied successfully",
        application,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error applying leave:", error);
    return NextResponse.json({ success: false, error: "Internal server error" }, { status: 500 });
  }
}






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

    // 🔍 Fetch leave balance
    const allLeaveApplictaions = await prisma.leaveApplication.findMany({
      where: {
        userId,
      },
      include: {
        user: {
          select: {
            id: true,
            fullName: true,
            email: true,
            profileImageUrl: true,
          },
        },
      },
      orderBy: {
        createdAt: "desc",
      },
    });

    return NextResponse.json(
      {
        success: true,
        message: "Fetched leave balance successfully",
        allLeaveApplictaions,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error fetching leave balance:", error);
    return NextResponse.json({ success: false, error: "Internal server error" }, { status: 500 });
  }
}










