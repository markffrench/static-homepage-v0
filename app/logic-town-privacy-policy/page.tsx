import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function LogicTownPrivacyPolicy() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container py-10 max-w-4xl">
        <div className="mb-8">
          <Button variant="ghost" size="sm" asChild className="mb-4">
            <Link href="/" className="flex items-center">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Portfolio
            </Link>
          </Button>
          <h1 className="text-4xl font-bold tracking-tight mb-2">Privacy Policy</h1>
          <p className="text-xl text-muted-foreground">Logic Town</p>
          <p className="text-sm text-muted-foreground mt-2">Last updated: January 2025</p>
        </div>

        <div className="max-w-none text-white">
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-white">Introduction</h2>
            <p className="mb-4 text-white">
              This Privacy Policy describes how Divide The Plunder Ltd ("we", "our", or "us") collects, uses, and
              protects your information when you play Logic Town ("the Game").
            </p>
            <p className="mb-4 text-white">
              We are committed to protecting your privacy and ensuring you have a positive experience while playing our
              game.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-white">Information We Collect</h2>

            <h3 className="text-xl font-semibold mb-3 text-white">Automatically Collected Information</h3>
            <p className="mb-4 text-white">When you play Logic Town, we may automatically collect:</p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li className="text-white">Game progress and statistics (levels completed, achievements unlocked)</li>
              <li className="text-white">Device information (operating system, hardware specifications)</li>
              <li className="text-white">Gameplay analytics (time spent playing, feature usage)</li>
              <li className="text-white">Technical data for bug fixes and performance improvements</li>
            </ul>

            <h3 className="text-xl font-semibold mb-3 text-white">Information You Provide</h3>
            <p className="mb-4 text-white">We may collect information you voluntarily provide, such as:</p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li className="text-white">Feedback or support requests</li>
              <li className="text-white">User-generated content (if applicable)</li>
              <li className="text-white">Communication with our support team</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-white">How We Use Your Information</h2>
            <p className="mb-4 text-white">We use the collected information to:</p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li className="text-white">Provide and maintain the game experience</li>
              <li className="text-white">Save your game progress and settings</li>
              <li className="text-white">Improve game performance and fix bugs</li>
              <li className="text-white">Analyze gameplay patterns to enhance the game</li>
              <li className="text-white">Provide customer support</li>
              <li className="text-white">Comply with legal obligations</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-white">Data Storage and Security</h2>
            <p className="mb-4 text-white">
              Your game data is stored locally on your device. We implement appropriate security measures to protect
              your information against unauthorized access, alteration, disclosure, or destruction.
            </p>
            <p className="mb-4 text-white">
              We do not store personal information on our servers unless explicitly required for game functionality.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-white">Third-Party Services</h2>
            <p className="mb-4 text-white">Logic Town uses the following third-party services:</p>

            <h3 className="text-xl font-semibold mb-3 text-white">Unity Analytics</h3>
            <p className="mb-4 text-white">
              We use Unity Analytics to collect gameplay data and understand how players interact with Logic Town. This
              includes:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li className="text-white">Session length and frequency</li>
              <li className="text-white">Level progression and completion rates</li>
              <li className="text-white">Feature usage and player behavior patterns</li>
              <li className="text-white">Device performance and technical specifications</li>
              <li className="text-white">Crash reports and error logs</li>
            </ul>
            <p className="mb-4 text-white">
              Unity Analytics data is processed according to Unity's Privacy Policy. No personally identifiable
              information is collected through Unity Analytics.
            </p>

            <h3 className="text-xl font-semibold mb-3 text-white">Unity LevelPlay (Advertising)</h3>
            <p className="mb-4 text-white">
              Logic Town may display advertisements through Unity LevelPlay (formerly ironSource). When ads are shown:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li className="text-white">Ad interaction data is collected (views, clicks, completions)</li>
              <li className="text-white">Device advertising identifiers may be used for ad targeting</li>
              <li className="text-white">IP address and general location data may be processed</li>
              <li className="text-white">Device information is shared with advertising partners</li>
            </ul>
            <p className="mb-4 text-white">
              You can opt-out of personalized advertising through your device settings. Advertising data is processed
              according to Unity's Privacy Policy and the privacy policies of individual ad networks.
            </p>

            <h3 className="text-xl font-semibold mb-3 text-white">Other Services</h3>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li className="text-white">Platform services (Steam, mobile app stores)</li>
              <li className="text-white">Cloud save synchronization</li>
              <li className="text-white">Achievement and leaderboard systems</li>
            </ul>

            <p className="mb-4 text-white">
              These third-party services have their own privacy policies, and we encourage you to review them:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li className="text-white">
                <a
                  href="https://unity3d.com/legal/privacy-policy"
                  className="text-primary hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Unity Privacy Policy
                </a>
              </li>
              <li className="text-white">
                <a
                  href="https://developers.ironsrc.com/ironsource-mobile/air/ironsource-mobile-privacy-policy/"
                  className="text-primary hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Unity LevelPlay Privacy Policy
                </a>
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-white">Children's Privacy</h2>
            <p className="mb-4 text-white">
              Logic Town is suitable for all ages. We do not knowingly collect personal information from children under
              13 without parental consent. If you believe we have collected information from a child under 13, please
              contact us immediately.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-white">Your Rights</h2>
            <p className="mb-4 text-white">You have the right to:</p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li className="text-white">Access the information we have about you</li>
              <li className="text-white">Request correction of inaccurate information</li>
              <li className="text-white">Request deletion of your information</li>
              <li className="text-white">Opt-out of certain data collection practices</li>
            </ul>
            <p className="mb-4 text-white">
              To exercise these rights, please contact us using the information provided below.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-white">Advertising and Opt-Out Options</h2>
            <p className="mb-4 text-white">
              If Logic Town displays advertisements, you have the following options to control your advertising
              experience:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li className="text-white">
                <strong>iOS:</strong> Go to Settings &gt; Privacy &amp; Security &gt; Apple Advertising &gt; Limit Ad
                Tracking
              </li>
              <li className="text-white">
                <strong>Android:</strong> Go to Settings &gt; Google &gt; Ads &gt; Opt out of Ads Personalization
              </li>
              <li className="text-white">
                <strong>In-Game:</strong> Look for advertising preferences in the game's settings menu (if available)
              </li>
            </ul>
            <p className="mb-4 text-white">
              Opting out of personalized advertising will not reduce the number of ads you see, but they may be less
              relevant to your interests.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-white">Changes to This Privacy Policy</h2>
            <p className="mb-4 text-white">
              We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new
              Privacy Policy on this page and updating the "Last updated" date.
            </p>
            <p className="mb-4 text-white">
              We encourage you to review this Privacy Policy periodically for any changes.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-white">Contact Us</h2>
            <p className="mb-4 text-white">
              If you have any questions about this Privacy Policy or our privacy practices, please contact us:
            </p>
            <div className="bg-navy-light p-4 rounded-lg">
              <p className="mb-2 text-white">
                <strong>Divide The Plunder Ltd</strong>
              </p>
              <p className="mb-2 text-white">
                Email:{" "}
                <a href="mailto:contact@dividetheplunder.com" className="text-primary hover:underline">
                  contact@dividetheplunder.com
                </a>
              </p>
              <p className="mb-2 text-white">
                Website:{" "}
                <a href="https://www.markffrench.com" className="text-primary hover:underline">
                  www.markffrench.com
                </a>
              </p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-white">Legal Basis (EU Users)</h2>
            <p className="mb-4 text-white">
              For users in the European Union, our legal basis for processing your personal data includes:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li className="text-white">
                <strong>Legitimate Interest:</strong> To provide and improve the game experience
              </li>
              <li className="text-white">
                <strong>Contract Performance:</strong> To deliver the game services you've requested
              </li>
              <li className="text-white">
                <strong>Consent:</strong> Where you have explicitly agreed to certain data processing activities
              </li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  )
}
