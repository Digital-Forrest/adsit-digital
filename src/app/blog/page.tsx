import type { Metadata } from "next";
import { BlogFeed } from "@/components/blog/blog-feed";
import { PageBrand } from "@/components/page-brand";
import { getUniqueTags, getUniqueTopics } from "@/lib/blog-filters";
import { getBlogPosts } from "@/lib/blog-posts";

const siteUrl = "https://adsitdigital.com/blog";
const blogDescription =
  "Read Adsit Digital’s latest growth guides covering SEO, paid media, lifecycle automation, and analytics for ambitious brands.";

export const metadata: Metadata = {
  title: "Blog",
  description: blogDescription,
  alternates: {
    canonical: "/blog",
  },
  openGraph: {
    title: "Adsit Digital Blog",
    description:
      "Campaign playbooks, channel strategies, and growth frameworks directly from the Adsit Digital team.",
    url: siteUrl,
    type: "website",
    images: [
      {
        url: "https://media.adsitdigital.com/logo336.png",
        width: 336,
        height: 336,
        alt: "Adsit Digital logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Adsit Digital Blog",
    description:
      "Explore practical insights on marketing strategy, automation, and creative that converts.",
    images: ["https://media.adsitdigital.com/logo336.png"],
  },
};

export default function BlogPage() {
  const posts = getBlogPosts();
  const availableTags = getUniqueTags(posts);
  const availableTopics = getUniqueTopics(posts);

  const blogJsonLd = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "Adsit Digital Blog",
    description: blogDescription,
    url: siteUrl,
    blogPost: posts.slice(0, 8).map((post) => ({
      "@type": "BlogPosting",
      headline: post.title,
      datePublished: post.date,
      author: {
        "@type": "Person",
        name: post.author,
      },
      url: `https://adsitdigital.com/blog/${post.slug}`,
    })),
  };

  return (
    <>
      <PageBrand brand="dark-blue" />
      <div data-brand="dark-blue" className="page-surface py-24">
        <div className="container relative flex w-full max-w-6xl flex-col gap-16">
          <header className="space-y-6">
            <div className="brand-badge">Adsit Digital Blog</div>
            <h1 className="gradient-heading text-balance text-4xl font-semibold leading-tight sm:text-5xl">
              Growth insights engineered for ambitious teams
            </h1>
            <p className="muted-copy text-pretty text-lg md:text-xl">
              Dive into playbooks for launching campaigns, orchestrating lifecycle automation, and translating analytics
              into action. Filter by the strategies that matter most to your roadmap.
            </p>
          </header>

          <BlogFeed availableTags={availableTags} availableTopics={availableTopics} posts={posts} />
        </div>

        <script
          suppressHydrationWarning
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(blogJsonLd) }}
        />
      </div>
    </>
  );
}

