"use client";

import React from "react";
import { motion } from "framer-motion";
import { Cpu, TrendingUp, Cloud, CheckCircle, Activity, Sparkles, ShieldCheck } from "lucide-react";

export default function AnimatedDashboard() {
  // SVG Sparkline path variables for clean vector charts
  const sparklinePath = "M 0 60 Q 20 40 40 50 T 80 15 T 120 45 T 160 10 T 200 35 T 240 5 T 280 25 T 320 0";
  const wavePath = "M 0 50 C 60 70, 90 20, 150 40 C 210 60, 240 10, 300 30 L 300 100 L 0 100 Z";

  return (
    <div className="relative w-full max-w-[680px] mx-auto aspect-[4/3] flex items-center justify-center p-6 [perspective:1200px]">
      {/* Background Soft Glows */}
      <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse-glow" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-sky-400/10 rounded-full blur-3xl animate-pulse-glow [animation-delay:2s]" />

      {/* Main Dashboard Panel */}
      <motion.div
        initial={{ rotateY: 15, rotateX: 10, y: 30, opacity: 0 }}
        animate={{ rotateY: 8, rotateX: 6, y: 0, opacity: 1 }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        className="relative w-full h-[88%] rounded-2xl glass-panel border border-white/40 shadow-2xl shadow-blue-500/5 overflow-hidden flex flex-col select-none"
      >
        {/* Mock Window Header */}
        <div className="h-11 border-b border-slate-200/50 px-5 flex items-center justify-between bg-white/40">
          <div className="flex items-center gap-1.5">
            <span className="w-3 h-3 rounded-full bg-slate-200" />
            <span className="w-3 h-3 rounded-full bg-slate-200" />
            <span className="w-3 h-3 rounded-full bg-slate-200" />
          </div>
          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest flex items-center gap-1">
            <Sparkles className="w-3 h-3 text-sky-500 animate-pulse" />
            Xcode Intelligence Platform
          </span>
          <div className="w-12 h-1 bg-slate-200/50 rounded-full" />
        </div>

        {/* Dashboard Grid Content */}
        <div className="flex-1 p-5 grid grid-cols-3 gap-4 bg-white/20">
          {/* Main Chart Card (Left 2 cols) */}
          <div className="col-span-2 rounded-xl bg-white/50 border border-white/60 p-4 flex flex-col justify-between">
            <div className="flex items-center justify-between mb-2">
              <div>
                <p className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">Business Analytics</p>
                <h4 className="text-xl font-display font-extrabold text-slate-800">Growth Visualization</h4>
              </div>
              <span className="text-xs font-semibold text-green-500 bg-green-50 px-2 py-0.5 rounded-full flex items-center gap-0.5">
                <TrendingUp className="w-3 h-3" /> +24.8%
              </span>
            </div>

            {/* Simulated Live Chart */}
            <div className="relative w-full h-32 overflow-hidden mt-2 rounded-lg bg-blue-50/10 border border-blue-50/20">
              <svg className="absolute bottom-0 left-0 w-full h-24 text-primary/10 overflow-visible" preserveAspectRatio="none" viewBox="0 0 300 100">
                <path d={wavePath} fill="currentColor" />
              </svg>
              <svg className="absolute bottom-8 left-0 w-full h-16 text-primary overflow-visible" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" preserveAspectRatio="none" viewBox="0 0 320 60">
                <motion.path
                  d={sparklinePath}
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 2, ease: "easeInOut", delay: 0.5 }}
                />
              </svg>
              {/* Dynamic Scanning Line */}
              <motion.div
                className="absolute top-0 bottom-0 w-[2px] bg-gradient-to-b from-transparent via-sky-400 to-transparent"
                animate={{ left: ["0%", "100%", "0%"] }}
                transition={{ duration: 6, ease: "linear", repeat: Infinity }}
              />
            </div>
          </div>

          {/* Stats Column (Right 1 col) */}
          <div className="flex flex-col gap-4">
            <div className="flex-1 rounded-xl bg-white/50 border border-white/60 p-4 flex flex-col justify-between">
              <span className="p-2 w-fit rounded-lg bg-blue-50 text-primary">
                <Activity className="w-4 h-4" />
              </span>
              <div>
                <p className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">API Status</p>
                <p className="text-base font-display font-bold text-slate-800">Operational</p>
              </div>
            </div>
            <div className="flex-1 rounded-xl bg-white/50 border border-white/60 p-4 flex flex-col justify-between">
              <span className="p-2 w-fit rounded-lg bg-blue-50 text-primary">
                <ShieldCheck className="w-4 h-4" />
              </span>
              <div>
                <p className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">Security</p>
                <p className="text-base font-display font-bold text-slate-800">ISO 27001 Certified</p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Floating Card 1: AI Automation - 98% Efficiency (Top Left) */}
      <motion.div
        animate={{ y: [0, -12, 0] }}
        transition={{ duration: 6, ease: "easeInOut", repeat: Infinity }}
        className="absolute -top-4 -left-6 rounded-xl glass-panel border border-white/70 shadow-xl p-4 flex items-center gap-3.5 max-w-[210px] select-none hover:scale-105 transition-transform duration-300"
      >
        <span className="p-2.5 rounded-lg bg-blue-50 text-primary shadow-inner">
          <Cpu className="w-5 h-5 animate-spin-slow" />
        </span>
        <div>
          <h5 className="text-xs font-bold text-slate-800 leading-tight">AI Automation</h5>
          <p className="text-lg font-display font-extrabold text-primary leading-tight mt-0.5">98%</p>
          <span className="text-[9px] text-slate-400 font-semibold uppercase tracking-wider">Efficiency Gain</span>
        </div>
      </motion.div>

      {/* Floating Card 2: Cloud Active - Performance 99.9% (Bottom Left) */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 7, ease: "easeInOut", repeat: Infinity, delay: 1 }}
        className="absolute -bottom-4 -left-4 rounded-xl glass-panel border border-white/70 shadow-xl p-4 flex items-center gap-3.5 max-w-[200px] select-none hover:scale-105 transition-transform duration-300"
      >
        <span className="p-2.5 rounded-lg bg-sky-50 text-sky-500 shadow-inner">
          <Cloud className="w-5 h-5" />
        </span>
        <div>
          <h5 className="text-xs font-bold text-slate-800 leading-tight">Cloud Active</h5>
          <p className="text-base font-display font-extrabold text-slate-700 leading-tight mt-0.5">99.9%</p>
          <span className="text-[9px] text-sky-500 font-semibold uppercase tracking-wider">Performance SLA</span>
        </div>
      </motion.div>

      {/* Floating Card 3: Smart Systems Online (Top Right) */}
      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 5, ease: "easeInOut", repeat: Infinity, delay: 0.5 }}
        className="absolute top-10 -right-6 rounded-xl glass-panel border border-white/70 shadow-xl p-3.5 flex items-center gap-3 select-none hover:scale-105 transition-transform duration-300"
      >
        <span className="p-2 rounded-lg bg-green-50 text-green-500 flex items-center justify-center">
          <CheckCircle className="w-4 h-4 animate-pulse" />
        </span>
        <div className="flex flex-col">
          <span className="text-xs font-bold text-slate-800">Smart Systems</span>
          <span className="text-[9px] text-green-500 font-bold uppercase tracking-widest mt-0.5">ONLINE</span>
        </div>
      </motion.div>
    </div>
  );
}
