"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ScrollAnimation } from "@/components/scroll-animations"
import { ArrowLeft, ExternalLink, Globe, Users, MessageCircle, Heart, Zap, Share2 } from "lucide-react"

export default function LabubuShowroomCase() {
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
                Custom Software
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                🐻 Labubu Showroom – Social Hub
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Concept case study: a vibrant social platform concept for showcasing, trading, and interacting around collectibles.
              </p>
              
              <div className="flex flex-wrap gap-4 mb-8">
                <Button asChild>
                  <Link href="https://labubu-web.onrender.com/" target="_blank">
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
                  alt="Labubu Showroom Platform"
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
                  Labubu collectors needed a dedicated platform to showcase their collections, connect with other enthusiasts, and facilitate trading. The challenge was creating a social platform that captured the playful, vibrant nature of the Labubu community while providing robust social and trading features.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Users className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-bold">Community Building</h3>
                      <p className="text-muted-foreground text-sm">Creating connections between collectors worldwide</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Share2 className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-bold">Trading Platform</h3>
                      <p className="text-muted-foreground text-sm">Safe and easy way to trade collectibles</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Heart className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-bold">Engaging Experience</h3>
                      <p className="text-muted-foreground text-sm">Fun, interactive platform that matches the brand</p>
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
                We developed a comprehensive social media platform with community features, trading systems, and vibrant design that perfectly captures the Labubu spirit.
              </p>
            </div>
          </ScrollAnimation>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ScrollAnimation delay={100}>
              <div className="brutalist-card p-6">
                <div className="bg-primary/10 p-3 rounded-full w-fit mb-4">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Social Community</h3>
                <p className="text-muted-foreground">
                  User profiles, following systems, and social interactions that foster a strong collector community.
                </p>
              </div>
            </ScrollAnimation>

            <ScrollAnimation delay={200}>
              <div className="brutalist-card p-6">
                <div className="bg-secondary/10 p-3 rounded-full w-fit mb-4">
                  <Share2 className="h-6 w-6 text-secondary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Trading System</h3>
                <p className="text-muted-foreground">
                  Secure trading features that allow collectors to safely exchange items with built-in verification.
                </p>
              </div>
            </ScrollAnimation>

            <ScrollAnimation delay={300}>
              <div className="brutalist-card p-6">
                <div className="bg-accent/10 p-3 rounded-full w-fit mb-4">
                  <Heart className="h-6 w-6 text-accent" />
                </div>
                <h3 className="text-xl font-bold mb-2">Showcase Features</h3>
                <p className="text-muted-foreground">
                  Beautiful galleries and display options that let collectors show off their prized Labubu items.
                </p>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Technical Architecture */}
      <section className="py-24 bg-muted">
        <div className="container">
          <ScrollAnimation>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Technical Architecture</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Built with modern technologies to handle real-time interactions and media-rich content.
              </p>
            </div>
          </ScrollAnimation>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <ScrollAnimation delay={100}>
              <div className="brutalist-card p-8">
                <h3 className="text-2xl font-bold mb-6">Frontend Stack</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span><strong>React:</strong> Component-based UI architecture</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span><strong>Modern CSS:</strong> Vibrant, responsive design system</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span><strong>Real-time UI:</strong> Live updates and notifications</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span><strong>Image Optimization:</strong> Fast loading galleries</span>
                  </div>
                </div>
              </div>
            </ScrollAnimation>

            <ScrollAnimation delay={200}>
              <div className="brutalist-card p-8">
                <h3 className="text-2xl font-bold mb-6">Backend & Services</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-secondary rounded-full"></div>
                    <span><strong>Node.js:</strong> Scalable server architecture</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-secondary rounded-full"></div>
                    <span><strong>MongoDB:</strong> Flexible document database</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-secondary rounded-full"></div>
                    <span><strong>Socket.io:</strong> Real-time communication</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-secondary rounded-full"></div>
                    <span><strong>Cloudinary:</strong> Media management and optimization</span>
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
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Platform Features</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Comprehensive social and trading features designed for the collector community.
              </p>
            </div>
          </ScrollAnimation>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ScrollAnimation delay={100}>
              <div className="brutalist-card p-8">
                <h3 className="text-2xl font-bold mb-4">Social Features</h3>
                <p className="text-muted-foreground mb-4">
                  Complete social media functionality tailored for collectors.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <div className="w-1 h-1 bg-primary rounded-full"></div>
                    User profiles and customization
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1 h-1 bg-primary rounded-full"></div>
                    Follow/unfollow system
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1 h-1 bg-primary rounded-full"></div>
                    Real-time messaging and comments
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1 h-1 bg-primary rounded-full"></div>
                    Like and reaction system
                  </li>
                </ul>
              </div>
            </ScrollAnimation>

            <ScrollAnimation delay={200}>
              <div className="brutalist-card p-8">
                <h3 className="text-2xl font-bold mb-4">Trading & Showcase</h3>
                <p className="text-muted-foreground mb-4">
                  Advanced features for displaying and trading collectibles.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <div className="w-1 h-1 bg-secondary rounded-full"></div>
                    Collection galleries and showcases
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1 h-1 bg-secondary rounded-full"></div>
                    Trading request system
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1 h-1 bg-secondary rounded-full"></div>
                    Item verification and authentication
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1 h-1 bg-secondary rounded-full"></div>
                    Wishlist and want lists
                  </li>
                </ul>
              </div>
            </ScrollAnimation>

            <ScrollAnimation delay={300}>
              <div className="brutalist-card p-8">
                <h3 className="text-2xl font-bold mb-4">Community Tools</h3>
                <p className="text-muted-foreground mb-4">
                  Features that bring the collector community together.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <div className="w-1 h-1 bg-accent rounded-full"></div>
                    Discussion forums and groups
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1 h-1 bg-accent rounded-full"></div>
                    Event announcements and meetups
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1 h-1 bg-accent rounded-full"></div>
                    News and updates feed
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1 h-1 bg-accent rounded-full"></div>
                    Collector achievements and badges
                  </li>
                </ul>
              </div>
            </ScrollAnimation>

            <ScrollAnimation delay={400}>
              <div className="brutalist-card p-8">
                <h3 className="text-2xl font-bold mb-4">Mobile Experience</h3>
                <p className="text-muted-foreground mb-4">
                  Optimized for mobile collectors on the go.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <div className="w-1 h-1 bg-primary rounded-full"></div>
                    Responsive design for all devices
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1 h-1 bg-primary rounded-full"></div>
                    Touch-optimized interactions
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1 h-1 bg-primary rounded-full"></div>
                    Camera integration for photos
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1 h-1 bg-primary rounded-full"></div>
                    Offline capability for viewing
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
                Successfully launched a thriving social platform for the Labubu collector community.
              </p>
            </div>
          </ScrollAnimation>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <ScrollAnimation delay={100}>
              <div className="brutalist-card p-6 text-center">
                <div className="text-3xl font-bold mb-2 gradient-text">6 weeks</div>
                <h3 className="text-lg font-bold mb-2">Development Time</h3>
                <p className="text-muted-foreground text-sm">From concept to community launch</p>
              </div>
            </ScrollAnimation>

            <ScrollAnimation delay={200}>
              <div className="brutalist-card p-6 text-center">
                <div className="text-3xl font-bold mb-2 gradient-text">Social</div>
                <h3 className="text-lg font-bold mb-2">Platform Type</h3>
                <p className="text-muted-foreground text-sm">Full social media features</p>
              </div>
            </ScrollAnimation>

            <ScrollAnimation delay={300}>
              <div className="brutalist-card p-6 text-center">
                <div className="text-3xl font-bold mb-2 gradient-text">Real-time</div>
                <h3 className="text-lg font-bold mb-2">Interactions</h3>
                <p className="text-muted-foreground text-sm">Live messaging and updates</p>
              </div>
            </ScrollAnimation>

            <ScrollAnimation delay={400}>
              <div className="brutalist-card p-6 text-center">
                <div className="text-3xl font-bold mb-2 gradient-text">Trading</div>
                <h3 className="text-lg font-bold mb-2">System</h3>
                <p className="text-muted-foreground text-sm">Secure collectible trading</p>
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
                "Concept demo: illustrates our thinking for community features, trading flows, and a playful visual language."
              </blockquote>
              <div className="text-muted-foreground">
                <strong>LEAAS</strong> • Concept Overview
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-muted">
        <div className="container">
          <div className="brutalist-card p-12 text-center max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Need a Social Platform?</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Let's build a community platform that brings your users together and drives engagement.
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