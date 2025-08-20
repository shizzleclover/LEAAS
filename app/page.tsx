"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { EnhancedParallax } from "@/components/enhanced-parallax"
import { ScrollAnimation, StaggerContainer, TiltCard } from "@/components/scroll-animations"
import { FAQSection } from "@/components/faq-section"
import { Award, Code, Cpu, Database, FileCheck, Lightbulb, Rocket, Smartphone, Star, Users, Zap } from "lucide-react"
import { useTheme } from "next-themes"

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null)
  const [scrollY, setScrollY] = useState(0)
  const { resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener("scroll", handleScroll)
    setMounted(true)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="noise-bg">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div
          ref={heroRef}
          className="container flex flex-col items-center text-center z-10 transition-all duration-300"
          style={{
            opacity: Math.max(1 - scrollY / 500, 0),
            transform: `scale(${Math.max(1 - scrollY / 2000, 0.8)})`,
          }}
        >
          <div className="mb-6 w-32 h-auto relative mx-auto">
            {mounted ? (
              <Image 
                src={resolvedTheme === "dark" ? "/dark-mode-logo.png" : "/logo-light-mode.png"} 
                alt="LEAAS Logo" 
                width={150} 
                height={75} 
                className="w-full h-auto" 
              />
            ) : (
              <div className="h-16 w-32 bg-muted rounded animate-pulse"></div>
            )}
          </div>
          <h1 className="mega-text gradient-text mb-6">
            LAUNCH
            <br />
            ENGINE AS<br />
            A SERVICE
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mb-8">
            Your plug-and-play product + engineering team for founders. We turn ideas into working products fast, without the hassle of assembling a full team.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="brutalist-border text-lg px-8">
              <Link href="/contact">Get Free Launch Consultation</Link>
            </Button>
            <Button size="lg" variant="outline" className="brutalist-border text-lg px-8">
              <Link href="/contact">Launch Your Idea</Link>
            </Button>
          </div>
        </div>

        {/* Floating elements */}
        <div
          className="absolute top-1/4 left-1/4 w-24 h-24 bg-primary/20 rounded-full animate-float"
          style={{ animationDelay: "0s" }}
        ></div>
        <div
          className="absolute bottom-1/3 right-1/4 w-32 h-32 bg-secondary/20 rounded-full animate-float"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute top-2/3 left-1/3 w-16 h-16 bg-accent/20 rounded-full animate-float"
          style={{ animationDelay: "2s" }}
        ></div>
      </section>

      {/* What We Do Section */}
      <section className="py-24 bg-muted">
        <div className="container">
          <ScrollAnimation>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-6xl font-bold mb-4">What We Do</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                We take your idea through the complete journey: Idea → Product → Market → Growth & Iteration. Think of us as your mini incubator without equity.
              </p>
            </div>
          </ScrollAnimation>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8" staggerDelay={150}>
            <TiltCard className="brutalist-card p-6 h-full">
              <div className="bg-primary/10 p-4 rounded-full w-fit mb-4">
                <Code className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-2">MVP Development</h3>
              <p className="text-muted-foreground">
                Turn your idea into a working minimum viable product. Web apps, SaaS platforms, and landing pages ready for market validation.
              </p>
            </TiltCard>

            <TiltCard className="brutalist-card p-6 h-full">
              <div className="bg-secondary/10 p-4 rounded-full w-fit mb-4">
                <Smartphone className="h-8 w-8 text-secondary" />
              </div>
              <h3 className="text-2xl font-bold mb-2">Product Design</h3>
              <p className="text-muted-foreground">
                UI/UX design, branding, and launch-ready design systems that make your product stand out in the market.
              </p>
            </TiltCard>

            <TiltCard className="brutalist-card p-6 h-full">
              <div className="bg-accent/10 p-4 rounded-full w-fit mb-4">
                <Rocket className="h-8 w-8 text-accent" />
              </div>
              <h3 className="text-2xl font-bold mb-2">Launch Support</h3>
              <p className="text-muted-foreground">
                Pitch decks, launch websites, go-to-market guidance, and everything you need to successfully bring your product to market.
              </p>
            </TiltCard>

            <TiltCard className="brutalist-card p-6 h-full">
              <div className="bg-primary/10 p-4 rounded-full w-fit mb-4">
                <Database className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-2">Ongoing Development</h3>
              <p className="text-muted-foreground">Stay on as your fractional tech team for growth, feature additions, and product iteration as you scale.</p>
            </TiltCard>
          </StaggerContainer>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24">
        <div className="container">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <ScrollAnimation animation="fade-in-left" className="lg:w-1/2">
              <h2 className="text-4xl md:text-6xl font-bold mb-6">Why Choose Us?</h2>
              <p className="text-xl text-muted-foreground mb-8">
                We are your plug-and-play product + dev team. Instead of wasting months hiring, we help you build and launch in weeks, at startup-friendly pricing.
              </p>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="bg-primary/10 p-3 rounded-full h-fit">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-1">Plug-and-Play Team</h3>
                    <p className="text-muted-foreground">
                      Skip the hiring hassle. Our experienced team becomes your instant product and engineering department.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="bg-secondary/10 p-3 rounded-full h-fit">
                    <Zap className="h-6 w-6 text-secondary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-1">Build and Launch in Weeks</h3>
                    <p className="text-muted-foreground">While others spend months assembling teams, we get your product to market fast with proven processes.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="bg-accent/10 p-3 rounded-full h-fit">
                    <Rocket className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-1">No Hiring Hassle</h3>
                    <p className="text-muted-foreground">
                      Focus on your business while we handle the technical execution. No recruitment, no management overhead.
                    </p>
                  </div>
                </div>
              </div>
            </ScrollAnimation>

            <EnhancedParallax speed={0.2} direction="right" className="lg:w-1/2">
              <div className="brutalist-border overflow-hidden rounded-lg">
                <Image
                  src="/home.jpg"
                  alt="Network diagram showing connected development"
                  width={600}
                  height={600}
                  className="w-full h-auto"
                />
              </div>
            </EnhancedParallax>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24">
        <div className="container">
          <ScrollAnimation>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-6xl font-bold mb-4">How It Works</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Our proven 4-step process to turn your idea into a working product and get you to market fast.
              </p>
            </div>
          </ScrollAnimation>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <ScrollAnimation animation="fade-in-up" delay={100}>
              <div className="brutalist-card p-6 h-full relative">
                <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white font-bold text-xl">
                  1
                </div>
                <h3 className="text-2xl font-bold mb-4 mt-6">Discovery</h3>
                <p className="text-muted-foreground">
                  We understand your idea, target users, and business goals to create the perfect launch strategy.
                </p>
              </div>
            </ScrollAnimation>

            <ScrollAnimation animation="fade-in-up" delay={200}>
              <div className="brutalist-card p-6 h-full relative">
                <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-secondary flex items-center justify-center text-secondary-foreground font-bold text-xl">
                  2
                </div>
                <h3 className="text-2xl font-bold mb-4 mt-6">Design & Plan</h3>
                <p className="text-muted-foreground">
                  We create wireframes, choose the tech stack, and plan your MVP with clear milestones and timeline.
                </p>
              </div>
            </ScrollAnimation>

            <ScrollAnimation animation="fade-in-up" delay={300}>
              <div className="brutalist-card p-6 h-full relative">
                <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-accent flex items-center justify-center text-accent-foreground font-bold text-xl">
                  3
                </div>
                <h3 className="text-2xl font-bold mb-4 mt-6">Build</h3>
                <p className="text-muted-foreground">
                  Our team builds your product with regular updates and demos so you see progress every step.
                </p>
              </div>
            </ScrollAnimation>

            <ScrollAnimation animation="fade-in-up" delay={400}>
              <div className="brutalist-card p-6 h-full relative">
                <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white font-bold text-xl">
                  4
                </div>
                <h3 className="text-2xl font-bold mb-4 mt-6">Launch</h3>
                <p className="text-muted-foreground">
                  We deploy your product, help with launch strategy, and provide ongoing support as you scale.
                </p>
              </div>
            </ScrollAnimation>
          </div>

          <div className="text-center mt-12">
            <Button size="lg" asChild className="brutalist-border">
              <Link href="/how-it-works">Learn More About Our Process</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 bg-muted">
        <div className="container">
          <ScrollAnimation>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-6xl font-bold mb-4">Launch Readiness Goals</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Here are the targets and support you can expect when we partner with founders to launch new products.
              </p>
            </div>
          </ScrollAnimation>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <ScrollAnimation animation="scale-in" delay={100}>
              <div className="brutalist-card p-6 text-center h-64 flex flex-col items-center justify-start">
                <div className="text-4xl leading-tight font-bold mb-2 gradient-text break-words">3-6</div>
                <h3 className="text-xl font-bold mb-2">Weeks to MVP (Target)</h3>
                <p className="text-muted-foreground">Typical timeline goal from idea to a working prototype.</p>
              </div>
            </ScrollAnimation>

            <ScrollAnimation animation="scale-in" delay={200}>
              <div className="brutalist-card p-6 text-center h-64 flex flex-col items-center justify-start">
                <div className="text-4xl leading-tight font-bold mb-2 gradient-text break-words">In Progress</div>
                <h3 className="text-xl font-bold mb-2">Portfolio</h3>
                <p className="text-muted-foreground">We're actively building demos and early partner projects.</p>
              </div>
            </ScrollAnimation>

            <ScrollAnimation animation="scale-in" delay={300}>
              <div className="brutalist-card p-6 text-center h-64 flex flex-col items-center justify-start">
                <div className="text-4xl leading-tight font-bold mb-2 gradient-text break-words">Investor‑Ready</div>
                <h3 className="text-xl font-bold mb-2">Funding Support</h3>
                <p className="text-muted-foreground">We prepare decks, demos, and GTM—funding depends on market traction.</p>
              </div>
            </ScrollAnimation>

            <ScrollAnimation animation="scale-in" delay={400}>
              <div className="brutalist-card p-6 text-center h-64 flex flex-col items-center justify-start">
                <div className="text-4xl leading-tight font-bold mb-2 gradient-text break-words">Founder‑First</div>
                <h3 className="text-xl font-bold mb-2">How We Measure</h3>
                <p className="text-muted-foreground">Ship, learn, iterate. Early-stage success is momentum, not vanity metrics.</p>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Partner Value Section */}
      <section className="py-24">
        <div className="container">
          <ScrollAnimation>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-6xl font-bold mb-4">What You Get With LEAAS</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                A product-focused build partner that ships fast and communicates clearly.
              </p>
            </div>
          </ScrollAnimation>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ScrollAnimation animation="fade-in-up" delay={100}>
              <div className="brutalist-card p-8 h-full text-center">
                <div className="bg-primary/10 p-4 rounded-full w-fit mx-auto mb-4">
                  <Zap className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-3">Speed to MVP</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2 justify-center"><div className="w-1 h-1 bg-primary rounded-full"></div>3–6 week delivery targets</li>
                  <li className="flex items-center gap-2 justify-center"><div className="w-1 h-1 bg-primary rounded-full"></div>Weekly demos and check‑ins</li>
                  <li className="flex items-center gap-2 justify-center"><div className="w-1 h-1 bg-primary rounded-full"></div>Outcome‑aligned scope</li>
                </ul>
              </div>
            </ScrollAnimation>

            <ScrollAnimation animation="fade-in-up" delay={200}>
              <div className="brutalist-card p-8 h-full text-center">
                <div className="bg-secondary/10 p-4 rounded-full w-fit mx-auto mb-4">
                  <Users className="h-6 w-6 text-secondary" />
                </div>
                <h3 className="text-2xl font-bold mb-3">Plug‑and‑Play Team</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2 justify-center"><div className="w-1 h-1 bg-secondary rounded-full"></div>Product + engineering in one</li>
                  <li className="flex items-center gap-2 justify-center"><div className="w-1 h-1 bg-secondary rounded-full"></div>Clear comms, async‑friendly</li>
                  <li className="flex items-center gap-2 justify-center"><div className="w-1 h-1 bg-secondary rounded-full"></div>Zero hiring overhead</li>
                </ul>
              </div>
            </ScrollAnimation>

            <ScrollAnimation animation="fade-in-up" delay={300}>
              <div className="brutalist-card p-8 h-full text-center">
                <div className="bg-accent/10 p-4 rounded-full w-fit mx-auto mb-4">
                  <Award className="h-6 w-6 text-accent" />
                </div>
                <h3 className="text-2xl font-bold mb-3">Investor‑Ready Launch</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2 justify-center"><div className="w-1 h-1 bg-accent rounded-full"></div>Decks, demos, GTM support</li>
                  <li className="flex items-center gap-2 justify-center"><div className="w-1 h-1 bg-accent rounded-full"></div>Clean handover documentation</li>
                  <li className="flex items-center gap-2 justify-center"><div className="w-1 h-1 bg-accent rounded-full"></div>Post‑launch iteration options</li>
                </ul>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection />

      {/* Immersive CTA Section */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent opacity-90 z-0"></div>

        {/* Animated shapes */}
        <div className="absolute inset-0 z-10 overflow-hidden">
          <div
            className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-white/10 animate-float"
            style={{ animationDelay: "0s" }}
          ></div>
          <div
            className="absolute bottom-1/3 right-1/4 w-96 h-96 rounded-full bg-white/5 animate-float"
            style={{ animationDelay: "1.5s" }}
          ></div>
          <div
            className="absolute top-2/3 left-1/3 w-48 h-48 rounded-full bg-white/10 animate-float"
            style={{ animationDelay: "0.8s" }}
          ></div>
        </div>

        <div className="container relative z-20">
          <ScrollAnimation animation="scale-in">
            <div className="text-center mb-12">
              <h2 className="text-5xl md:text-7xl font-bold mb-6 text-white">Ready to Launch Your Idea?</h2>
              <p className="text-xl md:text-2xl max-w-3xl mx-auto text-white/90 mb-12">
                Stop wasting time assembling a team. Let's turn your idea into a working product and get you to market fast!
              </p>

              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Button size="lg" variant="secondary" className="brutalist-border text-lg px-8 py-6 text-xl">
                  <Link href="/packages">View Our Services</Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="brutalist-border text-lg px-8 py-6 text-xl bg-transparent border-white text-white hover:bg-white/10"
                >
                  <Link href="/contact">Get Free Launch Consultation</Link>
                </Button>
              </div>
            </div>
          </ScrollAnimation>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            <ScrollAnimation animation="fade-in-up" delay={100}>
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/20">
                <div className="bg-white/20 p-3 rounded-full w-fit mb-4">
                  <Zap className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-white">Quick Development</h3>
                <p className="text-white/80">We deliver high-quality products with rapid time-to-market.</p>
              </div>
            </ScrollAnimation>

            <ScrollAnimation animation="fade-in-up" delay={200}>
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/20">
                <div className="bg-white/20 p-3 rounded-full w-fit mb-4">
                  <Award className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-white">Industry Excellence</h3>
                <p className="text-white/80">Our projects are designed to meet industry standards and exceed expectations.</p>
              </div>
            </ScrollAnimation>

            <ScrollAnimation animation="fade-in-up" delay={300}>
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/20">
                <div className="bg-white/20 p-3 rounded-full w-fit mb-4">
                  <FileCheck className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-white">Complete Documentation</h3>
                <p className="text-white/80">Comprehensive documentation to support ongoing maintenance and future development.</p>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>
    </div>
  )
}
