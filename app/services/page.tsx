"use client"

import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import ShaderBackground from "@/components/shader-background"
import { useLanguage } from "@/contexts/language-context"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  ArrowRight,
  CheckCircle,
  Code,
  Smartphone,
  Brain,
  Palette,
  Users,
  Target,
  Rocket,
  MessageCircle,
} from "lucide-react"

const services = [
  {
    icon: Code,
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    icon: Smartphone,
    gradient: "from-purple-500 to-pink-500",
  },
  {
    icon: Brain,
    gradient: "from-green-500 to-emerald-500",
  },
  {
    icon: Palette,
    gradient: "from-orange-500 to-red-500",
  },
]

const methodology = [
  {
    step: "01",
    icon: Users,
    color: "text-blue-400",
  },
  {
    step: "02",
    icon: Target,
    color: "text-purple-400",
  },
  {
    step: "03",
    icon: Code,
    color: "text-green-400",
  },
  {
    step: "04",
    icon: Rocket,
    color: "text-orange-400",
  },
]

export default function ServicesPage() {
  const { t, isRTL } = useLanguage()

  return (
    <div className="relative">
      <ShaderBackground>
        <Navigation />

        {/* Hero Section */}
        <section className="pt-32 pb-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              {t.services?.title || "Our Services"}
            </h1>
            <p className="text-xl text-slate-300 leading-relaxed max-w-2xl mx-auto">
              {t.services?.subtitle || "We provide comprehensive technology solutions"}
            </p>
          </div>
        </section>
      </ShaderBackground>

      <div className="bg-background">
        {/* Detailed Services Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12">
              {services.map((service, index) => {
                const Icon = service.icon
                const serviceKey = ["web", "mobile", "ai", "design"][index]

                return (
                  <Card
                    key={index}
                    className="bg-slate-800/50 border-slate-700 p-8 hover:bg-slate-700/50 transition-all duration-300 group"
                  >
                    <div
                      className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${service.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                    >
                      <Icon className="w-8 h-8 text-white" />
                    </div>

                    <h3 className="text-2xl font-bold text-white mb-4">
                      {t.services?.[serviceKey]?.title || `Service ${index + 1}`}
                    </h3>
                    <p className="text-slate-300 text-lg leading-relaxed mb-6">
                      {t.services?.[serviceKey]?.description || "Service description"}
                    </p>

                    <div className="space-y-3 mb-8">
                      {[1, 2, 3].map((item) => (
                        <div key={item} className="flex items-center">
                          <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                          <span className="text-slate-300">
                            Feature {item} for {t.services?.[serviceKey]?.title || "this service"}
                          </span>
                        </div>
                      ))}
                    </div>

                    <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white group">
                      Learn More
                      <ArrowRight
                        className={`w-4 h-4 ${isRTL ? "mr-2 rotate-180" : "ml-2"} group-hover:translate-x-1 transition-transform`}
                      />
                    </Button>
                  </Card>
                )
              })}
            </div>
          </div>
        </section>

        {/* How We Work Section */}
        <section className="py-20 px-4 bg-slate-900/50">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">How We Work</h2>
              <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
                We follow a clear and proven methodology to ensure we deliver the best results
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {methodology.map((step, index) => {
                const Icon = step.icon

                return (
                  <Card
                    key={index}
                    className="bg-slate-800/50 border-slate-700 p-6 text-center hover:bg-slate-700/50 transition-all duration-300 group"
                  >
                    <div className="relative mb-6">
                      <div
                        className={`w-16 h-16 rounded-full bg-slate-700 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}
                      >
                        <Icon className={`w-8 h-8 ${step.color}`} />
                      </div>
                      <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white text-sm font-bold">
                        {step.step}
                      </div>
                    </div>

                    <h3 className="text-xl font-bold text-white mb-3">Step {step.step}</h3>
                    <p className="text-slate-300 leading-relaxed">
                      Detailed description of step {step.step} in our methodology
                    </p>
                  </Card>
                )
              })}
            </div>
          </div>
        </section>

        {/* Start Your Project Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-3xl p-12 border border-slate-700">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">Start Your Project Today</h2>
              <p className="text-xl text-slate-300 mb-8 leading-relaxed max-w-2xl mx-auto">
                Contact us now for a free consultation and custom quote for your project
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 text-lg group">
                  Start Project
                  <ArrowRight
                    className={`w-5 h-5 ${isRTL ? "mr-2 rotate-180" : "ml-2"} group-hover:translate-x-1 transition-transform`}
                  />
                </Button>
                <Button
                  variant="outline"
                  className="border-slate-600 text-white hover:bg-slate-800 px-8 py-4 text-lg group bg-transparent"
                >
                  <MessageCircle className={`w-5 h-5 ${isRTL ? "ml-2" : "mr-2"}`} />
                  Free Consultation
                </Button>
              </div>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  )
}
