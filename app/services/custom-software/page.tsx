"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ScrollAnimation } from "@/components/scroll-animations"
import { Check, Database, Settings, BarChart3, Shield, Cpu, Cloud } from "lucide-react"

export default function CustomSoftwarePage() {
  return (
    <div className="noise-bg">
      {/* Hero Section */}
      <section className="py-24">
        <div className="container">
          <ScrollAnimation>
            <div className="text-center mb-16">
              <div className="text-6xl mb-6">⚡</div>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
                Custom <span className="gradient-text">Software</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
                Complex SaaS platforms, internal tools, and enterprise-grade solutions tailored to your specific business needs.
              </p>
              <div className="text-2xl font-bold text-primary mb-8">Starting from $2,000</div>
              <Button size="lg" className="text-lg px-8">
                <Link href="/contact">Get Free Launch Consultation</Link>
              </Button>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* What We Build */}
      <section className="py-24 bg-muted">
        <div className="container">
          <ScrollAnimation>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">What We Build</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Enterprise-grade software solutions designed to scale with your business.
              </p>
            </div>
          </ScrollAnimation>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ScrollAnimation delay={100}>
              <div className="brutalist-card p-6">
                <div className="bg-primary/10 p-3 rounded-full w-fit mb-4">
                  <Database className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">SaaS Platforms</h3>
                <p className="text-muted-foreground">
                  Multi-tenant SaaS applications with subscription management, user dashboards, and analytics.
                </p>
              </div>
            </ScrollAnimation>

            <ScrollAnimation delay={200}>
              <div className="brutalist-card p-6">
                <div className="bg-secondary/10 p-3 rounded-full w-fit mb-4">
                  <Settings className="h-6 w-6 text-secondary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Internal Tools</h3>
                <p className="text-muted-foreground">
                  Custom business tools, admin panels, and workflow automation systems to streamline operations.
                </p>
              </div>
            </ScrollAnimation>

            <ScrollAnimation delay={300}>
              <div className="brutalist-card p-6">
                <div className="bg-accent/10 p-3 rounded-full w-fit mb-4">
                  <BarChart3 className="h-6 w-6 text-accent" />
                </div>
                <h3 className="text-xl font-bold mb-2">Analytics Dashboards</h3>
                <p className="text-muted-foreground">
                  Real-time data visualization, reporting systems, and business intelligence platforms.
                </p>
              </div>
            </ScrollAnimation>

            <ScrollAnimation delay={400}>
              <div className="brutalist-card p-6">
                <div className="bg-primary/10 p-3 rounded-full w-fit mb-4">
                  <Cpu className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">AI/ML Integration</h3>
                <p className="text-muted-foreground">
                  Machine learning models, AI-powered features, and intelligent automation systems.
                </p>
              </div>
            </ScrollAnimation>

            <ScrollAnimation delay={500}>
              <div className="brutalist-card p-6">
                <div className="bg-secondary/10 p-3 rounded-full w-fit mb-4">
                  <Cloud className="h-6 w-6 text-secondary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Microservices</h3>
                <p className="text-muted-foreground">
                  Scalable microservices architecture with containerization and cloud deployment.
                </p>
              </div>
            </ScrollAnimation>

            <ScrollAnimation delay={600}>
              <div className="brutalist-card p-6">
                <div className="bg-accent/10 p-3 rounded-full w-fit mb-4">
                  <Shield className="h-6 w-6 text-accent" />
                </div>
                <h3 className="text-xl font-bold mb-2">Enterprise Security</h3>
                <p className="text-muted-foreground">
                  Advanced security features, compliance standards, and data protection systems.
                </p>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="py-24">
        <div className="container">
          <ScrollAnimation>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Technologies We Use</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                We choose the right technology stack based on your specific requirements and scalability needs.
              </p>
            </div>
          </ScrollAnimation>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <ScrollAnimation delay={100}>
              <div className="brutalist-card p-6 text-center">
                <h3 className="text-lg font-bold mb-3">Frontend</h3>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <div>React / Next.js</div>
                  <div>Vue.js / Nuxt.js</div>
                  <div>Angular</div>
                  <div>TypeScript</div>
                </div>
              </div>
            </ScrollAnimation>

            <ScrollAnimation delay={200}>
              <div className="brutalist-card p-6 text-center">
                <h3 className="text-lg font-bold mb-3">Backend</h3>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <div>Node.js / Express</div>
                  <div>Python / Django</div>
                  <div>Java / Spring</div>
                  <div>.NET Core</div>
                </div>
              </div>
            </ScrollAnimation>

            <ScrollAnimation delay={300}>
              <div className="brutalist-card p-6 text-center">
                <h3 className="text-lg font-bold mb-3">Database</h3>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <div>PostgreSQL</div>
                  <div>MongoDB</div>
                  <div>Redis</div>
                  <div>Elasticsearch</div>
                </div>
              </div>
            </ScrollAnimation>

            <ScrollAnimation delay={400}>
              <div className="brutalist-card p-6 text-center">
                <h3 className="text-lg font-bold mb-3">Cloud & DevOps</h3>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <div>AWS / Azure / GCP</div>
                  <div>Docker / Kubernetes</div>
                  <div>CI/CD Pipelines</div>
                  <div>Monitoring & Logging</div>
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
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Development Process</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                From requirements to deployment in 8-12 weeks with our enterprise development process.
              </p>
            </div>
          </ScrollAnimation>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <ScrollAnimation delay={100}>
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center text-white font-bold text-xl mb-4 mx-auto">
                  1
                </div>
                <h3 className="text-xl font-bold mb-2">Analysis</h3>
                <p className="text-muted-foreground">
                  Deep dive into your business requirements and technical specifications.
                </p>
              </div>
            </ScrollAnimation>

            <ScrollAnimation delay={200}>
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-secondary flex items-center justify-center text-secondary-foreground font-bold text-xl mb-4 mx-auto">
                  2
                </div>
                <h3 className="text-xl font-bold mb-2">Architecture</h3>
                <p className="text-muted-foreground">
                  Design scalable system architecture and choose optimal technology stack.
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
                  Agile development with regular demos and continuous integration.
                </p>
              </div>
            </ScrollAnimation>

            <ScrollAnimation delay={400}>
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center text-white font-bold text-xl mb-4 mx-auto">
                  4
                </div>
                <h3 className="text-xl font-bold mb-2">Deployment</h3>
                <p className="text-muted-foreground">
                  Production deployment with monitoring, security, and ongoing support.
                </p>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <ScrollAnimation animation="fade-in-left">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Enterprise-Grade Quality</h2>
              <p className="text-xl text-muted-foreground mb-8">
                Our custom software solutions are built to enterprise standards with scalability, security, and maintainability in mind.
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold">Scalable Architecture</h3>
                    <p className="text-muted-foreground">Built to handle growth from startup to enterprise</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold">Security First</h3>
                    <p className="text-muted-foreground">Enterprise-grade security and compliance standards</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold">Performance Optimized</h3>
                    <p className="text-muted-foreground">High-performance systems that scale under load</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold">Comprehensive Testing</h3>
                    <p className="text-muted-foreground">Unit, integration, and end-to-end testing</p>
                  </div>
                </div>
              </div>
            </ScrollAnimation>

            <ScrollAnimation animation="fade-in-right">
              <div className="brutalist-border overflow-hidden rounded-lg">
                <Image
                  src="/home.jpg"
                  alt="Custom Software Development"
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
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to Build Custom Software?</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Let's discuss your complex software requirements and create a solution that perfectly fits your business needs.
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