"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { ScrollAnimation } from "@/components/scroll-animations"
import { HelpCircle, MessageSquare, Search } from "lucide-react"

interface FAQItem {
  question: string
  answer: string | React.ReactNode
}

interface FAQCategory {
  title: string
  icon: React.ReactNode
  faqs: FAQItem[]
}

interface FAQSectionProps {
  title?: string
  description?: string
  showCTA?: boolean
  categories?: FAQCategory[]
}

const defaultFAQs: FAQCategory[] = [
  {
    title: "General Questions",
    icon: <HelpCircle className="h-5 w-5" />,
    faqs: [
      {
        question: "What types of projects do you work on?",
        answer: (
          <div className="space-y-2">
            <p>We specialize in a wide range of development projects, including:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Web applications</li>
              <li>Mobile apps (iOS and Android)</li>
              <li>AI/ML projects</li>
              <li>IoT systems</li>
              <li>Blockchain applications</li>
              <li>Backend systems and APIs</li>
              <li>Database design and implementation</li>
            </ul>
            <p>Our team has expertise in various technologies and can adapt to most project requirements.</p>
          </div>
        ),
      },
      {
        question: "How long does it take to complete a project?",
        answer:
          "Project timelines vary based on complexity and requirements. Typically, Starter projects take 2-3 weeks, Pro projects take 3-5 weeks, and Premium projects take 4-8 weeks. We'll provide a detailed timeline during our initial consultation based on your specific requirements and deadlines.",
      },
      {
        question: "Will I understand the code after completion?",
        answer:
          "Yes! We don't just build your project; we ensure you understand it thoroughly. Depending on your package, we provide comprehensive documentation, code walkthroughs, knowledge transfer sessions, and technical Q&A support. Our goal is to ensure you can confidently understand and explain every aspect of your project.",
      },
    ],
  },
  {
    title: "Technical Questions",
    icon: <Code className="h-5 w-5" />,
    faqs: [
      {
        question: "What technologies do you work with?",
        answer: (
          <div className="space-y-2">
            <p>We work with a wide range of technologies, including but not limited to:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Frontend: React, Next.js, Vue, Angular, Tailwind CSS</li>
              <li>Mobile: React Native, Flutter, Swift, Kotlin</li>
              <li>Backend: Node.js, Python, Django, Laravel, Express</li>
              <li>Databases: MongoDB, PostgreSQL, MySQL, Firebase</li>
              <li>AI/ML: TensorFlow, PyTorch, scikit-learn, NLTK</li>
              <li>Cloud: AWS, Azure, Google Cloud, Vercel, Netlify</li>
            </ul>
            <p>We'll recommend the best tech stack for your specific project requirements and growth goals.</p>
          </div>
        ),
      },
      {
        question: "Can you integrate with specific APIs or services?",
        answer:
          "Yes, we can integrate with a wide range of third-party APIs and services. Whether you need payment processing, authentication, mapping, social media integration, or any other service, we can incorporate it into your project. Just let us know your requirements during the consultation.",
      },
      {
        question: "Do you provide the source code?",
        answer:
          "You receive the complete source code for your project, along with documentation explaining how it works. The code is well-commented and follows best practices, making it easy for you to understand, maintain, and build upon in the future.",
      },
    ],
  },
  {
    title: "Payment & Process",
    icon: <CreditCard className="h-5 w-5" />,
    faqs: [
      {
        question: "How do payments work?",
        answer:
          "We typically require a 50% deposit to begin work, with the remaining balance due upon project completion. For larger projects, we can arrange milestone-based payments. We accept bank transfers, mobile money, and other payment methods.",
      },
      {
        question: "Can I request revisions after delivery?",
        answer: (
          <div className="space-y-2">
            <p>Yes, depending on your package. Revision allowances are as follows:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Starter: No revisions included</li>
              <li>Pro: 1 round of revisions</li>
              <li>Premium: 3 rounds of revisions</li>
              <li>Custom: Unlimited revisions within the agreed scope</li>
            </ul>
            <p>Additional revisions beyond your package allowance can be arranged at an additional cost.</p>
          </div>
        ),
      },
      {
        question: "Do you offer payment plans?",
        answer: (
          <div className="space-y-2">
            <p>Yes, we offer flexible payment plans to accommodate various budgets. Options include:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Standard: 50% deposit, 50% upon completion</li>
              <li>Milestone: Payments tied to project milestones</li>
              <li>Monthly: Equal monthly installments (for longer projects)</li>
            </ul>
            <p>We can discuss payment options during our consultation to find a plan that works for you.</p>
          </div>
        ),
      },
    ],
  },
  {
    title: "Support & Delivery",
    icon: <LifeBuoy className="h-5 w-5" />,
    faqs: [
      {
        question: "Is my project idea confidential?",
        answer:
          "Yes, we treat all project ideas and details with strict confidentiality. We're happy to sign an NDA (Non-Disclosure Agreement) if required for additional peace of mind. Your intellectual property remains yours, and we will never reuse or resell your project.",
      },
      {
        question: "What if I'm not satisfied with the work?",
        answer:
          "Customer satisfaction is our priority. If you're not satisfied with any aspect of our work, we'll work with you to address your concerns. Our process includes regular check-ins and milestone approvals to ensure we're aligned with your expectations throughout the project.",
      },
      {
        question: "Do you provide ongoing support after project completion?",
        answer: (
          <div className="space-y-2">
            <p>Yes, we provide support after project completion:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Bug fixes for 30 days after delivery (all packages)</li>
              <li>Technical handover sessions (Pro and above)</li>
              <li>Technical Q&A support (all packages)</li>
              <li>Extended support available as an add-on</li>
            </ul>
          </div>
        ),
      },
    ],
  },
]

