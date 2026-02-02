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
    if (!e.target.files) return;
    setImages([...images, ...Array.from(e.target.files)]);
  }

  function removeImage(i: number) {
    setImages(images.filter((_, idx) => idx !== i));
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setMsg("");

    const fd = new FormData(e.currentTarget);
    images.forEach(f => fd.append("images", f));

    const res = await fetch("/api/news", { method: "POST", body: fd });

    setLoading(false);
    setMsg(res.ok ? "News created" : "Failed");

    if (res.ok) {
      e.currentTarget.reset();
      setImages([]);
    }
  }

  return (
    <div className="bg-surface rounded-3xl shadow-xl p-10">
      <h1 className="text-3xl font-semibold mb-8">Create News</h1>

      <form onSubmit={handleSubmit} className="space-y-6">

        <input name="title" required placeholder="Title" className={input}/>
        <input name="excerpt" required placeholder="Excerpt" className={input}/>

        <select name="category" className={input}>
          {categories.map(c => <option key={c}>{c}</option>)}
        </select>

        <textarea name="content" rows={6} required className={input}/>

        <label className="flex gap-2 items-center">
          <input type="checkbox" name="isPublished" value="true"/>
          Publish
        </label>

        <input type="file" multiple onChange={handleImageChange} />

        <div className="grid grid-cols-3 gap-4">
          {images.map((img,i)=>(
            <div key={i} className="relative">
              <img src={URL.createObjectURL(img)} className="h-40 w-full object-cover rounded-xl"/>
              <button type="button" onClick={()=>removeImage(i)}
                className="absolute top-2 right-2 bg-black/70 text-white px-2 rounded-full">
                ✕
              </button>
            </div>
          ))}
        </div>

        <button className="bg-accent text-foreground px-6 py-3 rounded-xl font-semibold">
          {loading ? "Saving..." : "Create"}
        </button>

        {msg && <p>{msg}</p>}
      </form>
    </div>
  );
}

const input = "w-full border border-secondary/30 rounded-xl px-4 py-3 bg-background";
