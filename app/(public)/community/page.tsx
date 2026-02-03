"use client";

import Image from "next/image";
import { motion } from "framer-motion";

type Story = {
  title: string;
  content: string;
  image: string;
};

const stories: Story[] = [
  {
    title: "Catherine Mbeke Mwakali — Saved by Grace",
    image: "/community/catherine.jpg",
    content: `Catherine was born in Mukuru slum to a single mother and became an orphan at eleven. 
She lived on the streets before being rescued into a children’s home. At sixteen she entered an early unofficial marriage just to survive and by seventeen she was already a mother of two daughters.

Years later, the New Song Evangelism team met her and shared the Gospel. She gave her life to Christ and began a new journey. Today Catherine is a trained Children’s Ministry teacher and a Mana Bible College graduate. Her daughters are high school graduates and gifted dancers with ALATS Dance International. Her life is a testimony of restoration through Christ.`,
  },
  {
    title: "Empowering Mothers Through Sewing",
    image: "/community/sewing.jpg",
    content: `Our Women’s Sewing Training outreach combines evangelism with practical empowerment. Women from Mukuru receive tailoring and garment production skills that help them generate income and support their families.

Beyond vocational skills, participants receive spiritual mentorship and community support. The program builds dignity, independence, and Christ-centered relationships among vulnerable women including single mothers and unemployed youth.`,
  },
  {
    title: "Education Empowerment",
    image: "/community/education.jpg",
    content: `For over fifteen years, no child in our church community has been left behind in education support. We go beyond books and uniforms — addressing poverty barriers, safety concerns, and dropout risks.

Through the EMPOWER teenage girls program, mentorship from spiritual mothers, and provision of menstrual kits, girls remain in school and thrive. The goal is not only academic success, but spiritual growth and identity in Christ.`,
  },
  {
    title: "The Story of Teresia Mwambui",
    image: "/community/teresia.jpg",
    content: `Teresia is a mother of seven, a community health promoter, women leader, and education mobilizer. She has supported families through evictions, floods, school crises, and domestic conflict cases.

When floods entered her home, she organized rescues before saving her own belongings. Her leadership reflects Christ’s compassion in action — serving others first even in personal crisis.`,
  },
  {
    title: "Urban Farm Skills for Our Kids",
    image: "/community/farming.jpg",
    content: `Children in Mukuru face food insecurity and limited exposure to practical life skills. Our urban farming program teaches responsibility, teamwork, and nutrition awareness.

Through hands-on training, children learn how food is grown and how to contribute positively to their households and community — breaking cycles of insecurity with knowledge and discipline.`,
  },
  {
    title: "Safe Sports Activities",
    image: "/community/sports.jpg",
    content: `Soccer is a powerful influence among youth in Mukuru. Our structured soccer outreach combines sports training with spiritual mentorship.

Ian Gibiya’s journey from young player to mentor shows how sports can build discipline, purpose, and faith. Today he coaches youth while studying at Bible college — multiplying impact through mentorship.`,
  },
  {
    title: "ALATS Kenya Dance Youth Outreach",
    image: "/community/dance.jpg",
    content: `ALATS Kenya is a youth dance outreach that provides a safe, creative, and spiritually grounded environment. Inspired by ALATS Dance International, the program nurtures talent while building discipline and godly values.

Youth are mentored, trained, fed weekly, and supported to grow in confidence and faith. The program is free and open to families seeking positive youth engagement.`,
  },
];

export default function CommunityPage() {
  return (
    <main className="bg-white">
      {/* HERO WITH IMAGE — MUKURU COMMUNITY STORY */}
      <section className="relative h-[70vh] min-h-[520px] w-full overflow-hidden">
        <Image
          src="/community/mukuru-hero.jpg"
          alt="Community in Mukuru"
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/50" />

        <div className="relative z-10 max-w-5xl mx-auto px-6 h-full flex flex-col justify-center text-white">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            Community Fellowship in Christ — Mukuru
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-lg md:text-xl leading-relaxed max-w-3xl"
          >
            Changing lives through Christ-centered fellowship, shared worship,
            discipleship, and compassionate service. In Mukuru, transformation
            happens one life at a time — and each restored life becomes a
            ripple of hope across families and the wider community.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="mt-8 italic"
          >
            <p className="font-semibold">Jeremiah 29:7</p>
            <p>
              Seek the peace and prosperity of the city… Pray to the Lord for
              it, because if it prospers, you too will prosper.
            </p>
          </motion.div>
        </div>
      </section>

      {/* STORIES */}
      <section className="max-w-6xl mx-auto px-6 py-24 space-y-24">
        {stories.map((story, index) => {
          const reverse = index % 2 === 1;

          return (
            <motion.div
              key={story.title}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="grid md:grid-cols-2 gap-12 items-center"
            >
              {/* TEXT */}
              <div className={reverse ? "md:order-2" : ""}>
                <h2 className="text-2xl md:text-3xl font-semibold text-[#3f2d23] mb-5">
                  {story.title}
                </h2>

                <p className="text-[#3f2d23] leading-relaxed whitespace-pre-line">
                  {story.content}
                </p>
              </div>

              {/* IMAGE */}
              <div className={reverse ? "md:order-1" : ""}>
                <div className="relative w-full h-[360px] rounded-2xl overflow-hidden shadow-xl">
                  <Image
                    src={story.image}
                    alt={story.title}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </motion.div>
          );
        })}
      </section>

      {/* CTA */}
      <section className="bg-[#f7f3ef] py-16">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h3 className="text-3xl font-bold text-[#3f2d23] mb-4">
            Be Part of the Story
          </h3>
          <p className="text-[#3f2d23] mb-6">
            Join us as we continue walking with the Mukuru community through
            faith, service, and transformation in Christ.
          </p>
          <a
            href="/contact"
            className="inline-block bg-[#3f2d23] text-white px-8 py-3 rounded-xl font-medium hover:opacity-90 transition"
          >
            Connect With Us
          </a>
        </div>
      </section>
    </main>
  );
}
