import { GalleryCategory } from "@/models/Gallery";

export const GALLERY_CATEGORIES = [
  "church",
  "missions",
  "community",
] as const satisfies readonly GalleryCategory[];