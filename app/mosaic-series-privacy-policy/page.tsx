import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function MosaicSeriesPrivacyPolicy() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container py-10 max-w-4xl">
        {/* header */}
        <div className="mb-8">
          <Button variant="ghost" size="sm" asChild className="mb-4">
            <Link href="/" className="flex items-center">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Portfolio
            </Link>
          </Button>
          <h1 className="text-4xl font-bold tracking-tight mb-2 text-white">Privacy Policy</h1>
          <p className="text-xl text-muted-foreground">Mosaic Series Games</p>
          <p className="text-sm text-muted-foreground mt-2">Last updated: January 2025</p>
        </div>

        {/* body */}
        <div className="max-w-none text-white space-y-10">
          {/* Games covered */}
          <section>
            <h2 className="text-2xl font-bold mb-4 text-white">Games Covered by This Policy</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Mega Mosaic</li>
              <li>Proverbs</li>
              <li>2024: Mosaic Retrospective</li>
              <li>2025: Mosaic Retrospective</li>
              <li>Mosaic of the Pharaohs</li>
              <li>Mosaic of the Strange</li>
            </ul>
          </section>

          {/* Unity Analytics */}
          <section>
            <h2 className="text-2xl font-bold mb-4 text-white">Unity Analytics</h2>
            <p className="mb-4">
              All Mosaic titles use <strong>Unity Analytics</strong> to understand gameplay behaviour in aggregate and
              to improve puzzle design and performance. The data collected includes:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Session length, frequency and device language</li>
              <li>Puzzle-completion times and hint usage</li>
              <li>Crash &amp; error logs (with device model/OS version)</li>
              <li>Anonymous device identifiers (no name, email or exact location)</li>
            </ul>
            <p className="mt-4">
              Data is processed according to the{" "}
              <a
                href="https://unity3d.com/legal/privacy-policy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                Unity Privacy Policy
              </a>
              . We never receive or store personally identifiable information from Unity Analytics.
            </p>
          </section>

          {/* Ads with LevelPlay */}
          <section>
            <h2 className="text-2xl font-bold mb-4 text-white">Unity LevelPlay Advertising</h2>
            <p className="mb-4">
              Mosaic games may show optional rewarded video ads (e.g.&nbsp;for extra hints) using{" "}
              <strong>Unity LevelPlay</strong> (formerly ironSource). When ads are displayed:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Device advertising identifier (IDFA/GAID) is used for frequency capping &amp; fraud prevention</li>
              <li>Ad impressions, clicks &amp; rewards are logged for payout calculations</li>
              <li>Your coarse region (country/region) may be inferred from IP address</li>
            </ul>
            <p className="mt-4">
              You can opt-out of personalised ads at the device level (Android: “Opt-out of Ads Personalization”; iOS:
              “Limit Ad Tracking”). See the{" "}
              <a
                href="https://developers.ironsrc.com/ironsource-mobile/air/ironsource-mobile-privacy-policy/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                Unity LevelPlay Privacy Policy
              </a>{" "}
              for details.
            </p>
          </section>

          {/* Other standard sections (shortened for brevity) */}
          <section>
            <h2 className="text-2xl font-bold mb-4 text-white">Data Storage &amp; Security</h2>
            <p>
              Progress is stored locally and, if you use Steam, synchronised with Steam Cloud. We apply
              industry-standard safeguards to protect data.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-white">Your Rights</h2>
            <p>
              You may request access, correction or deletion of data we hold. Contact us at{" "}
              <a href="mailto:contact@dividetheplunder.com" className="text-primary hover:underline">
                contact@dividetheplunder.com
              </a>
              .
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-white">Contact</h2>
            <p>
              Divide The Plunder Ltd &mdash; United Kingdom
              <br />
              Email: contact@dividetheplunder.com
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}
