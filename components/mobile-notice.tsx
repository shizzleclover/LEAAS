"use client"

import React, { useState, useEffect } from "react"
import { 
  Dialog, 
  DialogContent, 
  DialogDescription, 
  DialogFooter, 
  DialogHeader, 
  DialogTitle 
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Monitor, Smartphone } from "lucide-react"

export function MobileNotice() {
  const [isOpen, setIsOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const [hasDismissed, setHasDismissed] = useState(false)

  useEffect(() => {
    // Check if user has dismissed the notice before
    const dismissed = localStorage.getItem("mobile-notice-dismissed")
    if (dismissed === "true") {
      setHasDismissed(true)
    }

    // Check if screen is mobile/tablet size
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 1024)
    }

    // Check on initial load
    checkScreenSize()
    
    // Check on resize
    window.addEventListener("resize", checkScreenSize)
    
    // Show dialog after a short delay if on mobile and hasn't dismissed
    const timer = setTimeout(() => {
      if (window.innerWidth < 1024 && !dismissed) {
        setIsOpen(true)
      }
    }, 1500)

    return () => {
      window.removeEventListener("resize", checkScreenSize)
      clearTimeout(timer)
    }
  }, [])

  const handleDismiss = () => {
    setIsOpen(false)
    setHasDismissed(true)
    localStorage.setItem("mobile-notice-dismissed", "true")
  }

  const handleUseLargerScreen = () => {
    setIsOpen(false)
    setHasDismissed(true)
    localStorage.setItem("mobile-notice-dismissed", "true")
  }

  // Only render if on mobile and hasn't been dismissed
  if (!isMobile || !isOpen) return null

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-xl">Optimal Viewing Experience</DialogTitle>
          <DialogDescription className="pt-2 text-base">
            This site offers the best experience on larger screens like desktops and laptops.
          </DialogDescription>
        </DialogHeader>
        
        <div className="flex items-center justify-center gap-8 py-4">
          <div className="flex flex-col items-center text-center">
            <Monitor className="h-16 w-16 text-primary mb-2" />
            <span className="text-sm">Desktop/Laptop</span>
            <span className="text-xs text-muted-foreground">Recommended</span>
          </div>
          <div className="text-xl font-bold">vs</div>
          <div className="flex flex-col items-center text-center opacity-60">
            <Smartphone className="h-12 w-12 mb-2" />
            <span className="text-sm">Mobile</span>
            <span className="text-xs text-muted-foreground">Limited Experience</span>
          </div>
        </div>
        
        <DialogFooter className="flex flex-col sm:flex-row gap-2">
          <Button variant="outline" onClick={handleDismiss} className="sm:w-full">
            Nah, I&apos;d win
          </Button>
          <Button onClick={handleUseLargerScreen} className="sm:w-full">
            Yeah, I&apos;ll use a larger screen
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
} 