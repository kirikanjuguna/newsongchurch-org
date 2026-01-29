import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import { News } from "@/models/News";
import { getAdminFromRequest } from "@/lib/auth";
import slugify from "slugify";
import { cloudinary } from "@/lib/cloudinary";

/* ================= GET SINGLE NEWS ================= */

export async function GET(
  _req: Request,
  context: { params: Promise<{ id: string }> }
) {
  const { id } = await context.params;

  await connectDB();

  const news = await News.findById(id);

  if (!news) {
    return NextResponse.json(
      { success: false, message: "Not found" },
      { status: 404 }
    );
  }

  return NextResponse.json({ success: true, news });
}

/* ================= UPDATE NEWS ================= */

export async function PUT(
  req: Request,
  context: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await context.params;

    await getAdminFromRequest();
    await connectDB();

    const news = await News.findById(id);
    if (!news) {
      return NextResponse.json(
        { success: false, message: "Not found" },
        { status: 404 }
      );
    }

    const formData = await req.formData();

    const title = formData.get("title") as string | null;
    if (title && title !== news.title) {
      news.title = title;
      news.slug = slugify(title, { lower: true });
    }

    news.excerpt = (formData.get("excerpt") as string) ?? news.excerpt;
    news.content = (formData.get("content") as string) ?? news.content;
    news.category = (formData.get("category") as string) ?? news.category;
    news.isPublished = formData.get("isPublished") === "true";

    const existingImages = formData.getAll("existingImages") as string[];
    const newFiles = formData.getAll("images") as File[];

    const uploadedImages: string[] = [];

    for (const file of newFiles) {
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

      uploadedImages.push(upload.secure_url);
    }

    news.images = [...existingImages, ...uploadedImages];
    await news.save();

    return NextResponse.json({ success: true, news });
  } catch (err: any) {
    return NextResponse.json(
      { success: false, message: err.message || "Unauthorized" },
      { status: 401 }
    );
  }
}

/* ================= DELETE NEWS ================= */

export async function DELETE(
  _req: Request,
  context: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await context.params;

    await getAdminFromRequest();
    await connectDB();

    const news = await News.findById(id);
    if (!news) {
      return NextResponse.json(
        { success: false, message: "Not found" },
        { status: 404 }
      );
    }

    /* Delete Cloudinary images safely */
    for (const url of news.images) {
      try {
        const parts = url.split("/");
        const filename = parts[parts.length - 1];
        const publicId = `news/${filename.split(".")[0]}`;

        await cloudinary.uploader.destroy(publicId);
      } catch {
        // Fail silently per image (never block delete)
      }
    }

    await news.deleteOne();

    return NextResponse.json({ success: true });
  } catch (err: any) {
    return NextResponse.json(
      { success: false, message: err.message || "Unauthorized" },
      { status: 401 }
    );
  }
}
