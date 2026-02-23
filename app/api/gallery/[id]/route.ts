import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "@/lib/connectDB";
import { Gallery } from "@/models/Gallery";
import { cloudinary } from "@/lib/cloudinary";

export async function DELETE(
  req: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  try {
    await connectDB();

    // ✅ UNWRAP params
    const { id } = await context.params;

    const item = await Gallery.findById(id);

    if (!item) {
      return NextResponse.json(
        { success: false, message: "Item not found" },
        { status: 404 }
      );
    }

    // ✅ Delete from Cloudinary
    await cloudinary.uploader.destroy(item.publicId);

    // ✅ Delete from MongoDB
    await Gallery.findByIdAndDelete(id);

    return NextResponse.json({ success: true });

  } catch (error) {
    console.error("DELETE ERROR:", error);
    return NextResponse.json(
      { success: false },
      { status: 500 }
    );
  }
}