"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ScrollAnimation } from "@/components/scroll-animations"
import { ExternalLink, Github, Globe, Smartphone, Database, Zap, Users, TrendingUp, DollarSign, Rocket } from "lucide-react"

const projects = [
  {
    id: 1,
    title: "Walkly – Explore Your City Differently",
    category: "MVP Development",
    description: "A progressive web app (PWA) designed to make everyday walks more adventurous. Walkly generates circular walking routes tailored to users, encouraging exploration of new neighborhoods and hidden gems.",
    image: "/home.jpg",
    technologies: ["React", "Vite", "Tailwind CSS", "Supabase", "Google Maps API"],
    results: [
      "Progressive Web App (PWA)",
      "Smart route generation algorithm",
      "Seamless mobile experience",
      "Location-based discovery features"
    ],
    metrics: {
      timeline: "4 weeks",
      type: "PWA",
      features: "Route Gen",
      platform: "Web"
    },
    links: {
      live: "https://walkly.up.railway.app/",
      case_study: "/projects/walkly"
    },
    testimonial: {
      text: "Concept demo showcasing route generation and PWA performance.",
      author: "LEAAS",
      role: "Prototype Showcase"
    }
  },
  {
    id: 2,
    title: "Text the Answer – App Landing Page",
    category: "MVP Development",
    description: "A conversion-focused landing page for a mobile app that brings quizzes and trivia to life. Designed to grab attention instantly with bold visuals and crisp copy, showcasing app features while driving downloads.",
    image: "/home.jpg",
    technologies: ["React", "Next.js", "Tailwind CSS", "Framer Motion"],
    results: [
      "High-conversion landing page",
      "Bold, attention-grabbing design",
      "Optimized for app downloads",
      "Clean, persuasive user flow"
    ],
    metrics: {
      timeline: "2 weeks",
      focus: "Conversion",
      type: "Landing",
      goal: "Downloads"
    },
    links: {
      live: "https://v0-fyv.vercel.app/",
      case_study: "/projects/text-the-answer"
    },
    testimonial: {
      text: "Concept demo for a conversion‑focused landing page with bold visuals and crisp copy.",
      author: "LEAAS",
      role: "Prototype Showcase"
    }
  },
  {
    id: 3,
    title: "Custom AI/ML Developer Portfolio",
    category: "Custom Software",
    description: "A fully personalized portfolio site for an AI/ML engineer, designed to stand out in a competitive industry. Leveraging bespoke UI elements and optimized layouts to highlight technical expertise.",
    image: "/home.jpg",
    technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    results: [
      "Unique, memorable design",
      "Optimized for technical showcase",
      "Industry-specific customization",
      "Professional brand representation"
    ],
    metrics: {
      timeline: "3 weeks",
      industry: "AI/ML",
      type: "Portfolio",
      focus: "Personal Brand"
    },
    links: {
      live: "https://timi-portfolio-eight.vercel.app/",
      case_study: "/projects/ai-ml-portfolio"
    },
    testimonial: {
      text: "Example portfolio built to demonstrate structure, layout, and interactions.",
      author: "LEAAS",
      role: "Example Case Study"
    }
  },
  {
    id: 4,
    title: "🐻 Labubu Showroom – Social Hub",
    category: "Custom Software",
    description: "A vibrant social media web app where users showcase, trade, and interact around Labubu collectibles. Blending community features with sleek design to create a fun, interactive space for collectors and fans.",
    image: "/home.jpg",
    technologies: ["React", "Node.js", "MongoDB", "Socket.io", "Cloudinary"],
    results: [
      "Active collector community",
      "Real-time social interactions",
      "Trading and showcase features",
      "Engaging user experience"
    ],
    metrics: {
      timeline: "6 weeks",
      type: "Social App",
      community: "Collectors",
      features: "Trading"
    },
    links: {
      live: "https://labubu-web.onrender.com/",
      case_study: "/projects/labubu-showroom"
    },
    testimonial: {
      text: "Concept platform for collectors with social and trading features.",
      author: "LEAAS",
      role: "Concept Overview"
    }
  }
]

const categories = ["All", "MVP Development", "Custom Software", "Landing Pages", "Portfolios"]

