import type { Metadata } from "next";
import Link from "next/link";
import { getPublishedBlogPosts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog | FuelFoods Culinary",
  description:
    "Guides for chefs and restaurant teams on microgreens, edible flowers, plating, and NYC kitchen sourcing.",
};

export default function BlogIndexPage() {
  const posts = getPublishedBlogPosts();

  return (
    <main className="min-h-screen bg-white pt-24 pb-16">
      <div className="container mx-auto px-4 max-w-3xl">
        <h1
          className="text-4xl md:text-5xl font-bold mb-4"
          style={{ color: "var(--fuel-text-primary)", fontFamily: "Montserrat, sans-serif" }}
        >
          Culinary Blog
        </h1>
        <p className="text-lg mb-10" style={{ color: "var(--fuel-text-secondary)" }}>
          Practical notes for NYC chefs on microgreens, edible flowers, and kitchen sourcing.
        </p>

        {posts.length === 0 ? (
          <p style={{ color: "var(--fuel-text-secondary)" }}>
            New posts are on the way. Check back soon.
          </p>
        ) : (
          <ul className="space-y-8">
            {posts.map((post) => (
              <li
                key={post.slug}
                className="border-b pb-8"
                style={{ borderColor: "var(--fuel-gray-light)" }}
              >
                <Link href={`/blog/${post.slug}`} className="block group">
                  <h2
                    className="text-2xl font-bold group-hover:opacity-80 transition-opacity"
                    style={{ color: "var(--fuel-text-primary)" }}
                  >
                    {post.title}
                  </h2>
                  {post.date ? (
                    <p className="text-sm mt-1" style={{ color: "var(--fuel-text-secondary)" }}>
                      {post.date}
                    </p>
                  ) : null}
                  {post.description ? (
                    <p className="mt-3" style={{ color: "var(--fuel-text-secondary)" }}>
                      {post.description}
                    </p>
                  ) : null}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </main>
  );
}
