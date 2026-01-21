export default function Hero() {
  return (
    <section className="relative min-h-[85vh] flex items-center">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-accent/30 via-background to-background" />

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-6 pt-32 pb-48 text-center">
        <h1 className="text-4xl md:text-6xl font-semibold max-w-4xl mx-auto leading-tight">
          Serving God. <br className="hidden md:block" />
          Serving People. <br className="hidden md:block" />
          Transforming Communities.
        </h1>

        <p className="mt-8 max-w-2xl mx-auto text-lg text-secondary">
          New Song Church exists to share the love of Christ through worship,
          community outreach, and mission-driven service.
        </p>
      </div>
    </section>
  );
}
