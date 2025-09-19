// src/app/blog/page.tsx
"use client";

import Link from "next/link";

export default function BlogPage() {
  return (
    <main className="max-w-2xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold mb-8">Blog</h1>
      <p className="text-zinc-400 mb-10">
        Welcome to my blog — here I share thoughts on coding, projects, and
        learning experiences.
      </p>

      <div className="space-y-8">
        {/* Example blog posts (replace with real content later) */}
        <article>
          <h2 className="text-2xl font-semibold">
            <Link href="/blog/first-post" className="hover:underline">
              My First Blog Post
            </Link>
          </h2>
          <p className="text-zinc-500 text-sm">September 20, 2025</p>
          <p className="mt-2 text-zinc-300">
            A quick intro to why I started blogging and what I’ll share here…
          </p>
        </article>

        <article>
          <h2 className="text-2xl font-semibold">
            <Link href="/blog/gate-prep" className="hover:underline">
              Preparing for GATE alongside B.Tech
            </Link>
          </h2>
          <p className="text-zinc-500 text-sm">September 25, 2025</p>
          <p className="mt-2 text-zinc-300">
            Balancing GATE prep with classes is tricky — here’s how I’m doing it.
          </p>
        </article>
      </div>
    </main>
  );
}
