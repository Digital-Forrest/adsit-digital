import { describe, expect, it } from "vitest";
import type { BlogPostPreview } from "../blog-posts";
import {
  filterBlogPosts,
  getUniqueTags,
  getUniqueTopics,
} from "../blog-filters";

const mockPosts: BlogPostPreview[] = [
  {
    slug: "alpha-growth",
    title: "Alpha Growth",
    author: "Alex",
    date: "2025-03-15",
    description: "Scaling paid media with automation.",
    excerpt: "Scaling paid media with automation.",
    tags: ["paid media", "automation"],
    topics: ["Paid Acquisition"],
  },
  {
    slug: "beta-seo",
    title: "Beta SEO",
    author: "Britt",
    date: "2025-02-10",
    description: "SEO & content systems for long-term demand.",
    excerpt: "SEO & content systems for long-term demand.",
    tags: ["seo", "content"],
    topics: ["Organic Search", "Content Strategy"],
  },
  {
    slug: "gamma-data",
    title: "Gamma Data Ops",
    author: "Casey",
    date: "2024-12-01",
    description: "Analytics and data maturity models.",
    excerpt: "Analytics and data maturity models.",
    tags: ["analytics"],
    topics: ["Revenue Operations"],
  },
];

describe("filterBlogPosts", () => {
  it("returns all posts when no filters are applied", () => {
    expect(filterBlogPosts(mockPosts, {})).toHaveLength(mockPosts.length);
  });

  it("filters by search query against title, description, tags, and topics", () => {
    const result = filterBlogPosts(mockPosts, { search: "automation" });
    expect(result).toHaveLength(1);
    expect(result[0].slug).toBe("alpha-growth");
  });

  it("filters by multiple tags", () => {
    const result = filterBlogPosts(mockPosts, {
      tags: ["seo", "paid media"],
    });
    expect(result.map((post) => post.slug)).toEqual([
      "alpha-growth",
      "beta-seo",
    ]);
  });

  it("filters by topics", () => {
    const result = filterBlogPosts(mockPosts, {
      topics: ["Revenue Operations"],
    });
    expect(result).toHaveLength(1);
    expect(result[0].slug).toBe("gamma-data");
  });

  it("filters by date range inclusively", () => {
    const result = filterBlogPosts(mockPosts, {
      startDate: "2025-01-01",
      endDate: "2025-12-31",
    });
    expect(result.map((post) => post.slug)).toEqual([
      "alpha-growth",
      "beta-seo",
    ]);
  });

  it("ignores invalid date filters", () => {
    const result = filterBlogPosts(mockPosts, {
      startDate: "invalid date",
      endDate: "still invalid",
    });
    expect(result).toHaveLength(mockPosts.length);
  });

  it("applies combined filters together", () => {
    const result = filterBlogPosts(mockPosts, {
      search: "data",
      topics: ["Revenue Operations"],
      tags: ["analytics"],
    });
    expect(result).toHaveLength(1);
    expect(result[0].slug).toBe("gamma-data");
  });
});

describe("getUniqueTags", () => {
  it("returns sorted list of unique tags", () => {
    expect(getUniqueTags(mockPosts)).toEqual([
      "analytics",
      "automation",
      "content",
      "paid media",
      "seo",
    ]);
  });
});

describe("getUniqueTopics", () => {
  it("returns sorted list of unique topics", () => {
    expect(getUniqueTopics(mockPosts)).toEqual([
      "Content Strategy",
      "Organic Search",
      "Paid Acquisition",
      "Revenue Operations",
    ]);
  });
});

