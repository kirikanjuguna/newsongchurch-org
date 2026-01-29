import mongoose, { Schema, models } from "mongoose";

const NewsSchema = new Schema(
  {
    title: { type: String, required: true, trim: true },

    slug: { type: String, required: true, unique: true },

    excerpt: { type: String, required: true },

    content: { type: String, required: true },

    images: {
      type: [String], // ✅ ALWAYS ARRAY
      default: [],
    },

    category: {
      type: String,
      enum: ["Mission", "Event", "Outreach", "Testimony", "Announcement", "Church"],
      default: "Announcement",
    },

    isPublished: { type: Boolean, default: false },
  },
  { timestamps: true }
);

export const News = models.News || mongoose.model("News", NewsSchema);
