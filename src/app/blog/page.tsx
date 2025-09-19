"use client";

import Link from "next/link";
import { useState } from "react";

const blogPosts = [
  {
    title: "My Journey Into Tech 🚀",
    excerpt: "How I started coding and where I’m heading next...",
    date: "Sept 2025",
    slug: "journey-into-tech",
    category: "Career",
    readTime: "5 min read",
    thumbnail: "/api/placeholder/400/200",
  },
  {
    title: "Building My Portfolio from Scratch 🎨",
    excerpt: "A look behind the scenes of my portfolio design process.",
    date: "Sept 2025",
    slug: "portfolio-design",
    category: "Design",
    readTime: "7 min read",
    thumbnail: "/api/placeholder/400/200",
  },
  {
    title: "Notes from GSSoC 💻",
    excerpt: "Lessons I learned contributing to open source...",
    date: "Aug 2025",
    slug: "gssoc-notes",
    category: "Open Source",
    readTime: "6 min read",
    thumbnail: "/api/placeholder/400/200",
  },
];

export default function BlogPage() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  return (
    <main className="min-h-screen px-6 py-16 bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950">
      {/* Hero */}
      <section className="mb-16 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-extrabold text-gray-200">
          journey in words
        </h1>
        <p className="text-gray-400 mt-4 text-l max-w-xl">
          thoughts, notes & experiments from my journey as a developer ✍️
        </p>
      </section>

      {/* Blog cards - single column layout */}
      <section className="max-w-4xl mx-auto space-y-10">
        {blogPosts.map((post, idx) => (
          <div
            key={idx}
            className="relative group"
            onMouseEnter={() => setHoveredCard(idx)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            {/* Background glow effect */}
            <div
              className={`absolute -inset-3 bg-gradient-to-r from-pink-500/10 to-purple-500/10 rounded-2xl blur opacity-0 group-hover:opacity-100 transition duration-500 ${
                hoveredCard === idx ? "opacity-100" : ""
              }`}
            ></div>

            <Link
              href={`/blog/${post.slug}`}
              className="relative block h-full bg-gray-900 rounded-2xl border border-gray-800 shadow-2xl hover:shadow-2xl transition-all duration-300 overflow-hidden"
            >
              <div className="md:flex">
                {/* Thumbnail */}
                <div className="md:w-2/5 h-56 md:h-auto overflow-hidden">
                  <div
                    className="h-full w-full bg-gray-700/20 group-hover:scale-105 transition-transform duration-500"
                    style={{
                      backgroundImage: `url(${post.thumbnail})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  ></div>
                </div>

                {/* Content */}
                <div className="md:w-3/5 p-7 flex flex-col justify-between">
                  <div>
                    {/* Category badge */}
                    <div className="mb-4">
                      <span className="inline-flex items-center px-3 py-1 text-xs font-medium rounded-full bg-gray-800 text-pink-300 border border-pink-500/20">
                        {post.category}
                      </span>
                    </div>

                    {/* Title */}
                    <h2 className="text-2xl font-bold text-gray-200 group-hover:text-purple-300 transition-colors duration-300 mb-3">
                      {post.title}
                    </h2>

                    {/* Excerpt */}
                    <p className="text-gray-400 mt-3 text-sm leading-relaxed">
                      {post.excerpt}
                    </p>
                  </div>

                  {/* Footer with date and read time */}
                  <div className="mt-6 pt-4 border-t border-gray-800 flex justify-between items-center">
                    <span className="text-xs text-gray-500">{post.date}</span>
                    <div className="flex items-center space-x-4">
                      <span className="text-xs text-gray-500">
                        {post.readTime}
                      </span>
                      <span className="text-xs text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-400 font-medium group-hover:translate-x-1 transition-transform duration-300">
                        Read More →
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </section>

      {/* CTA at bottom */}
      <div className="text-center mt-16">
        <p className="text-gray-400 mb-4">Want to read more?</p>
        <button className="px-6 py-3 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 text-white font-medium hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-300">
          View All Posts
        </button>
      </div>
    </main>
  );
}
