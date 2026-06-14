"use client";

import React from "react";
import Link from "next/link";
import { 
  ArrowRight, Cpu, Sparkles, Compass, ShoppingCart, Rocket, ClipboardList, 
  Server, Activity, Coins, GraduationCap, Factory, Code, Zap, Handshake, 
  MessageSquare, ShieldCheck, Layers, Settings, Check
} from "lucide-react";
import Hero from "../../components/Hero";
import TechnologyOrbit from "../../components/TechnologyOrbit";
import CaseStudyCard from "../../components/CaseStudyCard";
import ContactForm from "../../components/ContactForm";
import { projects } from "../../content/projects";
import { FadeIn, StaggerContainer, StaggerItem } from "../../components/Animations";

export default function Home() {
  const featuredProjects = projects.slice(0, 3);

  const solutions = [
    {
      title: "Product Engineering",
      subtitle: "For startups and innovators",
      desc: "We build digital products from concept to launch, prepared to scale for millions of users.",
      items: ["MVP Development", "SaaS Platforms", "Mobile Apps", "Product Scaling"],
      icon: Rocket,
      color: "from-blue-600 to-sky-custom"
    },
    {
      title: "Business Transformation",
      subtitle: "For growing companies",
      desc: "Optimizing operations and digital channels to capture customers and streamline workflows.",
      items: ["Business Websites", "Ecommerce Platforms", "Internal Software", "Automation"],
      icon: Compass,
      color: "from-indigo-600 to-blue-500"
    },
    {
      title: "Intelligent Systems",
      subtitle: "For future-focused businesses",
      desc: "Integrating cognitive AI automation to eliminate manual tasks and process complex logics.",
      items: ["AI Integration", "Smart Workflows", "Data Solutions"],
      icon: Sparkles,
      color: "from-blue-500 to-sky-500"
    },
    {
      title: "Digital Infrastructure",
      subtitle: "For enterprise performance",
      desc: "Architecting cloud-native server operations, security boundaries, and high-performance databases.",
      items: ["Cloud Deployment", "Performance Engineering", "Secure Architecture"],
      icon: Server,
      color: "from-sky-500 to-indigo-600"
    }
  ];

  const engineeringExcellence = [
    {
      title: "Architecture First",
      desc: "Products designed thoroughly before any code is written, ensuring robust schemas and integrations.",
      icon: Compass
    },
    {
      title: "Scalable Systems",
      desc: "Every system is built for future traffic growth and data load expansion from day one.",
      icon: Server
    },
    {
      title: "Secure Development",
      desc: "Application security and data encryption layers are integrated throughout our engineering cycles.",
      icon: ShieldCheck
    },
    {
      title: "Product Thinking",
      desc: "Every technical decision connects technology directly with measurable business outcomes and customer value.",
      icon: Code
    }
  ];

  const processSteps = [
    { step: "01", name: "Discover", desc: "System audits, detailing requirements, and outlining project scope bounds." },
    { step: "02", name: "Strategy", desc: "Technical blueprints, architecture selection, and sprint mapping." },
    { step: "03", name: "Design", desc: "High-fidelity interactive visual frames and user journey mappings." },
    { step: "04", name: "Engineer", desc: "Production-grade backend engineering, API wiring, and database setups." },
    { step: "05", name: "Deploy", desc: "Secure multi-environment deployment, search configuration, and logging pipelines." },
    { step: "06", name: "Scale", desc: "Continuous code audits, database tuning, and infrastructure autoscaling." }
  ];

  const engagementModels = [
    {
      title: "Project Delivery",
      tagline: "End-to-end software development",
      desc: "We own the complete process: scoping, design, development, launch, and initial hand-off support under a defined project scope."
    },
    {
      title: "Dedicated Engineering",
      tagline: "Long-term development collaboration",
      desc: "Direct integration of systems developers with your team to accelerate features deployment, scaling, and operational updates."
    },
    {
      title: "Technology Consulting",
      tagline: "Architecture and growth planning",
      desc: "System audits, technology stack decisions, cloud hosting optimization, and long-term tech strategy blueprints."
    }
  ];

  const industries = [
    { name: "Healthcare", desc: "Secure patient-focused platforms", icon: Activity },
    { name: "Retail & Ecommerce", desc: "Commerce experiences that grow sales", icon: ShoppingCart },
    { name: "Manufacturing", desc: "Automation and operational systems", icon: Factory },
    { name: "Finance", desc: "Custom secure platforms", icon: Coins },
    { name: "Education", desc: "Learning and management systems", icon: GraduationCap },
    { name: "Startups", desc: "Turning ideas into products", icon: Rocket }
  ];

  const techDecisions = [
    {
      tech: "React / Next.js",
      outcome: "High-performance experiences",
      desc: "We utilize serverless edge deployments to achieve sub-second global page loads and boost SEO crawl indexing."
    },
    {
      tech: "Cloud Infrastructure",
      outcome: "Reliability & scalability",
      desc: "AWS, Kubernetes, and serverless containers engineered to auto-scale under load, minimizing idle resource hosting costs."
    },
    {
      tech: "AI Systems & Integrations",
      outcome: "Intelligent automation",
      desc: "Integrating machine learning pipelines and custom AI configurations to automate operational bookkeeping and triage loops."
    },
    {
      tech: "Security Practices",
      outcome: "Protected systems",
      desc: "Standard application shielding, data encryption layers, secure role access protocols, and proactive code auditing."
    }
  ];

  const engineeringStandards = [
    { title: "Clean Architecture", desc: "Decoupled logic layers ensuring easy future updates." },
    { title: "Performance Optimization", desc: "Sub-second database query loops and asset compression." },
    { title: "Secure Development", desc: "Proactive scanning and role security boundaries." },
    { title: "Scalable Infrastructure", desc: "Cloud resources configured for dynamic volume loads." },
    { title: "Continuous Improvement", desc: "CI/CD testing frameworks preventing regressions." }
  ];

  const trustPillars = [
    {
      title: "Ownership Mentality",
      desc: "We treat your digital products like our own, advising on system decisions that maximize actual business outcomes.",
      icon: Handshake
    },
    {
      title: "Engineering Quality",
      desc: "Clean architecture, modular patterns, and robust database models built to sustain long-term business growth.",
      icon: Code
    },
    {
      title: "Transparent Execution",
      desc: "Direct communication with engineering leads. Weekly builds, shared tracking, and zero management buffers.",
      icon: MessageSquare
    },
    {
      title: "Future Ready",
      desc: "Built with tomorrow's growth in mind. We select tech stacks and schemas that scale without requiring costly rewrites.",
      icon: Zap
    }
  ];

  return (
    <div className="flex flex-col w-full bg-white">
      {/* 1. Hero Landing */}
      <Hero />

      {/* 2. Solutions We Engineer */}
      <section className="py-28 bg-slate-50/50 border-b border-slate-100 relative">
        <div className="absolute inset-0 bg-dot-grid opacity-30 -z-10" />
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-20">
            <FadeIn direction="up" delay={0.1}>
              <span className="text-xs font-bold text-primary uppercase tracking-widest bg-blue-50/60 border border-blue-100/40 px-3.5 py-1.5 rounded-full inline-block">
                Core Divisions
              </span>
            </FadeIn>
            <FadeIn direction="up" delay={0.2}>
              <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-dark tracking-tight leading-tight mt-4">
                Solutions We Engineer
              </h2>
            </FadeIn>
            <FadeIn direction="up" delay={0.3}>
              <p className="text-slate-550 text-sm mt-3 leading-relaxed font-semibold">
                We design, build, and scale digital products and systems structured around your exact growth stage.
              </p>
            </FadeIn>
          </div>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {solutions.map((sol) => {
              const Icon = sol.icon;
              return (
                <StaggerItem key={sol.title}>
                  <div className="rounded-2xl border border-white/40 p-6 bg-white/40 backdrop-blur-md hover:bg-white hover:border-primary/20 hover:shadow-xl transition-all duration-300 h-full flex flex-col justify-between group">
                    <div className="flex flex-col gap-4">
                      <div className={`p-3.5 rounded-xl bg-gradient-to-tr ${sol.color} text-white w-fit shadow-md shadow-blue-500/5 group-hover:scale-105 transition-transform`}>
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="font-display font-bold text-base text-dark leading-tight">
                          {sol.title}
                        </h3>
                        <span className="text-[10px] text-primary font-semibold block mt-0.5">
                          {sol.subtitle}
                        </span>
                        <p className="text-xs text-slate-500 leading-relaxed mt-2.5">
                          {sol.desc}
                        </p>
                      </div>
                    </div>
                    
                    <ul className="flex flex-col gap-2 mt-5 pt-4 border-t border-slate-100 text-[11px] font-semibold text-slate-655">
                      {sol.items.map((item) => (
                        <li key={item} className="flex items-center gap-1.5">
                          <Check className="w-3.5 h-3.5 text-green-500 shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>
      </section>

      {/* 3. Engineering Excellence (Enterprise Confidence) */}
      <section className="py-28 bg-transparent border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-20">
            <FadeIn direction="up" delay={0.1}>
              <span className="text-xs font-bold text-primary uppercase tracking-widest bg-blue-50/60 border border-blue-100/40 px-3.5 py-1.5 rounded-full inline-block">
                Trust &amp; Scale
              </span>
            </FadeIn>
            <FadeIn direction="up" delay={0.2}>
              <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-dark tracking-tight leading-tight mt-4">
                Engineering Excellence
              </h2>
            </FadeIn>
          </div>

          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {engineeringExcellence.map((cap) => {
              const Icon = cap.icon;
              return (
                <StaggerItem key={cap.title}>
                  <div className="rounded-2xl border border-white/35 p-6 bg-white/45 backdrop-blur-md shadow-sm hover:shadow-md hover:border-primary/10 transition-all h-full">
                    <div className="p-3 w-fit rounded-xl bg-blue-50/60 text-primary border border-blue-100/40 mb-4 shadow-sm">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h4 className="font-display font-bold text-base text-dark mb-2">
                      {cap.title}
                    </h4>
                    <p className="text-xs text-slate-550 leading-relaxed">
                      {cap.desc}
                    </p>
                  </div>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>
      </section>

      {/* 4. How We Work (Startup/Founder Funnel) */}
      <section className="py-28 bg-slate-50/50 border-b border-slate-100 relative">
        <div className="absolute inset-0 bg-dot-grid opacity-20 -z-10" />
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-20">
            <FadeIn direction="up" delay={0.1}>
              <span className="text-xs font-bold text-primary uppercase tracking-widest bg-blue-50/60 border border-blue-100/40 px-3.5 py-1.5 rounded-full inline-block">
                Our Process
              </span>
            </FadeIn>
            <FadeIn direction="up" delay={0.2}>
              <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-dark tracking-tight leading-tight mt-4">
                How We Work
              </h2>
            </FadeIn>
            <FadeIn direction="up" delay={0.3}>
              <p className="text-slate-500 text-sm mt-3 leading-relaxed">
                Partner with Xcode Tech from your first idea to your next million users.
              </p>
            </FadeIn>
          </div>

          <StaggerContainer className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 relative">
            <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-slate-100 -z-10 hidden lg:block" />
            
            {processSteps.map((step) => (
              <StaggerItem key={step.name}>
                <div className="rounded-2xl border border-white/30 p-5 bg-white/40 backdrop-blur-md shadow-sm flex flex-col justify-between min-h-[160px] h-full relative group hover:border-primary/20 hover:shadow-md transition-all duration-300">
                  <span className="absolute top-4 right-4 text-xs font-bold text-slate-400 group-hover:text-primary/20 transition-colors">
                    {step.step}
                  </span>
                  <div>
                    <h4 className="font-display font-bold text-sm text-dark mb-2 mt-4">
                      {step.name}
                    </h4>
                    <p className="text-[10px] text-slate-500 leading-normal">
                      {step.desc}
                    </p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* 5. Selected Work */}
      <section className="py-28 bg-transparent border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-20">
            <div className="max-w-xl">
              <FadeIn direction="up" delay={0.1}>
                <span className="text-xs font-bold text-primary uppercase tracking-widest bg-blue-50/60 border border-blue-100/40 px-3.5 py-1.5 rounded-full inline-block">
                  Case Studies
                </span>
              </FadeIn>
              <FadeIn direction="up" delay={0.2}>
                <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-dark tracking-tight leading-tight mt-4">
                  Selected Work
                </h2>
              </FadeIn>
            </div>
            <FadeIn direction="up" delay={0.3} className="shrink-0">
              <Link
                href="/work"
                className="inline-flex items-center gap-1.5 bg-white/60 hover:bg-white border border-white/30 text-slate-700 font-semibold text-xs px-5 py-3.5 rounded-full transition-colors group backdrop-blur-md"
              >
                View All Work
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </Link>
            </FadeIn>
          </div>

          <StaggerContainer className="flex flex-col gap-10">
            {featuredProjects.map((project) => (
              <StaggerItem key={project.id}>
                <CaseStudyCard project={project} />
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* 6. Engagement Models */}
      <section className="py-28 bg-slate-50/50 border-b border-slate-100 relative">
        <div className="absolute inset-0 bg-dot-grid opacity-10 -z-10" />
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-20">
            <FadeIn direction="up" delay={0.1}>
              <span className="text-xs font-bold text-primary uppercase tracking-widest bg-blue-50/60 border border-blue-100/40 px-3.5 py-1.5 rounded-full inline-block">
                Partnership
              </span>
            </FadeIn>
            <FadeIn direction="up" delay={0.2}>
              <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-dark tracking-tight leading-tight mt-4">
                Engagement Models
              </h2>
            </FadeIn>
            <FadeIn direction="up" delay={0.3}>
              <p className="text-slate-500 text-sm mt-3 leading-relaxed">
                We offer flexible collaboration models designed to integrate with your operational requirements.
              </p>
            </FadeIn>
          </div>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {engagementModels.map((model) => (
              <StaggerItem key={model.title}>
                <div className="rounded-2xl border border-white/30 p-8 bg-white/40 backdrop-blur-md shadow-sm hover:shadow-md hover:border-primary/10 transition-all h-full flex flex-col justify-between">
                  <div>
                    <h3 className="font-display font-extrabold text-lg text-dark">
                      {model.title}
                    </h3>
                    <span className="text-[10px] text-primary font-bold uppercase tracking-wider block mt-1.5">
                      {model.tagline}
                    </span>
                    <p className="text-xs text-slate-500 leading-relaxed mt-4">
                      {model.desc}
                    </p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* 7. Engineering Across Industries */}
      <section className="py-28 bg-transparent border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-20">
            <FadeIn direction="up" delay={0.1}>
              <span className="text-xs font-bold text-primary uppercase tracking-widest bg-blue-50/60 border border-blue-100/40 px-3.5 py-1.5 rounded-full inline-block">
                Sectors
              </span>
            </FadeIn>
            <FadeIn direction="up" delay={0.2}>
              <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-dark tracking-tight leading-tight mt-4">
                Engineering Across Industries
              </h2>
            </FadeIn>
          </div>

          <StaggerContainer className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {industries.map((ind) => {
              const Icon = ind.icon;
              return (
                <StaggerItem key={ind.name}>
                  <div className="rounded-2xl border border-white/30 p-5 bg-white/40 backdrop-blur-md shadow-sm hover:shadow-md hover:border-primary/15 transition-all text-center flex flex-col items-center justify-center min-h-[140px] h-full group">
                    <div className="p-3 rounded-xl bg-blue-50/50 text-primary border border-blue-100/30 mb-3 group-hover:scale-105 transition-transform">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h4 className="font-display font-bold text-xs text-dark leading-tight">
                      {ind.name}
                    </h4>
                    <p className="text-[9px] text-slate-400 mt-1 leading-tight max-w-[120px] mx-auto">
                      {ind.desc}
                    </p>
                  </div>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>
      </section>

      {/* 8. Technology Decisions Made for Scale */}
      <section className="py-28 bg-slate-50/50 relative border-b border-slate-100">
        <div className="absolute inset-0 bg-dot-grid opacity-30 -z-10" />
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-5 flex flex-col gap-6">
            <FadeIn direction="up" delay={0.1}>
              <span className="text-xs font-bold text-primary uppercase tracking-widest bg-blue-50/60 border border-blue-100/40 px-3.5 py-1.5 rounded-full inline-block">
                Our Rationale
              </span>
            </FadeIn>
            <FadeIn direction="up" delay={0.2}>
              <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-dark tracking-tight leading-tight">
                Technology Decisions <br />
                <span className="bg-gradient-to-r from-primary to-sky-custom bg-clip-text text-transparent">
                  Made for Scale
                </span>
              </h2>
            </FadeIn>
            <FadeIn direction="up" delay={0.3}>
              <div className="flex flex-col gap-4 mt-2">
                {techDecisions.map((item) => (
                  <div key={item.tech} className="flex gap-3.5 items-start border-l-2 border-primary/20 pl-4 py-1">
                    <div>
                      <h4 className="text-xs font-bold text-slate-800 flex items-center gap-1.5">
                        {item.tech}
                        <span className="text-[9px] text-primary bg-blue-50 border border-blue-100/50 px-2 py-0.5 rounded-full font-semibold">
                          {item.outcome}
                        </span>
                      </h4>
                      <p className="text-[11px] text-slate-550 mt-1.5 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>

          <div className="lg:col-span-7 flex justify-center items-center">
            <FadeIn direction="none" delay={0.2} duration={1.2}>
              <TechnologyOrbit />
            </FadeIn>
          </div>

        </div>
      </section>

      {/* 9. Engineering Standards */}
      <section className="py-28 bg-transparent border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-20">
            <FadeIn direction="up" delay={0.1}>
              <span className="text-xs font-bold text-primary uppercase tracking-widest bg-blue-50/60 border border-blue-100/40 px-3.5 py-1.5 rounded-full inline-block">
                Quality Gates
              </span>
            </FadeIn>
            <FadeIn direction="up" delay={0.2}>
              <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-dark tracking-tight leading-tight mt-4">
                Our Engineering Standards
              </h2>
            </FadeIn>
          </div>

          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {engineeringStandards.map((std) => (
              <StaggerItem key={std.title}>
                <div className="rounded-2xl border border-white/30 p-6 bg-white/40 backdrop-blur-md shadow-sm hover:shadow-md hover:border-primary/10 transition-all h-full flex flex-col justify-between">
                  <div className="flex flex-col gap-3">
                    <span className="p-1.5 w-fit rounded-lg bg-green-50 text-green-500 border border-green-100">
                      <Check className="w-4 h-4" />
                    </span>
                    <h4 className="font-display font-bold text-xs text-dark mt-2 leading-tight">
                      {std.title}
                    </h4>
                    <p className="text-[10px] text-slate-500 leading-normal">
                      {std.desc}
                    </p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* 10. Why Partner With Xcode Tech */}
      <section className="py-28 bg-slate-50/50 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-20">
            <FadeIn direction="up" delay={0.1}>
              <span className="text-xs font-bold text-primary uppercase tracking-widest bg-blue-50/60 border border-blue-100/40 px-3.5 py-1.5 rounded-full inline-block">
                Company Pillars
              </span>
            </FadeIn>
            <FadeIn direction="up" delay={0.2}>
              <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-dark tracking-tight leading-tight mt-4">
                Why Partner With Us
              </h2>
            </FadeIn>
          </div>

          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {trustPillars.map((val) => {
              const Icon = val.icon;
              return (
                <StaggerItem key={val.title}>
                  <div className="rounded-2xl border border-white/30 p-6 bg-white/40 backdrop-blur-md shadow-sm hover:shadow-md transition-all h-full">
                    <div className="p-3 w-fit rounded-xl bg-blue-50/60 text-primary border border-blue-100/40 mb-4 shadow-sm">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h4 className="font-display font-bold text-base text-dark mb-2">
                      {val.title}
                    </h4>
                    <p className="text-xs text-slate-650 leading-relaxed">
                      {val.desc}
                    </p>
                  </div>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>
      </section>

      {/* 11. Founder Vision Section */}
      <section className="py-28 bg-transparent border-b border-slate-100">
        <div className="max-w-4xl mx-auto px-6 text-center flex flex-col items-center">
          <FadeIn direction="up" delay={0.1}>
            <span className="text-xs font-bold text-primary uppercase tracking-widest bg-blue-50/60 border border-blue-100/40 px-3.5 py-1.5 rounded-full inline-block mb-4">
              Company Founder
            </span>
          </FadeIn>
          
          <FadeIn direction="up" delay={0.2} className="flex items-center gap-3.5 mb-6 bg-white/40 border border-white/30 backdrop-blur-md p-4 rounded-2xl">
            <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-primary to-sky-custom flex items-center justify-center text-white font-display font-extrabold text-sm shadow-md">
              DP
            </div>
            <div className="flex flex-col text-left">
              <span className="font-display font-extrabold text-sm text-dark leading-none">Deep Patel</span>
              <span className="text-[10px] text-slate-500 font-bold uppercase tracking-wider mt-1">Founder &amp; Technology Lead</span>
            </div>
          </FadeIn>

          <FadeIn direction="up" delay={0.3}>
            <h3 className="font-display font-bold text-xl sm:text-2xl text-dark mb-4 max-w-xl leading-snug">
              "My vision with Xcode Tech is to build an engineering company where businesses transform complex ideas into reliable, scalable technology."
            </h3>
            <p className="text-xs text-slate-500 leading-relaxed max-w-md mx-auto">
              We stand as your long-term technology partner, assisting startups and companies worldwide in designing, engineering, and launching secure systems.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* 12. Start Building CTA Form */}
      <section id="contact" className="py-28 bg-slate-50/50 relative">
        <div className="absolute inset-0 bg-dot-grid opacity-40 -z-10" />
        
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-xl mb-16">
            <FadeIn direction="up" delay={0.1}>
              <span className="text-xs font-bold text-primary uppercase tracking-widest bg-blue-50/60 border border-blue-100/40 px-3.5 py-1.5 rounded-full inline-block mb-4">
                Consultation Request
              </span>
            </FadeIn>
            <FadeIn direction="up" delay={0.2}>
              <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-dark tracking-tight leading-none">
                Start Building Your Next Digital Product.
              </h2>
            </FadeIn>
            <FadeIn direction="up" delay={0.3}>
              <p className="text-slate-650 text-sm mt-4 leading-relaxed">
                Connect with our technology directors to outline your software objectives, select project scope levels, and design your product.
              </p>
            </FadeIn>
          </div>

          <FadeIn direction="up" delay={0.4}>
            <ContactForm />
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
