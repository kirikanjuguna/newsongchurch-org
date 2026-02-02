"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AdminLogin() {
  const router = useRouter();
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError("");

    const res = await fetch("/api/admin/login", {
      method: "POST",
      body: JSON.stringify({ password }),
      headers: { "Content-Type": "application/json" },
    });

    setLoading(false);

    if (!res.ok) {
      setError("Invalid password");
      return;
    }

    router.push("/admin/news");
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-6">
      <form
        onSubmit={handleLogin}
        className="w-full max-w-md bg-surface rounded-3xl shadow-xl p-10 space-y-6"
      >
        <h1 className="text-3xl font-semibold text-center">
          Admin Login
        </h1>

        <input
          type="password"
          placeholder="Admin password"
          className="w-full border border-(--color-secondary)/30 rounded-xl px-4 py-3 bg-background focus:outline-none focus:ring-2 focus:ring-accent"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        {error && (
          <p className="text-sm text-red-600 text-center">{error}</p>
        )}

        <button
          disabled={loading}
          className="w-full bg-accent text-foreground font-semibold py-3 rounded-xl hover:opacity-90 transition"
        >
          {loading ? "Signing in..." : "Login"}
        </button>
      </form>
    </div>
  );
}