export function FAQSection({
  title = "Frequently Asked Questions",
  description = "Find answers to common questions about our services, process, and policies.",
  showCTA = true,
  categories = defaultFAQs,
}: FAQSectionProps) {
  const [activeCategory, setActiveCategory] = useState<string>(categories[0].title)

  return (
    <section className="py-24 bg-muted">
      <div className="container">
        <ScrollAnimation>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold mb-4">{title}</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">{description}</p>
          </div>
        </ScrollAnimation>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-1">
            <ScrollAnimation animation="fade-in-left">
              <div className="brutalist-card p-6 sticky top-24">
                <h3 className="text-xl font-bold mb-4">Categories</h3>
                <div className="space-y-2">
                  {categories.map((category) => (
                    <Button
                      key={category.title}
                      variant={activeCategory === category.title ? "default" : "ghost"}
                      className="w-full justify-start"
                      onClick={() => setActiveCategory(category.title)}
                    >
                      <span className="mr-2">{category.icon}</span>
                      {category.title}
                    </Button>
                  ))}
                </div>
              </div>
            </ScrollAnimation>
          </div>

          <div className="lg:col-span-3">
            <ScrollAnimation animation="fade-in-right">
              {categories.map((category) => (
                <div
                  key={category.title}
                  className={`space-y-4 ${activeCategory === category.title ? "block" : "hidden"}`}
                >
                  <div className="brutalist-card p-6">
                    <Accordion type="single" collapsible className="w-full">
                      {category.faqs.map((faq, index) => (
                        <AccordionItem key={index} value={`item-${index}`} className="border-b border-border">
                          <AccordionTrigger className="text-lg font-bold py-4">{faq.question}</AccordionTrigger>
                          <AccordionContent className="text-muted-foreground pt-2 pb-4">{faq.answer}</AccordionContent>
                        </AccordionItem>
                      ))}
                    </Accordion>
                  </div>
                </div>
              ))}
            </ScrollAnimation>

            {showCTA && (
              <ScrollAnimation animation="fade-in-up" delay={200}>
                <div className="mt-8 brutalist-card p-6 text-center">
                  <h3 className="text-xl font-bold mb-2">Still have questions?</h3>
                  <p className="text-muted-foreground mb-4">
                    We're here to help! Contact us for more information about our services.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button asChild>
                      <Link href="/contact">
                        <MessageSquare className="mr-2 h-4 w-4" /> Contact Us
                      </Link>
                    </Button>
                    <Button variant="outline" asChild>
                      <Link href="/faq">
                        <Search className="mr-2 h-4 w-4" /> Browse All FAQs
                      </Link>
                    </Button>
                  </div>
                </div>
              </ScrollAnimation>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

import { Code, CreditCard, LifeBuoy } from "lucide-react"
