"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ScrollAnimation } from "@/components/scroll-animations"
import { Check, Code, Database, Globe, Rocket, Zap } from "lucide-react"

export default function MVPDevelopmentPage() {
  return (
    <div className="noise-bg">
      {/* Hero Section */}
      <section className="py-24">
        <div className="container">
          <ScrollAnimation>
            <div className="text-center mb-16">
              <div className="text-6xl mb-6">🚀</div>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
                MVP <span className="gradient-text">Development</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
                Turn your idea into a working minimum viable product. Perfect for validating concepts and getting to market fast.
              </p>
              <div className="text-2xl font-bold text-primary mb-8">Starting from $900</div>
              <Button size="lg" className="text-lg px-8">
                <Link href="/contact">Get Free Launch Consultation</Link>
              </Button>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-24 bg-muted">
        <div className="container">
          <ScrollAnimation>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">What's Included</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Everything you need to launch your MVP and start validating your idea with real users.
              </p>
            </div>
          </ScrollAnimation>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ScrollAnimation delay={100}>
              <div className="brutalist-card p-6">
                <div className="bg-primary/10 p-3 rounded-full w-fit mb-4">
                  <Globe className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Web Applications</h3>
                <p className="text-muted-foreground">
                  Responsive web apps built with modern frameworks like React, Next.js, or Vue.js for optimal performance.
                </p>
              </div>
            </ScrollAnimation>

            <ScrollAnimation delay={200}>
              <div className="brutalist-card p-6">
                <div className="bg-secondary/10 p-3 rounded-full w-fit mb-4">
                  <Database className="h-6 w-6 text-secondary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Database & APIs</h3>
                <p className="text-muted-foreground">
                  Complete backend setup with database design, API endpoints, and user authentication systems.
                </p>
              </div>
            </ScrollAnimation>

            <ScrollAnimation delay={300}>
              <div className="brutalist-card p-6">
                <div className="bg-accent/10 p-3 rounded-full w-fit mb-4">
                  <Rocket className="h-6 w-6 text-accent" />
                </div>
                <h3 className="text-xl font-bold mb-2">Launch Ready</h3>
                <p className="text-muted-foreground">
                  Deployed and ready for users with proper hosting, domain setup, and performance optimization.
                </p>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-24">
        <div className="container">
          <ScrollAnimation>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Our MVP Process</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                From idea to launch in 3-6 weeks with our proven development process.
              </p>
            </div>
          </ScrollAnimation>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <ScrollAnimation delay={100}>
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center text-white font-bold text-xl mb-4 mx-auto">
                  1
                </div>
                <h3 className="text-xl font-bold mb-2">Discovery</h3>
                <p className="text-muted-foreground">
                  We understand your idea, target users, and core features needed for validation.
                </p>
              </div>
            </ScrollAnimation>

            <ScrollAnimation delay={200}>
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-secondary flex items-center justify-center text-secondary-foreground font-bold text-xl mb-4 mx-auto">
                  2
                </div>
                <h3 className="text-xl font-bold mb-2">Design</h3>
                <p className="text-muted-foreground">
                  Create wireframes and user flows focused on the essential user journey.
                </p>
              </div>
            </ScrollAnimation>

            <ScrollAnimation delay={300}>
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-accent flex items-center justify-center text-accent-foreground font-bold text-xl mb-4 mx-auto">
                  3
                </div>
                <h3 className="text-xl font-bold mb-2">Build</h3>
                <p className="text-muted-foreground">
                  Develop your MVP with weekly demos and continuous feedback integration.
                </p>
              </div>
            </ScrollAnimation>

            <ScrollAnimation delay={400}>
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center text-white font-bold text-xl mb-4 mx-auto">
                  4
                </div>
                <h3 className="text-xl font-bold mb-2">Launch</h3>
                <p className="text-muted-foreground">
                  Deploy your MVP and help you start collecting user feedback and data.
                </p>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Features List */}
      <section className="py-24 bg-muted">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <ScrollAnimation animation="fade-in-left">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Perfect for Startups</h2>
              <p className="text-xl text-muted-foreground mb-8">
                Our MVP development service is designed specifically for founders who need to validate their ideas quickly and cost-effectively.
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold">Fast Time to Market</h3>
                    <p className="text-muted-foreground">Launch in 3-6 weeks, not months</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold">Startup-Friendly Pricing</h3>
                    <p className="text-muted-foreground">Affordable rates that won't drain your runway</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold">Scalable Foundation</h3>
                    <p className="text-muted-foreground">Built to grow with your business</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold">User-Focused Design</h3>
                    <p className="text-muted-foreground">Optimized for user validation and feedback</p>
                  </div>
                </div>
              </div>
            </ScrollAnimation>

            <ScrollAnimation animation="fade-in-right">
              <div className="brutalist-border overflow-hidden rounded-lg">
                <Image
                  src="/home.jpg"
                  alt="MVP Development Process"
                  width={600}
                  height={400}
                  className="w-full h-auto"
                />
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="container">
          <div className="brutalist-card p-12 text-center max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to Build Your MVP?</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Let's turn your idea into a working product that you can test with real users. Get started with a free consultation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8">
                <Link href="/contact">Get Free Launch Consultation</Link>
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8">
                <Link href="/packages">View All Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}