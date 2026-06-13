import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, CheckCircle, Calendar, User, Settings, Play } from "lucide-react";
import { projects } from "../../../content/projects";

import SubpageContainer from "../../../components/SubpageContainer";

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function CaseStudyDetailPage({ params }: PageProps) {
  const { id } = await params;
  const project = projects.find((p) => p.id === id);

  if (!project) {
    notFound();
  }

  return (
    <SubpageContainer>
      {/* Detail Header Hero */}
      <section className="py-8 relative">
        <div className="w-full">
          
          <Link
            href="/work"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-500 hover:text-primary transition-colors mb-6 group"
          >
            <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-0.5 transition-transform" />
            Back to Case Studies
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
            <div className="lg:col-span-8">
              <span className="text-[10px] font-extrabold text-primary uppercase tracking-widest bg-blue-50/60 border border-blue-100/40 px-2.5 py-1 rounded-full mb-3 inline-block">
                {project.category}
              </span>
              <h1 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl text-dark tracking-tight leading-tight">
                {project.title} Case Study
              </h1>
              <p className="text-slate-600 text-sm sm:text-base mt-4 max-w-2xl leading-relaxed">
                {project.description}
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* Detail Body */}
      <section className="py-16">
        <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Context: Detailed Writing (8 columns) */}
          <div className="lg:col-span-8 flex flex-col gap-10">
            {/* Context Challenge & Approach */}
            <div className="prose prose-slate max-w-none">
              <h2 className="font-display font-bold text-2xl text-dark mb-4">Project Overview</h2>
              <p className="text-slate-650 text-sm leading-relaxed mb-6">
                {project.longDescription}
              </p>

              <h2 className="font-display font-bold text-2xl text-dark mt-8 mb-4">Key Integrations</h2>
              <p className="text-slate-650 text-sm leading-relaxed mb-4">
                To fulfill client expectations, we constructed an elastic database grid coupled with custom REST API configurations. The system is designed to trigger automated actions dynamically while caching heavy queries.
              </p>
            </div>

            {/* Features list */}
            <div>
              <h3 className="font-display font-bold text-lg text-dark mb-4">Core Platform Capabilities</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {project.features.map((feature) => (
                  <div key={feature} className="flex items-start gap-3 rounded-xl border border-white/30 p-4 bg-white/40 backdrop-blur-md">
                    <span className="p-1 rounded-lg bg-blue-50/60 text-primary shrink-0 mt-0.5">
                      <CheckCircle className="w-4 h-4" />
                    </span>
                    <div>
                      <h4 className="text-xs font-bold text-slate-800">{feature}</h4>
                      <p className="text-[11px] text-slate-500 mt-1 leading-normal">Fully optimized, high-availability module built for security.</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Project Outcomes */}
            <div className="rounded-2xl bg-slate-900 text-white p-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-3xl" />
              <h3 className="font-display font-bold text-lg mb-6 flex items-center gap-1.5">
                <Play className="w-5 h-5 text-primary shrink-0" />
                Measurable Outcomes &amp; Results
              </h3>
              <ul className="flex flex-col gap-4">
                {project.results.map((res, index) => (
                  <li key={index} className="flex items-start gap-3 text-xs leading-relaxed text-slate-300">
                    <span className="w-5 h-5 rounded-full bg-slate-800 text-primary flex items-center justify-center font-bold text-[10px] shrink-0 mt-0.5 border border-slate-700">
                      0{index + 1}
                    </span>
                    <span>{res}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>

          {/* Right Context: Metadata Sidebar (4 columns) */}
          <div className="lg:col-span-4 rounded-2xl border border-white/30 bg-white/40 backdrop-blur-md p-6 flex flex-col gap-6 lg:sticky lg:top-24">
            <div>
              <h3 className="font-display font-bold text-sm text-dark uppercase tracking-wider mb-4 border-b border-white/30 pb-3">
                Project Profile
              </h3>

              <div className="flex flex-col gap-4">
                {/* Client */}
                <div className="flex gap-3 items-start text-xs">
                  <User className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                  <div>
                    <p className="font-bold text-slate-700 uppercase tracking-wider text-[9px]">Client Company</p>
                    <p className="text-slate-600 font-semibold mt-0.5">{project.client}</p>
                  </div>
                </div>

                {/* Duration */}
                <div className="flex gap-3 items-start text-xs">
                  <Calendar className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                  <div>
                    <p className="font-bold text-slate-700 uppercase tracking-wider text-[9px]">Project Duration</p>
                    <p className="text-slate-600 font-semibold mt-0.5">{project.duration}</p>
                  </div>
                </div>

                {/* Services Provided */}
                <div className="flex gap-3 items-start text-xs">
                  <Settings className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                  <div>
                    <p className="font-bold text-slate-700 uppercase tracking-wider text-[9px]">Services Deployed</p>
                    <div className="flex flex-wrap gap-1.5 mt-1">
                      {project.services.map((serv) => (
                        <span key={serv} className="text-[10px] bg-white/60 border border-white/30 text-slate-700 font-semibold px-2 py-0.5 rounded-md">
                          {serv}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar Metrics Widget */}
            <div className="bg-white/50 border border-white/30 backdrop-blur-md rounded-xl p-5 shadow-inner">
              <span className="text-[9px] font-extrabold text-primary uppercase tracking-widest">Live Integration Performance</span>
              <div className="grid grid-cols-2 gap-3 mt-4">
                {project.dashboardStats.slice(0, 2).map((stat) => (
                  <div key={stat.label}>
                    <p className="text-[8px] font-bold text-slate-400 uppercase tracking-wider">{stat.label}</p>
                    <p className="text-xl font-display font-extrabold text-dark mt-0.5">{stat.value}</p>
                  </div>
                ))}
              </div>
            </div>

            <Link
              href="/contact"
              className="w-full text-center bg-primary hover:bg-blue-700 text-white font-semibold text-xs py-3.5 rounded-xl shadow-lg shadow-blue-500/10 transition-all"
            >
              Start Project Like This
            </Link>
          </div>

        </div>
      </section>
    </SubpageContainer>
  );
}
