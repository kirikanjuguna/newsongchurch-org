import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "@/lib/connectDB";
import { Gallery } from "@/models/Gallery";

export async function GET(req: NextRequest) {
  await connectDB();

  const { searchParams } = new URL(req.url);
  const category = searchParams.get("category");

  const query =
    category && category !== "all"
      ? { category }
      : {};

  const items = await Gallery.find(query)
    .sort({ createdAt: -1 })
    .lean();

  const formatted = items.map((item) => ({
    ...item,
    _id: item._id.toString(),
  }));

  return NextResponse.json({
    success: true,
    items: formatted,
  });
}