"use client";

import { motion } from "framer-motion";

export default function BibleVerse() {
  return (
    <motion.section
      className="bg-[#3f2d23] py-24 relative text-center"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="max-w-4xl mx-auto px-6">
        <p className="text-2xl md:text-3xl lg:text-4xl font-semibold text-foreground/90 leading-relaxed">
          “Let each of you look not only to his own interests, but also to the interests of others.”
        </p>
        <span className="block mt-6 text-accent font-medium text-lg">– Philippians 2:4</span>
      </div>
    </motion.section>
  );
}
