import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  getBlogPostBySlug,
  getPublishedBlogPosts,
  markdownToHtml,
} from "@/lib/blog";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getPublishedBlogPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) return { title: "Post not found" };
  return {
    title: `${post.title} | FuelFoods Culinary`,
    description: post.description,
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) notFound();

  const htmlContent = await markdownToHtml(post.content);

  return (
    <main className="min-h-screen bg-white pt-24 pb-16">
      <article className="container mx-auto px-4 max-w-3xl">
        <p className="mb-6">
          <Link
            href="/blog"
            className="text-sm font-semibold hover:opacity-80"
            style={{ color: "var(--fuel-green-medium)" }}
          >
            ← Back to blog
          </Link>
        </p>
        <h1
          className="text-4xl md:text-5xl font-bold mb-4 leading-tight"
          style={{ color: "var(--fuel-text-primary)", fontFamily: "Montserrat, sans-serif" }}
        >
          {post.title}
        </h1>
        {post.date ? (
          <p className="text-sm mb-8" style={{ color: "var(--fuel-text-secondary)" }}>
            {post.date}
          </p>
        ) : null}
        <div
          className="prose prose-lg max-w-none"
          style={{ color: "var(--fuel-text-primary)" }}
          dangerouslySetInnerHTML={{ __html: htmlContent }}
        />
      </article>
    </main>
  );
}
