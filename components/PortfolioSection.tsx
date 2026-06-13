"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import { projects } from "../content/projects";
import CaseStudyCard from "./CaseStudyCard";
import { FadeIn, StaggerContainer, StaggerItem } from "./Animations";

export default function PortfolioSection() {
  // Show first 3 projects for the home page showcase
  const showcasedProjects = projects.slice(0, 3);

  return (
    <section className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-xl">
            <FadeIn direction="up" delay={0.1}>
              <span className="text-xs font-bold text-primary uppercase tracking-widest bg-blue-50 border border-blue-100 px-3.5 py-1.5 rounded-full inline-block mb-4">
                Selected Work
              </span>
            </FadeIn>
            <FadeIn direction="up" delay={0.2}>
              <h2 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl text-dark tracking-tight leading-none">
                Enterprise Case Studies
              </h2>
            </FadeIn>
            <FadeIn direction="up" delay={0.3}>
              <p className="text-slate-500 text-sm sm:text-base mt-4 leading-relaxed">
                Discover how Xcode Tech partners with global businesses to deliver digital engineering breakthroughs and automated systems.
              </p>
            </FadeIn>
          </div>

          <FadeIn direction="up" delay={0.4} className="shrink-0">
            <Link
              href="/work"
              className="inline-flex items-center gap-1.5 bg-slate-50 hover:bg-slate-100 border border-slate-200 text-slate-700 font-semibold text-xs px-5 py-3 rounded-full transition-colors group"
            >
              See All Case Studies
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </FadeIn>
        </div>

        {/* Case Studies List */}
        <StaggerContainer className="flex flex-col gap-8">
          {showcasedProjects.map((project) => (
            <StaggerItem key={project.id}>
              <CaseStudyCard project={project} />
            </StaggerItem>
          ))}
        </StaggerContainer>

      </div>
    </section>
  );
}
