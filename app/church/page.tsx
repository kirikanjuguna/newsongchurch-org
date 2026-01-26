"use client";

import { motion } from "framer-motion";
import ImageSlider from "@/components/ImageSlider";

export default function ChurchPage() {
  return (
    <main className="bg-background text-foreground">

      {/* ================= TEACH THE WORD ================= */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-14 items-center">
          
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative h-[420px] rounded-2xl overflow-hidden"
          >
            <img
              src="/church/teach-the-word.jpg"
              alt="Teaching the Word"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/25" />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-semibold mb-6">
              Teach the Word
            </h2>

            <p className="mb-4">
              At New Song Church, we are committed to expository Bible teaching.
              Teaching the Bible book by book, chapter by chapter and verse by verse.
            </p>

            <p className="mb-4">
              Our goal is to faithfully present God’s Word in its original context,
              helping people understand what the Bible says, what it means, and how it
              applies to everyday life.
            </p>

            <p className="mb-4">
              Each message is rooted in Scripture, centered on Christ, and empowered
              by the Holy Spirit, so that believers can grow in spiritual maturity
              and live out their faith with confidence and clarity.
            </p>

            <span className="block mt-6 text-accent font-medium">
              Acts 20:27
            </span>
          </motion.div>
        </div>
      </section>

      {/* ================= SUNDAY WORSHIP ================= */}
      <section className="relative py-32">
        <div className="absolute inset-0">
          <img
            src="/church/sunday-worship.jpg"
            alt="Sunday Worship"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-linear-to-b from-black/30 via-black/50 to-background" />
        </div>

        <div className="relative max-w-4xl mx-auto px-6 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-semibold mb-6">
            Worship & Fellowship
          </h2>

          <p className="mb-6 text-white/90">
            Each Sunday we provide a space for spiritual worship through songs,
            words and meditation on God’s glory and goodness in our lives.
          </p>

          <div className="mt-8 text-lg font-medium">
            JOIN US: SUNDAYS <br />
            9:00AM – 10:00AM &nbsp;|&nbsp; 10:00AM – 12:30PM
          </div>
        </div>
      </section>

      {/* ================= CHILDREN MINISTRY ================= */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 space-y-20">

          {/* Intro */}
          <div className="grid md:grid-cols-2 gap-14 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-semibold mb-6">
                Children’s Ministry
              </h2>

              <p className="mb-4">
                Our Children’s Ministry is a joyful, safe, and nurturing place
                where children can grow in their faith while having fun.
              </p>

              <p className="mb-4">
                For the last 15 years over a thousand children from Mukuru
                community have gone through our Children’s ministry classes
                every Sunday.
              </p>

              <p>
                Some of those children are now serving as youth leaders,
                singers, dancers, ushers and Bible students at Mana Bible College.
              </p>
            </motion.div>

            <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative h-[420px]"
            >
            <ImageSlider
                images={[
                "/church/children-1.jpg",
                "/church/children-2.jpg",
                "/church/children-3.jpg",
                ]}
            />
            </motion.div>
          </div>

          {/* Leader */}
          <div className="grid md:grid-cols-2 gap-14 items-center">
            <div className="relative h-[360px] rounded-2xl overflow-hidden">
              <img
                src="/church/dorcas.jpg"
                alt="Dorcas Sinaida"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-4">
                Children Ministry Team Leader
              </h3>
              <p>
                Meet Dorcas Sinaida who has been part of our Church community
                since she was in High School. Today Dorcas is leading our
                Children’s ministry alongside 12 volunteer teachers.
              </p>
            </div>
          </div>

          {/* Features */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "A Safe & Loving Environment",
                text:
                  "Children are cared for, known by name and village, and encouraged to grow spiritually with confidence.",
              },
              {
                title: "Worship, Fun & Play",
                text:
                  "Singing, dancing, and joyful activities help children learn about God creatively.",
              },
              {
                title: "VBS Classes",
                text:
                  "Structured lessons, games, music and fun activities help children dive deeper into God’s Word.",
              },
              {
                title: "Nourishment Every Sunday",
                text:
                  "Children are provided with food, caring for them spiritually and physically.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="p-6 rounded-xl bg-muted/40 border border-border"
              >
                <h4 className="font-semibold mb-3">{item.title}</h4>
                <p className="text-sm text-foreground/80">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= YOUTH & ALATS ================= */}
      <section className="relative py-32">
        <div className="absolute inset-0">
          <img
            src="/church/alats.jpg"
            alt="ALATS Kenya Dancers"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>

        <div className="relative max-w-4xl mx-auto px-6 text-white">
          <h2 className="text-3xl md:text-4xl font-semibold mb-6">
            Youth Ministry – ALATS Kenya
          </h2>

          <p>
            ALATS is a Hebrew word meaning “to jump for joy.” ALATS Kenya is a
            youth dance ministry cultivating passion for dance while empowering
            young people to communicate the Gospel through artistic excellence
            in a safe, Spirit-filled environment.
          </p>
        </div>
      </section>

      {/* ================= WOMEN MINISTRY ================= */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 space-y-20">
          <div className="grid md:grid-cols-2 gap-14 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-semibold mb-6">
                Women’s Ministry
              </h2>

              <p className="mb-4">
                Our Women’s Ministry exists to uplift, equip, and empower women
                in low-income communities across Mukuru.
              </p>

              <p>
                Meet Valerie Kivayiru, overseeing women’s Bible studies through
                book by book, chapter by chapter, and verse by verse devotion.
              </p>
            </div>

            <div className="relative h-[420px]">
            <ImageSlider
                images={[
                "/church/women-1.jpg",
                "/church/women-2.jpg",
                "/church/women-3.jpg",
                ]}
            />
            </div>

          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              "Spiritual Empowerment",
              "Fellowship & Bonding",
              "Skills & Entrepreneurship Training",
              "Counseling & Single Mother Support",
            ].map((title, i) => (
              <div
                key={i}
                className="p-6 rounded-xl bg-muted/40 border border-border"
              >
                <h4 className="font-semibold">{title}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

    </main>
  );
}
