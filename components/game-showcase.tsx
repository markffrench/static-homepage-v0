"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ExternalLink, Star } from "lucide-react"

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
  reviewScore?: string
  status: "shipped" | "upcoming"
}

const games: Game[] = [
  {
    id: "pharaohs",
    title: "MOSAIC OF THE PHARAOHS",
    description:
      "Another Mosaic puzzle game focusing on Ancient Egypt. This was a slight shadow drop on steam, so it hasn't performed as well as the other titles yet, but I'm optimistic that it will do well in the longer term.",
    image:
      "https://fy5ikdxljqpixjc2.public.blob.vercel-storage.com/mosaic-of-the-pharaohs-3530670-header-PVskn6aoxWVjmYGjcXETzzWYjxb9NH.jpg",
    tags: ["Mosaic", "Historical", "Relaxing"],
    link: "https://store.steampowered.com/app/3530670/Mosaic_of_The_Pharaohs?utm_source=portfolio&utm_medium=website&utm_campaign=game_showcase&utm_content=pharaohs",
    releaseDate: "Mar 2025",
    reviewScore: "100% (20) Positive",
    status: "shipped",
  },
  {
    id: "mosaic-retrospective",
    title: "2024: MOSAIC RETROSPECTIVE",
    description:
      "A free charity-fundraising mosaic game that I released to raise money for UNICEF. The game features a round-up of major global news stories from 2024.",
    image:
      "https://fy5ikdxljqpixjc2.public.blob.vercel-storage.com/2024-mosaic-retrospective-3380760-header-gHyWM20YoCw585kzOMOtdszgBWkaAD.jpg",
    tags: ["Mosaic", "Global News", "Charity", "Relaxing"],
    link: "https://store.steampowered.com/app/3380760/2024_Mosaic_Retrospective/?utm_source=portfolio&utm_medium=website&utm_campaign=game_showcase&utm_content=retrospective",
    releaseDate: "Dec 2024",
    reviewScore: "87% (400+) Very Positive",
    status: "shipped",
  },
  {
    id: "proverbs",
    title: "PROVERBS",
    description:
      "A sequel to Mega Mosaic. A huge, meditative, minesweeper-like puzzle, where you fill in a pixelart recreation of the 1559 painting Netherlandish Proverbs by Bruegel the Elder.",
    image: "https://fy5ikdxljqpixjc2.public.blob.vercel-storage.com/proverbs-D2yD1RgR1xH5hCmooCxfE97TFBxdbm.jpg",
    tags: ["Mosaic", "Historical", "Relaxing"],
    link: "https://store.steampowered.com/app/3083300/Proverbs/?utm_source=portfolio&utm_medium=website&utm_campaign=game_showcase&utm_content=proverbs",
    featured: true,
    releaseDate: "Nov 2024",
    reviewScore: "98% (400+) Very Positive",
    status: "shipped",
  },
  {
    id: "mega-mosaic",
    title: "MEGA MOSAIC",
    description:
      "A meditative puzzle game where players slowly solve an enormous minesweeper-like puzzle. As players complete different regions of the puzzle, they're rewarded with pixel art illustrations that reveal themselves, as well as earning nearly 100 achievements for various challenges.",
    image:
      "https://fy5ikdxljqpixjc2.public.blob.vercel-storage.com/mega-mosaic-2915950-header-EMetVM1lOmPxrixBwSf3k0Du2jCdcO.jpg",
    tags: ["Mosaic", "Pixel Art", "Relaxing"],
    link: "https://store.steampowered.com/app/2915950/Mega_Mosaic/?utm_source=portfolio&utm_medium=website&utm_campaign=game_showcase&utm_content=mega_mosaic",
    featured: true,
    releaseDate: "May 2024",
    reviewScore: "93% (150+) Very Positive",
    status: "shipped",
  },
  {
    id: "logic-town",
    title: "LOGIC TOWN",
    description:
      "A cute and casual logic puzzle game. Players journey through 12 different themed areas of a seaside town meeting different animal characters that live there. They'll solve challenging Logic Puzzles, and get to redecorate dioramas of different shops and venues in the town that are in need of repair.",
    image:
      "https://fy5ikdxljqpixjc2.public.blob.vercel-storage.com/logic-town-2333240-header-LHUKWOZooVQArF8aj8FIr60qJkYm8G.jpg",
    tags: ["Logic", "Leaderboards", "Daily Challenge", "DLC"],
    link: "https://store.steampowered.com/app/2333240/Logic_Town/?utm_source=portfolio&utm_medium=website&utm_campaign=game_showcase&utm_content=logic_town",
    featured: true,
    releaseDate: "Nov 2023",
    reviewScore: "98% (150+) Very Positive",
    status: "shipped",
  },
  {
    id: "mosaic-strange",
    title: "MOSAIC OF THE STRANGE",
    description:
      "The fifth entry in the Mega Mosaic series, Mosaic of the Strange is a deep dive into world of the paranormal.",
    image: "https://fy5ikdxljqpixjc2.public.blob.vercel-storage.com/Header_Capsule-RsXTd92AoTz2KwrzCn6TI8wD7dTSQo.png",
    tags: ["Mosaic", "Paranormal", "Coming Soon"],
    link: "https://store.steampowered.com/app/3444650/Mosaic_of_the_Strange/?utm_source=portfolio&utm_medium=website&utm_campaign=game_showcase&utm_content=strange",
    releaseDate: "24th Oct 2025",
    status: "upcoming",
  },
  {
    id: "shithead",
    title: "SH*THEAD",
    description:
      "A multiplayer focused card game based on the classic backpacker and playground favourite. Players compete against up to 3 opponents in each match, where they can emote and chat and show off their newly earned characters, while playing the game.",
    image:
      "https://fy5ikdxljqpixjc2.public.blob.vercel-storage.com/shthead-2809950-header-IIQxW9LDmYuQ2SWOtV0ulVFM67RLmy.jpg",
    tags: ["Card Game", "Multiplayer", "Coming Soon"],
    link: "https://store.steampowered.com/app/2809950/Shthead?utm_source=portfolio&utm_medium=website&utm_campaign=game_showcase&utm_content=shithead",
    releaseDate: "TBA",
    status: "upcoming",
  },
]

