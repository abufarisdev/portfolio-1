"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import BlurFade from "@/components/magicui/blur-fade";

const BLUR_FADE_DELAY = 0.02; 

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSmoothScroll = (
    e: React.MouseEvent<HTMLAnchorElement>,
    targetId: string
  ) => {
    e.preventDefault();
    if (!isHomePage) {
      window.location.href = `/#${targetId}`;
      return;
    }
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      const offsetTop =
        targetElement.getBoundingClientRect().top + window.pageYOffset - 80;

      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });

      window.history.pushState(null, "", `/#${targetId}`);
    }
  };

  const handleHomeClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (isHomePage) {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
      window.history.pushState(null, "", "/");
    }
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-10 right-0 z-50 transition-colors duration-300",
        scrolled
          ? "bg-background/30 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      )}
    >
      {/* Wrap only the inner container with BlurFade */}
      <BlurFade delay={BLUR_FADE_DELAY}>
        <div className="max-w-2xl mx-auto px-4 w-full">
          <nav className="flex items-center gap-6 py-4 text-sm font-medium justify-start w-full">
            <Link
              href="/"
              onClick={handleHomeClick}
              className="text-zinc-400 hover:text-zinc-100 transition-colors"
            >
              home
            </Link>

            {isHomePage ? (
              <>
                <a
                  href="#projects"
                  onClick={(e) => handleSmoothScroll(e, "projects")}
                  className="text-zinc-400 hover:text-zinc-100 transition-colors cursor-pointer"
                >
                  projects
                </a>
                <Link
                  href="/blog"
                  className="text-zinc-400 hover:text-zinc-100 transition-colors"
                >
                  blog
                </Link>
                <a
                  href="#contact"
                  onClick={(e) => handleSmoothScroll(e, "contact")}
                  className="text-zinc-400 hover:text-zinc-100 transition-colors cursor-pointer"
                >
                  contact
                </a>
              </>
            ) : (
              <>
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
                  href="/#contact"
                  className="text-zinc-400 hover:text-zinc-100 transition-colors"
                >
                  contact
                </Link>
              </>
            )}
          </nav>
        </div>
      </BlurFade>
    </header>
  );
}
