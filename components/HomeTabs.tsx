"use client";

import { useState } from "react";
import Link from "next/link";

const tabs = [
  {
    id: "church",
    title: "Our Church",
    content:
      "We are a Christ-centered church committed to spiritual growth, discipleship, and living out the Word of God in everyday life.",
    link: "/church",
  },
  {
    id: "community",
    title: "Community",
    content:
      "We serve our local communities through outreach programs that bring hope, care, and practical support to families in need.",
    link: "/community",
  },
  {
    id: "mission",
    title: "Mission Work",
    content:
      "Our mission work focuses on transforming lives through education, healthcare, and faith-driven initiatives.",
    link: "/mission",
  },
];

export default function HomeTabs() {
  const [activeTab, setActiveTab] = useState("church");

  const current = tabs.find((t) => t.id === activeTab)!;

  return (
    <section className="py-20">
      <div className="max-w-6xl mx-auto px-6">
        {/* Tab buttons */}
        <div className="flex justify-center gap-6 border-b border-secondary/30 pb-4">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`pb-2 font-medium transition ${
                activeTab === tab.id
                  ? "border-b-2 border-foreground text-foreground"
                  : "text-secondary hover:text-foreground"
              }`}
            >
              {tab.title}
            </button>
          ))}
        </div>

        {/* Tab content */}
        <div className="mt-10 text-center max-w-3xl mx-auto">
          <p className="text-lg text-secondary">
            {current.content}
          </p>

          <Link
            href={current.link}
            className="inline-block mt-8 px-8 py-3 rounded-xl bg-foreground text-background font-medium hover:opacity-90 transition"
          >
            Learn More
          </Link>
        </div>
      </div>
    </section>
  );
}
