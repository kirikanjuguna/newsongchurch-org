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
  images: string[]; // URLs of uploaded images
}

const categories = ["Mission", "Church", "Event", "Announcement"]; // replace with your actual categories

const EditNewsPage: React.FC = () => {
  const { id } = useParams(); // get news ID from URL
  const router = useRouter();

  const [formData, setFormData] = useState<{
    title: string;
    excerpt: string;
    content: string;
    category: string;
    isPublished: boolean;
    newImages: File[];
    existingImages: string[];
  }>({
    title: "",
    excerpt: "",
    content: "",
    category: "Mission",
    isPublished: true,
    newImages: [],
    existingImages: [],
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<string | null>(null);

  // Fetch news details on mount
  useEffect(() => {
    if (!id) return;
    const fetchNews = async () => {
      try {
        const res = await axios.get<{ success: boolean; news: NewsData }>(
          `/api/news/${id}`,
          { withCredentials: true }
        );
        if (res.data.success) {
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
        setMessage(err.response?.data?.message || err.message || "Failed to load news");
      }
    };
    fetchNews();
  }, [id]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const target = e.target as HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement;
    const { name, value, type } = target;
    const checked = (target as HTMLInputElement).checked;

    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFormData({
        ...formData,
        newImages: Array.from(e.target.files),
      });
    }
  };

  const removeExistingImage = (url: string) => {
    setFormData({
      ...formData,
      existingImages: formData.existingImages.filter((img) => img !== url),
    });
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

      // Include new images
      formData.newImages.forEach((file) => {
        data.append("images", file);
      });

      // Include existing images URLs
      formData.existingImages.forEach((url) => {
        data.append("existingImages", url);
      });

      const res = await axios.put<{ success: boolean; news?: NewsData; message?: string }>(
        `/api/news/${id}`,
        data,
        {
          withCredentials: true,
          headers: { "Content-Type": "multipart/form-data" },
        }
      );

      if (res.data.success) {
        setMessage("News updated successfully!");
        // Optionally redirect to admin/news page
        router.push("/admin/news");
      } else {
        setMessage(res.data.message || "Failed to update news");
      }
    } catch (err: any) {
      setMessage(err.response?.data?.message || err.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Edit News</h1>
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
          {formData.newImages.length > 0 && (
            <p className="mt-2 text-sm text-gray-600">
              {formData.newImages.length} new file(s) selected
            </p>
          )}
          {formData.existingImages.length > 0 && (
            <div className="mt-2">
              <p className="text-sm font-medium mb-1">Existing Images:</p>
              <div className="flex flex-wrap gap-2">
                {formData.existingImages.map((url) => (
                  <div key={url} className="relative">
                    <img src={url} alt="" className="w-24 h-24 object-cover rounded" />
                    <button
                      type="button"
                      onClick={() => removeExistingImage(url)}
                      className="absolute top-0 right-0 bg-red-600 text-white px-1 rounded"
                    >
                      X
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        <button
          type="submit"
          disabled={loading}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          {loading ? "Updating..." : "Update News"}
        </button>
      </form>
    </div>
  );
};

export default EditNewsPage;
