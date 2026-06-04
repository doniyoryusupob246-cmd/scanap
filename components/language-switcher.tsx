"use client"

import { useLanguage } from "@/lib/i18n/language-context"
import { Globe } from "lucide-react"

export function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage()

  return (
    <button
      onClick={() => setLanguage(language === "en" ? "tr" : "en")}
      className="flex items-center gap-2 px-3 py-2 rounded-lg glass hover:bg-secondary/50 transition-colors text-sm"
      aria-label="Switch language"
    >
      <Globe className="w-4 h-4 text-primary" />
      <span className="font-medium">{language === "en" ? "TR" : "EN"}</span>
    </button>
  )
}
