"use client"

import { motion } from "framer-motion"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Hero } from "@/components/marketing/Hero"
import { FeaturesBento } from "@/components/marketing/FeaturesBento"
import { Stats } from "@/components/marketing/Stats"
import { CTA } from "@/components/marketing/CTA"
import { LiveDemo } from "@/components/marketing/LiveDemo"

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background selection:bg-primary/20 selection:text-primary overflow-x-hidden">
      <Navbar />
      
      <main className="flex-grow">
        <Hero />
        <Stats />
        <FeaturesBento />
        <LiveDemo />
        <CTA />
      </main>

      <Footer />
    </div>
  )
}
