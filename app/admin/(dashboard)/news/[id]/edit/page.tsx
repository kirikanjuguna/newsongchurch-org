"use client";

import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useRouter } from "next/navigation";

interface NewsData {
  title: string;
  excerpt: string;
  content: string;
  category: string;
  isPublished: boolean;
  images: string[];
}

interface ApiResponse {
  success: boolean;
  message?: string;
  news?: NewsData;
}

const categories = ["Mission", "Church", "Event", "Announcement"];

const EditNewsPage: React.FC = () => {
  const { id } = useParams();
  const router = useRouter();

  const [formData, setFormData] = useState({
    title: "",
    excerpt: "",
    content: "",
    category: "Mission",
    isPublished: true,
    newImages: [] as File[],
    existingImages: [] as string[],
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<string | null>(null);

  /* ================= FETCH NEWS ================= */

  useEffect(() => {
    if (!id) return;

    const fetchNews = async () => {
      try {
        const res = await axios.get<ApiResponse>(`/api/news/${id}`, {
          withCredentials: true,
        });

        if (res.data.success && res.data.news) {
          const news = res.data.news;

          setFormData({
            title: news.title,
            excerpt: news.excerpt,
            content: news.content,
            category: news.category,
            isPublished: news.isPublished,
            newImages: [],
            existingImages: news.images || [],
          });
        }
      } catch (err: any) {
        setMessage(err.response?.data?.message || "Failed to load news");
      }
    };

    fetchNews();
  }, [id]);

  /* ================= FORM HANDLERS ================= */

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;

    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;

    setFormData({
      ...formData,
      newImages: [...formData.newImages, ...Array.from(e.target.files)],
    });
  };

  /* ================= REMOVE IMAGES ================= */

  const removeExistingImage = (url: string) => {
    setFormData({
      ...formData,
      existingImages: formData.existingImages.filter((img) => img !== url),
    });
  };

  const removeNewImage = (index: number) => {
    const updated = [...formData.newImages];
    updated.splice(index, 1);

    setFormData({
      ...formData,
      newImages: updated,
    });
  };

  /* ================= SUBMIT ================= */

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

      formData.newImages.forEach((file) => {
        data.append("images", file);
      });

      formData.existingImages.forEach((url) => {
        data.append("existingImages", url);
      });

      const res = await axios.put<ApiResponse>(`/api/news/${id}`, data, {
        withCredentials: true,
        headers: { "Content-Type": "multipart/form-data" },
      });

      if (res.data.success) {
        router.push("/admin/news");
      } else {
        setMessage(res.data.message || "Update failed");
      }
    } catch (err: any) {
      setMessage(err.response?.data?.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  /* ================= UI ================= */

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Edit News</h1>

      {message && (
        <p className="mb-4 text-red-600 font-medium">{message}</p>
      )}

      <form
        onSubmit={handleSubmit}
        className="space-y-6 bg-[var(--color-surface)] p-6 rounded-xl shadow"
      >
        {/* TITLE */}
        <div>
          <label className="block font-semibold mb-1">Title</label>
          <input
            name="title"
            value={formData.title}
            onChange={handleChange}
            className="w-full border border-[var(--color-secondary)] rounded px-3 py-2"
            required
          />
        </div>

        {/* EXCERPT */}
        <div>
          <label className="block font-semibold mb-1">Excerpt</label>
          <textarea
            name="excerpt"
            value={formData.excerpt}
            onChange={handleChange}
            className="w-full border border-[var(--color-secondary)] rounded px-3 py-2"
            required
          />
        </div>

        {/* CONTENT */}
        <div>
          <label className="block font-semibold mb-1">Content</label>
          <textarea
            name="content"
            value={formData.content}
            rows={8}
            onChange={handleChange}
            className="w-full border border-[var(--color-secondary)] rounded px-3 py-2"
            required
          />
        </div>

        {/* CATEGORY */}
        <div>
          <label className="block font-semibold mb-1">Category</label>
          <select
            name="category"
            value={formData.category}
            onChange={handleChange}
            className="w-full border border-[var(--color-secondary)] rounded px-3 py-2"
          >
            {categories.map((cat) => (
              <option key={cat}>{cat}</option>
            ))}
          </select>
        </div>

        {/* PUBLISH */}
        <label className="flex items-center gap-2 font-medium">
          <input
            type="checkbox"
            name="isPublished"
            checked={formData.isPublished}
            onChange={handleChange}
          />
          Publish
        </label>

        {/* IMAGE UPLOAD */}
        <div>
          <label className="block font-semibold mb-2">Upload Images</label>

          <input
            type="file"
            multiple
            accept="image/*"
            onChange={handleFileChange}
          />
        </div>

        {/* EXISTING IMAGES */}
        {formData.existingImages.length > 0 && (
          <div>
            <h3 className="font-semibold mb-2">Existing Images</h3>

            <div className="grid grid-cols-3 md:grid-cols-4 gap-3">
              {formData.existingImages.map((url) => (
                <div key={url} className="relative">
                  <img
                    src={url}
                    className="w-full h-28 object-cover rounded"
                  />

                  <button
                    type="button"
                    onClick={() => removeExistingImage(url)}
                    className="absolute top-1 right-1 bg-red-600 text-white px-2 rounded text-sm"
                  >
                    ✕
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* NEW IMAGE PREVIEW */}
        {formData.newImages.length > 0 && (
          <div>
            <h3 className="font-semibold mb-2">New Images</h3>

            <div className="grid grid-cols-3 md:grid-cols-4 gap-3">
              {formData.newImages.map((file, index) => (
                <div key={index} className="relative">
                  <img
                    src={URL.createObjectURL(file)}
                    className="w-full h-28 object-cover rounded"
                  />

                  <button
                    type="button"
                    onClick={() => removeNewImage(index)}
                    className="absolute top-1 right-1 bg-red-600 text-white px-2 rounded text-sm"
                  >
                    ✕
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* SUBMIT */}
        <button
          disabled={loading}
          className="bg-[var(--color-accent)] hover:opacity-90 text-[var(--color-foreground)] px-6 py-2 rounded font-semibold"
        >
          {loading ? "Updating..." : "Update News"}
        </button>
      </form>
    </div>
  );
};

export default EditNewsPage;
