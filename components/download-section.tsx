"use client"

import { motion } from "framer-motion"
import { Download, Github, Shield, Smartphone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/lib/i18n/language-context"

export function DownloadSection() {
  const { t } = useLanguage()

  return (
    <section id="download" className="py-24 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[150px]" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="glass-card rounded-3xl p-8 md:p-12 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-[#00FF88]/10" />
            
            <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
              {/* Left content */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 mb-6">
                  <Shield className="w-4 h-4 text-primary" />
                  <span className="text-sm text-primary font-medium">{t.download.badge}</span>
                </div>
                
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                  {t.download.title} <span className="gradient-text">{t.download.titleHighlight}</span> {t.download.titleEnd}
                </h2>
                
                <p className="text-lg text-muted-foreground mb-8">
                  {t.download.description}
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button
                    size="lg"
                    className="bg-primary text-primary-foreground hover:bg-primary/90 glow-primary text-lg px-8 py-6"
                  >
                    <Download className="w-5 h-5 mr-2" />
                    {t.download.downloadBtn}
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-border hover:bg-secondary text-lg px-8 py-6"
                  >
                    <Github className="w-5 h-5 mr-2" />
                    {t.download.github}
                  </Button>
                </div>

                <div className="mt-8 flex items-center gap-6 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-[#00FF88]" />
                    <span>{t.download.android}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                    <span>{t.download.size}</span>
                  </div>
                </div>
              </motion.div>

              {/* Right content - Phone mockup */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="relative flex justify-center"
              >
                <div className="relative">
                  {/* Phone frame */}
                  <div className="w-64 h-[500px] rounded-[3rem] border-4 border-border bg-background p-2 relative overflow-hidden shadow-2xl">
                    {/* Screen */}
                    <div className="w-full h-full rounded-[2.5rem] bg-card overflow-hidden relative">
                      {/* Status bar */}
                      <div className="h-8 bg-secondary/50 flex items-center justify-between px-6">
                        <span className="text-xs text-muted-foreground">9:41</span>
                        <div className="flex items-center gap-1">
                          <div className="w-4 h-2 border border-muted-foreground rounded-sm">
                            <div className="w-3/4 h-full bg-[#00FF88]" />
                          </div>
                        </div>
                      </div>
                      
                      {/* App content */}
                      <div className="p-4 space-y-4">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center">
                            <Shield className="w-5 h-5 text-primary" />
                          </div>
                          <span className="font-bold text-lg">ScanAP</span>
                        </div>

                        {/* Score display */}
                        <div className="flex justify-center py-4">
                          <div className="relative">
                            <svg className="w-28 h-28 transform -rotate-90">
                              <circle
                                cx="56"
                                cy="56"
                                r="48"
                                stroke="currentColor"
                                strokeWidth="6"
                                fill="none"
                                className="text-secondary"
                              />
                              <circle
                                cx="56"
                                cy="56"
                                r="48"
                                stroke="url(#phoneGradient)"
                                strokeWidth="6"
                                fill="none"
                                strokeLinecap="round"
                                strokeDasharray="260 302"
                              />
                              <defs>
                                <linearGradient id="phoneGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                  <stop offset="0%" stopColor="#00D1FF" />
                                  <stop offset="100%" stopColor="#00FF88" />
                                </linearGradient>
                              </defs>
                            </svg>
                            <div className="absolute inset-0 flex items-center justify-center flex-col">
                              <span className="text-2xl font-bold gradient-text">86</span>
                              <span className="text-xs text-muted-foreground">{t.hero.safe}</span>
                            </div>
                          </div>
                        </div>

                        {/* Mini stats */}
                        <div className="grid grid-cols-3 gap-2">
                          <div className="text-center p-2 rounded-lg bg-secondary/50">
                            <div className="text-lg font-bold text-[#00FF88]">0</div>
                            <div className="text-[10px] text-muted-foreground">{t.download.malware}</div>
                          </div>
                          <div className="text-center p-2 rounded-lg bg-secondary/50">
                            <div className="text-lg font-bold text-warning">1</div>
                            <div className="text-[10px] text-muted-foreground">{t.download.trackers}</div>
                          </div>
                          <div className="text-center p-2 rounded-lg bg-secondary/50">
                            <div className="text-lg font-bold text-primary">3</div>
                            <div className="text-[10px] text-muted-foreground">{t.download.perms}</div>
                          </div>
                        </div>

                        {/* Scan button */}
                        <button className="w-full py-3 rounded-xl bg-primary text-primary-foreground font-semibold text-sm">
                          {t.download.scanNew}
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Floating elements */}
                  <motion.div
                    className="absolute -top-4 -right-4 p-3 glass-card rounded-xl"
                    animate={{ y: [0, -8, 0] }}
                    transition={{ duration: 3, repeat: Infinity }}
                  >
                    <Smartphone className="w-5 h-5 text-primary" />
                  </motion.div>
                  <motion.div
                    className="absolute -bottom-4 -left-4 p-3 glass-card rounded-xl"
                    animate={{ y: [0, 8, 0] }}
                    transition={{ duration: 3, repeat: Infinity, delay: 1.5 }}
                  >
                    <Shield className="w-5 h-5 text-[#00FF88]" />
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
