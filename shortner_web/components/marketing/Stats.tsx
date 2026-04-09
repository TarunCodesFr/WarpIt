"use client"

import { motion } from "framer-motion"

const stats = [
  { label: "Links Warped", value: "250M+" },
  { label: "Active Users", value: "1.2M+" },
  { label: "Uptime", value: "99.99%" },
  { label: "Average Latency", value: "<45ms" },
]

export function Stats() {
  return (
    <section className="py-24 border-y bg-background relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="space-y-2"
            >
              <h3 className="text-4xl md:text-5xl font-black tracking-tighter text-primary">{stat.value}</h3>
              <p className="text-sm font-bold uppercase tracking-widest text-muted-foreground">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
