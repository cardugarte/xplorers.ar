"use client"

import { Search, Menu, X, Rocket, Satellite } from "lucide-react"
import { Button } from "@/components/ui/button"
import { GradientText } from "@/components/ui/gradient-text"
import { useState } from "react"
import Link from "next/link"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navItems = [
    { label: "Servicios", href: "#services" },
    { label: "Soluciones", href: "#solutions" },
    { label: "Contacto", href: "#contact" },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 flex items-center justify-between px-6 py-4 z-50 bg-[#0a0f1a]/95 backdrop-blur-xl border-b border-white/10 shadow-lg">
      <Link href="/">
        <div className="flex items-center gap-3">
          <div className="relative">
            <div className="w-10 h-10 bg-gradient-to-br from-[#0ea5ea] to-[#1cc2e7] rounded-xl flex items-center justify-center shadow-lg shadow-cyan-500/25 animate-pulse">
              <Rocket className="w-5 h-5 text-white" />
            </div>
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-amber-400 rounded-full animate-bounce"></div>
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-bold">
              <GradientText variant="cosmic">xplorers</GradientText>
              <span className="text-cyan-400">.ar</span>
            </span>
            <span className="text-xs text-[#8fa3c7] -mt-1">AI Automation Agency</span>
          </div>
        </div>
      </Link>


      {/* Desktop Navigation */}
      <nav className="hidden lg:flex items-center gap-8">
        {navItems.map((item) => (
          <a
            key={item.label}
            href={item.href}
            className="text-[#b4c6e7] hover:text-white transition-all duration-300 hover:scale-105 relative group"
          >
            {item.label}
            <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-400 group-hover:w-full transition-all duration-300"></div>
          </a>
        ))}
      </nav>

      <div className="flex items-center gap-4">
        <Search className="w-5 h-5 text-[#b4c6e7] cursor-pointer hover:text-cyan-400 transition-all duration-300 hover:scale-110 hidden sm:block" />
        <Satellite className="w-5 h-5 text-[#b4c6e7] cursor-pointer hover:text-purple-400 transition-all duration-300 hover:scale-110 animate-spin-slow hidden sm:block" />
        <Button className="bg-gradient-to-r from-[#0ea5ea] to-[#1cc2e7] hover:from-[#1cc2e7] hover:to-[#0ea5ea] text-white px-6 shadow-lg shadow-cyan-500/25 transition-all duration-300 hover:scale-105 hover:shadow-cyan-500/40 hidden sm:flex">
          Consulta Gratis
        </Button>

        {/* Mobile Menu Button */}
        <Button variant="ghost" size="icon" className="lg:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </Button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-[#0a0f1a]/98 backdrop-blur-xl border-t border-white/10 shadow-xl lg:hidden">
          <nav className="flex flex-col p-6 space-y-4">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-[#b4c6e7] hover:text-white transition-colors py-2 border-b border-white/5 last:border-b-0"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <Button className="bg-gradient-to-r from-[#0ea5ea] to-[#1cc2e7] text-white mt-4">Consulta Gratis</Button>
          </nav>
        </div>
      )}
    </header>
  )
}
