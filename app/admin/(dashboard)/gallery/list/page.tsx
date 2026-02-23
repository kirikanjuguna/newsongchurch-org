"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

interface Item {
  _id: string;
  title: string;
  imageUrl: string;
}

export default function GalleryListPage() {
  const [items, setItems] = useState<Item[]>([]);

  async function fetchItems() {
    const res = await fetch("/api/gallery/list");
    const data = await res.json();
    setItems(data.items);
  }

  async function handleDelete(id: string) {
    if (!confirm("Delete this image?")) return;

    await fetch(`/api/gallery/${id}`, {
      method: "DELETE",
    });

    fetchItems();
  }

  useEffect(() => {
    fetchItems();
  }, []);

  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-semibold">Gallery Items</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {items.map((item) => (
          <div key={item._id} className="border rounded-xl p-4 space-y-3">
            <Image
              src={item.imageUrl}
              alt={item.title}
              width={400}
              height={400}
              className="rounded-lg"
            />

            <p className="font-medium">{item.title}</p>

            <button
              onClick={() => handleDelete(item._id)}
              className="text-red-600 text-sm"
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}