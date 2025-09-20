import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import Markdown from "react-markdown";
import { Github, ExternalLink, ArrowRight } from "lucide-react";

interface Props {
  title: string;
  href?: string;
  githubUrl?: string;
  active?: boolean;
  description: string;
  dates: string;
  tags: readonly string[];
  link?: string;
  image?: string;
  video?: string;
  links?: readonly {
    icon: React.ReactNode;
    type: string;
    href: string;
  }[];
  className?: string;
}

export function ProjectCard({
  title,
  href,
  githubUrl,
  active,
  description,
  dates,
  tags,
  link,
  image,
  video,
  links,
  className,
}: Props) {
  return (
    <Card
      className={cn(
        "flex flex-col overflow-hidden border border-gray-700 bg-gradient-to-br from-gray-900/50 to-gray-800/30",
        "hover:shadow-2xl hover:shadow-white/5 transition-all duration-500 ease-out h-full group",
        "hover:scale-[1.02] hover:-translate-y-1 hover:border-gray-500/50",
        "backdrop-blur-sm",
        className
      )}
    >
      {/* Image/Video Section with Overlay */}
      <Link
        href={href || "#"}
        className={cn("block cursor-pointer overflow-hidden relative", className)}
      >
        {video && (
          <div className="relative overflow-hidden aspect-video">
            <video
              src={video}
              autoPlay
              loop
              muted
              playsInline
              className="pointer-events-none w-full h-full object-contain group-hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-950/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </div>
        )}
        {image && (
          <div className="relative overflow-hidden aspect-video">
            <Image
              src={image}
              alt={title}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="overflow-hidden object-contain group-hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-950/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </div>
        )}
        {/* Hover overlay effect */}
        <div className="absolute inset-0 bg-white/0 group-hover:bg-white/5 transition-all duration-500 flex items-center justify-center">
          <div className="opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
            <div className="bg-white/90 text-gray-900 rounded-full p-2">
              <ArrowRight className="h-5 w-5" />
            </div>
          </div>
        </div>
      </Link>

      <CardHeader className="px-5 pt-5 pb-3">
        <div className="space-y-2">
          <div className="flex items-start justify-between">
            <CardTitle className="text-lg font-bold group-hover:text-white transition-colors duration-500 line-clamp-2">
              {title}
            </CardTitle>
            {active && (
              <Badge 
                className="ml-2 bg-green-500/20 text-green-300 border-green-500/30 hover:bg-green-500/30 transition-colors duration-300 flex-shrink-0"
                variant="secondary"
              >
                Active
              </Badge>
            )}
          </div>
          <time className="font-mono text-xs text-gray-400">{dates}</time>
          <div className="hidden font-sans text-xs underline print:visible">
            {link?.replace("https://", "").replace("www.", "").replace("/", "")}
          </div>
          <Markdown className="prose max-w-full text-pretty font-sans text-sm text-gray-300 dark:prose-invert group-hover:text-gray-200 transition-colors duration-500 line-clamp-3">
            {description}
          </Markdown>
        </div>
      </CardHeader>

      <CardContent className="mt-auto flex flex-col px-5 py-3">
        {tags && tags.length > 0 && (
          <div className="mt-2 flex flex-wrap gap-2">
            {tags?.map((tag) => (
              <Badge
                className="px-2 py-1 text-xs bg-gray-800/50 text-gray-300 border-gray-600/50 transition-all duration-300 group-hover:bg-gray-700/60 group-hover:scale-105 group-hover:border-gray-400/50"
                variant="secondary"
                key={tag}
              >
                {tag}
              </Badge>
            ))}
          </div>
        )}
      </CardContent>

      <CardFooter className="px-5 pb-5 pt-3">
        <div className="flex flex-row items-center gap-3">
          {/* GitHub link */}
          {githubUrl && (
            <Link 
              href={githubUrl} 
              target="_blank"
              className="group/link"
            >
              <Badge className="flex items-center gap-2 px-3 py-1.5 text-xs bg-gray-800/40 text-gray-200 border-gray-600/40 transition-all duration-300 hover:bg-gray-700/60 hover:scale-105 hover:border-gray-400/50">
                <Github className="h-3.5 w-3.5" />
                <span>Code</span>
                <ExternalLink className="h-3 w-3 opacity-0 group-hover/link:opacity-100 transition-opacity duration-300" />
              </Badge>
            </Link>
          )}
          
          {/* Website link */}
          {href && (
            <Link 
              href={href} 
              target="_blank"
              className="group/link"
            >
              <Badge className="flex items-center gap-2 px-3 py-1.5 text-xs bg-gray-700/40 text-gray-100 border-gray-500/40 transition-all duration-300 hover:bg-gray-600/60 hover:scale-105 hover:border-gray-300/50">
                <ExternalLink className="h-3.5 w-3.5" />
                <span>Live Demo</span>
                <ArrowRight className="h-3 w-3 opacity-0 group-hover/link:opacity-100 transition-opacity duration-300" />
              </Badge>
            </Link>
          )}
        </div>
      </CardFooter>
    </Card>
  );
}