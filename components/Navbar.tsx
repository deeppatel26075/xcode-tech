"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { Magnetic } from "./Animations";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Solutions", href: "/solutions" },
  { label: "Work", href: "/work" },
  { label: "Technology", href: "/technology" },
  { label: "Insights", href: "/insights" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" }
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();


  // Manage glassmorphism state on scroll
  useEffect(() => {
    const handleScroll = () => {
      const threshold = pathname === "/" ? 400 : 20;
      if (window.scrollY > threshold) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    // Call handler immediately to set initial state
    handleScroll();
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]);

  const isHomePage = pathname === "/";
  const showNavbar = !isHomePage || scrolled;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        showNavbar
          ? scrolled
            ? "glass-navbar py-3 shadow-[0_4px_30px_rgba(0,0,0,0.02)] opacity-100 translate-y-0"
            : "bg-transparent py-5 opacity-100 translate-y-0"
          : "opacity-0 -translate-y-4 pointer-events-none py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Sleek Minimal Logo Version */}
        <Link href="/" className="flex items-center gap-2.5 group">
          <div className="relative w-8 h-8 rounded-lg bg-gradient-to-tr from-primary to-sky-custom flex items-center justify-center shadow-lg shadow-blue-500/10 overflow-hidden">
            <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity" />
            {/* Minimal XT Bracket Design */}
            <span className="font-display font-bold text-sm text-white tracking-tighter">XT</span>
          </div>
          <span className="font-display font-semibold text-lg text-dark tracking-tight">
            Xcode <span className="text-primary font-bold">Tech</span>
          </span>
        </Link>

        {/* Desktop Links */}
        <nav className="hidden lg:flex items-center gap-1.5">
          {navLinks.map((link) => {
            const isActive = pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href));
            return (
              <Link
                key={link.href}
                href={link.href}
                className="relative px-3.5 py-2 text-sm font-medium transition-colors text-slate-600 hover:text-primary rounded-full"
              >
                {isActive && (
                  <motion.span
                    layoutId="activeNavIndicator"
                    className="absolute inset-0 bg-blue-50/70 border border-blue-100/50 rounded-full -z-10"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* CTA Button (Magnetic) */}
        <div className="hidden lg:block">
          <Magnetic>
            <Link
              href="/contact"
              className="inline-flex items-center gap-1.5 bg-primary hover:bg-blue-700 text-white text-xs font-semibold px-5 py-2.5 rounded-full shadow-lg shadow-blue-500/20 hover:shadow-blue-600/30 transition-all duration-300 group"
            >
              Start Project
              <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
          </Magnetic>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden p-2 text-dark hover:text-primary transition-colors focus:outline-none"
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Nav Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="lg:hidden border-t border-slate-100 bg-white/95 backdrop-blur-xl shadow-lg"
          >
            <nav className="flex flex-col p-6 gap-4">
              {navLinks.map((link) => {
                const isActive = pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href));
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`text-base font-semibold transition-colors py-1 ${
                      isActive ? "text-primary border-l-2 border-primary pl-2" : "text-slate-600 hover:text-primary"
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
              <Link
                href="/contact"
                onClick={() => setIsOpen(false)}
                className="mt-2 w-full text-center bg-primary hover:bg-blue-700 text-white text-sm font-semibold py-3 rounded-full shadow-lg shadow-blue-500/10 transition-all"
              >
                Start Project
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
