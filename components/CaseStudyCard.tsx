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

  const renderDashboardMockup = () => {
    switch (project.id) {
      case "xcommerce-engine":
        return (
          <div className="flex flex-col h-full justify-between">
            {/* Top Area: Stats */}
            <div className="grid grid-cols-2 gap-3 mb-3">
              <div className="rounded-lg bg-white border border-slate-200/50 p-2.5 shadow-sm">
                <span className="text-[8px] font-bold text-slate-400 uppercase tracking-wider block">Daily Revenue</span>
                <span className="text-sm font-extrabold text-dark mt-0.5 block">$14,892.50</span>
                <span className="text-[7px] text-green-500 font-semibold block mt-0.5">&uarr; +14.2%</span>
              </div>
              <div className="rounded-lg bg-white border border-slate-200/50 p-2.5 shadow-sm">
                <span className="text-[8px] font-bold text-slate-400 uppercase tracking-wider block">Checkout Conversion</span>
                <span className="text-sm font-extrabold text-dark mt-0.5 block">4.12%</span>
                <span className="text-[7px] text-green-500 font-semibold block mt-0.5">&uarr; +0.8%</span>
              </div>
            </div>
            {/* Sales Graph Mockup */}
            <div className="rounded-lg bg-white border border-slate-200/50 p-2.5 flex-grow flex flex-col justify-between shadow-sm">
              <span className="text-[8px] font-bold text-slate-400 uppercase tracking-wider block mb-1">Live Transaction Flow</span>
              <div className="h-16 w-full flex items-end justify-between relative overflow-hidden mt-1 px-1">
                {/* SVG Line Graph */}
                <svg className="absolute inset-0 w-full h-full text-blue-500" viewBox="0 0 100 40" preserveAspectRatio="none">
                  <defs>
                    <linearGradient id="salesGrad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="rgb(59, 130, 246)" stopOpacity="0.25"/>
                      <stop offset="100%" stopColor="rgb(59, 130, 246)" stopOpacity="0"/>
                    </linearGradient>
                  </defs>
                  <path d="M0 35 Q15 20 30 25 T60 10 T90 15 L100 8 L100 40 L0 40 Z" fill="url(#salesGrad)" />
                  <path d="M0 35 Q15 20 30 25 T60 10 T90 15 L100 8" fill="none" stroke="currentColor" strokeWidth="2" />
                </svg>
                <div className="absolute right-2 top-2 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                  <span className="text-[7px] font-bold text-slate-500 uppercase">Live (180ms)</span>
                </div>
              </div>
            </div>
          </div>
        );
      case "xai-operations-platform":
        return (
          <div className="flex flex-col h-full justify-between">
            {/* Extraction Queue */}
            <div className="rounded-lg bg-white border border-slate-200/50 p-2.5 mb-3 flex items-center justify-between shadow-sm">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-md bg-purple-50 flex items-center justify-center text-purple-600 text-[9px] font-bold">
                  PDF
                </div>
                <div>
                  <span className="text-[8px] font-bold text-slate-800 block">invoice_9042.pdf</span>
                  <span className="text-[7px] text-slate-400 block">4.2 MB &bull; Ingested</span>
                </div>
              </div>
              <span className="text-[8px] font-bold bg-green-50 text-green-600 border border-green-100 px-2 py-0.5 rounded-full">
                99.4% Match
              </span>
            </div>
            {/* Parsed Output */}
            <div className="rounded-lg bg-white border border-slate-200/50 p-2.5 flex-grow flex flex-col justify-between shadow-sm">
              <span className="text-[8px] font-bold text-slate-400 uppercase tracking-wider block mb-1.5">Extracted Keypairs</span>
              <div className="flex flex-col gap-1.5 text-[8px] font-semibold text-slate-700">
                <div className="flex justify-between border-b border-slate-100 pb-1">
                  <span className="text-slate-400">Vendor:</span>
                  <span>Logix Corp</span>
                </div>
                <div className="flex justify-between border-b border-slate-100 pb-1">
                  <span className="text-slate-400">Subtotal:</span>
                  <span>$14,250.00</span>
                </div>
                <div className="flex justify-between pb-1">
                  <span className="text-slate-400">Tax ID:</span>
                  <span>US-99120-XT</span>
                </div>
              </div>
              <button className="w-full bg-primary text-white text-[8px] font-bold py-1.5 rounded-md hover:bg-blue-700 transition-colors mt-2">
                Approve &amp; Sync to ERP &rarr;
              </button>
            </div>
          </div>
        );
      case "xbusiness-cloud":
        return (
          <div className="flex flex-col h-full justify-between">
            {/* Active Nodes */}
            <div className="grid grid-cols-2 gap-3 mb-3">
              <div className="rounded-lg bg-white border border-slate-200/50 p-2.5 shadow-sm">
                <span className="text-[8px] font-bold text-slate-400 uppercase tracking-wider block">Node-A (US East)</span>
                <div className="flex items-center gap-1 mt-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
                  <span className="text-[9px] font-extrabold text-slate-700">99.99%</span>
                </div>
              </div>
              <div className="rounded-lg bg-white border border-slate-200/50 p-2.5 shadow-sm">
                <span className="text-[8px] font-bold text-slate-400 uppercase tracking-wider block">Node-B (EU West)</span>
                <div className="flex items-center gap-1 mt-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
                  <span className="text-[9px] font-extrabold text-slate-700">99.98%</span>
                </div>
              </div>
            </div>
            {/* IAM Role Manager */}
            <div className="rounded-lg bg-white border border-slate-200/50 p-2.5 flex-grow flex flex-col justify-between shadow-sm">
              <div className="flex justify-between items-center mb-1.5">
                <span className="text-[8px] font-bold text-slate-400 uppercase tracking-wider block">System Access Policy</span>
                <span className="text-[7px] text-primary font-bold uppercase">Active</span>
              </div>
              <div className="flex flex-col gap-1.5 text-[8px] font-semibold text-slate-700">
                <div className="flex justify-between items-center border-b border-slate-100 pb-1">
                  <span className="text-slate-800">heel.patel@xcode.tech</span>
                  <span className="bg-blue-50 text-primary border border-blue-100 px-1.5 py-0.5 rounded text-[7px]">Admin</span>
                </div>
                <div className="flex justify-between items-center pb-1">
                  <span className="text-slate-850">guest.systems@client.com</span>
                  <span className="bg-slate-50 text-slate-550 border border-slate-200 px-1.5 py-0.5 rounded text-[7px]">ReadOnly</span>
                </div>
              </div>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

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
      <div className="hidden lg:flex flex-1 min-h-[220px] lg:min-h-auto rounded-xl bg-slate-50/60 border border-slate-100 p-5 flex flex-col justify-between relative overflow-hidden select-none">
        
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
        <div className="flex-grow">
          {renderDashboardMockup()}
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
