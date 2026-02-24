"use client";

import { useState } from "react";
import Image from "next/image";
import { GALLERY_CATEGORIES } from "@/lib/galleryCategories";

export default function CreateGalleryPage() {
  const [files, setFiles] = useState<File[]>([]);
  const [loading, setLoading] = useState(false);

  function handleFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    if (!e.target.files) return;

    const selected = Array.from(e.target.files);
    setFiles((prev) => [...prev, ...selected]);
  }

  function removeFile(index: number) {
    setFiles((prev) => prev.filter((_, i) => i !== index));
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (files.length === 0) {
      alert("Please select at least one image.");
      return;
    }

    setLoading(true);

    const form = e.currentTarget;
    const baseData = new FormData(form);
    const formData = new FormData();

    formData.append("title", baseData.get("title") as string);
    formData.append("category", baseData.get("category") as string);
    formData.append(
      "description",
      (baseData.get("description") as string) || ""
    );

    files.forEach((file) => {
      formData.append("images", file);
    });

    try {
      const res = await fetch("/api/gallery/create", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();

      if (data.success) {
        alert("Upload successful");
        setFiles([]);
        form.reset();
      } else {
        alert(data.message || "Upload failed");
      }
    } catch (error) {
      console.error(error);
      alert("Something went wrong.");
    }

    setLoading(false);
  }

  return (
    <div className="max-w-4xl mx-auto space-y-10">
      <h1 className="text-3xl font-semibold tracking-tight">
        Upload Gallery Images
      </h1>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Title */}
        <input
          name="title"
          placeholder="Title"
          required
          className="w-full border border-gray-300 p-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-black"
        />

        {/* Category (Dynamic) */}
        <select
          name="category"
          required
          className="w-full border border-gray-300 p-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-black"
        >
          {GALLERY_CATEGORIES.map((cat) => (
            <option key={cat} value={cat}>
              {cat.charAt(0).toUpperCase() + cat.slice(1)}
            </option>
          ))}
        </select>

        {/* Description */}
        <textarea
          name="description"
          placeholder="Description (optional)"
          className="w-full border border-gray-300 p-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-black"
        />

        {/* File Upload */}
        <div className="space-y-4">
          <label className="flex items-center justify-center w-full h-32 border-2 border-dashed border-gray-300 rounded-2xl cursor-pointer hover:border-black transition">
            <div className="text-center space-y-2">
              <p className="font-medium">Click to choose images</p>
              <p className="text-sm text-gray-500">
                You can select multiple images
              </p>
            </div>

            <input
              type="file"
              accept="image/*"
              multiple
              onChange={handleFileChange}
              className="hidden"
            />
          </label>

          {/* Preview */}
          {files.length > 0 && (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {files.map((file, index) => {
                const previewUrl = URL.createObjectURL(file);

                return (
                  <div
                    key={index}
                    className="relative group rounded-xl overflow-hidden border"
                  >
                    <Image
                      src={previewUrl}
                      alt="preview"
                      width={300}
                      height={300}
                      className="object-cover w-full h-32"
                    />

                    <button
                      type="button"
                      onClick={() => removeFile(index)}
                      className="absolute top-2 right-2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition"
                    >
                      Remove
                    </button>
                  </div>
                );
              })}
            </div>
          )}
        </div>

        {/* Submit */}
        <button
          type="submit"
          disabled={loading}
          className="bg-black text-white px-8 py-3 rounded-xl hover:opacity-90 transition disabled:opacity-50"
        >
          {loading ? "Uploading..." : "Upload Images"}
        </button>
      </form>
    </div>
  );
}