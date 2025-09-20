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
        "flex flex-col overflow-hidden border",
        "bg-card border-border",
        "hover:shadow-2xl hover:shadow-primary/15 transition-all duration-300 ease-out h-full group",
        "hover:scale-[1.02] hover:-translate-y-1 hover:border-primary",
        "backdrop-blur-sm",
        className
      )}
    >
      {/* Image/Video Section */}
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
              className="pointer-events-none w-full h-full object-contain group-hover:scale-110 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
        )}
        {image && (
          <div className="relative overflow-hidden aspect-video">
            <Image
              src={image}
              alt={title}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="overflow-hidden object-contain group-hover:scale-110 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
        )}
        <div className="absolute inset-0 bg-white/0 group-hover:bg-primary/5 transition-all duration-300 flex items-center justify-center">
          <div className="opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
            <div className="bg-primary/10 rounded-full p-2">
              <ArrowRight className="h-5 w-5" />
            </div>
          </div>
        </div>
      </Link>

      <CardHeader className="px-5 pt-5 pb-3">
        <div className="space-y-2">
          <div className="flex items-start justify-between">
            <CardTitle className="text-lg font-bold text-foreground line-clamp-2">
              {title}
            </CardTitle>
            {active && (
              <Badge
                className="ml-2 bg-amber-600/20 text-amber-700 dark:text-amber-300 border-amber-600/30 flex-shrink-0"
                variant="secondary"
              >
                Active
              </Badge>
            )}
          </div>
          <time className="font-mono text-xs text-muted-foreground">{dates}</time>
          <div className="hidden font-sans text-xs underline print:visible">
            {link?.replace("https://", "").replace("www.", "").replace("/", "")}
          </div>
          <Markdown className="prose max-w-full font-extralight text-xs text-muted-foreground dark:text-zinc-300 line-clamp-3">
            {description}
          </Markdown>
        </div>
      </CardHeader>

      <CardContent className="mt-auto flex flex-col px-5 py-3">
        {tags && tags.length > 0 && (
          <div className="mt-2 flex flex-wrap gap-2">
            {tags?.map((tag) => (
              <Badge
                className="px-2 py-1 text-xs 
                  bg-gray-200 text-gray-700 border-gray-300 
                  dark:bg-white/10 dark:text-white dark:border-white/20 
                  hover:bg-gray-300 dark:hover:bg-white/20 
                  hover:scale-105 transition-transform duration-300"
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
          {githubUrl && (
            <Link href={githubUrl} target="_blank" className="group/link">
              <Badge className="flex items-center gap-2 px-3 py-1.5 text-xs 
                bg-gray-200 text-gray-700 border-gray-300 
                dark:bg-white/10 dark:text-white dark:border-white/20 
                hover:bg-gray-300 dark:hover:bg-white/20 
                hover:scale-105 transition-all duration-300">
                <Github className="h-3.5 w-3.5" />
                <span>Code</span>
                <ExternalLink className="h-3 w-3 opacity-0 group-hover/link:opacity-100 transition-opacity duration-300" />
              </Badge>
            </Link>
          )}

          {href && (
            <Link href={href} target="_blank" className="group/link">
              <Badge className="flex items-center gap-2 px-3 py-1.5 text-xs 
                bg-gray-200 text-gray-700 border-gray-300 
                dark:bg-white/10 dark:text-white dark:border-white/20 
                hover:bg-gray-300 dark:hover:bg-white/20 
                hover:scale-105 transition-all duration-300">
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