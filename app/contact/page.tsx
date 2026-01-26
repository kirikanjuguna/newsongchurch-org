"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";

export default function ContactPage() {
  return (
    <section className="relative py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        {/* ================= HEADER ================= */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl mb-20"
        >
          <h1 className="text-4xl md:text-5xl font-extrabold text-foreground tracking-tight">
            Contact Us
          </h1>
          <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
            We would love to hear from you. Reach out for prayer, fellowship,
            partnership, or any questions you may have.
          </p>
        </motion.div>

        {/* ================= CONTENT ================= */}
        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* ===== CONTACT DETAILS ===== */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="space-y-10"
          >
            <ContactItem
              icon={MapPin}
              title="Location"
              text="South C, Nairobi, Kenya"
            />

            <ContactItem
              icon={Phone}
              title="Phone"
              text="+254 700 000 000"
            />

            <ContactItem
              icon={Mail}
              title="Email"
              text="info@newsongchurch.org"
            />

            <p className="italic text-accent max-w-md">
              “Call to Me, and I will answer you, and show you great and mighty
              things.” — Jeremiah 33:3
            </p>
          </motion.div>

          {/* ===== CONTACT FORM ===== */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Glow */}
            <div
              className="absolute -inset-1 rounded-3xl bg-accent/30 blur-xl opacity-60"
            />

            <div
              className="relative rounded-3xl bg-black/80 backdrop-blur-sm
                         p-10 shadow-[0_8px_24px_rgba(239,197,149,0.25)]
                         border border-black/5"
            >
              <form className="space-y-6">
                <Input label="Full Name" type="text" placeholder="Your name" />
                <Input label="Email Address" type="email" placeholder="you@email.com" />
                <Input label="Subject" type="text" placeholder="How can we help?" />

                <div>
                  <label className="block mb-2 text-sm font-medium text-white">
                    Message
                  </label>
                  <textarea
                    rows={5}
                    placeholder="Write your message here..."
                    className="w-full rounded-xl bg-white/10 border border-white/10
                               px-4 py-3 text-white placeholder:text-white/50
                               focus:outline-none focus:ring-2 focus:ring-accent"
                  />
                </div>

                <button
                  type="submit"
                  className="inline-flex items-center justify-center
                             rounded-xl bg-accent px-6 py-3 font-semibold
                             text-accent-foreground transition
                             hover:opacity-90"
                >
                  Send Message
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ================= COMPONENTS ================= */

function ContactItem({
  icon: Icon,
  title,
  text,
}: {
  icon: any;
  title: string;
  text: string;
}) {
  return (
    <div className="flex items-start gap-4">
      <div
        className="flex h-12 w-12 items-center justify-center
                   rounded-xl bg-accent/20 text-accent"
      >
        <Icon size={22} />
      </div>
      <div>
        <h4 className="font-semibold text-foreground">{title}</h4>
        <p className="text-muted-foreground">{text}</p>
      </div>
    </div>
  );
}

function Input({
  label,
  type,
  placeholder,
}: {
  label: string;
  type: string;
  placeholder: string;
}) {
  return (
    <div>
      <label className="block mb-2 text-sm font-medium text-white">
        {label}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        className="w-full rounded-xl bg-white/10 border border-white/10
                   px-4 py-3 text-white placeholder:text-white/50
                   focus:outline-none focus:ring-2 focus:ring-accent"
      />
    </div>
  );
}
