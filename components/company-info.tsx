import Link from "next/link"
import { ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function CompanyInfo() {
  return (
    <section className="py-12 bg-navy-dark">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold tracking-tight uppercase sm:text-4xl mb-4">Divide The Plunder</h2>
          <p className="text-muted-foreground mb-6">
            Founded in August 2021, Divide The Plunder is an independent game studio focused on creating thoughtful
            puzzle games that challenge the mind without frustrating the player. My games feature procedurally
            generated puzzles of pure deduction, you never have to guess!
          </p>
        </div>
      </div>
    </section>
  )
}
