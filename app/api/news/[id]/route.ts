import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import { News } from "@/models/News";
import { getAdminFromRequest } from "@/lib/auth";
import slugify from "slugify";
import { cloudinary } from "@/lib/cloudinary";
import { IncomingForm } from "formidable";

// Disable Next.js default body parsing (we handle multipart/form-data ourselves)
export const config = {
  api: {
    bodyParser: false,
  },
};

// GET a single news item (ADMIN)
export async function GET(req: Request, { params }: { params: { id: string } }) {
  await connectDB();
  try {
    const news = await News.findById(params.id);
    if (!news) {
      return NextResponse.json({ success: false, message: "News not found" }, { status: 404 });
    }
    return NextResponse.json({ success: true, news });
  } catch (err: any) {
    return NextResponse.json({ success: false, message: err.message || "Error fetching news" }, { status: 500 });
  }
}

// UPDATE news (ADMIN ONLY)
export async function PUT(req: Request, { params }: { params: { id: string } }) {
  try {
    const admin = await getAdminFromRequest(); // Verify admin
    await connectDB();

    const form = new IncomingForm({ multiples: true });
    const { fields, files }: any = await new Promise((resolve, reject) => {
      form.parse(req as any, (err, fields, files) => {
        if (err) reject(err);
        else resolve({ fields, files });
      });
    });

    const news = await News.findById(params.id);
    if (!news) {
      return NextResponse.json({ success: false, message: "News not found" }, { status: 404 });
    }

    // Update fields
    const allowedFields = ["title", "excerpt", "content", "category", "isPublished"];
    for (const key of allowedFields) {
      if (fields[key] !== undefined) {
        if (key === "isPublished") {
          news[key] = fields[key] === "true" || fields[key] === true;
        } else {
          news[key] = fields[key];
        }
      }
    }

    // Update slug if title changed
    if (fields.title && fields.title !== news.title) {
      news.slug = slugify(fields.title, { lower: true });
    }

    // Handle images
    const existingImages = Array.isArray(fields.existingImages)
      ? fields.existingImages
      : fields.existingImages
      ? [fields.existingImages]
      : [];

    const newImages = files.images
      ? Array.isArray(files.images)
        ? files.images
        : [files.images]
      : [];

    // Upload new images to Cloudinary
    for (const image of newImages) {
      const uploadResult = await cloudinary.uploader.upload(image.filepath || image.path, {
        folder: "news",
      });
      existingImages.push(uploadResult.secure_url);
    }

    news.images = existingImages;
    await news.save();

    return NextResponse.json({ success: true, message: "News updated successfully", news });
  } catch (err: any) {
    return NextResponse.json(
      { success: false, message: err.message || "Unauthorized" },
      { status: 401 }
    );
  }
}

// DELETE news (ADMIN ONLY)
export async function DELETE(req: Request, { params }: { params: { id: string } }) {
  try {
    const admin = await getAdminFromRequest(); // Verify admin
    await connectDB();

    const news = await News.findById(params.id);
    if (!news) {
      return NextResponse.json({ success: false, message: "News not found" }, { status: 404 });
    }

    // Delete images from Cloudinary
    if (news.images && news.images.length > 0) {
      for (const imageUrl of news.images) {
        try {
          const publicId = imageUrl
            .split("/")
            .slice(-1)[0]
            .split(".")[0]; // extract file name without extension
          await cloudinary.uploader.destroy(`news/${publicId}`);
        } catch (err) {
          console.warn("Failed to delete image from Cloudinary:", imageUrl);
        }
      }
    }

    await news.deleteOne();

    return NextResponse.json({ success: true, message: "News deleted successfully" });
  } catch (err: any) {
    return NextResponse.json(
      { success: false, message: err.message || "Unauthorized" },
      { status: 401 }
    );
  }
}
