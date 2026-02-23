"use client";

import { useState } from "react";

export default function CreateGalleryPage() {
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.currentTarget);

    const res = await fetch("/api/gallery/create", {
      method: "POST",
      body: formData,
    });

    const data = await res.json();

    if (data.success) {
      alert("Uploaded successfully");
      e.currentTarget.reset();
    } else {
      alert("Upload failed");
    }

    setLoading(false);
  }

  return (
    <div className="max-w-3xl mx-auto space-y-8">
      <h1 className="text-3xl font-semibold">Upload Gallery Image</h1>

      <form onSubmit={handleSubmit} className="space-y-6">

        <input
          name="title"
          placeholder="Title"
          required
          className="w-full border p-3 rounded-lg"
        />

        <select
          name="category"
          required
          className="w-full border p-3 rounded-lg"
        >
          <option value="worship">Worship</option>
          <option value="children">Children</option>
          <option value="women">Women</option>
          <option value="men">Men</option>
          <option value="outreach">Outreach</option>
          <option value="boma">Boma</option>
          <option value="events">Events</option>
        </select>

        <textarea
          name="description"
          placeholder="Description (optional)"
          className="w-full border p-3 rounded-lg"
        />

        <input
          type="file"
          name="image"
          accept="image/*"
          required
          className="w-full"
        />

        <button
          type="submit"
          disabled={loading}
          className="bg-accent text-foreground px-6 py-3 rounded-lg"
        >
          {loading ? "Uploading..." : "Upload"}
        </button>

      </form>
    </div>
  );
}