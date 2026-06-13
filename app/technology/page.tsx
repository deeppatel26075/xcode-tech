"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Code, Server, Cloud, Cpu, Layers } from "lucide-react";
import TechnologyOrbit from "../../components/TechnologyOrbit";
import { FadeIn, StaggerContainer, StaggerItem } from "../../components/Animations";

const techStacks = [
  {
    icon: Code,
    title: "Client-Side &amp; Headless Interfaces",
    technologies: ["React.js", "Next.js (App Router)", "TypeScript", "Tailwind CSS"],
    description: "We build headless frontends optimized for core web vitals, server-side rendering, and responsive device layouts."
  },
  {
    icon: Server,
    title: "Server-Side &amp; API Gateways",
    technologies: ["Python (FastAPI/Django)", "Node.js (NestJS/Express)", "RESTful APIs", "GraphQL Services"],
    description: "Implementing microservice backends that process transactional calculations securely with sub-second speeds."
  },
  {
    icon: Cloud,
    title: "Cloud DevOps &amp; Operations",
    technologies: ["AWS Services", "Google Cloud Platform", "Docker Containerization", "Kubernetes"],
    description: "Deploying fully automated infrastructure pipelines with real-time logs, cost monitors, and elastic capacity balancing."
  },
  {
    icon: Cpu,
    title: "Cognitive AI Systems",
    technologies: ["Custom LLM Tuning", "Autonomous Agents", "Vector Databases", "Workflow Orchestrations"],
    description: "Integrating smart cognitive agents that interpret goals, parse documents, and execute complex workflows independently."
  }
];

import SubpageContainer from "../../components/SubpageContainer";

export default function TechnologyPage() {
  return (
    <SubpageContainer>
      {/* Hero orbit showcase */}
      <section className="py-8 relative overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Copy */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <FadeIn direction="up" delay={0.1}>
              <span className="text-xs font-bold text-primary uppercase tracking-widest bg-blue-50/60 border border-blue-100/40 px-3.5 py-1.5 rounded-full inline-block">
                Technology Orbit
              </span>
            </FadeIn>
            
            <FadeIn direction="up" delay={0.2}>
              <h1 className="font-display font-extrabold text-4xl sm:text-5xl text-dark tracking-tight leading-tight">
                Our Interactive <br />
                <span className="bg-gradient-to-r from-primary to-sky-custom bg-clip-text text-transparent">
                  Engineering Stack
                </span>
              </h1>
            </FadeIn>

            <FadeIn direction="up" delay={0.3}>
              <p className="text-slate-655 text-sm leading-relaxed">
                Xcode Tech leverages a refined selection of tools, hosting nodes, and AI frameworks to deliver sub-second global responses, iron-clad data security, and autonomous workflow handling.
              </p>
              <p className="text-slate-655 text-sm leading-relaxed mt-2">
                Click on the core technologies in the rotating orbit to explore how our unified architecture empowers your digital evolution.
              </p>
            </FadeIn>
          </div>

          {/* Orbit Canvas */}
          <div className="lg:col-span-7 flex justify-center items-center">
            <FadeIn direction="none" delay={0.2} duration={1.2}>
              <TechnologyOrbit />
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Tech Stack Grids */}
      <section className="py-16">
        <div className="w-full">
          <div className="max-w-xl mb-16">
            <FadeIn direction="up" delay={0.1}>
              <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-dark">
                How We Architect Platforms
              </h2>
            </FadeIn>
            <FadeIn direction="up" delay={0.2}>
              <p className="text-slate-600 text-sm mt-3 leading-relaxed">
                We organize our engineering stack into logical tiers, establishing strict security perimeters and clean boundaries.
              </p>
            </FadeIn>
          </div>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {techStacks.map((stack, index) => {
              const Icon = stack.icon;
              return (
                <StaggerItem key={index}>
                  <div className="rounded-2xl border border-white/30 p-6 bg-white/40 backdrop-blur-md hover:border-primary/20 hover:shadow-lg transition-all h-full flex flex-col justify-between">
                    <div>
                      <div className="flex items-center gap-3.5 mb-6">
                        <span className="p-2.5 rounded-xl bg-white/60 border border-white/30 text-primary shadow-sm">
                          <Icon className="w-5 h-5 animate-pulse" />
                        </span>
                        <h3 className="font-display font-bold text-base text-dark" dangerouslySetInnerHTML={{ __html: stack.title }} />
                      </div>
                      
                      <p className="text-xs text-slate-600 leading-relaxed mb-6">
                        {stack.description}
                      </p>
                    </div>

                    {/* Tech List Badges */}
                    <div className="flex flex-wrap gap-2 pt-4 border-t border-white/30">
                      {stack.technologies.map((tech) => (
                        <span key={tech} className="text-[10px] font-bold text-slate-700 bg-white/60 border border-white/30 px-3 py-1 rounded-full shadow-inner">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>
      </section>

      {/* Security standard section */}
      <section className="py-12 relative">
        <div className="max-w-4xl mx-auto text-center flex flex-col items-center gap-5">
          <span className="p-3 bg-blue-50/60 border border-blue-100/40 text-primary rounded-2xl shadow-inner animate-bounce">
            <Layers className="w-6 h-6" />
          </span>
          <h2 className="font-display font-extrabold text-2xl text-dark">
            Optimized for Uptime &amp; Compliance
          </h2>
          <p className="text-slate-500 text-sm max-w-lg leading-relaxed">
            All custom applications are configured with automated CI/CD security scanning, Docker isolation, and dynamic cost monitoring, meeting ISO 27001 and HIPAA standards.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-primary hover:bg-blue-700 text-white font-semibold text-xs px-6 py-3.5 rounded-full shadow-lg shadow-blue-500/10 transition-all group mt-2"
          >
            Request System Audit
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </div>
      </section>
    </SubpageContainer>
  );
}
