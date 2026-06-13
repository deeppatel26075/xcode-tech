"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Compass, ShieldAlert, Cpu, HeartHandshake, Eye, Sparkles } from "lucide-react";
import Hero from "../../components/Hero";
import ServicesSection from "../../components/ServicesSection";
import PortfolioSection from "../../components/PortfolioSection";
import TechnologyOrbit from "../../components/TechnologyOrbit";
import BlogCard from "../../components/BlogCard";
import ContactForm from "../../components/ContactForm";
import { blogs } from "../../content/blogs";
import { FadeIn, StaggerContainer, StaggerItem } from "../../components/Animations";

export default function Home() {
  // Show first 3 blog posts on Home page
  const featuredBlogs = blogs.slice(0, 3);

  const valuesList = [
    { name: "Innovation", desc: "Forging ahead with creative technologies that push boundaries.", icon: Compass },
    { name: "Engineering", desc: "Meticulous software craft built for scale, performance, and security.", icon: Cpu },
    { name: "Intelligence", desc: "Infusing machine learning and cognitive automation into business DNA.", icon: Sparkles },
    { name: "Growth", desc: "Fostering global growth for our clients through technology.", icon: HeartHandshake }
  ];

  return (
    <div className="flex flex-col w-full">
      {/* 1. Hero Landing */}
      <Hero />

      {/* 2. About Section */}
      <section className="py-24 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Context: Mission Headline */}
          <div className="lg:col-span-5 flex flex-col gap-6 lg:sticky lg:top-24">
            <FadeIn direction="up" delay={0.1}>
              <span className="text-xs font-bold text-primary uppercase tracking-widest bg-blue-50 border border-blue-100 px-3.5 py-1.5 rounded-full inline-block">
                Who We Are
              </span>
            </FadeIn>
            
            <FadeIn direction="up" delay={0.2}>
              <h2 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl text-dark tracking-tight leading-[1.1]">
                We don't just build software. <br />
                <span className="bg-gradient-to-r from-primary to-sky-custom bg-clip-text text-transparent">
                  We engineer digital evolution.
                </span>
              </h2>
            </FadeIn>

            <FadeIn direction="up" delay={0.3}>
              <p className="text-slate-500 text-sm sm:text-base leading-relaxed">
                Xcode Tech is a modern technology company creating powerful, scalable, and intelligent digital solutions. 
              </p>
              <p className="text-slate-500 text-sm sm:text-base leading-relaxed mt-4">
                We combine software engineering, artificial intelligence, automation, cloud technology, and creative design to transform ideas into world-class products.
              </p>
            </FadeIn>

            <FadeIn direction="up" delay={0.4} className="mt-2">
              <div className="rounded-2xl bg-gradient-to-tr from-slate-50 to-blue-50/20 border border-slate-200/50 p-6">
                <span className="flex items-center gap-1.5 text-xs font-bold text-primary uppercase tracking-wider mb-2">
                  <Eye className="w-4 h-4 text-primary" /> Vision Statement
                </span>
                <p className="text-sm font-semibold text-slate-700 leading-relaxed">
                  "Become a global technology leader creating innovations that shape future digital experiences."
                </p>
              </div>
            </FadeIn>
          </div>

          {/* Right Context: Core Values Grid */}
          <div className="lg:col-span-7 flex flex-col gap-12">
            <div className="border-b border-slate-100 pb-4">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">
                Our Core Pillars
              </span>
            </div>
            
            <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {valuesList.map((val) => {
                const Icon = val.icon;
                return (
                  <StaggerItem key={val.name}>
                    <div className="rounded-2xl border border-slate-200/50 p-6 hover:border-primary/20 hover:shadow-lg hover:shadow-blue-500/5 transition-all group bg-slate-50/50">
                      <div className="p-3 w-fit rounded-xl bg-white border border-slate-200 text-primary mb-4 shadow-sm group-hover:scale-110 transition-transform">
                        <Icon className="w-5 h-5" />
                      </div>
                      <h4 className="font-display font-bold text-base text-dark mb-2">
                        {val.name}
                      </h4>
                      <p className="text-xs text-slate-500 leading-relaxed">
                        {val.desc}
                      </p>
                    </div>
                  </StaggerItem>
                );
              })}
            </StaggerContainer>
          </div>

        </div>
      </section>

      {/* 3. Services Grid */}
      <ServicesSection />

      {/* 4. Portfolio Projects */}
      <PortfolioSection />

      {/* 5. Technology Section & Orbit */}
      <section className="py-24 bg-slate-50/50 relative border-t border-b border-slate-100">
        <div className="absolute inset-0 bg-dot-grid opacity-50 -z-10" />

        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Context: Tech Copywriting */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <FadeIn direction="up" delay={0.1}>
              <span className="text-xs font-bold text-primary uppercase tracking-widest bg-blue-50 border border-blue-100 px-3.5 py-1.5 rounded-full inline-block">
                Our Stack
              </span>
            </FadeIn>
            
            <FadeIn direction="up" delay={0.2}>
              <h2 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl text-dark tracking-tight leading-none">
                Modern Stack. <br />
                <span className="bg-gradient-to-r from-primary to-sky-custom bg-clip-text text-transparent">
                  Unbounded Scale.
                </span>
              </h2>
            </FadeIn>

            <FadeIn direction="up" delay={0.3}>
              <p className="text-slate-500 text-sm sm:text-base leading-relaxed">
                We design lightweight serverless structures, utilizing robust languages and frameworks like Next.js, Python, and cloud services (AWS/GCP) to deliver sub-second response times.
              </p>
              <p className="text-slate-500 text-sm sm:text-base leading-relaxed mt-2">
                Our technology ecosystem revolves around automation and cognitive AI pipelines, ensuring your systems evolve with technology.
              </p>
            </FadeIn>

            <FadeIn direction="up" delay={0.4} className="mt-2">
              <Link
                href="/technology"
                className="inline-flex items-center gap-1.5 bg-primary hover:bg-blue-700 text-white font-semibold text-xs px-5 py-3 rounded-full shadow-lg shadow-blue-500/10 transition-all group w-fit"
              >
                Learn More About Our Tech Stack
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </Link>
            </FadeIn>
          </div>

          {/* Right Context: Technology Orbit Canvas */}
          <div className="lg:col-span-7 flex justify-center items-center">
            <FadeIn direction="none" delay={0.2} duration={1.2}>
              <TechnologyOrbit />
            </FadeIn>
          </div>

        </div>
      </section>

      {/* 6. Insights Blog Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <div className="max-w-xl">
              <FadeIn direction="up" delay={0.1}>
                <span className="text-xs font-bold text-primary uppercase tracking-widest bg-blue-50 border border-blue-100 px-3.5 py-1.5 rounded-full inline-block mb-4">
                  Tech Insights
                </span>
              </FadeIn>
              <FadeIn direction="up" delay={0.2}>
                <h2 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl text-dark tracking-tight leading-none">
                  Latest From Xcode Insights
                </h2>
              </FadeIn>
              <FadeIn direction="up" delay={0.3}>
                <p className="text-slate-500 text-sm sm:text-base mt-4 leading-relaxed">
                  Stay informed on cutting-edge software paradigms, AI agents, and secure server structures driving enterprise transformation.
                </p>
              </FadeIn>
            </div>

            <FadeIn direction="up" delay={0.4} className="shrink-0">
              <Link
                href="/insights"
                className="inline-flex items-center gap-1.5 bg-slate-50 hover:bg-slate-100 border border-slate-200 text-slate-700 font-semibold text-xs px-5 py-3 rounded-full transition-colors group"
              >
                Go to Insights Blog
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </Link>
            </FadeIn>
          </div>

          {/* Blog Cards Grid */}
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredBlogs.map((post) => (
              <StaggerItem key={post.slug}>
                <BlogCard post={post} />
              </StaggerItem>
            ))}
          </StaggerContainer>

        </div>
      </section>

      {/* 7. Contact / Project Request Section */}
      <section id="contact" className="py-24 bg-slate-50/50 border-t border-slate-100 relative">
        <div className="absolute inset-0 bg-dot-grid opacity-60 -z-10" />
        
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-xl mb-16">
            <FadeIn direction="up" delay={0.1}>
              <span className="text-xs font-bold text-primary uppercase tracking-widest bg-blue-50 border border-blue-100 px-3.5 py-1.5 rounded-full inline-block mb-4">
                Get In Touch
              </span>
            </FadeIn>
            <FadeIn direction="up" delay={0.2}>
              <h2 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl text-dark tracking-tight leading-none">
                Your next big idea starts here.
              </h2>
            </FadeIn>
            <FadeIn direction="up" delay={0.3}>
              <p className="text-slate-500 text-sm sm:text-base mt-4 leading-relaxed">
                Connect with our product and engineering team to map out your software strategy, budget range, and timeline goals.
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
