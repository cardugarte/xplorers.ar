import type React from "react"
import { cn } from "@/lib/utils"

interface SectionContainerProps {
  children: React.ReactNode
  className?: string
  id?: string
}

export function SectionContainer({ children, className, id }: SectionContainerProps) {
  return (
    <section id={id} className={cn("py-16 lg:py-24 relative", className)}>
      <div className="max-w-7xl mx-auto px-6">{children}</div>
    </section>
  )
}
