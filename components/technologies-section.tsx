"use client"

import { useLanguage } from "@/contexts/language-context"
import { Card } from "@/components/ui/card"

const technologies = [
  {
    name: "React",
    icon: "⚛️",
    category: "Frontend",
  },
  {
    name: "Next.js",
    icon: "▲",
    category: "Framework",
  },
  {
    name: "Node.js",
    icon: "🟢",
    category: "Backend",
  },
  {
    name: "TypeScript",
    icon: "📘",
    category: "Language",
  },
  {
    name: "Python",
    icon: "🐍",
    category: "Language",
  },
  {
    name: "MongoDB",
    icon: "🍃",
    category: "Database",
  },
  {
    name: "PostgreSQL",
    icon: "🐘",
    category: "Database",
  },
  {
    name: "AWS",
    icon: "☁️",
    category: "Cloud",
  },
  {
    name: "Docker",
    icon: "🐳",
    category: "DevOps",
  },
  {
    name: "Flutter",
    icon: "💙",
    category: "Mobile",
  },
  {
    name: "React Native",
    icon: "📱",
    category: "Mobile",
  },
  {
    name: "TensorFlow",
    icon: "🧠",
    category: "AI/ML",
  },
]

export default function TechnologiesSection() {
  const { t, isRTL } = useLanguage()

  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">{t("technologies.title")}</h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">{t("technologies.subtitle")}</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
          {technologies.map((tech, index) => (
            <Card
              key={index}
              className="bg-slate-800/50 border-slate-700 hover:bg-slate-700/50 transition-all duration-300 hover:scale-105 group"
            >
              <div className="p-6 text-center">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">{tech.icon}</div>
                <h3 className="text-white font-semibold mb-2">{tech.name}</h3>
                <p className="text-slate-400 text-sm">{tech.category}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
