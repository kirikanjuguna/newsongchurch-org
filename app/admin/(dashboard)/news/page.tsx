"use client";

import { useState } from "react";

const categories = [
  "Mission",
  "Event",
  "Outreach",
  "Testimony",
  "Announcement",
  "Church",
];

export default function CreateNews() {
  const [images, setImages] = useState<File[]>([]);
  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState("");

  function handleImageChange(e: React.ChangeEvent<HTMLInputElement>) {
    const files = e.target.files;
    if (!files) return;
    setImages((prev) => [...prev, ...Array.from(files)]);
  }

  function removeImage(i: number) {
    setImages((prev) => prev.filter((_, idx) => idx !== i));
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const form = e.currentTarget;

    setLoading(true);
    setMsg("");

    const fd = new FormData(form);
    images.forEach((f) => fd.append("images", f));

    try {
      const res = await fetch("/api/news", {
        method: "POST",
        body: fd,
      });

      setMsg(res.ok ? "News created successfully" : "Failed to create news");

      if (res.ok) {
        form.reset();
        setImages([]);
      }
    } catch (err) {
      console.error(err);
      setMsg("Upload error");
    }

    setLoading(false);
  }

  return (
    <div className="bg-surface rounded-3xl shadow-xl p-10 max-w-3xl text-[#3f2d23]">

      <h1 className="text-3xl font-semibold mb-8 text-[#3f2d23]">
        Create News
      </h1>

      <form onSubmit={handleSubmit} className="space-y-6">

        <input
          name="title"
          required
          placeholder="Title"
          className={input}
        />

        <input
          name="excerpt"
          required
          placeholder="Excerpt"
          className={input}
        />

        <select name="category" required className={input}>
          {categories.map((c) => (
            <option key={c} value={c}>
              {c}
            </option>
          ))}
        </select>

        <textarea
          name="content"
          rows={8}
          required
          placeholder="Content (HTML allowed)"
          className={input}
        />

        <label className="flex gap-3 items-center text-[#3f2d23]">
          <input type="checkbox" name="isPublished" value="true" />
          Publish now
        </label>

        {/* IMAGE UPLOAD */}

        <input
          type="file"
          multiple
          accept="image/*"
          onChange={handleImageChange}
          className="text-[#3f2d23]"
        />

        {/* PREVIEW */}

        {images.length > 0 && (
          <div className="grid grid-cols-3 gap-4">
            {images.map((img, i) => (
              <div key={i} className="relative">
                <img
                  src={URL.createObjectURL(img)}
                  className="h-36 w-full object-cover rounded-xl"
                />
                <button
                  type="button"
                  onClick={() => removeImage(i)}
                  className="absolute top-2 right-2 bg-black/70 text-white px-2 rounded-full"
                >
                  ✕
                </button>
              </div>
            ))}
          </div>
        )}

        <button
          disabled={loading}
          className="bg-accent text-foreground px-6 py-3 rounded-xl font-semibold disabled:opacity-50"
        >
          {loading ? "Saving..." : "Create News"}
        </button>

        {msg && (
          <p className="text-sm text-[#3f2d23]">
            {msg}
          </p>
        )}

      </form>
    </div>
  );
}

const input =
  "w-full border border-secondary/30 rounded-xl px-4 py-3 bg-white text-[#3f2d23] placeholder:text-[#3f2d23]/60";
