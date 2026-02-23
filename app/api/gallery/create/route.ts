import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "@/lib/connectDB";
import { Gallery } from "@/models/Gallery";
import { uploadGalleryImage } from "@/lib/cloudinary";

export async function POST(req: NextRequest) {
  try {
    await connectDB();

    const formData = await req.formData();

    const title = formData.get("title") as string;
    const category = formData.get("category") as string;
    const description = formData.get("description") as string;
    const file = formData.get("image") as File;

    if (!file) {
      return NextResponse.json(
        { success: false, message: "Image is required" },
        { status: 400 }
      );
    }

    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    const uploadResult = await uploadGalleryImage(buffer);

    const newItem = await Gallery.create({
      title,
      category,
      description,
      imageUrl: uploadResult.secure_url,
      publicId: uploadResult.public_id,
    });

    return NextResponse.json({
      success: true,
      item: {
        ...newItem.toObject(),
        _id: newItem._id.toString(),
      },
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { success: false, message: "Something went wrong" },
      { status: 500 }
    );
  }
}