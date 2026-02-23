import { connectDB } from "@/lib/connectDB";
import { Gallery } from "@/models/Gallery";
import GalleryClient from "../../../components/gallery/GalleryClient";

export default async function GalleryPage() {
  await connectDB();

  const items = await Gallery.find().sort({ createdAt: -1 });

  return (
    <GalleryClient
      initialItems={JSON.parse(JSON.stringify(items))}
    />
  );
}