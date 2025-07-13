"use client"

import { useEffect, useRef } from "react"

interface Star {
  x: number
  y: number
  size: number
  opacity: number
  twinkleSpeed: number
  color: string
}

interface Comet {
  x: number
  y: number
  vx: number
  vy: number
  size: number
  tail: { x: number; y: number; opacity: number }[]
  color: string
}

export function CosmicBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const starsRef = useRef<Star[]>([])
  const cometsRef = useRef<Comet[]>([])
  const animationRef = useRef<number>()

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    const createStars = () => {
      const stars: Star[] = []
      for (let i = 0; i < 200; i++) {
        stars.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 2 + 0.5,
          opacity: Math.random() * 0.8 + 0.2,
          twinkleSpeed: Math.random() * 0.02 + 0.01,
          color: ["#ffffff", "#0ea5ea", "#1cc2e7", "#fbbf24", "#f472b6"][Math.floor(Math.random() * 5)],
        })
      }
      starsRef.current = stars
    }

    const createComets = () => {
      const comets: Comet[] = []
      for (let i = 0; i < 3; i++) {
        comets.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.5,
          vy: (Math.random() - 0.5) * 0.5,
          size: Math.random() * 3 + 2,
          tail: [],
          color: ["#0ea5ea", "#1cc2e7", "#fbbf24"][Math.floor(Math.random() * 3)],
        })
      }
      cometsRef.current = comets
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Draw and animate stars
      starsRef.current.forEach((star) => {
        star.opacity += Math.sin(Date.now() * star.twinkleSpeed) * 0.01
        star.opacity = Math.max(0.1, Math.min(1, star.opacity))

        ctx.save()
        ctx.globalAlpha = star.opacity
        ctx.fillStyle = star.color
        ctx.shadowBlur = star.size * 2
        ctx.shadowColor = star.color
        ctx.beginPath()
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2)
        ctx.fill()
        ctx.restore()
      })

      // Draw and animate comets
      cometsRef.current.forEach((comet) => {
        // Update position
        comet.x += comet.vx
        comet.y += comet.vy

        // Wrap around screen
        if (comet.x < 0) comet.x = canvas.width
        if (comet.x > canvas.width) comet.x = 0
        if (comet.y < 0) comet.y = canvas.height
        if (comet.y > canvas.height) comet.y = 0

        // Add to tail
        comet.tail.unshift({ x: comet.x, y: comet.y, opacity: 1 })
        if (comet.tail.length > 20) comet.tail.pop()

        // Draw tail
        comet.tail.forEach((point, index) => {
          const opacity = point.opacity * (1 - index / comet.tail.length)
          ctx.save()
          ctx.globalAlpha = opacity * 0.6
          ctx.fillStyle = comet.color
          ctx.shadowBlur = 10
          ctx.shadowColor = comet.color
          ctx.beginPath()
          ctx.arc(point.x, point.y, comet.size * (1 - index / comet.tail.length), 0, Math.PI * 2)
          ctx.fill()
          ctx.restore()
        })

        // Draw comet head
        ctx.save()
        ctx.fillStyle = comet.color
        ctx.shadowBlur = 15
        ctx.shadowColor = comet.color
        ctx.beginPath()
        ctx.arc(comet.x, comet.y, comet.size, 0, Math.PI * 2)
        ctx.fill()
        ctx.restore()
      })

      animationRef.current = requestAnimationFrame(animate)
    }

    resizeCanvas()
    createStars()
    createComets()
    animate()

    window.addEventListener("resize", () => {
      resizeCanvas()
      createStars()
      createComets()
    })

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
      window.removeEventListener("resize", resizeCanvas)
    }
  }, [])

  return (
    <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none z-0" style={{ background: "transparent" }} />
  )
}
