import Link from "next/link";

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
    <section className="max-w-6xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-10">Latest News</h1>

      {news.length === 0 && (
        <p className="text-gray-500">No news published yet.</p>
      )}

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {news.map((item: any) => (
          <Link key={item._id} href={`/news/${item.slug}`}>
            <article className="border rounded-xl overflow-hidden shadow hover:shadow-lg transition cursor-pointer">
              
              {/* Image */}
              <img
                src={item.images?.[0] || "/news-placeholder.jpg"}
                alt={item.title}
                className="w-full h-52 object-cover"
              />

              {/* Content */}
              <div className="p-5">
                <p className="text-sm text-gray-400 mb-2">
                  {new Date(item.createdAt).toDateString()}
                </p>

                <h2 className="text-xl font-semibold mb-2 line-clamp-2">
                  {item.title}
                </h2>

                <p className="text-gray-600 line-clamp-3">
                  {item.excerpt}
                </p>
              </div>
            </article>
          </Link>
        ))}
      </div>
    </section>
  );
}
