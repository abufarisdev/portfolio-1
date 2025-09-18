"use client"

import * as React from "react"
import * as AvatarPrimitive from "@radix-ui/react-avatar"
import { cn } from "@/lib/utils"

const Avatar = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Root>
>(({ className, ...props }, ref) => (
  <AvatarPrimitive.Root
    ref={ref}
    className={cn(
      // base styles
      "relative flex h-16 w-16 shrink-0 overflow-hidden rounded-full",
      // glow ring + hover animation
      "ring-2 ring-white/20 shadow-lg transition hover:ring-purple-400/60 hover:scale-105 hover:shadow-purple-500/40",
      className
    )}
    {...props}
  />
))
Avatar.displayName = AvatarPrimitive.Root.displayName

const AvatarImage = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Image>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Image> & {
    hoverSrc?: string
  }
>(({ className, hoverSrc, ...props }, ref) => (
  <div className="relative h-full w-full">
    {/* Default image */}
    <AvatarPrimitive.Image
      ref={ref}
      className={cn(
        "absolute inset-0 h-full w-full object-cover transition-opacity duration-500",
        "group-hover:opacity-0", // fade out on hover
        className
      )}
      {...props}
    />
    {/* Hover image */}
    {hoverSrc && (
      <img
        src={hoverSrc}
        alt="hover avatar"
        className="absolute inset-0 h-full w-full object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100"
      />
    )}
  </div>
))
AvatarImage.displayName = AvatarPrimitive.Image.displayName

const AvatarFallback = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Fallback>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Fallback>
>(({ className, ...props }, ref) => (
  <AvatarPrimitive.Fallback
    ref={ref}
    className={cn(
      "flex h-full w-full items-center justify-center rounded-full bg-muted text-sm font-semibold",
      "text-white/70",
      className
    )}
    {...props}
  />
))
AvatarFallback.displayName = AvatarPrimitive.Fallback.displayName

export { Avatar, AvatarImage, AvatarFallback }
