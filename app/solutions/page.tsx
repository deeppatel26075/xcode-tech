"use client";

import React from "react";
import Link from "next/link";
import { Compass, ShoppingCart, Rocket, ClipboardList, Sparkles, Server, ArrowRight, Check } from "lucide-react";
import { FadeIn, StaggerContainer, StaggerItem } from "../../components/Animations";
import SubpageContainer from "../../components/SubpageContainer";

const solutions = [
  {
    icon: Compass,
    title: "Business Websites & Digital Presence",
    tagline: "Highly credible online identities that load instantly",
    challenge: "Local businesses and professional firms lose potential clients due to slow-loading, outdated websites that fail to establish trust or capture inquiries.",
    approach: "We design lightweight, SEO-optimized static sites deployed on global edge servers with custom content management integrations.",
    benefits: ["Sub-second page load times", "High Search Engine Visibility", "Built-in lead capture automation"],
    color: "from-blue-600 to-sky-custom"
  },
  {
    icon: ShoppingCart,
    title: "Ecommerce Platforms",
    tagline: "High-performance headless online storefronts",
    challenge: "Standard store builders suffer checkout drops during flash sales due to database lag, and offer limited flexibility for custom integrations.",
    approach: "We build modern, headless storefronts integrated with robust payment gateways, fast inventory APIs, and responsive management panels.",
    benefits: ["Optimized checkout conversion rates", "Real-time inventory synchronization", "Highly responsive checkout flows"],
    color: "from-indigo-600 to-blue-500"
  },
  {
    icon: Rocket,
    title: "Startup Development",
    tagline: "Rapid MVP validation and scalable SaaS products",
    challenge: "Founders waste valuable budget on agency delays or scaling blocks that fail to pivot when market demands change.",
    approach: "We engineer flexible MVPs and modular SaaS frameworks that allow quick feature iterations and handle growth spikes seamlessly.",
    benefits: ["Reduced time-to-market for MVPs", "Modular, scalable codebase architecture", "Secure multi-tenant database designs"],
    color: "from-blue-500 to-sky-500"
  },
  {
    icon: ClipboardList,
    title: "Business Management Systems",
    tagline: "Secure internal tools, dashboards, and automated workflows",
    challenge: "Organizations lose hours to disconnected spreadsheets, manual data entry errors, and fragmented legacy systems.",
    approach: "We create secure employee portals, custom CRMs, inventory tracking dashboards, and automated workflow systems.",
    benefits: ["Unified operational data view", "Automated email/notification loops", "Role-based access security controls"],
    color: "from-sky-500 to-indigo-600"
  },
  {
    icon: Sparkles,
    title: "AI Business Automation",
    tagline: "Cognitive workflows and LLM agent integrations",
    challenge: "Teams spend hours filtering files, categorizing support tickets, and manually writing status updates.",
    approach: "We implement custom LLM agents and data extraction pipelines that automate document parsing and routine customer triage.",
    benefits: ["Significant reduction in manual data processing", "Autonomous support triage with human-in-the-loop validation", "Seamless custom API pipeline integrations"],
    color: "from-blue-600 to-indigo-600"
  },
  {
    icon: Server,
    title: "Enterprise Engineering",
    tagline: "Secure cloud migrations and automated server operations",
    challenge: "Growing companies face database latency, deployment bottlenecks, and server downtime from unoptimized infrastructure configurations.",
    approach: "We deploy automated CI/CD pipelines, container orchestration, and real-time system monitoring structures.",
    benefits: ["Automated scaling under high traffic", "Continuous uptime with rollback safety", "Security-focused cloud permission boundaries"],
    color: "from-sky-600 to-blue-600"
  }
];

