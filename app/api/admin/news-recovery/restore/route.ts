import { NextResponse } from "next/server";
import { connectDB } from "@/lib/connectDB";
import { News } from "@/models/News";
import { getAdminFromRequest } from "@/lib/auth";
import slugify from "slugify";

export const runtime = "nodejs";

const RECOVERY_NEWS = [
  {
    title: "ALATS Dance International: Coming to Kenya this August!",
    excerpt:
      "Get ready to move! In partnership with Pastor Cory Ratliff from Chicago, ALATS Dance is bringing a powerful ministry of movement and faith to Mukuru this August.",
    category: "Event",
    content: `
      <p>Something big is coming for the youth!</p>

      <p>
        ALATS Dance International, based in Chicago, USA, is coming to Kenya
        from August 2nd to 12th, 2026. Hosted by New Song Church, this ministry
        is about more than just dance—it’s a movement that has impacted
        thousands of young people globally.
      </p>

      <p>The team will be ministering live at:</p>

      <ul>
        <li>Mukuru Community</li>
        <li>The New Mukuru Estate (Singapore)</li>
        <li>Gisubizo Umoja</li>
      </ul>

      <p>
        Don't miss this opportunity for our youth to engage in powerful worship
        through dance and discover their God-given talents.
      </p>
    `,
    imageUrl:
      "https://res.cloudinary.com/dqpxbrwyf/image/upload/v1772637726/news/clvxuh6p5zctjfhucpcg.jpg",
    publicId: "news/clvxuh6p5zctjfhucpcg",
  },

  {
    title: "Join the Movement: Our First International VBS 2026",
    excerpt:
      "Over 1,000 children reached! This year’s VBS is extra special as we welcome our friends from ECF Youth in Oregon, USA, for a week of fun and faith.",
    category: "Outreach",
    content: `
      <p>
        Mark your calendars for August 9th–18th, 2026!
        Our fourth annual Vacation Bible School is coming,
        and it’s going to be our biggest one yet.
      </p>

      <p>
        For the first time, we are hosting an International VBS featuring
        the ECF Youth team from Oregon, USA.
      </p>

      <p>
        Over the past three years, we have reached over 1,000 children
        through this program.
      </p>

      <p>
        We are preparing for an unforgettable time of learning,
        spiritual growth, and fun for all the children of our community.
        Stay tuned for more details!
      </p>
    `,
    imageUrl:
      "https://res.cloudinary.com/dqpxbrwyf/image/upload/v1772637874/news/e0n3yqktgduobtixcn4g.jpg",
    publicId: "news/e0n3yqktgduobtixcn4g",
  },

  {
    title: "Expanding the Song: New Church Plant in Kamwokya, Uganda",
    excerpt:
      "The Gospel knows no borders! We are excited to announce the launch of New Song Fellowship Kamwokya, our first church plant in Uganda.",
    category: "Mission",
    content: `
      <p>
        We are thrilled to share that a new church is launching this year:
        New Song Fellowship Kamwokya in Uganda.
        This is a joyful milestone for our church family and our ministry partners.
      </p>

      <p>
        For the past three years, we have been serving in Kamwokya alongside
        our partner, Tasha Jubilee, who works with women across Uganda.
      </p>

      <p>
        Through this partnership, God has opened the door for a permanent
        house of worship.
      </p>

      <p>
        Please join us in praying for the people of Kamwokya and for Pastor Ivan
        as they step into this mission field to spread the love of Jesus.
      </p>
    `,
    imageUrl:
      "https://res.cloudinary.com/dqpxbrwyf/image/upload/v1772636862/news/zh2wspidzlvrxd4wvcaf.jpg",
    publicId: "news/zh2wspidzlvrxd4wvcaf",
  },
];

export async function POST() {
  try {
    /* ================= AUTH ================= */

    await getAdminFromRequest();

    /* ================= DATABASE ================= */

    await connectDB();

    const results = [];

    /* ================= RESTORE ================= */

    for (const article of RECOVERY_NEWS) {
      const slug = slugify(article.title, {
        lower: true,
        strict: true,
      });

      /*
       * Prevent duplicates.
       *
       * We check both the slug and the Cloudinary
       * image URL because either one is enough to
       * identify an already-restored article.
       */

      const existing = await News.findOne({
        $or: [
          { slug },
          { images: article.imageUrl },
        ],
      });

      if (existing) {
        results.push({
          title: article.title,
          status: "already_exists",
          id: existing._id.toString(),
          slug: existing.slug,
        });

        continue;
      }

      const news = await News.create({
        title: article.title,
        slug,
        excerpt: article.excerpt,
        content: article.content.trim(),
        category: article.category,
        isPublished: true,
        images: [article.imageUrl],
      });

      results.push({
        title: article.title,
        status: "created",
        id: news._id.toString(),
        slug: news.slug,
      });
    }

    return NextResponse.json({
      success: true,
      message: "News recovery completed.",
      total: results.length,
      results,
    });
  } catch (error: any) {
    console.error("NEWS RECOVERY ERROR:", error);

    return NextResponse.json(
      {
        success: false,
        message: error?.message || "News recovery failed.",
      },
      { status: 500 }
    );
  }
}