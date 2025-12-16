"use client";

import {
  Code,
  Smartphone,
  Brain,
  Palette,
  Shield,
  Database,
  Cloud,
  BarChart3,
  MessageCircle,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";
import {
  H2,
  P,
  defaultContainerVariants,
  itemVariants,
  textVariants,
} from "@/constants/animation";
import InViewSection from "../ui/Custom-ui/framer-motion/in-view-section";

interface ServicesSectionProps {
  dictionary?: Dictionary["services"];
  locale?: string;
  isRTL?: boolean;
}

export default function ServicesSection({
  dictionary,
  locale,
  isRTL,
}: ServicesSectionProps) {
  if (!dictionary) return null;

  const services = [
    {
      icon: Code,
      key: "web",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      icon: Smartphone,
      key: "mobile",
      gradient: "from-purple-500 to-pink-500",
    },
    {
      icon: Brain,
      key: "ai",
      gradient: "from-green-500 to-emerald-500",
    },
    {
      icon: Database,
      key: "data",
      gradient: "from-amber-500 to-yellow-500",
    },
    {
      icon: Shield,
      key: "security",
      gradient: "from-red-500 to-rose-500",
    },
    {
      icon: Palette,
      key: "design",
      gradient: "from-orange-500 to-red-500",
    },
    {
      icon: Cloud,
      key: "cloud",
      gradient: "from-sky-500 to-indigo-500",
    },
    {
      icon: BarChart3,
      key: "business",
      gradient: "from-fuchsia-500 to-pink-500",
    },
    {
      icon: MessageCircle,
      key: "chatbot",
      gradient: "from-green-400 to-teal-500",
    },
  ];

  return (
    <div id="services" className="py-24 relative">
      <div className="container mx-auto px-4 xl:px-0">
        {/* Section Header */}
        <div className="mx-auto mb-20 text-start">
          <H2
            className="text-4xl text-center md:text-5xl mb-6 font-medium ltr:instrument text-accent"
            variants={textVariants}
          >
            {dictionary.title}
          </H2>
          <P
            className="text-lg text-center max-w-2xl mx-auto text-white/70 font-light leading-relaxed"
            variants={textVariants}
          >
            {dictionary.subtitle}
          </P>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => {
            const Icon = service.icon;
            const serviceData = dictionary[service.key] || {};
            return (
              <div
                key={service.key}
                className="group relative bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-8 hover:bg-card/70 transition-all duration-300 hover:scale-105 hover:shadow-2xl"
              >
                {/* Icon */}
                <div
                  className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.gradient} p-4 mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  <Icon className="w-full h-full text-white" />
                </div>

                {/* Content */}
                <div className="text-start select-none">
                  <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-accent transition-colors duration-300">
                    {serviceData.title}
                  </h3>
                  <p className="text-white/70 font-light leading-relaxed mb-6">
                    {serviceData.description}
                  </p>
                </div>

                {/* Hover Overlay */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
      </div>
    </div>
  );
}
