import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "@/lib/connectDB";
import { Gallery, GalleryCategory } from "@/models/Gallery";
import { uploadGalleryImage } from "@/lib/cloudinary";

export async function POST(req: NextRequest) {
  try {
    await connectDB();

    const formData = await req.formData();

    const title = formData.get("title") as string;
    const category = formData.get("category");
    const description = formData.get("description") as string;

    const images = formData.getAll("images") as File[];

    if (!images || images.length === 0) {
      return NextResponse.json(
        { success: false, message: "No images" },
        { status: 400 }
      );
    }

    // Validate category
    if (
      category !== "church" &&
      category !== "missions" &&
      category !== "community"
    ) {
      return NextResponse.json(
        { success: false, message: "Invalid category" },
        { status: 400 }
      );
    }

    for (const file of images) {
      const bytes = await file.arrayBuffer();
      const buffer = Buffer.from(bytes);

      const result = await uploadGalleryImage(buffer);

      await Gallery.create({
        title,
        category: category as GalleryCategory,
        description,
        imageUrl: result.secure_url,
        publicId: result.public_id,
      });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("UPLOAD ERROR:", error);

    return NextResponse.json(
      { success: false },
      { status: 500 }
    );
  }
}