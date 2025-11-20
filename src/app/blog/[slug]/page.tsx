import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { marked } from "marked";
import DOMPurify from "isomorphic-dompurify";
import { PageBrand } from "@/components/page-brand";
import { getBlogPost, getBlogPosts, getBlogSlugs } from "@/lib/blog-posts";

type BlogPostPageProps = {
  params: Promise<{ slug: string }>;
};

const siteBaseUrl = "https://adsitdigital.com";

export function generateStaticParams() {
  return getBlogSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata(
  props: BlogPostPageProps,
): Promise<Metadata> {
  const resolvedParams = await props.params;
  const post = getBlogPost(resolvedParams.slug);

  if (!post) {
    return {
      title: "Article not found",
      alternates: {
        canonical: "/blog",
      },
    };
  }

  const postUrl = `${siteBaseUrl}/blog/${post.slug}`;

  return {
    title: post.title,
    description: post.description,
    alternates: {
      canonical: `/blog/${post.slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      url: postUrl,
      publishedTime: post.date,
      authors: [post.author],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
    },
  };
}

export default async function BlogPostPage(props: BlogPostPageProps) {
  const resolvedParams = await props.params;
  const post = getBlogPost(resolvedParams.slug);

  if (!post) {
    notFound();
  }

  // Parse markdown and sanitize HTML to prevent XSS attacks
  const rawHtml = marked.parse(post.content) as string;
  const contentHtml = DOMPurify.sanitize(rawHtml, {
    // Allow common markdown HTML elements
    ALLOWED_TAGS: ['p', 'br', 'strong', 'em', 'u', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'ul', 'ol', 'li', 'blockquote', 'code', 'pre', 'a', 'img'],
    ALLOWED_ATTR: ['href', 'src', 'alt', 'title', 'class'],
    // Allow data attributes for styling
    ALLOW_DATA_ATTR: false,
  });

  const relatedPosts = getBlogPosts()
    .filter((candidate) => candidate.slug !== post.slug)
    .slice(0, 3);

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    author: {
      "@type": "Person",
      name: post.author,
    },
    mainEntityOfPage: `${siteBaseUrl}/blog/${post.slug}`,
  };

  return (
    <>
      <PageBrand brand="dark-blue" />
      <article data-brand="dark-blue" className="page-surface py-24">
        <div className="container relative flex w-full max-w-3xl flex-col gap-16">
          <header className="space-y-4">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] subtle-copy">
              {new Date(post.date).toLocaleDateString("en-GB", {
                month: "short",
                day: "numeric",
                year: "numeric",
              })}
            </p>
            <h1 className="gradient-heading text-balance text-4xl font-semibold leading-tight sm:text-5xl">
              {post.title}
            </h1>
            <p className="subtle-copy text-base">
              By {post.author} ·{" "}
              <span className="opacity-80">{post.tags.join(" · ")}</span>
            </p>
            <div className="flex flex-wrap gap-2 text-xs font-semibold uppercase tracking-[0.35em] subtle-copy">
              {post.topics.map((topic) => (
                <span key={topic} className="rounded-full border border-[color:var(--border-glass)] px-3 py-1">
                  {topic}
                </span>
              ))}
            </div>
          </header>

          <div
            className="space-y-6 text-base leading-relaxed muted-copy [&_h2]:mt-10 [&_h2]:text-2xl [&_h2]:font-semibold [&_h2]:gradient-heading [&_h3]:mt-8 [&_h3]:text-xl [&_h3]:font-semibold [&_h3]:gradient-heading [&_a]:font-semibold [&_a]:brand-link [&_a]:underline [&_blockquote]:border-l-4 [&_blockquote]:border-[color:var(--border-glass)] [&_blockquote]:pl-4"
            dangerouslySetInnerHTML={{ __html: contentHtml }}
          />

          {relatedPosts.length > 0 && (
            <section className="glass-panel space-y-4 p-6" data-tone="subtle">
              <h2 className="text-xl font-semibold">Keep exploring</h2>
              <ul className="space-y-3">
                {relatedPosts.map((related) => (
                  <li key={related.slug}>
                    <Link
                      aria-label={`Read related post ${related.title}`}
                      className="brand-link inline-flex items-center gap-2"
                      href={`/blog/${related.slug}`}
                    >
                      {related.title}
                      <span aria-hidden>→</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          )}
        </div>

        <script
          suppressHydrationWarning
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
        />
      </article>
    </>
  );
}

