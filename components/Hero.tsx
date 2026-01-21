"use client";

import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1507692049790-de58290a4334?q=80&w=2070&auto=format&fit=crop')",
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-background/80" />

      {/* Content */}
      <div className="relative z-10 max-w-4xl px-6 mx-auto text-center">
        <h1 className="text-4xl md:text-6xl font-semibold leading-tight">
          A Church on Mission
        </h1>

        <p className="mt-6 text-lg md:text-xl text-secondary max-w-2xl mx-auto">
          New Song Church exists to love God, serve people, and transform
          communities through faith, compassion, and purpose.
        </p>

        <div className="mt-10 flex justify-center gap-4">
          <Link
            href="/mission"
            className="px-6 py-3 rounded-xl bg-accent text-foreground font-medium hover:opacity-90 transition"
          >
            Our Mission
          </Link>

          <Link
            href="/about"
            className="px-6 py-3 rounded-xl border border-secondary text-foreground hover:bg-surface transition"
          >
            Learn More
          </Link>
        </div>
      </div>
    </section>
  );
}
