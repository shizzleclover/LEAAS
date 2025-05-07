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
import { Monitor, Smartphone, ArrowRight } from "lucide-react"

export function MobileNotice() {
  const [isOpen, setIsOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const [hasDismissed, setHasDismissed] = useState(false)
  const [desktopMode, setDesktopMode] = useState(false)
  
  useEffect(() => {
    // Check if user has previously chosen desktop mode
    const desktopModeEnabled = localStorage.getItem("desktop-mode-enabled")
    if (desktopModeEnabled === "true") {
      setDesktopMode(true)
      document.body.classList.add("desktop-mode")
    }
    
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
    enableDesktopMode()
  }

  const enableDesktopMode = () => {
    setDesktopMode(true)
    document.body.classList.add("desktop-mode")
    localStorage.setItem("desktop-mode-enabled", "true")
    
    // Create desktop toolbar element
    const toolbar = document.createElement("div")
    toolbar.id = "desktop-toolbar"
    toolbar.innerHTML = `
      <div class="desktop-toolbar-content">
        <div class="desktop-toolbar-buttons">
          <span class="desktop-button red"></span>
          <span class="desktop-button yellow"></span>
          <span class="desktop-button green"></span>
        </div>
        <div class="desktop-toolbar-title">LEAAS - Desktop Mode</div>
        <button id="exit-desktop-mode" class="desktop-toolbar-exit">Exit Desktop Mode</button>
      </div>
    `
    document.body.prepend(toolbar)
    
    // Add event listener to exit button
    document.getElementById("exit-desktop-mode")?.addEventListener("click", disableDesktopMode)
    
    // Apply animations
    const content = document.querySelector("main")
    if (content) {
      content.classList.add("desktop-content")
    }
  }
  
  const disableDesktopMode = () => {
    setDesktopMode(false)
    document.body.classList.remove("desktop-mode")
    localStorage.setItem("desktop-mode-enabled", "false")
    
    // Remove desktop toolbar
    const toolbar = document.getElementById("desktop-toolbar")
    if (toolbar) {
      toolbar.remove()
    }
    
    // Remove content class
    const content = document.querySelector("main")
    if (content) {
      content.classList.remove("desktop-content")
    }
  }

  // Only render if on mobile and hasn't been dismissed
  if (!isMobile || !isOpen) return null

  return (
    <>
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="text-xl">Choose Your Experience</DialogTitle>
            <DialogDescription className="pt-2 text-base">
              Would you like to continue with the mobile view or try our special desktop mode?
            </DialogDescription>
          </DialogHeader>
          
          <div className="flex items-center justify-center gap-6 py-4">
            <div className="flex flex-col items-center text-center">
              <Smartphone className="h-12 w-12 mb-2" />
              <span className="text-sm">Mobile View</span>
              <span className="text-xs text-muted-foreground">Simple & Clean</span>
            </div>
            <ArrowRight className="h-8 w-8 text-muted-foreground" />
            <div className="flex flex-col items-center text-center hover:scale-105 transition-transform">
              <Monitor className="h-16 w-16 text-primary mb-2" />
              <span className="text-sm">Desktop Mode</span>
              <span className="text-xs text-muted-foreground">Immersive Experience</span>
            </div>
          </div>
          
          <DialogFooter className="flex flex-col sm:flex-row gap-2">
            <Button variant="outline" onClick={handleDismiss} className="sm:w-full">
              Continue with Mobile
            </Button>
            <Button 
              onClick={handleUseLargerScreen} 
              className="sm:w-full relative overflow-hidden group"
            >
              <span className="relative z-10">Enable Desktop Mode</span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity -z-10"></div>
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
      
      {/* Add styles for desktop mode */}
      <style jsx global>{`
        body.desktop-mode {
          background-color: #f2f2f2;
          padding-top: 38px;
          min-height: 100vh;
          overflow-x: hidden;
        }
        
        #desktop-toolbar {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          height: 38px;
          background: linear-gradient(to bottom, #ececec, #d8d8d8);
          border-bottom: 1px solid #b8b8b8;
          z-index: 1000;
          box-shadow: 0 1px 3px rgba(0,0,0,0.1);
          display: flex;
          align-items: center;
        }
        
        .desktop-toolbar-content {
          width: 100%;
          display: flex;
          align-items: center;
          padding: 0 10px;
        }
        
        .desktop-toolbar-buttons {
          display: flex;
          gap: 5px;
          margin-right: 15px;
        }
        
        .desktop-button {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          display: block;
        }
        
        .desktop-button.red {
          background-color: #ff5f57;
          border: 1px solid #e33e32;
        }
        
        .desktop-button.yellow {
          background-color: #febc2e;
          border: 1px solid #e1a116;
        }
        
        .desktop-button.green {
          background-color: #28c840;
          border: 1px solid #17a92c;
        }
        
        .desktop-toolbar-title {
          flex: 1;
          text-align: center;
          font-size: 14px;
          font-weight: 500;
          color: #333;
        }
        
        .desktop-toolbar-exit {
          font-size: 12px;
          background: none;
          border: none;
          color: #666;
          cursor: pointer;
          padding: 2px 8px;
          border-radius: 4px;
        }
        
        .desktop-toolbar-exit:hover {
          background-color: rgba(0,0,0,0.05);
        }
        
        .desktop-content {
          transform: scale(0.85);
          transform-origin: top center;
          margin: 20px auto;
          border-radius: 8px;
          box-shadow: 0 10px 25px rgba(0,0,0,0.15);
          overflow: hidden;
          max-width: 95%;
          background-color: white;
          transition: transform 0.3s ease;
        }
      `}</style>
    </>
  )
} 