import {
  createDepartmentController,
  getDepartmentController,
} from "@/controllers/department/department.controller";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const body = await request.json();

    const result = await createDepartmentController(body);

    return NextResponse.json(result, {
      status: 201,
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        success: false,
        message: error.message || "Internal Server Error",
        errors: error.errors || {},
      },
      {
        status: error.statusCode || 500,
      }
    );
  }
}

export async function GET() {
  try {
    const result = await getDepartmentController();

    return NextResponse.json(result, {
      status: 200,
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        success: false,
        message: error.message || "Internal Server Error",
        errors: error.errors || {},
      },
      {
        status: error.statusCode || 500,
      }
    );
  }
}
