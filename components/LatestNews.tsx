"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function LatestNews() {
  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        {/* Text */}
        <motion.div
          className="space-y-6"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-semibold text-foreground">
            Latest News
          </h2>
          <p className="text-secondary leading-relaxed">
            Check out our recent activities and mission work. Stay updated with the lives we are touching and the communities we are serving.
          </p>
          <Link
            href="/news"
            className="inline-block px-6 py-3 bg-accent text-foreground rounded-xl font-medium hover:bg-accent/90 transition"
          >
            View All News
          </Link>
        </motion.div>

        {/* Image */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <img
            src="/news-placeholder.jpg"
            alt="Community Mission"
            className="rounded-3xl shadow-lg object-cover w-full h-full"
          />
        </motion.div>
      </div>
    </section>
  );
}
