import Link from "next/link";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-background text-foreground">

      {/* Top bar */}
      <header className="
        border-b border-secondary/20
        bg-surface
        sticky top-0 z-40
      ">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-6">
            <Link href="/admin" className="font-bold text-lg text-[#3f2d23]">
              Admin Dashboard
            </Link>

            <Link href="/admin/news" className="text-secondary hover:text-[#3f2d23]">
              Create News
            </Link>

            <Link href="/admin/news/list" className="text-secondary hover:text-[#3f2d23]">
              All News
            </Link>
          </div>

          {/* Logout */}
          <form action="/api/auth/logout" method="POST">
            <button className="
              px-4 py-2
              rounded-lg
              bg-red-600
              text-foreground
              font-medium
              hover:opacity-90
              transition
            ">
              Logout
            </button>
          </form>

        </div>
      </header>

      {/* Content */}
      <main className="max-w-7xl mx-auto px-6 py-10">
        {children}
      </main>

    </div>
  );
}
