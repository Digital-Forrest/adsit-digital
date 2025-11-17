import type { BlogPostPreview } from "./blog-posts";

export type BlogFilters = {
  search?: string;
  tags?: string[];
  topics?: string[];
  startDate?: string;
  endDate?: string;
};

export function filterBlogPosts(
  posts: BlogPostPreview[],
  filters: BlogFilters,
): BlogPostPreview[] {
  const {
    search = "",
    tags = [],
    topics = [],
    startDate,
    endDate,
  } = filters;

  const trimmedSearch = search.trim().toLowerCase();
  const activeTags = new Set(tags.map((tag) => tag.toLowerCase()));
  const activeTopics = new Set(topics.map((topic) => topic.toLowerCase()));

  return posts.filter((post) => {
    if (
      activeTags.size > 0 &&
      !post.tags.some((tag) => activeTags.has(tag.toLowerCase()))
    ) {
      return false;
    }

    if (
      activeTopics.size > 0 &&
      !post.topics.some((topic) => activeTopics.has(topic.toLowerCase()))
    ) {
      return false;
    }

    if (!isWithinDateRange(post.date, startDate, endDate)) {
      return false;
    }

    if (!trimmedSearch) {
      return true;
    }

    const haystack = [
      post.title,
      post.description,
      post.excerpt,
      post.tags.join(" "),
      post.topics.join(" "),
    ]
      .join(" ")
      .toLowerCase();

    return haystack.includes(trimmedSearch);
  });
}

export function getUniqueTags(posts: BlogPostPreview[]): string[] {
  return getUniqueValues(posts.flatMap((post) => post.tags));
}

export function getUniqueTopics(posts: BlogPostPreview[]): string[] {
  return getUniqueValues(posts.flatMap((post) => post.topics));
}

function getUniqueValues(values: string[]): string[] {
  return Array.from(
    new Set(values.map((value) => value.trim()).filter(Boolean)),
  ).sort((a, b) => a.localeCompare(b));
}

function isWithinDateRange(
  date: string,
  startDate?: string,
  endDate?: string,
): boolean {
  const targetTime = Date.parse(date);
  if (Number.isNaN(targetTime)) {
    return false;
  }

  if (startDate) {
    const startTime = Date.parse(startDate);
    if (!Number.isNaN(startTime) && targetTime < startTime) {
      return false;
    }
  }

  if (endDate) {
    const endTime = Date.parse(endDate);
    if (!Number.isNaN(endTime) && targetTime > endTime) {
      return false;
    }
  }

  return true;
}

