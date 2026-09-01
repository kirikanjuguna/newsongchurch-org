import { NextResponse } from "next/server";
import { cloudinary } from "@/lib/cloudinary";

export const runtime = "nodejs";

export async function GET() {
  try {
    const result = await cloudinary.api.resources({
      type: "upload",
      prefix: "gallery/",
      max_results: 500,
    });

    const resources = result.resources.map((resource: any) => ({
      publicId: resource.public_id,
      secureUrl: resource.secure_url,
      format: resource.format,
      width: resource.width,
      height: resource.height,
      createdAt: resource.created_at,
    }));

    return NextResponse.json({
      success: true,
      total: resources.length,
      resources,
    });
  } catch (error: any) {
    console.error("CLOUDINARY RECOVERY ERROR:", error);

    return NextResponse.json(
      {
        success: false,
        message:
          error.message || "Failed to retrieve Cloudinary assets",
      },
      { status: 500 }
    );
  }
}