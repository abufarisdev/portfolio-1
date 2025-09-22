"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

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

  // Smooth scroll function for home page sections
  const handleSmoothScroll = (
    e: React.MouseEvent<HTMLAnchorElement>,
    targetId: string
  ) => {
    e.preventDefault();

    // If we're not on the home page, navigate to home page first with hash
    if (!isHomePage) {
      window.location.href = `/#${targetId}`;
      return;
    }

    // If we're already on home page, smooth scroll
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      const offsetTop =
        targetElement.getBoundingClientRect().top +
        window.pageYOffset -
        80;

      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });

      window.history.pushState(null, "", `/#${targetId}`);
    }
  };

  // Handle home navigation - if we're already on home page, scroll to top
  const handleHomeClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (isHomePage) {
      e.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
      window.history.pushState(null, "", "/");
    }
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-10 right-0 z-50 transition-colors duration-300",
        scrolled
          ? "bg-background/40 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      )}
    >
      {/* Match EXACTLY the same max-width and padding as hero section */}
      <div className="max-w-2xl mx-auto px-4 w-full"> {/* Added w-full */}
        <nav className="flex items-center gap-6 py-4 text-sm font-medium justify-start w-full"> {/* Added w-full */}
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
    </header>
  );
}