"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('/hero.jpg')",
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-background" />

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative max-w-7xl mx-auto px-6 pt-40 pb-56 text-center text-white"
      >
        <h1 className="text-4xl md:text-6xl font-semibold max-w-4xl mx-auto leading-tight">
          Serving God. <br className="hidden md:block" />
          Serving People. <br className="hidden md:block" />
          Transforming Communities.
        </h1>

        <p className="mt-8 max-w-2xl mx-auto text-lg text-white/90">
          New Song Church exists to share the love of Christ through worship,
          community outreach, and mission-driven service.
        </p>
      </motion.div>
    </section>
  );
}
