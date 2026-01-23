"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const works = [
  {
    title: "Children’s VBS Program",
    description:
      "Empowering children through faith, learning, and joyful community activities.",
    image: "/vbs.jpg",
    href: "/projects/vbs",
  },
  {
    title: "Community Eye Clinic",
    description:
      "Providing accessible eye care and restoring vision to those in need.",
    image: "/eye-clinic.jpg",
    href: "/projects/eye-clinic",
  },
];

export default function RecentWork() {
  return (
    <section className="py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-semibold text-foreground">
            Our Recent Work
          </h2>
          <p className="mt-6 text-lg text-secondary max-w-2xl">
            A glimpse into the lives touched and communities strengthened through
            our outreach and mission programs.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-12">
          {works.map((work, index) => (
            <motion.div
              key={work.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Link
                href={work.href}
                className="group relative block h-130 rounded-[2.5rem] overflow-hidden shadow-xl
                           transition-all duration-500
                           hover:-translate-y-4 hover:shadow-2xl"
              >
                {/* Image */}
                <img
                  src={work.image}
                  alt={work.title}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/30 to-transparent" />

                {/* Content */}
                <div className="relative z-10 flex h-full flex-col justify-end p-12">
                  <h3 className="text-3xl font-semibold text-white">
                    {work.title}
                  </h3>
                  <p className="mt-4 text-white/90 text-lg max-w-md">
                    {work.description}
                  </p>

                  <span className="mt-8 inline-flex items-center gap-2 text-white font-medium">
                    Learn more
                    <ArrowUpRight size={18} />
                  </span>
                </div>

                {/* Glow ring */}
                <div className="pointer-events-none absolute inset-0 rounded-[2.5rem]
                                ring-1 ring-white/10" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
