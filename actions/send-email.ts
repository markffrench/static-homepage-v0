"use server"

import { z } from "zod"

// Define the form schema for validation
const formSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.string().email("Invalid email address"),
  subject: z.string().min(1, "Subject is required"),
  message: z.string().min(10, "Message must be at least 10 characters"),
})

export type FormState = {
  errors?: {
    firstName?: string[]
    lastName?: string[]
    email?: string[]
    subject?: string[]
    message?: string[]
    _form?: string[]
  }
  success?: boolean
  message?: string
}

export async function sendEmail(prevState: FormState, formData: FormData): Promise<FormState> {
  // Validate form data
  const validatedFields = formSchema.safeParse({
    firstName: formData.get("firstName"),
    lastName: formData.get("lastName"),
    email: formData.get("email"),
    subject: formData.get("subject"),
    message: formData.get("message"),
  })

  // Return errors if validation fails
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      success: false,
      message: "Please fix the errors above.",
    }
  }

  const { firstName, lastName, email, subject, message } = validatedFields.data

  try {
    // In a real implementation, you would use a service like Nodemailer, SendGrid, etc.
    // For this example, we'll simulate sending an email

    // Simulate network delay
    await new Promise((resolve) => setTimeout(resolve, 1500))

    // Log the email data (in production, this would be sent to an email service)
    console.log({
      to: "contact@dividetheplunder.com",
      from: email,
      subject: subject,
      text: `
        Name: ${firstName} ${lastName}
        Email: ${email}
        
        ${message}
      `,
    })

    // Return success state
    return {
      success: true,
      message: "Your message has been sent successfully!",
    }
  } catch (error) {
    // Return error state
    return {
      errors: {
        _form: ["Failed to send email. Please try again later."],
      },
      success: false,
      message: "An error occurred while sending your message.",
    }
  }
}
