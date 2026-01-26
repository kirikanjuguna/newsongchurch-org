"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const tabs = [
  { id: "who", label: "Who We Are" },
  { id: "beliefs", label: "Our Beliefs" },
  { id: "vision", label: "Vision & Mission" },
  { id: "serve", label: "Where We Serve" },
];

export default function AboutPage() {
  const [active, setActive] = useState("who");

  return (
    <section className="relative py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        {/* Page Heading */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-semibold text-foreground">
            About New Song Church
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            A fellowship of believers committed to Christ, community, and
            transformational love.
          </p>
        </motion.div>

        {/* Layout */}
        <div className="grid grid-cols-1 md:grid-cols-[260px_1fr] gap-12">
          {/* Side Tabs */}
          <aside className="md:sticky md:top-28 self-start">
            <ul className="flex md:flex-col gap-3">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActive(tab.id)}
                  className={`text-left px-4 py-3 rounded-lg transition
                    ${
                      active === tab.id
                        ? "bg-accent text-accent-foreground"
                        : "bg-muted/40 text-muted-foreground hover:bg-muted"
                    }`}
                >
                  {tab.label}
                </button>
              ))}
            </ul>
          </aside>

          {/* Content */}
          <div className="space-y-16">
            {active === "who" && <WhoWeAre />}
            {active === "beliefs" && <Beliefs />}
            {active === "vision" && <VisionMission />}
            {active === "serve" && <WhereWeServe />}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- SECTIONS ---------------- */

function Section({ title, children }: { title: string; children: any }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-3xl"
    >
      <h2 className="text-3xl font-semibold text-foreground mb-6">
        {title}
      </h2>
      <div className="space-y-6 text-muted-foreground text-lg leading-relaxed">
        {children}
      </div>
    </motion.div>
  );
}

function WhoWeAre() {
  return (
    <Section title="Who We Are">
      <p>
        We are a fellowship of believers committed to Jesus Christ as our Lord
        and Savior.
      </p>
      <p>
        We are a mission-driven African church committed to the spread of the
        Gospel in East Africa.
      </p>
      <p>
        Commissioned to serve the un-served, love the un-loved, and reach the
        un-reached in our communities, we are committed to loving the Lord our
        God and our neighbors.
      </p>
      <p className="italic text-accent">
        “Love the Lord your God with all your heart… and love your neighbor as
        yourself.” — Matthew 22:37–39
      </p>
    </Section>
  );
}

function Beliefs() {
  return (
    <Section title="Our Beliefs">
      <ul className="space-y-4">
        <li>
          We believe in one God — the God of love and mercy — who gave His life
          as a sacrifice for all sins.
        </li>
        <li>
          We believe God calls every believer to love their neighbor more than
          themselves and to minister to the needy and poor.
        </li>
        <li className="italic text-accent">
          “Religion that God our Father accepts as pure… is this: to look after
          orphans and widows.” — James 1:27
        </li>
        <li>
          Our supreme goal is to know Christ and be conformed into His image by
          the power of the Holy Spirit.
        </li>
        <li>
          We are not a denomination, nor are we opposed to denominations.
        </li>
        <li>
          The true basis for Christian fellowship is God’s agape love — greater
          than our differences.
        </li>
        <li>
          We believe the Bible is God’s Word, our foundation and standard of
          faith.
        </li>
        <li>
          Worship is spiritual, flexible, and led by the Holy Spirit.
        </li>
        <li>
          Fellowship among believers is essential for healthy, godly
          friendships.
        </li>
      </ul>
    </Section>
  );
}

function VisionMission() {
  return (
    <Section title="Our Vision & Mission">
      <div className="space-y-10">
        <div className="p-6 rounded-xl bg-muted/40">
          <h3 className="text-xl font-semibold text-foreground mb-3">
            Vision
          </h3>
          <p className="italic">
            “To love Him with all your heart… and love your neighbor as yourself
            is more important than all offerings.” — Mark 12:33
          </p>
          <p className="mt-4">
            All people are created in the image of God. Our calling is to love
            people just as much as God loves them.
          </p>
        </div>

        <div className="p-6 rounded-xl bg-muted/40">
          <h3 className="text-xl font-semibold text-foreground mb-3">
            Mission
          </h3>
          <p>
            To transform lives one at a time through the teaching of God’s Holy
            Word, serving the un-served in the slums of Nairobi.
          </p>
          <p>
            We empower single mothers, widows, and families through spiritual
            discipleship, social skills training, and small business support.
          </p>
          <p>
            Our ultimate goal is to break cycles of poverty, disease,
            illiteracy, crime, and drugs through God’s Word.
          </p>
        </div>
      </div>
    </Section>
  );
}

function WhereWeServe() {
  return (
    <Section title="Where We Serve">
      <p>
        Nairobi is home to over 5.4 million people, with more than half living in
        low-income informal settlements.
      </p>
      <p>
        Residents often lack access to clean water, sanitation, and stable
        employment, with up to 75% lacking formal jobs.
      </p>
      <p>
        For over 15 years, God has called New Song Church to serve families in
        the Mukuru community — one of the least served populations both
        economically and spiritually.
      </p>
      <p>
        Through crusades, conferences, home fellowships, medical outreaches,
        youth programs, women’s ministries, and missionary work, thousands have
        been reached with the Gospel.
      </p>
      <p>
        This work is made possible through partnerships with ECF Church (Oregon,
        USA) and other like-minded believers locally and internationally.
      </p>
    </Section>
  );
}
