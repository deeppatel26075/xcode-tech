"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, Cpu, Cloud, Smartphone, Laptop, Sparkles } from "lucide-react";
import { Project } from "../content/projects";

interface CaseStudyCardProps {
  project: Project;
}

export default function CaseStudyCard({ project }: CaseStudyCardProps) {
  // Select icon based on category
  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "AI Automation":
        return Cpu;
      case "Cloud Platform":
        return Cloud;
      case "E-commerce Technology":
        return Laptop;
      case "Enterprise Software":
        return Laptop;
      default:
        return Sparkles;
    }
  };

  const Icon = getCategoryIcon(project.category);

  return (
    <div className="group relative rounded-2xl glass-panel border border-slate-200/50 overflow-hidden flex flex-col lg:flex-row items-stretch min-h-[360px] glass-panel-hover p-4 lg:p-6 gap-6">
      
      {/* Left: Project Context */}
      <div className="flex-1 flex flex-col justify-between p-4 z-10">
        <div>
          {/* Header */}
          <div className="flex items-center gap-2 mb-4">
            <span className="p-1.5 rounded-lg bg-blue-50 text-primary">
              <Icon className="w-4 h-4" />
            </span>
            <span className="text-[10px] font-bold text-primary uppercase tracking-widest bg-blue-50 border border-blue-100/50 px-2 py-0.5 rounded-full">
              {project.category}
            </span>
          </div>

          <h3 className="font-display font-extrabold text-2xl text-dark mb-4 leading-tight group-hover:text-primary transition-colors">
            {project.title}
          </h3>

          <div className="flex flex-col gap-3 text-xs text-slate-655 mb-5 max-w-md">
            <div>
              <span className="font-bold text-[9px] uppercase tracking-wider text-slate-400 block mb-0.5">Challenge</span>
              <p className="text-slate-600 leading-relaxed">{project.challengeDetail}</p>
            </div>
            <div>
              <span className="font-bold text-[9px] uppercase tracking-wider text-slate-400 block mb-0.5">Engineering Solution</span>
              <p className="text-slate-800 font-semibold leading-relaxed">{project.solutionDetail}</p>
            </div>
            <div>
              <span className="font-bold text-[9px] uppercase tracking-wider text-slate-400 block mb-0.5">Business Impact</span>
              <p className="text-slate-600 italic leading-relaxed">{project.businessImpact}</p>
            </div>
          </div>

          {/* Features */}
          <div className="flex flex-wrap gap-1.5 mb-4">
            <span className="text-[9px] font-bold text-slate-400 uppercase tracking-wider self-center mr-1">Technology:</span>
            {project.features.map((feature) => (
              <span key={feature} className="text-[10px] font-semibold text-slate-600 bg-slate-100/60 border border-slate-200/50 px-2.5 py-1 rounded-full">
                {feature}
              </span>
            ))}
          </div>
        </div>

        {/* Action Link */}
        <Link
          href={`/case-studies/${project.id}`}
          className="inline-flex items-center gap-1 text-xs font-bold text-primary hover:text-blue-700 transition-colors mt-4"
        >
          View Case Study
          <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
        </Link>
      </div>

      {/* Right: Premium Interactive Mini-Dashboard Mockup */}
      <div className="flex-1 min-h-[200px] lg:min-h-auto rounded-xl bg-slate-50/60 border border-slate-100 p-5 flex flex-col justify-between relative overflow-hidden select-none">
        
        {/* Subtle glow background */}
        <div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-500/5 rounded-full blur-2xl group-hover:bg-blue-500/10 transition-colors" />

        <div className="flex items-center justify-between border-b border-slate-200/40 pb-3 mb-4">
          <span className="text-[9px] font-extrabold text-slate-400 uppercase tracking-widest">
            {project.title} Live Control Panel
          </span>
          <div className="flex gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-red-400/60" />
            <span className="w-1.5 h-1.5 rounded-full bg-yellow-400/60" />
            <span className="w-1.5 h-1.5 rounded-full bg-green-400/60" />
          </div>
        </div>

        {/* Dashboard Grid */}
        <div className="grid grid-cols-3 gap-3 flex-1 items-center">
          {project.dashboardStats.map((stat, sIdx) => (
            <div
              key={stat.label}
              className="rounded-lg bg-white border border-slate-200/50 p-3 flex flex-col justify-between h-full shadow-[0_4px_12px_rgba(0,0,0,0.01)] hover:border-blue-100 hover:shadow-md transition-all duration-300"
            >
              <span className="text-[9px] font-bold text-slate-400 uppercase tracking-wider leading-none">
                {stat.label}
              </span>
              
              <div className="my-1.5">
                <span className="text-lg font-display font-extrabold text-dark tracking-tight leading-none">
                  {stat.value}
                </span>
              </div>

              <span className="text-[8px] font-medium text-slate-500 leading-none">
                {stat.change}
              </span>
            </div>
          ))}
        </div>

        {/* Mini progress bars showing visual operation */}
        <div className="mt-4 pt-3 border-t border-slate-200/40 flex items-center justify-between gap-3 text-[9px] font-semibold text-slate-400">
          <span className="flex items-center gap-1 text-[9px] font-bold text-slate-400">
            <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
            System Synced
          </span>
          <div className="w-24 h-1 bg-slate-100 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-primary to-sky-custom"
              initial={{ width: "20%" }}
              whileInView={{ width: "85%" }}
              transition={{ duration: 1.5, ease: "easeOut" }}
            />
          </div>
        </div>

      </div>

    </div>
  );
}
