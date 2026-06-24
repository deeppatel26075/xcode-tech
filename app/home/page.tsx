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
import ServicesSection from "../../components/ServicesSection";
import BlogCard from "../../components/BlogCard";
import { projects } from "../../content/projects";
import { blogs } from "../../content/blogs";
import { FadeIn } from "../../components/Animations";

// Coordinates outlining a clean, stylized, global dot-matrix world map
const LAND_DOTS = [
  // Greenland
  { x: 370, y: 70 }, { x: 390, y: 80 }, { x: 360, y: 85 },
  // North America
  { x: 120, y: 110 }, { x: 150, y: 115 }, { x: 180, y: 110 }, { x: 210, y: 120 }, { x: 240, y: 125 },
  { x: 110, y: 140 }, { x: 140, y: 145 }, { x: 170, y: 140 }, { x: 200, y: 150 }, { x: 230, y: 155 }, { x: 260, y: 160 },
  { x: 130, y: 175 }, { x: 160, y: 170 }, { x: 190, y: 180 }, { x: 220, y: 185 }, { x: 250, y: 190 }, { x: 280, y: 180 },
  { x: 150, y: 205 }, { x: 180, y: 210 }, { x: 210, y: 215 }, { x: 240, y: 220 }, { x: 270, y: 225 },
  { x: 200, y: 240 }, { x: 230, y: 245 }, { x: 260, y: 250 },
  // South America
  { x: 280, y: 280 }, { x: 300, y: 290 }, { x: 320, y: 300 },
  { x: 290, y: 320 }, { x: 310, y: 330 }, { x: 330, y: 340 }, { x: 350, y: 335 },
  { x: 300, y: 360 }, { x: 320, y: 370 }, { x: 340, y: 380 },
  { x: 310, y: 400 }, { x: 330, y: 410 },
  { x: 320, y: 440 },
  // Europe (including UK/Iceland)
  { x: 445, y: 120 }, { x: 450, y: 125 }, // UK
  { x: 470, y: 110 }, { x: 500, y: 105 }, { x: 530, y: 115 }, { x: 560, y: 120 },
  { x: 460, y: 135 }, { x: 490, y: 130 }, { x: 520, y: 140 }, { x: 550, y: 145 }, { x: 580, y: 135 },
  { x: 480, y: 165 }, { x: 510, y: 160 }, { x: 540, y: 170 }, { x: 570, y: 175 },
  // Africa
  { x: 480, y: 220 }, { x: 510, y: 225 }, { x: 540, y: 215 }, { x: 570, y: 230 },
  { x: 470, y: 250 }, { x: 500, y: 260 }, { x: 530, y: 255 }, { x: 560, y: 265 }, { x: 590, y: 260 },
  { x: 490, y: 290 }, { x: 520, y: 300 }, { x: 550, y: 295 }, { x: 580, y: 305 },
  { x: 510, y: 330 }, { x: 540, y: 340 }, { x: 570, y: 335 },
  { x: 520, y: 370 }, { x: 550, y: 375 },
  { x: 530, y: 410 },
  // Middle East & India
  { x: 610, y: 210 }, { x: 640, y: 215 }, { x: 670, y: 205 },
  { x: 600, y: 240 }, { x: 630, y: 245 }, { x: 660, y: 250 }, { x: 690, y: 240 },
  { x: 620, y: 275 }, { x: 650, y: 280 }, { x: 680, y: 270 }, { x: 710, y: 285 },
  // Asia (including Japan)
  { x: 905, y: 155 }, { x: 915, y: 165 }, // Japan
  { x: 600, y: 120 }, { x: 630, y: 110 }, { x: 660, y: 115 }, { x: 690, y: 105 }, { x: 720, y: 120 }, { x: 750, y: 110 }, { x: 780, y: 115 }, { x: 810, y: 105 }, { x: 840, y: 120 }, { x: 870, y: 110 }, { x: 900, y: 115 },
  { x: 610, y: 150 }, { x: 640, y: 140 }, { x: 670, y: 145 }, { x: 700, y: 135 }, { x: 730, y: 150 }, { x: 760, y: 140 }, { x: 790, y: 145 }, { x: 820, y: 135 }, { x: 850, y: 150 }, { x: 880, y: 140 }, { x: 910, y: 145 },
  { x: 680, y: 175 }, { x: 710, y: 170 }, { x: 740, y: 180 }, { x: 770, y: 175 }, { x: 800, y: 170 }, { x: 830, y: 185 }, { x: 860, y: 175 }, { x: 890, y: 170 }, { x: 920, y: 180 },
  { x: 730, y: 210 }, { x: 760, y: 205 }, { x: 790, y: 215 }, { x: 820, y: 210 }, { x: 850, y: 200 }, { x: 880, y: 215 }, { x: 910, y: 210 },
  { x: 750, y: 245 }, { x: 780, y: 240 }, { x: 810, y: 250 }, { x: 840, y: 245 }, { x: 870, y: 235 },
  { x: 760, y: 280 }, { x: 790, y: 275 }, { x: 820, y: 285 }, { x: 850, y: 270 },
  // Australia
  { x: 810, y: 370 }, { x: 840, y: 360 }, { x: 870, y: 365 }, { x: 900, y: 375 },
  { x: 800, y: 400 }, { x: 830, y: 395 }, { x: 860, y: 405 }, { x: 890, y: 410 },
  { x: 820, y: 430 }, { x: 850, y: 435 }, { x: 880, y: 440 },
  // New Zealand
  { x: 930, y: 440 }, { x: 940, y: 460 }, { x: 950, y: 480 }
];

