"use client";

import React from "react";
import { FadeIn } from "./Animations";

interface SubpageContainerProps {
  children: React.ReactNode;
}

export default function SubpageContainer({ children }: SubpageContainerProps) {
  return (
    <div className="min-h-screen py-24 px-4 sm:px-6 bg-sky-portal flex flex-col justify-start relative overflow-hidden">
      {/* Moving Sky Clouds */}
      <div className="absolute top-[8%] left-[-10%] w-[500px] h-[350px] bg-white/45 rounded-full blur-[110px] pointer-events-none animate-cloud-drift" />
      <div className="absolute bottom-[15%] right-[-10%] w-[650px] h-[450px] bg-white/35 rounded-full blur-[130px] pointer-events-none animate-cloud-drift [animation-delay:5s]" />
      <div className="absolute top-[30%] right-[15%] w-[400px] h-[300px] bg-white/20 rounded-full blur-[90px] pointer-events-none animate-cloud-drift [animation-delay:9s]" />

      <div className="max-w-7xl mx-auto w-full flex flex-col gap-6 z-10">
        <FadeIn direction="up" delay={0.1} duration={0.6}>
          {/* Giant Main Transparent Card (Frosted Layered Glass Container) */}
          <div className="rounded-[2.2rem] border border-white/25 bg-white/[0.08] backdrop-blur-[24px] p-6 lg:p-10 shadow-2xl relative overflow-hidden flex flex-col min-h-[80vh] w-full">
            <div className="absolute inset-0 bg-dot-grid opacity-15 pointer-events-none" />
            <div className="relative z-10 w-full flex-grow flex flex-col">
              {children}
            </div>
          </div>
        </FadeIn>
      </div>
    </div>
  );
}
