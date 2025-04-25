"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  // Prevent scrolling when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => {
      document.body.style.overflow = ""
    }
  }, [isOpen])

  return (
    <div className="md:hidden">
      {/* Hamburger Button */}
      <Button variant="ghost" size="icon" onClick={toggleMenu} className="relative z-50">
        {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        <span className="sr-only">Toggle menu</span>
      </Button>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 z-40 bg-black/80"
            onClick={toggleMenu}
            style={{ top: 0, right: 0, bottom: 0, left: 0 }}
          />

          {/* Menu Panel */}
          <div
            className="fixed top-0 right-0 bottom-0 z-50 w-[300px] bg-navy border-l border-border/40 p-6 overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
            style={{ top: 0, right: 0, bottom: 0 }}
          >
            <div className="flex justify-end mb-6">
              <Button variant="ghost" size="icon" onClick={toggleMenu}>
                <X className="h-5 w-5" />
                <span className="sr-only">Close menu</span>
              </Button>
            </div>

            <nav className="flex flex-col gap-6">
              <Link
                href="#games"
                className="text-lg font-medium uppercase hover:text-primary flex items-center"
                onClick={toggleMenu}
              >
                Portfolio
              </Link>
              <Link
                href="#career"
                className="text-lg font-medium uppercase hover:text-primary flex items-center"
                onClick={toggleMenu}
              >
                Career
              </Link>
              <Link
                href="https://docs.google.com/document/d/18I_f2vER_bodtedLrIuNN3pB5yL-yCca5t4xIoufkYw/edit?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg font-medium uppercase hover:text-primary flex items-center"
                onClick={toggleMenu}
              >
                CV
              </Link>
              <Link
                href="https://store.steampowered.com/developer/divide-the-plunder"
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg font-medium uppercase hover:text-primary flex items-center gap-2"
                onClick={toggleMenu}
              >
                Steam
                <ExternalLink className="h-4 w-4" />
              </Link>
              <Link
                href="https://mark-ffrench.itch.io/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg font-medium uppercase hover:text-primary flex items-center gap-2"
                onClick={toggleMenu}
              >
                Itch.io
                <ExternalLink className="h-4 w-4" />
              </Link>

              <div className="h-px bg-border/40 my-2"></div>

              <div className="text-sm text-muted-foreground">© 2025 Divide The Plunder Ltd.</div>
            </nav>
          </div>
        </>
      )}
    </div>
  )
}
