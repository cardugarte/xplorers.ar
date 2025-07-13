"use client"

import { useEffect, useState } from "react"

export function OumuamuaElement() {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [rotation, setRotation] = useState(0)
  const [windowWidth, setWindowWidth] = useState(0)

  useEffect(() => {
    // Set initial window width
    setWindowWidth(window.innerWidth)

    // Handle window resize
    const handleResize = () => {
      setWindowWidth(window.innerWidth)
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  useEffect(() => {
    const animate = () => {
      setPosition((prev) => ({
        x: prev.x + 0.2,
        y: prev.y + Math.sin(Date.now() * 0.001) * 0.1,
      }))
      setRotation((prev) => prev + 0.5)
    }

    const interval = setInterval(animate, 50)
    return () => clearInterval(interval)
  }, [])

  return (
    <div
      className="fixed pointer-events-none z-10 opacity-30"
      style={{
        left: `${(position.x % windowWidth) - 50}px`,
        top: `${50 + position.y}%`,
        transform: `rotate(${rotation}deg)`,
      }}
    >
      <div className="w-8 h-2 bg-gradient-to-r from-amber-400 to-orange-500 rounded-full shadow-lg shadow-amber-500/50 animate-pulse"></div>
    </div>
  )
}
