"use client"

import type React from "react"

import { useEffect, useState, useRef } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function HeroSection() {
  const [squares, setSquares] = useState<Array<{ id: number; delay: number; duration: number }>>([])
  const backgroundRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Create grid of squares with randomized animation properties
    const rows = 8
    const cols = 12
    const newSquares = []

    for (let i = 0; i < rows * cols; i++) {
      newSquares.push({
        id: i,
        delay: Math.random() * 10, // Random delay between 0-10s
        duration: 4 + Math.random() * 6, // Random duration between 4-10s
      })
    }

    setSquares(newSquares)
  }, [])

  const scrollToGames = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    const gamesSection = document.getElementById("games")
    if (gamesSection) {
      gamesSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="relative overflow-hidden bg-navy py-24 md:py-32">
      <div ref={backgroundRef} className="absolute inset-0 z-0 grid grid-cols-12 gap-4 p-8">
        {squares.map((square) => (
          <div
            key={square.id}
            className="relative aspect-square rounded-xl bg-white/5"
            style={{
              animation: `fadeInOut ${square.duration}s infinite ${square.delay}s`,
              opacity: 0,
            }}
          />
        ))}
      </div>
      <div className="container relative z-10">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="mb-6 text-4xl font-bold tracking-tight uppercase sm:text-5xl md:text-6xl">Mark Ffrench</h1>
          <p className="mb-8 text-xl uppercase tracking-wider">Game Developer</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" asChild>
              <Link href="#games" onClick={scrollToGames}>
                View Portfolio
              </Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Add keyframes for the fadeInOut animation */}
      <style jsx>{`
        @keyframes fadeInOut {
          0% { opacity: 0; }
          50% { opacity: 0.8; }
          100% { opacity: 0; }
        }
      `}</style>
    </section>
  )
}
