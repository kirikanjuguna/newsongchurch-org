"use client";

import { useState } from "react";

export default function NewsGallery({ images }: { images: string[] }) {
  const [index, setIndex] = useState(0);
  if (!images?.length) return null;

  const prev = () =>
    setIndex(i => (i === 0 ? images.length - 1 : i - 1));

  const next = () =>
    setIndex(i => (i === images.length - 1 ? 0 : i + 1));

  return (
    <div className="relative rounded-2xl overflow-hidden shadow-lg">

      <img
        src={images[index]}
        className="w-full h-[380px] md:h-[420px] object-cover"
      />

      {images.length > 1 && (
        <>
          <button
            onClick={prev}
            className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/60 text-white w-10 h-10 rounded-full"
          >
            ‹
          </button>

          <button
            onClick={next}
            className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/60 text-white w-10 h-10 rounded-full"
          >
            ›
          </button>
        </>
      )}
    </div>
  );
}
