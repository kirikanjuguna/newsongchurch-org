"use client";

import React, { useState } from "react";
import axios from "axios";

interface NewsFormData {
  title: string;
  excerpt: string;
  content: string;
  category: string;
  isPublished: boolean;
  images: File[];
}

interface ApiResponse {
  success: boolean;
  message?: string;
}

const categories = ["Mission", "Church", "Event", "Announcement"];

const AdminNewsPage = () => {
  const [formData, setFormData] = useState<NewsFormData>({
    title: "",
    excerpt: "",
    content: "",
    category: "Mission",
    isPublished: true,
    images: [],
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<string | null>(null);

  /* ---------------- TEXT INPUT ---------------- */

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value, type } = e.target;
    const isCheckbox = type === "checkbox";

    setFormData((prev) => ({
      ...prev,
      [name]: isCheckbox
        ? (e.target as HTMLInputElement).checked
        : value,
    }));
  };

  /* ---------------- IMAGE INPUT ---------------- */

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;

    const selectedFiles = Array.from(e.target.files);

    setFormData((prev) => ({
      ...prev,
      images: [...prev.images, ...selectedFiles],
    }));
  };

  const removeImage = (index: number) => {
    setFormData((prev) => ({
      ...prev,
      images: prev.images.filter((_, i) => i !== index),
    }));
  };

  /* ---------------- SUBMIT ---------------- */

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage(null);

    try {
      const data = new FormData();

      data.append("title", formData.title);
      data.append("excerpt", formData.excerpt);
      data.append("content", formData.content);
      data.append("category", formData.category);
      data.append("isPublished", String(formData.isPublished));

      formData.images.forEach((file) => {
        data.append("images", file);
      });

      const res = await axios.post<ApiResponse>("/api/news", data, {
        withCredentials: true,
      });

      if (res.data.success) {
        setMessage("News created successfully!");

        setFormData({
          title: "",
          excerpt: "",
          content: "",
          category: "Mission",
          isPublished: true,
          images: [],
        });
      } else {
        setMessage(res.data.message || "Failed to create news");
      }
    } catch (err: any) {
      setMessage(
        err.response?.data?.message || err.message || "Something went wrong"
      );
    } finally {
      setLoading(false);
    }
  };

  /* ---------------- UI ---------------- */

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Create News</h1>

      {message && (
        <p className="mb-4 text-red-600 font-medium">{message}</p>
      )}

      <form onSubmit={handleSubmit} className="space-y-5">
        {/* TITLE */}
        <div>
          <label className="block font-medium mb-1">Title</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded"
            required
          />
        </div>

        {/* EXCERPT */}
        <div>
          <label className="block font-medium mb-1">Excerpt</label>
          <textarea
            name="excerpt"
            value={formData.excerpt}
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded"
            required
          />
        </div>

        {/* CONTENT */}
        <div>
          <label className="block font-medium mb-1">Content</label>
          <textarea
            name="content"
            value={formData.content}
            onChange={handleChange}
            rows={8}
            className="w-full border px-3 py-2 rounded"
            required
          />
        </div>

        {/* CATEGORY */}
        <div>
          <label className="block font-medium mb-1">Category</label>
          <select
            name="category"
            value={formData.category}
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded"
          >
            {categories.map((cat) => (
              <option key={cat}>{cat}</option>
            ))}
          </select>
        </div>

        {/* PUBLISH */}
        <div>
          <label className="inline-flex items-center">
            <input
              type="checkbox"
              name="isPublished"
              checked={formData.isPublished}
              onChange={handleChange}
              className="mr-2"
            />
            Publish
          </label>
        </div>

        {/* IMAGE UPLOAD */}
        <div>
          <label className="block font-medium mb-2">Images</label>

          <input
            type="file"
            multiple
            accept="image/*"
            onChange={handleFileChange}
          />

          {/* PREVIEW GRID */}
          {formData.images.length > 0 && (
            <div className="grid grid-cols-3 gap-4 mt-4">
              {formData.images.map((file, index) => (
                <div key={index} className="relative">
                  <img
                    src={URL.createObjectURL(file)}
                    className="w-full h-32 object-cover rounded-lg"
                  />

                  <button
                    type="button"
                    onClick={() => removeImage(index)}
                    className="absolute top-1 right-1 bg-red-600 text-white px-2 py-1 text-xs rounded"
                  >
                    Remove
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* SUBMIT */}
        <button
          type="submit"
          disabled={loading}
          className="bg-blue-600 text-white px-5 py-2 rounded hover:bg-blue-700 transition"
        >
          {loading ? "Submitting..." : "Create News"}
        </button>
      </form>
    </div>
  );
};

export default AdminNewsPage;
