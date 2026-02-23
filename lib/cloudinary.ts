import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME!,
  api_key: process.env.CLOUDINARY_API_KEY!,
  api_secret: process.env.CLOUDINARY_API_SECRET!,
});

/* ================= NEWS UPLOAD ================= */

export const uploadNewsImage = (buffer: Buffer) =>
  new Promise<any>((resolve, reject) => {
    const stream = cloudinary.uploader.upload_stream(
      {
        folder: "news",
        resource_type: "image",
        transformation: [
          { width: 1600, crop: "limit" },
          { quality: "auto" },
          { fetch_format: "auto" },
        ],
      },
      (error, result) => {
        if (error) reject(error);
        else resolve(result);
      }
    );

    stream.end(buffer);
  });

/* ================= GALLERY UPLOAD ================= */

export const uploadGalleryImage = (buffer: Buffer) =>
  new Promise<any>((resolve, reject) => {
    const stream = cloudinary.uploader.upload_stream(
      {
        folder: "gallery",
        resource_type: "image",
        transformation: [
          { width: 1600, crop: "limit" },
          { quality: "auto:good" },
          { fetch_format: "auto" },
        ],
      },
      (error, result) => {
        if (error) reject(error);
        else resolve(result);
      }
    );

    stream.end(buffer);
  });

export { cloudinary };