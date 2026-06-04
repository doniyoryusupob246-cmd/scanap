"use client"

import { LanguageProvider } from "@/lib/i18n/language-context"
import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { ProblemSection } from "@/components/problem-section"
import { HowItWorksSection } from "@/components/how-it-works-section"
import { FeaturesSection } from "@/components/features-section"
import { ReportPreviewSection } from "@/components/report-preview-section"
import { RoadmapSection } from "@/components/roadmap-section"
import { DownloadSection } from "@/components/download-section"
import { FAQSection } from "@/components/faq-section"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <LanguageProvider>
      <main className="min-h-screen bg-background">
        <Navbar />
        <HeroSection />
        <ProblemSection />
        <HowItWorksSection />
        <FeaturesSection />
        <ReportPreviewSection />
        <RoadmapSection />
        <DownloadSection />
        <FAQSection />
        <Footer />
      </main>
    </LanguageProvider>
  )
}
