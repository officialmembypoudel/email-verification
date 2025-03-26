"use server"

import { z } from "zod"

// List of common disposable email domains
const disposableDomains = [
  "mailinator.com",
  "tempmail.com",
  "temp-mail.org",
  "guerrillamail.com",
  "throwawaymail.com",
  "yopmail.com",
  "10minutemail.com",
  "trashmail.com",
  "sharklasers.com",
  "dispostable.com",
  // Add more as needed
]

// Email validation schema
const emailSchema = z.string().email({ message: "Invalid email format" })

export type EmailValidationResult = {
  isValid: boolean
  formatValid: boolean
  domainExists: boolean
  hasMxRecords: boolean
  isCatchAll?: boolean
  isDisposable: boolean
  message?: string
}

export async function validateEmail(prevState: any, formData: FormData): Promise<EmailValidationResult> {
  const email = formData.get("email") as string

  // Default response structure
  const result: EmailValidationResult = {
    isValid: false,
    formatValid: false,
    domainExists: false,
    hasMxRecords: false,
    isDisposable: false,
  }

  try {
    // Step 1: Validate email format
    const validFormat = emailSchema.safeParse(email)
    result.formatValid = validFormat.success

    if (!validFormat.success) {
      result.message = "Invalid email format"
      return result
    }

    // Step 2: Extract domain
    const domain = email.split("@")[1]

    // Step 3: Check if domain is disposable
    result.isDisposable = disposableDomains.includes(domain.toLowerCase())

    // For domain existence and MX records, we'll use a simplified approach
    // since direct DNS lookups are causing issues

    // Step 4: Simple domain validation - check for common TLDs
    const commonTLDs = [".com", ".org", ".net", ".edu", ".gov", ".co", ".io", ".me", ".info", ".biz"]
    const hasTLD = commonTLDs.some((tld) => domain.endsWith(tld))

    // Step 5: Simple domain structure validation
    const validDomainFormat = /^[a-zA-Z0-9][a-zA-Z0-9-]{1,61}[a-zA-Z0-9]\.[a-zA-Z]{2,}$/.test(domain)

    result.domainExists = hasTLD && validDomainFormat

    // For demonstration purposes, we'll simulate MX record checks
    // In a production environment, you would use a proper email validation service
    result.hasMxRecords = result.domainExists

    // Simulate catch-all detection for common email providers
    result.isCatchAll =
      domain.includes("gmail.com") ||
      domain.includes("outlook.com") ||
      domain.includes("yahoo.com") ||
      domain.includes("hotmail.com")

    // Overall validity
    result.isValid = result.formatValid && result.domainExists && !result.isDisposable
    result.message = result.isValid ? "Email is valid" : "Email validation failed"

    return result
  } catch (error) {
    console.error("Email validation error:", error)
    result.message = "An error occurred during validation"
    return result
  }
}

