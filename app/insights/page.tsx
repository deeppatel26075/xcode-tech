"use client";

import React from "react";
import Link from "next/link";
import { blogs } from "../../content/blogs";
import BlogCard from "../../components/BlogCard";
import { FadeIn, StaggerContainer, StaggerItem } from "../../components/Animations";
import { ArrowRight, Calendar, Clock, Sparkles } from "lucide-react";

import SubpageContainer from "../../components/SubpageContainer";

export default function InsightsPage() {
  const latestPost = blogs[0];
  const otherPosts = blogs.slice(1);

  return (
    <SubpageContainer>
      {/* Hero Header */}
      <section className="py-12 relative">
        <div className="max-w-4xl mx-auto text-center">
          <FadeIn direction="up" delay={0.1}>
            <span className="text-xs font-bold text-primary uppercase tracking-widest bg-blue-50/60 border border-blue-100/40 px-3.5 py-1.5 rounded-full inline-block mb-4">
              Xcode Insights
            </span>
          </FadeIn>
          <FadeIn direction="up" delay={0.2}>
            <h1 className="font-display font-extrabold text-4xl sm:text-5xl text-dark tracking-tight leading-tight">
              Technology &amp; Engineering <br />
              <span className="bg-gradient-to-r from-primary to-sky-custom bg-clip-text text-transparent">
                Thoughts &amp; Perspectives
              </span>
            </h1>
          </FadeIn>
          <FadeIn direction="up" delay={0.3}>
            <p className="text-slate-650 text-sm sm:text-base mt-6 max-w-2xl mx-auto leading-relaxed">
              Dive into our analysis of cognitive AI automations, serverless edge frameworks, scalable DevOps infrastructures, and digital transformation paradigms.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Blog list Section */}
      <section className="py-16">
        <div className="w-full flex flex-col gap-12">
          
          {/* Highlighted Latest Post */}
          <FadeIn direction="up" delay={0.1}>
            <div className="group rounded-2xl glass-panel border border-white/30 p-6 sm:p-8 flex flex-col lg:flex-row items-stretch gap-8 glass-panel-hover bg-white/40 backdrop-blur-md">
              
              <div className="flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 text-slate-500 mb-4 text-[11px] font-semibold">
                    <span className="text-primary font-bold uppercase tracking-wider text-[10px] bg-blue-50/60 border border-blue-100/40 px-2.5 py-1 rounded-full">
                      {latestPost.category}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" />
                      {latestPost.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      {latestPost.readTime}
                    </span>
                  </div>

                  <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-dark mb-4 group-hover:text-primary transition-colors leading-tight">
                    <Link href={`/insights/${latestPost.slug}`}>
                      {latestPost.title}
                    </Link>
                  </h2>

                  <p className="text-sm text-slate-600 leading-relaxed max-w-xl mb-6">
                    {latestPost.summary}
                  </p>
                </div>

                <div className="flex items-center justify-between border-t border-white/30 pt-5 mt-4">
                  <div className="flex flex-col text-xs">
                    <span className="font-bold text-slate-700 leading-none">{latestPost.author.name}</span>
                    <span className="text-[10px] text-slate-500 font-semibold mt-0.5 leading-none">{latestPost.author.role}</span>
                  </div>
                  <Link
                    href={`/insights/${latestPost.slug}`}
                    className="text-xs font-bold text-primary group-hover:translate-x-0.5 transition-transform flex items-center gap-1.5"
                  >
                    Read Article <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>

              {/* Decorative side visual */}
              <div className="flex-1 rounded-xl bg-white/40 border border-white/30 backdrop-blur-md p-8 flex flex-col justify-center relative overflow-hidden select-none min-h-[220px]">
                <div className="absolute top-0 right-0 w-36 h-36 bg-blue-500/5 rounded-full blur-2xl" />
                <span className="p-3 w-fit rounded-xl bg-white border border-slate-200 text-primary shadow-sm mb-4">
                  <Sparkles className="w-5 h-5 animate-pulse" />
                </span>
                <p className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">FEATURED INSIGHT</p>
                <h4 className="font-display font-bold text-lg text-slate-800 leading-tight mt-1">Cognitive AI automations are replacing instruction-based scripting.</h4>
              </div>

            </div>
          </FadeIn>

          {/* Other Posts Grid */}
          <div className="border-t border-white/30 pt-12">
            <h3 className="font-display font-bold text-xl text-dark mb-8">All Publications</h3>
            
            <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {otherPosts.map((post) => (
                <StaggerItem key={post.slug}>
                  <BlogCard post={post} />
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>

        </div>
      </section>
    </SubpageContainer>
  );
}
