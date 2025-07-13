import type React from "react"
import { cn } from "@/lib/utils"

interface GradientTextProps {
  children: React.ReactNode
  className?: string
  variant?: "primary" | "secondary" | "accent" | "cosmic"
}

export function GradientText({ children, className, variant = "primary" }: GradientTextProps) {
  const variants = {
    primary: "bg-gradient-to-r from-[#0ea5ea] via-[#1cc2e7] to-[#0ea5ea] bg-clip-text text-transparent",
    secondary: "bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent",
    accent: "bg-gradient-to-r from-rose-400 to-pink-400 bg-clip-text text-transparent",
    cosmic: "bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent",
  }

  return <span className={cn(variants[variant], "animate-gradient bg-[length:200%_200%]", className)}>{children}</span>
}
