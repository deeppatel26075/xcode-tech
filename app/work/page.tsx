"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { projects } from "../../content/projects";
import CaseStudyCard from "../../components/CaseStudyCard";
import { FadeIn, StaggerContainer, StaggerItem } from "../../components/Animations";

import SubpageContainer from "../../components/SubpageContainer";

export default function WorkPage() {
  return (
    <SubpageContainer>
      {/* Hero Header */}
      <section className="py-12 relative">
        <div className="max-w-4xl mx-auto text-center">
          <FadeIn direction="up" delay={0.1}>
            <span className="text-xs font-bold text-primary uppercase tracking-widest bg-blue-50/60 border border-blue-100/40 px-3.5 py-1.5 rounded-full inline-block mb-4">
              Our Portfolio
            </span>
          </FadeIn>
          <FadeIn direction="up" delay={0.2}>
            <h1 className="font-display font-extrabold text-4xl sm:text-5xl text-dark tracking-tight leading-tight">
              Engineering Excellence in Action <br />
              <span className="bg-gradient-to-r from-primary to-sky-custom bg-clip-text text-transparent">
                Case Studies &amp; Products
              </span>
            </h1>
          </FadeIn>
          <FadeIn direction="up" delay={0.3}>
            <p className="text-slate-600 text-sm sm:text-base mt-6 max-w-2xl mx-auto leading-relaxed">
              Explore how Xcode Tech has engineered bespoke web environments, complex automation systems, and secure cloud platforms for companies worldwide.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Case Studies Showcase */}
      <section className="py-16">
        <div className="w-full">
          <StaggerContainer className="flex flex-col gap-10">
            {projects.map((project) => (
              <StaggerItem key={project.id}>
                <CaseStudyCard project={project} />
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* footer CTA */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto text-center flex flex-col items-center gap-6">
          <h2 className="font-display font-extrabold text-3xl text-dark">
            Ready to add your project to this list?
          </h2>
          <p className="text-slate-500 text-sm max-w-lg leading-relaxed">
            Get in touch with us to start detailing your custom software specifications, timelines, and budget expectations.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-primary hover:bg-blue-700 text-white font-semibold text-xs px-6 py-3.5 rounded-full shadow-lg shadow-blue-500/10 transition-all group mt-2"
          >
            Start Your Project Case Study
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </div>
      </section>
    </SubpageContainer>
  );
}
