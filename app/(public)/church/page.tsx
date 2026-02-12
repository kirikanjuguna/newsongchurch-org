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
            <ImageSlider
              images={[
                "/church/teach.jpg",
                "/church/teach-1.jpg",
                "/church/teach-2.jpg",
                "/church/teach-3.jpg"
              ]}

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

            <span className="block mt-6 text-[#3f2d23] font-semibold">
              ~ Acts 20:27
            </span>
            <span className="block text-[#3f2d23] italic">
              "For I did not shrink from declaring to you the whole counsel of God."
            </span>
          </motion.div>
        </div>
      </section>

      {/* ================= WORSHIP & FELLOWSHIP ================= */}
      <section className="relative py-32">
      <div className="absolute inset-0">
      <img
      src="/church/sunday-worship.jpg"
      alt="Sunday Worship"
      className="w-full h-full object-cover object-top md:object-[center_1%]"
      />
      <div className="absolute inset-0 bg-linear-to-b from-black/30 via-black/50 to-background" />
      </div>


      <div className="relative max-w-4xl mx-auto px-6 text-center text-white">
      <h2 className="text-3xl md:text-4xl font-semibold mb-6">
      Worship & Fellowship
      </h2>


      <p className="mb-6 text-white/90">
      Each Sunday we provide a space for spiritual worship through songs, words and meditation on God’s glory and goodness in our lives.
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


      {/* ================= WOMEN'S MINISTRY ================= */}
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
                Women’s Ministry
              </h2>

              <p className="mb-4">
                Our Women’s Ministry exists to uplift, equip, and empower women
                spiritually, emotionally, and socially through God’s Word and fellowship.
              </p>

              <p className="mb-4">
                Through regular Bible study, prayer gatherings, and mentorship,
                women are strengthened in faith and encouraged to grow in purpose.
              </p>

              <p>
                The ministry also provides support systems for families, single mothers,
                and women facing life challenges.
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
                  "/church/women-1.jpg",
                  "/church/women-2.jpg",
                  "/church/women-3.jpg",
                ]}
              />
            </motion.div>
          </div>

          {/* Leader */}
          <div className="grid md:grid-cols-2 gap-14 items-center">
            <div className="relative h-[360px] rounded-2xl overflow-hidden">
              <img
                src="/church/women-leader.jpg"
                alt="Women Ministry Leader"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-4">
                Women Ministry Leadership
              </h3>

              <p>
                Meet Valerie Kivayiru, overseeing women’s Bible studies through
                book by book, chapter by chapter, and verse by verse devotion.
              </p>
              <p>
                The women’s ministry is led by dedicated women of faith who
                disciple, mentor, and walk alongside others through prayer,
                teaching, and practical support.
              </p>
            </div>
          </div>

          {/* Features */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Bible Study & Prayer",
                text: "Regular gatherings focused on Scripture, prayer, and spiritual growth.",
              },
              {
                title: "Mentorship",
                text: "Older women mentoring younger women in faith, family, and purpose.",
              },
              {
                title: "Life Support",
                text: "Encouragement and practical help for women facing life challenges.",
              },
              {
                title: "Fellowship",
                text: "Strong community bonds built through shared faith and fellowship.",
              },
            ].map((item, i) => (
              <div key={i} className="p-6 rounded-xl bg-muted/40 border border-border">
                <h4 className="font-semibold mb-3">{item.title}</h4>
                <p className="text-sm text-foreground/80">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* ================= YOUTH MINISTRY ================= */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 space-y-20">

          <div className="grid md:grid-cols-2 gap-14 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-semibold mb-6">
                Youth Ministry
              </h2>

              <p className="mb-4">
                Our Youth Ministry equips young people to grow in Christ,
                discover their calling, and live boldly for God.
              </p>

              <p className="mb-4">
                Through discipleship, worship, creative arts, and leadership
                opportunities, youth are mentored into strong Christian leaders.
              </p>

              <p>
                Many youth actively serve in worship, dance, outreach,
                and teaching ministries.
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
                  "/church/youth-1.jpg",
                  "/church/youth-2.jpg",
                  "/church/youth-3.jpg",
                ]}
              />
            </motion.div>
          </div>

          {/* Leader */}
          <div className="grid md:grid-cols-2 gap-14 items-center">
            <div className="relative h-[360px] rounded-2xl overflow-hidden">
              <img
                src="/church/youth-leader.jpg"
                alt="Youth Leader"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-4">
                Youth Leadership Team
              </h3>
              <p>
                Youth leaders mentor and guide young believers through
                discipleship, accountability, and service opportunities.
              </p>
            </div>
          </div>

          {/* Features */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Discipleship", text: "Strong biblical foundation and mentoring." },
              { title: "Creative Arts", text: "Dance, music, drama and worship expression." },
              { title: "Leadership Training", text: "Developing servant leaders early." },
              { title: "Outreach", text: "Youth-led evangelism and community service." },
            ].map((item, i) => (
              <div key={i} className="p-6 rounded-xl bg-muted/40 border border-border">
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
            src="/community/dance.jpg"
            alt="ALATS Kenya Dancers"
            className="w-full h-full object-cover md:object-[center_20%]"
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


      {/* ================= MEN'S MINISTRY ================= */}
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
              <h2 className="text-3xl md:text-4xl font-semibold mb-4">
                Men’s Ministry
              </h2>

              <p className="font-semibold mb-4 text-lg">
                Motto: We are young men on a mission to become great MEN
              </p>

              <p className="mb-4">
                The Men’s Ministry at New Song Fellowship focuses on mentoring and
                evangelizing young men in our community — especially those from
                single-parent homes who lack consistent male support and guidance.
              </p>

              <p className="mb-4">
                Through monthly morning Bible breakfasts, we bring young men into
                fellowship with one another and with Christ, creating a strong support
                network rooted in faith.
              </p>

              <p>
                Recognizing the real-life pressures many face as providers and
                survivors of broken systems, the ministry helps them grow into
                strong, God-centered men who positively impact their families
                and community.
              </p>
            </motion.div>

            {/* Slider */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative h-[420px]"
            >
              <ImageSlider
                images={[
                  "/church/men-1.jpg",
                ]}
              />
            </motion.div>
          </div>

          {/* Leader / Description Block */}
          <div className="grid md:grid-cols-2 gap-14 items-center">
            <div className="relative h-[360px] rounded-2xl overflow-hidden">
              <img
                src="/church/men-2.jpg"
                alt="Men Ministry"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-4">
                Building Strong Godly Men
              </h3>

              <p className="mb-4">
                Alongside sharing Christ’s love, grace, and purpose, the ministry
                integrates life skills training, parenting support, and encouragement
                toward responsible and positive choices.
              </p>

              <p>
                By affirming Godly values and personal potential, the ministry empowers
                young men to grow in faith, lead with integrity, and become positive
                influencers — fostering lasting transformation rooted in the Bible.
              </p>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Mentorship",
                text: "Guiding young men who lack consistent male support.",
              },
              {
                title: "Bible Breakfasts",
                text: "Monthly morning fellowship and discipleship gatherings.",
              },
              {
                title: "Life Skills",
                text: "Training in responsibility, parenting, and leadership.",
              },
              {
                title: "Community Impact",
                text: "Raising men who transform families and communities.",
              },
            ].map((item, i) => (
              <div key={i} className="p-6 rounded-xl bg-muted/40 border border-border">
                <h4 className="font-semibold mb-3">{item.title}</h4>
                <p className="text-sm text-foreground/80">{item.text}</p>
              </div>
            ))}
          </div>

          {/* Closing Statement */}
          <div className="text-center max-w-3xl mx-auto">
            <p className="text-lg font-medium">
              At New Song Fellowship, every young boy child counts for a better community.
            </p>
          </div>

        </div>
      </section>




      {/* ================= WOMEN MINISTRY ================= 
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
      </section>*/}

    </main>
  );
}
