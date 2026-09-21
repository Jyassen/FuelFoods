import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";
import gfm from "remark-gfm";

export type BlogStatus = "draft" | "publish";

export type BlogPostMeta = {
  title: string;
  slug: string;
  description: string;
  date: string;
  status: BlogStatus;
};

export type BlogPost = BlogPostMeta & {
  content: string;
};

const postsDirectory = path.join(process.cwd(), "content/posts");

function parseStatus(value: unknown): BlogStatus {
  return value === "publish" ? "publish" : "draft";
}

function readPostFile(fileName: string): BlogPost | null {
  const fullPath = path.join(postsDirectory, fileName);
  if (!fs.existsSync(fullPath)) return null;
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);
  const slugFromFile = fileName.replace(/\.md$/, "");
  return {
    title: String(data.title ?? slugFromFile),
    slug: String(data.slug ?? slugFromFile),
    description: String(data.description ?? ""),
    date: String(data.date ?? ""),
    status: parseStatus(data.status),
    content,
  };
}

function getAllPostsUnfiltered(): BlogPost[] {
  if (!fs.existsSync(postsDirectory)) return [];
  return fs
    .readdirSync(postsDirectory)
    .filter((f) => f.endsWith(".md"))
    .map(readPostFile)
    .filter((p): p is BlogPost => Boolean(p))
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

/** Production-safe: only status: publish. */
export function getPublishedBlogPosts(): BlogPost[] {
  return getAllPostsUnfiltered().filter((p) => p.status === "publish");
}

/**
 * Resolve a post by slug.
 * In production, drafts 404.
 * In development, drafts are readable for review.
 */
export function getBlogPostBySlug(slug: string): BlogPost | null {
  const all = getAllPostsUnfiltered();
  const post = all.find((p) => p.slug === slug);
  if (!post) return null;
  if (post.status !== "publish" && process.env.NODE_ENV === "production") {
    return null;
  }
  return post;
}

export async function markdownToHtml(markdown: string): Promise<string> {
  const result = await remark().use(gfm).use(html).process(markdown);
  return result.toString();
}
