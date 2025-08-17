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
    icon: <Globe className="h-8 w-8" />
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
    popular: true
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
    icon: <Database className="h-8 w-8" />
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

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {services.map((service, index) => (
              <div key={service.name} className="h-full">
                <div className={`brutalist-card p-8 h-full flex flex-col ${service.popular ? "border-primary ring-2 ring-primary/20" : ""} relative`}>
                  {service.popular && (
                    <div className="absolute -top-4 right-4 bg-primary text-primary-foreground px-4 py-2 text-sm font-bold rounded-full z-10">
                      Most Popular
                    </div>
                  )}
                  
                  <div className="text-center mb-6">
                    <div className="text-5xl mb-4">{service.emoji}</div>
                    <h3 className="text-2xl font-bold mb-2">{service.name}</h3>
                    <div className="text-2xl font-bold text-primary mb-4">{service.price}</div>
                    <p className="text-muted-foreground">{service.description}</p>
                  </div>

                  <div className="space-y-3 mb-8 flex-grow">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Button className={`w-full ${service.popular ? "bg-primary" : ""}`} asChild>
                    <Link href="/contact">Get Free Launch Consultation</Link>
                  </Button>
                </div>
              </div>
            ))}
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
                Yes! We create pitch decks, demo videos, and investor-ready products. Many of our clients have successfully raised funding with the products we've built.
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
