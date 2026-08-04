import { NextResponse } from "next/server";
import { connectDB } from "@/lib/connectDB";

export async function GET() {
  try {
    await connectDB();

    return NextResponse.json({
      success: true,
      message: "DB Connected",
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        success: false,
        error: error instanceof Error ? error.message : error,
        fullError: String(error),
      },
      { status: 500 }
    );
  }
}
