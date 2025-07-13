import { cn } from "@/lib/utils"
import type { LucideIcon } from "lucide-react"

interface FeatureCardProps {
  icon: LucideIcon
  title: string
  description: string
  className?: string
  gradient?: string
}

export function FeatureCard({
  icon: Icon,
  title,
  description,
  className,
  gradient = "from-blue-600 to-blue-800",
}: FeatureCardProps) {
  return (
    <div
      className={cn(
        "bg-[#1a2332]/80 backdrop-blur-sm rounded-xl p-6 border border-white/5 hover:border-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl group cursor-pointer",
        className,
      )}
    >
      <div
        className={cn(
          "w-12 h-12 rounded-lg bg-gradient-to-br mb-4 flex items-center justify-center shadow-lg",
          gradient,
        )}
      >
        <Icon className="w-6 h-6 text-white" />
      </div>
      <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-cyan-300 transition-colors">{title}</h3>
      <p className="text-[#b4c6e7] leading-relaxed">{description}</p>
    </div>
  )
}
