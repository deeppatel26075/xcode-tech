import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Calendar, Clock, Share2, Sparkles } from "lucide-react";
import { blogs } from "../../../content/blogs";

interface PageProps {
  params: Promise<{ slug: string }>;
}

import SubpageContainer from "../../../components/SubpageContainer";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function BlogDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const post = blogs.find((b) => b.slug === slug);

  if (!post) {
    notFound();
  }

  // Pick up to 2 other posts as "Read Next" suggestions
  const readNext = blogs.filter((b) => b.slug !== slug).slice(0, 2);

  return (
    <SubpageContainer>
      {/* Blog Hero Header */}
      <section className="py-8 relative">
        <div className="w-full">
          
          <Link
            href="/insights"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-505 hover:text-primary transition-colors mb-6 group"
          >
            <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-0.5 transition-transform" />
            Back to Insights
          </Link>

          <div className="flex items-center gap-3 text-slate-500 mb-4 text-[11px] font-semibold">
            <span className="text-primary font-bold uppercase tracking-wider text-[10px] bg-blue-50/60 border border-blue-100/40 px-2.5 py-1 rounded-full">
              {post.category}
            </span>
            <span className="flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5" />
              {post.date}
            </span>
            <span className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5" />
              {post.readTime}
            </span>
          </div>

          <h1 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl text-dark tracking-tight leading-tight mb-6">
            {post.title}
          </h1>

          {/* Author Card */}
          <div className="flex flex-col text-xs border-t border-white/30 pt-6">
            <span className="font-bold text-slate-700">{post.author.name}</span>
            <span className="text-[10px] text-slate-500 font-semibold mt-0.5">{post.author.role}</span>
          </div>

        </div>
      </section>

      {/* Blog Content body */}
      <section className="py-16">
        <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Main Article Body (8 columns) */}
          <div className="lg:col-span-8 flex flex-col gap-8">
            <article className="prose prose-slate max-w-none prose-h2:font-display prose-h2:font-bold prose-h2:text-xl prose-h2:text-dark prose-h2:mt-8 prose-h2:mb-4 prose-p:text-slate-700 prose-p:text-sm prose-p:leading-relaxed prose-p:mb-5 prose-ul:list-disc prose-ul:pl-5 prose-ul:text-xs prose-ul:text-slate-650 prose-ul:space-y-2 prose-blockquote:border-l-4 prose-blockquote:border-primary prose-blockquote:pl-4 prose-blockquote:italic prose-blockquote:my-6">
              <div dangerouslySetInnerHTML={{ __html: post.content }} />
            </article>
          </div>

          {/* Sidebar controls (4 columns) */}
          <div className="lg:col-span-4 rounded-2xl border border-white/30 bg-white/40 backdrop-blur-md p-5 flex flex-col gap-5 lg:sticky lg:top-24">
            <h4 className="font-display font-bold text-xs text-dark uppercase tracking-wider border-b border-white/30 pb-2.5">
              Share Article
            </h4>
            <div className="flex gap-2">
              <button className="flex-1 py-2 px-3 border border-white/40 bg-white/60 rounded-lg text-xs font-semibold text-slate-700 hover:border-primary/50 transition-colors flex items-center justify-center gap-1.5 cursor-pointer">
                <Share2 className="w-3.5 h-3.5" />
                Copy Link
              </button>
            </div>

            {/* AI Assistant Callout */}
            <div className="bg-gradient-to-tr from-blue-500/5 to-indigo-500/5 border border-blue-200/30 rounded-xl p-4 mt-2">
              <span className="flex items-center gap-1 text-[10px] font-bold text-primary uppercase tracking-wider mb-2">
                <Sparkles className="w-3.5 h-3.5 text-primary" />
                Cognitive Assist
              </span>
              <p className="text-[11px] text-slate-600 leading-normal">
                Want to learn how this topic applies to your operations? Book a project discovery session with our engineers.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* Read Next Section */}
      <section className="py-16 border-t border-white/30">
        <div className="w-full">
          <h3 className="font-display font-bold text-lg text-dark mb-8">Related Publications</h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {readNext.map((nextPost) => (
              <div key={nextPost.slug} className="bg-white/40 border border-white/30 backdrop-blur-md rounded-2xl p-6 hover:shadow-md transition-all flex flex-col justify-between">
                <div>
                  <span className="text-[9px] font-bold text-primary uppercase tracking-wider">{nextPost.category}</span>
                  <h4 className="font-display font-bold text-sm text-dark hover:text-primary transition-colors leading-snug mt-2">
                    <Link href={`/insights/${nextPost.slug}`}>{nextPost.title}</Link>
                  </h4>
                  <p className="text-[11px] text-slate-500 mt-2 line-clamp-2 leading-relaxed">{nextPost.summary}</p>
                </div>
                <Link
                  href={`/insights/${nextPost.slug}`}
                  className="text-xs font-bold text-primary hover:text-blue-700 mt-4 inline-flex items-center gap-1"
                >
                  Read More <ArrowLeft className="w-3 h-3 rotate-180" />
                </Link>
              </div>
            ))}
          </div>

        </div>
      </section>
    </SubpageContainer>
  );
}
