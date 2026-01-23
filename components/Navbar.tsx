"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Sun, Moon } from "lucide-react";

const navLinks = [
  { name: "About Us", href: "/about" },
  { name: "Church", href: "/church" },
  { name: "Mission Work", href: "/mission" },
  { name: "Contact Us", href: "/contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  // Load theme from localStorage
  useEffect(() => {
    const theme = localStorage.getItem("theme");
    if (theme === "dark") {
      document.documentElement.setAttribute("data-theme", "dark");
      setDarkMode(true);
    }
  }, []);

  const toggleDarkMode = () => {
    if (darkMode) {
      document.documentElement.removeAttribute("data-theme");
      localStorage.setItem("theme", "light");
      setDarkMode(false);
    } else {
      document.documentElement.setAttribute("data-theme", "dark");
      localStorage.setItem("theme", "dark");
      setDarkMode(true);
    }
  };

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
        <ul className="hidden md:flex items-center gap-6 text-sm">
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

          {/* Dark Mode Toggle Desktop */}
          <li>
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-full bg-accent/30 hover:bg-accent/50 transition"
              aria-label="Toggle Dark Mode"
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </li>
        </ul>

        {/* Mobile Toggle + Hamburger */}
        <div className="flex items-center gap-4 md:hidden">
          <button
            onClick={toggleDarkMode}
            className="p-2 rounded-full bg-accent/30 hover:bg-accent/50 transition"
            aria-label="Toggle Dark Mode"
          >
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>

          <button
            onClick={() => setOpen(true)}
            className="text-foreground"
            aria-label="Open menu"
          >
            <Menu size={24} />
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {open && (
        <div className="fixed inset-0 z-50 bg-background">
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
      )}
    </header>
  );
}
