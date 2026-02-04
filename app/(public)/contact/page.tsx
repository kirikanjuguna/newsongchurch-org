"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";
import { useState } from "react";

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<string | null>(null);

  function updateField(key: string, value: string) {
    setForm((prev) => ({ ...prev, [key]: value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (data.success) {
        setStatus("Message sent successfully ✅");
        setForm({ name: "", email: "", subject: "", message: "" });
      } else {
        setStatus("Failed to send message ❌");
      }
    } catch (err) {
      setStatus("Something went wrong ❌");
    } finally {
      setLoading(false);
    }
  }

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
            <ContactItem icon={MapPin} title="Location" text="South C, Nairobi, Kenya" />
            <ContactItem icon={Phone} title="Phone" text="+254 700 000 000" />
            <ContactItem icon={Mail} title="Email" text="info@newsongchurch.org" />

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
            <div className="absolute -inset-1 rounded-3xl bg-accent/30 blur-xl opacity-60" />

            <div
              className="relative rounded-3xl bg-black/80 backdrop-blur-sm
                         p-10 shadow-[0_8px_24px_rgba(239,197,149,0.25)]
                         border border-black/5"
            >
              <form className="space-y-6" onSubmit={handleSubmit}>

                <Input
                  label="Full Name"
                  type="text"
                  value={form.name}
                  onChange={(v) => updateField("name", v)}
                  placeholder="Your name"
                />

                <Input
                  label="Email Address"
                  type="email"
                  value={form.email}
                  onChange={(v) => updateField("email", v)}
                  placeholder="you@email.com"
                />

                <Input
                  label="Subject"
                  type="text"
                  value={form.subject}
                  onChange={(v) => updateField("subject", v)}
                  placeholder="How can we help?"
                />

                <div>
                  <label className="block mb-2 text-sm font-medium text-white">
                    Message
                  </label>
                  <textarea
                    rows={5}
                    value={form.message}
                    onChange={(e) => updateField("message", e.target.value)}
                    placeholder="Write your message here..."
                    className="w-full rounded-xl bg-white/10 border border-white/10
                               px-4 py-3 text-white placeholder:text-white/50
                               focus:outline-none focus:ring-2 focus:ring-accent"
                    required
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="inline-flex items-center justify-center
                             rounded-xl bg-accent/60 px-6 py-3 font-semibold
                             text-accent-foreground transition
                             hover:opacity-90 disabled:opacity-50"
                >
                  {loading ? "Sending..." : "Send Message"}
                </button>

                {status && (
                  <p className="text-sm text-white/80 pt-2">{status}</p>
                )}
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
      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/20 text-accent">
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
  value,
  onChange,
}: {
  label: string;
  type: string;
  placeholder: string;
  value: string;
  onChange: (v: string) => void;
}) {
  return (
    <div>
      <label className="block mb-2 text-sm font-medium text-white">
        {label}
      </label>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        required
        className="w-full rounded-xl bg-white/10 border border-white/10
                   px-4 py-3 text-white placeholder:text-white/50
                   focus:outline-none focus:ring-2 focus:ring-accent"
      />
    </div>
  );
}
