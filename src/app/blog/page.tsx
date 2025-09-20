"use client";

import Link from "next/link";
import { useState } from "react";

const blogPosts = [
  {
    title: "my first-ever hackathon!🚀",
    excerpt: "How I started coding and where I'm heading next...",
    date: "Sept 2025",
    slug: "journey-into-tech",
    category: "Career",
    readTime: "5 min read",
    thumbnail: "/blog/hackathonexp.jpg",
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
    <main className="min-h-screen px-6 py-16 bg-gradient-to-br from-[#1a120b] via-[#2a1c11] to-[#1a120b]">
      {/* Hero */}
      <section className="mb-16 max-w-4xl mx-auto">
        <div className="relative">
          <div className="absolute -left-8 top-3 w-3 h-3 bg-amber-700 rounded-full animate-pulse"></div>
          <h1 className="text-5xl md:text-6xl font-bold text-bright font-serif tracking-tight">
            Journey in Words
          </h1>
        </div>
        <div className="flex items-center mt-2">
          <div className="h-px w-12 bg-gradient-to-r from-amber-700 to-amber-900 mr-4"></div>
          <p className="text-muted-bright text-l max-w-xl">
            thoughts, notes & experiments from my journey as a developer ✍️
          </p>
        </div>
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
              className={`absolute -inset-3 bg-gradient-to-r from-amber-700/10 to-amber-900/10 rounded-2xl blur opacity-0 group-hover:opacity-100 transition duration-500 ${
                hoveredCard === idx ? "opacity-100" : ""
              }`}
            ></div>

            <Link
              href={`/blog/${post.slug}`}
              className="relative block h-full bg-amber-950/70 rounded-2xl border border-amber-900/30 shadow-2xl hover:shadow-2xl transition-all duration-300 overflow-hidden"
            >
              <div className="md:flex">
                {/* Thumbnail */}
                <div className="md:w-2/5 h-56 md:h-auto overflow-hidden">
                  <div
                    className="h-full w-full bg-gradient-to-br from-amber-900/20 to-amber-800/20 group-hover:scale-105 transition-transform duration-700"
                    style={{
                      backgroundImage: `url(${post.thumbnail})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  >
                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-amber-950/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>
                  {/* Corner accent */}
                  <div className="absolute top-4 right-4 w-2 h-2 bg-amber-700 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>

                {/* Content */}
                <div className="md:w-3/5 p-7 flex flex-col justify-between">
                  <div>
                    {/* Category badge */}
                    <div className="mb-4">
                      <span className="inline-flex items-center px-3 py-1 text-xs font-medium rounded-full bg-gradient-to-r from-amber-700/15 to-amber-900/15 text-amber-400 border border-amber-700/30 group-hover:border-amber-700/60 transition-colors duration-300">
                        {post.category}
                      </span>
                    </div>

                    {/* Title with improved typography */}
                    <h2 className="text-2xl font-bold text-bright group-hover:text-amber-300 transition-colors duration-300 mb-3 leading-tight tracking-wide">
                      <span className="bg-gradient-to-r from-amber-300 to-amber-400 bg-clip-text text-transparent">
                        {post.title}
                      </span>
                    </h2>

                    {/* Excerpt */}
                    <p className="text-muted-bright mt-3 text-sm leading-relaxed">
                      {post.excerpt}
                    </p>
                  </div>

                  {/* Footer with date and read time */}
                  <div className="mt-6 pt-4 border-t border-amber-900/30 flex justify-between items-center">
                    <span className="text-xs text-amber-700 flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 mr-1 text-amber-700/70"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                        />
                      </svg>
                      {post.date}
                    </span>
                    <div className="flex items-center space-x-4">
                      <span className="text-xs text-amber-700 flex items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4 mr-1 text-amber-700/70"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                        {post.readTime}
                      </span>
                      <span className="text-xs text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-amber-800 font-medium group-hover:translate-x-1 transition-transform duration-300 flex items-center">
                        Read More
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform duration-300"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                            clipRule="evenodd"
                          />
                        </svg>
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
        <p className="text-muted-bright mb-4">Want to read more?</p>
        <button className="px-6 py-3 rounded-full bg-gradient-to-r from-amber-700 to-amber-900 text-bright font-medium hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-300 group relative overflow-hidden">
          <span className="relative z-10">View All Posts</span>
          <div className="absolute inset-0 bg-gradient-to-r from-amber-800 to-amber-700 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        </button>
      </div>
    </main>
  );
}