"use client";

import React from "react";
import ContactForm from "../../components/ContactForm";
import { FadeIn } from "../../components/Animations";

import SubpageContainer from "../../components/SubpageContainer";

export default function ContactPage() {
  return (
    <SubpageContainer>
      {/* Hero Header */}
      <section className="py-12 relative">
        <div className="max-w-4xl mx-auto text-center">
          <FadeIn direction="up" delay={0.1}>
            <span className="text-xs font-bold text-primary uppercase tracking-widest bg-blue-50/60 border border-blue-100/40 px-3.5 py-1.5 rounded-full inline-block mb-4">
              Get In Touch
            </span>
          </FadeIn>
          <FadeIn direction="up" delay={0.2}>
            <h1 className="font-display font-extrabold text-4xl sm:text-5xl text-dark tracking-tight leading-tight">
              Your next big idea starts here.
            </h1>
          </FadeIn>
          <FadeIn direction="up" delay={0.3}>
            <p className="text-slate-605 text-sm sm:text-base mt-6 max-w-xl mx-auto leading-relaxed">
              Submit your project brief below, or pick a direct time slot on the calendar scheduler to book a strategy session with Xcode Tech.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Main Interactive Forms section */}
      <section className="py-16 flex-grow">
        <div className="w-full">
          <FadeIn direction="up" delay={0.4}>
            <ContactForm />
          </FadeIn>
        </div>
      </section>

      {/* Global Reliability & Alignment Section */}
      <section className="py-12 border-t border-slate-200/50 mt-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-xl mx-auto mb-10">
            <span className="text-[10px] font-extrabold text-primary uppercase tracking-widest bg-blue-50/60 border border-blue-100/40 px-3.5 py-1.5 rounded-full inline-block">
              Global Alignment
            </span>
            <h2 className="font-display font-extrabold text-2xl text-dark tracking-tight leading-tight mt-3">
              Reliable Engineering, Globally Aligned
            </h2>
            <p className="text-slate-500 text-xs mt-2 leading-relaxed">
              We sync our operations with major international timezones to ensure clear, uninterrupted collaboration.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-left">
            {[
              {
                title: "Timezone Coverage",
                desc: "Full support for EST/PST (US & Canada), GMT/BST (UK & Europe), and AEST/NZST (Australia & New Zealand) with flexible overlap standups.",
                icon: "🕒"
              },
              {
                title: "International Invoicing",
                desc: "Simple, transparent invoicing in your local currency (USD, GBP, EUR, AUD, AED). Secure payments supported via Wise and international wire transfer.",
                icon: "💳"
              },
              {
                title: "Legal & IP Covenants",
                desc: "Intellectual property is protected via US/UK/EU-compliant contracts and NDAs, featuring clean code audits and standard escrow options.",
                icon: "🛡️"
              }
            ].map((feature, i) => (
              <FadeIn key={feature.title} direction="up" delay={0.1 * i} className="rounded-2xl border border-slate-200/50 p-5 bg-white/40 backdrop-blur-md shadow-sm">
                <span className="text-xl mb-3 block">{feature.icon}</span>
                <h4 className="font-display font-extrabold text-sm text-dark">{feature.title}</h4>
                <p className="text-[11px] text-slate-500 leading-relaxed mt-2">{feature.desc}</p>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </SubpageContainer>
  );
}
