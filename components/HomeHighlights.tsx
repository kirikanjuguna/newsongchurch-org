"use client";

import Link from "next/link";
import { Church, Users, Globe } from "lucide-react";
import { motion } from "framer-motion";

const highlights = [
  {
    title: "Our Church",
    description:
      "A Christ-centered church devoted to worship, discipleship, and spiritual growth.",
    href: "/church",
    icon: Church,
  },
  {
    title: "Community",
    description:
      "Serving families and individuals through outreach, compassion, and practical support.",
    href: "/community",
    icon: Users,
  },
  {
    title: "Mission Work",
    description:
      "Transforming lives through education, healthcare, and faith-driven missions.",
    href: "/mission",
    icon: Globe,
  },
];

export default function HomeHighlights() {
  return (
    <section className="relative -mt-24 pb-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid gap-10 md:grid-cols-3">
          {highlights.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: index * 0.12 }}
                viewport={{ once: true }}
              >
                <Link
                href={item.href}
                className="group block h-full rounded-3xl
                            bg-black/80 backdrop-blur-sm text-white
                            p-12 shadow-[0_8px_24px_rgba(239,197,149,0.25)] border border-black/5
                            transition-all duration-300
                            hover:-translate-y-3 hover:shadow-[0_12px_32px_rgba(239,197,149,0.35)]"
                >

                  {/* Icon */}
                  <div
                    className="mb-10 inline-flex h-16 w-16 items-center justify-center
                               rounded-2xl bg-accent/40 text-foreground"
                  >
                    <Icon size={30} strokeWidth={1.5} />
                  </div>

                  <h3 className="text-2xl font-semibold mb-4">
                    {item.title}
                  </h3>

                  <p className="text-secondary leading-relaxed">
                    {item.description}
                  </p>

                  <span className="mt-10 inline-flex items-center gap-2 font-medium">
                    Learn more
                    <span className="transition group-hover:translate-x-1">
                      →
                    </span>
                  </span>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
