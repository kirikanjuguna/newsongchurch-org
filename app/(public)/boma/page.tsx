"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function BomaPage() {
  return (
    <main className="bg-white dark:bg-black text-gray-800 dark:text-gray-200 overflow-hidden">

      {/* ================= HERO SECTION ================= */}
      <section className="relative w-full h-[500px] flex items-center justify-center text-center">
        <Image
          src="/boma-land.jpg"
          alt="Boma Village Land"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 max-w-4xl px-6"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tight">
            BOMA VILLAGE
          </h1>

          <p className="mt-4 text-xl text-green-300">
            Our Promised Land
          </p>

          <p className="mt-6 text-lg text-green-100 max-w-2xl mx-auto leading-relaxed">
            A Christian Integrated Family-Oriented Village for our community
          </p>
        </motion.div>
      </section>

      {/* ================= INTRO SECTION ================= */}
      <section className="max-w-5xl mx-auto px-6 py-20 space-y-8 text-center">
        <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.8 }} className="text-lg leading-relaxed">
          This property has been graciously provided by the Lord through our long-time
          partners and friends who have faithfully walked with us for the past 15 years.
          We have purchased five acres of land, with an additional five acres to be added,
          for our Christian Integrated Community located at the Kitengela Ostrich Farm.
        </motion.p>

        <p className="text-lg leading-relaxed">
          A child needs more than just a house — a child needs a home, a family, and a village
          to belong to. As the African proverb says,
          <span className="font-semibold"> “It takes a whole village to raise a child.”</span>
        </p>

        <p className="text-lg leading-relaxed">
          At our Boma Village, children will find a loving Christian home,
          nurturing family environment, quality education, spiritual guidance,
          and a deep understanding of their value and identity in Christ.
        </p>
      </section>

      {/* ================= WHAT MAKES BOMA DIFFERENT ================= */}
      <section className="bg-green-50 dark:bg-green-950 py-20">
        <div className="max-w-5xl mx-auto px-6 space-y-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-green-800 dark:text-green-300">
            What Makes Boma Village Different
          </h2>

          <p className="leading-relaxed text-lg">
            Boma Village is NOT a children’s home but a godly community of believers
            willing to foster children in need of a home. These families are members
            of our church community who have been fostering children within the Mukuru slums.
          </p>

          <div className="bg-white dark:bg-green-900 p-8 rounded-2xl shadow-xl border border-green-200 dark:border-green-800">
            <p className="text-lg font-medium text-green-700 dark:text-green-300">
              This is a GAME CHANGER for our future ministry —
              allowing families to live and raise children in a clean,
              safe, Christ-centered environment.
            </p>
          </div>
        </div>
      </section>

      {/* ================= VILLAGE LAYOUT ================= */}
      <section className="max-w-6xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-16 items-center">
        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-green-700 dark:text-green-300">
            Cluster-Based Family Model
          </h2>

          <p>
            Instead of dormitories, homes are arranged in small clusters,
            creating a natural neighborhood feel.
          </p>

          <ul className="space-y-3 list-disc list-inside text-gray-700 dark:text-gray-300">
            <li>6–8 Family Homes</li>
            <li>1 House Parent per home</li>
            <li>Central shared green/play area</li>
            <li>Safe pedestrian pathways</li>
          </ul>
        </div>

        <div className="relative w-full h-[500px] rounded-2xl overflow-hidden shadow-2xl">
          <Image
            src="/boma-plan.jpg"
            alt="Boma Village Master Plan"
            fill
            className="object-cover"
          />
        </div>
      </section>
      {/* ================= DEVELOPMENT PLAN ================= */}
      <section className="bg-green-100 dark:bg-green-950 py-24">
        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-3xl font-bold text-center text-green-800 dark:text-green-300 mb-16">
            Integrated Community Development Plan (10 Acres)
          </h2>

          {/* ===== OVERVIEW CARD ===== */}
          <div className="mb-16 bg-white dark:bg-green-900 p-10 rounded-2xl shadow-xl border border-green-200 dark:border-green-800 space-y-10">

            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-green-700 dark:text-green-300">
                1. Vision and Purpose
              </h3>

              <p className="leading-relaxed text-lg">
                The purpose of this project is to create a safe, self-sustaining
                community that rescues vulnerable families from the slums of Nairobi
                by providing housing, education, nutrition, recreation, and
                family-based care through widows who foster children. The land will
                function as a holistic care, learning, and growth environment.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-green-700 dark:text-green-300">
                2. Target Beneficiaries
              </h3>

              <ul className="list-disc list-inside space-y-2 text-lg">
                <li>Children rescued from Nairobi slums.</li>
                <li>Widows who foster and care for vulnerable children.</li>
                <li>
                  The wider community through education, food production,
                  and skills development.
                </li>
              </ul>
            </div>
          </div>

          {/* ===== FULL INFORMATION CARDS GRID ===== */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            {/* Housing Card */}
            <div className="bg-white dark:bg-green-900 p-8 rounded-2xl shadow-lg border border-green-200 dark:border-green-800 space-y-4 hover:-translate-y-2 transition duration-300">
              <h3 className="text-lg font-semibold text-green-700 dark:text-green-300">
                Residential Housing (3 Acres)
              </h3>

              <p className="text-sm leading-relaxed">
                Family-style housing where widows act as foster parents.
                Each unit houses 1 widow and 6–10 children.
              </p>

              <ul className="text-sm list-disc list-inside space-y-2">
                <li>Sanitation & clean water systems</li>
                <li>Solar lighting installations</li>
                <li>Secure fencing & safe pathways</li>
              </ul>

              <p className="text-sm font-medium pt-2 border-t border-green-200 dark:border-green-800">
                Impact: Family-based care instead of institutional dormitories.
              </p>
            </div>

            {/* Education Card */}
            <div className="bg-white dark:bg-green-900 p-8 rounded-2xl shadow-lg border border-green-200 dark:border-green-800 space-y-4 hover:-translate-y-2 transition duration-300">
              <h3 className="text-lg font-semibold text-green-700 dark:text-green-300">
                Education Facilities (2 Acres)
              </h3>

              <p className="text-sm leading-relaxed">
                A modern Internet-based primary school built within the compound.
              </p>

              <ul className="text-sm list-disc list-inside space-y-2">
                <li>Fully equipped classrooms</li>
                <li>Library & Computer Laboratory</li>
                <li>Vocational Training Rooms</li>
              </ul>

              <p className="text-sm font-medium pt-2 border-t border-green-200 dark:border-green-800">
                Impact: Breaking the cycle of poverty through quality education.
              </p>
            </div>

            {/* Playground Card */}
            <div className="bg-white dark:bg-green-900 p-8 rounded-2xl shadow-lg border border-green-200 dark:border-green-800 space-y-4 hover:-translate-y-2 transition duration-300">
              <h3 className="text-lg font-semibold text-green-700 dark:text-green-300">
                Playground & Sports (1.5 Acres)
              </h3>

              <ul className="text-sm list-disc list-inside space-y-2">
                <li>Soccer field</li>
                <li>Multi-purpose courts</li>
                <li>Safe play equipment</li>
                <li>Organized sports programs</li>
              </ul>

              <p className="text-sm font-medium pt-2 border-t border-green-200 dark:border-green-800">
                Impact: Promotes physical health and emotional well-being.
              </p>
            </div>

            {/* Farm Card */}
            <div className="bg-white dark:bg-green-900 p-8 rounded-2xl shadow-lg border border-green-200 dark:border-green-800 space-y-4 hover:-translate-y-2 transition duration-300">
              <h3 className="text-lg font-semibold text-green-700 dark:text-green-300">
                Farm & Food Sustainability (3 Acres)
              </h3>

              <ul className="text-sm list-disc list-inside space-y-2">
                <li>Vegetable gardens</li>
                <li>Fruit trees</li>
                <li>Poultry, goats, cows</li>
                <li>Organic farming methods</li>
              </ul>

              <p className="text-sm font-medium pt-2 border-t border-green-200 dark:border-green-800">
                Impact: Food security and income generation.
              </p>
            </div>

            {/* Widow Support Card */}
            <div className="bg-white dark:bg-green-900 p-8 rounded-2xl shadow-lg border border-green-200 dark:border-green-800 space-y-4 hover:-translate-y-2 transition duration-300">
              <h3 className="text-lg font-semibold text-green-700 dark:text-green-300">
                Support for Widows
              </h3>

              <ul className="text-sm list-disc list-inside space-y-2">
                <li>Housing & income opportunities</li>
                <li>Childcare and parenting training</li>
                <li>Entrepreneurship skills development</li>
                <li>Counseling & support groups</li>
              </ul>

              <p className="text-sm font-medium pt-2 border-t border-green-200 dark:border-green-800">
                Impact: Restores dignity, income, and long-term purpose.
              </p>
            </div>

            {/* Sustainability Card */}
            <div className="bg-white dark:bg-green-900 p-8 rounded-2xl shadow-lg border border-green-200 dark:border-green-800 space-y-4 hover:-translate-y-2 transition duration-300">
              <h3 className="text-lg font-semibold text-green-700 dark:text-green-300">
                Sustainability & Income
              </h3>

              <ul className="text-sm list-disc list-inside space-y-2">
                <li>Sale of surplus farm produce</li>
                <li>Vocational skills training</li>
                <li>NGO & donor partnerships</li>
                <li>Solar power & rainwater harvesting systems</li>
              </ul>
            </div>

            </div>
        </div>
        </section>

      {/* ================= IMPLEMENTATION ================= */}
      <section className="max-w-5xl mx-auto px-6 py-24 space-y-6">
        <h2 className="text-3xl font-bold text-center text-green-700 dark:text-green-300">
          Implementation Phases
        </h2>

        <p><strong>Phase 1:</strong> Land preparation, housing, water, sanitation</p>
        <p><strong>Phase 2:</strong> Housing construction and playground</p>
        <p><strong>Phase 3:</strong> Farm establishment and livestock</p>
        <p><strong>Phase 4:</strong> Expansion, vocational training, income projects</p>
      </section>

      {/* ================= EXPECTED OUTCOMES ================= */}
      <section className="bg-green-50 dark:bg-green-950 py-20">
        <div className="max-w-5xl mx-auto px-6 text-center space-y-6">
          <h2 className="text-3xl font-bold text-green-800 dark:text-green-300">
            Expected Outcomes
          </h2>

          <ul className="space-y-3">
            <li>Safe housing for vulnerable children and widows</li>
            <li>Access to Godly Christian values and quality education</li>
            <li>Improved nutrition and health</li>
            <li>Empowered widows with sustainable livelihoods</li>
            <li>Long-term reduction of poverty and vulnerability</li>
          </ul>
        </div>
      </section>

      {/* ================= DONATION CTA ================= */}
      <section className="relative py-24 text-center text-white bg-gradient-to-r from-green-800 to-green-600">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-bold">
            Help Build Boma Village
          </h2>

          <p className="mt-6 text-lg text-green-100">
            PLEASE DONATE THROUGH OUR PARTNERS TO MAKE THIS DREAM COME TRUE.
          </p>

          {/*<button className="mt-8 bg-white text-green-800 px-8 py-4 rounded-full font-semibold shadow-lg hover:scale-105 transition duration-300">
            Donate Now
          </button>*/}
        </div>
      </section>

    </main>
  );
}