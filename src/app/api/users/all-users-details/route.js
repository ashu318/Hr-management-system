import { NextResponse } from "next/server";
import { PrismaClient, Role } from "../../../../lib/generated/prisma";
// import { PrismaClient, Role } from "@/lib/generated/prisma";
import bcrypt from "bcryptjs";
import { verifyToken } from "@/lib/jwt";
import { Resend } from "resend";

const prisma = new PrismaClient();
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
  try {
    const data = await request.json();

    // console.log("Received user data:", data);

    // 🔐 Default password
    const hashedPassword = await bcrypt.hash("1111", 10);

    const newUser = await prisma.user.create({
      data: {
        // =====================
        // Auth
        // =====================
        email: data.email,
        password: hashedPassword,
        role: Role.EMPLOYEE,

        // =====================
        // Employee Core
        // =====================
        employeeId: data.employeeId,
        fullName: data.fullName,
        phone: data.phone,
        designation: data.designation,
        department: data.department || null,
        employmentType: data.employmentType || null,
        workLocation: data.workLocation || null,
        dateOfJoining: new Date(data.dateOfJoining),

        // =====================
        // Personal Details
        // =====================
        gender: data.gender || null,
        dateOfBirth: data.dateOfBirth ? new Date(data.dateOfBirth) : null,
        fatherName: data.fatherName || null,
        motherName: data.motherName || null,

        // =====================
        // Address
        // =====================
        currentAddress: data.currentAddress || null,
        permanentAddress: data.permanentAddress || null,
        city: data.city || null,
        state: data.state || null,
        country: data.country || null,
        pincode: data.pincode || null,

        // =====================
        // Emergency Contact
        // =====================
        emergencyContactName: data.emergencyContactName || null,
        emergencyContactPhone: data.emergencyContactPhone || null,
        emergencyContactRelation: data.emergencyContactRelation || null,

        // =====================
        // Reporting Manager
        // =====================
        reportingManagerName: data.reportingManagerName || null,

        // =====================
        // Organization
        // =====================
        organizationId: "ctsl_2026",
      },
    });

    try {
      // Send welcome email
      await resend.emails.send({
        from: "Crusharders <noreply@odishabiz.com>",
        to: data.email,
        subject: "Welcome to the Crusharders Team 🎉",
        html: `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Welcome to Crusharders</title>
</head>

<body style="margin:0;padding:0;background-color:#eef1f7;font-family:'Segoe UI',Roboto,Arial,sans-serif;">

  <table width="100%" cellpadding="0" cellspacing="0" style="padding:40px 0;">
    <tr>
      <td align="center">

        <table width="620" cellpadding="0" cellspacing="0"
          style="background:#ffffff;border-radius:14px;overflow:hidden;
          box-shadow:0 12px 30px rgba(0,0,0,0.1);">

          <!-- Header -->
          <tr>
            <td style="background:#3454d1;padding:35px;text-align:center;">
              <img
                src="https://crushaderstech.com/images/logo/logo.webp"
                alt="Crusharders Logo"
                width="140"
                style="display:block;margin:0 auto 10px;"
              />
              <p style="margin:0;color:#dbe2ff;font-size:14px;">
                Welcome to Crusharders
              </p>
            </td>
          </tr>

          <!-- Body -->
          <tr>
            <td style="padding:40px 45px;color:#2c2c2c;font-size:15px;line-height:1.6;">
              <h2 style="margin-top:0;">
                Hey ${data.fullName}, Welcome to Crusharders!
              </h2>

              <p>We’re excited to have you on board.</p>
              <p>Your account has been successfully created.</p>
              <p>If you have any questions, feel free to reach out to the team.</p>

              <br/>
              <p>
                — <strong>Crusharders Team</strong>
              </p>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background:#f5f7fc;padding:15px;text-align:center;
              font-size:12px;color:#777;">
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
    } catch (error) {
      console.error("Error sending welcome email:", error);
    }

    return NextResponse.json({
      success: true,
      message: "User created successfully",
      userId: newUser.id,
    });
  } catch (error) {
    console.error("Create user error:", error);

    // Prisma unique constraint error
    if (error.code === "P2002") {
      const target = error.meta?.target || [];

      let message = "Duplicate entry";

      if (target.includes("email")) {
        message = "Email already exists";
      } else if (target.includes("employeeId")) {
        message = "Employee ID already exists";
      } else if (target.includes("employeeId") && target.includes("organizationId")) {
        message = "Employee ID already exists in this organization";
      }

      return NextResponse.json({ success: false, message }, { status: 409 });
    }

    return NextResponse.json(
      { success: false, message: error.message || "Failed to create user" },
      { status: 500 }
    );
  }
}

export async function GET(request) {
  try {
    // 1️⃣ Validate token
    const token = request.cookies.get("auth_token")?.value;
    if (!token) return NextResponse.json({ message: "Unauthorized" }, { status: 401 });

    const decoded = verifyToken(token);
    if (!decoded) return NextResponse.json({ message: "Invalid token" }, { status: 401 });

    const users = await prisma.user.findMany({
      select: {
        id: true,
        fullName: true,
        designation: true,
        phone: true,
        organization: {
          select: {
            id: true,
            name: true,
          },
        },
      },
    });

    return NextResponse.json({
      success: true,
      users: users,
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
