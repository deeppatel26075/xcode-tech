"use client";

import React from "react";
import Link from "next/link";
import { Rocket, Compass, Sparkles, Server, ArrowRight, Check } from "lucide-react";
import { FadeIn, StaggerContainer, StaggerItem } from "../../components/Animations";
import SubpageContainer from "../../components/SubpageContainer";

const solutions = [
  {
    icon: Rocket,
    title: "🚀 Scale Your Venture",
    tagline: "Product engineering & custom SaaS built for market entry and user scale",
    challenge: "Startups and innovators face high developer costs, launch delays, and initial database scaling blocks when validating product-market fit.",
    approach: "We design modular architectures, rapid MVPs, and robust SaaS frameworks that allow quick iterations and secure multi-tenant usage.",
    benefits: ["Reduced time-to-market for MVP launch", "Modular, scalable codebase layouts", "Highly secure API and database designs"],
    color: "from-blue-600 to-sky-custom"
  },
  {
    icon: Compass,
    title: "🏢 Automate Operations",
    tagline: "Business workflows & custom internal tools designed to accelerate efficiency",
    challenge: "Growing companies lose potential leads due to slow-loading sites, laggy inventory syncs, and manual operational spreadsheets.",
    approach: "We engineer fast static storefronts, headless commerce API panels, custom internal CRMs, and automated workflow triggers.",
    benefits: ["Edge-rendered global page loads under 200ms", "Synchronized real-time inventory management", "Centralized, secure dashboard metrics"],
    color: "from-indigo-600 to-blue-500"
  },
  {
    icon: Sparkles,
    title: "🤖 Integrate AI",
    tagline: "Cognitive automation & agentic workflows eliminating repetitive administration",
    challenge: "Organizations waste hundreds of hours on repetitive data categorization, unstructured document parsing, and invoice routing loops.",
    approach: "We deploy cognitive processing pipelines combining customized machine learning, document parsers, and validation dashboards.",
    benefits: ["Automated document processing pipelines", "AI-driven customer support categorization", "Seamless legacy system API wiring"],
    color: "from-blue-500 to-sky-500"
  },
  {
    icon: Server,
    title: "☁️ Scale Your Platform",
    tagline: "Cloud engineering & infrastructure built for performance, security, and growth",
    challenge: "Growing digital systems face performance bottlenecks, database latency spikes, and cloud hosting cost leaks.",
    approach: "We deploy automated CI/CD pipelines, container configurations, and real-time cost-resource optimization maps.",
    benefits: ["Optimized server hosting expenses", "Automated pipelines with rollback safety", "Security-focused cloud permission gates"],
    color: "from-sky-500 to-indigo-600"
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
            <p className="text-slate-500 text-sm sm:text-base mt-6 max-w-2xl mx-auto leading-relaxed">
              Explore how our core engineering divisions solve operational bottlenecks, increase data security, and maximize system profitability.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Solutions list */}
      <section className="py-16">
        <div className="w-full">
          <StaggerContainer className="flex flex-col gap-12">
            {solutions.map((solution) => {
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
                          <p className="text-xs text-slate-500 mt-1.5 leading-relaxed">{solution.challenge}</p>
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
                                <Check className="w-3.5 h-3.5" />
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
