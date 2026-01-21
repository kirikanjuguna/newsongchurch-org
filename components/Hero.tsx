"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-end overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/hero.jpg')",
        }}
      />

      {/* Overlay: light at top, stronger at bottom */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/40 to-background" />

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