export default function SolutionsPage() {
  return (
    <SubpageContainer>
      {/* Hero Section */}
      <section className="py-12 relative">
        <div className="max-w-4xl mx-auto text-center">
          <FadeIn direction="up" delay={0.1}>
            <span className="text-xs font-bold text-primary uppercase tracking-widest bg-blue-50/60 border border-blue-100/40 px-3.5 py-1.5 rounded-full inline-block mb-4">
              Focus Areas
            </span>
          </FadeIn>
          <FadeIn direction="up" delay={0.2}>
            <h1 className="font-display font-extrabold text-4xl sm:text-5xl text-dark tracking-tight leading-tight">
              Transformative Tech Solutions <br />
              <span className="bg-gradient-to-r from-primary to-sky-custom bg-clip-text text-transparent">
                Engineered for Global Industries
              </span>
            </h1>
          </FadeIn>
          <FadeIn direction="up" delay={0.3}>
            <p className="text-slate-650 text-sm sm:text-base mt-6 max-w-2xl mx-auto leading-relaxed">
              Explore how our tailor-made architectures solve complex organizational bottlenecks, increase security, and maximize operational profitability.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Solutions list */}
      <section className="py-16">
        <div className="w-full">
          <StaggerContainer className="flex flex-col gap-12">
            {solutions.map((solution, idx) => {
              const Icon = solution.icon;
              return (
                <StaggerItem key={solution.title}>
                  <div className="rounded-2xl border border-white/30 p-8 hover:border-primary/20 hover:shadow-xl hover:shadow-blue-500/5 transition-all bg-white/40 backdrop-blur-md grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                    
                    {/* Solution Header Icon */}
                    <div className="lg:col-span-4 flex items-center lg:flex-col lg:items-start gap-4">
                      <div className={`p-4 rounded-2xl bg-gradient-to-tr ${solution.color} text-white shadow-md shadow-blue-500/10`}>
                        <Icon className="w-6 h-6 animate-pulse" />
                      </div>
                      <div>
                        <h2 className="font-display font-extrabold text-xl text-dark leading-tight mt-2">
                          {solution.title}
                        </h2>
                        <p className="text-xs text-primary font-semibold mt-1">
                          {solution.tagline}
                        </p>
                      </div>
                    </div>

                    {/* Solution Details */}
                    <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-8 border-t lg:border-t-0 lg:border-l border-white/30 pt-6 lg:pt-0 lg:pl-8">
                      
                      {/* Left: Challenge and Approach */}
                      <div className="flex flex-col gap-4">
                        <div>
                          <span className="text-[10px] font-extrabold uppercase text-slate-400 tracking-wider">The Challenge</span>
                          <p className="text-xs text-slate-650 mt-1.5 leading-relaxed">{solution.challenge}</p>
                        </div>
                        <div>
                          <span className="text-[10px] font-extrabold uppercase text-slate-400 tracking-wider">Our Approach</span>
                          <p className="text-xs text-slate-800 font-semibold mt-1.5 leading-relaxed">{solution.approach}</p>
                        </div>
                      </div>

                      {/* Right: Key Benefits */}
                      <div className="flex flex-col gap-4 bg-white/50 border border-white/30 backdrop-blur-md rounded-xl p-5 shadow-sm">
                        <span className="text-[10px] font-extrabold uppercase text-primary tracking-wider">Key Benefits</span>
                        <ul className="flex flex-col gap-2.5 mt-1">
                          {solution.benefits.map((benefit) => (
                            <li key={benefit} className="flex items-start gap-2 text-xs font-semibold text-slate-700">
                              <span className="p-0.5 rounded-full bg-green-50 text-green-500 shrink-0 mt-0.5 border border-green-100">
                                <Check className="w-3 h-3" />
                              </span>
                              <span>{benefit}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                    </div>

                  </div>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>
      </section>

      {/* final CTA */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto text-center flex flex-col items-center gap-6">
          <h2 className="font-display font-extrabold text-3xl text-dark">
            Solve your industry challenge today
          </h2>
          <p className="text-slate-500 text-sm max-w-lg leading-relaxed">
            Get in touch with an Xcode Tech systems architect to outline your software objectives and schedule a technical discovery workshop.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-primary hover:bg-blue-700 text-white font-semibold text-xs px-6 py-3.5 rounded-full shadow-lg shadow-blue-500/10 transition-all group mt-2"
          >
            Start Your Solution
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </div>
      </section>
    </SubpageContainer>
  );
}
