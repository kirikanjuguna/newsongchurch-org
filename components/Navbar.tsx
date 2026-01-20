"use client";

import Link from "next/link";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Church", href: "/church" },
  { name: "Mission", href: "/mission" },
  { name: "Community", href: "/community" },
  { name: "News", href: "/news" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-background/80 backdrop-blur border-b border-accent/40">
      <nav className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="font-semibold text-lg">
          New Song Church
        </Link>

        <ul className="hidden md:flex items-center gap-8 text-sm">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link
                href={link.href}
                className="text-secondary hover:text-primary transition"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
