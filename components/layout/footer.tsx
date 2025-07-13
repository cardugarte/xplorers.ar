import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { GradientText } from "@/components/ui/gradient-text"
import { SectionContainer } from "@/components/ui/section-container"
import { Bot, Phone, Mail, ArrowRight, Sparkles, Star, Zap } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-gradient-to-br from-[#0a0f1a] via-[#1a2332] to-[#0f1419] border-t border-white/10 relative overflow-hidden">
      {/* Floating elements similar to Hero */}
      <div className="absolute top-10 left-1/4 animate-float">
        <div className="w-3 h-3 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full shadow-lg shadow-cyan-500/50 animate-pulse"></div>
      </div>
      <div className="absolute bottom-20 right-1/4 animate-float-delayed">
        <div className="w-4 h-4 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full shadow-lg shadow-purple-500/50 animate-pulse"></div>
      </div>
      <div className="absolute top-1/2 left-10 animate-bounce-slow">
        <Star className="w-5 h-5 text-amber-400 animate-spin-slow" />
      </div>
      <div className="absolute top-20 right-10 animate-float">
        <Sparkles className="w-4 h-4 text-purple-400 animate-pulse" />
      </div>
      <div className="absolute bottom-1/3 left-1/3 animate-float-delayed">
        <Bot className="w-6 h-6 text-cyan-400 animate-bounce" />
      </div>

      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-transparent via-cyan-500/5 to-transparent"></div>

      <SectionContainer className="py-16 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-12">
          {/* CTA Section */}
          <div className="space-y-6">
            <div className="flex items-center justify-center gap-3">
              <Bot className="w-6 h-6 text-[#0ea5ea] animate-bounce" />
              <h2 className="text-2xl lg:text-3xl font-bold">
                ¿Listo para <GradientText>automatizar tu negocio</GradientText>?
              </h2>
              <Sparkles className="w-5 h-5 text-amber-400 animate-pulse" />
            </div>

            <p className="text-[#b4c6e7] text-lg leading-relaxed max-w-2xl mx-auto">
              Completa tus datos y recibe un <span className="text-amber-300 font-medium">análisis personalizado</span>{" "}
              de cómo la IA puede transformar tu empresa.
            </p>

            <div className="space-y-4">
              <p className="text-sm text-[#b4c6e7] flex items-center justify-center gap-2">
                <Zap className="w-4 h-4 text-amber-400" />
                Contacto directo en <span className="text-amber-300 font-medium">menos de 24h</span>
              </p>

              {/* Form with email and phone */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-2xl mx-auto">
                <div className="flex-1">
                  <Input
                    placeholder="Email empresarial"
                    type="email"
                    className="bg-[#1a2332]/80 backdrop-blur-sm border-white/10 text-white placeholder:text-[#8fa3c7] focus:border-cyan-400/50 transition-all duration-300"
                  />
                </div>
                <div className="flex-1">
                  <Input
                    placeholder="Número de teléfono"
                    type="tel"
                    className="bg-[#1a2332]/80 backdrop-blur-sm border-white/10 text-white placeholder:text-[#8fa3c7] focus:border-cyan-400/50 transition-all duration-300"
                  />
                </div>
                <Button className="bg-gradient-to-r from-[#0ea5ea] to-[#1cc2e7] hover:from-[#1cc2e7] hover:to-[#0ea5ea] text-white px-6 shadow-lg shadow-cyan-500/25 transition-all duration-300 hover:scale-105 hover:shadow-cyan-500/40 whitespace-nowrap">
                  Solicitar Análisis <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>

              <p className="text-xs text-[#8fa3c7] flex items-center justify-center gap-4">
                <span>🔒 Información confidencial</span>
                <span>⚡ Respuesta garantizada</span>
                <span>🎯 Consulta sin costo</span>
              </p>
            </div>
          </div>

          {/* Footer info */}
          <div className="border-t border-white/10 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="flex items-center gap-2">
                <Bot className="w-5 h-5 text-[#0ea5ea]" />
                <span className="text-white font-medium">Xplorers</span>
              </div>

              <div className="flex items-center gap-6 text-sm text-[#8fa3c7]">
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  <span>contact@xplorers.com</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  <span>+54 11 1234-5678</span>
                </div>
              </div>

              <p className="text-xs text-[#8fa3c7]">
                © 2024 Xplorers. Todos los derechos reservados.
              </p>
            </div>
          </div>
        </div>
      </SectionContainer>
    </footer>
  )
} 