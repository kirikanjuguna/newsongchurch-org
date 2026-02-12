"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

/* ================= TYPES ================= */

type Story = {
  title: string;
  content: string;
  images: string[];
};

      /* ================= STORIES — FULL TEXT ================= */

      const stories: Story[] = [
        {
          title: "Catherine Mbeke Mwakali — Saved by Grace",
          images: ["/community/catherine.jpg"],
          content: `Catherine was born in Mukuru slum to a single mother and became an orphan at eleven. 
      She lived on the streets before being rescued into a children’s home. At sixteen she entered an early unofficial marriage just to survive and by seventeen she was already a mother of two daughters.

      Years later, the New Song Evangelism team met her and shared the Gospel. She gave her life to Christ and began a new journey. Today Catherine is a trained Children’s Ministry teacher and a Mana Bible College graduate. Her daughters are high school graduates and gifted dancers with ALATS Dance International. Her life is a testimony of restoration through Christ.`,
        },

        {
          title: "Empowering Mothers Through Sewing",
          images: ["/community/sewing.jpg"],
          content: `Our Women’s Sewing Training outreach combines evangelism with practical empowerment. Women from Mukuru receive tailoring and garment production skills that help them generate income and support their families.

      Beyond vocational skills, participants receive spiritual mentorship and community support. The program builds dignity, independence, and Christ-centered relationships among vulnerable women including single mothers and unemployed youth.`,
        },

        {
          title: "Education Empowerment",
          images: ["/community/education.jpg"],
          content: `For over fifteen years, no child in our church community has been left behind in education support. We go beyond books and uniforms — addressing poverty barriers, safety concerns, and dropout risks.

      Through the EMPOWER teenage girls program, mentorship from spiritual mothers, and provision of menstrual kits, girls remain in school and thrive. The goal is not only academic success, but spiritual growth and identity in Christ.`,
        },

        {
          title: "The Story of Teresia Mumbua",
          images: ["/community/teresia.jpg"],
          content: `Teresia is a mother of seven, a community health promoter, women leader, and education mobilizer. She has supported families through evictions, floods, school crises, and domestic conflict cases.

      When floods entered her home, she organized rescues before saving her own belongings. Her leadership reflects Christ’s compassion in action — serving others first even in personal crisis.`,
        },

        {
          title: "Reaching the Community with the Gospel",
          images: ["/community/gospel.jpg"],
          content: `What comes first for every soul is the Gospel, the Good News of our Lord Jesus Christ. For our community this remains the number one focus for our calling and over the year’s community leaders and Pastors have been trained and equipped to Preach a true and Biblical Gospel that our Lord Jesus Christ commanded us to Preach and Teach.

      Training pastors and leaders in our community focuses on equipping local leaders with practical biblical skills that fit scripture. The training typically emphasizes biblical foundations, pastoral care, and ethical ministry, while also addressing real-world challenges such as poverty.

      The goal is not only to grow effective servants, but to empower pastors to foster hope and positive change within their communities.`,
        },
        
        {
          title: "The STORY OF KEVIN Nziu Mumbua",
          images: ["/community/kevin-1.jpg", "/community/kevin-2.jpg", "/community/kevin-3.jpg"],
          content: `Kevin Nziu Mumbua is today a youth pastor at New Song Chapel but where did it all start for him.
      The whole community knows Kevin as a Pastor even before he became one. He has always cared for others and always ready to serve whenever needed.

      At twelve years old Kevin moved from the village where he lived with his grandmother to live with his mother in Mukuru where houses leaned into each other and the air was always thick with dust, smoke, and noise. Kevin faced a turning of deciding which life was he going to choose — the hard life in Mukuru of young boys dropping out of school to turn to crime, drugs and dying soon — or following his mother each Sunday to the church where she went. He chose the latter and at twelve years old he was brought to our Sunday school classes by his mother and as they say, the rest is Glory to GOD.

      From our Sunday school to serving in the youth group throughout his teenage life, from youth group to Bible College for three years, From Bible College to Pastoral ordination at New Song Church. Today at 27 years old Kevin has faithfully served his community for 13 years in CHRIST JESUS.`,
        },
        


        {
          title: "MUKURU TEENAGE GIRL EMPOWERING",
          images: ["/community/girls-1.jpg", "/community/girls-2.jpg"],
          content: `EMPOWER a girls outreach that focuses on the needs of the girl child in Mukuru slums has been helping over 1000 girls from our community to be the CHANGE for Mukuru.

      Life in Mukuru for a teenage girl is a mix of struggle, strength, and hope. Safety is a daily concern. She learns fast to be cautious moving around the neighborhood, especially at night, and faces risks like harassment, gender-based violence, early pregnancy, and peer pressure. Access to reproductive health information and menstrual products can be limited, which affects her confidence and school attendance.

      New Song Church has offered spiritual guidance, counseling and sanitary towels to girls coming out of mariguini, fuatah nyayo, kisii village, hazina, maasai village, kayaba, kaverera, tetra park, kingstone and Ruben Mukuru neighborhoods.

      Mentorship classes have been offered in local schools like St. Catherine, Mariakani Primary, and Mukuru primary schools by our spiritual mothers who have been transformed by the WORD taught at New Song Church.`,
        },


        {
          title: "The STORY OF Damaris Wanjiru Kuria",
          images: ["/community/damaris.jpg"],
          content: `The story of Damaris Wanjiru’s transformation is one that only Jesus could write. Born in 1980 in the Kayaba slums, life was unforgiving from the very beginning. Her mother sold chang’aa (local alcohol) to supplement the little income her father earned from his job.

      By her teenage years, drugs and crime had taken hold of her life, convincing her that her painful circumstances had already written her future. Time and again, she felt trapped in darkness, with no clear way out but only a long, unending stretch of despair ahead.

      Tragedy deepened her pain when her father passed away, and just a year later, her mother also died. By the time Wanjiru had children of her own, drugs had become her escape, crime her means of survival, and relationships with men a desperate search for validation she never truly found.

      Everything began to change when she encountered Christ in 2009 at a New Song home fellowship in Mukuru. To this day Wanjiru has been walking with Christ for 16 years. She has never looked back because Christ became her KING. ONLY God’s redemptive plan changes lives.`,
        },


        {
          title: "Safe Sports Activities",
          images: ["/community/sports-2.jpg", "/community/sports-1.jpg", "/community/sports-6.jpg"],
          content: `Soccer is a powerful influence among youth in Mukuru. Our structured soccer outreach combines sports training with spiritual mentorship.

      Ian Gibiya’s journey from young player to mentor shows how sports can build discipline, purpose, and faith. Today he coaches youth while studying at Bible college — multiplying impact through mentorship.`,
        },


        {
          title: "Urban Farm Skills for Our Kids",
          images: ["/community/farming.jpg"],
          content: `Children in Mukuru face food insecurity and limited exposure to practical life skills. Our urban farming program teaches responsibility, teamwork, and nutrition awareness.

      Through hands-on training, children learn how food is grown and how to contribute positively to their households and community — breaking cycles of insecurity with knowledge and discipline.`,
        },


      ];


