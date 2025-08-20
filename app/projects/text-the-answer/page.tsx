"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ScrollAnimation } from "@/components/scroll-animations"
import { ArrowLeft, ExternalLink, Globe, Smartphone, TrendingUp, Target, Zap, Users } from "lucide-react"

export default function TextTheAnswerCase() {
  return (
    <div className="noise-bg">
      {/* Hero Section */}
      <section className="py-24">
        <div className="container">
          <ScrollAnimation>
            <div className="mb-8">
              <Button variant="outline" asChild>
                <Link href="/projects">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Back to Projects
                </Link>
              </Button>
            </div>
            
            <div className="max-w-4xl">
              <div className="bg-primary text-primary-foreground px-4 py-2 text-sm font-bold rounded-full w-fit mb-6">
                MVP Development
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Text the Answer – App Landing Page
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Concept case study: a conversion-focused landing page with bold visuals, persuasive copy, and a clean user flow.
              </p>
              
              <div className="flex flex-wrap gap-4 mb-8">
                <Button asChild>
                  <Link href="https://v0-fyv.vercel.app/" target="_blank">
                    <Globe className="h-4 w-4 mr-2" />
                    View Demo
                  </Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link href="/contact">
                    Get Similar Results
                  </Link>
                </Button>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Project Overview */}
      <section className="py-24 bg-muted">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <ScrollAnimation animation="fade-in-left">
              <div className="brutalist-border overflow-hidden rounded-lg">
                <Image
                  src="/home.jpg"
                  alt="Text the Answer Landing Page"
                  width={600}
                  height={400}
                  className="w-full h-auto"
                />
              </div>
            </ScrollAnimation>

            <ScrollAnimation animation="fade-in-right">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">The Challenge</h2>
                <p className="text-muted-foreground mb-6">
                  Our client had developed an innovative quiz and trivia mobile app but needed a landing page that could effectively communicate the app's value proposition and drive downloads. The challenge was creating a page that would grab attention instantly and convert visitors into users.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Target className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-bold">Low Conversion Rates</h3>
                      <p className="text-muted-foreground text-sm">Existing page wasn't converting visitors to downloads</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Zap className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-bold">Attention Competition</h3>
                      <p className="text-muted-foreground text-sm">Needed to stand out in crowded app market</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Smartphone className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-bold">App Store Optimization</h3>
                      <p className="text-muted-foreground text-sm">Drive traffic to app store downloads effectively</p>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Solution */}
      <section className="py-24">
        <div className="container">
          <ScrollAnimation>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Solution</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                We designed a conversion-focused landing page with bold visuals, crisp copy, and a clean user flow optimized for app downloads.
              </p>
            </div>
          </ScrollAnimation>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ScrollAnimation delay={100}>
              <div className="brutalist-card p-6">
                <div className="bg-primary/10 p-3 rounded-full w-fit mb-4">
                  <Target className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Conversion-First Design</h3>
                <p className="text-muted-foreground">
                  Every element strategically placed to guide visitors toward the download action with clear value propositions.
                </p>
              </div>
            </ScrollAnimation>

            <ScrollAnimation delay={200}>
              <div className="brutalist-card p-6">
                <div className="bg-secondary/10 p-3 rounded-full w-fit mb-4">
                  <Zap className="h-6 w-6 text-secondary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Bold Visual Impact</h3>
                <p className="text-muted-foreground">
                  Eye-catching design that immediately communicates the fun, engaging nature of the quiz app.
                </p>
              </div>
            </ScrollAnimation>

            <ScrollAnimation delay={300}>
              <div className="brutalist-card p-6">
                <div className="bg-accent/10 p-3 rounded-full w-fit mb-4">
                  <TrendingUp className="h-6 w-6 text-accent" />
                </div>
                <h3 className="text-xl font-bold mb-2">Persuasive Copy Flow</h3>
                <p className="text-muted-foreground">
                  Carefully crafted messaging that builds excitement and urgency while addressing user pain points.
                </p>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Design Strategy */}
      <section className="py-24 bg-muted">
        <div className="container">
          <ScrollAnimation>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Design Strategy</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Our approach focused on creating an immediate emotional connection with visitors.
              </p>
            </div>
          </ScrollAnimation>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <ScrollAnimation delay={100}>
              <div className="brutalist-card p-8">
                <h3 className="text-2xl font-bold mb-6">Visual Hierarchy</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span><strong>Hero Section:</strong> Immediate value proposition</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span><strong>App Screenshots:</strong> Visual proof of concept</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span><strong>Feature Highlights:</strong> Key benefits showcase</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span><strong>Download CTAs:</strong> Multiple conversion points</span>
                  </div>
                </div>
              </div>
            </ScrollAnimation>

            <ScrollAnimation delay={200}>
              <div className="brutalist-card p-8">
                <h3 className="text-2xl font-bold mb-6">Technical Implementation</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-secondary rounded-full"></div>
                    <span><strong>React + Next.js:</strong> Fast, SEO-optimized performance</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-secondary rounded-full"></div>
                    <span><strong>Tailwind CSS:</strong> Responsive, mobile-first design</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-secondary rounded-full"></div>
                    <span><strong>Framer Motion:</strong> Smooth, engaging animations</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-secondary rounded-full"></div>
                    <span><strong>Vercel Deployment:</strong> Lightning-fast loading</span>
                  </div>
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-24">
        <div className="container">
          <ScrollAnimation>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Key Features</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Every element designed to maximize conversions and user engagement.
              </p>
            </div>
          </ScrollAnimation>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ScrollAnimation delay={100}>
              <div className="brutalist-card p-8">
                <h3 className="text-2xl font-bold mb-4">Above-the-Fold Impact</h3>
                <p className="text-muted-foreground mb-4">
                  Immediately communicates the app's value with bold headlines, engaging visuals, and clear download buttons.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <div className="w-1 h-1 bg-primary rounded-full"></div>
                    Attention-grabbing headline
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1 h-1 bg-primary rounded-full"></div>
                    App store badges prominently displayed
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1 h-1 bg-primary rounded-full"></div>
                    Mobile app mockups
                  </li>
                </ul>
              </div>
            </ScrollAnimation>

            <ScrollAnimation delay={200}>
              <div className="brutalist-card p-8">
                <h3 className="text-2xl font-bold mb-4">Social Proof & Features</h3>
                <p className="text-muted-foreground mb-4">
                  Builds trust and excitement through feature showcases and user testimonials.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <div className="w-1 h-1 bg-secondary rounded-full"></div>
                    Interactive feature demonstrations
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1 h-1 bg-secondary rounded-full"></div>
                    User testimonials and reviews
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1 h-1 bg-secondary rounded-full"></div>
                    Download statistics
                  </li>
                </ul>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="py-24 bg-muted">
        <div className="container">
          <ScrollAnimation>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Project Results</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Delivered a high-converting landing page that effectively drives app downloads.
              </p>
            </div>
          </ScrollAnimation>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <ScrollAnimation delay={100}>
              <div className="brutalist-card p-6 text-center">
                <div className="text-3xl font-bold mb-2 gradient-text">2 weeks</div>
                <h3 className="text-lg font-bold mb-2">Development Time</h3>
                <p className="text-muted-foreground text-sm">From design to deployment</p>
              </div>
            </ScrollAnimation>

            <ScrollAnimation delay={200}>
              <div className="brutalist-card p-6 text-center">
                <div className="text-3xl font-bold mb-2 gradient-text">High</div>
                <h3 className="text-lg font-bold mb-2">Conversion Rate</h3>
                <p className="text-muted-foreground text-sm">Optimized for downloads</p>
              </div>
            </ScrollAnimation>

            <ScrollAnimation delay={300}>
              <div className="brutalist-card p-6 text-center">
                <div className="text-3xl font-bold mb-2 gradient-text">Mobile</div>
                <h3 className="text-lg font-bold mb-2">Optimized</h3>
                <p className="text-muted-foreground text-sm">Perfect mobile experience</p>
              </div>
            </ScrollAnimation>

            <ScrollAnimation delay={400}>
              <div className="brutalist-card p-6 text-center">
                <div className="text-3xl font-bold mb-2 gradient-text">Fast</div>
                <h3 className="text-lg font-bold mb-2">Loading Speed</h3>
                <p className="text-muted-foreground text-sm">Instant page loads</p>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-24">
        <div className="container">
          <ScrollAnimation>
            <div className="brutalist-card p-12 text-center max-w-4xl mx-auto">
              <div className="text-6xl mb-6">💬</div>
              <blockquote className="text-2xl md:text-3xl font-bold mb-6">
                "Concept demo: an example of our approach to high‑impact landing pages optimized for conversions."
              </blockquote>
              <div className="text-muted-foreground">
                <strong>LEAAS</strong> • Prototype Showcase
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-muted">
        <div className="container">
          <div className="brutalist-card p-12 text-center max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Need a High-Converting Landing Page?</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Let's create a landing page that turns visitors into customers. Get started with a free consultation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8">
                <Link href="/contact">Get Free Launch Consultation</Link>
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8">
                <Link href="/projects">View More Projects</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}