"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
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
    budgetRange: "",
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

  const handleSelectChange = (value: string) => {
    setFormState((prev) => ({ ...prev, budgetRange: value }))
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
          budgetRange: "",
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
              Launch Your <span className="gradient-text">Idea</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Ready to turn your idea into a working product? Let's discuss your project and create a custom launch plan.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="brutalist-card p-8">
              <h2 className="text-3xl font-bold mb-6">Launch Consultation</h2>

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
                  </div>
                </div>

                {/* <div className="flex items-start gap-4">
                  <div>
                    <h3 className="font-bold text-lg">Location</h3>
                    <p className="text-muted-foreground">Lagos, Nigeria</p>
                    <p className="text-muted-foreground">(Remote services available Worldwide)</p>
                  </div>
                </div> */}

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
                  {/* <Button variant="outline">
                    GitHub
                  </Button> */}
                </div>
              </div>
            </div>

            <div className="brutalist-card p-8">
              {isSubmitted ? (
                <div className="text-center py-12">
                  <div className="inline-block bg-primary/10 p-4 rounded-full mb-6">
                    <Send className="h-12 w-12 text-primary" />
                  </div>
                  <h2 className="text-3xl font-bold mb-4">Launch Consultation Requested!</h2>
                  <p className="text-muted-foreground mb-8">
                    Thank you for your interest! We'll review your project and get back to you within 24-48 hours with next steps.
                  </p>
                  <div className="flex gap-4 justify-center">
                    <Button onClick={() => setIsSubmitted(false)}>Submit Another Project</Button>
                    <Button variant="outline" asChild>
                      <Link href="/packages">View Our Services</Link>
                    </Button>
                  </div>
                </div>
              ) : (
                <>
                  <h2 className="text-3xl font-bold mb-6">Get Your Free Launch Consultation</h2>
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
                      <Label>What do you want to build?</Label>
                      <RadioGroup value={formState.projectType} onValueChange={handleRadioChange}>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="mvp" id="mvp" />
                            <Label htmlFor="mvp">MVP Development</Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="mobile" id="mobile" />
                            <Label htmlFor="mobile">Mobile App</Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="custom" id="custom" />
                            <Label htmlFor="custom">Custom Software</Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="launch-support" id="launch-support" />
                            <Label htmlFor="launch-support">Launch Support</Label>
                          </div>
                        </div>
                      </RadioGroup>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="budgetRange">Budget Range</Label>
                      <Select value={formState.budgetRange} onValueChange={handleSelectChange}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select your budget range" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="under-1k">Under $1,000</SelectItem>
                          <SelectItem value="1k-5k">$1,000 - $5,000</SelectItem>
                          <SelectItem value="5k-10k">$5,000 - $10,000</SelectItem>
                          <SelectItem value="10k-25k">$10,000 - $25,000</SelectItem>
                          <SelectItem value="25k-50k">$25,000 - $50,000</SelectItem>
                          <SelectItem value="50k-plus">$50,000+</SelectItem>
                          <SelectItem value="not-sure">Not sure yet</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="deadline">When do you want to launch?</Label>
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
                      <Label htmlFor="message">Tell us about your idea</Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formState.message}
                        onChange={handleChange}
                        placeholder="Describe your idea, target users, key features, and what success looks like for your product."
                        rows={5}
                        required
                      />
                    </div>

                    <Button type="submit" className="w-full" disabled={isSubmitting}>
                      {isSubmitting ? (
                        <>
                          <span className="animate-spin mr-2">⚪</span> Sending...
                        </>
                      ) : "Get Free Launch Consultation"}
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
              Quick answers about working with your startup launch partner.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="brutalist-card p-6">
              <h3 className="text-xl font-bold mb-2">How fast can you launch my product?</h3>
              <p className="text-muted-foreground">
                Most MVPs launch in 3-6 weeks, mobile apps in 6-10 weeks. We'll give you an exact timeline during your free consultation based on your specific requirements.
              </p>
            </div>

            <div className="brutalist-card p-6">
              <h3 className="text-xl font-bold mb-2">What happens after the consultation?</h3>
              <p className="text-muted-foreground">
                We'll create a custom launch plan with timeline, pricing, and next steps. No pressure - you decide if it's the right fit for your project.
              </p>
            </div>

            <div className="brutalist-card p-6">
              <h3 className="text-xl font-bold mb-2">Do you work with non-technical founders?</h3>
              <p className="text-muted-foreground">
                Absolutely! Most of our clients are non-technical founders. We'll guide you through the entire process and explain everything in plain English.
              </p>
            </div>

            <div className="brutalist-card p-6">
              <h3 className="text-xl font-bold mb-2">What if I need ongoing support?</h3>
              <p className="text-muted-foreground">
                We offer ongoing development as a service. Stay on as your fractional tech team for iterations, new features, and scaling as you grow.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="container">
          <div className="brutalist-card p-12 text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to Launch Your Idea?</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
              Get a free launch consultation and custom quote. Let's turn your idea into a working product.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8">
                <Link href="/packages">View Our Services</Link>
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8">
                <Calendar className="mr-2 h-5 w-5" /> Get Launch Consultation
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
