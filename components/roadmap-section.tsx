"use client"

import { motion } from "framer-motion"
import { 
  Smartphone, 
  Database, 
  History, 
  Bell, 
  Shield, 
  Cloud
} from "lucide-react"
import { useLanguage } from "@/lib/i18n/language-context"

const icons = [Smartphone, Database, History, Bell, Shield, Cloud]
const statuses = ["upcoming", "upcoming", "upcoming", "planned", "planned", "planned"]

export function RoadmapSection() {
  const { t } = useLanguage()

  return (
    <section id="roadmap" className="py-24 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            {t.roadmap.title} <span className="gradient-text">{t.roadmap.titleHighlight}</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            {t.roadmap.description}
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-[#00FF88] to-primary md:transform md:-translate-x-1/2" />

            <div className="space-y-12">
              {t.roadmap.items.map((item, index) => {
                const Icon = icons[index]
                const status = statuses[index]
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className={`relative flex items-center gap-8 ${
                      index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                    }`}
                  >
                    {/* Timeline dot */}
                    <div className="absolute left-0 md:left-1/2 w-4 h-4 rounded-full bg-primary glow-primary transform md:-translate-x-1/2 z-10" />

                    {/* Content card */}
                    <div className={`ml-8 md:ml-0 md:w-[calc(50%-2rem)] ${index % 2 === 0 ? "md:pr-8" : "md:pl-8"}`}>
                      <div className="glass-card rounded-xl p-6 hover:border-primary/30 transition-all duration-300">
                        <div className="flex items-start gap-4">
                          <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
                            <Icon className="w-6 h-6 text-primary" />
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-2">
                              <h3 className="font-semibold">{item.title}</h3>
                              <span className={`text-xs px-2 py-0.5 rounded-full ${
                                status === "upcoming" 
                                  ? "bg-[#00FF88]/20 text-[#00FF88]" 
                                  : "bg-primary/20 text-primary"
                              }`}>
                                {status === "upcoming" ? t.roadmap.comingSoon : t.roadmap.planned}
                              </span>
                            </div>
                            <p className="text-sm text-muted-foreground">
                              {item.description}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Empty space for alternating layout */}
                    <div className="hidden md:block md:w-[calc(50%-2rem)]" />
                  </motion.div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
