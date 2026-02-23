import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "@/lib/connectDB";
import { Gallery } from "@/models/Gallery";
import { uploadNewsImage } from "@/lib/cloudinary";

export async function POST(req: NextRequest) {
  try {
    await connectDB();

    const formData = await req.formData();

    const title = formData.get("title") as string;
    const category = formData.get("category") as string;
    const description = formData.get("description") as string;

    const images = formData.getAll("images") as File[];

    if (!images || images.length === 0) {
      return NextResponse.json({ success: false });
    }

    // Upload all images in parallel
    const uploadPromises = images.map(async (file) => {
      const bytes = await file.arrayBuffer();
      const buffer = Buffer.from(bytes);

      const result = await uploadNewsImage(buffer);

      return {
        title,
        category,
        description,
        imageUrl: result.secure_url,
        publicId: result.public_id,
      };
    });

    const uploaded = await Promise.all(uploadPromises);

    await Gallery.insertMany(uploaded);

    return NextResponse.json({ success: true });

  } catch (error) {
    console.error(error);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}