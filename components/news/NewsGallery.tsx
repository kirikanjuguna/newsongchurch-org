"use client";

import { useState } from "react";

export default function NewsGallery({ images }: { images: string[] }) {
  const [index, setIndex] = useState(0);

  if (!images || images.length === 0) return null;

  const prev = () =>
    setIndex((i) => (i === 0 ? images.length - 1 : i - 1));

  const next = () =>
    setIndex((i) => (i === images.length - 1 ? 0 : i + 1));

  return (
    <div className="relative rounded-2xl overflow-hidden shadow-xl">

      <img
        src={images[index]}
        className="w-full h-[520px] object-cover"
      />

      {images.length > 1 && (
        <>
          <button
            onClick={prev}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 text-white px-4 py-2 rounded-full"
          >
            ‹
          </button>

          <button
            onClick={next}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 text-white px-4 py-2 rounded-full"
          >
            ›
          </button>
        </>
      )}
    </div>
  );
}
