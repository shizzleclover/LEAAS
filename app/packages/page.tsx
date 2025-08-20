"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

import {
  Check,
  Database,
  Globe,
  Rocket,
  Zap,
  Clock,
  Users
} from "lucide-react"

const services = [
  {
    name: "MVP Development",
    emoji: "🚀",
    price: "Starting from $900",
    description: "Turn your idea into a working product. Perfect for validating concepts and getting to market fast.",
    features: [
      "Web applications & landing pages",
      "User authentication & basic features",
      "Database setup & API integration",
      "Responsive design for all devices",
      "Launch-ready deployment"
    ],
    icon: <Globe className="h-8 w-8" />,
    link: "/services/mvp-development"
  },
  {
    name: "Mobile Apps",
    emoji: "📱",
    price: "Starting from $1,500",
    description: "Native iOS and Android apps, or cross-platform solutions that work everywhere.",
    features: [
      "Native iOS & Android development",
      "Cross-platform React Native/Flutter",
      "App store optimization & submission",
      "Push notifications & offline support",
      "Backend integration & APIs"
    ],
    icon: <Rocket className="h-8 w-8" />,
    popular: true,
    link: "/services/mobile-apps"
  },
  {
    name: "Custom Software",
    emoji: "⚡",
    price: "Starting from $2,000",
    description: "Complex SaaS platforms, internal tools, and enterprise-grade solutions tailored to your needs.",
    features: [
      "SaaS platforms & dashboards",
      "Internal tools & automation",
      "AI/ML integration & analytics",
      "Microservices architecture",
      "Enterprise security & scaling"
    ],
    icon: <Database className="h-8 w-8" />,
    link: "/services/custom-software"
  },
  {
    name: "Custom Pricing",
    emoji: "🔧",
    price: "Let's Discuss",
    description: "Have unique requirements? Let's create a custom solution tailored specifically to your needs and budget.",
    features: [
      "Fully customized development approach",
      "Flexible pricing based on your budget",
      "Scalable team size and timeline",
      "Specialized technology requirements",
      "Enterprise-level support & consulting"
    ],
    icon: <Users className="h-8 w-8" />,
    isCustom: true
  }
]

