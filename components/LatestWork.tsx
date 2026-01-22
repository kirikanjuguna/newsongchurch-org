"use client";

import { motion } from "framer-motion";

const works = [
  { title: "Kids VBS", image: "/vbs.jpg" },
  { title: "Eye Clinic", image: "/eye-clinic.jpg" },
];

export default function LatestWork() {
  return (
    <section className="py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-6 text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-semibold text-foreground">
          Our Recent Work
        </h2>
      </div>

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-8">
        {works.map((work, index) => (
          <motion.div
            key={work.title}
            className="relative group overflow-hidden rounded-3xl shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <img
              src={work.image}
              alt={work.title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
              <h3 className="text-white text-2xl font-semibold">{work.title}</h3>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
