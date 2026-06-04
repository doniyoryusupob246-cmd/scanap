"use client"

import { motion } from "framer-motion"
import { AlertTriangle, Eye, FileWarning, HelpCircle } from "lucide-react"
import { useLanguage } from "@/lib/i18n/language-context"

const icons = [FileWarning, HelpCircle, Eye, AlertTriangle]
const colors = [
  { color: "text-danger", bgColor: "bg-danger/10" },
  { color: "text-warning", bgColor: "bg-warning/10" },
  { color: "text-primary", bgColor: "bg-primary/10" },
  { color: "text-[#A855F7]", bgColor: "bg-[#A855F7]/10" },
]

export function ProblemSection() {
  const { t } = useLanguage()

  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            {t.problem.title} <span className="gradient-text">{t.problem.titleHighlight}</span>?
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            {t.problem.description}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {t.problem.problems.map((problem, index) => {
            const Icon = icons[index]
            const { color, bgColor } = colors[index]
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="glass-card rounded-xl p-6 hover:border-primary/30 transition-all duration-300 group"
              >
                <div className={`w-14 h-14 rounded-xl ${bgColor} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className={`w-7 h-7 ${color}`} />
                </div>
                <h3 className="text-xl font-semibold mb-3">{problem.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {problem.description}
                </p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
