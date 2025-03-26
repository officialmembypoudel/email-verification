import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, Mail, Shield, AlertTriangle } from "lucide-react"
import Link from "next/link"
import { EmailValidator } from "./components/email-validator"
import { BulkValidator } from "./components/bulk-validator"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center">
          <div className="mr-4 flex items-center gap-2 font-bold text-red-500 text-xl">
            <Mail className="h-6 w-6" />
            <span>Verifoir</span>
          </div>
          <nav className="flex flex-1 items-center justify-end space-x-4">
            <a href="#features" className="text-sm font-medium hover:text-primary">
              Features
            </a>
            <a href="#pricing" className="text-sm font-medium hover:text-primary">
              Pricing
            </a>
            <a href="#docs" className="text-sm font-medium hover:text-primary">
              Docs
            </a>
            <Button variant="outline" size="sm" className="mr-2">
              Log in
            </Button>
            <Button size="sm">Sign up</Button>
          </nav>
        </div>
      </header>

      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-background to-muted">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Verify Emails with Confidence
                </h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  Our powerful email verification tool helps you validate emails, reduce bounces, and improve your
                  deliverability.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Button size="lg" className="w-full sm:w-auto">
                    Get Started
                  </Button>
                  <Button variant="outline" size="lg" className="w-full sm:w-auto">
                    Learn More
                  </Button>
                </div>
              </div>

              <Card className="w-full">
                <CardHeader>
                  <CardTitle>Verify Emails</CardTitle>
                  <CardDescription>Check if an email is valid, exists, or is spam</CardDescription>
                </CardHeader>
                <CardContent>
                  <Tabs defaultValue="single" className="w-full">
                    <TabsList className="grid w-full grid-cols-2">
                      <TabsTrigger value="single">Single Email</TabsTrigger>
                      <TabsTrigger value="bulk">Bulk Import</TabsTrigger>
                    </TabsList>

                    <TabsContent value="single" className="space-y-4">
                      <div className="flex flex-col space-y-4 pt-4">
                        <EmailValidator />
                      </div>
                    </TabsContent>

                    <TabsContent value="bulk" className="space-y-4">
                      <BulkValidator />
                    </TabsContent>
                  </Tabs>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section id="features" className="w-full py-12 md:py-24 bg-background">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Powerful Email Verification Features
                </h2>
                <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mx-auto">
                  Our comprehensive verification system checks multiple aspects of email addresses
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-3 lg:gap-12 mt-12">
              <div className="flex flex-col items-center space-y-2 rounded-lg p-4">
                <div className="rounded-full bg-primary/10 p-3">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Syntax Validation</h3>
                <p className="text-center text-muted-foreground">
                  Verify email format and structure to ensure it follows proper standards
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg p-4">
                <div className="rounded-full bg-primary/10 p-3">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Domain Verification</h3>
                <p className="text-center text-muted-foreground">
                  Check if the email domain exists and has valid mail servers
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg p-4">
                <div className="rounded-full bg-primary/10 p-3">
                  <AlertTriangle className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Spam Detection</h3>
                <p className="text-center text-muted-foreground">
                  Identify disposable, temporary, and spam email addresses
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="pricing" className="w-full py-12 md:py-24 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Simple, Transparent Pricing
                </h2>
                <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mx-auto">
                  Choose the plan that works best for your needs
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-3 lg:gap-8 mt-12">
              {[
                {
                  title: "Starter",
                  price: "$19",
                  description: "Perfect for small businesses and startups",
                  features: [
                    "1,000 verifications/month",
                    "Single email verification",
                    "Basic reporting",
                    "Email support",
                  ],
                },
                {
                  title: "Professional",
                  price: "$49",
                  description: "Ideal for growing businesses",
                  features: [
                    "10,000 verifications/month",
                    "Bulk import (CSV, JSON, Excel)",
                    "Advanced reporting",
                    "Priority support",
                  ],
                },
                {
                  title: "Enterprise",
                  price: "$99",
                  description: "For large organizations with high volume",
                  features: [
                    "50,000 verifications/month",
                    "API access",
                    "Custom integrations",
                    "Dedicated account manager",
                  ],
                },
              ].map((plan, index) => (
                <Card key={index} className={index === 1 ? "border-primary" : ""}>
                  <CardHeader>
                    <CardTitle>{plan.title}</CardTitle>
                    <div className="text-3xl font-bold">
                      {plan.price}
                      <span className="text-sm font-normal text-muted-foreground">/month</span>
                    </div>
                    <CardDescription>{plan.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm">
                      {plan.features.map((feature, i) => (
                        <li key={i} className="flex items-center">
                          <CheckCircle className="mr-2 h-4 w-4 text-primary" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Button className="w-full mt-6" variant={index === 1 ? "default" : "outline"}>
                      Get Started
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="docs" className="w-full py-12 md:py-24 bg-background">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Documentation & Resources
                </h2>
                <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mx-auto">
                  Learn how to get the most out of our email verification service
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:gap-12 mt-12">
              <Card>
                <CardHeader>
                  <CardTitle>API Documentation</CardTitle>
                  <CardDescription>Integrate our verification service into your applications</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Our comprehensive API documentation provides all the information you need to integrate email
                    verification into your workflow.
                  </p>
                  <Button variant="outline">View API Docs</Button>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>User Guides</CardTitle>
                  <CardDescription>Step-by-step instructions for using our service</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Learn how to use all features of our platform with detailed guides and tutorials.
                  </p>
                  <Button variant="outline">Browse Guides</Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <footer className="w-full border-t py-6 md:py-0">
        <div className="container flex flex-col md:flex-row items-center justify-between gap-4 md:h-16">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Verifoir. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link href="#" className="text-sm text-muted-foreground hover:underline">
              Terms
            </Link>
            <Link href="#" className="text-sm text-muted-foreground hover:underline">
              Privacy
            </Link>
            <Link href="#" className="text-sm text-muted-foreground hover:underline">
              Contact
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}

