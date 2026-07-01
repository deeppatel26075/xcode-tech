import React from "react";
import Link from "next/link";
import { MessageSquare, Mail, Phone, MapPin, Globe, ArrowRight } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white/20 backdrop-blur-lg border-t border-white/20 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
        {/* Company Intro & Full Logo */}
        <div className="flex flex-col gap-6">
          <div className="flex items-center gap-3">
            {/* Full Logo Presentation */}
            <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center shadow-md border border-slate-200/50 overflow-hidden">
              <img src="/logo.jpg" alt="Xcode Tech Logo" className="w-full h-full object-cover" />
            </div>
            <div className="flex flex-col">
              <span className="font-display font-bold text-xl text-dark tracking-tight leading-none">
                Xcode Tech
              </span>
              <span className="text-[10px] text-slate-400 font-semibold uppercase tracking-wider mt-1">
                Software Engineering Partner
              </span>
            </div>
          </div>
          
          <p className="text-sm text-slate-500 leading-relaxed max-w-sm">
            Xcode Tech is a premium software engineering partner building custom software, scalable cloud architectures, and cognitive AI solutions.
          </p>

          <div className="flex flex-col gap-1 text-xs text-slate-400 font-mono mt-1">
            <span className="font-sans font-bold text-dark text-xs">Xcode Tech</span>
            <span>Software Engineering Company</span>
            <span className="lowercase">founder &amp; ceo deep patel</span>
            <span>India</span>
            <span className="mt-0.5 text-primary">contact@xcodetech.in</span>
          </div>

          <div className="flex items-center gap-3 mt-1">
            <a
              href="https://wa.me/919825511650"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-500 hover:text-green-500 hover:border-green-200 transition-colors shadow-sm"
              title="Chat on WhatsApp"
            >
              <MessageSquare className="w-4 h-4" />
            </a>
            <a
              href="mailto:contact@xcodetech.in"
              className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-500 hover:text-primary hover:border-blue-200 transition-colors shadow-sm"
              title="Email Us"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Services Links */}
        <div>
          <h4 className="font-display font-bold text-sm text-dark uppercase tracking-wider mb-6">
            Core Services
          </h4>
          <ul className="flex flex-col gap-3.5">
            {[
              { label: "Custom Software Development", href: "/services#software" },
              { label: "Web Application Development", href: "/services#web" },
              { label: "Mobile App Development", href: "/services#mobile" },
              { label: "AI & Business Automation", href: "/services#ai" },
              { label: "Cloud & DevOps Solutions", href: "/services#cloud" },
              { label: "UI/UX Engineering", href: "/services#uiux" },
              { label: "Cybersecurity Solutions", href: "/services#security" }
            ].map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className="text-xs text-slate-500 hover:text-primary transition-colors flex items-center gap-1 group"
                >
                  <ArrowRight className="w-3 h-3 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-display font-bold text-sm text-dark uppercase tracking-wider mb-6">
            Company
          </h4>
          <ul className="flex flex-col gap-3.5">
            {[
              { label: "Solutions Portfolio", href: "/solutions" },
              { label: "Case Studies / Work", href: "/work" },
              { label: "About Xcode Tech", href: "/about" },
              { label: "Request Consultation", href: "/contact" }
            ].map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className="text-sm text-slate-500 hover:text-primary transition-colors flex items-center gap-1 group"
                >
                  <ArrowRight className="w-3 h-3 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Corporate Address & Contact Details */}
        <div className="flex flex-col gap-6">
          <h4 className="font-display font-bold text-sm text-dark uppercase tracking-wider mb-2">
            Global Office
          </h4>
          
          <div className="flex gap-3 items-start text-sm text-slate-500 leading-relaxed">
            <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold text-slate-700">Xcode Tech HQ</p>
              <p>B Wing, 601, Mondeal Heights,</p>
              <p>Near Novotel Hotel, S.G. Highway,</p>
              <p>Ahmedabad, Gujarat – 380015, India</p>
            </div>
          </div>

          <div className="flex flex-col gap-2.5 border-t border-slate-200/60 pt-4">
            <a
              href="tel:+919825511650"
              className="flex items-center gap-3 text-sm text-slate-500 hover:text-primary transition-colors"
            >
              <Phone className="w-4 h-4 text-primary shrink-0" />
              <span>+91 98255 11650</span>
            </a>
            <a
              href="mailto:contact@xcodetech.in"
              className="flex items-center gap-3 text-sm text-slate-500 hover:text-primary transition-colors"
            >
              <Mail className="w-4 h-4 text-primary shrink-0" />
              <span>contact@xcodetech.in</span>
            </a>
            <div className="flex items-center gap-3 text-sm text-slate-500">
              <Globe className="w-4 h-4 text-primary shrink-0" />
              <span>www.xcodetech.in</span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 border-t border-slate-200/60 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-xs text-slate-400">
          &copy; {currentYear} Xcode Tech. All rights reserved.
        </p>
        <div className="flex gap-6 text-xs text-slate-400">
          <Link href="/privacy" className="hover:text-primary">Privacy Policy</Link>
          <Link href="/terms" className="hover:text-primary">Terms of Service</Link>
          <Link href="/sitemap.xml" className="hover:text-primary">Sitemap</Link>
        </div>
      </div>
    </footer>
  );
}
