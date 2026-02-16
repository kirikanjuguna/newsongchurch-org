import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="mt-32 border-t border-accent/40 bg-background">
      <div className="max-w-7xl mx-auto px-6 py-20">

        <div className="grid gap-12 md:grid-cols-4">

          {/* Church info */}
          <div>
            <Image
              src="/logo.svg"
              alt="New Song Chapel Logo"
              width={432}
              height={93}
              className="h-12 w-auto mb-4 dark:invert"
            />
          {/* Church Name Below Logo 
          <span className="text-xl md:text-xl font-black text-[#3f2d23] dark:text-accent tracking-wide">
            New Song Chapel
          </span> */}

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
              <li><Link href="/about">About Us</Link></li>
              <li><Link href="/services">Services</Link></li>
              <li><Link href="/leadership">Leadership</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </div>

          {/* Outreach */}
          <div>
            <h5 className="text-sm font-semibold text-foreground mb-4">
              Outreach
            </h5>
            <ul className="space-y-3 text-sm text-secondary">
              <li><Link href="/community">Community Work</Link></li>
              <li><Link href="/mission">Mission Work</Link></li>
              <li><Link href="/news">Latest News</Link></li>
              <li><Link href="/gallery">Gallery</Link></li>
            </ul>
          </div>

          {/* CTA */}
          <div>
            <h5 className="text-sm font-semibold text-foreground mb-4">
              Get Involved
            </h5>
            <p className="text-sm text-secondary mb-6">
              Be part of what God is doing through New Song Church.
            </p>

            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full
              bg-accent/60 px-6 py-3 text-sm font-medium
              transition hover:bg-accent/80"
            >
              Join Us
            </Link>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 pt-8 border-t border-black/10 flex flex-col gap-4 md:flex-row md:justify-between text-sm text-secondary">
          <p>© {new Date().getFullYear()} New Song Chapel.</p>

          <p>
            Design & Built by{" "}
            <a
              href="https://www.kirikanjuguna.com"
              target="_blank"
              className="font-medium text-foreground hover:text-secondary"
            >
              Kirika Njuguna
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
