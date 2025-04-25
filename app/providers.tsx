"use client"

import type { ReactNode } from "react"
import { MobileMenuProvider } from "@/components/mobile-menu-context"

export function Providers({ children }: { children: ReactNode }) {
  return <MobileMenuProvider>{children}</MobileMenuProvider>
}
