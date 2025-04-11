import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function CVPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container py-10">
        <div className="mb-8">
          <Button variant="ghost" size="sm" asChild className="mb-4">
            <Link href="/" className="flex items-center">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Portfolio
            </Link>
          </Button>
          <h1 className="text-4xl font-bold tracking-tight mb-2">MARK FFRENCH</h1>
          <p className="text-xl text-muted-foreground mb-4">Game Developer</p>
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <span>markaffrench@gmail.com</span>
            <Link href="/" className="text-primary hover:underline">
              Portfolio
            </Link>
            <Link
              href="https://linkedin.com/in/markffrench"
              className="text-primary hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </Link>
          </div>
        </div>

        <div className="space-y-10">
          {/* Experience */}
          <section>
            <h2 className="text-2xl font-bold mb-6 uppercase">Experience</h2>

            <Card className="mb-6">
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                  <CardTitle>Lead Engineer</CardTitle>
                  <div className="flex items-center gap-2">
                    <Badge variant="outline">May 2023 - Present</Badge>
                  </div>
                </div>
                <CardDescription>Marmalade Games Studio</CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <p>
                  Joined as a Senior Engineer working on the new 2023 adaptation of Cluedo. From August I worked on
                  Ticket To Ride, before becoming Lead on the project in November. I led a team of 4-6 developers from
                  the initial PC/Mac launch and on through to Mobile, Nintendo Switch, Xbox and Playstation versions,
                  and 10 DLC expansions. The game features real-time and asynchronous multiplayer, with a competitive
                  tiered leaderboard system.
                </p>
              </CardContent>
            </Card>

            <Card className="mb-6">
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                  <CardTitle>Solo Developer</CardTitle>
                  <div className="flex items-center gap-2">
                    <Badge variant="outline">Aug 2021 - Present</Badge>
                  </div>
                </div>
                <CardDescription>Divide The Plunder</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="font-semibold mb-1">Mosaic of The Pharaohs, Steam Mar 2025</h3>
                  <p>
                    Another Mosaic puzzle game focusing on Ancient Egypt. This was a slight shadow drop on steam, so it
                    hasn't performed as well as the other titles yet, but I'm optimistic that it will do well in the
                    longer term.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold mb-1">2024: Mosaic Retrospective, Steam Dec 2024</h3>
                  <Badge className="mb-1">Fundraiser</Badge>
                  <p>
                    A free charity-fundraising mosaic game that I released to raise money for UNICEF. The game features
                    a round-up of major global news stories from 2024.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold mb-1">Proverbs, Steam Nov 2024</h3>
                  <div className="flex gap-2 mb-1">
                    <Badge variant="secondary">Rock Paper Shotgun</Badge>
                    <Badge variant="secondary">Automaton (JP)</Badge>
                  </div>
                  <p>
                    Building on the Mega Mosaic concept, I then released Proverbs, another huge minesweeper-like puzzle
                    where the player slowly reveals the 1559 painting "Netherlandish Proverbs" by Bruegel the Elder. The
                    game was extremely well received by players, maintaining a 100% positive review score up to around
                    250 reviews/3 months after launch.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold mb-1">Mega Mosaic, Steam May 2024</h3>
                  <p>
                    Mega Mosaic is a meditative puzzle game where players slowly solve an enormous minesweeper-like
                    puzzle. As players complete different regions of the puzzle, they're rewarded with pixel art
                    illustrations that reveal themselves, as well as earning nearly 100 achievements for various
                    challenges.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold mb-1">Logic Town, Steam Nov 2023</h3>
                  <p>
                    Logic Town is a cute and casual logic puzzle game. Players journey through 12 different themed areas
                    of a seaside town meeting different animal characters that live there. They'll solve challenging
                    Logic Puzzles, and get to redecorate dioramas of different shops and venues in the town that are in
                    need of repair. Since its launch I've designed and published 3 DLC expansions, and the game is about
                    to receive an update adding Daily Challenge Mode.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold mb-1">Sh*thead, Steam TBA</h3>
                  <p>
                    Sh*thead is a multiplayer focused card game based on the classic backpacker and playground
                    favourite. Players compete against up to 3 opponents in each match, where they can emote and chat
                    and show off their newly earned characters, while playing the game. As players win and earn
                    trophies, they'll work their way up a series of tiered leagues, with higher stakes and greater
                    rewards, as well as new rule variations that keep players.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="mb-6">
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                  <CardTitle>Senior Engineer</CardTitle>
                  <div className="flex items-center gap-2">
                    <Badge variant="outline">Jan 2022 - Feb 2023</Badge>
                  </div>
                </div>
                <CardDescription>Pocket Burger</CardDescription>
              </CardHeader>
              <CardContent>
                <p>
                  Rapid design and development of 5 different games taken from prototype up to soft-launch, covering a
                  range of genres including Puzzle, Merge, RPG and Board Games. Working with Entitas framework and
                  Metaplay backend. Since the studio was small, this role included much more hands-on game design
                  experience.
                </p>
              </CardContent>
            </Card>

            <Card className="mb-6">
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                  <CardTitle>Lead Client Engineer</CardTitle>
                  <div className="flex items-center gap-2">
                    <Badge variant="outline">Oct 2017 - Jul 2021</Badge>
                  </div>
                </div>
                <CardDescription>Hutch</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="font-semibold mb-1">F1® Manager</h3>
                  <p>
                    Led a team of 5 other engineers on this official licensed Formula One management game; from
                    prototyping through to our worldwide launch in May. F1 Manager is a multiplayer strategy game in
                    which you issue commands to your drivers in real-time, server-authoritative, 3D races. During
                    production, I took personal responsibility for work on the physics, AI and networking code that
                    powers races.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold mb-1">MMX Hill Dash 2</h3>
                  <p>
                    Joined the project during beta, creating a vehicle customisation system and store, and providing
                    development and bug fixing help during the push towards launch.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="mb-6">
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                  <CardTitle>Break for Travel</CardTitle>
                  <div className="flex items-center gap-2">
                    <Badge variant="outline">Mar 2017 - Sep 2017</Badge>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p>Backpacking through South-East Asia and Eastern Europe.</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                  <CardTitle>Client Engineer</CardTitle>
                  <div className="flex items-center gap-2">
                    <Badge variant="outline">Jan 2012 - Mar 2017</Badge>
                  </div>
                </div>
                <CardDescription>Firefly Studios</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="font-semibold mb-1">Stronghold Kingdoms OSX/iOS/Android port</h3>
                  <p>
                    I joined towards the end of the MacOS port, and became the lead developer on the iOS and Android
                    port, as well as providing ongoing support of the MacOS version. I also set up and maintained the
                    internal multi-node build pipeline using Unity, Jenkins, fastlane, for iOS, Android and MacOS. I
                    helped other developers to troubleshoot build and deployment issues.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold mb-1">
                    Stronghold Kingdoms PC, Stronghold Crusader 2 and Legacy Titles
                  </h3>
                  <p>
                    Front and back-end web development for Stronghold Kingdoms, Stronghold Crusader 2 and other legacy
                    titles. Admin of AWS services. Integration of Amazon, Mopay, SuperRewards payment providers.
                    Integration of Facebook, Amazon, Aeria login.
                  </p>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Education */}
          <section>
            <h2 className="text-2xl font-bold mb-6 uppercase">Education</h2>
            <Card>
              <CardContent className="pt-6">
                <ul className="space-y-2">
                  <li className="flex flex-col md:flex-row md:items-center gap-2">
                    <span className="font-medium">Web Design Technologies CertHE</span>
                    <span className="text-muted-foreground md:ml-auto">Birkbeck College</span>
                  </li>
                  <li className="flex flex-col md:flex-row md:items-center gap-2">
                    <span className="font-medium">Graphic Design Short Course</span>
                    <span className="text-muted-foreground md:ml-auto">Central St. Martins College</span>
                  </li>
                  <li className="flex flex-col md:flex-row md:items-center gap-2">
                    <span className="font-medium">Biochemistry BSc</span>
                    <span className="text-muted-foreground md:ml-auto">University of Leeds</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </section>
        </div>
      </div>
    </div>
  )
}
