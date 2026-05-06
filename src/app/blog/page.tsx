import { getBlogPosts } from "@/sanity/queries";
import { urlFor } from "@/sanity/image";
import BlogPageClient, { BlogPost } from "@/components/BlogPageClient";

const FALLBACK_IMAGES: Record<string, string> = {
  "five-things-before-buying-business": "/images/stock/business-deal.jpg",
  "presence-is-the-new-productivity": "/images/stock/coaching-session.jpg",
  "conscious-business-mindful-pivoting": "/images/stock/financial-charts.jpg",
  "from-greed-to-aspiration": "/images/stock/trading-desk.jpg",
};

const FALLBACK_IMAGE_DEFAULT = "/images/stock/blog-header.jpg";

function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString("en-US", { month: "long", year: "numeric" });
}

function mapPost(raw: Record<string, unknown>): BlogPost {
  const slug = (raw.slug as { current: string } | null)?.current ?? String(raw._id);
  const image = raw.coverImage
    ? urlFor(raw.coverImage).width(800).url()
    : (FALLBACK_IMAGES[slug] ?? FALLBACK_IMAGE_DEFAULT);

  return {
    slug,
    title: String(raw.title ?? ""),
    excerpt: String(raw.excerpt ?? ""),
    category: String(raw.category ?? ""),
    date: raw.publishedAt ? formatDate(String(raw.publishedAt)) : "",
    image,
    readTime: raw.readTime ? String(raw.readTime) : undefined,
  };
}

export default async function BlogPage() {
  const raw = await getBlogPosts();
  const posts: BlogPost[] = (raw as Record<string, unknown>[]).map(mapPost);

  const featured = posts[0] ?? {
    slug: "five-things-before-buying-business",
    title: "5 Things You Must Know Before Buying a Business",
    excerpt: "Buying a business is one of the biggest financial decisions you'll ever make.",
    category: "Business Acquisition",
    date: "January 2025",
    image: "/images/stock/business-deal.jpg",
  };

  const articles = posts.slice(1);

  return <BlogPageClient featured={featured} articles={articles} />;
}
