import NewsItem from "@/components/news/NewsItem";

async function getNews() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/news`, {
    cache: "no-store",
  });

  if (!res.ok) throw new Error("Failed to fetch news");

  return res.json();
}

export default async function NewsPage() {
  const data = await getNews();
  const news = data.news || [];

  return (
    <section className="py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-semibold text-[#3f2d23]">
            Latest News
          </h1>

          <p className="mt-4 text-lg text-secondary">
            Stories, updates and announcements from our church
          </p>
        </div>

        {/* Empty */}
        {news.length === 0 && (
          <p className="text-center text-secondary">
            No news published yet.
          </p>
        )}

        {/* List */}
        <div className="space-y-16">
          {news.map((item: any) => (
            <NewsItem key={item._id} item={item} />
          ))}
        </div>

      </div>
    </section>
  );
}
