"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ScrollAnimation } from "@/components/scroll-animations"
import { ArrowLeft, ExternalLink, Globe, MapPin, Route, Users, Clock, Zap } from "lucide-react"

export default function WalklyCase() {
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
                Walkly – Explore Your City Differently
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Concept case study: a progressive web app that turns everyday walks into urban adventures using smart route generation and clean UX.
              </p>
              
              <div className="flex flex-wrap gap-4 mb-8">
                <Button asChild>
                  <Link href="https://walkly.up.railway.app/" target="_blank">
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
                  alt="Walkly App Interface"
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
                  Urban dwellers often stick to familiar routes, missing out on discovering new neighborhoods and hidden gems in their own cities. Our client wanted to create a solution that would encourage exploration while making walks more engaging and purposeful.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-bold">Route Monotony</h3>
                      <p className="text-muted-foreground text-sm">People walk the same paths repeatedly</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Users className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-bold">Lack of Discovery</h3>
                      <p className="text-muted-foreground text-sm">Missing interesting places in their own neighborhoods</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Clock className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-bold">Time Constraints</h3>
                      <p className="text-muted-foreground text-sm">Need routes that fit specific time preferences</p>
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
                We developed Walkly as a progressive web app that generates personalized circular walking routes, combining smart algorithms with intuitive design.
              </p>
            </div>
          </ScrollAnimation>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ScrollAnimation delay={100}>
              <div className="brutalist-card p-6">
                <div className="bg-primary/10 p-3 rounded-full w-fit mb-4">
                  <Route className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Smart Route Generation</h3>
                <p className="text-muted-foreground">
                  Algorithm creates circular routes based on user preferences, time constraints, and local points of interest.
                </p>
              </div>
            </ScrollAnimation>

            <ScrollAnimation delay={200}>
              <div className="brutalist-card p-6">
                <div className="bg-secondary/10 p-3 rounded-full w-fit mb-4">
                  <MapPin className="h-6 w-6 text-secondary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Location Discovery</h3>
                <p className="text-muted-foreground">
                  Integration with Google Maps API to highlight hidden gems, cafes, parks, and interesting landmarks along routes.
                </p>
              </div>
            </ScrollAnimation>

            <ScrollAnimation delay={300}>
              <div className="brutalist-card p-6">
                <div className="bg-accent/10 p-3 rounded-full w-fit mb-4">
                  <Zap className="h-6 w-6 text-accent" />
                </div>
                <h3 className="text-xl font-bold mb-2">PWA Performance</h3>
                <p className="text-muted-foreground">
                  Built as a Progressive Web App for instant loading, offline capabilities, and native app-like experience.
                </p>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Technical Implementation */}
      <section className="py-24 bg-muted">
        <div className="container">
          <ScrollAnimation>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Technical Implementation</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Built with modern technologies for optimal performance and user experience.
              </p>
            </div>
          </ScrollAnimation>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <ScrollAnimation delay={100}>
              <div className="brutalist-card p-8">
                <h3 className="text-2xl font-bold mb-6">Frontend Architecture</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span><strong>React + Vite:</strong> Fast development and optimal bundling</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span><strong>Tailwind CSS:</strong> Responsive, utility-first styling</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span><strong>PWA Features:</strong> Service workers, offline support</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span><strong>Responsive Design:</strong> Mobile-first approach</span>
                  </div>
                </div>
              </div>
            </ScrollAnimation>

            <ScrollAnimation delay={200}>
              <div className="brutalist-card p-8">
                <h3 className="text-2xl font-bold mb-6">Backend & APIs</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-secondary rounded-full"></div>
                    <span><strong>Supabase:</strong> Real-time database and authentication</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-secondary rounded-full"></div>
                    <span><strong>Google Maps API:</strong> Route calculation and POI data</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-secondary rounded-full"></div>
                    <span><strong>Custom Algorithm:</strong> Circular route generation logic</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-secondary rounded-full"></div>
                    <span><strong>Railway Deployment:</strong> Reliable hosting and scaling</span>
                  </div>
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="py-24">
        <div className="container">
          <ScrollAnimation>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Project Results</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Delivered a fully functional PWA that transforms how users explore their cities.
              </p>
            </div>
          </ScrollAnimation>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <ScrollAnimation delay={100}>
              <div className="brutalist-card p-6 text-center">
                <div className="text-3xl font-bold mb-2 gradient-text">4 weeks</div>
                <h3 className="text-lg font-bold mb-2">Development Time</h3>
                <p className="text-muted-foreground text-sm">From concept to live deployment</p>
              </div>
            </ScrollAnimation>

            <ScrollAnimation delay={200}>
              <div className="brutalist-card p-6 text-center">
                <div className="text-3xl font-bold mb-2 gradient-text">PWA</div>
                <h3 className="text-lg font-bold mb-2">Progressive Web App</h3>
                <p className="text-muted-foreground text-sm">Native app-like experience</p>
              </div>
            </ScrollAnimation>

            <ScrollAnimation delay={300}>
              <div className="brutalist-card p-6 text-center">
                <div className="text-3xl font-bold mb-2 gradient-text">Smart</div>
                <h3 className="text-lg font-bold mb-2">Route Algorithm</h3>
                <p className="text-muted-foreground text-sm">Personalized circular routes</p>
              </div>
            </ScrollAnimation>

            <ScrollAnimation delay={400}>
              <div className="brutalist-card p-6 text-center">
                <div className="text-3xl font-bold mb-2 gradient-text">Mobile</div>
                <h3 className="text-lg font-bold mb-2">Optimized</h3>
                <p className="text-muted-foreground text-sm">Perfect mobile experience</p>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-24 bg-muted">
        <div className="container">
          <ScrollAnimation>
            <div className="brutalist-card p-12 text-center max-w-4xl mx-auto">
              <div className="text-6xl mb-6">💬</div>
              <blockquote className="text-2xl md:text-3xl font-bold mb-6">
                "Concept demo: showcases our approach to building a PWA with smart routing and a smooth experience."
              </blockquote>
              <div className="text-muted-foreground">
                <strong>LEAAS</strong> • Prototype Showcase
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="container">
          <div className="brutalist-card p-12 text-center max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to Build Your MVP?</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Let's turn your idea into a working product that users will love. Get started with a free consultation.
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