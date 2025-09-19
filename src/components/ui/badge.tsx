import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors",
  {
    variants: {
      variant: {
        default: "border-transparent bg-primary/10 text-primary",
        secondary: "border-transparent bg-secondary text-secondary-foreground", 
        languages: "border border-blue-500/30 bg-blue-500/10 text-blue-400",
        frameworks: "border border-green-500/30 bg-green-500/10 text-green-400",
        backend: "border border-purple-500/30 bg-purple-500/10 text-purple-400",
        databases: "border border-red-500/30 bg-red-500/10 text-red-400",
        practices: "border border-yellow-500/30 bg-yellow-500/10 text-yellow-500",
        tools: "border border-amber-500/30 bg-amber-500/10 text-amber-400",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  )
}

export { Badge, badgeVariants }
