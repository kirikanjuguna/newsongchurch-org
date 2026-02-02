import Link from "next/link";

interface NewsItemProps {
  item: any;
}

export default function NewsItem({ item }: NewsItemProps) {
  const images: string[] = item.images || [];

  const mainImage = images[0] || "/news-placeholder.jpg";
  const extraImages = images.slice(1, 4);

  return (
    <article className="
      group
      bg-background
      rounded-[2.5rem]
      shadow-xl
      hover:shadow-2xl
      transition
      duration-300
      overflow-hidden
    ">
      <div className="grid lg:grid-cols-2">

        {/* ================= IMAGE SIDE ================= */}

        <div className="bg-black">

          {/* BIG HERO IMAGE */}
          <div className="relative min-h-[520px]">
            <img
              src={mainImage}
              alt={item.title}
              className="
                absolute inset-0
                w-full h-full
                object-cover
                group-hover:scale-105
                transition duration-700
              "
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-black/40 to-transparent" />
          </div>

          {/* EXTRA IMAGES — only if exist */}
          {extraImages.length > 0 && (
            <div className="grid grid-cols-3 gap-1">
              {extraImages.map((img, i) => (
                <div key={i} className="relative h-40">
                  <img
                    src={img}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          )}
        </div>

        {/* ================= TEXT SIDE ================= */}

        <div className="p-14 flex flex-col justify-center">

          {/* Category */}
          <span className="
            inline-block
            text-xs
            tracking-widest
            uppercase
            text-secondary
            mb-4
          ">
            {item.category}
          </span>

          {/* Title */}
          <h2 className="
            text-3xl md:text-4xl
            font-semibold
            leading-tight
            text-foreground
            mb-5
            group-hover:underline
            underline-offset-4
          ">
            {item.title}
          </h2>

          {/* Date */}
          <p className="text-sm text-secondary mb-6">
            {new Date(item.createdAt).toDateString()}
          </p>

          {/* Excerpt */}
          <p className="
            text-secondary
            leading-relaxed
            text-lg
            mb-10
          ">
            {item.excerpt}
          </p>

          {/* CTA */}
          <Link
            href={`/news/${item.slug}`}
            className="
              inline-flex items-center gap-4
              font-medium text-lg
              text-foreground
            "
          >
            Read full story

            <span className="
              h-12 w-12
              rounded-full
              bg-accent/80
              flex items-center justify-center
              group-hover:translate-x-1
              transition
            ">
              →
            </span>
          </Link>

        </div>
      </div>
    </article>
  );
}
