"use client"

import { useState } from "react"
import { Mail } from "lucide-react"
import { useActionState } from "react"
import { toast } from "@/components/ui/use-toast"
import { sendEmail, type FormState } from "@/actions/send-email"
import { useEffect } from "react"

export default function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formState, formAction] = useActionState<FormState, FormData>(sendEmail, {})
  const [isCompleted, setIsCompleted] = useState(false)

  // Effect to handle form state changes
  useEffect(() => {
    if (formState.success) {
      setIsCompleted(true)
      toast({
        title: "Message sent!",
        description: "Thanks for reaching out. We'll get back to you soon.",
      })
    }
    setIsSubmitting(false)
  }, [formState])

  return (
    <section id="contact" className="py-16 md:py-24 bg-navy-light">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight uppercase sm:text-4xl mb-4">Get In Touch</h2>
          <p className="text-muted-foreground">
            Interested in collaborating or have questions about my games? I'd love to hear from you!
          </p>
        </div>

        <div className="mx-auto max-w-md text-center">
          <div className="flex justify-center mb-4">
            <div className="rounded-full bg-primary/10 p-3">
              <Mail className="h-6 w-6 text-primary" />
            </div>
          </div>
          <p className="font-medium text-lg mb-2">Email</p>
          <p className="text-muted-foreground">
            <a href="mailto:contact@dividetheplunder.com" className="hover:text-primary">
              contact@dividetheplunder.com
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}
