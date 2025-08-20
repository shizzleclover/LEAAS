"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ScrollAnimation } from "@/components/scroll-animations"
import { ArrowLeft, ExternalLink, Globe, Briefcase, Code, Star, Zap, Users } from "lucide-react"

export default function AIMLPortfolioCase() {
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
                Custom AI/ML Developer Portfolio
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Concept case study: a standout portfolio that showcases technical expertise while maintaining a polished, memorable design tailored to the AI/ML industry.
              </p>
              
              <div className="flex flex-wrap gap-4 mb-8">
                <Button asChild>
                  <Link href="https://timi-portfolio-eight.vercel.app/" target="_blank">
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
                  alt="AI/ML Portfolio Website"
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
                  Our client, an AI/ML engineer, needed a portfolio that would stand out in the highly competitive tech industry. The challenge was creating a site that effectively showcased complex technical projects while maintaining visual appeal and professional credibility.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Briefcase className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-bold">Industry Competition</h3>
                      <p className="text-muted-foreground text-sm">Standing out among thousands of AI/ML professionals</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Code className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-bold">Technical Complexity</h3>
                      <p className="text-muted-foreground text-sm">Presenting complex projects in an accessible way</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Star className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-bold">Personal Branding</h3>
                      <p className="text-muted-foreground text-sm">Creating a memorable professional identity</p>
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
                We designed a fully personalized portfolio that balances technical depth with visual sophistication, creating a unique brand identity.
              </p>
            </div>
          </ScrollAnimation>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ScrollAnimation delay={100}>
              <div className="brutalist-card p-6">
                <div className="bg-primary/10 p-3 rounded-full w-fit mb-4">
                  <Star className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Unique Brand Identity</h3>
                <p className="text-muted-foreground">
                  Custom design elements and color schemes that reflect the engineer's personality and technical expertise.
                </p>
              </div>
            </ScrollAnimation>

            <ScrollAnimation delay={200}>
              <div className="brutalist-card p-6">
                <div className="bg-secondary/10 p-3 rounded-full w-fit mb-4">
                  <Code className="h-6 w-6 text-secondary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Technical Showcase</h3>
                <p className="text-muted-foreground">
                  Interactive project displays that demonstrate AI/ML capabilities without overwhelming non-technical viewers.
                </p>
              </div>
            </ScrollAnimation>

            <ScrollAnimation delay={300}>
              <div className="brutalist-card p-6">
                <div className="bg-accent/10 p-3 rounded-full w-fit mb-4">
                  <Zap className="h-6 w-6 text-accent" />
                </div>
                <h3 className="text-xl font-bold mb-2">Performance Optimized</h3>
                <p className="text-muted-foreground">
                  Lightning-fast loading with smooth animations that enhance rather than hinder the user experience.
                </p>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Design Philosophy */}
      <section className="py-24 bg-muted">
        <div className="container">
          <ScrollAnimation>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Design Philosophy</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Balancing technical credibility with visual appeal and user experience.
              </p>
            </div>
          </ScrollAnimation>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <ScrollAnimation delay={100}>
              <div className="brutalist-card p-8">
                <h3 className="text-2xl font-bold mb-6">Visual Strategy</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span><strong>Clean Minimalism:</strong> Focus on content over decoration</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span><strong>Technical Aesthetics:</strong> Design elements that reflect AI/ML work</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span><strong>Professional Polish:</strong> Enterprise-level design quality</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span><strong>Personal Touch:</strong> Unique elements that reflect personality</span>
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
                    <span><strong>React + Next.js:</strong> Modern, SEO-optimized framework</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-secondary rounded-full"></div>
                    <span><strong>TypeScript:</strong> Type-safe, professional development</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-secondary rounded-full"></div>
                    <span><strong>Tailwind CSS:</strong> Responsive, utility-first styling</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-secondary rounded-full"></div>
                    <span><strong>Framer Motion:</strong> Smooth, professional animations</span>
                  </div>
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Key Sections */}
      <section className="py-24">
        <div className="container">
          <ScrollAnimation>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Portfolio Sections</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Strategically organized content that tells a compelling professional story.
              </p>
            </div>
          </ScrollAnimation>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ScrollAnimation delay={100}>
              <div className="brutalist-card p-8">
                <h3 className="text-2xl font-bold mb-4">Hero & About</h3>
                <p className="text-muted-foreground mb-4">
                  Compelling introduction that immediately establishes expertise and personality.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <div className="w-1 h-1 bg-primary rounded-full"></div>
                    Professional headshot and branding
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1 h-1 bg-primary rounded-full"></div>
                    Clear value proposition
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1 h-1 bg-primary rounded-full"></div>
                    Technical skills showcase
                  </li>
                </ul>
              </div>
            </ScrollAnimation>

            <ScrollAnimation delay={200}>
              <div className="brutalist-card p-8">
                <h3 className="text-2xl font-bold mb-4">Projects & Experience</h3>
                <p className="text-muted-foreground mb-4">
                  Detailed case studies that demonstrate problem-solving abilities and technical depth.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <div className="w-1 h-1 bg-secondary rounded-full"></div>
                    Interactive project galleries
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1 h-1 bg-secondary rounded-full"></div>
                    Technical implementation details
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1 h-1 bg-secondary rounded-full"></div>
                    Results and impact metrics
                  </li>
                </ul>
              </div>
            </ScrollAnimation>

            <ScrollAnimation delay={300}>
              <div className="brutalist-card p-8">
                <h3 className="text-2xl font-bold mb-4">Skills & Technologies</h3>
                <p className="text-muted-foreground mb-4">
                  Comprehensive overview of technical capabilities and industry expertise.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <div className="w-1 h-1 bg-accent rounded-full"></div>
                    Programming languages proficiency
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1 h-1 bg-accent rounded-full"></div>
                    AI/ML frameworks and tools
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1 h-1 bg-accent rounded-full"></div>
                    Industry certifications
                  </li>
                </ul>
              </div>
            </ScrollAnimation>

            <ScrollAnimation delay={400}>
              <div className="brutalist-card p-8">
                <h3 className="text-2xl font-bold mb-4">Contact & Resume</h3>
                <p className="text-muted-foreground mb-4">
                  Clear pathways for potential employers or collaborators to get in touch.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <div className="w-1 h-1 bg-primary rounded-full"></div>
                    Professional contact information
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1 h-1 bg-primary rounded-full"></div>
                    Downloadable resume/CV
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1 h-1 bg-primary rounded-full"></div>
                    Social media and GitHub links
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
                Delivered a portfolio that effectively showcases technical expertise and personal brand.
              </p>
            </div>
          </ScrollAnimation>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <ScrollAnimation delay={100}>
              <div className="brutalist-card p-6 text-center">
                <div className="text-3xl font-bold mb-2 gradient-text">3 weeks</div>
                <h3 className="text-lg font-bold mb-2">Development Time</h3>
                <p className="text-muted-foreground text-sm">From concept to deployment</p>
              </div>
            </ScrollAnimation>

            <ScrollAnimation delay={200}>
              <div className="brutalist-card p-6 text-center">
                <div className="text-3xl font-bold mb-2 gradient-text">Unique</div>
                <h3 className="text-lg font-bold mb-2">Brand Identity</h3>
                <p className="text-muted-foreground text-sm">Memorable personal branding</p>
              </div>
            </ScrollAnimation>

            <ScrollAnimation delay={300}>
              <div className="brutalist-card p-6 text-center">
                <div className="text-3xl font-bold mb-2 gradient-text">AI/ML</div>
                <h3 className="text-lg font-bold mb-2">Industry Focus</h3>
                <p className="text-muted-foreground text-sm">Specialized for tech industry</p>
              </div>
            </ScrollAnimation>

            <ScrollAnimation delay={400}>
              <div className="brutalist-card p-6 text-center">
                <div className="text-3xl font-bold mb-2 gradient-text">Pro</div>
                <h3 className="text-lg font-bold mb-2">Quality Level</h3>
                <p className="text-muted-foreground text-sm">Enterprise-grade design</p>
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
                "Concept demo: demonstrates a clean structure for showcasing technical depth with professional polish."
              </blockquote>
              <div className="text-muted-foreground">
                <strong>LEAAS</strong> • Example Case Study
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-muted">
        <div className="container">
          <div className="brutalist-card p-12 text-center max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Need a Professional Portfolio?</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Let's create a portfolio that showcases your expertise and helps you stand out in your industry.
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