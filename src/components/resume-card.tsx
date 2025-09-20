// components/resume-card.tsx
import * as React from "react"
import { cn } from "@/lib/utils"

interface ResumeCardProps {
  logoUrl: string;
  altText: string;
  title: string;
  subtitle: string;
  href?: string;
  badges?: readonly string[]; // Change to readonly string[]
  period: string;
  description: string;
  className?: string;
}

export function ResumeCard({
  logoUrl,
  altText,
  title,
  subtitle,
  href,
  badges,
  period,
  description,
  className,
}: ResumeCardProps) {
  return (
    <div className={cn(
      "bg-card border border-border rounded-xl p-6 transition-all duration-300 hover:shadow-lg min-h-[180px]",
      "flex flex-col", // Use flex column layout
      className
    )}>
      <div className="flex items-start gap-4 flex-1">
        {/* Logo */}
        <div className="flex-shrink-0">
          <img
            src={logoUrl}
            alt={altText}
            className="h-12 w-12 object-contain rounded-lg"
          />
        </div>
        
        {/* Content */}
        <div className="flex-1 min-w-0"> {/* Prevent horizontal overflow */}
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 mb-3">
            <div className="min-w-0">
              <h3 className="text-lg font-semibold text-foreground truncate">
                {href ? (
                  <a href={href} target="_blank" rel="noopener noreferrer" className="hover:underline truncate">
                    {title}
                  </a>
                ) : (
                  title
                )}
              </h3>
              <p className="text-muted-foreground text-sm mt-1 truncate">{subtitle}</p>
            </div>
            <p className="text-muted-foreground text-sm whitespace-nowrap sm:text-right flex-shrink-0">
              {period}
            </p>
          </div>
          
          {/* Description */}
          <p className="text-foreground text-sm leading-relaxed line-clamp-3">
            {description}
          </p>
          
          {/* Badges */}
          {badges && badges.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-4">
              {badges.map((badge) => (
                <span
                  key={badge}
                  className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary/10 text-primary truncate max-w-[120px]"
                >
                  {badge}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}