import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { connectDB } from "@/lib/connectDB";
import { Admin } from "@/models/Admin";

export async function GET() {
  try {
    await connectDB();

    const email = process.env.ADMIN_EMAIL;
    const password = process.env.ADMIN_PASSWORD;

    if (!email || !password) {
      return NextResponse.json(
        {
          success: false,
          message: "ADMIN_EMAIL and ADMIN_PASSWORD are not configured",
        },
        { status: 500 }
      );
    }

    const existingAdmin = await Admin.findOne({ email });

    if (existingAdmin) {
      return NextResponse.json({
        success: true,
        message: "Admin already exists",
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    await Admin.create({
      email,
      password: hashedPassword,
    });

    return NextResponse.json({
      success: true,
      message: "Admin created successfully",
    });
  } catch (error) {
    console.error("SEED ERROR:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Failed to seed admin",
      },
      { status: 500 }
    );
  }
}