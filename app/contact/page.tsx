"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Textarea } from "@/components/ui/textarea"
import { Calendar, Clock, Mail, MapPin, Phone, Send } from "lucide-react"
import { useToast } from "@/components/ui/use-toast"

export default function ContactPage() {
  const { toast } = useToast()
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    university: "",
    projectType: "",
    deadline: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormState((prev) => ({ ...prev, [name]: value }))
  }

  const handleRadioChange = (value: string) => {
    setFormState((prev) => ({ ...prev, projectType: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    // Basic validation
    if (!formState.name || !formState.email || !formState.message) {
      toast({
        title: "Missing information",
        description: "Please fill out all required fields (name, email, and message).",
        variant: "destructive",
      })
      return
    }
    
    setIsSubmitting(true)

    try {
      // Send form data to our API endpoint
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formState),
      });

      const data = await response.json();

      if (data.success) {
        // On success
        setIsSubmitting(false)
        setIsSubmitted(true)
        // Show success toast
        toast({
          title: "Message sent successfully!",
          description: "We'll get back to you as soon as possible.",
        })
        // Reset form
        setFormState({
          name: "",
          email: "",
          phone: "",
          university: "",
          projectType: "",
          deadline: "",
          message: "",
        })
      } else {
        // On error
        console.error('Error sending email:', data.message)
        setIsSubmitting(false)
        toast({
          title: "Error sending message",
          description: "Please try again later or contact us directly via email.",
          variant: "destructive",
        })
      }
    } catch (error) {
      console.error('Error sending email:', error)
      setIsSubmitting(false)
      toast({
        title: "Error sending message",
        description: "Please try again later or contact us directly via email.",
        variant: "destructive",
      })
    }
  }

  return (
    <div className="noise-bg">
      {/* Hero Section */}
      <section className="py-24">
        <div className="container">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
              Get In <span className="gradient-text">Touch</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Have questions about our services? Ready to get started? We're here to help!
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="brutalist-card p-8">
              <h2 className="text-3xl font-bold mb-6">Contact Information</h2>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div>
                    <h3 className="font-bold text-lg">Email</h3>
                    <p className="text-muted-foreground">fluxxappmail@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div>
                    <h3 className="font-bold text-lg">Phone</h3>
                    <p className="text-muted-foreground">
                      <a 
                        href="https://wa.me/2349012995866" 
                        className="hover:text-secondary transition-colors hover:underline"
                        target="_blank" 
                        rel="noopener noreferrer"
                      >
                        +234 901 299 5866
                      </a>
                    </p>
                    <p className="text-muted-foreground">
                      <a 
                        href="https://wa.me/2347051399129" 
                        className="hover:text-secondary transition-colors hover:underline"
                        target="_blank" 
                        rel="noopener noreferrer"
                      >
                        +234 705 139 9129
                      </a>
                    </p>
                    <p className="text-muted-foreground">
                      <a 
                        href="https://wa.me/2349154368899" 
                        className="hover:text-secondary transition-colors hover:underline"
                        target="_blank" 
                        rel="noopener noreferrer"
                      >
                        +234 915 436 8899
                      </a>
                    </p>
                    <p className="text-muted-foreground">
                      <a 
                        href="https://wa.me/2349067812179" 
                        className="hover:text-secondary transition-colors hover:underline"
                        target="_blank" 
                        rel="noopener noreferrer"
                      >
                        +234 906 781 2179
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div>
                    <h3 className="font-bold text-lg">Location</h3>
                    <p className="text-muted-foreground">Lagos, Nigeria</p>
                    <p className="text-muted-foreground">(Remote services available nationwide)</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div>
                    <h3 className="font-bold text-lg">Working Hours</h3>
                    <p className="text-muted-foreground">24 Hours Service</p>
                    <p className="text-muted-foreground">Monday - Sunday</p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <h3 className="font-bold text-lg mb-4">Connect With Us</h3>
                <div className="flex gap-4 flex-wrap">
                  <Button variant="outline">
                    Twitter
                  </Button>
                  <Button variant="outline">
                    Instagram
                  </Button>
                  <Button variant="outline">
                    LinkedIn
                  </Button>
                  <Button variant="outline">
                    Facebook
                  </Button>
                  <Button variant="outline">
                    GitHub
                  </Button>
                </div>
              </div>
            </div>

            <div className="brutalist-card p-8">
              {isSubmitted ? (
                <div className="text-center py-12">
                  <div className="inline-block bg-primary/10 p-4 rounded-full mb-6">
                    <Send className="h-12 w-12 text-primary" />
                  </div>
                  <h2 className="text-3xl font-bold mb-4">Message Sent!</h2>
                  <p className="text-muted-foreground mb-8">
                    Thank you for reaching out. We'll get back to you within 24-48 hours.
                  </p>
                  <div className="flex gap-4 justify-center">
                    <Button onClick={() => setIsSubmitted(false)}>Send Another Message</Button>
                    <Button variant="outline" asChild>
                      <Link href="/packages">View Our Packages</Link>
                    </Button>
                  </div>
                </div>
              ) : (
                <>
                  <h2 className="text-3xl font-bold mb-6">Send Us a Message</h2>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="name">Full Name</Label>
                        <Input
                          id="name"
                          name="name"
                          value={formState.name}
                          onChange={handleChange}
                          placeholder="Your full name"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formState.email}
                          onChange={handleChange}
                          placeholder="Your email address"
                          required
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input
                          id="phone"
                          name="phone"
                          value={formState.phone}
                          onChange={handleChange}
                          placeholder="Your phone number"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="university">Company/Organization</Label>
                        <Input
                          id="university"
                          name="university"
                          value={formState.university}
                          onChange={handleChange}
                          placeholder="Your company or organization"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label>Project Type</Label>
                      <RadioGroup value={formState.projectType} onValueChange={handleRadioChange}>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="web" id="web" />
                            <Label htmlFor="web">Web App</Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="mobile" id="mobile" />
                            <Label htmlFor="mobile">Mobile App</Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="ai" id="ai" />
                            <Label htmlFor="ai">AI/ML Project</Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="other" id="other" />
                            <Label htmlFor="other">Other</Label>
                          </div>
                        </div>
                      </RadioGroup>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="deadline">Project Deadline</Label>
                      <div className="relative">
                        <Input
                          id="deadline"
                          name="deadline"
                          type="date"
                          value={formState.deadline}
                          onChange={handleChange}
                        />
                        <Calendar className="absolute right-3 top-3 h-4 w-4 text-muted-foreground" />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Project Details</Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formState.message}
                        onChange={handleChange}
                        placeholder="Describe your project requirements, features, and any specific technical requirements."
                        rows={5}
                        required
                      />
                    </div>

                    <Button type="submit" className="w-full" disabled={isSubmitting}>
                      {isSubmitting ? (
                        <>
                          <span className="animate-spin mr-2">⚪</span> Sending...
                        </>
                      ) : "Send Message"}
                    </Button>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-muted">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Quick answers to common questions about our services.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="brutalist-card p-6">
              <h3 className="text-xl font-bold mb-2">How soon can you start on my project?</h3>
              <p className="text-muted-foreground">
                We can typically start within 1-2 weeks of finalizing project details and receiving the initial payment.
                For urgent projects, we may be able to accommodate faster timelines.
              </p>
            </div>

            <div className="brutalist-card p-6">
              <h3 className="text-xl font-bold mb-2">Do you sign NDAs?</h3>
              <p className="text-muted-foreground">
                Yes, we're happy to sign non-disclosure agreements to protect your project ideas and details. We take
                confidentiality seriously.
              </p>
            </div>

            <div className="brutalist-card p-6">
              <h3 className="text-xl font-bold mb-2">What if I need changes after delivery?</h3>
              <p className="text-muted-foreground">
                Depending on your package, you'll have a certain number of revision cycles. Additional revisions beyond
                your package allowance can be arranged at an additional cost.
              </p>
            </div>

            <div className="brutalist-card p-6">
              <h3 className="text-xl font-bold mb-2">How do payments work?</h3>
              <p className="text-muted-foreground">
                We typically require a 50% deposit to begin work, with the remaining balance due upon project
                completion. For larger projects, we can arrange milestone-based payments.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="container">
          <div className="brutalist-card p-12 text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to Get Started?</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
              Book a free consultation to discuss your project requirements and get a custom quote.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8">
                <Link href="/packages">View Packages</Link>
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8">
                <Calendar className="mr-2 h-5 w-5" /> Schedule a Call
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
