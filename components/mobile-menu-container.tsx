"use client"

import { useEffect } from "react"
import Link from "next/link"
import { X, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useMobileMenu } from "./mobile-menu-context"

export default function MobileMenuContainer() {
  const { isOpen, closeMenu } = useMobileMenu()

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

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 md:hidden">
      {/* Backdrop */}
      <div className="fixed inset-0 bg-black/80" onClick={closeMenu} />

      {/* Menu Panel */}
      <div
        className="fixed top-0 right-0 bottom-0 w-[300px] bg-navy border-l border-border/40 p-6 overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-end mb-6">
          <Button variant="ghost" size="icon" onClick={closeMenu}>
            <X className="h-5 w-5" />
            <span className="sr-only">Close menu</span>
          </Button>
        </div>

        <nav className="flex flex-col gap-6">
          <Link
            href="#games"
            className="text-lg font-medium uppercase hover:text-primary flex items-center"
            onClick={closeMenu}
          >
            Portfolio
          </Link>
          <Link
            href="#career"
            className="text-lg font-medium uppercase hover:text-primary flex items-center"
            onClick={closeMenu}
          >
            Career
          </Link>
          <Link
            href="https://docs.google.com/document/d/18I_f2vER_bodtedLrIuNN3pB5yL-yCca5t4xIoufkYw/edit?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="text-lg font-medium uppercase hover:text-primary flex items-center"
            onClick={closeMenu}
          >
            CV
          </Link>
          <Link
            href="https://store.steampowered.com/developer/divide-the-plunder"
            target="_blank"
            rel="noopener noreferrer"
            className="text-lg font-medium uppercase hover:text-primary flex items-center gap-2"
            onClick={closeMenu}
          >
            Steam
            <ExternalLink className="h-4 w-4" />
          </Link>
          <Link
            href="https://mark-ffrench.itch.io/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-lg font-medium uppercase hover:text-primary flex items-center gap-2"
            onClick={closeMenu}
          >
            Itch.io
            <ExternalLink className="h-4 w-4" />
          </Link>

          <div className="h-px bg-border/40 my-2"></div>

          <div className="text-sm text-muted-foreground">© 2025 Divide The Plunder Ltd.</div>
        </nav>
      </div>
    </div>
  )
}
