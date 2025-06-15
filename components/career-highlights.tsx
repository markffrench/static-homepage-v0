import Image from "next/image"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink } from "lucide-react"

interface CareerProject {
  id: string
  title: string
  company: string
  role: string
  period: string
  description: string
  image: string
  link: string
  technologies: string[]
  achievements?: string[]
}

const careerProjects: CareerProject[] = [
  {
    id: "ticket-to-ride",
    title: "Ticket to Ride",
    company: "Marmalade Games Studio",
    role: "Lead Engineer",
    period: "2023 - Present",
    description:
      "Led a team of 4-6 developers from the initial PC/Mac launch through to Mobile, Nintendo Switch, Xbox and PlayStation versions, and 10 DLC expansions. The game features real-time and asynchronous multiplayer, with a competitive tiered leaderboard system.",
    image: "https://fy5ikdxljqpixjc2.public.blob.vercel-storage.com/ticket-to-ride-ENsXgzGtPNRvEUO8AOuPnXcGQGGAvX.jpg",
    link: "https://store.steampowered.com/app/1717110/Ticket_to_Ride/",
    technologies: ["Unity", "C#", "Multiplayer", "Cross-Platform"],
    achievements: ["Launched on 6 platforms", "10 DLC expansions", "Real-time & asynchronous multiplayer"],
  },
  {
    id: "f1-clash",
    title: "F1® Clash (formerly F1 Manager)",
    company: "Hutch",
    role: "Lead Client Engineer",
    period: "2017 - 2021",
    description:
      "Led a team of 5 engineers on this official licensed Formula One management game; from prototyping through to worldwide launch. F1 Clash is a multiplayer strategy game in which you issue commands to your drivers in real-time, server-authoritative, 3D races.",
    image: "https://fy5ikdxljqpixjc2.public.blob.vercel-storage.com/f1-clash-vWZ7wcsrOBxKdMD8g4e3dezqGc2iwd.webp",
    link: "https://www.f1clash.com/",
    technologies: ["Unity", "C#", "Real-time Networking", "Physics"],
    achievements: [
      "Responsible for physics, AI and networking",
      "Official F1 licensed title",
      "Server-authoritative multiplayer",
    ],
  },
  {
    id: "stronghold-kingdoms",
    title: "Stronghold Kingdoms",
    company: "Firefly Studios",
    role: "Client Engineer",
    period: "2012 - 2017",
    description:
      "Ported this popular MMO strategy game from a Windows Forms desktop application to Unity on iOS and Android, as well as providing ongoing support for the MacOS version. Set up and maintained the internal multi-node build pipeline using Unity, Jenkins, and fastlane for iOS, Android and MacOS.",
    image:
      "https://fy5ikdxljqpixjc2.public.blob.vercel-storage.com/stronghold-kingdoms-47410-header-2WHdoFzcLqmzgRPMIDLy43moocqq9e.jpg",
    link: "https://www.strongholdkingdoms.com/",
    technologies: ["Unity", "C#", "iOS", "Android", "CI/CD"],
    achievements: ["Led mobile port development", "Built multi-node build pipeline", "Cross-platform deployment"],
  },
]

export default function CareerHighlights() {
  return (
    <section id="career" className="py-16 md:py-24 bg-navy-dark">
      <div className="container">
        <div className="flex flex-col items-center text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight uppercase sm:text-4xl mb-4">Career Highlights</h2>
          <p className="text-muted-foreground max-w-2xl">
            Key projects from my professional career working with established studios on major titles.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {careerProjects.map((project) => (
            <Card key={project.id} className="overflow-hidden bg-navy border-border/40 h-full flex flex-col">
              <Link href={project.link} target="_blank" rel="noopener noreferrer" className="block">
                <div className="relative overflow-hidden" style={{ paddingBottom: "46.7%" }}>
                  <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy to-transparent opacity-60"></div>
                  <div className="absolute bottom-0 left-0 p-4">
                    <Badge variant="secondary" className="bg-primary text-white">
                      {project.period}
                    </Badge>
                  </div>
                </div>
              </Link>
              <CardHeader className="pb-2">
                <div className="space-y-1">
                  <CardTitle className="text-xl">{project.title}</CardTitle>
                  <CardDescription>
                    <span className="block">{project.company}</span>
                    <span className="font-medium text-primary">{project.role}</span>
                  </CardDescription>
                </div>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col">
                <p className="text-sm text-muted-foreground mb-4">{project.description}</p>

                {project.achievements && (
                  <div className="mt-auto">
                    <h4 className="text-sm font-medium mb-2">Key Achievements:</h4>
                    <ul className="text-sm text-muted-foreground list-disc pl-5 space-y-1">
                      {project.achievements.map((achievement, index) => (
                        <li key={index}>{achievement}</li>
                      ))}
                    </ul>
                  </div>
                )}

                <div className="flex flex-wrap gap-2 mt-4">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="outline" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <div className="p-4 pt-0 mt-auto">
                <Button variant="outline" size="sm" className="w-full" asChild>
                  <Link href={project.link} target="_blank" rel="noopener noreferrer">
                    <span>Visit Website</span>
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
