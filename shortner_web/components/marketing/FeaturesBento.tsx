"use client"

import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Shield, Zap, BarChart3, Globe, Smartphone, MousePointer2 } from "lucide-react"
import { Card } from "@/components/ui/card"
import { cn } from "@/lib/utils"

gsap.registerPlugin(ScrollTrigger)

const features = [
  {
    title: "Real-time Analytics",
    description: "Track your link performance with granular detail, including geolocation, device types, and referral sources.",
    icon: <BarChart3 className="h-8 w-8 text-primary" />,
    className: "md:col-span-2 md:row-span-2",
  },
  {
    title: "Military-Grade Security",
    description: "Every link is protected by high-standard encryption and anti-phishing filters.",
    icon: <Shield className="h-6 w-6 text-primary" />,
    className: "md:col-span-1 md:row-span-1",
  },
  {
    title: "Global Edge Network",
    description: "Our infrastructure ensures sub-50ms redirects from any location globally.",
    icon: <Globe className="h-6 w-6 text-primary" />,
    className: "md:col-span-1 md:row-span-1",
  },
  {
    title: "Advanced Targeting",
    description: "Redirect users based on their language, OS, or location for maximum conversion.",
    icon: <MousePointer2 className="h-6 w-6 text-primary" />,
    className: "md:col-span-1 md:row-span-2",
  },
  {
    title: "Responsive Management",
    description: "Manage your links on the go with our fully optimized mobile interface.",
    icon: <Smartphone className="h-6 w-6 text-primary" />,
    className: "md:col-span-1 md:row-span-2",
  },
]

export function FeaturesBento() {
  const containerRef = useRef<HTMLDivElement>(null)
  const cardsRef = useRef<(HTMLDivElement | null)[]>([])
  const titleRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title Animation
      gsap.from(titleRef.current, {
        y: 50,
        opacity: 0,
        duration: 1,
        scrollTrigger: {
          trigger: titleRef.current,
          start: "top 90%",
        }
      })

      // Cards Staggered Animation
      gsap.from(cardsRef.current, {
        y: 60,
        scale: 0.9,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "back.out(1.2)",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
        }
      })
    }, containerRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={containerRef} className="py-40 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div ref={titleRef} className="text-center max-w-3xl mx-auto mb-32 space-y-6">
          <h2 className="text-5xl md:text-7xl font-black tracking-tighter">Engineered for <span className="text-primary text-glow">Scale.</span></h2>
          <p className="text-xl text-muted-foreground font-medium max-w-2xl mx-auto">
            Experience the next generation of link management. Heavy-duty features in a lightweight package.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 auto-rows-auto md:auto-rows-[300px]">
          {features.map((feature, i) => (
            <div
              key={i}
              ref={el => { cardsRef.current[i] = el }}
              className={cn("group h-full", feature.className.split(" ").filter(c => c.startsWith("md:")).join(" "))}
            >
              <Card className="h-full p-8 md:p-10 glass hover:glass-darker transition-all duration-500 relative overflow-hidden flex flex-col justify-between group-hover:-translate-y-2 group-hover:shadow-primary/5">
                
                <div className="absolute -right-8 -bottom-8 opacity-[0.03] group-hover:opacity-10 transition-all duration-700">
                   <div className="rotate-12 group-hover:rotate-0 scale-[3] group-hover:scale-[3.5] transform">{feature.icon}</div>
                </div>
                
                <div className="space-y-6 relative z-10">
                  <div className="p-4 bg-primary/10 w-fit rounded-2xl group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-500">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text-2xl font-black mb-3 tracking-tight group-hover:text-primary transition-colors">{feature.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed max-w-[320px]">
                      {feature.description}
                    </p>
                  </div>
                </div>

                <div className="pt-8 relative z-10">
                   <div className="w-12 h-1.5 bg-primary/10 rounded-full group-hover:w-24 group-hover:bg-primary transition-all duration-500" />
                </div>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
