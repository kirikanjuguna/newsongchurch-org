import { NextResponse } from "next/server";
import {connectDB} from "@/lib/mongodb";
import { News } from "@/models/News";

export async function GET() {
  try {
    await connectDB();

    const count = await News.countDocuments();

    return NextResponse.json({
      success: true,
      message: "News model is working",
      totalNews: count,
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: "News test failed" },
      { status: 500 }
    );
  }
}
