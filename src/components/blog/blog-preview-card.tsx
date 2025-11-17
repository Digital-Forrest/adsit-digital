import Link from "next/link";
import type { BlogPostPreview } from "@/lib/blog-posts";

type BlogPreviewCardProps = {
  post: BlogPostPreview;
};

export function BlogPreviewCard({ post }: BlogPreviewCardProps) {
  const publishedOn = new Date(post.date).toLocaleDateString("en-GB", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });

  return (
    <article className="glass-panel flex h-full flex-col justify-between p-6 transition hover:border-[color:var(--brand-primary)]">
      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.35em] subtle-copy">
          <span>{publishedOn}</span>
          <span className="h-1 w-1 rounded-full bg-[color:var(--border-glass)]" aria-hidden />
          <span>{post.author}</span>
        </div>

        <div className="flex flex-col gap-3">
          <h3 className="text-2xl font-semibold">{post.title}</h3>
          <p className="text-base muted-copy">{post.excerpt}</p>
        </div>

        <div className="flex flex-wrap gap-2 text-xs font-semibold uppercase tracking-[0.35em] subtle-copy">
          {post.topics.map((topic) => (
            <span
              key={topic}
              className="rounded-full border border-[color:var(--border-glass)] px-3 py-1"
            >
              {topic}
            </span>
          ))}
        </div>
      </div>

      <div className="mt-6 flex items-center justify-between text-sm font-semibold muted-copy">
        <Link
          aria-label={`Read blog post ${post.title}`}
          className="brand-link inline-flex items-center gap-2 transition focus:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--brand-primary)]"
          href={`/blog/${post.slug}`}
        >
          Read story
          <span aria-hidden>→</span>
        </Link>
      </div>
    </article>
  );
}

