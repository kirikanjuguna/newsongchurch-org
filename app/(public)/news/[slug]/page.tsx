import { notFound } from "next/navigation";
import NewsGallery from "@/components/news/NewsGallery";
import NewsShare from "@/components/news/NewsShare";
import NewsItem from "@/components/news/NewsItem";

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

  return (
    <article>

      {/* HERO */}
      <div className="relative h-[520px] overflow-hidden">
        <img
          src={news.images?.[0]}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />

        <div className="relative z-10 max-w-4xl mx-auto px-6 h-full flex flex-col justify-center text-white">
          <h1 className="text-5xl font-bold mb-4">
            {news.title}
          </h1>
          <p className="opacity-80">
            {new Date(news.createdAt).toDateString()}
          </p>
        </div>
      </div>

      {/* BODY */}
      <div className="max-w-4xl mx-auto px-6 py-16">

        {/* Gallery */}
        {news.images?.length > 1 && (
          <NewsGallery images={news.images} />
        )}

        {/* Content */}
        <div
          className="prose max-w-none mt-12"
          dangerouslySetInnerHTML={{ __html: news.content }}
        />

        {/* Share */}
        <NewsShare title={news.title} />

        {/* Related */}
        {related.length > 0 && (
          <section className="mt-24">
            <h3 className="text-3xl font-semibold mb-12">
              Related Stories
            </h3>

            <div className="space-y-16">
              {related.map((item: any) => (
                <NewsItem key={item._id} item={item} />
              ))}
            </div>
          </section>
        )}

      </div>
    </article>
  );
}
