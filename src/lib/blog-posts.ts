import "server-only";

import fs from "node:fs";
import path from "node:path";
import matter, { type GrayMatterFile } from "gray-matter";

export type BlogPostFrontMatter = {
  title: string;
  date: string;
  author: string;
  description: string;
  tags: string[];
  topics: string[];
};

export type BlogPostPreview = BlogPostFrontMatter & {
  slug: string;
  excerpt: string;
};

export type BlogPost = BlogPostPreview & {
  content: string;
};

const BLOG_CONTENT_DIR = path.join(process.cwd(), "src/content/blog");

export function getBlogPosts(): BlogPostPreview[] {
  const posts = getBlogContentFiles().map((fileName) => {
    const parsed = parseBlogFile(fileName);
    return {
      ...parsed.frontMatter,
      slug: slugFromFilename(fileName),
      excerpt: buildExcerpt(parsed.frontMatter, parsed.content),
    };
  });

  return posts.sort((a, b) => {
    const aTime = new Date(a.date).getTime();
    const bTime = new Date(b.date).getTime();
    return Number.isNaN(bTime - aTime) ? 0 : bTime - aTime;
  });
}

export function getBlogPost(slug: string): BlogPost | null {
  const fileName = `${slug}.mdx`;
  const filePath = path.join(BLOG_CONTENT_DIR, fileName);

  if (!fs.existsSync(filePath)) {
    return null;
  }

  const parsed = parseBlogFile(fileName);

  return {
    ...parsed.frontMatter,
    slug,
    excerpt: buildExcerpt(parsed.frontMatter, parsed.content),
    content: parsed.content,
  };
}

export function getBlogSlugs(): string[] {
  return getBlogContentFiles().map((file) => slugFromFilename(file));
}

function getBlogContentFiles(): string[] {
  if (!fs.existsSync(BLOG_CONTENT_DIR)) {
    return [];
  }

  return fs
    .readdirSync(BLOG_CONTENT_DIR)
    .filter((file) => file.endsWith(".mdx"));
}

function parseBlogFile(
  fileName: string,
): { frontMatter: BlogPostFrontMatter; content: string } {
  const filePath = path.join(BLOG_CONTENT_DIR, fileName);
  const fileContents = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(fileContents);
  const frontMatter = coerceFrontMatter(data, fileName);

  return {
    frontMatter,
    content,
  };
}

function coerceFrontMatter(
  data: GrayMatterFile<string>["data"],
  fileName: string,
): BlogPostFrontMatter {
  const errors: string[] = [];

  const title = coerceString(data.title, "title", errors);
  const date = coerceString(data.date, "date", errors);
  const author = coerceString(data.author, "author", errors);
  const description = coerceString(data.description, "description", errors);
  const tags = coerceStringArray(data.tags, "tags", errors);
  const topics = coerceStringArray(data.topics, "topics", errors);

  if (errors.length > 0) {
    throw new Error(
      `Invalid front matter in ${fileName}: ${errors.join(", ")}`,
    );
  }

  if (Number.isNaN(Date.parse(date))) {
    throw new Error(
      `Invalid front matter in ${fileName}: date must be ISO-8601 formatted`,
    );
  }

  return {
    title,
    date,
    author,
    description,
    tags,
    topics,
  };
}

function coerceString(
  value: unknown,
  field: keyof BlogPostFrontMatter,
  errors: string[],
): string {
  if (typeof value === "string" && value.trim().length > 0) {
    return value.trim();
  }

  errors.push(`missing or invalid ${String(field)}`);
  return "";
}

function coerceStringArray(
  value: unknown,
  field: keyof BlogPostFrontMatter,
  errors: string[],
): string[] {
  if (Array.isArray(value) && value.every((item) => typeof item === "string")) {
    return value.map((item) => item.trim()).filter(Boolean);
  }

  errors.push(`missing or invalid ${String(field)}`);
  return [];
}

function slugFromFilename(fileName: string): string {
  return fileName.replace(/\.mdx?$/i, "");
}

function buildExcerpt(
  frontMatter: BlogPostFrontMatter,
  content: string,
): string {
  if (frontMatter.description) {
    return frontMatter.description;
  }

  const firstParagraph = content
    .split("\n")
    .map((line) => line.trim())
    .filter(Boolean)[0];

  if (!firstParagraph) {
    return "";
  }

  return firstParagraph.length > 180
    ? `${firstParagraph.slice(0, 177)}...`
    : firstParagraph;
}