export default function PackagesPage() {

  return (
    <div className="noise-bg">
      {/* Hero Section */}
      <section className="py-24">
        <div className="container">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
              Startup-Friendly <span className="gradient-text">Pricing</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Every project is unique. Our pricing starts at $900, and we'll tailor a solution based on your needs. We are your plug-and-play product + dev team.
            </p>
            <div className="bg-muted/50 p-6 rounded-lg max-w-2xl mx-auto">
              <p className="text-lg font-medium">
                💡 <strong>Why this works:</strong> No scary upfront costs, room for negotiation, and pricing that scales with your business size.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {services.map((service, index) => (
              <div key={service.name} className="h-full">
                <div className={`brutalist-card p-6 h-full flex flex-col ${service.popular ? "border-primary ring-2 ring-primary/20" : ""} ${service.isCustom ? "border-accent ring-2 ring-accent/20" : ""} relative`}>
                  {service.popular && (
                    <div className="absolute -top-4 right-4 bg-primary text-primary-foreground px-3 py-1 text-sm font-bold rounded-full z-10">
                      Most Popular
                    </div>
                  )}
                  {service.isCustom && (
                    <div className="absolute -top-4 right-4 bg-accent text-accent-foreground px-3 py-1 text-sm font-bold rounded-full z-10">
                      Flexible
                    </div>
                  )}
                  
                  <div className="text-center mb-6">
                    <div className="text-4xl mb-4">{service.emoji}</div>
                    <h3 className="text-xl font-bold mb-2">{service.name}</h3>
                    <div className="text-xl font-bold text-primary mb-4">{service.price}</div>
                    <p className="text-muted-foreground text-sm">{service.description}</p>
                  </div>

                  <div className="space-y-2 mb-6 flex-grow">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <Check className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-xs">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="space-y-2">
                    {service.link && (
                      <Button variant="outline" className="w-full text-sm" asChild>
                        <Link href={service.link}>Learn More</Link>
                      </Button>
                    )}
                    <Button className={`w-full text-sm ${service.popular ? "bg-primary" : ""} ${service.isCustom ? "bg-accent" : ""}`} asChild>
                      <Link href="/contact">Get Free Launch Consultation</Link>
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Pricing Section */}
      <section className="py-24">
        <div className="container">
          <div className="brutalist-card p-12 max-w-4xl mx-auto text-center">
            <div className="text-5xl mb-6">🔧</div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Need Something Different?</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Every startup is unique. If our standard services don't fit your specific needs, let's create a custom solution together.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="bg-primary/10 p-3 rounded-full w-fit mx-auto mb-3">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-bold mb-2">Flexible Team Size</h3>
                <p className="text-sm text-muted-foreground">Scale from 1 developer to a full team based on your needs</p>
              </div>
              <div className="text-center">
                <div className="bg-secondary/10 p-3 rounded-full w-fit mx-auto mb-3">
                  <Clock className="h-6 w-6 text-secondary" />
                </div>
                <h3 className="font-bold mb-2">Custom Timeline</h3>
                <p className="text-sm text-muted-foreground">Work within your launch deadlines and budget constraints</p>
              </div>
              <div className="text-center">
                <div className="bg-accent/10 p-3 rounded-full w-fit mx-auto mb-3">
                  <Zap className="h-6 w-6 text-accent" />
                </div>
                <h3 className="font-bold mb-2">Specialized Tech</h3>
                <p className="text-sm text-muted-foreground">Unique technology requirements or industry-specific solutions</p>
              </div>
            </div>

            <Button size="lg" className="text-lg px-8">
              <Link href="/contact">Discuss Custom Requirements</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-24 bg-muted">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold mb-4">Why Choose LEAAS?</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We are your plug-and-play product + dev team. Here's why founders choose us over hiring.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="brutalist-card p-8 text-center">
              <div className="bg-primary/10 p-4 rounded-full w-fit mx-auto mb-6">
                <Zap className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Build and Launch in Weeks</h3>
              <p className="text-muted-foreground">
                While others spend months assembling teams, we get your product to market fast with proven processes and experienced developers.
              </p>
            </div>

            <div className="brutalist-card p-8 text-center">
              <div className="bg-secondary/10 p-4 rounded-full w-fit mx-auto mb-6">
                <Users className="h-8 w-8 text-secondary" />
              </div>
              <h3 className="text-2xl font-bold mb-4">No Hiring Hassle</h3>
              <p className="text-muted-foreground">
                Skip recruitment, onboarding, and management overhead. Focus on your business while we handle the technical execution.
              </p>
            </div>

            <div className="brutalist-card p-8 text-center">
              <div className="bg-accent/10 p-4 rounded-full w-fit mx-auto mb-6">
                <Clock className="h-8 w-8 text-accent" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Startup-Friendly Pricing</h3>
              <p className="text-muted-foreground">
                Transparent pricing that scales with your business. No hidden costs, no equity required. Pay for results, not overhead.
              </p>
            </div>
          </div>

          <div className="text-center mt-16">
            <div className="bg-primary/5 p-8 rounded-lg max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold mb-4">Ready to Launch Your Idea?</h3>
              <p className="text-lg text-muted-foreground mb-6">
                Every project is unique. Let's discuss your specific needs and create a custom solution that fits your budget and timeline.
              </p>
              <Button size="lg" className="text-lg px-8">
                <Link href="/contact">Get Free Launch Consultation</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Common questions about working with your startup launch partner.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="brutalist-card p-6">
              <h3 className="text-xl font-bold mb-2">How fast can you launch my product?</h3>
              <p className="text-muted-foreground">
                Most MVPs launch in 3-6 weeks, mobile apps in 6-10 weeks, and custom software in 8-12 weeks. We'll give you an exact timeline during your free consultation.
              </p>
            </div>

            <div className="brutalist-card p-6">
              <h3 className="text-xl font-bold mb-2">What if I need changes after launch?</h3>
              <p className="text-muted-foreground">
                We offer ongoing development as a service. Stay on as your fractional tech team for iterations, new features, and scaling as your business grows.
              </p>
            </div>

            <div className="brutalist-card p-6">
              <h3 className="text-xl font-bold mb-2">How does pricing work exactly?</h3>
              <p className="text-muted-foreground">
                We provide custom quotes based on your specific needs. Starting prices give you a baseline, but we tailor solutions to fit your budget and requirements.
              </p>
            </div>

            <div className="brutalist-card p-6">
              <h3 className="text-xl font-bold mb-2">Do you help with fundraising?</h3>
              <p className="text-muted-foreground">
                We help prepare investor‑ready materials (pitch decks, demos, product). Funding outcomes depend on market and traction—no guarantees.
              </p>
            </div>

            <div className="brutalist-card p-6">
              <h3 className="text-xl font-bold mb-2">What if I'm not technical?</h3>
              <p className="text-muted-foreground">
                Perfect! We work with non-technical founders all the time. We'll guide you through the entire process and explain everything in plain English.
              </p>
            </div>

            <div className="brutalist-card p-6">
              <h3 className="text-xl font-bold mb-2">Can you work with my existing team?</h3>
              <p className="text-muted-foreground">
                Absolutely. We can integrate with your existing team or work as your complete tech department. We're flexible and adapt to your needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-primary text-primary-foreground">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-6xl font-bold mb-4">Ready to Launch Your Idea?</h2>
            <p className="text-xl max-w-2xl mx-auto opacity-90">
              Get a free launch consultation and custom quote. Let's turn your idea into a working product.
            </p>
          </div>

          <div className="flex justify-center">
            <Button size="lg" variant="secondary" className="brutalist-border text-lg px-8">
              <Link href="/contact">Get Free Launch Consultation</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
