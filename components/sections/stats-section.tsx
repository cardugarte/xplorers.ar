"use client"

import { SectionContainer } from "@/components/ui/section-container"
import { GradientText } from "@/components/ui/gradient-text"
import { Users, ShoppingCart, MessageSquare, TrendingDown, CheckCircle, ArrowRight } from "lucide-react"

export function StatsSection() {
  const automationAreas = [
    {
      icon: Users,
      title: "Administración",
      description: "Detectamos tareas repetitivas en tu gestión diaria",
      benefits: [
        "Automatización de reportes",
        "Gestión de inventarios",
        "Procesamiento de documentos"
      ],
      color: "from-blue-400 to-cyan-400"
    },
    {
      icon: ShoppingCart,
      title: "Ventas",
      description: "Optimizamos tu proceso comercial de principio a fin",
      benefits: [
        "Seguimiento automático de leads",
        "Propuestas personalizadas",
        "Análisis de conversión"
      ],
      color: "from-emerald-400 to-teal-400"
    },
    {
      icon: MessageSquare,
      title: "Atención al Cliente",
      description: "Mejoramos la experiencia del usuario 24/7",
      benefits: [
        "Chatbots inteligentes",
        "Respuestas automáticas",
        "Clasificación de consultas"
      ],
      color: "from-purple-400 to-pink-400"
    },
    {
      icon: TrendingDown,
      title: "Reducción de Gastos",
      description: "Identificamos oportunidades de ahorro inmediatas",
      benefits: [
        "Eliminación de procesos manuales",
        "Optimización de recursos",
        "Reducción de errores costosos"
      ],
      color: "from-amber-400 to-orange-400"
    }
  ]

  return (
    <SectionContainer className="bg-gradient-to-r from-[#0a0f1a]/30 to-[#1a2332]/30 backdrop-blur-sm">
      <div className="text-center mb-6">
        <h2 className="text-3xl lg:text-4xl font-bold mb-4">
          <GradientText>¿Dónde puedes automatizar?</GradientText>
        </h2>
        <p className="text-[#b4c6e7] text-lg max-w-2xl mx-auto">
          Analizamos tu empresa y te mostramos las áreas con mayor potencial de automatización
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {automationAreas.map((area, index) => {
          const IconComponent = area.icon
          return (
            <div key={index} className="relative group">
              <div className="bg-[#1a2332]/50 backdrop-blur-sm border border-white/10 rounded-xl p-6 h-full transition-all duration-300 hover:border-cyan-400/30 hover:shadow-lg hover:shadow-cyan-500/10">
                {/* Icon with gradient background */}
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${area.color} p-3 mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <IconComponent className="w-6 h-6 text-white" />
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-white mb-2">{area.title}</h3>

                {/* Description */}
                <p className="text-[#b4c6e7] text-sm mb-4 leading-relaxed">{area.description}</p>

                {/* Benefits list */}
                <ul className="space-y-2">
                  {area.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-start gap-2 text-sm text-[#8fa3c7]">
                      <CheckCircle className="w-4 h-4 text-emerald-400 mt-0.5 flex-shrink-0" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>

                {/* Hover effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-purple-500/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              </div>
            </div>
          )
        })}
      </div>

      {/* Bottom CTA */}
      <div className="text-center mt-24">
        <p className="text-[#b4c6e7] text-sm mb-4">
          ¿No estás seguro por dónde empezar?
        </p>
        <button
          onClick={() => {
            const footer = document.querySelector('footer');
            footer?.scrollIntoView({ behavior: 'smooth' });
          }}
          className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 hover:from-cyan-500/30 hover:to-purple-500/30 border border-cyan-400/30 hover:border-cyan-400/50 text-cyan-400 px-6 py-3 rounded-lg font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/20"
        >
          <span>Te ayudamos a identificar las mejores oportunidades</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </SectionContainer>
  )
}
