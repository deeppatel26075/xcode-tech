"use client";

import React from "react";
import Link from "next/link";
import { 
  ArrowRight, Cpu, Sparkles, HeartHandshake, Eye, Compass, 
  Building, ShoppingCart, Rocket, ClipboardList, Database, Server,
  Activity, GraduationCap, Factory, Home as HomeIcon, Coins, Truck,
  Code, Users, Handshake, MessageSquare, Target, Zap, ShieldCheck
} from "lucide-react";
import Hero from "../../components/Hero";
import TechnologyOrbit from "../../components/TechnologyOrbit";
import CaseStudyCard from "../../components/CaseStudyCard";
import ContactForm from "../../components/ContactForm";
import { projects } from "../../content/projects";
import { FadeIn, StaggerContainer, StaggerItem } from "../../components/Animations";

export default function Home() {
  // Show all 3 restructured case studies on Home page
  const featuredProjects = projects.slice(0, 3);

  const clientJourneys = [
    {
      title: "Small Businesses",
      description: "Move your business online with modern digital solutions.",
      benefit: "Establish a premium presence, capture leads, and automate client interactions.",
      icon: Building,
      color: "text-blue-600 bg-blue-50 border-blue-100"
    },
    {
      title: "Startups",
      description: "Turn your idea into a scalable product.",
      benefit: "Develop fast prototypes, deploy MVPs, and launch SaaS platforms engineered to grow.",
      icon: Rocket,
      color: "text-indigo-600 bg-indigo-50 border-indigo-100"
    },
    {
      title: "Growing Companies",
      description: "Automate and optimize your operations.",
      benefit: "Build internal management tools, streamline databases, and secure your systems.",
      icon: Activity,
      color: "text-sky-600 bg-sky-50 border-sky-100"
    }
  ];

  const solutions = [
    {
      title: "Business Websites & Digital Presence",
      desc: "For companies wanting a premium, highly-credible online identity that loads instantly.",
      icon: Compass,
      color: "from-blue-600 to-sky-custom"
    },
    {
      title: "Ecommerce Platforms",
      desc: "Online stores with payment gateway integrations, real-time inventory, and management systems.",
      icon: ShoppingCart,
      color: "from-indigo-600 to-blue-500"
    },
    {
      title: "Startup Development",
      desc: "Rapid MVPs, SaaS platforms, and custom applications engineered to scale under high load.",
      icon: Rocket,
      color: "from-blue-500 to-sky-500"
    },
    {
      title: "Business Management Systems",
      desc: "Custom CRMs, employee dashboards, real-time inventory systems, and automated workflow tools.",
      icon: ClipboardList,
      color: "from-sky-500 to-indigo-600"
    },
    {
      title: "AI Business Automation",
      desc: "Smart tools, document parsers, and custom integrations that save hours of manual typing.",
      icon: Sparkles,
      color: "from-blue-600 to-indigo-600"
    },
    {
      title: "Enterprise Engineering",
      desc: "Cloud migrations, deployment automation, security configurations, and database orchestration.",
      icon: Server,
      color: "from-sky-600 to-blue-600"
    }
  ];

  const industries = [
    { name: "Healthcare", icon: Activity },
    { name: "Retail & Ecommerce", icon: ShoppingCart },
    { name: "Manufacturing", icon: Factory },
    { name: "Real Estate", icon: HomeIcon },
    { name: "Education", icon: GraduationCap },
    { name: "Finance", icon: Coins },
    { name: "Logistics", icon: Truck }
  ];

  const processSteps = [
    { step: "01", name: "Discovery", desc: "Consultation, system auditing, and detailing specs." },
    { step: "02", name: "UI/UX Design", desc: "Interactive wireframes and clean design system." },
    { step: "03", name: "Development", desc: "Clean coding, database modeling, API wiring." },
    { step: "04", name: "Testing", desc: "Vulnerability audits, performance logs, and validation." },
    { step: "05", name: "Launch", desc: "Cloud deployment, search indexing, and configuration." },
    { step: "06", name: "Support", desc: "Ongoing monitoring and scaling optimization." }
  ];

  const valuePillars = [
    {
      title: "Engineering Mindset",
      desc: "We focus on clean, scalable code architectures and robust database design rather than just quick UI fixes.",
      icon: Code
    },
    {
      title: "Modern Technology",
      desc: "We use lightweight serverless edge configurations, microservices, and AI integrations to keep you ahead.",
      icon: Zap
    },
    {
      title: "Long-Term Partnership",
      desc: "We don't just deliver files and leave. We maintain, audit, and scale your technology as your business expands.",
      icon: Handshake
    },
    {
      title: "Fast Communication",
      desc: "Direct contact with technical leads. No account-manager buffers or communication delays.",
      icon: MessageSquare
    }
  ];

  return (
    <div className="flex flex-col w-full bg-white">
      {/* 1. Hero Landing */}
      <Hero />

      {/* 2. Who We Help (Client Journey Section) */}
      <section className="py-24 bg-slate-50/50 border-b border-slate-100 relative">
        <div className="absolute inset-0 bg-dot-grid opacity-40 -z-10" />
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <FadeIn direction="up" delay={0.1}>
              <span className="text-xs font-bold text-primary uppercase tracking-widest bg-blue-50/60 border border-blue-100/40 px-3.5 py-1.5 rounded-full inline-block">
                Client Journeys
              </span>
            </FadeIn>
            <FadeIn direction="up" delay={0.2}>
              <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-dark tracking-tight leading-tight mt-4">
                Tailored Solutions for Your Context
              </h2>
            </FadeIn>
            <FadeIn direction="up" delay={0.3}>
              <p className="text-slate-550 text-sm mt-3 leading-relaxed">
                Whether you need to establish online credibility, prototype a venture, or automate business systems, we build what you need.
              </p>
            </FadeIn>
          </div>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {clientJourneys.map((journey) => {
              const Icon = journey.icon;
              return (
                <StaggerItem key={journey.title}>
                  <div className="rounded-2xl border border-white/30 p-8 hover:border-primary/20 hover:shadow-xl transition-all duration-300 h-full bg-white/40 backdrop-blur-md flex flex-col justify-between group">
                    <div>
                      <div className={`p-3 w-fit rounded-xl border ${journey.color} mb-6 group-hover:scale-105 transition-transform`}>
                        <Icon className="w-6 h-6" />
                      </div>
                      <h3 className="font-display font-bold text-lg text-dark mb-2">
                        {journey.title}
                      </h3>
                      <p className="text-sm font-semibold text-slate-700 mb-3 leading-snug">
                        {journey.description}
                      </p>
                      <p className="text-xs text-slate-500 leading-relaxed">
                        {journey.benefit}
                      </p>
                    </div>
                  </div>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>
      </section>

      {/* 3. Solutions Portfolio (Problem Solver) */}
      <section className="py-24 bg-transparent border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <FadeIn direction="up" delay={0.1}>
              <span className="text-xs font-bold text-primary uppercase tracking-widest bg-blue-50/60 border border-blue-100/40 px-3.5 py-1.5 rounded-full inline-block">
                Solutions Portfolio
              </span>
            </FadeIn>
            <FadeIn direction="up" delay={0.2}>
              <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-dark tracking-tight leading-tight mt-4">
                We Engineer Technologies That Help Businesses Grow
              </h2>
            </FadeIn>
          </div>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solutions.map((sol) => {
              const Icon = sol.icon;
              return (
                <StaggerItem key={sol.title}>
                  <div className="rounded-2xl border border-white/30 p-6 bg-white/40 backdrop-blur-md hover:bg-white hover:border-primary/20 hover:shadow-lg transition-all duration-300 h-full flex flex-col gap-4">
                    <div className={`p-3.5 rounded-xl bg-gradient-to-tr ${sol.color} text-white w-fit shadow-md shadow-blue-500/5`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-display font-bold text-base text-dark mb-2">
                        {sol.title}
                      </h3>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        {sol.desc}
                      </p>
                    </div>
                  </div>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>
      </section>

      {/* 4. Industries We Serve */}
      <section className="py-20 bg-slate-50/50 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-xl mx-auto mb-12">
            <FadeIn direction="up" delay={0.1}>
              <span className="text-xs font-bold text-primary uppercase tracking-widest bg-blue-50/60 border border-blue-100/40 px-3.5 py-1.5 rounded-full inline-block">
                Target Sectors
              </span>
            </FadeIn>
            <FadeIn direction="up" delay={0.2}>
              <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-dark tracking-tight leading-tight mt-4">
                Industries We Serve
              </h2>
            </FadeIn>
          </div>

          <StaggerContainer className="flex flex-wrap justify-center gap-4">
            {industries.map((ind) => {
              const Icon = ind.icon;
              return (
                <StaggerItem key={ind.name}>
                  <div className="flex items-center gap-2 px-6 py-3.5 rounded-full border border-white/30 bg-white/40 backdrop-blur-md hover:border-primary/20 hover:shadow-md transition-all select-none">
                    <Icon className="w-4 h-4 text-primary" />
                    <span className="text-xs font-bold text-slate-700">{ind.name}</span>
                  </div>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>
      </section>

      {/* 5. Featured Work/Case Studies */}
      <section className="py-24 bg-transparent border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <div className="max-w-xl">
              <FadeIn direction="up" delay={0.1}>
                <span className="text-xs font-bold text-primary uppercase tracking-widest bg-blue-50/60 border border-blue-100/40 px-3.5 py-1.5 rounded-full inline-block">
                  Case Studies
                </span>
              </FadeIn>
              <FadeIn direction="up" delay={0.2}>
                <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-dark tracking-tight leading-tight mt-4">
                  Engineering Excellence in Action
                </h2>
              </FadeIn>
            </div>
            <FadeIn direction="up" delay={0.3} className="shrink-0">
              <Link
                href="/work"
                className="inline-flex items-center gap-1.5 bg-white/60 hover:bg-white border border-white/30 text-slate-700 font-semibold text-xs px-5 py-3.5 rounded-full transition-colors group backdrop-blur-md"
              >
                View All Case Studies
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

      {/* 6. Technologies (Orbit & Benefits) */}
      <section className="py-24 bg-slate-50/50 relative border-b border-slate-100">
        <div className="absolute inset-0 bg-dot-grid opacity-30 -z-10" />
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-5 flex flex-col gap-6">
            <FadeIn direction="up" delay={0.1}>
              <span className="text-xs font-bold text-primary uppercase tracking-widest bg-blue-50/60 border border-blue-100/40 px-3.5 py-1.5 rounded-full inline-block">
                Our Stack
              </span>
            </FadeIn>
            <FadeIn direction="up" delay={0.2}>
              <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-dark tracking-tight leading-none">
                Modern Tools. <br />
                <span className="bg-gradient-to-r from-primary to-sky-custom bg-clip-text text-transparent">
                  Business Value.
                </span>
              </h2>
            </FadeIn>
            <FadeIn direction="up" delay={0.3}>
              <p className="text-slate-600 text-sm leading-relaxed">
                We align our technology selections with actual business benefits rather than developer hobbies.
              </p>
              <div className="flex flex-col gap-4 mt-2">
                {[
                  { title: "React & Next.js", desc: "Ultra-fast page loads for high search engine visibility and user conversion." },
                  { title: "Node.js & Python backends", desc: "Robust data architectures capable of processing complex calculations." },
                  { title: "AWS & Cloud Infrastructure", desc: "Automated scaling models designed to ensure reliability under heavy traffic." }
                ].map((item) => (
                  <div key={item.title} className="flex gap-3 items-start border-l-2 border-primary/20 pl-4 py-1">
                    <div>
                      <h4 className="text-xs font-bold text-slate-800">{item.title}</h4>
                      <p className="text-[11px] text-slate-500 mt-0.5 leading-snug">{item.desc}</p>
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

      {/* 7. From Idea to Scale (Product Lifecycle workflow) */}
      <section className="py-24 bg-transparent border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <FadeIn direction="up" delay={0.1}>
              <span className="text-xs font-bold text-primary uppercase tracking-widest bg-blue-50/60 border border-blue-100/40 px-3.5 py-1.5 rounded-full inline-block">
                Development Process
              </span>
            </FadeIn>
            <FadeIn direction="up" delay={0.2}>
              <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-dark tracking-tight leading-tight mt-4">
                From Idea to Scale
              </h2>
            </FadeIn>
            <FadeIn direction="up" delay={0.3}>
              <p className="text-slate-600 text-sm mt-3 leading-relaxed">
                Our systematic execution framework takes you from raw concept to a reliable product that grows with your team.
              </p>
            </FadeIn>
          </div>

          <StaggerContainer className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 relative">
            {/* Connecting line */}
            <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-slate-100 -z-10 hidden lg:block" />
            
            {processSteps.map((step, index) => (
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

      {/* 8. Why Clients Choose Xcode Tech */}
      <section className="py-24 bg-slate-50/50 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <FadeIn direction="up" delay={0.1}>
              <span className="text-xs font-bold text-primary uppercase tracking-widest bg-blue-50/60 border border-blue-100/40 px-3.5 py-1.5 rounded-full inline-block">
                Company Pillars
              </span>
            </FadeIn>
            <FadeIn direction="up" delay={0.2}>
              <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-dark tracking-tight leading-tight mt-4">
                Why Clients Partner With Us
              </h2>
            </FadeIn>
          </div>

          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {valuePillars.map((val) => {
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
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {val.desc}
                    </p>
                  </div>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>
      </section>

      {/* 9. About Founder Section */}
      <section className="py-24 bg-transparent border-b border-slate-100">
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
              "Xcode Tech is a software company focused on creating reliable digital products using modern engineering, AI, and cloud technologies."
            </h3>
            <p className="text-xs text-slate-500 leading-relaxed max-w-md mx-auto">
              We stand as your long-term technology partner, assisting local businesses and international startup teams in building secure, high-performance platforms.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* 10. Consultation CTA Form */}
      <section id="contact" className="py-24 bg-slate-50/50 relative">
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
                Let's Build Your Solution.
              </h2>
            </FadeIn>
            <FadeIn direction="up" delay={0.3}>
              <p className="text-slate-600 text-sm mt-4 leading-relaxed">
                Connect with our technology directors to outline your software objectives, scope out budget ranges, and plan your product launch.
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
