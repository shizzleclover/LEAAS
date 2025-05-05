import type React from "react"
import "@/app/globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Montserrat, Space_Grotesk } from "next/font/google"
import { cn } from "@/lib/utils"
import { ScrollProgressBar } from "@/components/scroll-animations"
import { Metadata } from "next"

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
})

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
})

export const metadata: Metadata = {
  title: "LEAAS - Launch Engine as a Service",
  description: "Transform your ideas into market-ready products with expert guidance and collaborative development.",
  icons: {
    icon: '/dark-mode-logo.png',
    apple: '/dark-mode-logo.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn("min-h-screen font-sans antialiased", montserrat.variable, spaceGrotesk.variable)}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <div className="relative flex min-h-screen flex-col">
            <ScrollProgressBar />
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
