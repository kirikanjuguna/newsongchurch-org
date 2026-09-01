import { NextRequest, NextResponse } from "next/server";

import { connectDB } from "@/lib/connectDB";
import { Gallery, GalleryCategory } from "@/models/Gallery";

export const runtime = "nodejs";

const VALID_CATEGORIES: GalleryCategory[] = [
  "church",
  "missions",
  "community",
];

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const {
      title,
      category,
      imageUrl,
      publicId,
      description,
    } = body;

    // -----------------------------------------
    // Validate required fields
    // -----------------------------------------

    if (!imageUrl) {
      return NextResponse.json(
        {
          success: false,
          message: "Image URL is required.",
        },
        { status: 400 }
      );
    }

    if (!publicId) {
      return NextResponse.json(
        {
          success: false,
          message: "Cloudinary public ID is required.",
        },
        { status: 400 }
      );
    }

    if (!category) {
      return NextResponse.json(
        {
          success: false,
          message: "Category is required.",
        },
        { status: 400 }
      );
    }

    if (!VALID_CATEGORIES.includes(category)) {
      return NextResponse.json(
        {
          success: false,
          message: "Invalid gallery category.",
        },
        { status: 400 }
      );
    }

    // -----------------------------------------
    // Connect to MongoDB
    // -----------------------------------------

    await connectDB();

    // -----------------------------------------
    // Prevent duplicate records
    // -----------------------------------------

    const existing = await Gallery.findOne({
      publicId,
    });

    if (existing) {
      return NextResponse.json(
        {
          success: false,
          message: "This image has already been added to the gallery.",
          item: {
            _id: existing._id.toString(),
            title: existing.title,
            category: existing.category,
            imageUrl: existing.imageUrl,
            publicId: existing.publicId,
          },
        },
        { status: 409 }
      );
    }

    // -----------------------------------------
    // Create complete gallery record
    // -----------------------------------------

    const galleryItem = await Gallery.create({
      title:
        typeof title === "string" && title.trim()
          ? title.trim()
          : "Gallery Image",

      category,

      imageUrl,

      publicId,

      description:
        typeof description === "string" && description.trim()
          ? description.trim()
          : undefined,
    });

    return NextResponse.json(
      {
        success: true,
        message: "Image classified successfully.",
        item: {
          _id: galleryItem._id.toString(),
          title: galleryItem.title,
          category: galleryItem.category,
          imageUrl: galleryItem.imageUrl,
          publicId: galleryItem.publicId,
          description: galleryItem.description,
        },
      },
      { status: 201 }
    );
  } catch (error: any) {
    console.error("GALLERY CLASSIFICATION ERROR:", error);

    return NextResponse.json(
      {
        success: false,
        message:
          error.message || "Failed to classify gallery image.",
      },
      { status: 500 }
    );
  }
}