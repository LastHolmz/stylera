"use client"

import { useLanguage } from "@/contexts/language-context"
import LanguageSwitcher from "./language-switcher"
import { useState } from "react"
import { Menu, X } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"

export default function Navigation() {
  const { t, language } = useLanguage()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()

  const navItems = [
    { key: "nav.home", href: "/" },
    { key: "nav.services", href: "/services" },
    { key: "nav.about", href: "/about" },
    { key: "nav.contact", href: "/contact" },
  ]

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/"
    }
    return pathname.startsWith(href)
  }

  return (
    <header className="relative z-20 flex items-center justify-between p-6">
      {/* Logo */}
      <div className="flex items-center">
        <Link href="/" className="text-white font-semibold text-xl tracking-tight hover:opacity-80 transition-opacity">
          <span className="font-light">Stylera</span>
          <span className="text-accent">Tech</span>
        </Link>
      </div>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex items-center space-x-2">
        {navItems.map((item) => (
          <Link
            key={item.key}
            href={item.href}
            className={`text-sm font-light px-4 py-2 rounded-full transition-all duration-200 ${
              isActive(item.href) ? "text-white bg-white/10" : "text-white/80 hover:text-white hover:bg-white/10"
            }`}
          >
            {t(item.key)}
          </Link>
        ))}
      </nav>

      {/* Desktop Language Switcher & CTA */}
      <div className="hidden md:flex items-center gap-4">
        <LanguageSwitcher />
        <Link
          href="/contact"
          className="px-6 py-2 rounded-full bg-primary text-primary-foreground font-medium text-sm transition-all duration-200 hover:bg-primary/90 cursor-pointer"
        >
          {t("hero.cta.primary")}
        </Link>
      </div>

      {/* Mobile Menu Button */}
      <button className="md:hidden text-white p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-background/95 backdrop-blur-sm border-t border-border md:hidden">
          <nav className="flex flex-col p-6 space-y-4">
            {navItems.map((item) => (
              <Link
                key={item.key}
                href={item.href}
                className={`text-sm font-light py-2 transition-all duration-200 ${
                  isActive(item.href) ? "text-white" : "text-white/80 hover:text-white"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {t(item.key)}
              </Link>
            ))}
            <div className="flex items-center justify-between pt-4 border-t border-border">
              <LanguageSwitcher />
              <Link
                href="/contact"
                className="px-6 py-2 rounded-full bg-primary text-primary-foreground font-medium text-sm transition-all duration-200 hover:bg-primary/90"
                onClick={() => setIsMenuOpen(false)}
              >
                {t("hero.cta.primary")}
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
