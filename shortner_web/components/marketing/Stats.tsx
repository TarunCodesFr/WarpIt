"use client"

import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

const stats = [
  { label: "Links Warped", value: 250, suffix: "M+" },
  { label: "Active Users", value: 1.2, suffix: "M+" },
  { label: "Uptime", value: 99.99, suffix: "%" },
  { label: "Latency", value: 45, suffix: "ms", prefix: "<" },
]

export function Stats() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const statsRef = useRef<(HTMLHeadingElement | null)[]>([])

  useEffect(() => {
    const ctx = gsap.context(() => {
      statsRef.current.forEach((el, i) => {
        if (!el) return
        
        const targetValue = stats[i].value
        const isInt = Number.isInteger(targetValue)
        
        gsap.from(el, {
          textContent: 0,
          duration: 2,
          ease: "expo.out",
          scrollTrigger: {
            trigger: el,
            start: "top 90%",
          },
          onUpdate: function() {
            const val = parseFloat(this.targets()[0].textContent)
            el.textContent = isInt ? Math.floor(val).toString() : val.toFixed(2)
          }
        })
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="py-32 border-y bg-background/50 backdrop-blur-sm relative overflow-hidden">
      <div className="absolute inset-0 bg-mesh opacity-30" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-16 md:gap-8">
          {stats.map((stat, i) => (
            <div key={i} className="flex flex-col items-center text-center space-y-4 group">
              <div className="flex items-baseline font-mono text-5xl md:text-7xl font-black tracking-tighter text-foreground group-hover:text-primary transition-colors duration-500">
                {stat.prefix && <span className="text-3xl md:text-5xl mr-1 text-muted-foreground/50">{stat.prefix}</span>}
                <h3 
                  ref={el => { statsRef.current[i] = el }}
                  className="tabular-nums"
                >
                  {stat.value}
                </h3>
                <span className="text-2xl md:text-4xl ml-1 text-primary">{stat.suffix}</span>
              </div>
              <p className="text-[10px] font-black uppercase tracking-[0.4em] text-muted-foreground/60 group-hover:text-foreground transition-colors duration-500">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
