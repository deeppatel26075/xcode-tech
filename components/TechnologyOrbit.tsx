"use client";

import React from "react";
import { motion } from "framer-motion";
import { Cpu, Terminal, Disc, Cloud, Shield, Settings, Server, Layers, GitBranch, Binary } from "lucide-react";

// Types for orbital node
interface TechNode {
  name: string;
  icon: React.ComponentType<any>;
  color: string;
}

const innerTechnologies: TechNode[] = [
  { name: "React", icon: Layers, color: "text-blue-500 bg-blue-50 border-blue-100" },
  { name: "Next.js", icon: Terminal, color: "text-slate-800 bg-slate-100 border-slate-200" },
  { name: "Tailwind", icon: Disc, color: "text-sky-500 bg-sky-50 border-sky-100" },
  { name: "Node.js", icon: Server, color: "text-green-600 bg-green-50 border-green-100" },
  { name: "Python", icon: Binary, color: "text-yellow-600 bg-yellow-50 border-yellow-100" }
];

const outerTechnologies: TechNode[] = [
  { name: "AWS", icon: Cloud, color: "text-orange-500 bg-orange-50 border-orange-100" },
  { name: "Google Cloud", icon: Cloud, color: "text-blue-600 bg-blue-50 border-blue-100" },
  { name: "Docker", icon: Settings, color: "text-blue-400 bg-blue-50 border-blue-100" },
  { name: "AI Models", icon: Cpu, color: "text-indigo-500 bg-indigo-50 border-indigo-100" },
  { name: "AI Agents", icon: GitBranch, color: "text-violet-500 bg-violet-50 border-violet-100" }
];

export default function TechnologyOrbit() {
  return (
    <div className="relative w-full max-w-[650px] aspect-square mx-auto hidden md:flex items-center justify-center overflow-hidden select-none">
      
      {/* Background Tech Glows */}
      <div className="absolute w-[80%] aspect-square rounded-full bg-blue-500/5 blur-[80px] -z-10 animate-pulse-glow" />

      {/* Outer Orbit Path (Dashed) */}
      <div className="absolute w-[78%] aspect-square rounded-full border border-slate-200/50 border-dashed -z-10" />
      
      {/* Inner Orbit Path (Dashed) */}
      <div className="absolute w-[48%] aspect-square rounded-full border border-slate-200/40 border-dashed -z-10" />

      {/* Central Core: Xcode Tech */}
      <div className="relative z-10 w-28 h-28 rounded-full bg-white border border-slate-200 shadow-xl flex flex-col items-center justify-center p-3 text-center">
        {/* Pulsing Core Rings */}
        <div className="absolute -inset-2 rounded-full border border-primary/10 animate-ping [animation-duration:3s]" />
        <div className="absolute -inset-4 rounded-full border border-sky-400/5 animate-ping [animation-duration:4s]" />

        <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-primary to-sky-custom flex items-center justify-center text-white font-display font-extrabold text-sm shadow-md mb-1">
          XT
        </div>
        <span className="font-display font-bold text-xs text-dark tracking-tight leading-none mt-1">
          Xcode Tech
        </span>
        <span className="text-[7px] text-slate-400 font-bold uppercase tracking-wider mt-0.5">
          Intelligence Core
        </span>
      </div>

      {/* Inner Technologies Loop */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 32, ease: "linear", repeat: Infinity }}
        className="absolute w-[48%] aspect-square flex items-center justify-center"
      >
        {innerTechnologies.map((tech, idx) => {
          const angle = (idx * 360) / innerTechnologies.length;
          const Icon = tech.icon;
          return (
            <div
              key={tech.name}
              className="absolute"
              style={{
                transform: `rotate(${angle}deg) translateY(-150px) rotate(-${angle}deg)`
              }}
            >
              {/* Counter-rotate the inner content to keep text horizontal */}
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 32, ease: "linear", repeat: Infinity }}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full border shadow-sm ${tech.color} text-[10px] font-bold`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{tech.name}</span>
              </motion.div>
            </div>
          );
        })}
      </motion.div>

      {/* Outer Technologies Loop */}
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 48, ease: "linear", repeat: Infinity }}
        className="absolute w-[78%] aspect-square flex items-center justify-center"
      >
        {outerTechnologies.map((tech, idx) => {
          const angle = (idx * 360) / outerTechnologies.length;
          const Icon = tech.icon;
          return (
            <div
              key={tech.name}
              className="absolute"
              style={{
                transform: `rotate(${angle}deg) translateY(-245px) rotate(-${angle}deg)`
              }}
            >
              {/* Counter-rotate the inner content to keep text horizontal */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 48, ease: "linear", repeat: Infinity }}
                className={`flex items-center gap-1.5 px-3.5 py-2 rounded-full border shadow-sm ${tech.color} text-[10px] font-bold`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{tech.name}</span>
              </motion.div>
            </div>
          );
        })}
      </motion.div>

    </div>
  );
}
