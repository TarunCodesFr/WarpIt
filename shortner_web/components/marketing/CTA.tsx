"use client"

import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles } from "lucide-react"
import Link from "next/link"

gsap.registerPlugin(ScrollTrigger)

export function CTA() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(contentRef.current, {
        y: 60,
        opacity: 0,
        duration: 1.2,
        ease: "expo.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        }
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="py-48 relative overflow-hidden bg-mesh">
      <div className="absolute inset-0 bg-background/40 backdrop-blur-[2px]" />
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      
      {/* Decorative Blobs */}
      <div className="absolute -top-1/2 -left-1/4 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[140px] -z-10 animate-pulse" />
      <div className="absolute -bottom-1/2 -right-1/4 w-[500px] h-[500px] bg-orange-500/10 rounded-full blur-[120px] -z-10 animate-pulse" style={{ animationDelay: '2s' }} />

      <div className="container mx-auto px-4 relative z-10">
        <div ref={contentRef} className="max-w-4xl mx-auto text-center space-y-12">
          <div className="inline-flex items-center gap-3 px-6 py-2 rounded-full glass text-primary text-[10px] font-black uppercase tracking-[0.3em] border-primary/20">
            <Sparkles className="h-4 w-4" />
            Ready to scale your digital reach?
          </div>

          <h2 className="text-5xl md:text-8xl font-black tracking-tighter leading-[0.85]">
            Give your links the <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-orange-500 to-amber-500 text-glow">
              professional edge.
            </span>
          </h2>

          <p className="text-xl md:text-2xl text-muted-foreground font-medium max-w-2xl mx-auto opacity-80 leading-relaxed">
            Join 2M+ businesses warping their URLs into precision marketing assets. 
            Setup takes less than 60 seconds.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-8">
            <Link href="/register" className="w-full sm:w-auto">
              <Button size="lg" className="h-20 px-16 rounded-[2rem] text-xl font-black w-full shadow-2xl shadow-primary/40 group bg-primary hover:scale-105 transition-all duration-500">
                Get Started Free
                <ArrowRight className="ml-4 h-6 w-6 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link href="#" className="w-full sm:w-auto">
              <Button size="lg" variant="outline" className="h-20 px-16 rounded-[2rem] text-xl font-black w-full glass hover:bg-background/80 transition-all duration-500">
                Enterprise
              </Button>
            </Link>
          </div>
          
          <p className="text-[10px] font-black text-muted-foreground/40 uppercase tracking-[0.5em] pt-8">
            Deployment in 19 countries • ISO 27001 Certified
          </p>
        </div>
      </div>
    </section>
  )
}
