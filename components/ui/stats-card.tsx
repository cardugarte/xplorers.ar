import { GradientText } from "./gradient-text"

interface StatsCardProps {
  number: string
  label: string
  suffix?: string
}

export function StatsCard({ number, label, suffix = "" }: StatsCardProps) {
  return (
    <div className="text-center">
      <div className="text-4xl lg:text-5xl font-bold mb-2">
        <GradientText>
          {number}
          {suffix}
        </GradientText>
      </div>
      <p className="text-[#b4c6e7] text-lg">{label}</p>
    </div>
  )
}
