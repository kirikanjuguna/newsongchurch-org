import Link from "next/link";

const highlights = [
  {
    title: "Our Church",
    description:
      "A Christ-centered church devoted to worship, discipleship, and spiritual growth.",
    href: "/church",
    icon: "⛪",
  },
  {
    title: "Community",
    description:
      "Serving families and individuals through outreach, compassion, and practical support.",
    href: "/community",
    icon: "🤝",
  },
  {
    title: "Mission Work",
    description:
      "Transforming lives through education, healthcare, and faith-driven missions.",
    href: "/mission",
    icon: "🌍",
  },
];

export default function HomeHighlights() {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid gap-8 md:grid-cols-3">
          {highlights.map((item) => (
            <Link
              key={item.title}
              href={item.href}
              className="group rounded-2xl bg-surface p-10 text-center transition
                         hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="text-5xl mb-6">{item.icon}</div>

              <h3 className="text-2xl font-semibold mb-4">
                {item.title}
              </h3>

              <p className="text-secondary leading-relaxed">
                {item.description}
              </p>

              <span className="inline-block mt-8 font-medium text-foreground group-hover:underline">
                Learn more →
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
