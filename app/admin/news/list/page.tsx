"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";

interface NewsItem {
  _id: string;
  title: string;
  excerpt: string;
  category: string;
  isPublished: boolean;
  createdAt: string;
}

const AdminNewsList: React.FC = () => {
  const [newsList, setNewsList] = useState<NewsItem[]>([]);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<string | null>(null);

  const fetchNews = async () => {
    setLoading(true);
    try {
      const res = await axios.get("/api/news", { withCredentials: true });
      if ((res.data as any).success) {
        setNewsList((res.data as any).news);
      } else {
        setMessage("Failed to fetch news");
      }
    } catch (err: any) {
      setMessage(err.response?.data?.message || err.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchNews();
  }, []);

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this news item?")) return;
    try {
      const res = await axios.delete(`/api/news/${id}`, { withCredentials: true });
      if ((res.data as any).success) {
        setNewsList(newsList.filter((item) => item._id !== id));
        setMessage("News deleted successfully");
      } else {
        setMessage((res.data as any).message || "Failed to delete news");
      }
    } catch (err: any) {
      setMessage(err.response?.data?.message || err.message || "Something went wrong");
    }
  };

  return (
    <div className="p-6 max-w-5xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Manage News</h1>
      {message && <p className="mb-4 text-red-600">{message}</p>}

      <Link href="/admin/news" className="inline-block mb-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
        + Create New
      </Link>

      {loading ? (
        <p>Loading news...</p>
      ) : newsList.length === 0 ? (
        <p>No news found.</p>
      ) : (
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-100">
              <th className="border px-4 py-2 text-left">Title</th>
              <th className="border px-4 py-2">Category</th>
              <th className="border px-4 py-2">Published</th>
              <th className="border px-4 py-2">Created At</th>
              <th className="border px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {newsList.map((news) => (
              <tr key={news._id}>
                <td className="border px-4 py-2">{news.title}</td>
                <td className="border px-4 py-2 text-center">{news.category}</td>
                <td className="border px-4 py-2 text-center">{news.isPublished ? "Yes" : "No"}</td>
                <td className="border px-4 py-2 text-center">{new Date(news.createdAt).toLocaleString()}</td>
                <td className="border px-4 py-2 text-center space-x-2">
                  <Link
                    href={`/admin/news/${news._id}/edit`}
                    className="bg-yellow-500 text-white px-2 py-1 rounded hover:bg-yellow-600"
                  >
                    Edit
                  </Link>
                  <button
                    onClick={() => handleDelete(news._id)}
                    className="bg-red-600 text-white px-2 py-1 rounded hover:bg-red-700"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default AdminNewsList;
