"use client"

import { motion } from "framer-motion"
import { Shield, Camera, MapPin, HardDrive, BarChart3, AlertCircle, CheckCircle } from "lucide-react"
import { useLanguage } from "@/lib/i18n/language-context"

export function ReportPreviewSection() {
  const { t } = useLanguage()

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#00FF88]/5 to-transparent" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            {t.report.title} <span className="gradient-text">{t.report.titleHighlight}</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            {t.report.description}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <div className="glass-card rounded-2xl p-8 relative overflow-hidden">
            <div className="absolute inset-0 scanline opacity-30" />
            
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8 pb-6 border-b border-border">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-xl bg-primary/20 flex items-center justify-center">
                  <Shield className="w-7 h-7 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">{t.report.reportTitle}</h3>
                  <p className="text-sm text-muted-foreground">example_app_v3.2.1.apk</p>
                </div>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#00FF88]/20">
                <CheckCircle className="w-5 h-5 text-[#00FF88]" />
                <span className="font-semibold text-[#00FF88]">{t.report.safe}</span>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Left Column */}
              <div className="space-y-6">
                {/* Security Score */}
                <div className="text-center p-6 rounded-xl bg-secondary/50">
                  <div className="relative inline-block">
                    <svg className="w-32 h-32 transform -rotate-90">
                      <circle
                        cx="64"
                        cy="64"
                        r="56"
                        stroke="currentColor"
                        strokeWidth="8"
                        fill="none"
                        className="text-secondary"
                      />
                      <motion.circle
                        cx="64"
                        cy="64"
                        r="56"
                        stroke="url(#previewGradient)"
                        strokeWidth="8"
                        fill="none"
                        strokeLinecap="round"
                        initial={{ strokeDasharray: "0 352" }}
                        whileInView={{ strokeDasharray: "302 352" }}
                        viewport={{ once: true }}
                        transition={{ duration: 2, delay: 0.5 }}
                      />
                      <defs>
                        <linearGradient id="previewGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                          <stop offset="0%" stopColor="#00D1FF" />
                          <stop offset="100%" stopColor="#00FF88" />
                        </linearGradient>
                      </defs>
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center flex-col">
                      <span className="text-3xl font-bold gradient-text">86</span>
                      <span className="text-xs text-muted-foreground">/100</span>
                    </div>
                  </div>
                  <p className="mt-4 text-sm font-medium">{t.report.securityScore}</p>
                </div>

                {/* Detected Permissions */}
                <div className="p-4 rounded-xl bg-secondary/50">
                  <h4 className="font-semibold mb-3 flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 text-warning" />
                    {t.report.detectedPermissions}
                  </h4>
                  <div className="space-y-2">
                    <div className="flex items-center gap-3 p-2 rounded-lg bg-background/50">
                      <Camera className="w-4 h-4 text-primary" />
                      <span className="text-sm">{t.report.camera}</span>
                    </div>
                    <div className="flex items-center gap-3 p-2 rounded-lg bg-background/50">
                      <MapPin className="w-4 h-4 text-primary" />
                      <span className="text-sm">{t.report.location}</span>
                    </div>
                    <div className="flex items-center gap-3 p-2 rounded-lg bg-background/50">
                      <HardDrive className="w-4 h-4 text-primary" />
                      <span className="text-sm">{t.report.storage}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column */}
              <div className="space-y-6">
                {/* Trackers Found */}
                <div className="p-4 rounded-xl bg-secondary/50">
                  <h4 className="font-semibold mb-3 flex items-center gap-2">
                    <BarChart3 className="w-4 h-4 text-warning" />
                    {t.report.trackersFound}
                  </h4>
                  <div className="p-3 rounded-lg bg-warning/10 border border-warning/20">
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Google Analytics</span>
                      <span className="text-xs px-2 py-1 rounded-full bg-warning/20 text-warning">{t.report.analytics}</span>
                    </div>
                  </div>
                </div>

                {/* Risk Level */}
                <div className="p-4 rounded-xl bg-secondary/50">
                  <h4 className="font-semibold mb-3">{t.report.riskLevel}</h4>
                  <div className="flex items-center gap-4">
                    <div className="flex-1 h-2 rounded-full bg-secondary overflow-hidden">
                      <motion.div 
                        className="h-full bg-gradient-to-r from-[#00FF88] to-[#00D1FF]"
                        initial={{ width: 0 }}
                        whileInView={{ width: "25%" }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.5 }}
                      />
                    </div>
                    <span className="text-sm font-medium text-[#00FF88]">{t.report.low}</span>
                  </div>
                </div>

                {/* AI Summary */}
                <div className="p-4 rounded-xl bg-gradient-to-br from-primary/10 to-[#00FF88]/10 border border-primary/20">
                  <h4 className="font-semibold mb-3 flex items-center gap-2">
                    <span className="text-primary">✨</span>
                    {t.report.aiSummary}
                  </h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    &ldquo;{t.report.aiSummaryText}&rdquo;
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
