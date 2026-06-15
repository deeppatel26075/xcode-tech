"use client";

import React from "react";
import Link from "next/link";
import { Compass, Cpu, HeartHandshake, Sparkles, MapPin, ArrowRight, ShieldCheck, Globe, Eye } from "lucide-react";
import { FadeIn, StaggerContainer, StaggerItem } from "../../components/Animations";

import SubpageContainer from "../../components/SubpageContainer";

const valuesList = [
  { name: "Innovation", desc: "Forging ahead with creative technologies that push boundaries.", icon: Compass },
  { name: "Engineering", desc: "Meticulous software craft built for scale, performance, and security.", icon: Cpu },
  { name: "Intelligence", desc: "Infusing machine learning and cognitive automation into business DNA.", icon: Sparkles },
  { name: "Growth", desc: "Fostering global growth for our clients through technology.", icon: HeartHandshake }
];

export default function AboutPage() {
  return (
    <SubpageContainer>
      {/* Hero Brand Header */}
      <section className="py-12 relative overflow-hidden">
        <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
          
          <FadeIn direction="up" delay={0.1}>
            <span className="text-xs font-bold text-primary uppercase tracking-widest bg-blue-50/60 border border-blue-100/40 px-3.5 py-1.5 rounded-full inline-block mb-4">
              Xcode Tech Company
            </span>
          </FadeIn>

          {/* Full Logo Usage (as required) */}
          <FadeIn direction="up" delay={0.2} className="flex items-center gap-3 mb-6 bg-white/55 border border-white/45 backdrop-blur-md p-4 rounded-2xl shadow-sm">
            <div className="w-11 h-11 rounded-xl bg-gradient-to-tr from-primary to-sky-custom flex items-center justify-center text-white font-display font-extrabold text-base shadow-md">
              XT
            </div>
            <div className="flex flex-col text-left">
              <span className="font-display font-extrabold text-xl text-dark tracking-tight leading-none">
                Xcode Tech
              </span>
              <span className="text-[10px] text-slate-550 font-bold uppercase tracking-widest mt-1">
                Software Engineering Partner
              </span>
            </div>
          </FadeIn>

          <FadeIn direction="up" delay={0.3}>
            <h1 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl text-dark tracking-tight leading-[1.1]">
              We don't just build websites. <br />
              <span className="bg-gradient-to-r from-primary to-sky-custom bg-clip-text text-transparent">
                We engineer digital systems.
              </span>
            </h1>
          </FadeIn>
          
          <FadeIn direction="up" delay={0.4}>
            <p className="text-slate-655 text-sm sm:text-base mt-6 max-w-2xl mx-auto leading-relaxed">
              Xcode Tech is a software company focused on creating reliable digital products using modern engineering, AI, and cloud technologies. We act as a global engineering partner, helping ambitious businesses transform ambitious ideas into reliable technology.
            </p>
          </FadeIn>

        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Mission & Vision */}
          <div className="lg:col-span-5 flex flex-col gap-6 lg:sticky lg:top-24">
            <span className="text-xs font-bold text-primary uppercase tracking-widest bg-blue-50/60 border border-blue-100/40 px-3.5 py-1.5 rounded-full inline-block w-fit">
              Our Direction
            </span>
            <h2 className="font-display font-bold text-2xl text-dark">
              Forging the Next Era of Digital Products
            </h2>
            <p className="text-slate-500 text-sm leading-relaxed">
              Our structures are engineered for robustness, using cloud-native serverless models and advanced AI-cognitive pipelines to eliminate operational drag.
            </p>
            
            <div className="rounded-2xl bg-white/40 border border-white/30 backdrop-blur-md p-6 mt-4">
              <span className="text-xs font-bold text-primary uppercase tracking-wider mb-2 block">
                <Eye className="w-4 h-4 inline mr-1 text-primary" /> Vision
              </span>
              <p className="text-sm font-semibold text-slate-700 leading-relaxed">
                "Building Xcode Tech as a global engineering partner where businesses transform ambitious ideas into reliable technology."
              </p>
            </div>
          </div>

          {/* Core Values Grid */}
          <div className="lg:col-span-7 flex flex-col gap-8">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">
              Core Principles
            </span>
            <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {valuesList.map((val) => {
                const Icon = val.icon;
                return (
                  <StaggerItem key={val.name}>
                    <div className="rounded-2xl border border-white/30 bg-white/45 backdrop-blur-md p-6 hover:border-primary/20 hover:shadow-lg transition-all h-full">
                      <div className="p-3 w-fit rounded-xl bg-white border border-slate-200 text-primary mb-4 shadow-sm">
                        <Icon className="w-5 h-5 animate-pulse" />
                      </div>
                      <h4 className="font-display font-bold text-base text-dark mb-2">
                        {val.name}
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

        </div>
      </section>

      {/* Global Locations & Address */}
      <section className="py-16 relative">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-xl mb-16">
            <span className="text-xs font-bold text-primary uppercase tracking-widest bg-blue-50/60 border border-blue-100/40 px-3.5 py-1.5 rounded-full inline-block mb-4">
              Locations &amp; Expansion
            </span>
            <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-dark">
              HQ Ahmedabad. Ready for USA Expansion.
            </h2>
            <p className="text-slate-600 text-sm mt-3 leading-relaxed">
              We serve Indian and international businesses, aligning our systems with international standards to ensure future USA offices launch with compliant pipelines.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            
            {/* Ahmedabad HQ Card */}
            <div className="rounded-2xl border border-white/30 bg-white/50 backdrop-blur-md p-6 shadow-sm flex flex-col justify-between min-h-[200px]">
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <MapPin className="w-5 h-5 text-primary" />
                  <span className="text-xs font-bold text-slate-700 uppercase tracking-wider">Ahmedabad HQ (India)</span>
                </div>
                <div className="text-xs text-slate-600 leading-relaxed space-y-1 pl-7">
                  <p className="font-bold text-slate-800">501, 5th Floor, Shapath 1,</p>
                  <p>Sarkhej - Gandhinagar Highway,</p>
                  <p>Bodakdev, Ahmedabad,</p>
                  <p>Gujarat 380054, India</p>
                </div>
              </div>
              
              <div className="border-t border-white/30 pt-4 mt-6 flex justify-between items-center text-[10px] font-bold text-green-500">
                <span className="flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                  Open Mon - Sat
                </span>
                <span className="text-slate-400">HQ operations active</span>
              </div>
            </div>

            {/* USA Presence Expansion Card */}
            <div className="rounded-2xl border border-white/30 bg-white/50 backdrop-blur-md p-6 shadow-sm flex flex-col justify-between min-h-[200px] relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 rounded-full blur-2xl" />
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <Globe className="w-5 h-5 text-primary animate-spin-slow" />
                  <span className="text-xs font-bold text-slate-700 uppercase tracking-wider">USA Office (Coming Q3 2026)</span>
                </div>
                <div className="text-xs text-slate-600 leading-relaxed space-y-1 pl-7">
                  <p className="font-bold text-slate-800">USA Presence Planning</p>
                  <p>Establishing digital engineering support nodes</p>
                  <p>to streamline local US client deployments</p>
                  <p>and compliance protocols.</p>
                </div>
              </div>

              <div className="border-t border-white/30 pt-4 mt-6 flex justify-between items-center text-[10px] font-bold text-slate-400">
                <span className="flex items-center gap-1 text-primary">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  Corporate Structure Ready
                </span>
                <span>Incorporation planning</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* final CTA */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto text-center flex flex-col items-center gap-6">
          <h2 className="font-display font-extrabold text-3xl text-dark">
            Partner with Xcode Tech today
          </h2>
          <p className="text-slate-500 text-sm max-w-lg leading-relaxed">
            Connect with Xcode Tech to discuss your software goals and project requirements.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-primary hover:bg-blue-700 text-white font-semibold text-xs px-6 py-3.5 rounded-full shadow-lg shadow-blue-500/10 transition-all group mt-2"
          >
            Request Consultation
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </div>
      </section>
    </SubpageContainer>
  );
}
