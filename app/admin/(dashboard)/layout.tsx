"use client";

import { useRouter } from "next/navigation";

export default function AdminDashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();

  async function handleLogout() {
    await fetch("/api/admin/logout", { method: "POST" });
    router.push("/admin/login");
  }

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Admin Navbar */}
      <div className="flex justify-between items-center px-6 py-4 bg-black text-white">
        <h1 className="text-lg font-semibold">Admin Dashboard</h1>

        <button
          onClick={handleLogout}
          className="bg-white text-black px-4 py-2 rounded hover:bg-gray-200 transition"
        >
          Logout
        </button>
      </div>

      <div className="p-6">{children}</div>
    </div>
  );
}
