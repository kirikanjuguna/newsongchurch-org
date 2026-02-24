"use client";

import { useState } from "react";
import Image from "next/image";
import { GALLERY_CATEGORIES } from "@/lib/galleryCategories";

interface GalleryItem {
  _id: string;
  title: string;
  category: string;
  imageUrl: string;
  publicId: string;
  description?: string;
}

interface Props {
  initialItems: GalleryItem[];
}

export default function GalleryClient({ initialItems }: Props) {
  const [items, setItems] = useState<GalleryItem[]>(initialItems);
  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);

  const fetchCategory = async (category: string) => {
    setActiveCategory(category);

    const res = await fetch(`/api/gallery/list?category=${category}`, {
      cache: "no-store",
    });

    const data = await res.json();
    setItems(data.items);
  };

  return (
    <main className="bg-white dark:bg-black min-h-screen px-6 py-24">

      {/* HERO */}
      <div className="text-center max-w-4xl mx-auto mb-16">
        <h1 className="text-4xl font-bold text-foreground-700 dark:text--300">
          Church Gallery
        </h1>
        <p className="mt-4 text-gray-600 dark:text-gray-400">
          Capturing moments of faith, family, and community.
        </p>
      </div>

      {/* CATEGORY FILTER */}
      <div className="flex flex-wrap justify-center gap-4 mb-16">
        <button
          onClick={() => fetchCategory("all")}
          className={`px-5 py-2 rounded-full border transition ${
            activeCategory === "all"
              ? "bg-green-600 text-white"
              : "border-green-600 text-green-600"
          }`}
        >
          All
        </button>

        {GALLERY_CATEGORIES.map((cat) => (
          <button
            key={cat}
            onClick={() => fetchCategory(cat)}
            className={`px-5 py-2 rounded-full border capitalize transition ${
              activeCategory === cat
                ? "bg-green-600 text-white"
                : "border-green-600 text-green-600"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* IMAGE GRID */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {items.map((item) => (
          <div
            key={item._id}
            onClick={() => setSelectedImage(item)}
            className="relative w-full h-64 rounded-xl overflow-hidden cursor-pointer group"
          >
            <Image
              src={item.imageUrl}
              alt={item.title}
              fill
              className="object-cover group-hover:scale-110 transition duration-500"
            />
          </div>
        ))}
      </div>

      {/* MODAL */}
      {selectedImage && (
        <div
          onClick={() => setSelectedImage(null)}
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-6"
        >
          <div className="relative w-full max-w-4xl h-[70vh]">
            <Image
              src={selectedImage.imageUrl}
              alt={selectedImage.title}
              fill
              className="object-contain"
            />
          </div>
        </div>
      )}
    </main>
  );
}