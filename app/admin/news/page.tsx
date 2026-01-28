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
  news?: any; // can type more strictly if you want
}

const categories = ["Mission", "Church", "Event", "Announcement"];

const AdminNewsPage: React.FC = () => {
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

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;
    const isCheckbox = type === "checkbox";
    const checked = isCheckbox ? (e.target as HTMLInputElement).checked : undefined;

    setFormData({
      ...formData,
      [name]: isCheckbox ? checked : value,
    } as any);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFormData({
        ...formData,
        images: Array.from(e.target.files),
      });
    }
  };

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

      formData.images.forEach((file) => data.append("images", file));

      const res = await axios.post<ApiResponse>("/api/news", data, {
        withCredentials: true,
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      const resData = res.data;

      if (resData.success) {
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
        setMessage(resData.message || "Failed to create news");
      }
    } catch (err: any) {
      setMessage(err.response?.data?.message || err.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Create News</h1>
      {message && <p className="mb-4 text-red-600">{message}</p>}
      <form onSubmit={handleSubmit} className="space-y-4">
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

        <div>
          <label className="block font-medium mb-1">Content</label>
          <textarea
            name="content"
            value={formData.content}
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded"
            required
          />
        </div>

        <div>
          <label className="block font-medium mb-1">Category</label>
          <select
            name="category"
            value={formData.category}
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded"
          >
            {categories.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>
        </div>

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

        <div>
          <label className="block font-medium mb-1">Images</label>
          <input
            type="file"
            name="images"
            multiple
            accept="image/*"
            onChange={handleFileChange}
          />
          {formData.images.length > 0 && (
            <p className="mt-2 text-sm text-gray-600">
              {formData.images.length} file(s) selected
            </p>
          )}
        </div>

        <button
          type="submit"
          disabled={loading}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          {loading ? "Submitting..." : "Create News"}
        </button>
      </form>
    </div>
  );
};

export default AdminNewsPage;