export default function ProjectsPage() {
  return (
    <div className="noise-bg">
      {/* Hero Section */}
      <section className="py-24">
        <div className="container">
          <ScrollAnimation>
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
                Our <span className="gradient-text">Success Stories</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
                Real projects, real results. See how we've helped founders and businesses turn their ideas into successful products.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                {categories.map((category) => (
                  <Button key={category} variant="outline" className="text-sm">
                    {category}
                  </Button>
                ))}
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-24 bg-muted">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {projects.map((project, index) => (
              <div key={project.id} className="brutalist-card overflow-hidden">
                <div className="relative">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={600}
                    height={300}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-primary text-primary-foreground px-3 py-1 text-sm font-bold rounded-full">
                    {project.category}
                  </div>
                </div>
                
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                  <p className="text-muted-foreground mb-6">{project.description}</p>
                  
                  {/* Metrics */}
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    {Object.entries(project.metrics).map(([key, value]) => (
                      <div key={key} className="text-center">
                        <div className="text-lg font-bold text-primary">{value}</div>
                        <div className="text-sm text-muted-foreground capitalize">{key.replace('_', ' ')}</div>
                      </div>
                    ))}
                  </div>

                  {/* Technologies */}
                  <div className="mb-6">
                    <h4 className="font-bold mb-2">Technologies Used:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span key={tech} className="bg-muted px-2 py-1 text-xs rounded">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Results */}
                  <div className="mb-6">
                    <h4 className="font-bold mb-2">Key Results:</h4>
                    <ul className="space-y-1">
                      {project.results.slice(0, 3).map((result, idx) => (
                        <li key={idx} className="text-sm text-muted-foreground flex items-center gap-2">
                          <div className="w-1 h-1 bg-primary rounded-full"></div>
                          {result}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Testimonial */}
                  <div className="bg-muted/50 p-4 rounded-lg mb-6">
                    <p className="text-sm italic mb-2">"{project.testimonial.text}"</p>
                    <div className="text-xs text-muted-foreground">
                      <strong>{project.testimonial.author}</strong>, {project.testimonial.role}
                    </div>
                  </div>

                  {/* Links */}
                  <div className="flex gap-2">
                    {project.links.live && (
                      <Button size="sm" variant="outline" asChild>
                        <Link href={project.links.live}>
                          <Globe className="h-4 w-4 mr-2" />
                          Live Demo
                        </Link>
                      </Button>
                    )}
                    {project.links.case_study && (
                      <Button size="sm" variant="outline" asChild>
                        <Link href={project.links.case_study}>
                          <ExternalLink className="h-4 w-4 mr-2" />
                          Case Study
                        </Link>
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24">
        <div className="container">
          <ScrollAnimation>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Growing Portfolio</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Building diverse products across industries with cutting-edge technology.
              </p>
            </div>
          </ScrollAnimation>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <ScrollAnimation delay={100}>
              <div className="brutalist-card p-6 text-center">
                <div className="bg-primary/10 p-3 rounded-full w-fit mx-auto mb-4">
                  <Rocket className="h-6 w-6 text-primary" />
                </div>
                <div className="text-3xl font-bold mb-2 gradient-text">In Progress</div>
                <h3 className="text-lg font-bold mb-2">Portfolio</h3>
                <p className="text-muted-foreground text-sm">Demos and early partner projects under development.</p>
              </div>
            </ScrollAnimation>

            <ScrollAnimation delay={200}>
              <div className="brutalist-card p-6 text-center">
                <div className="bg-secondary/10 p-3 rounded-full w-fit mx-auto mb-4">
                  <Database className="h-6 w-6 text-secondary" />
                </div>
                <div className="text-3xl font-bold mb-2 gradient-text">Flexible</div>
                <h3 className="text-lg font-bold mb-2">Tech Stack</h3>
                <p className="text-muted-foreground text-sm">We adapt to preferred technologies and requirements.</p>
              </div>
            </ScrollAnimation>

            <ScrollAnimation delay={300}>
              <div className="brutalist-card p-6 text-center">
                <div className="bg-accent/10 p-3 rounded-full w-fit mx-auto mb-4">
                  <Globe className="h-6 w-6 text-accent" />
                </div>
                <div className="text-3xl font-bold mb-2 gradient-text">Exploring</div>
                <h3 className="text-lg font-bold mb-2">Industries</h3>
                <p className="text-muted-foreground text-sm">Marketplaces, social apps, portfolios, landing pages.</p>
              </div>
            </ScrollAnimation>

            <ScrollAnimation delay={400}>
              <div className="brutalist-card p-6 text-center">
                <div className="bg-primary/10 p-3 rounded-full w-fit mx-auto mb-4">
                  <Zap className="h-6 w-6 text-primary" />
                </div>
                <div className="text-3xl font-bold mb-2 gradient-text">Future</div>
                <h3 className="text-lg font-bold mb-2">Focused</h3>
                <p className="text-muted-foreground text-sm">Building toward scalable SaaS & startup tools.</p>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-muted">
        <div className="container">
          <ScrollAnimation>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Proven Process</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                The same process that delivered these results can work for your project too.
              </p>
            </div>
          </ScrollAnimation>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <ScrollAnimation delay={100}>
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center text-white font-bold text-xl mb-4 mx-auto">
                  1
                </div>
                <h3 className="text-xl font-bold mb-2">Discovery</h3>
                <p className="text-muted-foreground">
                  We understand your vision, users, and success metrics to create the perfect launch strategy.
                </p>
              </div>
            </ScrollAnimation>

            <ScrollAnimation delay={200}>
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-secondary flex items-center justify-center text-secondary-foreground font-bold text-xl mb-4 mx-auto">
                  2
                </div>
                <h3 className="text-xl font-bold mb-2">Design & Plan</h3>
                <p className="text-muted-foreground">
                  Create user-focused designs and technical architecture that scales with your growth.
                </p>
              </div>
            </ScrollAnimation>

            <ScrollAnimation delay={300}>
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-accent flex items-center justify-center text-accent-foreground font-bold text-xl mb-4 mx-auto">
                  3
                </div>
                <h3 className="text-xl font-bold mb-2">Build</h3>
                <p className="text-muted-foreground">
                  Rapid development with weekly demos and continuous feedback integration.
                </p>
              </div>
            </ScrollAnimation>

            <ScrollAnimation delay={400}>
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center text-white font-bold text-xl mb-4 mx-auto">
                  4
                </div>
                <h3 className="text-xl font-bold mb-2">Launch & Scale</h3>
                <p className="text-muted-foreground">
                  Deploy, monitor, and iterate based on real user feedback and growth metrics.
                </p>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="container">
          <div className="brutalist-card p-12 text-center max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to Start Your First Success Story?</h2>
            <p className="text-xl text-muted-foreground mb-8">Let's plan your launch and build a prototype that moves you forward.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8">
                <Link href="/contact">Get Free Launch Consultation</Link>
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8">
                <Link href="/packages">View Our Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}