export default function Home() {
  const featuredProjects = projects.slice(0, 2);

  return (
    <div className="flex flex-col w-full bg-transparent">
      {/* 1. Hero Landing */}
      <Hero />

      {/* 2. Company Snapshot ("Xcode Tech at a Glance") */}
      <section className="py-12 bg-white/10 backdrop-blur-md border-b border-white/5 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { label: "Founded", value: "2026", desc: "Established in India" },
              { label: "Technology Areas", value: "7+", desc: "Full-stack expertise" },
              { label: "Solutions Engineered", value: "10+", desc: "Simulated lab outcomes" },
              { label: "Focus", value: "Modern Digital Engineering", desc: "Business-first solutions" }
            ].map((stat) => (
              <div key={stat.label} className="rounded-2xl border border-white/20 p-6 bg-white/40 backdrop-blur-md shadow-sm flex flex-col justify-between min-h-[120px]">
                <span className="text-[10px] font-extrabold text-slate-400 uppercase tracking-wider">{stat.label}</span>
                <div className="mt-2">
                  <span className="font-display font-extrabold text-xl sm:text-2xl text-dark tracking-tight block">
                    {stat.value}
                  </span>
                  <span className="text-[10px] text-slate-500 font-semibold mt-1 block">{stat.desc}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. About Xcode Tech */}
      <section className="py-12 md:py-24 bg-transparent border-b border-white/5 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mx-auto flex flex-col gap-6 text-center items-center">
            <span className="text-xs font-bold text-primary uppercase tracking-widest bg-blue-50/60 border border-blue-100/40 px-3.5 py-1.5 rounded-full inline-block w-fit">
              About Xcode Tech
            </span>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-dark tracking-tight leading-tight">
              Emerging Software Engineering Partner
            </h2>
            <p className="text-slate-600 text-sm leading-relaxed max-w-2xl text-center">
              Xcode Tech is a software engineering company based in Ahmedabad, India, founded in 2026. We build scalable digital products, automated workflows, and custom enterprise platforms that solve core operational bottlenecks. Our structures comply with global design standards and security protocols.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-4 w-full text-left">
              <div className="rounded-2xl border border-white/30 p-6 bg-white/40 backdrop-blur-md shadow-sm">
                <span className="text-sm font-bold text-slate-800 block">Our Mission</span>
                <p className="text-xs text-slate-500 leading-relaxed mt-2">
                  To construct robust, business-focused software systems that elevate corporate efficiency and user scaling boundaries.
                </p>
              </div>
              <div className="rounded-2xl border border-white/30 p-6 bg-white/40 backdrop-blur-md shadow-sm">
                <span className="text-sm font-bold text-slate-800 block">Our Vision</span>
                <p className="text-xs text-slate-500 leading-relaxed mt-2">
                  To serve as a trusted international engineering partner where ambitious ideas seamlessly translate into functional, clean codebases.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3.5 Global Operations & Trust Map */}
      <section className="py-12 md:py-24 bg-white/5 backdrop-blur-sm border-b border-white/5 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left: Global presence copy */}
            <div className="lg:col-span-5 flex flex-col gap-6 relative z-10">
              <span className="text-xs font-bold text-primary uppercase tracking-widest bg-blue-50/60 border border-blue-100/40 px-3.5 py-1.5 rounded-full inline-block w-fit">
                Global Operations
              </span>
              <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-dark tracking-tight leading-tight">
                Engineering for <br />
                <span className="bg-gradient-to-r from-primary to-sky-custom bg-clip-text text-transparent">
                  International Partnerships
                </span>
              </h2>
              <p className="text-slate-650 text-sm leading-relaxed">
                Xcode Tech acts as a trusted global engineering hub. We align our development sprints to support startups and growing enterprises across the **USA, Canada, UK, Europe, UAE (Dubai), Australia, and New Zealand**.
              </p>
              
              <div className="grid grid-cols-2 gap-4 mt-2">
                {[
                  { title: "EST / PST Alignment", desc: "US & Canada coverage" },
                  { title: "GMT / BST Compliance", desc: "UK & European workflows" },
                  { title: "AEST / NZST Synchronized", desc: "Australia & New Zealand logs" },
                  { title: "GST Timezone Support", desc: "UAE & Dubai operations" }
                ].map((tz) => (
                  <div key={tz.title} className="rounded-xl border border-white/30 p-4 bg-white/40 backdrop-blur-md shadow-sm">
                    <span className="text-[10px] font-extrabold text-primary uppercase tracking-wider block">{tz.title}</span>
                    <span className="text-[10px] text-slate-500 font-semibold mt-1 block">{tz.desc}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col gap-3 mt-2 border-t border-slate-200/40 pt-6 text-xs text-slate-500 font-medium">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-500 shrink-0" />
                  <span>GDPR, HIPAA, and custom data isolation protocols enabled.</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-500 shrink-0" />
                  <span>100% intellectual property (IP) escrow and security covenants.</span>
                </div>
              </div>
            </div>

            {/* Right: Premium Abstract Animated World Map (7 columns) */}
            <div className="lg:col-span-7 w-full flex justify-center items-center relative">
              <div className="w-full aspect-[2/1] max-w-[680px] rounded-3xl border border-white/40 bg-white/50 backdrop-blur-md p-4 sm:p-6 shadow-xl relative overflow-hidden select-none">
                
                {/* Embedded Animated SVG World Map */}
                <svg className="w-full h-full text-slate-350" viewBox="0 0 1000 500" fill="none">
                  {/* Background dot grid representing land mass */}
                  <g opacity="0.25">
                    {LAND_DOTS.map((dot, idx) => (
                      <circle key={idx} cx={dot.x} cy={dot.y} r="2" fill="currentColor" />
                    ))}
                  </g>

                  {/* Animated Bezier data paths from India HQ (680, 260) */}
                  {[
                    { target: "Toronto, Canada", tx: 250, ty: 135 },
                    { target: "New York, USA", tx: 280, ty: 180 },
                    { target: "London, UK", tx: 490, ty: 130 },
                    { target: "Frankfurt, Germany", tx: 520, ty: 140 },
                    { target: "Dubai, UAE", tx: 620, ty: 230 },
                    { target: "Sydney, Australia", tx: 890, ty: 410 },
                    { target: "Auckland, New Zealand", tx: 940, ty: 460 }
                  ].map((path, i) => {
                    const midX = (680 + path.tx) / 2;
                    const midY = (260 + path.ty) / 2 - 80;
                    return (
                      <g key={path.target}>
                        {/* Static connection path line */}
                        <path
                          d={`M680 260 Q${midX} ${midY} ${path.tx} ${path.ty}`}
                          fill="none"
                          stroke="url(#pathGrad)"
                          strokeWidth="1.5"
                          opacity="0.2"
                          strokeDasharray="4,4"
                        />
                        {/* Animated flowing data particles */}
                        <path
                          d={`M680 260 Q${midX} ${midY} ${path.tx} ${path.ty}`}
                          fill="none"
                          stroke="#2563eb"
                          strokeWidth="2.5"
                          strokeDasharray="15, 120"
                          opacity="0.85"
                        >
                          <animate
                            attributeName="stroke-dashoffset"
                            values="135;0"
                            dur={`${3.5 + i * 0.4}s`}
                            repeatCount="Infinity"
                          />
                        </path>
                      </g>
                    );
                  })}

                  {/* Gradients Definition */}
                  <defs>
                    <linearGradient id="pathGrad" x1="0" y1="0" x2="1" y2="0">
                      <stop offset="0%" stopColor="#2563eb" stopOpacity="0.8"/>
                      <stop offset="100%" stopColor="#38bdf8" stopOpacity="0.2"/>
                    </linearGradient>
                  </defs>

                  {/* HQ Node (Ahmedabad, India) */}
                  <g>
                    <circle cx="680" cy="270" r="10" fill="#2563eb" opacity="0.2" className="animate-ping" style={{ animationDuration: '3s' }} />
                    <circle cx="680" cy="270" r="6" fill="#2563eb" opacity="0.4" className="animate-ping" style={{ animationDuration: '2s' }} />
                    <circle cx="680" cy="270" r="4.5" fill="#2563eb" />
                    <circle cx="680" cy="270" r="2" fill="#fff" />
                  </g>

                  {/* Global Client Hotspot Nodes */}
                  {[
                    { label: "Canada", x: 250, y: 135 },
                    { label: "USA", x: 280, y: 180 },
                    { label: "UK", x: 490, y: 130 },
                    { label: "Germany", x: 520, y: 140 },
                    { label: "Dubai", x: 620, y: 230 },
                    { label: "Sydney", x: 890, y: 410 },
                    { label: "Auckland", x: 940, y: 460 }
                  ].map((node) => (
                    <g key={node.label}>
                      <circle cx={node.x} cy={node.y} r="8" fill="#38bdf8" opacity="0.25" className="animate-ping" style={{ animationDuration: '4.5s' }} />
                      <circle cx={node.x} cy={node.y} r="3" fill="#38bdf8" />
                    </g>
                  ))}

                  {/* Text Labels for key global regions */}
                  <text x="210" y="200" fill="#64748b" fontSize="8" fontWeight="bold" fontFamily="sans-serif">USA / CAN</text>
                  <text x="475" y="115" fill="#64748b" fontSize="8" fontWeight="bold" fontFamily="sans-serif">UK / EU</text>
                  <text x="575" y="248" fill="#64748b" fontSize="8" fontWeight="bold" fontFamily="sans-serif">UAE (Dubai)</text>
                  <text x="692" y="265" fill="#2563eb" fontSize="9" fontWeight="extrabold" fontFamily="sans-serif">HQ (India)</text>
                  <text x="895" y="400" fill="#64748b" fontSize="8" fontWeight="bold" fontFamily="sans-serif">AU</text>
                  <text x="915" y="475" fill="#64748b" fontSize="8" fontWeight="bold" fontFamily="sans-serif">NZ</text>
                </svg>

                {/* Floating timezone status badge overlay inside map */}
                <div className="absolute bottom-4 left-4 sm:left-6 flex items-center gap-2 bg-white/95 border border-slate-200/50 px-3 py-1.5 rounded-full shadow-md backdrop-blur-sm">
                  <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                  <span className="text-[9px] font-bold text-slate-700 uppercase tracking-wider">Timezones aligned: active delivery</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. Why Xcode Tech */}
      <section className="py-12 md:py-24 bg-white/5 backdrop-blur-sm border-b border-white/5 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-xl mx-auto mb-16">
            <span className="text-xs font-bold text-primary uppercase tracking-widest bg-blue-50/60 border border-blue-100/40 px-3.5 py-1.5 rounded-full inline-block">
              Why Choose Us
            </span>
            <h2 className="font-display font-extrabold text-3xl text-dark tracking-tight leading-tight mt-4">
              Built for Scale &amp; Efficiency
            </h2>
            <p className="text-slate-500 text-sm mt-3 leading-relaxed">
              We design and construct digital products with architectural discipline and business integrity.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Business Focused Development",
                desc: "We align every line of code with your operational objectives and return-on-investment parameters. We don't just build features; we build assets.",
                icon: Rocket,
                color: "text-blue-600 bg-blue-50 border-blue-100"
              },
              {
                title: "Modern Architecture",
                desc: "Clean codebases, decoupled edge deployment paths, modular designs, and highly indexed databases ensure systems adapt as your traffic scale scales.",
                icon: Cpu,
                color: "text-indigo-600 bg-indigo-50 border-indigo-100"
              },
              {
                title: "Transparent Partnership",
                desc: "Real-time communication channels, dual-developer code reviews, step-by-step milestone delivery, and transparent simulation results from day one.",
                icon: Handshake,
                color: "text-sky-500 bg-sky-50 border-sky-100"
              }
            ].map((pillar) => {
              const Icon = pillar.icon;
              return (
                <div key={pillar.title} className="rounded-2xl border border-white/25 p-6 bg-white/50 backdrop-blur-md shadow-sm flex flex-col gap-4">
                  <div className={`p-3 rounded-xl border w-fit ${pillar.color}`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-display font-extrabold text-base text-dark">{pillar.title}</h3>
                  <p className="text-xs text-slate-505 leading-relaxed">{pillar.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. Services */}
      <ServicesSection />

      {/* 6. Technology Stack */}
      <section className="py-12 md:py-24 bg-transparent border-b border-white/5 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6 flex flex-col gap-6">
              <span className="text-xs font-bold text-primary uppercase tracking-widest bg-blue-50/60 border border-blue-100/40 px-3.5 py-1.5 rounded-full inline-block w-fit">
                Technology Stack
              </span>
              <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-dark tracking-tight leading-tight">
                Modern &amp; Resilient Stacks
              </h2>
              <p className="text-slate-500 text-sm leading-relaxed">
                We select programming frameworks, system libraries, and hosting architectures based on proven reliability, performance thresholds, and security compliance.
              </p>
              
              <div className="space-y-4 mt-2">
                {[
                  { category: "Frontend", items: "React, Next.js (App Router), TypeScript, Tailwind CSS" },
                  { category: "Backend & APIs", items: "Node.js, Express, Python (FastAPI), RESTful & GraphQL APIs" },
                  { category: "Database & Cache", items: "PostgreSQL, MongoDB, Redis, Row-Level Security (RLS)" },
                  { category: "Cloud & DevOps", items: "AWS (S3, EC2), Vercel, Docker, CI/CD GitHub Actions" },
                  { category: "AI & Automation", items: "OpenAI API, LangChain pipelines, Cognitive parsers" }
                ].map((stack) => (
                  <div key={stack.category} className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4 border-b border-slate-100 pb-3">
                    <span className="text-xs font-extrabold text-dark w-32 shrink-0">{stack.category}</span>
                    <span className="text-xs text-slate-550">{stack.items}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-6 flex justify-center items-center relative">
              <TechnologyOrbit />
            </div>

          </div>
        </div>
      </section>

      {/* 7. Engineering Solutions Lab */}
      <section className="py-12 md:py-24 bg-transparent border-b border-white/5 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <div className="max-w-xl">
              <span className="text-xs font-bold text-primary uppercase tracking-widest bg-blue-50/60 border border-blue-100/40 px-3.5 py-1.5 rounded-full inline-block mb-4">
                Solutions Lab
              </span>
              <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-dark tracking-tight leading-tight">
                Engineering Solutions Lab
              </h2>
              <p className="text-slate-500 text-sm mt-3 leading-relaxed">
                Realistic prototypes designed around business challenges. Outcomes represent verified performance stats in simulated environments.
              </p>
            </div>
            <Link
              href="/work"
              className="hidden md:inline-flex items-center gap-1.5 bg-white/80 hover:bg-white border border-slate-200 text-slate-700 font-semibold text-xs px-5 py-3 rounded-full transition-colors group h-11"
            >
              View Solutions Lab
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </div>

          <div className="flex flex-col gap-10">
            {featuredProjects.map((project) => (
              <CaseStudyCard key={project.id} project={project} />
            ))}
          </div>

          {/* Mobile View Solutions Lab button at the bottom */}
          <div className="flex justify-center mt-8 md:hidden">
            <Link
              href="/work"
              className="inline-flex items-center justify-center gap-1.5 bg-white/80 hover:bg-white text-slate-700 font-semibold text-sm px-6 py-3.5 rounded-full border border-slate-200 shadow-sm transition-colors group w-full"
            >
              View Solutions Lab
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* 8. Development Lifecycle */}
      <section className="py-12 md:py-24 bg-white/5 backdrop-blur-sm border-b border-white/5 relative">
        <div className="absolute inset-0 bg-dot-grid opacity-20 -z-10" />
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-xl mx-auto mb-16">
            <span className="text-xs font-bold text-primary uppercase tracking-widest bg-blue-50/60 border border-blue-100/40 px-3.5 py-1.5 rounded-full inline-block">
              Our Process
            </span>
            <h2 className="font-display font-extrabold text-3xl text-dark tracking-tight leading-tight mt-4">
              Disciplined Engineering Standards
            </h2>
            <p className="text-slate-500 text-sm mt-3 leading-relaxed">
              Every system we build follows a structured lifecycle to ensure code robustness, security, and fast load speeds:
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
            {[
              { step: "01", name: "Discovery", desc: "Understanding the problem, defining business outcomes, and outlining scope parameters." },
              { step: "02", name: "System Architecture", desc: "Designing database schemas, deciding tech stacks, and modeling API endpoints." },
              { step: "03", name: "Experience Design", desc: "High-fidelity layouts and responsive, intuitive user journey flows." },
              { step: "04", name: "Custom Development", desc: "Clean backend coding, secure database setups, and frontend component building." },
              { step: "05", name: "Quality Assurance", desc: "Dual-developer peer reviews, automated unit tests, and performance gate audits." },
              { step: "06", name: "Deployment", desc: "Continuous integration pipelines, cloud multi-region staging, and validation tests." },
              { step: "07", name: "Evolution", desc: "Database query tuning, serverless scale management, and continuous updates." }
            ].map((step) => (
              <div key={step.name} className="rounded-xl border border-white/20 p-4 bg-white/50 backdrop-blur-md shadow-sm flex flex-col justify-between min-h-[180px] h-full relative group hover:border-primary/20 hover:shadow-md transition-all duration-300">
                <span className="absolute top-4 right-4 text-[10px] font-extrabold text-slate-400">
                  {step.step}
                </span>
                <div>
                  <h4 className="font-display font-extrabold text-xs text-dark mb-1.5 mt-4">
                    {step.name}
                  </h4>
                  <p className="text-[10px] text-slate-500 leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. Industries We Build For */}
      <section className="py-12 md:py-24 bg-transparent border-b border-white/5 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-xl mx-auto mb-16">
            <span className="text-xs font-bold text-primary uppercase tracking-widest bg-blue-50/60 border border-blue-100/40 px-3.5 py-1.5 rounded-full inline-block">
              Market Expertise
            </span>
            <h2 className="font-display font-extrabold text-3xl text-dark tracking-tight leading-tight mt-4">
              Industries We Build For
            </h2>
            <p className="text-slate-500 text-sm mt-3 leading-relaxed">
              We engineer specialized digital platforms tailored to the operational models of diverse sectors.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {[
              { name: "Healthcare", focus: "Telehealth & HIPAA layouts", icon: ShieldCheck },
              { name: "Education", focus: "LMS & student dashboards", icon: Cpu },
              { name: "Real Estate", focus: "Property engines & maps", icon: Compass },
              { name: "Finance", focus: "SaaS ledgers & billing API", icon: Zap },
              { name: "E-commerce", focus: "Headless store backends", icon: Rocket },
              { name: "Startups", focus: "MVP platforms & product code", icon: Sparkles }
            ].map((ind) => {
              const Icon = ind.icon;
              return (
                <div key={ind.name} className="rounded-2xl border border-white/20 p-5 bg-white/40 backdrop-blur-md hover:bg-white/60 hover:border-primary/10 hover:shadow-lg transition-all text-center flex flex-col items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-blue-50 text-primary border border-blue-100/30">
                    <Icon className="w-4 h-4" />
                  </div>
                  <h4 className="font-display font-extrabold text-sm text-dark">{ind.name}</h4>
                  <p className="text-[10px] text-slate-500 leading-normal">{ind.focus}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 10. Engineering Standards */}
      <section className="py-12 md:py-24 bg-white/5 backdrop-blur-sm border-b border-white/5 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-xl mx-auto mb-16">
            <span className="text-xs font-bold text-primary uppercase tracking-widest bg-blue-50/60 border border-blue-100/40 px-3.5 py-1.5 rounded-full inline-block">
              Trust &amp; Quality
            </span>
            <h2 className="font-display font-extrabold text-3xl text-dark tracking-tight leading-tight mt-4">
              Engineering Standards
            </h2>
            <p className="text-slate-500 text-sm mt-3 leading-relaxed">
              Our software development practices enforce system reliability, data protection, and product lifespan.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Secure Development Practices",
                desc: "We enforce strict security checks, encryption standards, role-based access control (RBAC), and path-safety checks to protect critical datasets."
              },
              {
                title: "Performance Optimized Systems",
                desc: "Code rendering is tuned for sub-second speeds. We leverage edge networks, database query index optimizations, and cache layers."
              },
              {
                title: "Scalable Architecture",
                desc: "We build decoupled monolithic or microservices platforms that scale horizontally under peak traffic, avoiding server downtime."
              },
              {
                title: "Clean Code Standards",
                desc: "Strict type definitions, automated testing pipelines, and developer peer-review standards guarantee clean and maintainable files."
              }
            ].map((std) => (
              <div key={std.title} className="rounded-2xl border border-white/20 p-6 bg-white/55 backdrop-blur-md shadow-sm flex flex-col justify-between min-h-[160px]">
                <h3 className="font-display font-extrabold text-sm text-dark leading-tight">{std.title}</h3>
                <p className="text-xs text-slate-505 leading-relaxed mt-4">{std.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 11. Insights by Xcode Tech */}
      <section className="py-12 md:py-24 bg-transparent border-b border-white/5 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <div className="max-w-xl">
              <span className="text-xs font-bold text-primary uppercase tracking-widest bg-blue-50/60 border border-blue-100/40 px-3.5 py-1.5 rounded-full inline-block mb-4">
                Publications
              </span>
              <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-dark tracking-tight leading-tight">
                Insights by Xcode Tech
              </h2>
              <p className="text-slate-500 text-sm mt-3 leading-relaxed">
                Articles on software architecture, automation pipelines, and engineering economics written by our engineering team.
              </p>
            </div>
            <Link
              href="/insights"
              className="hidden md:inline-flex items-center gap-1.5 bg-white/80 hover:bg-white border border-slate-200 text-slate-700 font-semibold text-xs px-5 py-3 rounded-full transition-colors group h-11"
            >
              Read All Insights
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {blogs.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>

          {/* Mobile Read All Insights button at the bottom */}
          <div className="flex justify-center mt-8 md:hidden">
            <Link
              href="/insights"
              className="inline-flex items-center justify-center gap-1.5 bg-white/80 hover:bg-white text-slate-700 font-semibold text-sm px-6 py-3.5 rounded-full border border-slate-200 shadow-sm transition-colors group w-full"
            >
              Read All Insights
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* 12. Start Partnership CTA */}
      <section id="contact" className="py-12 md:py-24 bg-white/10 backdrop-blur-md relative">
        <div className="absolute inset-0 bg-dot-grid opacity-40 -z-10" />
        
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-xl mb-16">
            <span className="text-xs font-bold text-primary uppercase tracking-widest bg-blue-50/60 border border-blue-100/40 px-3.5 py-1.5 rounded-full inline-block mb-4">
              Consultation Request
            </span>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-dark tracking-tight leading-none">
              Start Partnership
            </h2>
            <p className="text-slate-655 text-sm mt-4 leading-relaxed">
              Connect with Xcode Tech to discuss your software goals and project requirements.
            </p>
          </div>

          <ContactForm />
        </div>
      </section>
    </div>
  );
}
