"use client";

import Link from "next/link";
import { useState } from "react";

const blogPosts = [
  {
    title: "my first-ever hackathon!",
    excerpt: "How I started coding and where I'm heading next...",
    date: "Sept 2025",
    slug: "journey-into-tech",
    category: "Career",
    readTime: "5 min read",
    thumbnail: "/blog/hackathonexp.jpg",
  },
  {
    title: "Building My Portfolio from Scratch",
    excerpt: "A look behind the scenes of my portfolio design process.",
    date: "Sept 2025",
    slug: "portfolio-design",
    category: "Design",
    readTime: "7 min read",
    thumbnail: "/api/placeholder/400/200",
  },
  {
    title: "Notes from GSSoC",
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

  // Function to get category-specific styles
  const getCategoryStyles = (category: string) => {
    switch (category) {
      case "Career":
        return {
          bg: "bg-[#5d7e6d]/20",
          text: "text-[#a3cfbb]",
          border: "border-[#5d7e6d]/30",
          accent: "bg-[#5d7e6d]"
        };
      case "Design":
        return {
          bg: "bg-[#b46a55]/20",
          text: "text-[#e8b4a8]",
          border: "border-[#b46a55]/30",
          accent: "bg-[#b46a55]"
        };
      case "Open Source":
        return {
          bg: "bg-[#7d8c69]/20",
          text: "text-[#c5d0b4]",
          border: "border-[#7d8c69]/30",
          accent: "bg-[#7d8c69]"
        };
      default:
        return {
          bg: "bg-[#8a7561]/20",
          text: "text-[#d6c8b8]",
          border: "border-[#8a7561]/30",
          accent: "bg-[#8a7561]"
        };
    }
  };

  return (
    <main className="min-h-screen px-6 py-16 bg-gradient-to-br from-[#1a120b] via-[#2a1c11] to-[#1a120b]">
      {/* Hero */}
      <section className="mb-16 max-w-4xl mx-auto">
        <div className="relative">
          <div className="absolute -left-8 top-3 w-2 h-2 bg-amber-700 rounded-full animate-pulse"></div>
          <h1 className="text-4xl md:text-5xl font-bold text-amber-50 font-serif tracking-tight mb-4">
            Rustic Notes
          </h1>
        </div>
        <div className="flex items-center mt-2">
          <div className="h-px w-12 bg-gradient-to-r from-amber-700 to-amber-900 mr-4"></div>
          <p className="text-amber-200/70 text-sm max-w-xl font-light">
            Chronicles of code, design & everything in between
          </p>
        </div>
      </section>

      {/* Blog cards - single column layout */}
      <section className="max-w-4xl mx-auto space-y-8">
        {blogPosts.map((post, idx) => {
          const categoryStyle = getCategoryStyles(post.category);
          
          return (
            <div
              key={idx}
              className="relative group"
              onMouseEnter={() => setHoveredCard(idx)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Background glow effect */}
              <div
                className={`absolute -inset-3 ${categoryStyle.bg} rounded-2xl blur opacity-0 group-hover:opacity-100 transition duration-500 ${
                  hoveredCard === idx ? "opacity-100" : ""
                }`}
              ></div>

              <Link
                href={`/blog/${post.slug}`}
                className="relative block h-full bg-gradient-to-br from-[#3e3228] to-[#2a211a] rounded-xl border border-amber-900/20 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
              >
                <div className="md:flex">
                  {/* Thumbnail */}
                  <div className="md:w-2/5 h-48 md:h-auto overflow-hidden relative">
                    <div
                      className="h-full w-full bg-gradient-to-br from-amber-900/10 to-amber-800/10 group-hover:scale-105 transition-transform duration-700"
                      style={{
                        backgroundImage: `url(${post.thumbnail})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                      }}
                    >
                      {/* Gradient overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-[#2a211a]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    </div>
                    {/* Category accent bar */}
                    <div className={`absolute bottom-0 left-0 h-1 w-16 ${categoryStyle.accent}`}></div>
                  </div>

                  {/* Content */}
                  <div className="md:w-3/5 p-6 flex flex-col justify-between">
                    <div>
                      {/* Category badge */}
                      <div className="mb-4">
                        <span className={`inline-flex items-center px-3 py-1 text-xs font-medium rounded-full ${categoryStyle.bg} ${categoryStyle.text} ${categoryStyle.border} transition-colors duration-300`}>
                          {post.category}
                        </span>
                      </div>

                      {/* Title with improved typography */}
                      <h2 className="text-xl font-semibold text-amber-50 group-hover:text-amber-100 transition-colors duration-300 mb-3 leading-tight">
                        {post.title}
                      </h2>

                      {/* Excerpt */}
                      <p className="text-amber-100/70 mt-2 text-sm leading-relaxed">
                        {post.excerpt}
                      </p>
                    </div>

                    {/* Footer with date and read time */}
                    <div className="mt-5 pt-4 border-t border-amber-900/20 flex justify-between items-center">
                      <div className="flex items-center space-x-4">
                        <span className="text-xs text-amber-700 flex items-center font-mono">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-3.5 w-3.5 mr-1.5 text-amber-700"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={1.5}
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                            />
                          </svg>
                          {post.date}
                        </span>
                        <span className="text-xs text-amber-700 flex items-center font-mono">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-3.5 w-3.5 mr-1.5 text-amber-700"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={1.5}
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                          </svg>
                          {post.readTime}
                        </span>
                      </div>
                      <span className="text-xs text-amber-600 font-medium group-hover:translate-x-1 transition-transform duration-300 flex items-center">
                        Read
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-3.5 w-3.5 ml-1 group-hover:translate-x-0.5 transition-transform duration-300"
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
              </Link>
            </div>
          );
        })}
      </section>

      {/* CTA at bottom */}
      <div className="text-center mt-16 max-w-4xl mx-auto p-8 bg-gradient-to-br from-[#3e3228] to-[#2a211a] rounded-xl border border-amber-900/20">
        <h3 className="text-2xl font-semibold text-amber-50 mb-4">Want more content like this?</h3>
        <p className="text-amber-100/70 mb-6 text-sm max-w-md mx-auto">
          Join my newsletter to get updates on new articles, projects, and design resources.
        </p>
        <button className="px-5 py-2.5 rounded-lg bg-amber-800/30 text-amber-200 font-medium hover:bg-amber-800/40 transition-all duration-300 border border-amber-700/30">
          Subscribe Now
        </button>
      </div>
    </main>
  );
}