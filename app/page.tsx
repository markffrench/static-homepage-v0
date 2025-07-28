import Link from "next/link"
import { Github, Mail, ExternalLink, Twitter, Linkedin, Youtube } from "lucide-react"
import GameShowcase from "@/components/game-showcase"
import HeroSection from "@/components/hero-section"
import AboutSection from "@/components/about-section"
import ContactSection from "@/components/contact-section"
import CareerHighlights from "@/components/career-highlights"
import CompanyInfo from "@/components/company-info"
import MobileMenuButton from "@/components/mobile-menu-button"
import MobileMenuContainer from "@/components/mobile-menu-container"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Mobile Menu Container - Rendered at root level */}
      <MobileMenuContainer />

      <header className="sticky top-0 z-40 w-full border-b border-border/40 bg-navy/95 backdrop-blur supports-[backdrop-filter]:bg-navy/60">
        <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
          <div className="flex gap-2 items-center text-xl font-bold">
            <span>MARK FFRENCH</span>
          </div>
          <div className="flex flex-1 items-center justify-end space-x-4">
            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-6">
              <Link href="#games" className="text-sm font-medium uppercase hover:text-primary">
                Portfolio
              </Link>
              <Link href="#career" className="text-sm font-medium uppercase hover:text-primary">
                Career
              </Link>
              <Link
                href="https://docs.google.com/document/d/18I_f2vER_bodtedLrIuNN3pB5yL-yCca5t4xIoufkYw/edit?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium uppercase hover:text-primary"
              >
                CV
              </Link>
              <Link
                href="https://store.steampowered.com/developer/divide-the-plunder?utm_source=portfolio&utm_medium=website&utm_campaign=header_nav&utm_content=steam_developer"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium uppercase hover:text-primary flex items-center gap-1"
              >
                Steam
                <ExternalLink className="h-3 w-3" />
              </Link>
              <Link
                href="https://mark-ffrench.itch.io/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium uppercase hover:text-primary flex items-center gap-1"
              >
                Itch.io
                <ExternalLink className="h-3 w-3" />
              </Link>
            </nav>

            {/* Mobile Menu Button - Only the button is in the header */}
            <MobileMenuButton />
          </div>
        </div>
      </header>
      <main className="flex-1">
        <HeroSection />
        <CompanyInfo />
        <GameShowcase />
        <CareerHighlights />
        <AboutSection />
        <ContactSection />
      </main>
      <footer className="border-t border-border/40 py-6 md:py-0 bg-navy-dark">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-16 md:flex-row">
          <div className="flex flex-col md:flex-row items-center gap-4">
            <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
              © 2025 Divide The Plunder Ltd. All rights reserved.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 text-sm">
              <Link
                href="/logic-town-privacy-policy"
                className="text-muted-foreground hover:text-foreground hover:underline"
              >
                Logic Town Privacy Policy
              </Link>
              <span className="hidden sm:inline text-muted-foreground">|</span>
              <Link
                href="/mosaic-series-privacy-policy"
                className="text-muted-foreground hover:text-foreground hover:underline"
              >
                Mosaic Series Privacy Policy
              </Link>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Link
              href="https://github.com/markffrench/"
              target="_blank"
              rel="noreferrer"
              className="text-muted-foreground hover:text-foreground"
            >
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </Link>
            <Link
              href="https://www.linkedin.com/in/markffrench"
              target="_blank"
              rel="noreferrer"
              className="text-muted-foreground hover:text-foreground"
            >
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </Link>
            <Link
              href="https://x.com/Mark_Ff"
              target="_blank"
              rel="noreferrer"
              className="text-muted-foreground hover:text-foreground"
            >
              <Twitter className="h-5 w-5" />
              <span className="sr-only">Twitter</span>
            </Link>
            <Link
              href="https://www.youtube.com/@dividetheplunder2440"
              target="_blank"
              rel="noreferrer"
              className="text-muted-foreground hover:text-foreground"
            >
              <Youtube className="h-5 w-5" />
              <span className="sr-only">YouTube</span>
            </Link>
            <Link href="mailto:contact@dividetheplunder.com" className="text-muted-foreground hover:text-foreground">
              <Mail className="h-5 w-5" />
              <span className="sr-only">Email</span>
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
