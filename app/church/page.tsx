"use client";

import { motion } from "framer-motion";

export default function ChurchPage() {
  return (
    <section className="bg-background">
      <HeroIntro />
      <TeachTheWord />
      <Ministries />
      <CallToAction />
    </section>
  );
}

/* ---------------- HERO ---------------- */

function HeroIntro() {
  return (
    <section className="relative py-32 text-center bg-muted/30">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto px-6"
      >
        <h1 className="text-4xl md:text-5xl font-semibold text-foreground">
          Welcome to New Song Church
        </h1>
        <p className="mt-6 text-lg text-muted-foreground">
          A diverse church for a diverse inner-city community.
          Real encounters with God through His Word and worship.
        </p>

        <div className="mt-10 inline-block rounded-xl bg-accent px-8 py-4 text-accent-foreground font-medium">
          Sundays · 9:00–10:00 AM & 10:00–12:30 PM
        </div>
      </motion.div>
    </section>
  );
}

/* ---------------- TEACHING ---------------- */

function TeachTheWord() {
  return (
    <section className="py-24">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-semibold text-foreground mb-6">
            Teaching the Word
          </h2>

          <p className="text-lg text-muted-foreground leading-relaxed">
            At New Song Church, we are committed to expository Bible teaching —
            teaching the Bible book by book, chapter by chapter, and verse by
            verse.
          </p>

          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            Our goal is to faithfully present God’s Word in its original
            context, helping people understand what the Bible says, what it
            means, and how it applies to everyday life.
          </p>

          <p className="mt-6 italic text-accent">
            “For I have not hesitated to proclaim to you the whole will of God.”
            — Acts 20:27
          </p>
        </motion.div>
      </div>
    </section>
  );
}

/* ---------------- MINISTRIES ---------------- */

function Ministries() {
  return (
    <section className="py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-semibold text-foreground mb-16 text-center">
          Our Ministries
        </h2>

        <div className="grid md:grid-cols-3 gap-10">
          <MinistryCard
            title="Children’s Ministry"
            description="A joyful, safe, and nurturing place where children grow in faith, love, and confidence."
            details={[
              "Over 1,000 children reached in 15 years",
              "Safe and loving environment",
              "Worship, play, and VBS classes",
              "Weekly nourishment and care",
              "Led by Dorcas Sinaida and a team of volunteers",
            ]}
          />

          <MinistryCard
            title="Youth & College Ministry"
            description="Building strong faith foundations through worship, community, and mentorship."
            details={[
              "ALATS Kenya dance ministry",
              "Evangelism through dance and art",
              "Youth & college life groups",
              "Mentorship and leadership development",
              "Breaking cycles of illiteracy and poverty",
            ]}
          />

          <MinistryCard
            title="Women’s Ministry"
            description="Uplifting and empowering women spiritually, emotionally, and economically."
            details={[
              "Bible studies led by Valerie Kivayiru",
              "Home fellowships and prayer groups",
              "Skills & entrepreneurship training",
              "Single mother support and counseling",
              "Older women life groups (Mamas)",
            ]}
          />
        </div>
      </div>
    </section>
  );
}

function MinistryCard({
  title,
  description,
  details,
}: {
  title: string;
  description: string;
  details: string[];
}) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ duration: 0.3 }}
      className="rounded-2xl bg-background p-8 shadow-sm border border-accent/30"
    >
      <h3 className="text-xl font-semibold text-foreground mb-4">
        {title}
      </h3>
      <p className="text-muted-foreground mb-6">{description}</p>

      <ul className="space-y-3 text-muted-foreground text-sm">
        {details.map((item) => (
          <li key={item}>• {item}</li>
        ))}
      </ul>
    </motion.div>
  );
}

/* ---------------- CTA ---------------- */

function CallToAction() {
  return (
    <section className="py-24 text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl mx-auto px-6"
      >
        <h2 className="text-3xl font-semibold text-foreground">
          Join Us This Sunday
        </h2>
        <p className="mt-6 text-lg text-muted-foreground">
          Come as you are. Experience worship, community, and God’s Word in a
          welcoming environment.
        </p>

        <div className="mt-10 inline-block rounded-xl bg-accent px-10 py-4 text-accent-foreground font-medium">
          Sundays · New Song Chapel
        </div>
      </motion.div>
    </section>
  );
}
