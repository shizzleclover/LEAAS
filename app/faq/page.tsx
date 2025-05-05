import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function FAQPage() {
  return (
    <div className="noise-bg">
      {/* Hero Section */}
      <section className="py-24">
        <div className="container">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
              Frequently Asked <span className="gradient-text">Questions</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Find answers to common questions about our services, process, and policies.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1" className="brutalist-border mb-4">
                <AccordionTrigger className="text-xl font-bold px-6">
                  What types of projects do you work on?
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4">
                  <p className="text-muted-foreground">
                    We specialize in innovative products for startups and businesses, including web applications, mobile
                    apps, AI/ML projects, backend systems, and full-stack solutions. Our team has expertise in various
                    technologies and can adapt to most business and technical requirements.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="brutalist-border mb-4">
                <AccordionTrigger className="text-xl font-bold px-6">
                  How long does it take to complete a project?
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4">
                  <p className="text-muted-foreground">
                    Project timelines vary based on complexity and requirements. Typically:
                  </p>
                  <ul className="list-disc pl-6 mt-2 space-y-1 text-muted-foreground">
                    <li>Starter projects: 2-3 weeks</li>
                    <li>Pro projects: 3-5 weeks</li>
                    <li>Premium projects: 4-8 weeks</li>
                    <li>Custom projects: Timeline determined during consultation</li>
                  </ul>
                  <p className="text-muted-foreground mt-2">
                    We'll provide a detailed timeline during our initial consultation based on your specific
                    requirements and deadline.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="brutalist-border mb-4">
                <AccordionTrigger className="text-xl font-bold px-6">
                  Will I understand the code after completion?
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4">
                  <p className="text-muted-foreground">
                    We don't just build your project; we ensure you understand it thoroughly. Depending on your package,
                    we provide:
                  </p>
                  <ul className="list-disc pl-6 mt-2 space-y-1 text-muted-foreground">
                    <li>Comprehensive documentation</li>
                    <li>Code walkthroughs and explanations</li>
                    <li>Technical presentation sessions</li>
                    <li>Technical Q&A support</li>
                  </ul>
                  <p className="text-muted-foreground mt-2">
                    Our goal is to ensure you can confidently understand and maintain your project after delivery.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="brutalist-border mb-4">
                <AccordionTrigger className="text-xl font-bold px-6">
                  What technologies do you work with?
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4">
                  <p className="text-muted-foreground">
                    We work with a wide range of technologies, including but not limited to:
                  </p>
                  <ul className="list-disc pl-6 mt-2 space-y-1 text-muted-foreground">
                    <li>Frontend: React, Next.js, Vue, Angular, Tailwind CSS</li>
                    <li>Mobile: React Native, Flutter, Swift, Kotlin</li>
                    <li>Backend: Node.js, Python, Django, Laravel, Express</li>
                    <li>Databases: MongoDB, PostgreSQL, MySQL, Firebase</li>
                    <li>AI/ML: TensorFlow, PyTorch, scikit-learn, NLTK</li>
                    <li>Cloud: AWS, Azure, Google Cloud, Vercel, Netlify</li>
                  </ul>
                  <p className="text-muted-foreground mt-2">
                    We'll recommend the best tech stack for your specific project requirements and business goals.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5" className="brutalist-border mb-4">
                <AccordionTrigger className="text-xl font-bold px-6">How do payments work?</AccordionTrigger>
                <AccordionContent className="px-6 pb-4">
                  <p className="text-muted-foreground">
                    We typically require a 50% deposit to begin work, with the remaining balance due upon project
                    completion. For larger projects, we can arrange milestone-based payments. We accept bank transfers,
                    mobile money, and other payment methods.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-6" className="brutalist-border mb-4">
                <AccordionTrigger className="text-xl font-bold px-6">
                  Can I request revisions after delivery?
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4">
                  <p className="text-muted-foreground">
                    Yes, depending on your package. Revision allowances are as follows:
                  </p>
                  <ul className="list-disc pl-6 mt-2 space-y-1 text-muted-foreground">
                    <li>Starter: No revisions included</li>
                    <li>Pro: 1 round of revisions</li>
                    <li>Premium: 3 rounds of revisions</li>
                    <li>Custom: Unlimited revisions within the agreed scope</li>
                  </ul>
                  <p className="text-muted-foreground mt-2">
                    Additional revisions beyond your package allowance can be arranged at an additional cost.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-7" className="brutalist-border mb-4">
                <AccordionTrigger className="text-xl font-bold px-6">Do you offer payment plans?</AccordionTrigger>
                <AccordionContent className="px-6 pb-4">
                  <p className="text-muted-foreground">
                    Yes, we offer flexible payment plans to accommodate various business budgets. Options include:
                  </p>
                  <ul className="list-disc pl-6 mt-2 space-y-1 text-muted-foreground">
                    <li>Standard: 50% deposit, 50% upon completion</li>
                    <li>Milestone: Payments tied to project milestones</li>
                    <li>Monthly: Equal monthly installments (for longer projects)</li>
                  </ul>
                  <p className="text-muted-foreground mt-2">
                    We can discuss payment options during our consultation to find a plan that works for you.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-8" className="brutalist-border mb-4">
                <AccordionTrigger className="text-xl font-bold px-6">Is my project idea confidential?</AccordionTrigger>
                <AccordionContent className="px-6 pb-4">
                  <p className="text-muted-foreground">
                    Yes, we treat all project ideas and details with strict confidentiality. We're happy to sign an NDA
                    (Non-Disclosure Agreement) if required for additional peace of mind. Your intellectual property
                    remains yours, and we will never reuse or resell your project to other clients.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-9" className="brutalist-border mb-4">
                <AccordionTrigger className="text-xl font-bold px-6">
                  What if I'm not satisfied with the work?
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4">
                  <p className="text-muted-foreground">
                    Customer satisfaction is our priority. If you're not satisfied with any aspect of our work, we'll
                    work with you to address your concerns. Our process includes regular check-ins and milestone
                    approvals to ensure we're aligned with your expectations throughout the project.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-10" className="brutalist-border mb-4">
                <AccordionTrigger className="text-xl font-bold px-6">
                  Do you provide ongoing support after project completion?
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4">
                  <p className="text-muted-foreground">Yes, we provide support after project completion:</p>
                  <ul className="list-disc pl-6 mt-2 space-y-1 text-muted-foreground">
                    <li>Bug fixes for 30 days after delivery (all packages)</li>
                    <li>Technical presentation support (Pro and above)</li>
                    <li>Technical Q&A support (all packages)</li>
                    <li>Extended support available as an add-on</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
            </Accordion>

            <div className="text-center mt-12">
              <p className="text-muted-foreground mb-6">
                Don't see your question here? Feel free to reach out to us directly.
              </p>
              <Button size="lg" asChild>
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
