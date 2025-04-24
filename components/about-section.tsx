import Image from "next/image"
import Link from "next/link"
import { Linkedin, Twitter, FileText } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function AboutSection() {
  return (
    <section id="about" className="py-16 md:py-24 bg-navy-light">
      <div className="container">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-8 items-center">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold tracking-tight uppercase sm:text-4xl">About Me</h2>
            <p className="text-muted-foreground">
              I'm Mark Ffrench, Founder & Solo Developer at Divide The Plunder Ltd since August 2021. I specialize in
              creating relaxing puzzle games of pure deduction.
            </p>
            <p className="text-muted-foreground">
              I'm also a Lead Engineer at Marmalade Games Studio, where I lead the Ticket To Ride development team. The
              game is available on PC/Mac, Mobile, Nintendo Switch, Xbox and PlayStation.
            </p>
            <p className="text-muted-foreground">
              Previously, I've worked at Pocket Burger, Hutch (on F1® Manager), and Firefly Studios (on Stronghold
              Kingdoms).
            </p>

            <div className="pt-4 flex flex-col sm:flex-row gap-4">
              <Button asChild>
                <Link href="#contact">Get In Touch</Link>
              </Button>
              <Button variant="outline" asChild>
                <Link
                  href="https://docs.google.com/document/d/18I_f2vER_bodtedLrIuNN3pB5yL-yCca5t4xIoufkYw/edit?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FileText className="mr-2 h-4 w-4" />
                  View CV
                </Link>
              </Button>
            </div>

            <div className="pt-4 flex items-center gap-4">
              <Link
                href="https://mark-ffrench.itch.io/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground"
              >
                <svg
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                  stroke="currentColor"
                  strokeWidth="2"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-6 w-6"
                >
                  <path d="M2 7v10c0 .6.4 1 1 1h18c.6 0 1-.4 1-1V7c0-.6-.4-1-1-1H3c-.6 0-1 .4-1 1z" />
                  <path d="M6 12h12" />
                  <path d="M12 8v8" />
                </svg>
                <span className="sr-only">Itch.io</span>
              </Link>
              <Link
                href="https://www.linkedin.com/in/markffrench"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground"
              >
                <Linkedin className="h-6 w-6" />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-foreground">
                <Twitter className="h-6 w-6" />
                <span className="sr-only">Twitter</span>
              </Link>
            </div>
          </div>

          <div className="relative flex justify-center">
            <div className="relative w-1/2 aspect-square overflow-hidden rounded-lg">
              <Image
                src="https://fy5ikdxljqpixjc2.public.blob.vercel-storage.com/20170508_113800-Jrlp8bVO0WbiMuLaQMCqgAHluQnMwK.jpg"
                alt="Game Developer Portrait"
                fill
                className="object-cover"
              />
            </div>

            <div className="absolute -bottom-6 right-0 w-64">
              <Card>
                <CardContent className="p-4">
                  <div className="space-y-2">
                    <h3 className="font-medium uppercase">Skills</h3>
                    <div className="grid grid-cols-2 gap-2 text-sm">
                      <div className="flex items-center gap-2">
                        <div className="h-2 w-2 rounded-full bg-primary"></div>
                        <span>Unity</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="h-2 w-2 rounded-full bg-primary"></div>
                        <span>C#</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="h-2 w-2 rounded-full bg-primary"></div>
                        <span>Puzzle Generation</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="h-2 w-2 rounded-full bg-primary"></div>
                        <span>Game Design</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="h-2 w-2 rounded-full bg-primary"></div>
                        <span>Team Leadership</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="h-2 w-2 rounded-full bg-primary"></div>
                        <span>Multiplayer</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
