"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-7 right-0 z-50 transition-colors duration-300",
        scrolled ? "bg-background/40 backdrop-blur-md shadow-sm" : "bg-transparent"
      )}
    >
      <div className="max-w-2xl mx-auto px-6">
        <nav className="flex items-center gap-6 py-4 text-sm font-medium">

          <Link
            href="/"
            className="text-zinc-400 hover:text-zinc-100 transition-colors"
          >
            home
          </Link>
          <Link
            href="/#projects"
            className="text-zinc-400 hover:text-zinc-100 transition-colors"
          >
            projects
          </Link>
          <Link
            href="/blog"
            className="text-zinc-400 hover:text-zinc-100 transition-colors"
          >
            blog
          </Link>
          <Link
            href="#contact"
            className="text-zinc-400 hover:text-zinc-100 transition-colors"
          >
            contact
          </Link>
        </nav>
      </div>
    </header>
  );
}
