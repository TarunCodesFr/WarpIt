"use client"

import { useEffect, useRef, useState } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { ArrowRight, Link2, Zap, Check, Copy } from "lucide-react"
import { cn } from "@/lib/utils"

gsap.registerPlugin(ScrollTrigger)

export function LiveDemo() {
  const [step, setStep] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)
  const phoneRef = useRef<HTMLDivElement>(null)
  
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Entrance animation
      gsap.from(phoneRef.current, {
        y: 100,
        opacity: 0,
        rotateX: -30,
        duration: 1.5,
        ease: "expo.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 70%",
        }
      })

      // Auto-play demo steps
      const tl = gsap.timeline({
        repeat: -1,
        repeatDelay: 2,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 50%",
        }
      })

      tl.to({}, { duration: 1, onStart: () => setStep(0) }) // Input state
        .to({}, { duration: 1.5, onStart: () => setStep(1) }) // Loading state
        .to({}, { duration: 2, onStart: () => setStep(2) }) // Result state
        .to({}, { duration: 2, onStart: () => setStep(3) }) // Copied state
    }, containerRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={containerRef} className="py-40 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-20">
          <div className="flex-1 space-y-8">
            <h2 className="text-5xl md:text-7xl font-black tracking-tighter leading-[0.9]">
              Warp speed <br />
              <span className="text-primary">performance.</span>
            </h2>
            <p className="text-xl text-muted-foreground font-medium max-w-xl">
              Our edge network processes millions of redirects every second with sub-50ms latency. See it in action.
            </p>
            
            <div className="space-y-4 pt-4">
              {[
                { icon: <Zap className="h-5 w-5" />, text: "Edge-based redirection" },
                { icon: <Check className="h-5 w-5" />, text: "Real-time sync across devices" },
                { icon: <Link2 className="h-5 w-5" />, text: "Custom brand domains" }
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4 text-lg font-bold">
                  <div className="p-2 bg-primary/10 text-primary rounded-lg">{item.icon}</div>
                  <span>{item.text}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="flex-1 w-full max-w-xl">
            <div 
              ref={phoneRef}
              className="relative aspect-[4/3] bg-card rounded-[2.5rem] border border-primary/20 shadow-2xl p-8 overflow-hidden glass-darker group"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-50" />
              
              <div className="h-full flex flex-col justify-center space-y-8 relative z-10">
                <div className="space-y-4">
                   <div className="text-[10px] font-black uppercase tracking-[0.3em] text-primary">Live Preview</div>
                   <div className="h-16 w-full bg-background/50 border border-primary/10 rounded-2xl flex items-center px-6 gap-4 overflow-hidden">
                      <Link2 className="h-5 w-5 text-muted-foreground" />
                      <div className="flex-grow font-mono text-sm truncate text-muted-foreground">
                        {step === 0 ? "https://very-long-marketing-url.com/campaign-2026/summer-sale" : "https://warpit.link/sum-26"}
                      </div>
                   </div>
                </div>

                <div className="flex justify-center">
                   <div className={cn(
                     "h-16 w-full rounded-2xl flex items-center justify-center gap-3 font-bold text-lg transition-all duration-500",
                     step === 0 ? "bg-primary text-primary-foreground shadow-xl shadow-primary/20" : 
                     step === 1 ? "bg-secondary text-secondary-foreground" : 
                     "bg-green-500 text-white"
                   )}>
                      {step === 0 && (
                        <><span>Warp Link</span> <ArrowRight className="h-5 w-5" /></>
                      )}
                      {step === 1 && (
                        <>
                          <Zap className="h-5 w-5 animate-pulse" />
                          <span>Warping...</span>
                        </>
                      )}
                      {step >= 2 && (
                        <>
                          <Check className="h-5 w-5" />
                          <span>{step === 3 ? "Copied!" : "Ready"}</span>
                        </>
                      )}
                   </div>
                </div>

                {step >= 2 && (
                  <div className="space-y-4 animate-in fade-in slide-in-from-bottom-4 duration-700">
                    <div className="p-6 bg-background rounded-2xl border border-primary/20 flex items-center justify-between">
                       <div className="font-mono font-bold text-primary">warpit.link/sum-26</div>
                       <Copy className={cn("h-5 w-5 transition-colors", step === 3 ? "text-green-500" : "text-muted-foreground")} />
                    </div>
                  </div>
                )}
              </div>

              {/* Decorative scanline */}
              <div className="absolute inset-0 pointer-events-none opacity-[0.03] bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_2px,3px_100%]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
