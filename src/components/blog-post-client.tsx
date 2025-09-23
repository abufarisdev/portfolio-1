"use client";

import Link from 'next/link';
import { useTheme } from 'next-themes';
import { ModeToggle } from '@/components/mode-toggle';

// Theme-aware category styles
const getCategoryStyles = (category: string, theme: string | undefined) => {
  const baseStyles = {
    Career: {
      dark: { bg: "bg-[#5d7e6d]/20", text: "text-[#a3cfbb]", border: "border-[#5d7e6d]/30" },
      light: { bg: "bg-green-100", text: "text-green-800", border: "border-green-200" }
    },
    Design: {
      dark: { bg: "bg-[#b46a55]/20", text: "text-[#e8b4a8]", border: "border-[#b46a55]/30" },
      light: { bg: "bg-orange-100", text: "text-orange-800", border: "border-orange-200" }
    },
    "Open Source": {
      dark: { bg: "bg-[#7d8c69]/20", text: "text-[#c5d0b4]", border: "border-[#7d8c69]/30" },
      light: { bg: "bg-blue-100", text: "text-blue-800", border: "border-blue-200" }
    }
  };

  const categoryStyles = baseStyles[category as keyof typeof baseStyles] || {
    dark: { bg: "bg-[#8a7561]/20", text: "text-[#d6c8b8]", border: "border-[#8a7561]/30" },
    light: { bg: "bg-gray-100", text: "text-gray-800", border: "border-gray-200" }
  };

  return theme === 'dark' ? categoryStyles.dark : categoryStyles.light;
};

interface BlogPostClientProps {
  post: {
    title: string;
    excerpt: string;
    date: string;
    slug: string;
    category: string;
    readTime: string;
    thumbnail: string;
    content: string;
  };
}

