"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Moon, Sun, Menu, X } from "lucide-react"
import { useTheme } from "next-themes"
import { cn } from "@/lib/utils"

export function Navbar() {
  const { theme, setTheme } = useTheme()
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b",
      scrolled ? "bg-background/80 backdrop-blur-md py-3 border-primary/10 shadow-sm" : "bg-transparent py-5 border-transparent"
    )}>
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2.5 group">
          <div className="relative">
            <div className="absolute -inset-1 bg-primary/20 rounded-xl blur opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <Image
              src="/warpit-logo.png"
              alt="WarpIt"
              width={35}
              height={35}
              className="rounded-xl relative z-10"
            />
          </div>
          <span className="text-xl font-black tracking-tight text-foreground transition-all group-hover:tracking-normal">WarpIt</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <div className="flex items-center gap-8 text-sm font-bold uppercase tracking-widest text-muted-foreground/80">
            <Link href="/" className="hover:text-primary transition-colors">Platform</Link>
            <Link href="#" className="hover:text-primary transition-colors">Solutions</Link>
            <Link href="#" className="hover:text-primary transition-colors">Pricing</Link>
            <Link href="#" className="hover:text-primary transition-colors">Resources</Link>
          </div>
          
          <div className="flex items-center gap-4 border-l pl-8 border-primary/10">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="rounded-xl hover:bg-primary/5 h-10 w-10"
            >
              <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              <span className="sr-only">Toggle theme</span>
            </Button>
            <Link href="/login">
              <Button variant="ghost" className="font-bold uppercase tracking-widest text-xs h-10 px-6 rounded-xl">Login</Button>
            </Link>
            <Link href="/register">
              <Button size="sm" className="font-bold uppercase tracking-widest text-xs h-10 px-6 rounded-xl shadow-lg shadow-primary/10">Get Started</Button>
            </Link>
          </div>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden flex items-center gap-4">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="rounded-xl"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden absolute top-full left-0 right-0 bg-background border-b border-primary/10 p-6 space-y-4 shadow-2xl"
        >
          <div className="flex flex-col gap-4 text-sm font-bold uppercase tracking-widest text-center">
            <Link href="/" onClick={() => setMobileMenuOpen(false)}>Platform</Link>
            <Link href="#" onClick={() => setMobileMenuOpen(false)}>Solutions</Link>
            <Link href="#" onClick={() => setMobileMenuOpen(false)}>Pricing</Link>
            <Link href="#" onClick={() => setMobileMenuOpen(false)}>Resources</Link>
          </div>
          <div className="flex flex-col gap-3 pt-4 border-t border-primary/10">
            <Link href="/login" className="w-full">
              <Button variant="ghost" className="w-full h-12 font-bold uppercase tracking-widest text-xs rounded-xl" onClick={() => setMobileMenuOpen(false)}>Login</Button>
            </Link>
            <Link href="/register" className="w-full">
              <Button className="w-full h-12 font-bold uppercase tracking-widest text-xs rounded-xl shadow-lg" onClick={() => setMobileMenuOpen(false)}>Get Started</Button>
            </Link>
          </div>
        </motion.div>
      )}
    </nav>
  )
}
