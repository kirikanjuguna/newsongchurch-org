import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import { News } from "@/models/News";
import { getAdminFromRequest } from "@/lib/auth";
import slugify from "slugify";
import { uploadNewsImage } from "@/lib/cloudinary";

export const runtime = "nodejs";

const VALID_CATEGORIES = [
  "Mission",
  "Event",
  "Outreach",
  "Testimony",
  "Announcement",
  "Church",
];

/* ---------------- GET ---------------- */

export async function GET(req: Request) {
  try {
    await connectDB();

    const { searchParams } = new URL(req.url);
    const isAdminRequest = searchParams.get("admin") === "true";

    if (isAdminRequest) {
      await getAdminFromRequest();
      const news = await News.find().sort({ createdAt: -1 });
      return NextResponse.json({ success: true, news });
    }

    const news = await News.find({ isPublished: true }).sort({
      createdAt: -1,
    });

    return NextResponse.json({ success: true, news });
  } catch (e: any) {
    return NextResponse.json(
      { success: false, message: e.message },
      { status: 500 }
    );
  }
}

/* ---------------- POST ---------------- */

export async function POST(req: Request) {
  try {
    await getAdminFromRequest();
    await connectDB();

    const formData = await req.formData();

    const title = String(formData.get("title") || "");
    const excerpt = String(formData.get("excerpt") || "");
    const content = String(formData.get("content") || "");
    const category = String(formData.get("category") || "");
    const isPublished = formData.get("isPublished") === "true";

    if (!title || !excerpt || !content) {
      return NextResponse.json(
        { success: false, message: "Missing required fields" },
        { status: 400 }
      );
    }

    if (!VALID_CATEGORIES.includes(category)) {
      return NextResponse.json(
        { success: false, message: "Invalid category selected" },
        { status: 400 }
      );
    }

    /* ---------- SLUG SAFE ---------- */

    let baseSlug = slugify(title, { lower: true, strict: true });
    let slug = baseSlug;
    let counter = 1;

    while (await News.findOne({ slug })) {
      slug = `${baseSlug}-${counter++}`;
    }

    /* ---------- IMAGES ---------- */

    const files = formData.getAll("images") as File[];
    const images: string[] = [];

    for (const file of files) {
      if (!file || file.size === 0) continue;
      if (file.size > 10 * 1024 * 1024) {
        return NextResponse.json(
          { success: false, message: "Image too large (10MB max)" },
          { status: 400 }
        );
      }

      const buffer = Buffer.from(await file.arrayBuffer());
      const result = await uploadNewsImage(buffer);
      images.push(result.secure_url);
    }

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
  } catch (e: any) {
    console.error(e);
    return NextResponse.json(
      { success: false, message: e.message || "Server error" },
      { status: 500 }
    );
  }
}
