import Link from "next/link";

export default function RelatedNewsCard({ item }: any) {
  const img = item.images?.[0] || "/news-placeholder.jpg";

  return (
    <Link
      href={`/news/${item.slug}`}
      className="group block bg-background rounded-2xl overflow-hidden shadow hover:shadow-lg transition"
    >
      <div className="h-48 overflow-hidden">
        <img
          src={img}
          className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
        />
      </div>

      <div className="p-5">
        <p className="text-xs uppercase text-secondary mb-2">
          {item.category}
        </p>

        <h4 className="font-semibold leading-snug group-hover:underline">
          {item.title}
        </h4>
      </div>
    </Link>
  );
}
