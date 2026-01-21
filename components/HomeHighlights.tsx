import Link from "next/link";
import { Church, Users, Globe } from "lucide-react";

const highlights = [
  {
    title: "Our Church",
    description:
      "A Christ-centered church devoted to worship, discipleship, and spiritual growth.",
    href: "/church",
    icon: Church,
  },
  {
    title: "Community",
    description:
      "Serving families and individuals through outreach, compassion, and practical support.",
    href: "/community",
    icon: Users,
  },
  {
    title: "Mission Work",
    description:
      "Transforming lives through education, healthcare, and faith-driven missions.",
    href: "/mission",
    icon: Globe,
  },
];

export default function HomeHighlights() {
  return (
    <section className="relative -mt-32 pb-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid gap-10 md:grid-cols-3">
          {highlights.map((item) => {
            const Icon = item.icon;

            return (
              <Link
                key={item.title}
                href={item.href}
                className="group relative overflow-hidden rounded-3xl
                           bg-surface border border-secondary/15
                           p-12 transition-all duration-300
                           hover:-translate-y-3 hover:shadow-2xl"
              >
                {/* ambient glow */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition">
                  <div className="absolute -top-20 -right-20 h-48 w-48 rounded-full bg-highlight/40 blur-3xl" />
                </div>

                {/* icon */}
                <div className="relative mb-10 inline-flex h-16 w-16 items-center justify-center
                                rounded-2xl bg-accent/40 text-foreground">
                  <Icon size={30} strokeWidth={1.5} />
                </div>

                <h3 className="relative text-2xl font-semibold mb-4">
                  {item.title}
                </h3>

                <p className="relative text-secondary leading-relaxed">
                  {item.description}
                </p>

                <span className="relative mt-10 inline-flex items-center gap-2 font-medium">
                  Learn more
                  <span className="transition group-hover:translate-x-1">→</span>
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
