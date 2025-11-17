"use client";

import { useMemo, useState } from "react";
import type { BlogPostPreview } from "@/lib/blog-posts";
import {
  filterBlogPosts,
  type BlogFilters,
} from "@/lib/blog-filters";
import { BlogFilterControls } from "./blog-filter-controls";
import { BlogPreviewCard } from "./blog-preview-card";

const MAX_VISIBLE_POSTS = 8;

type BlogFeedProps = {
  posts: BlogPostPreview[];
  availableTags: string[];
  availableTopics: string[];
};

export function BlogFeed({
  posts,
  availableTags,
  availableTopics,
}: BlogFeedProps) {
  const [filters, setFilters] = useState<BlogFilters>({
    search: "",
    tags: [],
    topics: [],
    startDate: undefined,
    endDate: undefined,
  });

  const filteredPosts = useMemo(
    () => filterBlogPosts(posts, filters),
    [posts, filters],
  );

  const visiblePosts = filteredPosts.slice(0, MAX_VISIBLE_POSTS);
  const hasMoreResults = filteredPosts.length > MAX_VISIBLE_POSTS;

  return (
    <div className="grid gap-8 lg:grid-cols-[minmax(0,320px)_1fr]">
      <BlogFilterControls
        availableTags={availableTags}
        availableTopics={availableTopics}
        filters={filters}
        onFiltersChange={setFilters}
      />

      <section aria-live="polite" className="space-y-6">
        <header className="space-y-2">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] subtle-copy">
            Insights & Analysis
          </p>
          <h2 className="gradient-heading text-3xl font-semibold sm:text-4xl">
            Browse the latest strategy guides
          </h2>
          <p className="text-sm muted-copy">
            Showing {visiblePosts.length} of {filteredPosts.length} insights.
            {hasMoreResults
              ? " Refine your filters to see specific playbooks."
              : ""}
          </p>
        </header>

        {visiblePosts.length === 0 ? (
          <div className="glass-panel p-10 text-center muted-copy">
            <p className="text-lg font-semibold">
              No posts match your filters yet.
            </p>
            <p className="mt-2 text-sm">
              Try clearing a filter or broadening your date range to discover
              more growth playbooks.
            </p>
          </div>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2">
            {visiblePosts.map((post) => (
              <BlogPreviewCard key={post.slug} post={post} />
            ))}
          </div>
        )}
      </section>
    </div>
  );
}

