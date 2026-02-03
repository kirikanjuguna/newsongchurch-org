import Link from "next/link";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-background text-foreground">

      <header className="border-b border-secondary/20 bg-surface sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

          <div className="flex items-center gap-6 font-medium text-[#3f2d23]">
            <Link href="/admin/news" className="hover:opacity-80">
              Create News
            </Link>

            <Link href="/admin/news/list" className="hover:opacity-80">
              All News
            </Link>
          </div>

          {/* ✅ FIXED LOGOUT ROUTE */}
          <form action="/api/admin/logout" method="POST">
            <button className="px-4 py-2 rounded-lg bg-red-600 text-white font-semibold hover:opacity-90">
              Logout
            </button>
          </form>

        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-10">
        {children}
      </main>
    </div>
  );
}
