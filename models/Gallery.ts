import mongoose, { Schema, Document, Model } from "mongoose";

export type GalleryCategory =
  | "worship"
  | "children"
  | "women"
  | "men"
  | "outreach"
  | "boma"
  | "events";

export interface IGallery extends Document {
  title: string;
  category: GalleryCategory;
  imageUrl: string;
  publicId: string;
  description?: string;
  createdAt: Date;
  updatedAt: Date;
}

const GallerySchema = new Schema<IGallery>(
  {
    title: { type: String, required: true },
    category: { type: String, required: true },
    imageUrl: { type: String, required: true },
    publicId: { type: String, required: true },
    description: { type: String },
  },
  { timestamps: true }
);

export const Gallery: Model<IGallery> =
  mongoose.models.Gallery ||
  mongoose.model<IGallery>("Gallery", GallerySchema);