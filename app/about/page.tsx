"use client"

import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import ShaderBackground from "@/components/shader-background"
import TeamSection from "@/components/team-section"
import { useLanguage } from "@/contexts/language-context"
import { Card } from "@/components/ui/card"
import { Heart, Target, Lightbulb, Shield, Users, Award, Rocket } from "lucide-react"

const values = [
  {
    icon: Heart,
    gradient: "from-red-500 to-pink-500",
  },
  {
    icon: Target,
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    icon: Lightbulb,
    gradient: "from-yellow-500 to-orange-500",
  },
  {
    icon: Shield,
    gradient: "from-green-500 to-emerald-500",
  },
]

const timeline = [
  {
    year: "2022",
    icon: Rocket,
    color: "text-blue-400",
  },
  {
    year: "2023",
    icon: Users,
    color: "text-purple-400",
  },
  {
    year: "2024",
    icon: Award,
    color: "text-green-400",
  },
  {
    year: "2025",
    icon: Target,
    color: "text-orange-400",
  },
]

export default function AboutPage() {
  const { t, isRTL } = useLanguage()

  return (
    <div className="relative">
      <ShaderBackground>
        <Navigation />

        {/* Hero Section */}
        <section className="pt-32 pb-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">Who We Are</h1>
            <p className="text-xl text-slate-300 leading-relaxed max-w-2xl mx-auto">
              We are a team of passionate developers and designers who believe in the power of technology to change the
              world and improve people's lives
            </p>
          </div>
        </section>
      </ShaderBackground>

      <div className="bg-background">
        {/* Our Story Section */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">Our Story</h2>
                <div className="space-y-6 text-lg text-slate-300 leading-relaxed">
                  <p>
                    Our journey began in 2022 with a simple dream: to provide innovative technology solutions that help
                    companies grow and thrive in the digital age. Today, we are proud of what we have achieved and we
                    continue to strive to achieve more.
                  </p>
                  <p>
                    From humble beginnings as a small team of passionate developers, we have grown into a comprehensive
                    technology company that serves clients across various industries. Our commitment to excellence and
                    innovation has been the driving force behind our success.
                  </p>
                  <p>
                    We believe that technology should not just solve problems, but should also inspire and empower
                    people to achieve their dreams. This philosophy guides everything we do, from the smallest feature
                    to the largest enterprise solution.
                  </p>
                </div>
              </div>

              <div className="relative">
                <div className="aspect-square bg-gradient-to-br from-blue-600/20 to-purple-600/20 rounded-3xl border border-slate-700 flex items-center justify-center">
                  <img
                    src="/modern-tech-team-working-together-in-office.jpg"
                    alt="Our Story"
                    className="w-full h-full object-cover rounded-3xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Vision Section */}
        <section className="py-20 px-4 bg-slate-900/50">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12">
              <Card className="bg-slate-800/50 border-slate-700 p-8 hover:bg-slate-700/50 transition-all duration-300">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center mb-6">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Our Mission</h3>
                <p className="text-slate-300 text-lg leading-relaxed">
                  To empower businesses with innovative technology solutions that drive growth, efficiency, and success
                  in the digital world. We are committed to delivering exceptional value through cutting-edge
                  development and design.
                </p>
              </Card>

              <Card className="bg-slate-800/50 border-slate-700 p-8 hover:bg-slate-700/50 transition-all duration-300">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center mb-6">
                  <Lightbulb className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Our Vision</h3>
                <p className="text-slate-300 text-lg leading-relaxed">
                  To be the leading technology partner that transforms ideas into reality, creating digital experiences
                  that inspire and connect people worldwide. We envision a future where technology seamlessly enhances
                  every aspect of life.
                </p>
              </Card>
            </div>
          </div>
        </section>

        {/* Core Values Section */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Our Core Values</h2>
              <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
                These are the values that guide our work and shape our company culture
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => {
                const Icon = value.icon
                const valueNames = ["Passion", "Excellence", "Innovation", "Integrity"]
                const valueDescriptions = [
                  "We are passionate about what we do and committed to delivering exceptional results",
                  "We strive for excellence in every project and never settle for mediocrity",
                  "We embrace innovation and constantly seek new ways to solve problems",
                  "We operate with integrity and transparency in all our business relationships",
                ]

                return (
                  <Card
                    key={index}
                    className="bg-slate-800/50 border-slate-700 p-6 text-center hover:bg-slate-700/50 transition-all duration-300 group"
                  >
                    <div
                      className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${value.gradient} flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}
                    >
                      <Icon className="w-8 h-8 text-white" />
                    </div>

                    <h3 className="text-xl font-bold text-white mb-3">{valueNames[index]}</h3>
                    <p className="text-slate-300 leading-relaxed">{valueDescriptions[index]}</p>
                  </Card>
                )
              })}
            </div>
          </div>
        </section>

        {/* Timeline Section */}
        <section className="py-20 px-4 bg-slate-900/50">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Our Journey Through the Years</h2>
              <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
                Track our growth and development from the beginning to today
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {timeline.map((item, index) => {
                const Icon = item.icon
                const milestones = [
                  "Company Founded - Started with a vision to transform digital experiences",
                  "Team Expansion - Grew to 10+ talented developers and designers",
                  "Major Achievements - Completed 50+ successful projects across industries",
                  "Future Goals - Expanding internationally and embracing new technologies",
                ]

                return (
                  <Card
                    key={index}
                    className="bg-slate-800/50 border-slate-700 p-6 text-center hover:bg-slate-700/50 transition-all duration-300 group"
                  >
                    <div className="relative mb-6">
                      <div
                        className={`w-16 h-16 rounded-full bg-slate-700 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}
                      >
                        <Icon className={`w-8 h-8 ${item.color}`} />
                      </div>
                      <div className="absolute -top-2 -right-2 w-12 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white text-sm font-bold">
                        {item.year}
                      </div>
                    </div>

                    <h3 className="text-xl font-bold text-white mb-3">{item.year}</h3>
                    <p className="text-slate-300 leading-relaxed text-sm">{milestones[index]}</p>
                  </Card>
                )
              })}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <TeamSection />
      </div>

      <Footer />
    </div>
  )
}
