import { deleteDepartmentController } from "@/controllers/department/department.controller";
import { NextResponse } from "next/server";

export async function DELETE(request, {params}){
    try {
        const { id } = await params;

        const result = await deleteDepartmentController(id);

        return NextResponse.json(
            result,
            {
                status: 200
            }
        );
    } catch (error) {

        console.error(error);

        return NextResponse.json({
            success:false,
            message: error.message || "Internal Server Error",
            errors: error.errors || {},
        },
        {
            status: error.statusCode || 500,
        }
    );
    }
}