/* ================= PAGE ================= */

export default function CommunityPage() {
  return (
    <main className="bg-white">

      {/* ================= HERO ================= */}
      <section className="relative w-full min-h-screen overflow-hidden">
        <Image
          src="/community/mukuru-hero.jpg"
          alt="Community in Mukuru"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />

        {/* Stronger bottom gradient for readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-black/10" />

        {/* Bottom centered heading */}
        <div className="absolute inset-0 flex items-end justify-center text-center px-6 pb-16 md:pb-24">
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white font-bold text-2xl sm:text-3xl md:text-5xl lg:text-6xl
                      flex flex-col items-center gap-2"
          >
            <span className="whitespace-nowrap">
              Community Fellowship in Christ.
            </span>

            <span className="whitespace-nowrap">
              Welcome to Our Community of Change.
            </span>

            <span className="whitespace-nowrap">
              Transforming Lives One at a Time.
            </span>
          </motion.h1>
        </div>
      </section>


      {/* ================= HERO PARAGRAPH ================= */}
      <section className="py-16 px-6 text-center">
        <p className="max-w-3xl mx-auto text-lg text-[#3f2d23] leading-relaxed">
          Changing lives through Christ-centered fellowship, shared worship,
          discipleship, and compassionate service. In Mukuru, transformation
          happens one life at a time — and each restored life becomes a ripple
          of hope across families and the wider community.
        </p>
      </section>

      {/* ================= STORIES HEADING ================= */}
      <section className="pb-6">
        <h2 className="text-center text-4xl font-bold text-[#3f2d23]">
          Our Stories
        </h2>
      </section>

      {/* ================= STORIES ================= */}
      <section className="max-w-6xl mx-auto px-6 py-16 space-y-24">
        {stories.map((story, index) => {
          const reverse = index % 2 === 1;

          return (
            <motion.div
              key={story.title}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="grid md:grid-cols-2 gap-12 items-center"
            >
              <div className={reverse ? "md:order-2" : ""}>
                <h3 className="text-2xl md:text-3xl font-semibold text-[#3f2d23] mb-5">
                  {story.title}
                </h3>
                <p className="text-[#3f2d23] leading-relaxed whitespace-pre-line">
                  {story.content}
                </p>
              </div>

              <div className={reverse ? "md:order-1" : ""}>
                <StorySlider images={story.images} />
              </div>
            </motion.div>
          );
        })}
      </section>

      {/* ================= CTA ================= */}
      <section className="bg-[#f7f3ef] py-16 text-center">
        <h3 className="text-3xl font-bold text-[#3f2d23] mb-4">
          Be Part of the Story
        </h3>
        <a
          href="/contact"
          className="inline-block bg-[#3f2d23] text-white px-8 py-3 rounded-xl font-medium hover:opacity-90"
        >
          Connect With Us
        </a>
      </section>
    </main>
  );
}

/* ================= IMAGE SLIDER ================= */

function StorySlider({ images }: { images: string[] }) {
  const [i, setI] = useState(0);

  useEffect(() => {
    if (images.length < 2) return;
    const t = setInterval(() => {
      setI((p) => (p + 1) % images.length);
    }, 4000);
    return () => clearInterval(t);
  }, [images.length]);

  return (
    <div className="relative w-full h-[360px] rounded-2xl overflow-hidden shadow-xl ">
      <AnimatePresence mode="wait">
        <motion.div
          key={images[i]}
          className="absolute inset-0"
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
        >
          <Image
            src={images[i]}
            alt=""
            fill
            className="object-cover"
          />
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
