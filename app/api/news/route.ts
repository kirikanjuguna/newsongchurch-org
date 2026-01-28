// app/api/news/route.ts
import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import { News } from "@/models/News";
import { getAdminFromRequest } from "@/lib/auth";
import slugify from "slugify";

// GET all published news (PUBLIC)
export async function GET() {
  await connectDB();

  const news = await News.find({ isPublished: true }).sort({
    createdAt: -1,
  });

  return NextResponse.json({
    success: true,
    news,
  });
}

// CREATE news (ADMIN ONLY)
export async function POST(req: Request) {
  try {
    // 🔐 Verify admin via HttpOnly cookie
    const admin = await getAdminFromRequest();

    await connectDB();

    const body = await req.json();

    // Validate required fields
    const requiredFields = ["title", "excerpt", "content", "category"];
    for (const field of requiredFields) {
      if (!body[field]) {
        return NextResponse.json(
          { success: false, message: `${field} is required` },
          { status: 400 }
        );
      }
    }

    // Validate category against allowed enum values in the schema
    const allowedCategories = News.schema.path("category").enumValues;
    if (!allowedCategories.includes(body.category)) {
      return NextResponse.json(
        {
          success: false,
          message: `Category must be one of: ${allowedCategories.join(", ")}`,
        },
        { status: 400 }
      );
    }

    // Generate slug from title if not provided
    const slug = body.slug ? body.slug : slugify(body.title, { lower: true });

    const news = await News.create({
      ...body,
      slug,
      createdBy: admin.id,
    });

    return NextResponse.json({
      success: true,
      message: "News created successfully",
      news,
    });
  } catch (error: any) {
    return NextResponse.json(
      {
        success: false,
        message: error.message || "Unauthorized",
      },
      { status: 401 }
    );
  }
}
