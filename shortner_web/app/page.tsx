"use client"

import { motion } from "framer-motion"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Hero } from "@/components/marketing/Hero"
import { FeaturesBento } from "@/components/marketing/FeaturesBento"
import { Stats } from "@/components/marketing/Stats"
import { CTA } from "@/components/marketing/CTA"

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background selection:bg-primary/20 selection:text-primary overflow-x-hidden">
      <Navbar />
      
      <main className="flex-grow">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <Hero />
        </motion.div>

        <Stats />

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1 }}
        >
          <FeaturesBento />
        </motion.div>

        <CTA />
      </main>

      <Footer />
    </div>
  )
}
