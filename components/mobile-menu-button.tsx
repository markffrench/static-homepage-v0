"use client"

import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useMobileMenu } from "./mobile-menu-context"

export default function MobileMenuButton() {
  const { toggleMenu } = useMobileMenu()

  return (
    <div className="md:hidden">
      <Button variant="ghost" size="icon" onClick={toggleMenu} className="relative z-40">
        <Menu className="h-5 w-5" />
        <span className="sr-only">Open menu</span>
      </Button>
    </div>
  )
}
