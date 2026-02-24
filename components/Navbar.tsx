"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, Sun, Moon } from "lucide-react";
import { usePathname } from "next/navigation";

const navLinks = [
  { name: "About Us", href: "/about" },
  { name: "Church", href: "/church" },
  { name: "Missions Work", href: "/mission" },
  { name: "Community", href: "/community" },
  { name: "Boma Village", href: "/boma" },
  { name: "Gallery", href: "/gallery" },
  { name: "Contact Us", href: "/contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const pathname = usePathname();

  // Load theme
  useEffect(() => {
    const theme = localStorage.getItem("theme");
    if (theme === "dark") {
      document.documentElement.setAttribute("data-theme", "dark");
      setDarkMode(true);
    }
  }, []);

  // Lock body scroll when menu open
  useEffect(() => {
    if (open) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
  }, [open]);

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
    <header className="sticky top-0 z-50 bg-[#e26c00] dark:bg-black backdrop-blur-md border-b border-accent/40">
      <nav className="max-w-7xl mx-auto px-4 md:px-6 h-20 flex items-center justify-between">
        
        {/* ================= LOGO + NAME ================= */}
        <Link href="/" className="flex flex-col items-start leading-tight">
          {/*<Image
            src="/logo.svg"
            alt="New Song Chapel Logo"
            width={432}
            height={93}
            className="h-10 w-auto dark:invert"
            priority
          />*/}

          {/* Church Name Below Logo */}
          <span className="text-xl md:text-l font-extrabold text-[#3f2d23] dark:text-accent tracking-wide">
            New Song Chapel
          </span>
          
            <Image
            src="/logo.svg"
            alt="New Song Chapel Logo"
            width={432}
            height={93}
            className="h-10 w-auto dark:invert"
            priority
          />
        </Link>

        {/* ================= DESKTOP NAV ================= */}
        <ul className="hidden md:flex items-center gap-6 text-sm">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;

            return (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className={`relative transition
                    ${
                      isActive
                        ? "text-white font-bold"
                        : "text-white dark:text-accent hover:text-white"
                    }
                    
                    after:absolute after:left-0 after:-bottom-1
                    after:h-[2px]
                    after:bg-white
                    after:transition-all after:duration-300
                    ${
                      isActive
                        ? "after:w-full"
                        : "after:w-0 hover:after:w-full"
                    }
                  `}
                >
                  {link.name}
                </Link>
              </li>
            );
          })}

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

        {/* ================= MOBILE CONTROLS ================= */}
        <div className="flex items-center gap-3 md:hidden">
          <button
            onClick={toggleDarkMode}
            className="p-2 rounded-full bg-accent/30 hover:bg-accent/50 transition"
          >
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>

          <button
            onClick={() => setOpen(true)}
            className="p-2 rounded-lg hover:bg-accent/30 transition"
            aria-label="Open menu"
          >
            <Menu size={24} />
          </button>
        </div>
      </nav>

      {/* ================= MOBILE OVERLAY ================= */}
      <div
        className={`fixed inset-0 bg-black/50 z-40 transition-opacity duration-300 md:hidden
        ${open ? "opacity-100" : "opacity-0 pointer-events-none"}`}
        onClick={() => setOpen(false)}
      />

      {/* ================= MOBILE DRAWER ================= */}
      <div
        className={`fixed top-0 right-0 h-full w-full max-w-sm
        bg-surface border-l border-accent/30 z-50 shadow-2xl
        transform transition-transform duration-300 md:hidden
        ${open ? "translate-x-0" : "translate-x-full"}`}
      >
        {/* Drawer Header */}
        <div className="flex items-center justify-between h-20 px-5 bg-background border-b border-accent/30">
          <div className="flex flex-col leading-tight">
            <Image
              src="/logo.svg"
              alt="Logo"
              width={432}
              height={93}
              className="h-9 w-auto dark:invert"
            />
            <span className="text-xs font-semibold text-[#3f2d23] dark:text-accent tracking-wide">
              New Song Chapel
            </span>
          </div>

          <button
            onClick={() => setOpen(false)}
            className="p-2 rounded-lg hover:bg-accent/30 transition"
          >
            <X size={24} />
          </button>
        </div>

        {/* Drawer Links */}
        <div className="flex flex-col px-5 py-6 gap-3">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;

            return (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setOpen(false)}
                className={`
                  text-base font-semibold
                  py-4 px-4
                  rounded-xl
                  border
                  transition
                  ${
                    isActive
                      ? "bg-accent text-foreground border-accent"
                      : "bg-background border-accent/20 text-secondary hover:bg-accent/10 hover:text-foreground"
                  }
                `}
              >
                {link.name}
              </Link>
            );
          })}
        </div>
      </div>
    </header>
  );
}
