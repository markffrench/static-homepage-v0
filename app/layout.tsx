import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Providers } from "./providers"
import { GoogleAnalytics } from "@next/third-parties/google"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Mark Ffrench - Game Developer",
  description: "Portfolio of Mark Ffrench, Game Developer and Founder of Divide The Plunder Ltd",
  generator: "v0.dev",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>{children}</Providers>
        <GoogleAnalytics gaId="G-FL81WBEE9V" />
      </body>
    </html>
  )
}
