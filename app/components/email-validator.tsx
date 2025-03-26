"use client"

import { useState } from "react"
import { useActionState } from "react"
import { validateEmail, type EmailValidationResult } from "@/app/actions"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { CheckCircle, X, AlertTriangle } from "lucide-react"

const initialState: EmailValidationResult = {
  isValid: false,
  formatValid: false,
  domainExists: false,
  hasMxRecords: false,
  isDisposable: false,
  message: "",
}

export function EmailValidator() {
  const [state, formAction, isPending] = useActionState(validateEmail, initialState)
  const [showResults, setShowResults] = useState(false)

  const handleSubmit = (formData: FormData) => {
    setShowResults(true)
    formAction(formData)
  }

  return (
    <div className="flex flex-col space-y-4">
      <form action={handleSubmit} className="flex space-x-2">
        <Input type="email" name="email" placeholder="Enter email address" className="flex-1" required />
        <Button type="submit" disabled={isPending}>
          {isPending ? "Verifying..." : "Verify"}
        </Button>
      </form>

      {showResults && (
        <div className="rounded-lg border p-4 mt-4">
          <div className="text-sm font-medium">Verification Results</div>
          <div className="mt-2 space-y-2">
            <div className="flex items-center text-sm">
              {state.formatValid ? (
                <CheckCircle className="mr-2 h-4 w-4 text-green-500" />
              ) : (
                <X className="mr-2 h-4 w-4 text-red-500" />
              )}
              <span>Valid Format</span>
            </div>
            <div className="flex items-center text-sm">
              {state.domainExists ? (
                <CheckCircle className="mr-2 h-4 w-4 text-green-500" />
              ) : (
                <X className="mr-2 h-4 w-4 text-red-500" />
              )}
              <span>Domain Exists</span>
            </div>
            <div className="flex items-center text-sm">
              {state.hasMxRecords ? (
                <CheckCircle className="mr-2 h-4 w-4 text-green-500" />
              ) : (
                <X className="mr-2 h-4 w-4 text-red-500" />
              )}
              <span>Has Mail Servers</span>
            </div>
            <div className="flex items-center text-sm">
              {state.isCatchAll ? (
                <AlertTriangle className="mr-2 h-4 w-4 text-yellow-500" />
              ) : (
                <CheckCircle className="mr-2 h-4 w-4 text-green-500" />
              )}
              <span>Catch-all Domain</span>
            </div>
            <div className="flex items-center text-sm">
              {state.isDisposable ? (
                <X className="mr-2 h-4 w-4 text-red-500" />
              ) : (
                <CheckCircle className="mr-2 h-4 w-4 text-green-500" />
              )}
              <span>Disposable Email</span>
            </div>
            <div className="mt-3 pt-3 border-t text-sm font-medium">
              {state.isValid ? (
                <div className="text-green-600">This email appears to be valid and deliverable</div>
              ) : (
                <div className="text-red-600">{state.message || "This email may not be deliverable"}</div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

