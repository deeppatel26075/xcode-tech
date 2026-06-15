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

export default function Home() {
  const featuredProjects = projects.slice(0, 2);

  return (
    <div className="flex flex-col w-full bg-white">
      {/* 1. Hero Landing */}
      <Hero />

      {/* 2. Company Snapshot ("Xcode Tech at a Glance") */}
      <section className="py-12 bg-slate-50 border-b border-slate-100 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { label: "Founded", value: "2026", desc: "Established in India" },
              { label: "Technology Areas", value: "7+", desc: "Full-stack expertise" },
              { label: "Solutions Engineered", value: "10+", desc: "Simulated lab outcomes" },
              { label: "Focus", value: "Modern Digital Engineering", desc: "Business-first solutions" }
            ].map((stat) => (
              <div key={stat.label} className="rounded-2xl border border-slate-200/40 p-6 bg-white shadow-sm flex flex-col justify-between min-h-[120px]">
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

      {/* 3. About Xcode Tech + Founder */}
      <section className="py-20 bg-white border-b border-slate-100 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* About text */}
            <div className="lg:col-span-7 flex flex-col gap-6">
              <span className="text-xs font-bold text-primary uppercase tracking-widest bg-blue-50/60 border border-blue-100/40 px-3.5 py-1.5 rounded-full inline-block w-fit">
                About Xcode Tech
              </span>
              <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-dark tracking-tight leading-tight">
                Emerging Software Engineering Partner
              </h2>
              <p className="text-slate-600 text-sm leading-relaxed">
                Xcode Tech is a software engineering company based in Ahmedabad, India, founded in 2026. We build scalable digital products, automated workflows, and custom enterprise platforms that solve core operational bottlenecks. Our structures comply with global design standards and security protocols.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-2">
                <div className="rounded-xl border border-slate-200/30 p-4 bg-slate-50/20">
                  <span className="text-xs font-bold text-slate-700 block">Our Mission</span>
                  <p className="text-[11px] text-slate-500 leading-relaxed mt-1">
                    To construct robust, business-focused software systems that elevate corporate efficiency and user scaling boundaries.
                  </p>
                </div>
                <div className="rounded-xl border border-slate-200/30 p-4 bg-slate-50/20">
                  <span className="text-xs font-bold text-slate-700 block">Our Vision</span>
                  <p className="text-[11px] text-slate-500 leading-relaxed mt-1">
                    To serve as a trusted international engineering partner where ambitious ideas seamlessly translate into functional, clean codebases.
                  </p>
                </div>
              </div>
            </div>

            {/* Founder Profile */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="w-full max-w-sm bg-slate-50 border border-slate-200/50 p-6 md:p-8 rounded-3xl shadow-xl shadow-slate-100 flex flex-col items-center text-center">
                <div className="w-24 h-24 rounded-2xl overflow-hidden border border-slate-100 shadow-md mb-6">
                  <img
                    src="/founder-portrait.png"
                    alt="Deep Patel, Founder"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="font-display font-extrabold text-lg text-dark">Deep Patel</h3>
                <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider mt-0.5">Founder &amp; Software Engineer</span>
                
                <p className="font-display font-medium text-xs md:text-sm text-slate-700 leading-relaxed mt-4 italic">
                  "Building Xcode Tech with a vision to create business-focused, scalable digital solutions using modern software engineering."
                </p>

                <div className="mt-6 flex flex-wrap gap-1.5 justify-center text-[8px] font-bold text-slate-500 uppercase">
                  <span className="bg-white px-2.5 py-1 rounded-full border border-slate-200/50">Engineering Vision</span>
                  <span className="bg-white px-2.5 py-1 rounded-full border border-slate-200/50">Problem Solving</span>
                  <span className="bg-white px-2.5 py-1 rounded-full border border-slate-200/50">Clean Code</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Why Xcode Tech */}
      <section className="py-20 bg-slate-50/50 border-b border-slate-100 relative">
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
                <div key={pillar.title} className="rounded-2xl border border-slate-200/40 p-6 bg-white shadow-sm flex flex-col gap-4">
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
      <section className="py-20 bg-slate-50/30 border-b border-slate-100 relative overflow-hidden">
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
      <section className="py-20 bg-white border-b border-slate-100 relative">
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
              className="inline-flex items-center gap-1.5 bg-slate-50 hover:bg-slate-100 border border-slate-200 text-slate-700 font-semibold text-xs px-5 py-3 rounded-full transition-colors group h-11"
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
        </div>
      </section>

      {/* 8. Development Lifecycle */}
      <section className="py-20 bg-slate-50/50 border-b border-slate-100 relative">
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
              <div key={step.name} className="rounded-xl border border-slate-200/30 p-4 bg-white shadow-sm flex flex-col justify-between min-h-[180px] h-full relative group hover:border-primary/20 hover:shadow-md transition-all duration-300">
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
      <section className="py-20 bg-white border-b border-slate-100 relative">
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
                <div key={ind.name} className="rounded-2xl border border-slate-200/40 p-5 bg-slate-50/25 hover:bg-white hover:border-primary/10 hover:shadow-lg transition-all text-center flex flex-col items-center gap-3">
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
      <section className="py-20 bg-slate-50/50 border-b border-slate-100 relative">
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
              <div key={std.title} className="rounded-2xl border border-slate-200/40 p-6 bg-white shadow-sm flex flex-col justify-between min-h-[160px]">
                <h3 className="font-display font-extrabold text-sm text-dark leading-tight">{std.title}</h3>
                <p className="text-xs text-slate-505 leading-relaxed mt-4">{std.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 11. Insights by Xcode Tech */}
      <section className="py-20 bg-white border-b border-slate-100 relative">
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
                Articles on software architecture, automation pipelines, and engineering economics written by Deep Patel.
              </p>
            </div>
            <Link
              href="/insights"
              className="inline-flex items-center gap-1.5 bg-slate-50 hover:bg-slate-100 border border-slate-200 text-slate-700 font-semibold text-xs px-5 py-3 rounded-full transition-colors group h-11"
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
        </div>
      </section>

      {/* 12. Start Partnership CTA */}
      <section id="contact" className="py-20 md:py-28 bg-slate-50/50 relative">
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
              Connect with our technology directors to outline your software objectives, select project scope levels, and design your product.
            </p>
          </div>

          <ContactForm />
        </div>
      </section>
    </div>
  );
}
