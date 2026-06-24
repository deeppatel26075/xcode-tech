"use client";

import React, { use } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Laptop, Layout, Smartphone, Cpu, Cloud, Palette, Shield, ArrowLeft, Check, Zap, ArrowRight } from "lucide-react";
import SubpageContainer from "../../../components/SubpageContainer";
import { servicesData, ServiceDetail } from "../../../content/services";
import { FadeIn, StaggerContainer, StaggerItem } from "../../../components/Animations";

const iconMap = {
  Laptop,
  Layout,
  Smartphone,
  Cpu,
  Cloud,
  Palette,
  Shield
};

// Map service slug to contact option value
const serviceContactMap: Record<string, string> = {
  "custom-software-development": "scale_software",
  "web-application-development": "launch_product",
  "mobile-app-development": "launch_product",
  "ai-automation": "automate_operations",
  "cloud-devops": "scale_software",
  "ui-ux-engineering": "modernize_business",
  "cybersecurity-solutions": "modernize_business"
};

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default function ServiceDetailPage({ params }: PageProps) {
  const { slug } = use(params);
  
  const service = servicesData.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  const IconComponent = iconMap[service.iconName];
  const mappedContactOption = serviceContactMap[service.slug] || "";

  return (
    <SubpageContainer>
      {/* Back button & Breadcrumbs */}
      <div className="pt-4 pb-8">
        <Link
          href="/services"
          className="inline-flex items-center gap-2 text-xs font-semibold text-slate-500 hover:text-primary transition-colors group"
        >
          <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-0.5 transition-transform" />
          Back to all services
        </Link>
      </div>

      {/* Hero Section */}
      <section className="relative pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Side: Headline & Copy */}
          <div className="lg:col-span-7 flex flex-col items-start gap-6">
            <FadeIn direction="up" delay={0.1}>
              <span className="text-[10px] font-extrabold text-primary uppercase tracking-widest bg-blue-50/60 border border-blue-100/40 px-3.5 py-1.5 rounded-full inline-block">
                Xcode Service Division
              </span>
            </FadeIn>
            
            <FadeIn direction="up" delay={0.15}>
              <h1 className="font-display font-extrabold text-4xl sm:text-5xl text-dark tracking-tight leading-[1.1]">
                {service.title}
              </h1>
            </FadeIn>

            <FadeIn direction="up" delay={0.2}>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-xl">
                {service.extendedDescription}
              </p>
            </FadeIn>

            <FadeIn direction="up" delay={0.25} className="w-full">
              <h3 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-4">Core Capabilities</h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {service.items.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-xs font-semibold text-slate-700">
                    <span className="p-0.5 rounded-full bg-blue-50 border border-blue-100 text-primary shrink-0 mt-0.5">
                      <Check className="w-3 h-3" />
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </FadeIn>
          </div>

          {/* Right Side: Interactive Mockup Panel */}
          <div className="lg:col-span-5 w-full">
            <FadeIn direction="up" delay={0.3} className="h-full">
              <div className="rounded-3xl bg-white/40 border border-white/30 backdrop-blur-md p-8 shadow-xl relative overflow-hidden flex flex-col gap-6 select-none h-full">
                {/* Accent glow lights */}
                <div className="absolute -top-12 -right-12 w-48 h-48 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
                <div className="absolute -bottom-12 -left-12 w-48 h-48 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

                <div className="flex justify-between items-center border-b border-white/40 pb-4 text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                  <span className="flex items-center gap-2">
                    <IconComponent className="w-4 h-4 text-primary" />
                    {service.slug.toUpperCase()} / STACK
                  </span>
                  <span className="text-green-500 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" /> Running
                  </span>
                </div>

                <div className="space-y-4 font-mono text-[11px] text-slate-600">
                  <div className="bg-slate-950/5 border border-slate-900/5 p-4 rounded-xl space-y-2">
                    <p className="flex items-center gap-2"><span className="text-primary font-bold">&gt;</span> npx xcode-engine init</p>
                    <p className="text-slate-400 font-semibold pl-4">Engine setup completed successfully.</p>
                    <p className="flex items-center gap-2"><span className="text-primary font-bold">&gt;</span> loading technologies...</p>
                    <div className="pl-4 flex flex-wrap gap-1.5">
                      {service.techStack.map((tech) => (
                        <span key={tech} className="bg-white border border-slate-200/50 text-slate-700 text-[9px] px-2 py-0.5 rounded-md font-sans font-bold">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-3 pt-4 border-t border-white/40 text-xs font-semibold text-slate-500">
                  <Zap className="w-4 h-4 text-primary shrink-0 animate-bounce" />
                  <span>Configured with zero performance bottlenecks.</span>
                </div>
              </div>
            </FadeIn>
          </div>

        </div>
      </section>

      {/* Metrics Section */}
      <section className="py-16 border-t border-white/20">
        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {service.metrics.map((metric, idx) => (
            <StaggerItem key={metric.label}>
              <div className="rounded-2xl border border-white/30 bg-white/70 backdrop-blur-md p-6 sm:p-8 hover:shadow-lg transition-all text-center">
                <div className="text-3xl sm:text-4xl font-display font-extrabold bg-gradient-to-tr from-primary to-sky-custom bg-clip-text text-transparent mb-2">
                  {metric.value}
                </div>
                <div className="text-xs font-bold text-slate-500 uppercase tracking-widest">
                  {metric.label}
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </section>

      {/* Delivery Process Timeline */}
      <section className="py-16 border-t border-white/20">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-[10px] font-extrabold text-primary uppercase tracking-widest bg-blue-50/60 border border-blue-100/40 px-3.5 py-1.5 rounded-full inline-block mb-4">
            How We Deliver
          </span>
          <h2 className="font-display font-extrabold text-3xl text-dark">
            Our Dynamic Engineering Workflow
          </h2>
          <p className="text-slate-500 text-sm mt-4 leading-relaxed">
            We follow a modern, iterative delivery playbook designed to minimize communication lag, secure systems early, and deploy high-performance codebases.
          </p>
        </div>

        <div className="w-full">
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {service.process.map((step, idx) => (
              <StaggerItem key={step.title}>
                <div className="rounded-2xl border border-white/30 bg-white/50 backdrop-blur-md p-6 shadow-sm hover:border-primary/20 hover:shadow-md transition-all h-full flex flex-col gap-4 relative overflow-hidden">
                  <div className="absolute top-4 right-4 text-4xl font-display font-black text-slate-200/50 pointer-events-none select-none">
                    0{idx + 1}
                  </div>
                  <div>
                    <span className="text-[9px] font-extrabold text-primary uppercase tracking-wider">Phase 0{idx + 1}</span>
                    <h4 className="font-display font-bold text-base text-dark mt-1 leading-none">{step.title}</h4>
                  </div>
                  <p className="text-xs text-slate-500 leading-relaxed mt-1">
                    {step.desc}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-16 border-t border-white/20">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="font-display font-extrabold text-2xl text-dark">
            Core Technology Stack
          </h2>
          <p className="text-slate-500 text-xs mt-3">
            Deploying secure, modern frameworks and systems tested for massive multi-tenant load conditions.
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center items-center gap-3 max-w-2xl mx-auto">
          {service.techStack.map((tech) => (
            <div
              key={tech}
              className="rounded-xl border border-white/45 bg-white/80 px-4.5 py-2 text-xs font-semibold text-slate-700 shadow-sm hover:border-primary/20 transition-all hover:scale-103"
            >
              {tech}
            </div>
          ))}
        </div>
      </section>

      {/* Action CTA Banner */}
      <section className="py-12 border-t border-white/20">
        <div className="rounded-3xl border border-white/30 bg-gradient-to-br from-white/60 to-white/20 backdrop-blur-md p-8 sm:p-12 shadow-2xl relative overflow-hidden text-center flex flex-col items-center gap-6">
          <div className="absolute top-0 left-0 w-32 h-32 bg-blue-500/5 rounded-full blur-2xl pointer-events-none" />
          <div className="absolute bottom-0 right-0 w-32 h-32 bg-indigo-500/5 rounded-full blur-2xl pointer-events-none" />

          <h2 className="font-display font-extrabold text-3xl text-dark leading-tight max-w-xl">
            Let's build your custom {service.title.toLowerCase()} solution
          </h2>
          
          <p className="text-slate-500 text-sm max-w-lg leading-relaxed">
            Partner with Xcode Tech to deploy enterprise-grade custom architectures, cognitive automation systems, and optimized cloud platforms.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 items-center mt-2 w-full sm:w-auto">
            <Link
              href={`/contact?service=${mappedContactOption}`}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-primary hover:bg-blue-700 text-white font-semibold text-xs px-8 py-4 rounded-full shadow-lg shadow-blue-500/10 transition-all group"
            >
              Start Project Inquiry
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </Link>
            <Link
              href="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white/80 hover:bg-white text-dark border border-slate-200/50 hover:border-slate-300 font-semibold text-xs px-8 py-4 rounded-full shadow-md transition-all"
            >
              Book Discovery Call
            </Link>
          </div>
        </div>
      </section>
    </SubpageContainer>
  );
}
