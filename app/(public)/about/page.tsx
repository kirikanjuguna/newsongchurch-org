"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const tabs = [
  { id: "who", label: "Who We Are" },
  { id: "beliefs", label: "Our Beliefs" },
  { id: "vision", label: "Vision & Mission" },
  { id: "serve", label: "Where We Serve" },
  { id: "oversight", label: "Ministry Oversight" },
];

export default function AboutPage() {
  const [active, setActive] = useState("who");

  return (
    <section className="relative py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl mb-20"
        >
          <h1 className="text-4xl md:text-5xl font-extrabold text-foreground tracking-tight">
            About New Song Chapel
          </h1>
          <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
            A fellowship of believers committed to Christ, community, and transformational love.
          </p>
        </motion.div>

        {/* Layout */}
        <div className="grid grid-cols-1 md:grid-cols-[280px_1fr] gap-12">
          {/* Tabs */}
          <aside className="md:sticky md:top-28 self-start">
            <ul className="flex md:flex-col gap-3">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActive(tab.id)}
                  className={`text-left px-5 py-3 rounded-xl font-medium transition-all duration-300
                  ${
                    active === tab.id
                      ? "bg-[#D79A59] text-accent-foreground shadow-lg"
                      : "bg-card text-foreground/70 hover:bg-accent/10"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </ul>
          </aside>

          {/* Content */}
          <div className="space-y-20">
            {active === "who" && <WhoWeAre />}
            {active === "beliefs" && <Beliefs />}
            {active === "vision" && <VisionMission />}
            {active === "serve" && <WhereWeServe />}
            {active === "oversight" && <Oversight />}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- SECTION WRAPPER ---------------- */

function Section({ title, children }: { title: string; children: any }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-4xl"
    >
      <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-6">
        {title}
      </h2>
      <div className="space-y-6 text-lg leading-relaxed text-muted-foreground">
        {children}
      </div>
    </motion.div>
  );
}

/* ---------------- CARD ---------------- */

function Card({ children }: { children: any }) {
  return (
    <div className="rounded-3xl bg-black/80 backdrop-blur-sm text-white
      p-12 shadow-[0_8px_24px_rgba(239,197,149,0.25)]
      transition-all duration-300 hover:-translate-y-3
      hover:shadow-[0_12px_32px_rgba(239,197,149,0.35)]">
      {children}
    </div>
  );
}

/* ---------------- WHO ---------------- */

function WhoWeAre() {
  return (
    <Section title="Who We Are">
      <Card>
        <p>We are a fellowship of believers committed to Jesus Christ as our Lord and Savior.</p>
        <p>We are a mission-driven African church committed to the spread of the Gospel in East Africa.</p>
        <p>
          Commissioned to serve the un-served, love the un-loved, and reach the un-reached in our communities.
        </p>
        <p className="italic text-accent">
          “Love the Lord your God with all your heart… and love your neighbor as yourself.” — Matthew 22:37–39
        </p>
      </Card>
    </Section>
  );
}

/* ---------------- BELIEFS ---------------- */

function Beliefs() {
  return (
    <Section title="Our Beliefs">
      <Card>
        <ul className="space-y-4 list-disc list-inside">
          <li>We believe in one God — the God of love and mercy.</li>
          <li>We believe believers are called to serve the needy and poor.</li>
          <li className="italic text-accent">
            “Religion that God accepts… is this: to look after orphans and widows.” — James 1:27
          </li>
          <li>Our goal is to be conformed into Christ’s image.</li>
          <li>We are not a denomination.</li>
          <li>The basis for fellowship is God’s agape love.</li>
          <li>The Bible is our foundation and standard.</li>
          <li>Worship is Spirit-led.</li>
          <li>Fellowship is essential.</li>
        </ul>
      </Card>
    </Section>
  );
}

/* ---------------- VISION ---------------- */

function VisionMission() {
  return (
    <Section title="Our Vision & Mission">
      <div className="space-y-10">
        <Card>
          <h3 className="text-xl font-semibold mb-3">Vision</h3>
          <p className="italic text-accent">
            “Love Him… and love your neighbor.” — Mark 12:33
          </p>
          <p className="mt-4">
            All people are created in God’s image. Our calling is to love them.
          </p>
        </Card>

        <Card>
          <h3 className="text-xl font-semibold mb-3">Mission</h3>
          <p>To transform lives through God’s Word.</p>
          <p>We empower families through discipleship and support.</p>
          <p>We aim to break cycles of poverty and hardship.</p>
        </Card>
      </div>
    </Section>
  );
}

/* ---------------- SERVE ---------------- */

function WhereWeServe() {
  return (
    <Section title="Where We Serve">
      <Card>
        <p>Nairobi has over 5.4 million people, many in informal settlements.</p>
        <p>Many lack water, sanitation, and stable jobs.</p>
        <p>New Song has served Mukuru for over 15 years.</p>
        <p>Thousands reached through missions and outreach.</p>
        <p>Supported by local and international partners.</p>
      </Card>
    </Section>
  );
}

/* ---------------- OVERSIGHT ---------------- */
function Oversight() {
  return (
    <Section title="Ministry Oversight">
      <Card>
        <div className="space-y-16">

          {/* ===== Leadership ===== */}
          <div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { name: "Douglas Mukisa", role: "Missionary Pastor" },
                { name: "James Dennis", role: "Missions Overseer" },
                { name: "Dr. Kwasi Amoafo", role: "Ministry Elder" },
                { name: "Valerie Kiviaru", role: "Women Leader" },
                { name: "Teresia Mumbua", role: "Women Leader" },
                { name: "Kevin Nziu Mumbua", role: "Youth Pastor" },
                { name: "Dorcas Sinaida", role: "Children Ministry" },
              ].map((leader, index) => (
                <div
                  key={index}
                  className="rounded-2xl bg-white/10 backdrop-blur-sm p-6
                             border border-white/10
                             hover:bg-white/15 hover:-translate-y-1
                             transition duration-300"
                >
                  <h4 className="text-lg font-semibold">
                    {leader.name}
                  </h4>
                  <p className="text-sm text-accent mt-1">
                    {leader.role}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* ===== Bible Teachers ===== */}
          <div>
            <h3 className="text-2xl font-semibold mb-6">
              Bible Teachers
            </h3>

            <div className="rounded-2xl bg-white/10 p-6 border border-white/10">
              <p className="leading-relaxed">
                Douglas Mukisa, Dr. Kwasi Amoafo, Pastor Mike Mitua,
                Kevin Nziu Mumbua
              </p>
            </div>
          </div>

          {/* ===== Partners ===== */}
          <div>
            <h3 className="text-2xl font-semibold mb-8">
              Our Partners
            </h3>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
              {["/partner-1.png", "/partner-2.png"].map((src, i) => (
                <div
                  key={i}
                  className="bg-white rounded-2xl p-6 shadow-md
                             flex items-center justify-center
                             hover:shadow-xl transition duration-300"
                >
                  <Image
                    src={src}
                    alt={`Partner ${i + 1}`}
                    width={140}
                    height={70}
                    className="object-contain"
                  />
                </div>
              ))}
            </div>
          </div>

        </div>
      </Card>
    </Section>
  );
}
