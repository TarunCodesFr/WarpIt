"use client"

import { motion } from "framer-motion"
import { Shield, Zap, BarChart3, Globe, Smartphone, MousePointer2 } from "lucide-react"
import { Card } from "@/components/ui/card"
import { cn } from "@/lib/utils"

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
  return (
    <section className="py-32 bg-muted/20">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <h2 className="text-4xl md:text-5xl font-black tracking-tight">Powerful tools, simple links.</h2>
          <p className="text-lg text-muted-foreground font-medium">
            Everything you need to manage your links at scale, built for the modern internet.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[250px]">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={cn("group", feature.className)}
            >
              <Card className="h-full p-8 flex flex-col justify-between border-primary/5 hover:border-primary/20 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/5 bg-card/50 backdrop-blur-sm relative overflow-hidden group-hover:-translate-y-1">
                <div className="absolute -right-4 -bottom-4 opacity-5 group-hover:opacity-10 transition-opacity">
                   <div className="rotate-12 scale-150">{feature.icon}</div>
                </div>
                
                <div className="space-y-4 relative z-10">
                  <div className="p-3 bg-primary/10 w-fit rounded-2xl transition-transform group-hover:scale-110 duration-500">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{feature.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed max-w-[280px]">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
