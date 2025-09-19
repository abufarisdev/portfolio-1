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
import { Github, ExternalLink } from "lucide-react";

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
      className={
        "flex flex-col overflow-hidden border-2 hover:shadow-2xl transition-all duration-500 ease-out h-full group hover:scale-[1.02] hover:-translate-y-2 hover:border-primary/30"
      }
    >
      <Link
        href={href || "#"}
        className={cn("block cursor-pointer overflow-hidden", className)}
      >
        {video && (
          <video
            src={video}
            autoPlay
            loop
            muted
            playsInline
            className="pointer-events-none mx-auto h-40 w-full object-cover object-top group-hover:scale-110 transition-transform duration-700"
          />
        )}
        {image && (
          <Image
            src={image}
            alt={title}
            width={500}
            height={300}
            className="h-40 w-full overflow-hidden object-cover object-top group-hover:scale-110 transition-transform duration-700"
          />
        )}
      </Link>
      <CardHeader className="px-4">
        <div className="space-y-1">
          <CardTitle className="mt-1 text-base group-hover:text-primary transition-colors duration-500">
            {title}
          </CardTitle>
          <time className="font-sans text-xs">{dates}</time>
          {active && (
            <Badge className="ml-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-500" variant="secondary">
              Active
            </Badge>
          )}
          <div className="hidden font-sans text-xs underline print:visible">
            {link?.replace("https://", "").replace("www.", "").replace("/", "")}
          </div>
          <Markdown className="prose max-w-full text-pretty font-sans text-xs text-muted-foreground dark:prose-invert group-hover:text-foreground/80 transition-colors duration-500">
            {description}
          </Markdown>
        </div>
      </CardHeader>
      <CardContent className="mt-auto flex flex-col px-4">
        {tags && tags.length > 0 && (
          <div className="mt-2 flex flex-wrap gap-1">
            {tags?.map((tag) => (
              <Badge
                className="px-1 py-0 text-[10px] transition-all duration-500 group-hover:bg-primary/20 group-hover:scale-105"
                variant="secondary"
                key={tag}
              >
                {tag}
              </Badge>
            ))}
          </div>
        )}
      </CardContent>
      <CardFooter className="px-4 pb-4">
        <div className="flex flex-row flex-wrap items-start gap-2">
          {/* GitHub link */}
          {githubUrl && (
            <Link href={githubUrl} target="_blank">
              <Badge className="flex gap-2 px-2 py-1 text-[10px] transition-all duration-300 hover:scale-110 hover:bg-primary">
                <Github className="h-3 w-3" />
                GitHub
              </Badge>
            </Link>
          )}
          
          {/* Website link */}
          {href && (
            <Link href={href} target="_blank">
              <Badge className="flex gap-2 px-2 py-1 text-[10px] transition-all duration-300 hover:scale-110 hover:bg-primary">
                <ExternalLink className="h-3 w-3" />
                Website
              </Badge>
            </Link>
          )}
        </div>
      </CardFooter>
    </Card>
  );
}