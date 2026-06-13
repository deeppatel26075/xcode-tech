"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowRight, Sparkles, TrendingUp, Activity, Menu, X } from "lucide-react";
import { FadeIn, Magnetic } from "./Animations";
import { AnimatePresence, motion } from "framer-motion";

const navLinks = [
  { label: "About us", href: "/about" },
  { label: "Features", href: "/services" },
  { label: "Solutions", href: "/solutions" },
  { label: "Technology", href: "/technology" },
  { label: "Blogs", href: "/insights" },
  { label: "Contacts", href: "/contact" }
];

export default function Hero() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <section className="relative min-h-screen py-8 bg-sky-portal flex flex-col justify-center overflow-hidden">
      
      {/* Moving Sky Clouds */}
      <div className="absolute top-[8%] left-[-10%] w-[500px] h-[350px] bg-white/45 rounded-full blur-[110px] pointer-events-none animate-cloud-drift" />
      <div className="absolute bottom-[15%] right-[-10%] w-[650px] h-[450px] bg-white/35 rounded-full blur-[130px] pointer-events-none animate-cloud-drift [animation-delay:5s]" />
      <div className="absolute top-[30%] right-[15%] w-[400px] h-[300px] bg-white/20 rounded-full blur-[90px] pointer-events-none animate-cloud-drift [animation-delay:9s]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 w-full flex flex-col gap-6 z-10">
        
        {/* Giant Main Transparent Card (Frosted Layered Glass Container) */}
        <div className="rounded-[2.2rem] border border-white/25 bg-white/[0.08] backdrop-blur-[24px] p-6 lg:p-10 shadow-2xl relative overflow-hidden flex flex-col justify-between min-h-[85vh]">
          
          <div className="absolute inset-0 bg-dot-grid opacity-15 pointer-events-none" />

          {/* 1. Integrated Header inside the transparent box */}
          <div className="flex items-center justify-between relative z-20 pb-6 border-b border-white/10">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 group">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-primary to-sky-custom flex items-center justify-center shadow-lg shadow-blue-500/10">
                <span className="font-display font-extrabold text-sm text-white tracking-tighter">XT</span>
              </div>
              <span className="font-display font-semibold text-lg text-dark tracking-tight">
                Xcode <span className="text-primary font-bold">Tech</span>
              </span>
            </Link>

            {/* Nav Links */}
            <nav className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="px-4 py-2 text-xs font-semibold text-slate-700 hover:text-primary transition-colors rounded-full hover:bg-white/20"
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* CTA Button */}
            <div className="hidden md:block">
              <Link
                href="/contact"
                className="bg-white/95 hover:bg-white text-dark text-xs font-bold px-5 py-2.5 rounded-full shadow-md border border-slate-200/50 hover:shadow-lg transition-all"
              >
                Sign Up
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-dark hover:text-primary transition-colors focus:outline-none"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

          {/* Mobile Overlay Menu */}
          <AnimatePresence>
            {mobileMenuOpen && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="absolute top-20 left-6 right-6 bg-white/90 backdrop-blur-xl border border-slate-200/60 p-6 rounded-2xl shadow-xl z-50 flex flex-col gap-4 md:hidden"
              >
                {navLinks.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-sm font-semibold text-slate-700 hover:text-primary py-1 border-b border-slate-100"
                  >
                    {link.label}
                  </Link>
                ))}
                <Link
                  href="/contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full text-center bg-primary text-white text-xs font-bold py-3 rounded-full mt-2"
                >
                  Sign Up
                </Link>
              </motion.div>
            )}
          </AnimatePresence>

          {/* 2. Middle Main Content Area */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center flex-grow pt-10 pb-4">
            
            {/* Left Side: Headline & Copy */}
            <div className="lg:col-span-6 flex flex-col items-start gap-6 relative z-10">
              <FadeIn direction="up" delay={0.1}>
                <h1 className="font-display font-semibold text-[44px] lg:text-[56px] leading-[1.1] text-dark tracking-tight text-glow">
                  We elevate your <br />
                  business to new levels.
                </h1>
              </FadeIn>

              <FadeIn direction="up" delay={0.2}>
                <p className="text-sm text-slate-800/90 leading-relaxed max-w-lg">
                  Every business is unique, and so are our solutions. Xcode's cutting-edge technology helps you scale efficiently and effectively.
                </p>
              </FadeIn>

              <FadeIn direction="up" delay={0.3}>
                <div className="mt-1">
                  <Magnetic>
                    <Link
                      href="/contact"
                      className="inline-flex items-center justify-center gap-2 bg-slate-950 hover:bg-slate-900 text-white font-semibold text-xs px-8 py-3.5 rounded-full shadow-xl shadow-slate-900/10 transition-all group"
                    >
                      Get Started
                    </Link>
                  </Magnetic>
                </div>
              </FadeIn>

              {/* Trust Tagline & Partners row */}
              <FadeIn direction="up" delay={0.4} className="w-full mt-12">
                <p className="text-[10px] font-bold text-slate-500/80 uppercase tracking-widest mb-4">
                  1000K+ trusted partner of leading companies worldwide.
                </p>
                <div className="flex flex-wrap items-center gap-x-8 gap-y-3 opacity-70 text-slate-800 font-display font-bold text-[11px]">
                  <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-primary" /> Lightbox</span>
                  <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-primary" /> Capsule</span>
                  <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-primary" /> Hourglass</span>
                  <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-primary" /> Luminous</span>
                </div>
              </FadeIn>
            </div>

            {/* Right Side: Phone and overlapping modules */}
            <div className="lg:col-span-6 flex justify-center items-center relative min-h-[460px] lg:min-h-[500px]">
              
              {/* Hand holding Smartphone Graphic */}
              <div className="relative w-[320px] lg:w-[360px] h-auto flex justify-center items-center select-none">
                <img
                  src="/phone-mockup.png"
                  alt="SaaS Platform on Phone"
                  className="w-full h-auto object-contain drop-shadow-3xl animate-float-medium"
                />
              </div>

              {/* Overlapping Glass Card 1: "Opportunity" (Left) */}
              <div className="absolute left-[-15px] sm:left-[10px] lg:left-[-20px] top-[45%] rounded-[1.2rem] border border-white/20 bg-[#D2C5FB]/95 backdrop-blur-md p-4 shadow-xl max-w-[190px] select-none hover:scale-105 transition-transform duration-300">
                <div className="flex items-center justify-between gap-2">
                  <span className="text-[8px] font-extrabold text-slate-800 uppercase tracking-widest">Opportunity</span>
                  <span className="text-[7px] font-bold bg-white/50 border border-white/20 px-2 py-0.5 rounded-full text-slate-800 leading-none">10 Seat</span>
                </div>
                <p className="text-[11px] font-bold text-slate-900 mt-2">User-Friendly</p>
                <p className="text-[9px] text-slate-700 leading-normal mt-1">Connect user-friendly telehealth platform</p>
                
                <div className="flex items-center justify-between border-t border-slate-900/10 pt-2.5 mt-2.5 text-[8px] font-bold text-slate-800/60 uppercase">
                  <span>24/7</span>
                  <span className="bg-slate-900 text-white px-2 py-0.5 rounded-full text-[6px]">Accessibility</span>
                </div>
              </div>

              {/* Overlapping Glass Card 2: "Total Income" (Right) */}
              <div className="absolute right-[-15px] sm:right-[15px] lg:right-[-25px] bottom-[15%] rounded-[1.2rem] border border-white/40 bg-white/85 backdrop-blur-md p-4 shadow-xl max-w-[200px] select-none hover:scale-105 transition-transform duration-300">
                <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest leading-none">Total Income</p>
                <div className="flex items-baseline gap-1 mt-1.5">
                  <span className="text-xl font-display font-extrabold text-slate-800">50.3 M</span>
                  <span className="text-[9px] font-semibold text-green-500 flex items-center gap-0.5">
                    <TrendingUp className="w-2.5 h-2.5" /> +12%
                  </span>
                </div>
                <p className="text-[8px] text-slate-400 uppercase font-semibold mt-0.5">Last month report</p>
                
                {/* Column bar graph */}
                <div className="flex gap-1.5 items-end h-8 mt-3">
                  {[25, 45, 30, 60, 80, 50, 95].map((h, i) => (
                    <div key={i} className="flex-1 bg-slate-100 rounded-full h-full relative overflow-hidden">
                      <div
                        className={`absolute bottom-0 left-0 right-0 rounded-full ${i === 5 ? "bg-orange-500" : "bg-primary"}`}
                        style={{ height: `${h}%` }}
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Overlapping Glass Card 3: "Overview" (Top Right) */}
              <div className="absolute right-[-5px] sm:right-[20px] lg:right-[-10px] top-[15%] rounded-xl border border-white/40 bg-white/85 backdrop-blur-md p-3 shadow-lg max-w-[130px] select-none hover:scale-105 transition-transform duration-300">
                <span className="text-[8px] font-bold text-slate-400 uppercase tracking-wider flex items-center gap-1">
                  <Activity className="w-3 h-3 text-sky-500" />
                  Overview
                </span>
                
                {/* Line graph */}
                <svg className="w-full h-6 text-sky-500 mt-2" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 100 30">
                  <path d="M0 20 Q15 5 30 15 T60 5 T90 18 L100 22" />
                </svg>
              </div>

            </div>

          </div>

        </div>

        {/* 3. Bottom Stats Grid (sitting directly on sky background image) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
          {[
            { value: "10.5%", desc: "Positive impact on business" },
            { value: "2k+", desc: "Client satisfaction is top priority" },
            { value: "26%", desc: "Leadership position in our markets" },
            { value: "10k+", desc: "Successful projects completed" }
          ].map((stat, i) => (
            <div
              key={i}
              className="rounded-2xl border border-white/30 bg-white/80 backdrop-blur-md shadow-lg p-6 flex flex-col justify-between hover:shadow-lg hover:scale-102 transition-all duration-300"
            >
              <h4 className="text-3xl font-display font-extrabold text-slate-800 tracking-tight leading-none">
                {stat.value}
              </h4>
              <p className="text-[11px] text-slate-600 leading-relaxed font-semibold mt-3">
                {stat.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
