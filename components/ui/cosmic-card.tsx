import { cn } from "@/lib/utils"
import type { LucideIcon } from "lucide-react"

interface CosmicCardProps {
  icon: LucideIcon
  title: string
  description: string
  className?: string
  gradient?: string
}

export function CosmicCard({
  icon: Icon,
  title,
  description,
  className,
  gradient = "from-blue-600 to-blue-800",
}: CosmicCardProps) {
  return (
    <div
      className={cn(
        "bg-[#1a2332]/60 backdrop-blur-xl rounded-2xl p-6 border border-white/10 hover:border-white/30 transition-all duration-500 hover:scale-105 hover:shadow-2xl group cursor-pointer relative overflow-hidden",
        className,
      )}
    >
      {/* Cosmic glow effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

      <div
        className={cn(
          "w-14 h-14 rounded-xl bg-gradient-to-br mb-6 flex items-center justify-center shadow-lg relative z-10",
          gradient,
        )}
      >
        <Icon className="w-7 h-7 text-white" />
        <div className="absolute inset-0 bg-white/20 rounded-xl animate-pulse"></div>
      </div>

      <h3 className="text-xl font-semibold mb-4 text-white group-hover:text-cyan-300 transition-colors relative z-10">
        {title}
      </h3>
      <p className="text-[#b4c6e7] leading-relaxed relative z-10">{description}</p>

      {/* Floating particles */}
      <div className="absolute top-4 right-4 w-2 h-2 bg-cyan-400 rounded-full animate-ping opacity-60"></div>
      <div className="absolute bottom-6 left-6 w-1 h-1 bg-purple-400 rounded-full animate-pulse"></div>
    </div>
  )
}
