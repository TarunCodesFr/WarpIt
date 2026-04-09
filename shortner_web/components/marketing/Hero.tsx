"use client"

import { motion } from "framer-motion"
import { ShortenerTool } from "@/components/shortener/ShortenerTool"
import { Badge } from "@/components/ui/badge"
import { Zap } from "lucide-react"

export function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { type: "spring" as const, stiffness: 100, damping: 20 }
    },
  }

  return (
    <section className="relative pt-24 pb-32 md:pt-32 md:pb-48 overflow-hidden">
      {/* Dynamic Background */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[120%] h-[120%] bg-[radial-gradient(circle_at_50%_40%,rgba(var(--primary-rgb),0.08),transparent_50%)]" />
        <div className="absolute top-1/4 left-1/4 w-[1px] h-[1px] shadow-[0_0_400px_100px_rgba(255,165,0,0.05)] rounded-full animate-pulse" />
      </div>

      <div className="container mx-auto px-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center space-y-8"
        >
          <motion.div variants={itemVariants} className="flex justify-center">
            <Badge variant="secondary" className="px-5 py-1.5 rounded-full bg-primary/5 text-primary border-primary/10 flex items-center gap-2 font-semibold tracking-wide">
              <Zap className="h-4 w-4 fill-primary" />
              Next-Gen URL Architecture
            </Badge>
          </motion.div>

          <motion.div variants={itemVariants} className="space-y-4 max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-8xl font-black tracking-tight leading-[0.95] text-foreground">
              Simplify your links.<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-orange-500 to-amber-400">
                Warp your brand.
              </span>
            </h1>
            <p className="text-lg md:text-2xl text-muted-foreground max-w-2xl mx-auto font-medium leading-relaxed">
              Transform overwhelming URLs into precise, professional, and trackable marketing assets in milliseconds.
            </p>
          </motion.div>

          <motion.div 
            variants={itemVariants}
            className="pt-4"
          >
            <ShortenerTool />
          </motion.div>

          <motion.div 
            variants={itemVariants}
            className="flex items-center justify-center gap-8 pt-8 opacity-40 grayscale group-hover:grayscale-0 transition-all duration-500"
          >
            {/* Trust Logos Placeholder - Using text for professional feel */}
            <span className="text-sm font-bold tracking-widest uppercase">Trusted by </span>
            <div className="flex gap-8 items-center font-serif text-xl italic font-bold">
              <span>Vertex</span>
              <span>Lumina</span>
              <span>Nexus</span>
              <span>Aether</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
