// app/api/news/route.ts
import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import { News } from "@/models/News";
import { getAdminFromRequest } from "@/lib/auth";
import slugify from "slugify";
import { cloudinary } from "@/lib/cloudinary";
import { IncomingForm } from "formidable"; // ✅ Updated import

// Disable Next.js default body parsing (we handle multipart/form-data ourselves)
export const config = {
  api: {
    bodyParser: false,
  },
};

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

// CREATE news (ADMIN ONLY) with optional images
export async function POST(req: Request) {
  try {
    // 🔐 Verify admin via HttpOnly cookie
    const admin = await getAdminFromRequest();

    await connectDB();

    // Parse multipart/form-data using formidable
    const form = new IncomingForm({ multiples: true });
    const { fields, files }: any = await new Promise((resolve, reject) => {
      form.parse(req as any, (err, fields, files) => {
        if (err) reject(err);
        else resolve({ fields, files });
      });
    });

    // Validate required fields
    const requiredFields = ["title", "excerpt", "content", "category"];
    for (const field of requiredFields) {
      if (!fields[field]) {
        return NextResponse.json(
          { success: false, message: `${field} is required` },
          { status: 400 }
        );
      }
    }

    // Validate category against allowed enum values in the schema
    const allowedCategories = News.schema.path("category").enumValues;
    if (!allowedCategories.includes(fields.category)) {
      return NextResponse.json(
        {
          success: false,
          message: `Category must be one of: ${allowedCategories.join(", ")}`,
        },
        { status: 400 }
      );
    }

    // Generate slug from title if not provided
    const slug = fields.slug ? fields.slug : slugify(fields.title, { lower: true });

    // Prepare news object
    const newsData: any = {
      title: fields.title,
      excerpt: fields.excerpt,
      content: fields.content,
      category: fields.category,
      isPublished: fields.isPublished === "true" || fields.isPublished === true,
      slug,
      createdBy: admin.id,
    };

    // Upload images if provided
    const images = files.images
      ? Array.isArray(files.images)
        ? files.images
        : [files.images]
      : [];

    if (images.length > 0) {
      newsData.images = [];
      for (const image of images) {
        const uploadResult = await cloudinary.uploader.upload(
          image.filepath || image.path,
          { folder: "news" }
        );
        newsData.images.push(uploadResult.secure_url);
      }
    }

    // Create news document
    const news = await News.create(newsData);

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
