import NewsItem from "@/components/news/NewsItem";
import Link from "next/link";

function getBaseUrl() {
  if (process.env.NEXT_PUBLIC_BASE_URL) {
    return process.env.NEXT_PUBLIC_BASE_URL;
  }
  return "http://localhost:3000";
}

async function getNews() {
  const res = await fetch(`${getBaseUrl()}/api/news`, {
    cache: "no-store",
  });

  if (!res.ok) throw new Error("Failed to fetch news");
  return res.json();
}

export default async function NewsPage() {
  const data = await getNews();
  const news = data.news || [];

  const featured = news[0];
  const rest = news.slice(1);

  return (
    <section className="py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-20">
          <h1 className="text-5xl font-semibold text-[#3f2d23]">
            Latest News
          </h1>
          <p className="mt-4 text-lg text-secondary">
            Stories, updates and announcements from our church
          </p>
        </div>

        {/* FEATURED HERO */}
        {featured && (
          <Link href={`/news/${featured.slug}`}>
            <article className="group mb-24 rounded-[2.5rem] overflow-hidden shadow-2xl bg-background cursor-pointer">

              <div className="grid lg:grid-cols-2">

                {/* IMAGE */}
                <div className="relative min-h-[560px]">
                  <img
                    src={featured.images?.[0] || "/news-placeholder.jpg"}
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-black/40 to-transparent" />
                </div>

                {/* TEXT */}
                <div className="p-16 flex flex-col justify-center">
                  <span className="text-xs uppercase tracking-widest text-secondary mb-4">
                    Featured Story
                  </span>

                  <h2 className="text-4xl font-semibold mb-6">
                    {featured.title}
                  </h2>

                  <p className="text-secondary text-lg mb-8">
                    {featured.excerpt}
                  </p>

                  <span className="font-semibold text-foreground">
                    Read full story →
                  </span>
                </div>

              </div>
            </article>
          </Link>
        )}

        {/* EMPTY */}
        {news.length === 0 && (
          <p className="text-center text-secondary">
            No news published yet.
          </p>
        )}

        {/* REST */}
        <div className="space-y-20">
          {rest.map((item: any) => (
            <NewsItem key={item._id} item={item} />
          ))}
        </div>

      </div>
    </section>
  );
}
