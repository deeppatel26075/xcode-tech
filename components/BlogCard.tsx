"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Calendar, Clock } from "lucide-react";
import { BlogPost } from "../content/blogs";

interface BlogCardProps {
  post: BlogPost;
}

export default function BlogCard({ post }: BlogCardProps) {
  return (
    <article className="group h-full rounded-2xl glass-panel border border-slate-200/50 p-6 flex flex-col justify-between glass-panel-hover">
      <div>
        {/* Post Metadata Header */}
        <div className="flex items-center gap-3.5 text-slate-400 mb-4 text-[11px] font-semibold">
          <span className="text-primary font-bold uppercase tracking-wider text-[10px] bg-blue-50 border border-blue-100/50 px-2.5 py-1 rounded-full">
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

        {/* Post Title */}
        <h3 className="font-display font-bold text-lg text-dark group-hover:text-primary transition-colors leading-snug mb-3">
          <Link href={`/insights/${post.slug}`}>
            {post.title}
          </Link>
        </h3>

        {/* Post Summary */}
        <p className="text-xs text-slate-500 leading-relaxed mb-6">
          {post.summary}
        </p>
      </div>

      {/* Author and Read More Action */}
      <div className="flex items-center justify-between border-t border-slate-100 pt-5 mt-4">
        <div className="flex flex-col">
          <span className="text-xs font-bold text-slate-700 leading-none">{post.author.name}</span>
          <span className="text-[9px] text-slate-400 font-semibold leading-none mt-0.5">{post.author.role}</span>
        </div>

        <Link
          href={`/insights/${post.slug}`}
          className="text-xs font-bold text-primary group-hover:translate-x-0.5 transition-transform flex items-center gap-1"
        >
          Read <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    </article>
  );
}
