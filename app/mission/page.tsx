"use client";

import { motion } from "framer-motion";

export default function MissionPage() {
  return (
    <main className="bg-background text-foreground">

      {/* ================= HERO ================= */}
      <section className="relative h-[100svh] overflow-hidden">
        <img
          src="/mission/hero.jpg"
          alt="Mission Work"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/55" />

        <div className="relative z-10 h-full flex items-end">
          <div className="max-w-7xl mx-auto px-6 pb-24">
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="text-white text-4xl md:text-6xl font-bold leading-tight"
            >
              15 YEARS OF MISSION
              <br />
              IN MUKURU & KITENGELA
            </motion.h1>
          </div>
        </div>
      </section>

      {/* ================= IMAGE TRIPTYCH ================= */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-6">
          <img
            src="/mission/maasai-women.jpg"
            alt="Maasai Women"
            className="h-[520px] w-full object-cover rounded-2xl"
          />
          <div className="grid gap-6">
            <img
              src="/mission/community.jpg"
              alt="Community Outreach"
              className="h-[250px] w-full object-cover rounded-2xl"
            />
            <img
              src="/mission/prayer.jpg"
              alt="Prayer Fellowship"
              className="h-[250px] w-full object-cover rounded-2xl"
            />
          </div>
          <img
            src="/mission/children.jpg"
            alt="Children Ministry"
            className="h-[520px] w-full object-cover rounded-2xl"
          />
        </div>
      </section>

      {/* ================= MUKURU STORY ================= */}
      <section className="py-28 bg-muted/30">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <img
            src="/mission/mukuru.jpg"
            alt="Mukuru Community"
            className="h-[520px] w-full object-cover rounded-3xl"
          />

          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-semibold">
              Mission Work in Mukuru
            </h2>

            <p>
              Through joint-partnership with ECF church in Oregon thousands of
              people have been reached through our missions work outreaches
              running for the last 15 years in the Mukuru community.
            </p>

            <p>
              Our missions work in the Mukuru area is focused on addressing both
              spiritual and practical needs among vulnerable populations.
              Mukuru is characterized by high levels of poverty, limited access
              to basic services, unemployment, and overcrowded living
              conditions.
            </p>

            <p>
              During this period, we partnered with local leaders and
              community-based organizations to ensure our work is culturally
              relevant and sustainable.
            </p>
          </div>
        </div>
      </section>

      {/* ================= IMPACT STRIP ================= */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-6">
          {[
            { title: "HEALTH", img: "/mission/eye-clinic.jpg" },
            { title: "EMPOWERMENT", img: "/mission/youth.jpg" },
            { title: "HOPE", img: "/mission/women-training.jpg" },
          ].map((item) => (
            <div
              key={item.title}
              className="relative h-[420px] rounded-3xl overflow-hidden"
            >
              <img
                src={item.img}
                alt={item.title}
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-black/55" />
              <div className="relative z-10 h-full flex items-end p-8">
                <h3 className="text-white text-2xl font-semibold">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ================= SAFE WATER ================= */}
      <section className="py-28 bg-muted/40">
        <div className="max-w-5xl mx-auto px-6 space-y-10">
          <img
            src="/mission/water-filters.jpg"
            alt="Safe Water Filters"
            className="w-full h-[520px] object-cover rounded-3xl"
          />

          <div className="space-y-5">
            <h2 className="text-3xl font-semibold">
              Mukuru Safe Water Filter Installation
            </h2>

            <p>
              The people of the Mukuru slum are in desperate need of safe
              drinking water. The physical water available is contaminated,
              and water-borne disease is the leading cause of illness and
              death.
            </p>

            <p>
              Through Missionary Don Arnold, New Song partnered with Water
              Mission Kitale and brought Kohler Clarity water filters into the
              Mukuru homes of our church members. To this day, these filters
              continue to provide safe clean drinking water.
            </p>
          </div>
        </div>
      </section>

      {/* ================= MAASAI MISSIONS ================= */}
      <section className="py-28">
        <div className="max-w-7xl mx-auto px-6 space-y-24">

          <div className="grid md:grid-cols-2 gap-16 items-center">
            <img
              src="/mission/maasai-church.jpg"
              alt="Maasai Church"
              className="h-[520px] w-full object-cover rounded-3xl"
            />

            <div className="space-y-6">
              <h2 className="text-3xl font-semibold">
                Missions to the Maasai Church – Kitengela
              </h2>

              <p>
                For the last 10 years, our missions work among the Maasai
                community in Kitengela has empowered the Christian community
                through the Word of God.
              </p>

              <p>
                Working closely with Pastor Elvis Olakira of W.P.C Church,
                elders, and families, we have shared the love of Jesus through
                community visits, Bible teaching, eye clinics, women Bible
                studies, and youth exchanges.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* ================= CLOSING ================= */}
      <section className="relative py-32">
        <img
          src="/mission/closing.jpg"
          alt="Mission Closing"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/70" />

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center text-white space-y-6">
          <p className="text-2xl md:text-3xl font-medium">
            Serving with compassion, dignity, and respect.
          </p>
          <p className="text-white/80">
            Presence. Humility. Partnership.
          </p>
        </div>
      </section>

    </main>
  );
}
