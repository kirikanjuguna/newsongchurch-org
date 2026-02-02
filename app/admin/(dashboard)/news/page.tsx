"use client";

import { useState } from "react";

export default function CreateNews() {
  const [images, setImages] = useState<File[]>([]);
  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState("");

  function handleImageChange(e: React.ChangeEvent<HTMLInputElement>) {
    if (!e.target.files) return;
    const files = Array.from(e.target.files) as File[];
    setImages(prev => [...prev, ...files]);
  }

  function removeImage(index: number) {
    setImages(prev => prev.filter((_, i) => i !== index));
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setMsg("");

    const formData = new FormData(e.currentTarget);
    images.forEach(img => formData.append("images", img));

    const res = await fetch("/api/news", {
      method: "POST",
      body: formData,
    });

    setLoading(false);
    setMsg(res.ok ? "News created successfully" : "Failed to create news");

    if (res.ok) {
      e.currentTarget.reset();
      setImages([]);
    }
  }

  return (
    <div className="bg-surface rounded-3xl shadow-xl p-10">
      <h1 className="text-3xl font-semibold text-[#3f2d23] mb-8">
        Create News Article
      </h1>

      <form onSubmit={handleSubmit} className="space-y-6">

        <input name="title" placeholder="Title" required className={input} />
        <input name="excerpt" placeholder="Excerpt" required className={input} />
        <input name="category" placeholder="Category" required className={input} />

        <textarea
          name="content"
          placeholder="Full content"
          rows={6}
          required
          className={input}
        />

        <label className="flex gap-3 items-center text-[#3f2d23] text-sm">
          <input type="checkbox" name="isPublished" value="true" />
          Publish immediately
        </label>

        <input type="file" multiple onChange={handleImageChange} />

        {/* preview */}
        <div className="grid grid-cols-3 gap-4">
          {images.map((img, i) => (
            <div key={i} className="relative">
              <img
                src={URL.createObjectURL(img)}
                className="rounded-xl h-40 w-full object-cover"
              />
              <button
                type="button"
                onClick={() => removeImage(i)}
                className="absolute top-2 right-2 bg-black/70 text-white rounded-full px-2"
              >
                ✕
              </button>
            </div>
          ))}
        </div>

        <button className="bg-accent px-6 py-3 rounded-xl font-semibold">
          {loading ? "Saving..." : "Create News"}
        </button>

        {msg && <p className="text-sm mt-3">{msg}</p>}
      </form>
    </div>
  );
}

const input =
  "w-full border border-secondary/30 rounded-xl px-4 py-3 bg-background";
