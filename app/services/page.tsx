"use client";

import React from "react";
import Link from "next/link";
import { Laptop, Layout, Smartphone, Cpu, Cloud, Palette, Shield, ArrowRight, Zap } from "lucide-react";
import { FadeIn, StaggerContainer, StaggerItem } from "../../components/Animations";
import SubpageContainer from "../../components/SubpageContainer";
import { servicesData } from "../../content/services";

const iconMap = {
  Laptop,
  Layout,
  Smartphone,
  Cpu,
  Cloud,
  Palette,
  Shield
};

export default function ServicesPage() {
  return (
    <SubpageContainer>
      {/* Hero Section */}
      <section className="py-12 relative">
        <div className="max-w-4xl mx-auto text-center">
          <FadeIn direction="up" delay={0.1}>
            <span className="text-xs font-bold text-primary uppercase tracking-widest bg-blue-50/60 border border-blue-100/40 px-3.5 py-1.5 rounded-full inline-block mb-4">
              Core Expertise
            </span>
          </FadeIn>
          <FadeIn direction="up" delay={0.2}>
            <h1 className="font-display font-extrabold text-4xl sm:text-5xl text-dark tracking-tight leading-tight">
              Enterprise-Grade Digital Solutions <br />
              <span className="bg-gradient-to-r from-primary to-sky-custom bg-clip-text text-transparent">
                Engineered for Global Scale
              </span>
            </h1>
          </FadeIn>
          <FadeIn direction="up" delay={0.3}>
            <p className="text-slate-600 text-sm sm:text-base mt-6 max-w-2xl mx-auto leading-relaxed">
              We design, build, and deploy premium software architectures that combine intuitive design, cloud-native scale, and artificial intelligence.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Detailed Services list */}
      <section className="py-16">
        <div className="w-full">
          <StaggerContainer className="flex flex-col gap-16">
            {servicesData.map((service, index) => {
              const Icon = iconMap[service.iconName];
              const isEven = index % 2 === 0;
              return (
                <StaggerItem key={service.title}>
                  <div className={`flex flex-col lg:flex-row items-center gap-12 ${isEven ? "" : "lg:flex-row-reverse"}`}>
                    
                    {/* Left: Description */}
                    <div className="flex-1 flex flex-col gap-5">
                      <div className="flex items-center gap-3">
                        <Link href={`/services/${service.slug}`} className={`p-2.5 rounded-xl border hover:scale-105 transition-transform ${service.color}`}>
                          <Icon className="w-5 h-5" />
                        </Link>
                        <span className="text-xs font-bold text-slate-400">SERVICE COLUMN 0{index + 1}</span>
                      </div>
                      
                      <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-dark hover:text-primary transition-colors">
                        <Link href={`/services/${service.slug}`}>
                          {service.title}
                        </Link>
                      </h2>
                      
                      <p className="text-slate-500 text-sm leading-relaxed">
                        {service.shortDescription}
                      </p>

                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mt-2">
                        {service.items.map((item) => (
                          <li key={item} className="flex items-center gap-2 text-xs font-semibold text-slate-600">
                            <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>

                      <div className="mt-2 pt-2">
                        <Link
                          href={`/services/${service.slug}`}
                          className="inline-flex items-center gap-1 text-xs font-bold text-primary hover:text-blue-700 transition-colors group/link"
                        >
                          Explore details &rarr;
                        </Link>
                      </div>
                    </div>

                    {/* Right: Premium Tech-Visual Grid Mockup */}
                    <Link
                      href={`/services/${service.slug}`}
                      className="flex-1 w-full rounded-2xl bg-white/40 border border-white/30 hover:border-primary/20 backdrop-blur-md p-8 shadow-sm flex flex-col gap-4 relative overflow-hidden select-none hover:shadow-md transition-all group"
                    >
                      <div className="absolute -top-10 -left-10 w-40 h-40 bg-blue-500/5 rounded-full blur-2xl" />
                      
                      <div className="flex justify-between items-center border-b border-white/30 pb-3 text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                        <span>Xcode System Log</span>
                        <span className="text-green-500 flex items-center gap-1">
                          <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" /> Active
                        </span>
                      </div>

                      <div className="space-y-2.5 text-[11px] font-mono text-slate-600">
                        <p className="flex items-center gap-2"><span className="text-primary font-bold">&gt;</span> Initializing pipeline configuration...</p>
                        <p className="flex items-center gap-2"><span className="text-primary font-bold">&gt;</span> Loading module: <span className="text-slate-800 font-semibold group-hover:text-primary transition-colors">{service.title.replace(/\s+/g, "")}Service</span></p>
                        <p className="flex items-center gap-2"><span className="text-primary font-bold">&gt;</span> Security certificate check: Pass</p>
                        <p className="flex items-center gap-2"><span className="text-primary font-bold">&gt;</span> Cloud sync active. Load balancer optimized.</p>
                      </div>

                      <div className="flex items-center gap-2 mt-4 pt-4 border-t border-white/30 text-xs font-semibold text-slate-400">
                        <Zap className="w-4 h-4 text-primary shrink-0" />
                        <span>High responsiveness &amp; 99.9% uptime guaranteed</span>
                      </div>
                    </Link>

                  </div>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>
      </section>

      {/* Final CTA Banner */}
      <section className="py-12 text-center flex flex-col items-center gap-6">
        <h2 className="font-display font-extrabold text-3xl text-dark">
          Ready to engineer your digital evolution?
        </h2>
        <p className="text-slate-500 text-sm max-w-lg leading-relaxed">
          Partner with Xcode Tech to deploy enterprise-grade custom software, cognitive AI models, and optimized cloud infrastructures.
        </p>
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 bg-primary hover:bg-blue-700 text-white font-semibold text-xs px-6 py-3.5 rounded-full shadow-lg shadow-blue-500/10 transition-all group mt-2"
        >
          Start Your Project
          <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
        </Link>
      </section>
    </SubpageContainer>
  );
}
