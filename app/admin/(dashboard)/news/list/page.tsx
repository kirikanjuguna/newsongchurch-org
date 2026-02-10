"use client";

import useSWR from "swr";
import Link from "next/link";

const fetcher = (url: string) => fetch(url).then((r) => r.json());

export default function NewsList() {
  const { data, mutate } = useSWR("/api/news?admin=true", fetcher);

  async function deleteItem(id: string) {
    if (!confirm("Delete this news item?")) return;
    await fetch(`/api/news/${id}`, { method: "DELETE" });
    mutate();
  }

  const news = data?.news || [];

  return (
    <div className="bg-surface rounded-3xl shadow-xl p-4 md:p-10">

      <h1 className="text-2xl md:text-3xl font-semibold text-[#3f2d23] mb-6 md:mb-8">
        All News
      </h1>

      <div className="space-y-6">

        {news.map((n: any) => (
          <div
            key={n._id}
            className="
              bg-background
              rounded-2xl
              p-4
              md:p-5
              flex
              flex-col
              md:flex-row
              gap-4
              md:gap-6
              md:items-center
            "
          >

            {/* Image */}
            <img
              src={n.images?.[0]}
              className="
                w-full
                h-48
                md:w-28
                md:h-28
                object-cover
                rounded-xl
              "
            />

            {/* Text */}
            <div className="flex-1">
              <h2 className="font-semibold text-lg leading-snug">
                {n.title}
              </h2>

              <p className="text-sm text-secondary mt-1">
                {n.category}
              </p>
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 md:w-auto w-full">

              <Link
                href={`/admin/news/${n._id}/edit`}
                className="
                  w-full sm:w-auto
                  text-center
                  px-4 py-2
                  bg-accent
                  text-background
                  rounded-lg
                  font-semibold
                  hover:bg-accent/90
                  transition
                "
              >
                Edit
              </Link>

              <button
                onClick={() => deleteItem(n._id)}
                className="
                  w-full sm:w-auto
                  px-4 py-2
                  bg-red-600
                  text-white
                  rounded-lg
                  font-semibold
                  hover:bg-red-700
                  transition
                "
              >
                Delete
              </button>

            </div>

          </div>
        ))}

      </div>
    </div>
  );
}
