"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

export default function AdminLogin() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault();

    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/admin/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.message || "Login failed");
        setLoading(false);
        return;
      }

      // ✅ success → go to dashboard
      router.push("/admin/news");

    } catch (err) {
      console.error(err);
      setError("Network error");
    }

    setLoading(false);
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-6">

      <form
        onSubmit={handleLogin}
        className="
          w-full max-w-md
          bg-white
          rounded-3xl
          shadow-2xl
          p-10
          space-y-6
          border border-secondary/20
        "
      >
                {/* ✅ LOGO */}
        <Link href="/" className="items-center">
          <Image
            src="/logo.svg"
            alt="New Song Chapel Logo"
            width={432}
            height={93}
            className="h-10 w-auto"
            priority
          />
        </Link>
        <h1 className="text-3xl font-semibold text-center text-[#3f2d23]">
          Newsong Admin Login
        </h1>

        {/* EMAIL */}
        <div className="space-y-2">
          <label className="text-sm text-[#3f2d23] font-medium">
            Email
          </label>
          <input
            type="email"
            required
            placeholder="admin@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="
              w-full
              border border-secondary/30
              rounded-xl
              px-4 py-3
              bg-white
              text-[#3f2d23]
              focus:outline-none
              focus:ring-2
              focus:ring-accent
            "
          />
        </div>

        {/* PASSWORD */}
        <div className="space-y-2">
          <label className="text-sm text-[#3f2d23] font-medium">
            Password
          </label>
          <input
            type="password"
            required
            placeholder="••••••••"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="
              w-full
              border border-secondary/30
              rounded-xl
              px-4 py-3
              bg-white
              text-[#3f2d23]
              focus:outline-none
              focus:ring-2
              focus:ring-accent
            "
          />
        </div>

        {/* ERROR */}
        {error && (
          <p className="text-sm text-red-600 text-center">
            {error}
          </p>
        )}

        {/* BUTTON */}
        <button
          disabled={loading}
          className="
            w-full
            bg-accent
            text-[#3f2d23]
            font-semibold
            py-3
            rounded-xl
            hover:opacity-90
            transition
            disabled:opacity-50
          "
        >
          {loading ? "Signing in..." : "Login"}
        </button>

      </form>
    </div>
  );
}
