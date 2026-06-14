"use client";

import React from "react";
import Link from "next/link";
import { 
  ArrowRight, Cpu, Sparkles, Compass, Rocket, Server, Code, Zap, Handshake, 
  MessageSquare, ShieldCheck, Check, Terminal, Eye
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
      title: "🚀 Scale Your Venture",
      subtitle: "Product engineering & SaaS",
      desc: "We design and build custom software products, apps, and platforms optimized for market entry and user scale.",
      items: ["MVP Development", "SaaS Platforms", "Mobile Apps", "Product Scaling"],
      icon: Rocket,
      color: "from-blue-600 to-sky-custom"
    },
    {
      title: "🏢 Automate Operations",
      subtitle: "Workflows & custom tools",
      desc: "Streamlining processes, launching e-commerce platforms, and engineering internal tools that accelerate efficiency.",
      items: ["Business Websites", "Ecommerce Platforms", "Internal Software", "Automation"],
      icon: Compass,
      color: "from-indigo-600 to-blue-500"
    },
    {
      title: "🤖 Integrate AI",
      subtitle: "Cognitive automation",
      desc: "Integrating machine learning pipelines and custom AI models to automate manual triaging, indexing, and analysis.",
      items: ["AI Integration", "Smart Workflows", "Data Solutions"],
      icon: Sparkles,
      color: "from-blue-500 to-sky-500"
    },
    {
      title: "☁️ Scale Your Platform",
      subtitle: "Cloud engineering & infrastructure",
      desc: "Architecting secure, high-availability server patterns and cloud setups that scale dynamically under traffic loads.",
      items: ["Cloud Deployment", "Performance Engineering", "Secure Architecture"],
      icon: Server,
      color: "from-sky-500 to-indigo-600"
    }
  ];

  const challenges = [
    {
      title: "Manual Operations",
      solution: "Automation Platforms",
      desc: "Replacing repetitive manual spreadsheets and admin triaging with fast automated backends.",
      icon: Terminal
    },
    {
      title: "Scaling Problems",
      solution: "Cloud Systems",
      desc: "Upgrading databases and cloud routing to prevent timeouts and peak capacity shutdowns.",
      icon: Server
    },
    {
      title: "Customer Experience",
      solution: "Digital Products",
      desc: "Designing responsive, intuitive UI/UX flows that boost retention and sales conversions.",
      icon: Eye
    },
    {
      title: "Data Complexity",
      solution: "Intelligent Systems",
      desc: "Integrating secure ML triages and search indexes to catalog messy multi-source datasets.",
      icon: Cpu
    }
  ];

  const engagementModels = [
    {
      title: "Build",
      tagline: "End-to-end development",
      desc: "We own the complete process: technical discovery, UI/UX design, custom database architectures, and release support."
    },
    {
      title: "Extend",
      tagline: "Dedicated engineering",
      desc: "Direct integration of systems developers with your team to accelerate feature roadmap deployments and scaling cycles."
    },
    {
      title: "Modernize",
      tagline: "Upgrade legacy systems",
      desc: "Refactoring obsolete codebases, migration to modern React frameworks, and upgrading legacy database schemes."
    },
    {
      title: "Optimize",
      tagline: "Speed & Cost Engineering",
      desc: "Sub-second load tuning, optimizing cloud server architecture costs, and eliminating slow SQL query latency loops."
    },
    {
      title: "Advise",
      tagline: "Strategy & architecture",
      desc: "System audits, technology selections, cloud scaling blueprints, and custom software strategy roadmaps."
    }
  ];

  const philosophy = [
    {
      title: "Think Like Owners",
      desc: "We don't just deliver coding tasks. We seek to understand the operational context and focus on business outcomes."
    },
    {
      title: "Design Before Development",
      desc: "Every database model and API schema is architected and stress-tested before writing a single line of code."
    },
    {
      title: "Simple Systems Scale Better",
      desc: "We prioritize clean, maintainable, and decoupled codebases over unnecessary architectural complexity."
    },
    {
      title: "Technology With Purpose",
      desc: "We choose technology stacks and system libraries based on actual product impact and stability, not trendy news."
    }
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

  const standards = [
    { title: "Architecture Reviews", desc: "Dual-developer peer review gates ensuring clean patterns." },
    { title: "Performance Optimization", desc: "Sub-200ms database response loops and compressed code bundles." },
    { title: "Secure Development", desc: "Integrated role authorization boundaries and encrypted token databases." },
    { title: "Documentation", desc: "Complete Swagger/Postman API maps and developer set-up manuals." },
    { title: "Maintainable Code", desc: "Decoupled logic modules allowing easy future feature upgrades." }
  ];

  return (
    <div className="flex flex-col w-full bg-white">
      {/* 1. Hero Landing */}
      <Hero />

      {/* 2. Trust Banner */}
      <section className="py-8 bg-slate-50 border-b border-slate-100 relative">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
            Built for companies that need:
          </span>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 text-xs font-bold text-slate-700 uppercase tracking-wider">
            <span className="flex items-center gap-2">
              <span className="text-primary font-extrabold text-sm">✓</span> Reliable Systems
            </span>
            <span className="flex items-center gap-2">
              <span className="text-primary font-extrabold text-sm">✓</span> Modern Engineering
            </span>
            <span className="flex items-center gap-2">
              <span className="text-primary font-extrabold text-sm">✓</span> Long-term Technology Partner
            </span>
          </div>
        </div>
      </section>

      {/* 3. Choose Your Journey */}
      <section className="py-16 md:py-20 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-xl mx-auto mb-12">
            <FadeIn direction="up" delay={0.1}>
              <span className="text-xs font-bold text-primary uppercase tracking-widest bg-blue-50/60 border border-blue-100/40 px-3.5 py-1.5 rounded-full inline-block">
                Choose Your Journey
              </span>
            </FadeIn>
            <FadeIn direction="up" delay={0.2}>
              <h2 className="font-display font-extrabold text-3xl text-dark tracking-tight leading-tight mt-4">
                What Are You Building?
              </h2>
            </FadeIn>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "🚀 Launch a Product", desc: "Turn concepts into market-ready platforms.", action: "Build SaaS & Apps" },
              { title: "🏢 Transform a Business", desc: "Modernize operations with digital systems.", action: "Automate Workflows" },
              { title: "🤖 Automate With AI", desc: "Reduce repetitive work through intelligence.", action: "Deploy AI Agents" },
              { title: "🌎 Scale Technology", desc: "Build reliable systems for growth.", action: "Tune Cloud & Speed" }
            ].map((journey) => (
              <Link
                key={journey.title}
                href="#contact"
                className="rounded-2xl border border-slate-200/50 p-6 bg-slate-50/20 hover:bg-white hover:border-primary/20 hover:shadow-xl transition-all duration-350 flex flex-col justify-between group min-h-[160px]"
              >
                <div>
                  <h3 className="font-display font-extrabold text-base text-dark group-hover:text-primary transition-colors">
                    {journey.title}
                  </h3>
                  <p className="text-xs text-slate-500 mt-2.5 leading-relaxed">
                    {journey.desc}
                  </p>
                </div>
                <span className="text-[10px] font-bold text-primary uppercase tracking-wider mt-4 flex items-center gap-1 group-hover:translate-x-0.5 transition-transform">
                  {journey.action} &rarr;
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Solutions We Engineer */}
      <section className="py-20 md:py-28 bg-slate-50/50 border-b border-slate-100 relative">
        <div className="absolute inset-0 bg-dot-grid opacity-30 -z-10" />
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16 md:mb-20">
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
              <p className="text-slate-500 text-sm mt-3 leading-relaxed">
                We design, build, and scale software systems structured around your exact business challenges.
              </p>
            </FadeIn>
          </div>

          {/* Mobile View: Horizontal App-style Cards */}
          <div className="flex flex-col gap-4 md:hidden">
            {solutions.map((sol) => {
              const Icon = sol.icon;
              return (
                <Link href="/solutions" key={sol.title} className="rounded-xl border border-slate-200/40 p-4 bg-white/50 backdrop-blur-md flex items-center justify-between hover:bg-white transition-all shadow-sm min-h-[48px]">
                  <div className="flex items-center gap-4">
                    <div className={`p-2.5 rounded-xl bg-gradient-to-tr ${sol.color} text-white shrink-0`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <div className="text-left">
                      <h3 className="font-display font-bold text-sm text-dark leading-tight">
                        {sol.title}
                      </h3>
                      <span className="text-[10px] text-slate-450 block mt-0.5 leading-none font-semibold">
                        {sol.subtitle}
                      </span>
                    </div>
                  </div>
                  <ArrowRight className="w-4 h-4 text-slate-450" />
                </Link>
              );
            })}
          </div>

          {/* Desktop View: Grid Layout */}
          <StaggerContainer className="hidden md:grid grid-cols-2 lg:grid-cols-4 gap-8">
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
                        <p className="text-xs text-slate-505 leading-relaxed mt-2.5">
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

      {/* 5. Business Challenges We Solve */}
      <section className="py-20 md:py-28 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16 md:mb-20">
            <FadeIn direction="up" delay={0.1}>
              <span className="text-xs font-bold text-primary uppercase tracking-widest bg-blue-50/60 border border-blue-100/40 px-3.5 py-1.5 rounded-full inline-block">
                Problem Solved
              </span>
            </FadeIn>
            <FadeIn direction="up" delay={0.2}>
              <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-dark tracking-tight leading-tight mt-4">
                Business Challenges We Solve
              </h2>
            </FadeIn>
            <FadeIn direction="up" delay={0.3}>
              <p className="text-slate-500 text-sm mt-3 leading-relaxed">
                Elite engineering centers solve core business pain points. Here is how we engineer solutions to your problems.
              </p>
            </FadeIn>
          </div>

          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {challenges.map((item) => {
              const Icon = item.icon;
              return (
                <StaggerItem key={item.title}>
                  <div className="rounded-2xl border border-slate-200/45 p-6 bg-slate-50/30 hover:bg-white hover:shadow-lg hover:border-primary/10 transition-all duration-300 h-full flex flex-col justify-between">
                    <div>
                      <div className="p-2.5 w-fit rounded-xl bg-blue-50/60 text-primary border border-blue-100/30 mb-4">
                        <Icon className="w-4 h-4" />
                      </div>
                      <span className="text-[9px] font-bold text-primary uppercase tracking-widest block mb-1">
                        Pain Point
                      </span>
                      <h4 className="font-display font-extrabold text-base text-dark mb-1">
                        {item.title}
                      </h4>
                      <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-3.5">
                        Solution: {item.solution}
                      </span>
                      <p className="text-xs text-slate-505 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>
      </section>

      {/* 6. Selected Work */}
      <section className="py-20 md:py-28 bg-transparent border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 md:mb-20">
            <div className="max-w-xl">
              <FadeIn direction="up" delay={0.1}>
                <span className="text-xs font-bold text-primary uppercase tracking-widest bg-blue-50/60 border border-blue-100/40 px-3.5 py-1.5 rounded-full inline-block">
                  Case Studies
                </span>
              </FadeIn>
              <FadeIn direction="up" delay={0.2}>
                <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-dark tracking-tight leading-tight mt-4">
                  Selected Engineering Work
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

      {/* 7. Engagement Models */}
      <section className="py-20 md:py-28 bg-slate-50/50 border-b border-slate-100 relative">
        <div className="absolute inset-0 bg-dot-grid opacity-10 -z-10" />
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16 md:mb-20">
            <FadeIn direction="up" delay={0.1}>
              <span className="text-xs font-bold text-primary uppercase tracking-widest bg-blue-50/60 border border-blue-100/40 px-3.5 py-1.5 rounded-full inline-block">
                Partnership
              </span>
            </FadeIn>
            <FadeIn direction="up" delay={0.2}>
              <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-dark tracking-tight leading-tight mt-4">
                Work With Xcode Tech
              </h2>
            </FadeIn>
            <FadeIn direction="up" delay={0.3}>
              <p className="text-slate-500 text-sm mt-3 leading-relaxed">
                We offer flexible collaboration tracks configured around your organizational requirements.
              </p>
            </FadeIn>
          </div>

          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {engagementModels.map((model) => (
              <StaggerItem key={model.title}>
                <div className="rounded-2xl border border-white/30 p-6 bg-white/40 backdrop-blur-md shadow-sm hover:shadow-md hover:border-primary/10 transition-all h-full flex flex-col justify-between">
                  <div>
                    <h3 className="font-display font-extrabold text-base text-dark">
                      {model.title}
                    </h3>
                    <span className="text-[9px] text-primary font-bold uppercase tracking-wider block mt-1.5">
                      {model.tagline}
                    </span>
                    <p className="text-[11px] text-slate-505 leading-relaxed mt-4">
                      {model.desc}
                    </p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* 8. Our Engineering Philosophy */}
      <section className="py-20 md:py-28 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16 md:mb-20">
            <FadeIn direction="up" delay={0.1}>
              <span className="text-xs font-bold text-primary uppercase tracking-widest bg-blue-50/60 border border-blue-100/40 px-3.5 py-1.5 rounded-full inline-block">
                Our Beliefs
              </span>
            </FadeIn>
            <FadeIn direction="up" delay={0.2}>
              <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-dark tracking-tight leading-tight mt-4">
                Our Engineering Philosophy
              </h2>
            </FadeIn>
          </div>

          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {philosophy.map((item) => (
              <StaggerItem key={item.title}>
                <div className="rounded-2xl border border-slate-200/40 p-6 bg-slate-50/10 hover:bg-white hover:border-primary/10 hover:shadow-lg transition-all duration-300 h-full flex flex-col justify-between">
                  <div>
                    <h4 className="font-display font-extrabold text-base text-dark mb-3">
                      {item.title}
                    </h4>
                    <p className="text-xs text-slate-505 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* 9. Technology & Standards */}
      <section className="py-20 md:py-28 bg-slate-50/50 relative border-b border-slate-100">
        <div className="absolute inset-0 bg-dot-grid opacity-30 -z-10" />
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-5 flex flex-col gap-6">
            <FadeIn direction="up" delay={0.1}>
              <span className="text-xs font-bold text-primary uppercase tracking-widest bg-blue-50/60 border border-blue-100/40 px-3.5 py-1.5 rounded-full inline-block">
                Our Stack
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
                      <p className="text-[11px] text-slate-505 mt-1.5 leading-relaxed">{item.desc}</p>
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

        {/* Engineering Standards Checklist inside Technology & Standards */}
        <div className="max-w-7xl mx-auto px-6 mt-20 pt-16 border-t border-slate-200/50">
          <div className="text-center mb-12">
            <span className="text-xs font-bold text-primary uppercase tracking-widest bg-blue-50/60 border border-blue-100/40 px-3.5 py-1.5 rounded-full inline-block">
              Quality Gates
            </span>
            <h3 className="font-display font-extrabold text-2xl text-dark mt-3">
              Engineering Standards
            </h3>
          </div>

          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {standards.map((std) => (
              <StaggerItem key={std.title}>
                <div className="rounded-2xl border border-white/40 p-5 bg-white/40 backdrop-blur-md shadow-sm hover:shadow-md hover:border-primary/10 transition-all h-full flex flex-col justify-between">
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

      {/* 10. Beyond Development Journey */}
      <section className="py-20 md:py-28 bg-white border-b border-slate-100 relative">
        <div className="absolute inset-0 bg-dot-grid opacity-20 -z-10" />
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16 md:mb-20">
            <FadeIn direction="up" delay={0.1}>
              <span className="text-xs font-bold text-primary uppercase tracking-widest bg-blue-50/60 border border-blue-100/40 px-3.5 py-1.5 rounded-full inline-block">
                Technology Lifecycle
              </span>
            </FadeIn>
            <FadeIn direction="up" delay={0.2}>
              <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-dark tracking-tight leading-tight mt-4">
                Beyond Development
              </h2>
            </FadeIn>
            <FadeIn direction="up" delay={0.3}>
              <p className="text-slate-500 text-sm mt-3 leading-relaxed">
                We partner through the entire technology journey, ensuring continuity and growth.
              </p>
            </FadeIn>
          </div>

          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-5 gap-6 relative">
            {[
              { step: "01", name: "Strategy", desc: "Discovering outcomes, defining database scopes, and system mapping." },
              { step: "02", name: "Experience Design", desc: "High-fidelity clickable interface layouts and journey mappings." },
              { step: "03", name: "Engineering", desc: "Backend API coding, server scripting, and database architecture." },
              { step: "04", name: "Launch", desc: "Deployment orchestration, multi-environment setups, and validation testing." },
              { step: "05", name: "Evolution", desc: "Auto-scaling configuration, continuous code reviews, and roadmap updates." }
            ].map((step) => (
              <StaggerItem key={step.name}>
                <div className="rounded-2xl border border-slate-200/30 p-5 bg-slate-50/30 shadow-sm flex flex-col justify-between min-h-[160px] h-full relative group hover:border-primary/20 hover:shadow-md transition-all duration-300">
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

      {/* 11. Built With A Long-Term Vision */}
      <section className="py-20 md:py-28 bg-slate-50/20 border-b border-slate-100">
        <div className="max-w-4xl mx-auto px-6 flex flex-col items-center">
          <FadeIn direction="up" delay={0.1}>
            <span className="text-xs font-bold text-primary uppercase tracking-widest bg-blue-50/60 border border-blue-100/40 px-3.5 py-1.5 rounded-full inline-block mb-8">
              Company Vision
            </span>
          </FadeIn>
          
          <FadeIn direction="up" delay={0.2} className="w-full">
            <div className="flex flex-col md:flex-row items-center gap-8 bg-white border border-slate-200/50 p-6 md:p-8 rounded-3xl shadow-xl shadow-slate-100 max-w-3xl mx-auto">
              <div className="w-24 h-24 rounded-2xl overflow-hidden border border-slate-100 shadow-md shrink-0">
                <img
                  src="/founder-portrait.png"
                  alt="Deep Patel, Founder"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex flex-col text-center md:text-left">
                <p className="font-display font-bold text-base md:text-lg text-dark italic leading-relaxed">
                  "Xcode Tech was created with a simple belief: great software is not just written — it is engineered with purpose, clarity, and responsibility."
                </p>
                <div className="mt-4 flex flex-col">
                  <span className="font-display font-extrabold text-sm text-dark">Deep Patel</span>
                  <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider mt-0.5">Founder &amp; Technology Lead</span>
                </div>
              </div>
            </div>
          </FadeIn>
          
          <FadeIn direction="up" delay={0.3}>
            <p className="text-[11px] text-slate-400 mt-8 text-center max-w-sm">
              Remote-first engineering partner working with businesses beyond borders.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* 12. Start Partnership CTA */}
      <section id="contact" className="py-20 md:py-28 bg-slate-50/50 relative">
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
                Start Partnership
              </h2>
            </FadeIn>
            <FadeIn direction="up" delay={0.3}>
              <p className="text-slate-655 text-sm mt-4 leading-relaxed">
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
