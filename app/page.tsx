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
            Turn your innovative ideas into market-ready products with expert guidance and collaborative development.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="brutalist-border text-lg px-8">
              <Link href="/packages">View Packages</Link>
            </Button>
            <Button size="lg" variant="outline" className="brutalist-border text-lg px-8">
              <Link href="/contact">Book Consultation</Link>
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
                We partner with you to build meaningful projects using clean, scalable code while helping you gain valuable development experience.
              </p>
            </div>
          </ScrollAnimation>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8" staggerDelay={150}>
            <TiltCard className="brutalist-card p-6 h-full">
              <div className="bg-primary/10 p-4 rounded-full w-fit mb-4">
                <Code className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-2">Web Development</h3>
              <p className="text-muted-foreground">
                Full-stack web applications with modern frameworks and responsive design.
              </p>
            </TiltCard>

            <TiltCard className="brutalist-card p-6 h-full">
              <div className="bg-secondary/10 p-4 rounded-full w-fit mb-4">
                <Smartphone className="h-8 w-8 text-secondary" />
              </div>
              <h3 className="text-2xl font-bold mb-2">Mobile Apps</h3>
              <p className="text-muted-foreground">
                Native and cross-platform mobile applications for Android and iOS.
              </p>
            </TiltCard>

            <TiltCard className="brutalist-card p-6 h-full">
              <div className="bg-accent/10 p-4 rounded-full w-fit mb-4">
                <Cpu className="h-8 w-8 text-accent" />
              </div>
              <h3 className="text-2xl font-bold mb-2">AI/ML Projects</h3>
              <p className="text-muted-foreground">
                Machine learning models, data analysis, and AI-powered applications.
              </p>
            </TiltCard>

            <TiltCard className="brutalist-card p-6 h-full">
              <div className="bg-primary/10 p-4 rounded-full w-fit mb-4">
                <Database className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-2">Backend Systems</h3>
              <p className="text-muted-foreground">Robust APIs, database design, and server-side architecture.</p>
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
                We're not just developers – we're mentors in your development journey. Our team of experts will guide you through creating a project you truly understand and can confidently present.
              </p>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="bg-primary/10 p-3 rounded-full h-fit">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-1">Team of Mentors</h3>
                    <p className="text-muted-foreground">
                      Our team of experienced developers provides both technical expertise and educational guidance.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="bg-secondary/10 p-3 rounded-full h-fit">
                    <Lightbulb className="h-6 w-6 text-secondary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-1">Hands-on Learning</h3>
                    <p className="text-muted-foreground">We involve you in the development process to ensure you gain valuable skills along the way.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="bg-accent/10 p-3 rounded-full h-fit">
                    <Rocket className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-1">End-to-End Guidance</h3>
                    <p className="text-muted-foreground">
                      From ideation to deployment, we provide mentorship at every stage of development.
                    </p>
                  </div>
                </div>
              </div>
            </ScrollAnimation>

            <EnhancedParallax speed={0.2} direction="right" className="lg:w-1/2">
              <div className="brutalist-border overflow-hidden rounded-lg">
                <Image
                  src="/network-diagram.png"
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
                Our collaborative 4-step process to help you bring your ideas to life while building your skills.
              </p>
            </div>
          </ScrollAnimation>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <ScrollAnimation animation="fade-in-up" delay={100}>
              <div className="brutalist-card p-6 h-full relative">
                <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white font-bold text-xl">
                  1
                </div>
                <h3 className="text-2xl font-bold mb-4 mt-6">Consultation</h3>
                <p className="text-muted-foreground">
                  We explore your project ideas and discuss how we can collaborate to bring them to life.
                </p>
              </div>
            </ScrollAnimation>

            <ScrollAnimation animation="fade-in-up" delay={200}>
              <div className="brutalist-card p-6 h-full relative">
                <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-secondary flex items-center justify-center text-secondary-foreground font-bold text-xl">
                  2
                </div>
                <h3 className="text-2xl font-bold mb-4 mt-6">Planning</h3>
                <p className="text-muted-foreground">
                  Together, we design a project roadmap with learning opportunities built into each milestone.
                </p>
              </div>
            </ScrollAnimation>

            <ScrollAnimation animation="fade-in-up" delay={300}>
              <div className="brutalist-card p-6 h-full relative">
                <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-accent flex items-center justify-center text-accent-foreground font-bold text-xl">
                  3
                </div>
                <h3 className="text-2xl font-bold mb-4 mt-6">Development</h3>
                <p className="text-muted-foreground">
                  We code collaboratively, with regular knowledge-sharing sessions to build your skills.
                </p>
              </div>
            </ScrollAnimation>

            <ScrollAnimation animation="fade-in-up" delay={400}>
              <div className="brutalist-card p-6 h-full relative">
                <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white font-bold text-xl">
                  4
                </div>
                <h3 className="text-2xl font-bold mb-4 mt-6">Delivery</h3>
                <p className="text-muted-foreground">
                  Your project is completed with comprehensive documentation and technical knowledge transfer.
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
              <h2 className="text-4xl md:text-6xl font-bold mb-4">Our Vision</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                We're on a mission to help startups and businesses build remarkable products while accelerating their market launch.
              </p>
            </div>
          </ScrollAnimation>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <ScrollAnimation animation="scale-in" delay={100}>
              <div className="brutalist-card p-6 text-center">
                <div className="text-5xl font-bold mb-2 gradient-text">100%</div>
                <h3 className="text-xl font-bold mb-2">Client Satisfaction</h3>
                <p className="text-muted-foreground">Our commitment to delivering exceptional product experiences.</p>
              </div>
            </ScrollAnimation>

            <ScrollAnimation animation="scale-in" delay={200}>
              <div className="brutalist-card p-6 text-center">
                <div className="text-5xl font-bold mb-2 gradient-text">24/7</div>
                <h3 className="text-xl font-bold mb-2">Support</h3>
                <p className="text-muted-foreground">Dedicated assistance throughout your product development journey.</p>
              </div>
            </ScrollAnimation>

            <ScrollAnimation animation="scale-in" delay={300}>
              <div className="brutalist-card p-6 text-center">
                <div className="text-5xl font-bold mb-2 gradient-text">15+</div>
                <h3 className="text-xl font-bold mb-2">Industries</h3>
                <p className="text-muted-foreground">Our expertise spans across various industry sectors.</p>
              </div>
            </ScrollAnimation>

            <ScrollAnimation animation="scale-in" delay={400}>
              <div className="brutalist-card p-6 text-center">
                <div className="text-5xl font-bold mb-2 gradient-text">15+</div>
                <h3 className="text-xl font-bold mb-2">Technologies</h3>
                <p className="text-muted-foreground">
                  Expertise across a wide range of programming languages and frameworks.
                </p>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24">
        <div className="container">
          <ScrollAnimation>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-6xl font-bold mb-4">What We Offer</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Here's how we'll help you turn your ideas into successful products.
              </p>
            </div>
          </ScrollAnimation>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ScrollAnimation animation="fade-in-right" delay={100}>
              <div className="brutalist-card p-6 h-full">
                <div className="flex items-center gap-2 mb-4">
                  <Star className="h-5 w-5 text-yellow-500 fill-yellow-500" />
                  <Star className="h-5 w-5 text-yellow-500 fill-yellow-500" />
                  <Star className="h-5 w-5 text-yellow-500 fill-yellow-500" />
                  <Star className="h-5 w-5 text-yellow-500 fill-yellow-500" />
                  <Star className="h-5 w-5 text-yellow-500 fill-yellow-500" />
                </div>
                <p className="text-muted-foreground mb-4">
                  "With LEAAS, you'll get an AI-powered analytics platform that will impress your investors. We prioritize knowledge-sharing throughout the development process."
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-muted overflow-hidden">
                    <Image src="/network-avatar-1.png" alt="Client" width={48} height={48} />
                  </div>
                  <div>
                    <h4 className="font-bold">Our Approach</h4>
                    <p className="text-sm text-muted-foreground">Data-Driven Development</p>
                  </div>
                </div>
              </div>
            </ScrollAnimation>

            <ScrollAnimation animation="fade-in-right" delay={200}>
              <div className="brutalist-card p-6 h-full">
                <div className="flex items-center gap-2 mb-4">
                  <Star className="h-5 w-5 text-yellow-500 fill-yellow-500" />
                  <Star className="h-5 w-5 text-yellow-500 fill-yellow-500" />
                  <Star className="h-5 w-5 text-yellow-500 fill-yellow-500" />
                  <Star className="h-5 w-5 text-yellow-500 fill-yellow-500" />
                  <Star className="h-5 w-5 text-yellow-500 fill-yellow-500" />
                </div>
                <p className="text-muted-foreground mb-4">
                  "The mobile app we'll build with you will exceed your expectations. Our collaborative approach ensures you'll understand the entire codebase and can maintain it after launch."
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-muted overflow-hidden">
                    <Image src="/network-avatar-2.png" alt="Client" width={48} height={48} />
                  </div>
                  <div>
                    <h4 className="font-bold">Our Promise</h4>
                    <p className="text-sm text-muted-foreground">Maintainable Code</p>
                  </div>
                </div>
              </div>
            </ScrollAnimation>

            <ScrollAnimation animation="fade-in-right" delay={300}>
              <div className="brutalist-card p-6 h-full">
                <div className="flex items-center gap-2 mb-4">
                  <Star className="h-5 w-5 text-yellow-500 fill-yellow-500" />
                  <Star className="h-5 w-5 text-yellow-500 fill-yellow-500" />
                  <Star className="h-5 w-5 text-yellow-500 fill-yellow-500" />
                  <Star className="h-5 w-5 text-yellow-500 fill-yellow-500" />
                  <Star className="h-5 w-5 text-yellow-500 fill-yellow-500" />
                </div>
                <p className="text-muted-foreground mb-4">
                  "If you're struggling with your MVP, LEAAS is the answer. We'll deliver a full-stack web app that will help you secure your seed funding round!"
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-muted overflow-hidden">
                    <Image src="/network-avatar-3.png" alt="Client" width={48} height={48} />
                  </div>
                  <div>
                    <h4 className="font-bold">Our Guarantee</h4>
                    <p className="text-sm text-muted-foreground">Funding-Ready Products</p>
                  </div>
                </div>
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
              <h2 className="text-5xl md:text-7xl font-bold mb-6 text-white">Ready to Launch Your Next Big Idea?</h2>
              <p className="text-xl md:text-2xl max-w-3xl mx-auto text-white/90 mb-12">
                Let's turn your concept into a reality. Book a consultation today and take the first step toward 
                bringing your vision to life!
              </p>

              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Button size="lg" variant="secondary" className="brutalist-border text-lg px-8 py-6 text-xl">
                  <Link href="/packages">View Packages</Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="brutalist-border text-lg px-8 py-6 text-xl bg-transparent border-white text-white hover:bg-white/10"
                >
                  <Link href="/contact">Book Consultation</Link>
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
