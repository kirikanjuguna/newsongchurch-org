import mongoose, { Schema, models } from "mongoose";

const NewsSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },

    slug: {
      type: String,
      required: true,
      unique: true,
    },

    excerpt: {
      type: String,
      required: true,
    },

    content: {
      type: String,
      required: true,
    },

    image: {
      type: String, // Cloudinary URL
      required: false,
    },

    category: {
      type: String,
      enum: ["Mission", "Event", "Outreach", "Testimony", "Announcement"],
      default: "Announcement",
    },

    isPublished: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

export const News = models.News || mongoose.model("News", NewsSchema);
