"use client"

import { useLanguage } from "@/contexts/language-context"
import { ArrowRight, Play } from "lucide-react"

export default function HeroSection() {
  const { t, language } = useLanguage()

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Hero Content */}
      <div className="container mx-auto px-6 z-20 relative">
        <div className={`max-w-4xl mx-auto ${language === "ar" ? "text-right" : "text-left"}`}>
          {/* Badge */}
          <div
            className={`inline-flex items-center px-4 py-2 rounded-full bg-white/5 backdrop-blur-sm mb-8 relative ${
              language === "ar" ? "rtl:ml-auto" : ""
            }`}
            style={{
              filter: "url(#glass-effect)",
            }}
          >
            <div className="absolute top-0 left-1 right-1 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent rounded-full" />
            <span className="text-white/90 text-sm font-light relative z-10">{t("hero.badge")}</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-light text-white mb-6 leading-tight">
            <span className="font-medium italic instrument text-accent block">{t("hero.title")}</span>
            <span className="font-light tracking-tight text-white/90 text-4xl md:text-5xl lg:text-6xl block mt-2">
              {t("hero.subtitle")}
            </span>
          </h1>

          {/* Description */}
          <p className="text-lg md:text-xl font-light text-white/70 mb-12 leading-relaxed max-w-2xl">
            {t("hero.description")}
          </p>

          {/* CTA Buttons */}
          <div className={`flex items-center gap-6 flex-wrap ${language === "ar" ? "rtl:flex-row-reverse" : ""}`}>
            <button className="group px-8 py-4 rounded-full bg-primary text-primary-foreground font-medium text-base transition-all duration-300 hover:bg-primary/90 cursor-pointer flex items-center gap-3 hover:gap-4">
              {t("hero.cta.primary")}
              <ArrowRight size={20} className="transition-all duration-300" />
            </button>

            <button className="group px-8 py-4 rounded-full bg-transparent border border-white/30 text-white font-medium text-base transition-all duration-300 hover:bg-white/10 hover:border-white/50 cursor-pointer flex items-center gap-3">
              <Play size={18} className="fill-current" />
              {t("hero.cta.secondary")}
            </button>
          </div>

          {/* Stats */}
          <div className={`mt-16 grid grid-cols-3 gap-8 max-w-lg ${language === "ar" ? "rtl:mr-auto" : ""}`}>
            <div className={`${language === "ar" ? "text-right" : "text-left"}`}>
              <div className="text-3xl font-semibold text-white mb-1">50+</div>
              <div className="text-sm text-white/60 font-light">
                {language === "ar" ? "مشروع مكتمل" : "Projects Completed"}
              </div>
            </div>
            <div className={`${language === "ar" ? "text-right" : "text-left"}`}>
              <div className="text-3xl font-semibold text-white mb-1">5+</div>
              <div className="text-sm text-white/60 font-light">
                {language === "ar" ? "سنوات خبرة" : "Years Experience"}
              </div>
            </div>
            <div className={`${language === "ar" ? "text-right" : "text-left"}`}>
              <div className="text-3xl font-semibold text-white mb-1">100%</div>
              <div className="text-sm text-white/60 font-light">
                {language === "ar" ? "رضا العملاء" : "Client Satisfaction"}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="flex flex-col items-center gap-2 text-white/60">
          <span className="text-xs font-light">{language === "ar" ? "اكتشف المزيد" : "Scroll to explore"}</span>
          <div className="w-px h-12 bg-gradient-to-b from-white/60 to-transparent animate-pulse"></div>
        </div>
      </div>
    </section>
  )
}
