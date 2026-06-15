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
    </SubpageContainer>
  );
}
