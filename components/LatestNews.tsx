"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function LatestNews() {
  return (
    <section className="py-32 bg-surface">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="relative rounded-[3rem] bg-background shadow-2xl overflow-hidden"
        >
          <div className="grid lg:grid-cols-2 items-stretch">
            {/* TEXT SIDE */}
            <div className="p-14 lg:p-20 flex flex-col justify-center">
              <span className="text-sm font-medium tracking-widest uppercase text-secondary">
                Latest News
              </span>

              <h2 className="mt-4 text-4xl md:text-5xl font-semibold leading-tight text-foreground">
                Stories of Faith,
                <br />
                Service & Hope
              </h2>

              <p className="mt-8 text-lg text-secondary leading-relaxed max-w-xl">
                Discover recent updates from our church, community outreach, and
                mission work — real stories of faith in action and lives being
                transformed.
              </p>

              <Link
                href="/news"
                className="group mt-10 inline-flex items-center gap-4 text-lg font-medium text-foreground"
              >
                Explore all stories
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-accent text-foreground transition group-hover:translate-x-1">
                  <ArrowRight size={18} />
                </span>
              </Link>
            </div>

            {/* IMAGE SIDE */}
            <div className="relative min-h-105 lg:min-h-full">
              <img
                src="/news-placeholder.jpg"
                alt="Mission work with children"
                className="absolute inset-0 h-full w-full object-cover"
              />

              {/* Image overlay */}
              <div className="absolute inset-0 bg-linear-to-tr from-black/50 via-black/20 to-transparent" />
            </div>
          </div>

          {/* Soft border + glow */}
          <div className="pointer-events-none absolute inset-0 rounded-[3rem] ring-1 ring-black/5" />
        </motion.div>
      </div>
    </section>
  );
}
