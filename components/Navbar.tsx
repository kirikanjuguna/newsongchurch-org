"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const navLinks = [
  { name: "About Us", href: "/about" },
  { name: "Church", href: "/church" },
  { name: "Mission Work", href: "/mission" },
  { name: "Contact Us", href: "/contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-accent/40">
      <nav className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Brand */}
        <Link
          href="/"
          className="text-lg font-semibold tracking-tight text-foreground"
        >
          New Song Church
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center gap-10 text-sm">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link
                href={link.href}
                className="relative text-secondary transition hover:text-foreground
                           after:absolute after:left-0 after:-bottom-1
                           after:h-[1.5px] after:w-0 after:bg-foreground
                           after:transition-all after:duration-300
                           hover:after:w-full"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Toggle */}
        <button
          onClick={() => setOpen(true)}
          className="md:hidden text-foreground"
          aria-label="Open menu"
        >
          <Menu size={24} />
        </button>
      </nav>

      {/* Mobile Menu */}
      {open && (
        <div className="fixed inset-0 z-50">
          {/* 🔥 Glassmorphism backdrop ONLY */}
          <div className="absolute inset-0 bg-background/90 backdrop-blur-xl" />

          {/* Menu Content */}
          <div className="relative">
            {/* Header */}
            <div className="flex items-center justify-between h-16 px-6 border-b border-accent/40">
              <span className="font-semibold text-foreground">
                New Song Church
              </span>
              <button
                onClick={() => setOpen(false)}
                aria-label="Close menu"
                className="text-foreground"
              >
                <X size={24} />
              </button>
            </div>

            {/* Links */}
            <div className="flex flex-col items-center justify-center gap-8 text-lg mt-20">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="text-secondary hover:text-foreground transition"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
