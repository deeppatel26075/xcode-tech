"use client";

import React from "react";
import { Laptop, Cpu, Smartphone, Cloud, Shield, Palette, Layout, ArrowRight } from "lucide-react";
import { FadeIn, StaggerContainer, StaggerItem } from "./Animations";

const services = [
  {
    icon: Laptop,
    title: "Custom Software Development",
    description: "Engineering tailored applications with exceptional performance, scalability, and robust security protocols.",
    items: ["Custom SaaS Platforms", "Business Dashboards", "API Design & Integrations", "Internal Workflow Systems"],
    color: "from-blue-500 to-indigo-600",
    id: "software"
  },
  {
    icon: Layout,
    title: "Web Application Development",
    description: "Designing fast, modern, and SEO-optimized web experiences utilizing the latest web technologies.",
    items: ["Corporate Websites", "E-commerce Ecosystems", "Web Applications", "Admin Dashboards"],
    color: "from-sky-400 to-blue-500",
    id: "web"
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    description: "Building responsive native and cross-platform apps for seamless user experiences on iOS and Android.",
    items: ["iOS Engineering", "Android Engineering", "Cross-Platform Apps", "Hybrid App Solutions"],
    color: "from-indigo-500 to-sky-400",
    id: "mobile"
  },
  {
    icon: Cpu,
    title: "AI & Business Automation",
    description: "Integrating cognitive automation models and natural language solutions into business operations.",
    items: ["AI Chatbots & Agents", "AI Assistants", "API Integrations", "Workflow Automation"],
    color: "from-blue-600 to-sky-400",
    id: "ai"
  },
  {
    icon: Cloud,
    title: "Cloud & DevOps Solutions",
    description: "Automating server management and release workflows for high-availability production workloads.",
    items: ["Cloud Deployment (AWS/GCP)", "CI/CD Automations", "Cost Optimization", "Infrastructure Monitoring"],
    color: "from-sky-500 to-indigo-600",
    id: "cloud"
  },
  {
    icon: Palette,
    title: "UI/UX Engineering",
    description: "Creating highly refined layouts, modern brand guidelines, and delightful customer user flows.",
    items: ["UI/UX Interface Design", "Digital Product Design", "Brand Identity Systems", "Design Auditing"],
    color: "from-blue-500 to-sky-500",
    id: "uiux"
  },
  {
    icon: Shield,
    title: "Cybersecurity Solutions",
    description: "Ensuring digital assets are protected through active threat auditing, secure protocols, and vulnerability patching.",
    items: ["Secure Code Audits", "Vulnerability Scanning", "Identity & Access Management", "Data Encryption Standards"],
    color: "from-indigo-600 to-blue-500",
    id: "security"
  }
];

export default function ServicesSection() {
  return (
    <section className="py-24 bg-white/5 backdrop-blur-sm relative">
      {/* Background visual aid grids */}
      <div className="absolute inset-0 bg-dot-grid opacity-60 -z-10" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-xl">
            <FadeIn direction="up" delay={0.1}>
              <span className="text-xs font-bold text-primary uppercase tracking-widest bg-blue-50 border border-blue-100 px-3.5 py-1.5 rounded-full inline-block mb-4">
                Our Capabilities
              </span>
            </FadeIn>
            <FadeIn direction="up" delay={0.2}>
              <h2 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl text-dark tracking-tight leading-none">
                Services we offer
              </h2>
            </FadeIn>
            <FadeIn direction="up" delay={0.3}>
              <p className="text-slate-500 text-sm sm:text-base mt-4 leading-relaxed">
                We design and engineer enterprise-grade products, combining software development, cloud computing, and AI architectures.
              </p>
            </FadeIn>
          </div>
        </div>

        {/* Services Grid */}
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <StaggerItem key={service.title} className="h-full">
                <div
                  id={service.id}
                  className="group relative h-full rounded-2xl glass-panel border border-slate-200/50 p-6 flex flex-col justify-between glass-panel-hover"
                >
                  <div>
                    {/* Icon Header */}
                    <div className="flex items-center justify-between mb-6">
                      <div className={`p-3 rounded-xl bg-gradient-to-tr ${service.color} text-white shadow-md shadow-blue-500/10`}>
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className="text-[11px] font-bold text-slate-300 font-display">
                        0{index + 1}
                      </span>
                    </div>

                    {/* Content */}
                    <h3 className="font-display font-bold text-lg text-dark group-hover:text-primary transition-colors mb-3">
                      {service.title}
                    </h3>
                    
                    <p className="text-xs text-slate-500 leading-relaxed mb-6">
                      {service.description}
                    </p>

                    {/* Features List */}
                    <ul className="flex flex-col gap-2.5 border-t border-slate-100 pt-5">
                      {service.items.map((item) => (
                        <li key={item} className="flex items-center gap-2 text-xs font-semibold text-slate-600">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary/40 group-hover:bg-primary transition-colors shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Hover Indicator */}
                  <div className="mt-8 flex justify-end">
                    <span className="text-[10px] uppercase font-bold text-primary opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all flex items-center gap-1.5">
                      Learn More <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}
