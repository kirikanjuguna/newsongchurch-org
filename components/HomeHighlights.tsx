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
    image: "/home/church.jpg",
  },
  {
    title: "Community",
    description:
      "Serving families and individuals through outreach, compassion, and practical support.",
    href: "/community",
    icon: Users,
    image: "/home/community.jpg",
  },
  {
    title: "Mission Work",
    description:
      "Transforming lives through education, healthcare, and faith-driven missions.",
    href: "/mission",
    icon: Globe,
    image: "/home/mission.jpg",
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
                  className="group relative block h-full overflow-hidden rounded-3xl
                             transition-all duration-500
                             hover:-translate-y-3"
                >
                  {/* Glow layer */}
                  <div
                    className="absolute -inset-1 rounded-3xl
                               bg-accent/30 blur-xl opacity-60
                               transition-all duration-500
                               group-hover:opacity-90
                               group-hover:blur-2xl"
                  />

                  {/* Card */}
                  <div
                    className="relative z-10 h-full overflow-hidden rounded-3xl
                               shadow-[0_12px_32px_rgba(239,197,149,0.35)]
                               group-hover:shadow-[0_20px_48px_rgba(239,197,149,0.55)]
                               transition-shadow duration-500"
                  >
                    {/* Background Image */}
                    <div
                      className="absolute inset-0 bg-cover bg-center transition-transform duration-700
                                 group-hover:scale-105"
                      style={{ backgroundImage: `url(${item.image})` }}
                    />

                    {/* Overlay */}
                    <div
                      className="absolute inset-0 bg-linear-to-b
                                 from-black/30 via-black/55 to-black/85"
                    />

                    {/* Content */}
                    <div className="relative z-10 p-12 text-white h-full flex flex-col">
                      {/* Icon */}
                      <div
                        className="mb-10 inline-flex h-16 w-16 items-center justify-center
                                   rounded-2xl bg-white/15 backdrop-blur-sm"
                      >
                        <Icon size={30} strokeWidth={1.5} />
                      </div>

                      <h3 className="text-2xl font-semibold mb-4">
                        {item.title}
                      </h3>

                      <p className="text-white/85 leading-relaxed max-w-sm">
                        {item.description}
                      </p>

                      <span className="mt-auto pt-10 inline-flex items-center gap-2 font-medium">
                        Learn more
                        <span className="transition-transform group-hover:translate-x-1">
                          →
                        </span>
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
