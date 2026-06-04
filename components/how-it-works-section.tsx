"use client"

import { motion } from "framer-motion"
import { 
  Upload, 
  Server, 
  Cpu, 
  Shield, 
  Bug, 
  Brain, 
  BarChart3, 
  FileCheck,
  ArrowRight
} from "lucide-react"
import { useLanguage } from "@/lib/i18n/language-context"

const icons = [Upload, Server, Cpu, Shield, Bug, Brain, BarChart3, FileCheck]

export function HowItWorksSection() {
  const { t } = useLanguage()

  return (
    <section id="how-it-works" className="py-24 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            {t.howItWorks.title} <span className="gradient-text">{t.howItWorks.titleHighlight}</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            {t.howItWorks.description}
          </p>
        </motion.div>

        {/* Desktop Timeline */}
        <div className="hidden lg:block">
          <div className="relative">
            {/* Connection line */}
            <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-primary via-[#00FF88] to-primary transform -translate-y-1/2" />
            
            <div className="grid grid-cols-8 gap-4">
              {t.howItWorks.steps.map((step, index) => {
                const Icon = icons[index]
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="relative"
                  >
                    <div className="flex flex-col items-center">
                      <div className="glass-card rounded-xl p-4 mb-4 relative z-10 group hover:border-primary/50 transition-all duration-300">
                        <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center group-hover:bg-primary/30 transition-colors duration-300">
                          <Icon className="w-6 h-6 text-primary" />
                        </div>
                      </div>
                      <div className="w-4 h-4 rounded-full bg-primary glow-primary relative z-10" />
                      <div className="mt-4 text-center">
                        <div className="text-xs text-primary font-medium mb-1">{t.howItWorks.step} {index + 1}</div>
                        <h4 className="font-semibold text-sm mb-1">{step.title}</h4>
                        <p className="text-xs text-muted-foreground">{step.description}</p>
                      </div>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </div>

        {/* Mobile/Tablet Timeline */}
        <div className="lg:hidden">
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-[#00FF88] to-primary" />
            
            <div className="space-y-6">
              {t.howItWorks.steps.map((step, index) => {
                const Icon = icons[index]
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="relative flex items-start gap-6"
                  >
                    <div className="relative z-10 flex-shrink-0">
                      <div className="w-16 h-16 glass-card rounded-xl flex items-center justify-center">
                        <Icon className="w-7 h-7 text-primary" />
                      </div>
                    </div>
                    <div className="flex-1 pt-2">
                      <div className="text-xs text-primary font-medium mb-1">{t.howItWorks.step} {index + 1}</div>
                      <h4 className="font-semibold mb-1">{step.title}</h4>
                      <p className="text-sm text-muted-foreground">{step.description}</p>
                    </div>
                    {index < t.howItWorks.steps.length - 1 && (
                      <ArrowRight className="w-4 h-4 text-primary absolute -bottom-5 left-6 transform rotate-90" />
                    )}
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
