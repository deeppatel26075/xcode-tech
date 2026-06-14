"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { Magnetic } from "./Animations";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Solutions", href: "/solutions" },
  { label: "Work", href: "/work" },
  { label: "Insights", href: "/insights" },
  { label: "Company", href: "/about" },
  { label: "Contact", href: "/contact" }
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hideSticky, setHideSticky] = useState(false);
  const pathname = usePathname();

  // Scroll lock when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Manage glassmorphism state on scroll
  useEffect(() => {
    const handleScroll = () => {
      const threshold = pathname === "/" ? 400 : 20;
      if (window.scrollY > threshold) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Hide sticky CTA near the bottom of the page (footer/contact section)
      const isNearBottom = window.scrollY > document.documentElement.scrollHeight - window.innerHeight - 700;
      setHideSticky(isNearBottom);
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
              Start Your Project
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

      {/* Mobile Nav Drawer Fullscreen Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="lg:hidden fixed inset-0 z-40 bg-white flex flex-col justify-between p-8 pt-24"
          >
            {/* Navigation links */}
            <div className="flex flex-col gap-8">
              {/* Menu Branding Header */}
              <div className="border-b border-slate-100 pb-6">
                <span className="font-display font-bold text-xl text-dark tracking-tight">Xcode Tech</span>
                <span className="text-[10px] text-primary font-bold uppercase tracking-wider block mt-1">
                  Software Engineering Partner
                </span>
              </div>

              <nav className="flex flex-col gap-6">
                {navLinks.map((link, idx) => {
                  const isActive = pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href));
                  return (
                    <motion.div
                      key={link.href}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.05 + 0.1 }}
                    >
                      <Link
                        href={link.href}
                        onClick={() => setIsOpen(false)}
                        className={`text-3xl font-display font-extrabold transition-colors block ${
                          isActive ? "text-primary" : "text-slate-800 hover:text-primary"
                        }`}
                      >
                        {link.label}
                      </Link>
                    </motion.div>
                  );
                })}
              </nav>
            </div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35 }}
              className="flex flex-col gap-6 border-t border-slate-100 pt-6"
            >
              <Link
                href="/contact"
                onClick={() => setIsOpen(false)}
                className="w-full text-center bg-primary hover:bg-blue-700 text-white text-sm font-semibold py-4 rounded-xl shadow-lg shadow-blue-500/10 transition-all flex items-center justify-center gap-2 min-h-[48px]"
              >
                Start Your Project &rarr;
              </Link>
              <div className="flex justify-between text-[10px] font-bold text-slate-450 uppercase tracking-wider">
                <span>Software • AI • Cloud</span>
                <span>Ahmedabad, India</span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Sticky Mobile CTA (Glassmorphic conversion upgrade) */}
      {showNavbar && pathname !== "/contact" && !isOpen && !hideSticky && (
        <div className="lg:hidden fixed bottom-6 left-6 right-6 z-30">
          <Link
            href="/contact"
            className="w-full bg-primary/95 hover:bg-primary text-white text-xs font-bold py-3.5 px-6 rounded-xl shadow-xl shadow-blue-500/10 flex items-center justify-center gap-2 border border-white/20 backdrop-blur-md min-h-[48px] transition-all"
          >
            Start Your Project &rarr;
          </Link>
        </div>
      )}
    </header>
  );
}