export default function GameShowcase() {
  const [activeTab, setActiveTab] = useState("shipped")
  const shippedGames = games.filter((game) => game.status === "shipped")
  const upcomingGames = games.filter((game) => game.status === "upcoming")

  return (
    <section id="games" className="py-16 md:py-24">
      <div className="container">
        <div className="flex flex-col items-center text-center mb-12">
          <div className="max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-2 uppercase">Founder & Solo Developer</h3>
            <p className="text-sm text-muted-foreground">AUG 2021 - PRESENT</p>
          </div>
        </div>

        <Tabs defaultValue="shipped" className="w-full" onValueChange={setActiveTab}>
          <div className="flex justify-center mb-8">
            <TabsList>
              <TabsTrigger value="shipped">Shipped Games</TabsTrigger>
              <TabsTrigger value="upcoming">Upcoming Games</TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="shipped" className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {shippedGames.map((game) => (
                <GameCard key={game.id} game={game} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="upcoming" className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {upcomingGames.map((game) => (
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
      <Link href={game.link} target="_blank" rel="noopener noreferrer" className="block">
        <div className="relative overflow-hidden" style={{ paddingBottom: "46.7%" }}>
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
      </Link>
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
        {game.reviewScore && (
          <div className="flex items-center gap-1 mt-2 text-sm" style={{ color: "#66C0F4" }}>
            <Star className="h-4 w-4" style={{ fill: "#66C0F4" }} />
            <span>{game.reviewScore}</span>
          </div>
        )}
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
