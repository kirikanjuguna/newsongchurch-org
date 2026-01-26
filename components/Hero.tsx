"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const slides = [
  "/slide-1.jpg",
  "/slide-2.jpg",
  "/slide-3.jpg",
  "/slide-4.jpg",
  "/slide-5.jpg",
];

export default function Hero() {
  const [index, setIndex] = useState(0);

  // Auto-slide every 6 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-end overflow-hidden">
      {/* 🔄 Background Slider */}
      <AnimatePresence mode="wait">
        <motion.div
          key={slides[index]}
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('${slides[index]}')` }}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
        />
      </AnimatePresence>

      {/* Overlay: light at top, stronger at bottom */}
      <div className="absolute inset-0 bg-linear-to-b from-black/20 via-black/40 to-background" />

      {/* Content (lower third) */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        className="relative w-full"
      >
        <div className="max-w-7xl mx-auto px-6 pb-56 text-center text-white">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold max-w-4xl mx-auto leading-tight">
            Serving God. <br className="hidden md:block" />
            Serving People. <br className="hidden md:block" />
            Transforming Communities.
          </h1>

          <p className="mt-6 max-w-2xl mx-auto text-lg text-white/85">
            Sharing the love of Christ through worship, community outreach,
            and mission-driven service.
          </p>
        </div>
      </motion.div>
    </section>
  );
}
