"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ExternalLink } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"

interface Game {
  id: string
  title: string
  description: string
  image: string
  tags: string[]
  link: string
  featured?: boolean
  releaseDate?: string
  press?: string[]
}

const games: Game[] = [
  {
    id: "proverbs",
    title: "PROVERBS",
    description:
      "A sequel to Mega Mosaic. A huge, meditative, minesweeper-like puzzle, where you fill in a pixelart recreation of the 1559 painting Netherlandish Proverbs by Bruegel the Elder.",
    image: "https://fy5ikdxljqpixjc2.public.blob.vercel-storage.com/Header_Capsule.png",
    tags: ["Puzzle", "Meditative", "Pixel Art"],
    link: "https://mark-ffrench.itch.io/proverbs",
    featured: true,
    releaseDate: "Nov 2024",
    press: ["Rock Paper Shotgun", "Automaton (JP)"],
  },
  {
    id: "mega-mosaic",
    title: "MEGA MOSAIC",
    description:
      "A meditative puzzle game where players slowly solve an enormous minesweeper-like puzzle. As players complete different regions of the puzzle, they're rewarded with pixel art illustrations that reveal themselves, as well as earning nearly 100 achievements for various challenges.",
    image: "https://fy5ikdxljqpixjc2.public.blob.vercel-storage.com/mega-mosaic-2915950-header-EMetVM1lOmPxrixBwSf3k0Du2jCdcO.jpg",
    tags: ["Mosaic", "Puzzle", "Pixel Art"],
    link: "https://mark-ffrench.itch.io/mega-mosaic",
    featured: true,
    releaseDate: "May 2024",
  },
  {
    id: "logic-town",
    title: "LOGIC TOWN",
    description:
      "A cute and casual logic puzzle game. Players journey through 12 different themed areas of a seaside town meeting different animal characters that live there. They'll solve challenging Logic Puzzles, and get to redecorate dioramas of different shops and venues in the town that are in need of repair.",
    image: "https://fy5ikdxljqpixjc2.public.blob.vercel-storage.com/logic-town-2333240-header-LHUKWOZooVQArF8aj8FIr60qJkYm8G.jpg",
    tags: ["Logic", "Adventure", "PC"],
    link: "https://mark-ffrench.itch.io/logic-town",
    featured: true,
    releaseDate: "Nov 2023",
  },
  {
    id: "mosaic-retrospective",
    title: "2024: MOSAIC RETROSPECTIVE",
    description:
      "A free charity-fundraising mosaic game that I released to raise money for UNICEF. The game features a round-up of major global news stories from 2024.",
    image: "https://fy5ikdxljqpixjc2.public.blob.vercel-storage.com/2024-mosaic-retrospective-3380760-header-gHyWM20YoCw585kzOMOtdszgBWkaAD.jpg",
    tags: ["Mosaic", "Pixel Art", "Charity"],
    link: "https://mark-ffrench.itch.io/",
    releaseDate: "Dec 2024",
  },
  {
    id: "pharaohs",
    title: "MOSAIC OF THE PHARAOHS",
    description:
      "Another Mosaic puzzle game focusing on Ancient Egypt. This was a slight shadow drop on steam, so it hasn't performed as well as the other titles yet, but I'm optimistic that it will do well in the longer term.",
    image: "https://fy5ikdxljqpixjc2.public.blob.vercel-storage.com/mosaic-of-the-pharaohs-3530670-header-PVskn6aoxWVjmYGjcXETzzWYjxb9NH.jpg",
    tags: ["Historical", "Educational", "Mosaic"],
    link: "https://mark-ffrench.itch.io/",
    releaseDate: "Mar 2025",
  },
  {
    id: "shithead",
    title: "SH*THEAD",
    description:
      "A multiplayer focused card game based on the classic backpacker and playground favourite. Players compete against up to 3 opponents in each match, where they can emote and chat and show off their newly earned characters, while playing the game.",
    image: "https://fy5ikdxljqpixjc2.public.blob.vercel-storage.com/shthead-2809950-header-IIQxW9LDmYuQ2SWOtV0ulVFM67RLmy.jpg",
    tags: ["Card Game", "Multiplayer", "Coming Soon"],
    link: "https://mark-ffrench.itch.io/",
    releaseDate: "TBA",
  },
]

export default function GameShowcase() {
  const [activeTab, setActiveTab] = useState("featured")
  const featuredGames = games.filter((game) => game.featured)
  const allGames = games

  return (
    <section id="games" className="py-16 md:py-24">
      <div className="container">
        <div className="flex flex-col items-center text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight uppercase sm:text-4xl mb-4">Portfolio</h2>
          <div className="max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-2 uppercase">DIVIDE THE PLUNDER</h3>
            <p className="text-muted-foreground mb-2">Founder & Solo Developer</p>
            <p className="text-sm text-muted-foreground">AUG 2021 - PRESENT</p>
          </div>
        </div>

        <Tabs defaultValue="featured" className="w-full" onValueChange={setActiveTab}>
          <div className="flex justify-center mb-8">
            <TabsList>
              <TabsTrigger value="featured">Featured Games</TabsTrigger>
              <TabsTrigger value="all">All Games</TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="featured" className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredGames.map((game) => (
                <GameCard key={game.id} game={game} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="all" className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {allGames.map((game) => (
                <GameCard key={game.id} game={game} />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  )
}

function GameCard({ game }: { game: Game }) {
  return (
    <Card className="overflow-hidden transition-all hover:shadow-lg">
      <div className="aspect-video relative overflow-hidden">
        <Image
          src={game.image || "/placeholder.svg"}
          alt={game.title}
          fill
          className="object-cover transition-transform hover:scale-105"
        />
        {game.releaseDate && (
          <div className="absolute top-2 right-2">
            <Badge variant="secondary" className="bg-background/80 backdrop-blur-sm">
              {game.releaseDate}
            </Badge>
          </div>
        )}
      </div>
      <CardHeader>
        <CardTitle className="uppercase">{game.title}</CardTitle>
        {game.press && game.press.length > 0 && (
          <div className="flex flex-wrap gap-1 mt-1">
            {game.press.map((outlet) => (
              <Badge key={outlet} variant="outline" className="text-xs">
                {outlet}
              </Badge>
            ))}
          </div>
        )}
        <div className="flex flex-wrap gap-2 mt-2">
          {game.tags.map((tag) => (
            <Badge key={tag} variant="secondary" className="font-normal">
              {tag}
            </Badge>
          ))}
        </div>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-sm">{game.description}</CardDescription>
      </CardContent>
      <CardFooter>
        <Button variant="outline" size="sm" className="w-full" asChild>
          <Link href={game.link} target="_blank" rel="noopener noreferrer">
            <span>View Game</span>
            <ExternalLink className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  )
}
