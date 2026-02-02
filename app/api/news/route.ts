import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import { News } from "@/models/News";
import { getAdminFromRequest } from "@/lib/auth";
import slugify from "slugify";
import { cloudinary } from "@/lib/cloudinary";

export const runtime = "nodejs"; // Required for Buffer + Cloudinary stream

/* ------------------------------------------------ */
/* GET NEWS */
/* ------------------------------------------------ */

export async function GET(req: Request) {
  try {
    await connectDB();

    const { searchParams } = new URL(req.url);
    const isAdminRequest = searchParams.get("admin") === "true";

    // 🔐 Admin gets ALL news
    if (isAdminRequest) {
      await getAdminFromRequest();

      const news = await News.find().sort({ createdAt: -1 });

      return NextResponse.json({ success: true, news });
    }

    // 🌍 Public gets only published
    const news = await News.find({ isPublished: true }).sort({
      createdAt: -1,
    });

    return NextResponse.json({ success: true, news });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, message: error.message },
      { status: 500 }
    );
  }
}

/* ------------------------------------------------ */
/* POST CREATE NEWS */
/* ------------------------------------------------ */

export async function POST(req: Request) {
  try {
    await getAdminFromRequest();
    await connectDB();

    const formData = await req.formData();

    const title = formData.get("title") as string;
    const excerpt = formData.get("excerpt") as string;
    const content = formData.get("content") as string;
    const category = formData.get("category") as string;
    const isPublished = formData.get("isPublished") === "true";

    if (!title || !excerpt || !content || !category) {
      return NextResponse.json(
        { success: false, message: "Missing required fields" },
        { status: 400 }
      );
    }

    /* ---------- SLUG ---------- */

    const slug = slugify(title, { lower: true, strict: true });

    /* ---------- IMAGE UPLOAD ---------- */

    const images: string[] = [];
    const files = formData.getAll("images") as File[];

    for (const file of files) {
      if (!file || typeof file === "string") continue;

      // Skip empty files
      if (file.size === 0) continue;

      // Optional size safety (10MB per file)
      if (file.size > 10 * 1024 * 1024) {
        return NextResponse.json(
          { success: false, message: "Each image must be under 10MB" },
          { status: 400 }
        );
      }

      const buffer = Buffer.from(await file.arrayBuffer());

      const uploadResult: any = await new Promise((resolve, reject) => {
        const stream = cloudinary.uploader.upload_stream(
          {
            folder: "news",
          },
          (error, result) => {
            if (error) reject(error);
            else resolve(result);
          }
        );

        stream.end(buffer);
      });

      images.push(uploadResult.secure_url);
    }

    /* ---------- SAVE NEWS ---------- */

    const news = await News.create({
      title,
      slug,
      excerpt,
      content,
      category,
      isPublished,
      images,
    });

    return NextResponse.json({ success: true, news });
  } catch (error: any) {
    console.error("NEWS CREATE ERROR:", error);

    return NextResponse.json(
      { success: false, message: error.message || "Server error" },
      { status: 500 }
    );
  }
}
