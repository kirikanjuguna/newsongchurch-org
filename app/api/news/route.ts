import { NextResponse } from "next/server";
import {connectDB} from "@/lib/mongodb";
import { News } from "@/models/News";
import slugify from "slugify";

export async function POST(req: Request) {
  try {
    await connectDB();

    const body = await req.json();
    const { title, excerpt, content, image, category, isPublished } = body;

    if (!title || !excerpt || !content) {
      return NextResponse.json(
        { success: false, message: "Missing required fields" },
        { status: 400 }
      );
    }

    const slug = slugify(title, { lower: true, strict: true });

    const existing = await News.findOne({ slug });
    if (existing) {
      return NextResponse.json(
        { success: false, message: "News with same title already exists" },
        { status: 409 }
      );
    }

    const news = await News.create({
      title,
      slug,
      excerpt,
      content,
      image,
      category,
      isPublished,
    });

    return NextResponse.json({
      success: true,
      message: "News created successfully",
      news,
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { success: false, message: "Failed to create news" },
      { status: 500 }
    );
  }
}
