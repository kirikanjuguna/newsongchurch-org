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
        <div className="absolute inset-0 bg-black/30" />

        <div className="relative z-10 h-full flex items-end">
          <div className="max-w-7xl mx-auto px-6 pb-12 md:pb-16 w-full text-center">
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="text-white text-4xl md:text-6xl font-extrabold leading-tight"
            >
              15 YEARS OF MISSIONS WORK IN THE MUKURU COMMUNITY
            </motion.h1>

            {/* centered aesthetic underline */}
            <div className="mt-6 h-[3px] w-28 bg-white/80 rounded-full mx-auto" />
          </div>
        </div>
      </section>


      {/* ================= IMAGE COLLAGE + TEXT (EYE CLINIC) ================= */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-6">

          {/* left tall image */}
          <img
            src="/mission/eye-clinic.jpg"
            alt="Eye Clinic"
            className="h-[520px] w-full object-cover rounded-2xl"
          />

          {/* middle stacked images */}
          <div className="grid gap-6">
            <img
              src="/mission/community.jpg"
              alt="Community Outreach"
              className="h-[250px] w-full object-cover rounded-2xl"
            />
            <img
              src="/mission/thirdeyeclinic-photo.jpg"
              alt="Prayer Fellowship"
              className="h-[250px] w-full object-cover rounded-2xl"
            />
          </div>

          {/* text block */}
          <div className="h-[520px] rounded-2xl bg-muted/40 p-8 overflow-y-auto">
            <div className="space-y-5">
              <h3 className="text-2xl font-semibold">
                Eye Clinic Outreach Impact
              </h3>

              {/* subtle divider */}
              <div className="h-[2px] w-16 bg-foreground/30 rounded" />

              <p>
                For the last three years, 1,500 people have been assisted through
                free eye screenings, and more than 1,000 have received free
                eyeglasses through our NEW EYES Initiative, in partnership with the
                mobile eye care team Macho kwa Yesu from ECF Church, Oregon.
              </p>

              <p>
                This ministry serves those who cannot afford the cost of vision
                care. In collaboration with local medical organizations such as the
                Kenya Society of the Blind and Good Vision Kenya, we have worked
                alongside the ECF Eye Team to bring much-needed help to those who
                are hurting in our community.
              </p>

              <p>
                Our eye clinic outreach does not discriminate against tribe, race,
                or religion. Our church’s professional medical team, led by Mary
                Keziah, has ensured that both Christians and Muslims are served with
                compassion and care for the glory of God.
              </p>

              <p className="font-medium">
                Next outreach expansion: Kampala, Uganda — December 2026.
              </p>
            </div>
          </div>

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
              Our missions work in the Mukuru area is focused on addressing
              both spiritual and practical needs among vulnerable populations.
              Mukuru is characterized by high levels of poverty, limited
              access to basic services, unemployment, and overcrowded living
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
            { title: "CARE", img: "/mission/eye-care.jpg" },
            { title: "EMPOWERMENT", img: "/mission/empowerment.jpg" },
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
              <div className="absolute inset-0 bg-black/35" />
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
              Water is life, but inorder for water to give life it must be
              clean and safe for drinking. Unfortunately that is not the case
              for the Mukuru residents. The physical water available is
              contaminated, and water-borne disease is the leading cause of
              illness and death.
            </p>

            <p>
              Over the years we have partnered with different well wishers
              like Don Arnold, Water Mission and Business Connect to bring
              water filters to families that need them the most. Many of our
              church members have benefited from these water filters that
              provide clean and safe drinking water in their homes.
            </p>
          </div>
        </div>
      </section>

      {/* ================= MAASAI MISSIONS ================= */}
      <section className="py-28">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-6">

          {/* left tall image */}
          <img
            src="/mission/maasai-church.jpg"
            alt="Maasai Church"
            className="h-[520px] w-full object-cover rounded-2xl"
          />

          {/* middle stacked images */}
          <div className="grid gap-6">
            <img
              src="/mission/maasai-women.jpg"
              alt="Maasai Women"
              className="h-[250px] w-full object-cover rounded-2xl"
            />
            <img
              src="/mission/maasai-women.jpg"
              alt="Maasai Women "
              className="h-[250px] w-full object-cover rounded-2xl"
            />
          </div>

          {/* text block */}
          <div className="h-[520px] rounded-2xl bg-muted/40 p-8 overflow-y-auto">
            <div className="space-y-5">
              <h3 className="text-2xl font-semibold">
                Missions to the Maasai Church – Kitengela
              </h3>

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
