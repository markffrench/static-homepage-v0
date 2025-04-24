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
            Founded in August 2021, Divide The Plunder is an independent game studio focused on creating thoughtful and relaxing puzzle games. My puzzles all feature smart procedurally generated solutions, making them works of <i>pure deduction</i>. You <b>never</b> have to guess!
          </p>
        </div>
      </div>
    </section>
  )
}
