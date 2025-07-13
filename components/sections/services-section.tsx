import { SectionContainer } from "@/components/ui/section-container"
import { CosmicCard } from "@/components/ui/cosmic-card"
import { GradientText } from "@/components/ui/gradient-text"
import { Bot, Workflow, MessageSquare, BarChart3, Zap, Shield } from "lucide-react"

export function ServicesSection() {
  const services = [
    {
      icon: Bot,
      title: "Chatbots Inteligentes",
      description: "Asistentes virtuales que entienden y responden como humanos, disponibles 24/7 para tus clientes.",
      gradient: "from-blue-600 to-purple-800",
    },
    {
      icon: Workflow,
      title: "Automatización de Procesos",
      description: "Optimizamos flujos de trabajo repetitivos para aumentar la eficiencia y reducir errores.",
      gradient: "from-cyan-600 to-blue-600",
    },
    {
      icon: MessageSquare,
      title: "Análisis de Sentimientos",
      description: "Comprende las emociones de tus clientes en tiempo real para mejorar la experiencia.",
      gradient: "from-purple-600 to-pink-600",
    },
    {
      icon: BarChart3,
      title: "Predicción con IA",
      description: "Anticipa tendencias y comportamientos para tomar decisiones estratégicas informadas.",
      gradient: "from-emerald-600 to-cyan-600",
    },
    {
      icon: Zap,
      title: "Integración Rápida",
      description: "Conectamos la IA con tus sistemas existentes sin interrumpir tus operaciones.",
      gradient: "from-amber-600 to-orange-600",
    },
    {
      icon: Shield,
      title: "Seguridad Avanzada",
      description: "Protección de datos de nivel empresarial con encriptación y cumplimiento normativo.",
      gradient: "from-indigo-600 to-purple-600",
    },
  ]

  return (
    <SectionContainer
      id="services"
      className="bg-gradient-to-b from-transparent via-[#0a0f1a]/30 to-transparent relative"
    >
      {/* Cosmic background elements */}
      <div className="absolute top-20 left-10 w-2 h-2 bg-cyan-400 rounded-full animate-ping"></div>
      <div className="absolute bottom-20 right-20 w-3 h-3 bg-purple-400 rounded-full animate-pulse"></div>
      <div className="absolute top-1/2 left-1/4 w-1 h-1 bg-amber-400 rounded-full animate-bounce"></div>

      <div className="text-center mb-16 relative z-10">
        <h2 className="text-4xl lg:text-5xl font-bold mb-6">
          Nuestros <GradientText>Servicios de IA</GradientText>
        </h2>
        <p className="text-[#b4c6e7] text-xl max-w-3xl mx-auto leading-relaxed">
          Ofrecemos soluciones de inteligencia artificial personalizadas que se adaptan a las necesidades específicas de
          tu industria
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
        {services.map((service, index) => (
          <CosmicCard
            key={index}
            icon={service.icon}
            title={service.title}
            description={service.description}
            gradient={service.gradient}
          />
        ))}
      </div>
    </SectionContainer>
  )
}
