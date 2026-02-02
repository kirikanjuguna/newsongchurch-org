"use client";

import useSWR from "swr";
import Link from "next/link";

const fetcher = (url: string) => fetch(url).then(r => r.json());

export default function NewsList() {
  const { data, mutate } = useSWR("/api/news?admin=true", fetcher);

  async function deleteItem(id: string) {
    if (!confirm("Delete this news item?")) return;
    await fetch(`/api/news/${id}`, { method: "DELETE" });
    mutate();
  }

  const news = data?.news || [];

  return (
    <div className="bg-surface rounded-3xl shadow-xl p-10">
      <h1 className="text-3xl font-semibold mb-8">All News</h1>

      <div className="space-y-6">
        {news.map((n: any) => (
          <div key={n._id} className="flex gap-6 items-center bg-background p-5 rounded-2xl">

            <img
              src={n.images?.[0]}
              className="w-28 h-28 object-cover rounded-xl"
            />

            <div className="flex-1">
              <h2 className="font-semibold">{n.title}</h2>
              <p className="text-sm text-secondary">{n.category}</p>
            </div>

            <Link
              href={`/admin/news/${n._id}/edit`}
              className="px-4 py-2 bg-accent text-background rounded-lg font-semibold hover:bg-accent/90 transition"
            >
              Edit
            </Link>

            <button
              onClick={() => deleteItem(n._id)}
              className="px-4 py-2 bg-red-600 text-white rounded-lg font-semibold hover:bg-red-700 transition"
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
