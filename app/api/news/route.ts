import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import { News } from "@/models/News";
import { getAdminFromRequest } from "@/lib/auth";
import slugify from "slugify";
import { cloudinary } from "@/lib/cloudinary";

// GET news (public or admin)
export async function GET(req: Request) {
  await connectDB();

  const { searchParams } = new URL(req.url);
  const isAdminRequest = searchParams.get("admin") === "true";

  // 🔐 Admin: return all news
  if (isAdminRequest) {
    await getAdminFromRequest();

    const news = await News.find().sort({ createdAt: -1 });

    return NextResponse.json({ success: true, news });
  }

  // 🌍 Public: published only
  const news = await News.find({ isPublished: true }).sort({
    createdAt: -1,
  });

  return NextResponse.json({ success: true, news });
}

// ADMIN – create news
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

    const slug = slugify(title, { lower: true });

    const images: string[] = [];
    const files = formData.getAll("images") as File[];

    for (const file of files) {
      if (!file || typeof file === "string") continue;

      const buffer = Buffer.from(await file.arrayBuffer());

      const upload = await new Promise<any>((resolve, reject) => {
        cloudinary.uploader
          .upload_stream({ folder: "news" }, (err, result) => {
            if (err) reject(err);
            else resolve(result);
          })
          .end(buffer);
      });

      images.push(upload.secure_url);
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
  } catch (err: any) {
    return NextResponse.json(
      { success: false, message: err.message || "Unauthorized" },
      { status: 401 }
    );
  }
}
