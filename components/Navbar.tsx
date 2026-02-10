"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, Sun, Moon } from "lucide-react";

const navLinks = [
  { name: "About Us", href: "/about" },
  { name: "Church", href: "/church" },
  { name: "Missions Work", href: "/mission" },
  { name: "Community", href: "/community" },
  { name: "Contact Us", href: "/contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

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

        {/* ✅ LOGO */}
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/logo.svg"
            alt="New Song Chapel Logo"
            width={432}
            height={93}
            className="h-10 w-auto"
            priority
          />
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

        {/* Mobile */}
        <div className="flex items-center gap-4 md:hidden">
          <button
            onClick={toggleDarkMode}
            className="p-2 rounded-full bg-accent/30 hover:bg-accent/50 transition"
          >
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>

          <button onClick={() => setOpen(true)}>
            <Menu size={24} />
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {open && (
        <div className="fixed inset-0 z-50 bg-background">
          <div className="flex items-center justify-between h-16 px-6 border-b border-accent/40">

            {/* Logo in mobile menu */}
            <Image
              src="/logo.svg"
              alt="Logo"
              width={140}
              height={36}
              className="h-9 w-auto"
            />

            <button onClick={() => setOpen(false)}>
              <X size={24} />
            </button>
          </div>

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
