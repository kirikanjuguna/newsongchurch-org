import { notFound } from "next/navigation";

async function getNewsItem(slug: string) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/news`,
    { cache: "no-store" }
  );

  if (!res.ok) throw new Error("Failed to fetch news");

  const data = await res.json();

  return data.news.find((item: any) => item.slug === slug);
}

export default async function NewsArticle({
  params,
}: {
  params: { slug: string };
}) {
  const news = await getNewsItem(params.slug);

  if (!news) return notFound();

  return (
    <article className="max-w-4xl mx-auto px-4 py-16">
      {/* Title */}
      <h1 className="text-4xl font-bold mb-4">{news.title}</h1>

      {/* Meta */}
      <p className="text-gray-400 mb-8">
        {new Date(news.createdAt).toDateString()} • {news.category}
      </p>

      {/* Images */}
      {news.images?.length > 0 && (
        <div className="space-y-6 mb-10">
          {news.images.map((img: string, index: number) => (
            <img
              key={index}
              src={img}
              alt={`image-${index}`}
              className="rounded-lg w-full object-cover"
            />
          ))}
        </div>
      )}

      {/* Content */}
      <div
        className="prose max-w-none"
        dangerouslySetInnerHTML={{ __html: news.content }}
      />
    </article>
  );
}
