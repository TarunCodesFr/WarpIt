"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Moon, Sun, Menu, X } from "lucide-react"
import { useTheme } from "next-themes"
import { cn } from "@/lib/utils"
import gsap from "gsap"

export function Navbar() {
  const { theme, setTheme } = useTheme()
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const navRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", handleScroll)
    
    // Check for auth token
    const token = localStorage.getItem("token")
    setIsLoggedIn(!!token)

    // GSAP Entry Animation
    gsap.fromTo(navRef.current, 
      { y: -100, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: "expo.out", delay: 0.2 }
    )

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleLogout = () => {
    localStorage.removeItem("token")
    setIsLoggedIn(false)
    window.location.reload()
  }

  return (
    <nav 
      ref={navRef}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        scrolled ? "bg-background/40 backdrop-blur-xl py-3 border-b border-primary/10 shadow-[0_8px_32px_rgba(0,0,0,0.05)]" : "bg-transparent py-6 border-b border-transparent"
      )}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative">
            <div className="absolute -inset-2 bg-primary/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="bg-primary/10 p-1.5 rounded-xl border border-primary/20 relative z-10 transition-transform group-hover:scale-105 duration-500">
              <Image
                src="/warpit-logo.png"
                alt="WarpIt"
                width={30}
                height={30}
                className="rounded-lg"
              />
            </div>
          </div>
          <span className="text-2xl font-black tracking-tighter text-foreground">Warp<span className="text-primary">It</span></span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-10">
          <div className="flex items-center gap-10 text-[11px] font-black uppercase tracking-[0.2em] text-muted-foreground/60">
            <Link href="/" className="hover:text-primary hover:tracking-[0.25em] transition-all duration-300">Platform</Link>
            <Link href="#" className="hover:text-primary hover:tracking-[0.25em] transition-all duration-300">Solutions</Link>
            <Link href="#" className="hover:text-primary hover:tracking-[0.25em] transition-all duration-300">Pricing</Link>
            <Link href="#" className="hover:text-primary hover:tracking-[0.25em] transition-all duration-300">Resources</Link>
          </div>
          
          <div className="flex items-center gap-5 ml-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="rounded-2xl hover:bg-primary/5 h-11 w-11 border border-transparent hover:border-primary/10 transition-all duration-500"
            >
              <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              <span className="sr-only">Toggle theme</span>
            </Button>
            {isLoggedIn ? (
              <Button 
                variant="outline" 
                onClick={handleLogout}
                className="font-black uppercase tracking-widest text-[10px] h-11 px-8 rounded-2xl border-primary/20 hover:bg-primary/5 transition-all duration-500"
              >
                Logout
              </Button>
            ) : (
              <div className="flex items-center gap-3">
                <Link href="/login">
                  <Button variant="ghost" className="font-black uppercase tracking-widest text-[10px] h-11 px-8 rounded-2xl hover:bg-primary/5">Login</Button>
                </Link>
                <Link href="/register">
                  <Button size="sm" className="font-black uppercase tracking-widest text-[10px] h-11 px-8 rounded-2xl shadow-2xl shadow-primary/20 bg-primary hover:scale-105 transition-all duration-500">Get Started</Button>
                </Link>
              </div>
            )}
          </div>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden flex items-center gap-4">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="rounded-2xl h-11 w-11 bg-primary/5 border border-primary/10"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          className="md:hidden absolute top-[calc(100%+0.5rem)] left-4 right-4 bg-background/90 backdrop-blur-2xl border border-primary/10 p-8 rounded-3xl space-y-6 shadow-2xl overflow-hidden"
        >
          <div className="flex flex-col gap-6 text-[11px] font-black uppercase tracking-[0.2em] text-center">
            <Link href="/" onClick={() => setMobileMenuOpen(false)}>Platform</Link>
            <Link href="#" onClick={() => setMobileMenuOpen(false)}>Solutions</Link>
            <Link href="#" onClick={() => setMobileMenuOpen(false)}>Pricing</Link>
            <Link href="#" onClick={() => setMobileMenuOpen(false)}>Resources</Link>
          </div>
          <div className="flex flex-col gap-3 pt-6 border-t border-primary/10">
            {isLoggedIn ? (
              <Button 
                onClick={handleLogout}
                className="w-full h-14 font-black uppercase tracking-widest text-[10px] rounded-2xl shadow-xl shadow-primary/20"
              >
                Logout
              </Button>
            ) : (
              <>
                <Link href="/login" className="w-full">
                  <Button variant="ghost" className="w-full h-14 font-black uppercase tracking-widest text-[10px] rounded-2xl" onClick={() => setMobileMenuOpen(false)}>Login</Button>
                </Link>
                <Link href="/register" className="w-full">
                  <Button className="w-full h-14 font-black uppercase tracking-widest text-[10px] rounded-2xl shadow-xl shadow-primary/20" onClick={() => setMobileMenuOpen(false)}>Get Started</Button>
                </Link>
              </>
            )}
          </div>
        </motion.div>
      )}
    </nav>
  )
}
