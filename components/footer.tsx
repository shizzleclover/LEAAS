"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Github, Instagram, Linkedin, Twitter } from "lucide-react"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"

export function Footer() {
  const { resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  
  useEffect(() => {
    setMounted(true)
  }, [])
  
  return (
    <footer className="bg-muted py-12 border-t">
      <div className="container grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        <div className="space-y-4">
          <div className="flex items-center space-x-2">
            {mounted ? (
              <Image 
                src={resolvedTheme === "dark" ? "/dark-mode-logo.png" : "/logo-light-mode.png"}
                alt="LEAAS Logo" 
                width={100} 
                height={40} 
                className="h-8 w-auto" 
              />
            ) : (
              <div className="h-8 w-24 bg-muted-foreground/20 rounded animate-pulse"></div>
            )}
          </div>
          <p className="text-muted-foreground">
            Your plug-and-play product + engineering team. We turn ideas into working products fast, without the hassle of assembling a full team.
          </p>
          <div className="flex space-x-4">
            <Button variant="ghost" size="icon" asChild>
              <Link href="#">
                <Twitter className="h-5 w-5" />
              </Link>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <Link href="#">
                <Instagram className="h-5 w-5" />
              </Link>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <Link href="#">
                <Github className="h-5 w-5" />
              </Link>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <Link href="#">
                <Linkedin className="h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
        <div className="space-y-4">
          <h4 className="font-bold">Quick Links</h4>
          <ul className="space-y-2">
            <li>
              <Link href="/" className="text-muted-foreground hover:text-foreground">
                Home
              </Link>
            </li>
            <li>
              <Link href="/packages" className="text-muted-foreground hover:text-foreground">
                Services
              </Link>
            </li>
            <li>
              <Link href="/how-it-works" className="text-muted-foreground hover:text-foreground">
                How We Work
              </Link>
            </li>
            <li>
              <Link href="/contact" className="text-muted-foreground hover:text-foreground">
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div className="space-y-4">
          <h4 className="font-bold">Our Services</h4>
          <ul className="space-y-2">
            <li>
              <Link href="/services/mvp-development" className="text-muted-foreground hover:text-foreground">
                MVP Development
              </Link>
            </li>
            <li>
              <Link href="/services/mobile-apps" className="text-muted-foreground hover:text-foreground">
                Mobile Apps
              </Link>
            </li>
            <li>
              <Link href="/services/custom-software" className="text-muted-foreground hover:text-foreground">
                Custom Software
              </Link>
            </li>
            <li>
              <Link href="/contact" className="text-muted-foreground hover:text-foreground">
                Launch Support
              </Link>
            </li>
            <li>
              <Link href="/contact" className="text-muted-foreground hover:text-foreground">
                Ongoing Development
              </Link>
            </li>
          </ul>
        </div>
        <div className="space-y-4">
          <h4 className="font-bold">Subscribe</h4>
          <p className="text-muted-foreground">Stay updated with our latest tech insights and offers.</p>
          <div className="flex gap-2">
            <Input placeholder="Your email" type="email" />
            <Button>Subscribe</Button>
          </div>
        </div>
      </div>
      <div className="container mt-8 pt-8 border-t">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} LEAAS. All rights reserved.</p>
          <div className="flex gap-4 text-sm">
            <Link href="#" className="text-muted-foreground hover:text-foreground">
              Privacy Policy
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-foreground">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
