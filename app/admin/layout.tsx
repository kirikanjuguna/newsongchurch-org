"use client";

import { ReactNode } from "react";
import { useRouter } from "next/navigation";

export default function AdminLayout({
  children,
}: {
  children: ReactNode;
}) {
  const router = useRouter();

  async function handleLogout() {
    await fetch("/api/admin/logout", {
      method: "POST",
    });

    router.push("/admin/login");
    router.refresh();
  }

  return (
    <div className="min-h-screen bg-black text-white">
      {/* 🔝 Admin Navbar */}
      <div className="flex justify-between items-center px-8 py-4 border-b border-zinc-800">
        <h1 className="text-xl font-bold">Admin Dashboard</h1>

        <button
          onClick={handleLogout}
          className="bg-red-600 px-4 py-2 rounded hover:bg-red-700"
        >
          Logout
        </button>
      </div>

      {/* 📄 Page Content */}
      <div className="p-8">{children}</div>
    </div>
  );
}
