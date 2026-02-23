"use client";

import { useState } from "react";
import Image from "next/image";

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
  formData.append("description", baseData.get("description") as string);

  files.forEach((file) => {
    formData.append("images", file); // notice plural
  });

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
    alert("Upload failed");
  }

  setLoading(false);
}

  return (
    <div className="max-w-4xl mx-auto space-y-10">
      <h1 className="text-3xl font-semibold tracking-tight">
        Upload Gallery Images
      </h1>

      <form onSubmit={handleSubmit} className="space-y-6">

        <input
          name="title"
          placeholder="Title"
          required
          className="w-full border border-gray-300 p-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-black"
        />

        <select
          name="category"
          required
          className="w-full border border-gray-300 p-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-black"
        >
          <option value="worship">Worship</option>
          <option value="children">Children</option>
          <option value="women">Women</option>
          <option value="men">Men</option>
          <option value="outreach">Outreach</option>
          <option value="boma">Boma</option>
          <option value="events">Events</option>
        </select>

        <textarea
          name="description"
          placeholder="Description (optional)"
          className="w-full border border-gray-300 p-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-black"
        />

        {/* Custom File Upload Button */}
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

          {/* Preview Grid */}
          {files.length > 0 && (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {files.map((file, index) => (
                <div
                  key={index}
                  className="relative group rounded-xl overflow-hidden border"
                >
                  <Image
                    src={URL.createObjectURL(file)}
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
              ))}
            </div>
          )}
        </div>

        <button
          type="submit"
          disabled={loading}
          className="bg-accent text-foreground px-8 py-3 rounded-xl hover:opacity-90 transition disabled:opacity-50"
        >
          {loading ? "Uploading..." : "Upload Images"}
        </button>

      </form>
    </div>
  );
}