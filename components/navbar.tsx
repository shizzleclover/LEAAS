"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { ModeToggle } from "@/components/mode-toggle"
import { Menu, X } from "lucide-react"
import { useTheme } from "next-themes"

const navItems = [
  { name: "Home", href: "/" },
  { name: "Packages", href: "/packages" },
  { name: "How We Work", href: "/how-it-works" },
  { name: "Contact", href: "/contact" },
  { name: "Projects", href: "#"},
]

export function Navbar() {
  const pathname = usePathname()
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false)
  const { resolvedTheme } = useTheme()
  const [mounted, setMounted] = React.useState(false)
  
  // Only show the logo after the component is mounted to prevent hydration mismatch
  React.useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <header className="sticky top-0 z-50 w-full morphism">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-6">
          <Link href="/" className="flex items-center space-x-2">
            {mounted ? (
              <>
                <Image 
                  src={resolvedTheme === "dark" ? "/dark-mode-logo.png" : "/logo-light-mode.png"}
                  alt="LEAAS Logo" 
                  width={100} 
                  height={40} 
                  className="h-8 w-auto" 
                />
                <span className="text-2xl font-bold tracking-tighter">LEAAS</span>
              </>
            ) : (
              <div className="h-8 w-24 bg-muted rounded animate-pulse"></div>
            )}
          </Link>
          <nav className="hidden md:flex gap-6">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-primary",
                  pathname === item.href ? "text-primary" : "text-muted-foreground",
                )}
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <ModeToggle />
          <Button asChild className="hidden md:inline-flex">
            <Link href="/contact">Start Your Project</Link>
          </Button>
          <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>
      {mobileMenuOpen && (
        <div className="md:hidden morphism">
          <div className="container py-4 flex flex-col gap-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-primary",
                  pathname === item.href ? "text-primary" : "text-muted-foreground",
                )}
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <Button asChild className="w-full">
              <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>
                Start Your Project
              </Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  )
}
