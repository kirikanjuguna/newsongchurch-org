import { notFound } from "next/navigation";
import NewsGallery from "@/components/news/NewsGallery";
import NewsShare from "@/components/news/NewsShare";
import RelatedNewsCard from "@/components/news/RelatedNewsCard";

function baseUrl() {
  return process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";
}

async function getAllNews() {
  const res = await fetch(`${baseUrl()}/api/news`, {
    cache: "no-store",
  });
  if (!res.ok) throw new Error("fail");
  return res.json();
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const data = await getAllNews();
  const all = data.news || [];

  const news = all.find((n: any) => n.slug === slug);
  if (!news) return notFound();

  const related = all
    .filter((n: any) => n.slug !== slug)
    .slice(0, 3);

  const heroImage = news.images?.[0] || "/news-placeholder.jpg";

  return (
    <article className="bg-surface">

      {/* ================= HERO ================= */}

      <section className="relative h-[460px] md:h-[520px] overflow-hidden">

        <img
          src={heroImage}
          alt={news.title}
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/60" />

        <div className="relative z-10 h-full flex items-end">
          <div className="max-w-3xl mx-auto px-6 pb-14 text-white w-full">

            {news.category && (
              <span className="inline-block mb-4 text-xs uppercase tracking-wider bg-white/20 px-3 py-1 rounded-full">
                {news.category}
              </span>
            )}

            <h1 className="text-3xl md:text-5xl font-bold leading-tight">
              {news.title}
            </h1>

            <p className="mt-3 text-white/80 text-sm">
              {new Date(news.createdAt).toLocaleDateString(undefined, {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </p>

          </div>
        </div>
      </section>

      {/* ================= ARTICLE COLUMN ================= */}

      <section className="py-16">

        {/* 👇 THIS fixes your “content spreads too far right” problem */}
        <div className="max-w-3xl mx-auto px-6">

          {/* Excerpt */}
          {news.excerpt && (
            <p className="text-xl leading-relaxed text-secondary mb-10">
              {news.excerpt}
            </p>
          )}

          {/* Gallery */}
          {news.images?.length > 1 && (
            <div className="mb-12">
              <NewsGallery images={news.images} />
            </div>
          )}

          {/* Content */}
          <div
            className="
              prose prose-lg
              max-w-none
              text-[#3f2d23]
              prose-headings:text-foreground
              prose-p:text-secondary
              prose-a:text-accent
            "
            dangerouslySetInnerHTML={{ __html: news.content }}
          />

          {/* Share */}
          <div className="mt-14 pt-8 text-secondary border-t border-border">
            <NewsShare title={news.title} />
          </div>

        </div>
      </section>

      {/* ================= RELATED ================= */}

      {related.length > 0 && (
        <section className="py-16 border-t text-secondary border-border">
          <div className="max-w-6xl mx-auto px-6">

            <h3 className="text-2xl text-secondary font-semibold mb-10">
              Related Stories
            </h3>

            <div className="grid md:grid-cols-3 gap-8">
              {related.map((item: any) => (
                <RelatedNewsCard key={item._id} item={item} />
              ))}
            </div>

          </div>
        </section>
      )}

    </article>
  );
}
