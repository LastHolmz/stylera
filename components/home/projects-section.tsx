"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  Div,
  defaultContainerVariants,
  itemVariants,
} from "@/constants/animation";
import InViewSection from "../ui/Custom-ui/framer-motion/in-view-section";
import ProjectCard from "@/components/projects/project-card";
import projects from "@/lib/projects";

interface ProjectsSectionProps {
  dictionary?: Dictionary["projects"];
  locale: "en" | "ar";
}

export default function ProjectsSection({
  dictionary,
  locale,
}: ProjectsSectionProps) {
  if (!dictionary) return null;

  return (
    <InViewSection className="py-20 px-4" variants={defaultContainerVariants}>
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <Div className="text-center mb-16" variants={itemVariants}>
          <h2 className="text-4xl md:text-5xl font-bold text-accent mb-6">
            {dictionary.title}
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            {dictionary.subtitle}
          </p>
        </Div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.projects.slice(0, 3).map((project, index) => {
            return (
              <Div key={index} variants={itemVariants}>
                <ProjectCard
                  title={project[locale].title}
                  description={project[locale].description}
                  image={project[locale].image}
                  category={project[locale].category}
                  technologies={project[locale].technologies}
                  // github={project[locale]?.githubLink}
                  // live={project[locale].liveLink}
                />
              </Div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Link href={`/projects`}>
            <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-10 py-5.5 text-lg cursor-pointer">
              {dictionary.viewAll}
            </Button>
          </Link>
        </div>
      </div>
    </InViewSection>
  );
}
