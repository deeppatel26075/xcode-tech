"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

const navLinks = [
  { label: "About us", href: "/about" },
  { label: "Features", href: "/services" },
  { label: "Solutions", href: "/solutions" },
  { label: "Technology", href: "/technology" },
  { label: "Blogs", href: "/insights" },
  { label: "Contacts", href: "/contact" }
];

export default function GlassHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="flex items-center justify-between relative z-20 pb-6 border-b border-white/10 w-full">
      {/* Logo */}
      <Link href="/" className="flex items-center gap-2 group">
        <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-primary to-sky-custom flex items-center justify-center shadow-lg shadow-blue-500/10">
          <span className="font-display font-extrabold text-sm text-white tracking-tighter">XT</span>
        </div>
        <span className="font-display font-semibold text-lg text-dark tracking-tight">
          Xcode <span className="text-primary font-bold">Tech</span>
        </span>
      </Link>

      {/* Nav Links */}
      <nav className="hidden md:flex items-center gap-1">
        {navLinks.map((link) => (
          <Link
            key={link.label}
            href={link.href}
            className="px-4 py-2 text-xs font-semibold text-slate-700 hover:text-primary transition-colors rounded-full hover:bg-white/20"
          >
            {link.label}
          </Link>
        ))}
      </nav>

      {/* CTA Button */}
      <div className="hidden md:block">
        <Link
          href="/contact"
          className="bg-white/95 hover:bg-white text-dark text-xs font-bold px-5 py-2.5 rounded-full shadow-md border border-slate-200/50 hover:shadow-lg transition-all"
        >
          Sign Up
        </Link>
      </div>

      {/* Mobile Menu Button */}
      <button
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        className="md:hidden p-2 text-dark hover:text-primary transition-colors focus:outline-none"
        aria-label="Toggle menu"
      >
        {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
      </button>

      {/* Mobile Overlay Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute top-16 left-0 right-0 bg-white/95 backdrop-blur-xl border border-slate-200/60 p-6 rounded-2xl shadow-xl z-50 flex flex-col gap-4 md:hidden"
          >
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-semibold text-slate-700 hover:text-primary py-1 border-b border-slate-100"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center bg-primary text-white text-xs font-bold py-3 rounded-full mt-2"
            >
              Sign Up
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
