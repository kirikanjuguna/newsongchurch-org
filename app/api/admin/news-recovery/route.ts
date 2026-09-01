import { NextResponse } from "next/server";
import { cloudinary } from "@/lib/cloudinary";

export const runtime = "nodejs";

export async function GET() {
  try {
    const resources: any[] = [];

    let nextCursor: string | undefined = undefined;

    do {
      const result = await cloudinary.api.resources({
        type: "upload",
        prefix: "news/",
        max_results: 500,
        next_cursor: nextCursor,
      });

      resources.push(...result.resources);

      nextCursor = result.next_cursor;
    } while (nextCursor);

    return NextResponse.json({
      success: true,
      total: resources.length,

      resources: resources.map((resource: any) => ({
        publicId: resource.public_id,
        secureUrl: resource.secure_url,
        format: resource.format,
        width: resource.width,
        height: resource.height,
        createdAt: resource.created_at,
      })),
    });
  } catch (error: any) {
    console.error("CLOUDINARY NEWS RECOVERY ERROR:", error);

    return NextResponse.json(
      {
        success: false,
        message:
          error.message || "Failed to retrieve Cloudinary news assets",
      },
      { status: 500 }
    );
  }
}