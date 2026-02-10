"use client";

import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const [open, setOpen] = useState(false);

  const handleLogout = async () => {
    await fetch("/api/admin/logout", {
      method: "POST",
    });

    router.push("/admin/login");
    router.refresh();
  };

  return (
    <div className="min-h-screen bg-background text-foreground">

      {/* ================= HEADER ================= */}

      <header className="border-b border-secondary/20 bg-surface sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/logo.svg"
              alt="New Song Chapel Logo"
              width={432}
              height={93}
              className="h-10 w-auto dark:invert"
              priority
            />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-6 font-medium text-[#3f2d23]">
            <Link href="/admin/news" className="hover:opacity-80">
              Create News
            </Link>

            <Link href="/admin/news/list" className="hover:opacity-80">
              All News
            </Link>

            <button
              onClick={handleLogout}
              className="px-4 py-2 rounded-lg bg-red-600 text-white font-semibold hover:opacity-90"
            >
              Logout
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setOpen(true)}
          >
            <Menu size={26} />
          </button>

        </div>
      </header>

      {/* ================= MOBILE MENU ================= */}

      {open && (
        <div className="fixed inset-0 bg-background z-50 flex flex-col">

          {/* Mobile Header */}
          <div className="flex justify-between items-center px-6 py-4 border-b">
            <span className="font-semibold">Admin Menu</span>
            <button onClick={() => setOpen(false)}>
              <X size={26} />
            </button>
          </div>

          {/* Mobile Links */}
          <div className="flex flex-col gap-6 p-8 text-lg">

            <Link
              href="/admin/news"
              onClick={() => setOpen(false)}
              className="hover:opacity-80"
            >
              Create News
            </Link>

            <Link
              href="/admin/news/list"
              onClick={() => setOpen(false)}
              className="hover:opacity-80"
            >
              All News
            </Link>

            <button
              onClick={handleLogout}
              className="mt-4 px-4 py-3 rounded-lg bg-red-600 text-white font-semibold"
            >
              Logout
            </button>

          </div>
        </div>
      )}

      {/* ================= MAIN ================= */}

      <main className="max-w-7xl mx-auto px-6 py-10">
        {children}
      </main>

    </div>
  );
}