export default function BlogPostClient({ post }: BlogPostClientProps) {
  const { theme } = useTheme();
  const categoryStyle = getCategoryStyles(post.category, theme);

  // Theme-aware styles
  const backgroundStyles = theme === 'dark' 
    ? "bg-gradient-to-br from-[#1a120b] via-[#2a1c11] to-[#1a120b]"
    : "bg-gradient-to-br from-gray-50 via-white to-gray-50";

  const textStyles = {
    primary: theme === 'dark' ? "text-amber-50" : "text-gray-900",
    secondary: theme === 'dark' ? "text-amber-200/70" : "text-gray-600",
    content: theme === 'dark' ? "text-amber-100/80" : "text-gray-700"
  };

  const borderStyles = theme === 'dark' ? "border-amber-800/20" : "border-gray-200";
  const buttonStyles = theme === 'dark' 
    ? "bg-amber-800/30 text-amber-200 hover:bg-amber-800/40 border-amber-700/30"
    : "bg-amber-500 text-white hover:bg-amber-600 border-amber-400";

  const bioStyles = theme === 'dark' 
    ? "bg-amber-950/20 border-amber-800/20" 
    : "bg-amber-50 border-amber-200";

  const thumbnailGradient = theme === 'dark' 
    ? "bg-gradient-to-br from-amber-900/10 to-amber-800/10" 
    : "bg-gradient-to-br from-amber-50 to-amber-100";

  const overlayGradient = theme === 'dark' 
    ? "bg-gradient-to-t from-[#1a120b]/50 to-transparent" 
    : "bg-gradient-to-t from-white/40 to-transparent";

  return (
    <main className={`min-h-screen px-6 py-16 transition-colors duration-300 ${backgroundStyles}`}>
      <article className="max-w-2xl mx-auto">
        {/* Header with back button and theme toggle */}
        <div className="flex justify-between items-center mb-6">
          <Link
            href="/blog"
            className={`inline-flex items-center text-sm hover:underline transition-colors group ${
              theme === 'dark' ? "text-amber-200/70 hover:text-amber-300" : "text-gray-600 hover:text-gray-900"
            }`}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2 group-hover:-translate-x-1 transition-transform duration-300" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
            </svg>
            Back to all posts
          </Link>
          
          <ModeToggle />
        </div>

        {/* Category badge */}
        <div className="mb-5">
          <span className={`inline-flex items-center px-3 py-1 text-xs font-medium rounded-full ${categoryStyle.bg} ${categoryStyle.text} ${categoryStyle.border}`}>
            {post.category}
          </span>
        </div>

        {/* Title */}
        <h1 className={`text-3xl md:text-4xl font-bold mb-5 font-serif ${textStyles.primary}`}>
          {post.title}
        </h1>

        {/* Meta information */}
        <div className={`flex items-center text-xs mb-6 ${
          theme === 'dark' ? "text-amber-200/70" : "text-gray-600"
        }`}>
          <span className="flex items-center mr-5">
            <svg xmlns="http://www.w3.org/2000/svg" className={`h-3.5 w-3.5 mr-1.5 ${
              theme === 'dark' ? "text-amber-600" : "text-gray-400"
            }`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            {post.date}
          </span>
          <span className="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className={`h-3.5 w-3.5 mr-1.5 ${
              theme === 'dark' ? "text-amber-600" : "text-gray-400"
            }`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            {post.readTime}
          </span>
        </div>

        {/* Featured image */}
        <div className={`rounded-xl overflow-hidden mb-8 border shadow-sm ${borderStyles}`}>
          <div
            className={`h-60 w-full relative ${thumbnailGradient}`}
            style={{
              backgroundImage: `url(${post.thumbnail})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          >
            <div className={`absolute inset-0 ${overlayGradient}`}></div>
          </div>
        </div>

        {/* Content */}
        <div className={`content-container leading-relaxed space-y-4 ${textStyles.content}`}>
          <div
            className="text-sm"
            dangerouslySetInnerHTML={{
              __html: post.content
                .replace(/<p>/g, '<p class="mb-4">')
                .replace(/<h2>/g, `<h2 class="text-xl font-semibold mt-8 mb-4 font-serif ${textStyles.primary}">`)
                .replace(/<ul>/g, '<ul class="list-disc list-inside space-y-2 mb-4">')
                .replace(/<li>/g, '<li class="ml-4">')
                .replace(/<strong>/g, `<strong class="font-semibold ${textStyles.primary}">`)
                .replace(/<em>/g, `<em class="italic ${theme === 'dark' ? 'text-amber-200/60' : 'text-gray-600'}">`)
            }}
          />
        </div>

        {/* Divider */}
        <div className={`border-t my-10 ${borderStyles}`}></div>

        {/* Call to action */}
        <div className="text-center">
          <p className={`mb-5 text-sm ${textStyles.secondary}`}>Enjoyed this article?</p>
          <Link
            href="/blog"
            className={`inline-flex items-center px-4 py-2 rounded-lg font-medium hover:scale-105 transition-all duration-300 border text-sm group ${buttonStyles}`}
          >
            Read more articles
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1.5 group-hover:translate-x-1 transition-transform duration-300" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </Link>
        </div>

        {/* Author bio section */}
        <div className={`mt-12 p-5 rounded-xl border ${bioStyles}`}>
          <div className="flex items-center">
            <div className={`h-10 w-10 rounded-full flex items-center justify-center font-bold text-xs mr-3 ${
              theme === 'dark' 
                ? "bg-gradient-to-br from-amber-700 to-amber-800 text-amber-100" 
                : "bg-gradient-to-br from-amber-400 to-amber-500 text-white"
            }`}>
              A
            </div>
            <div>
              <h3 className={`text-sm font-semibold ${textStyles.primary}`}>About the Author</h3>
              <p className={`mt-0.5 text-xs ${textStyles.secondary}`}>
                Passionate developer sharing experiences and learnings from the tech journey.
              </p>
            </div>
          </div>
        </div>
      </article>
    </main>
  );
}