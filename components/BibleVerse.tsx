"use client";

import { motion } from "framer-motion";

export default function BibleVerse() {
  return (
    <motion.section
      className="py-24 relative text-center"
      style={{ backgroundColor: "#3f2d23" }} // keep the brown background always
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="max-w-4xl mx-auto px-6">
        <p
          className="text-2xl md:text-3xl lg:text-4xl font-semibold leading-relaxed"
          style={{ color: "#fbebd4" }} // champagne color for text, always visible
        >
          “Let each of you look not only to his own interests, but also to the interests of others.”
        </p>
        <span
          className="block mt-6 font-medium text-lg"
          style={{ color: "#efc595" }} // accent color, always visible
        >
          – Philippians 2:4
        </span>
      </div>
    </motion.section>
  );
}
