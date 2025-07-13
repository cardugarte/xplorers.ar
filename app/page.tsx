import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { HeroSection } from "@/components/sections/hero-section"
import { ServicesSection } from "@/components/sections/services-section"
import { StatsSection } from "@/components/sections/stats-section"
import { CosmicBackground } from "@/components/ui/cosmic-background"
import { OumuamuaElement } from "@/components/ui/oumuamua-element"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#0f172a] text-white relative overflow-hidden">
      {/* Cosmic Background */}
      <CosmicBackground />

      {/* Oumuamua Element */}
      <OumuamuaElement />

      {/* Enhanced cosmic ambient effects */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-r from-purple-500/10 to-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-cyan-500/5 to-purple-500/5 rounded-full blur-3xl"></div>

      <Header />
      <main className="relative z-10">
        <HeroSection />
        <StatsSection />
        <ServicesSection />
      </main>
      <Footer />
    </div>
  )
}
