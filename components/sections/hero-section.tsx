import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { GradientText } from "@/components/ui/gradient-text"
import { SectionContainer } from "@/components/ui/section-container"
import { Bot, Sparkles, ArrowRight, Satellite, Zap } from "lucide-react"

export function HeroSection() {
  return (
    <SectionContainer id="home" className="pt-24 pb-16 relative overflow-hidden">
      {/* Enhanced floating cosmic elements */}
      <div className="absolute top-20 left-10 animate-float">
        <div className="w-4 h-4 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full shadow-lg shadow-cyan-500/50 animate-pulse"></div>
      </div>
      <div className="absolute top-40 right-20 animate-float-delayed">
        <div className="w-3 h-3 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full shadow-lg shadow-purple-500/50 animate-pulse"></div>
      </div>
      <div className="absolute bottom-40 left-20 animate-bounce-slow">
        <Satellite className="w-6 h-6 text-amber-400 animate-spin-slow" />
      </div>

      {/* New floating elements */}
      <div className="absolute top-1/4 right-1/4 animate-float">
        <div className="w-2 h-2 bg-gradient-to-r from-emerald-400 to-cyan-400 rounded-full shadow-lg shadow-emerald-500/50"></div>
      </div>
      <div className="absolute bottom-1/3 right-1/3 animate-float-delayed">
        <div className="w-5 h-5 bg-gradient-to-r from-rose-400 to-pink-500 rounded-full shadow-lg shadow-rose-500/50 animate-pulse"></div>
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        {/* Content */}
        <div className="space-y-8">
          <div className="space-y-6">
            <div className="flex items-center justify-center gap-3">
              <Bot className="w-7 h-7 text-[#0ea5ea] animate-bounce" />
              <p className="text-lg font-medium">
                <GradientText>Automatización Inteligente</GradientText>
              </p>
              <Sparkles className="w-5 h-5 text-amber-400 animate-pulse" />
            </div>

            <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
              Transforma tu negocio con <GradientText>Inteligencia Artificial</GradientText>
            </h1>

            <p className="text-[#b4c6e7] text-lg leading-relaxed max-w-2xl mx-auto">
              Automatizamos procesos complejos usando <span className="text-amber-300 font-medium">IA avanzada</span>{" "}
              para que puedas enfocarte en lo que realmente importa:{" "}
              <span className="text-rose-300">hacer crecer tu negocio</span>.
            </p>
          </div>

          {/* CTA Section */}
          <div className="space-y-4">
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-lg mx-auto">
              <Input
                placeholder="Ingresa tu email empresarial"
                className="bg-[#1a2332]/80 backdrop-blur-sm border-white/10 text-white placeholder:text-[#8fa3c7] flex-1 focus:border-cyan-400/50 transition-all duration-300"
              />
              <Button className="bg-gradient-to-r from-[#0ea5ea] to-[#1cc2e7] hover:from-[#1cc2e7] hover:to-[#0ea5ea] text-white px-6 shadow-lg shadow-cyan-500/25 transition-all duration-300 hover:scale-105 hover:shadow-cyan-500/40 whitespace-nowrap">
                Análisis Gratis <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
            <p className="text-xs text-[#8fa3c7] flex items-center justify-center gap-4">
              <span>🔒 Sin compromiso</span>
              <span>⚡ Respuesta en 24h</span>
              <span>🎯 Consulta personalizada</span>
            </p>
          </div>
        </div>
      </div>
    </SectionContainer>
  )
}
