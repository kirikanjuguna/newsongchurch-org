import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-32 border-t border-accent/40 bg-background">
      <div className="max-w-7xl mx-auto px-6 py-20">
        {/* Top content */}
        <div className="grid gap-12 md:grid-cols-4">
          {/* Church info */}
          <div>
            <h4 className="text-lg font-semibold text-foreground mb-4">
              New Song Church
            </h4>
            <p className="text-sm text-secondary leading-relaxed max-w-xs">
              Serving God, serving people, and transforming communities through
              faith, compassion, and mission-driven outreach.
            </p>
          </div>

          {/* Church */}
          <div>
            <h5 className="text-sm font-semibold text-foreground mb-4">
              Church
            </h5>
            <ul className="space-y-3 text-sm text-secondary">
              <li>
                <Link href="/about" className="hover:text-foreground transition">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-foreground transition">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/leadership" className="hover:text-foreground transition">
                  Leadership
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-foreground transition">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Community & Missions */}
          <div>
            <h5 className="text-sm font-semibold text-foreground mb-4">
              Outreach
            </h5>
            <ul className="space-y-3 text-sm text-secondary">
              <li>
                <Link href="/community" className="hover:text-foreground transition">
                  Community Work
                </Link>
              </li>
              <li>
                <Link href="/mission" className="hover:text-foreground transition">
                  Mission Work
                </Link>
              </li>
              <li>
                <Link href="/news" className="hover:text-foreground transition">
                  Latest News
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="hover:text-foreground transition">
                  Gallery
                </Link>
              </li>
            </ul>
          </div>

          {/* Call to action */}
          <div>
            <h5 className="text-sm font-semibold text-foreground mb-4">
              Get Involved
            </h5>
            <p className="text-sm text-secondary mb-6 leading-relaxed">
              Be part of what God is doing through New Song Church.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full
                         bg-accent/60 px-6 py-3 text-sm font-medium text-foreground
                         transition hover:bg-accent/80"
            >
              Join Us
            </Link>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-black/10 flex flex-col gap-4 md:flex-row md:items-center md:justify-between text-sm text-secondary">
          <p>
            © {new Date().getFullYear()} New Song Church. All rights reserved.
          </p>

          <p>
            Design & Built by{"  "}
            <a
              href="https://www.kirikanjuguna.com"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-foreground transition hover:text-secondary"
            >
               Kirika Njuguna
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
