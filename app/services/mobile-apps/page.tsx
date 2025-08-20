"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ScrollAnimation } from "@/components/scroll-animations"
import { Check, Smartphone, Bell, Download, Shield, Zap } from "lucide-react"

export default function MobileAppsPage() {
  return (
    <div className="noise-bg">
      {/* Hero Section */}
      <section className="py-24">
        <div className="container">
          <ScrollAnimation>
            <div className="text-center mb-16">
              <div className="text-6xl mb-6">📱</div>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
                Mobile <span className="gradient-text">Apps</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
                Native iOS and Android apps, or cross-platform solutions that work everywhere. Reach your users wherever they are.
              </p>
              <div className="text-2xl font-bold text-primary mb-8">Starting from $1,500</div>
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
                Complete mobile app development from design to app store submission.
              </p>
            </div>
          </ScrollAnimation>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ScrollAnimation delay={100}>
              <div className="brutalist-card p-6">
                <div className="bg-primary/10 p-3 rounded-full w-fit mb-4">
                  <Smartphone className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Native Development</h3>
                <p className="text-muted-foreground">
                  Native iOS (Swift) and Android (Kotlin) apps for maximum performance and platform integration.
                </p>
              </div>
            </ScrollAnimation>

            <ScrollAnimation delay={200}>
              <div className="brutalist-card p-6">
                <div className="bg-secondary/10 p-3 rounded-full w-fit mb-4">
                  <Zap className="h-6 w-6 text-secondary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Cross-Platform</h3>
                <p className="text-muted-foreground">
                  React Native or Flutter development to reach both iOS and Android with a single codebase.
                </p>
              </div>
            </ScrollAnimation>

            <ScrollAnimation delay={300}>
              <div className="brutalist-card p-6">
                <div className="bg-accent/10 p-3 rounded-full w-fit mb-4">
                  <Download className="h-6 w-6 text-accent" />
                </div>
                <h3 className="text-xl font-bold mb-2">App Store Submission</h3>
                <p className="text-muted-foreground">
                  Complete app store optimization and submission process for both Apple App Store and Google Play.
                </p>
              </div>
            </ScrollAnimation>

            <ScrollAnimation delay={400}>
              <div className="brutalist-card p-6">
                <div className="bg-primary/10 p-3 rounded-full w-fit mb-4">
                  <Bell className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Push Notifications</h3>
                <p className="text-muted-foreground">
                  Integrated push notification system to keep users engaged and informed.
                </p>
              </div>
            </ScrollAnimation>

            <ScrollAnimation delay={500}>
              <div className="brutalist-card p-6">
                <div className="bg-secondary/10 p-3 rounded-full w-fit mb-4">
                  <Shield className="h-6 w-6 text-secondary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Offline Support</h3>
                <p className="text-muted-foreground">
                  Offline functionality and data synchronization for seamless user experience.
                </p>
              </div>
            </ScrollAnimation>

            <ScrollAnimation delay={600}>
              <div className="brutalist-card p-6">
                <div className="bg-accent/10 p-3 rounded-full w-fit mb-4">
                  <Smartphone className="h-6 w-6 text-accent" />
                </div>
                <h3 className="text-xl font-bold mb-2">Backend Integration</h3>
                <p className="text-muted-foreground">
                  Complete API integration and backend services to power your mobile app.
                </p>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Development Options */}
      <section className="py-24">
        <div className="container">
          <ScrollAnimation>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Development Options</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Choose the approach that best fits your timeline, budget, and requirements.
              </p>
            </div>
          </ScrollAnimation>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ScrollAnimation delay={100}>
              <div className="brutalist-card p-8">
                <h3 className="text-2xl font-bold mb-4">Native Development</h3>
                <p className="text-muted-foreground mb-6">
                  Platform-specific apps built with Swift (iOS) and Kotlin (Android) for maximum performance and native feel.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Check className="h-5 w-5 text-primary flex-shrink-0" />
                    <span>Best performance and user experience</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Check className="h-5 w-5 text-primary flex-shrink-0" />
                    <span>Full access to platform features</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Check className="h-5 w-5 text-primary flex-shrink-0" />
                    <span>Platform-specific UI/UX guidelines</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Check className="h-5 w-5 text-primary flex-shrink-0" />
                    <span>Ideal for complex, feature-rich apps</span>
                  </div>
                </div>
              </div>
            </ScrollAnimation>

            <ScrollAnimation delay={200}>
              <div className="brutalist-card p-8">
                <h3 className="text-2xl font-bold mb-4">Cross-Platform</h3>
                <p className="text-muted-foreground mb-6">
                  Single codebase apps using React Native or Flutter that work on both iOS and Android.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Check className="h-5 w-5 text-primary flex-shrink-0" />
                    <span>Faster development and lower cost</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Check className="h-5 w-5 text-primary flex-shrink-0" />
                    <span>Single codebase for both platforms</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Check className="h-5 w-5 text-primary flex-shrink-0" />
                    <span>Easier maintenance and updates</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Check className="h-5 w-5 text-primary flex-shrink-0" />
                    <span>Perfect for MVPs and startups</span>
                  </div>
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-24 bg-muted">
        <div className="container">
          <ScrollAnimation>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Mobile App Process</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                From concept to app store in 6-10 weeks with our proven mobile development process.
              </p>
            </div>
          </ScrollAnimation>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <ScrollAnimation delay={100}>
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center text-white font-bold text-xl mb-4 mx-auto">
                  1
                </div>
                <h3 className="text-xl font-bold mb-2">Strategy</h3>
                <p className="text-muted-foreground">
                  Define app goals, target audience, and key features for maximum impact.
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
                  Create intuitive UI/UX designs following platform guidelines.
                </p>
              </div>
            </ScrollAnimation>

            <ScrollAnimation delay={300}>
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-accent flex items-center justify-center text-accent-foreground font-bold text-xl mb-4 mx-auto">
                  3
                </div>
                <h3 className="text-xl font-bold mb-2">Development</h3>
                <p className="text-muted-foreground">
                  Build your app with regular testing and feedback integration.
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
                  App store submission, optimization, and post-launch support.
                </p>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="container">
          <div className="brutalist-card p-12 text-center max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to Build Your Mobile App?</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Let's create a mobile app that your users will love. Get started with a free consultation to discuss your project.
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