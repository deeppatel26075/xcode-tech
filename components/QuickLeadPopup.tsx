"use client";

import React, { useState, useEffect } from "react";
import { X, PhoneCall, CheckCircle2, Loader2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function QuickLeadPopup() {
  const [isVisible, setIsVisible] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
  });
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");

  useEffect(() => {
    // Show popup after a 5-second delay on every page load
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleMinimize = () => {
    setIsMinimized(true);
  };

  const handlePermanentClose = (e: React.MouseEvent) => {
    e.stopPropagation(); // Prevent expanding the form when clicking close
    setIsVisible(false);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;

    setStatus("submitting");
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          isQuickLead: true,
          service: "quick_lead",
          budget: "N/A",
          message: "Requested a quick callback via mobile-optimized popup form.",
        }),
      });

      if (response.ok) {
        setStatus("success");
        // Auto-close after 3 seconds on success
        setTimeout(() => {
          setIsVisible(false);
        }, 3000);
      } else {
        alert("Failed to submit request. Please try again.");
        setStatus("idle");
      }
    } catch (error) {
      console.error("Submission error:", error);
      alert("An unexpected error occurred. Please check your connection.");
      setStatus("idle");
    }
  };

  if (!isVisible) return null;

  return (
    <AnimatePresence mode="wait">
      {isMinimized ? (
        // Minimized State: Beautiful glassmorphic floating call bubble (FAB)
        <motion.div
          key="minimized-fab"
          initial={{ scale: 0, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0, opacity: 0, y: 20 }}
          transition={{ type: "spring", stiffness: 400, damping: 25 }}
          onClick={() => setIsMinimized(false)}
          className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 w-12 h-12 rounded-full glass-panel flex items-center justify-center shadow-2xl border border-white/40 cursor-pointer select-none group text-primary"
          style={{
            background: "rgba(255, 255, 255, 0.55)",
            backdropFilter: "blur(12px)",
            WebkitBackdropFilter: "blur(12px)",
          }}
        >
          {/* Pulsing sky-blue ring animation */}
          <span className="absolute inset-0 w-full h-full rounded-full bg-primary/20 animate-ping" style={{ animationDuration: '3s' }} />
          
          <PhoneCall className="w-5 h-5 relative z-10 group-hover:scale-115 transition-transform duration-300" />
          
          {/* Close button to dismiss permanently */}
          <button
            onClick={handlePermanentClose}
            className="absolute -top-1.5 -right-1.5 w-5 h-5 rounded-full bg-white text-slate-500 hover:text-slate-800 border border-slate-200 shadow-md flex items-center justify-center transition-all"
            title="Close permanently"
          >
            <X className="w-3 h-3" />
          </button>
        </motion.div>
      ) : (
        // Expanded State: Translucent Frosted Glass Card with Cloud Color Blobs
        <motion.div
          key="expanded-form"
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.95 }}
          transition={{ type: "spring", stiffness: 350, damping: 26 }}
          className="fixed bottom-4 left-4 right-4 sm:left-auto sm:right-6 sm:bottom-6 z-50 w-auto sm:w-[340px] max-w-[calc(100vw-32px)] sm:max-w-[340px] rounded-3xl glass-panel border border-white/50 p-4 sm:p-5 shadow-2xl select-none text-slate-800 overflow-hidden"
          style={{
            background: "rgba(255, 255, 255, 0.45)",
            backdropFilter: "blur(24px)",
            WebkitBackdropFilter: "blur(24px)",
          }}
        >
          {/* Internal blurred sky-cloud blobs for backdrop depth */}
          <div className="absolute -top-10 -left-10 w-32 h-32 bg-sky-300/35 rounded-full blur-[35px] pointer-events-none -z-10" />
          <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-blue-500/15 rounded-full blur-[35px] pointer-events-none -z-10" />

          {/* Top accent glow strip */}
          <div className="absolute top-0 left-1/4 right-1/4 h-[2px] bg-gradient-to-r from-transparent via-primary to-transparent" />

          {/* Minimize button (X) */}
          <button
            onClick={handleMinimize}
            className="absolute top-3.5 right-3.5 p-1.5 rounded-xl bg-white/40 hover:bg-white/80 border border-white/30 text-slate-500 hover:text-slate-800 transition-all cursor-pointer"
            aria-label="Minimize form"
          >
            <X className="w-3.5 h-3.5" />
          </button>

          {status !== "success" ? (
            <form onSubmit={handleSubmit} className="flex flex-col gap-3 text-left relative z-10">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-xl bg-white/60 border border-white/40 text-primary flex items-center justify-center shadow-sm">
                  <PhoneCall className="w-4 h-4 animate-bounce" style={{ animationDuration: '4s' }} />
                </div>
                <div>
                  <h4 className="font-display font-extrabold text-xs sm:text-sm text-dark tracking-tight leading-none">
                    Request a Callback
                  </h4>
                  <p className="text-[9px] text-slate-500 font-bold uppercase tracking-wider mt-1.5">
                    Have a query? We will call you
                  </p>
                </div>
              </div>

              <div className="flex flex-col gap-2 mt-1">
                {/* Name */}
                <div className="flex flex-col gap-1">
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Your Name *"
                    className="w-full text-base sm:text-xs bg-white/30 border border-white/40 placeholder-slate-500 focus:border-primary focus:bg-white/80 px-3 py-2 rounded-xl outline-none transition-all font-medium shadow-sm"
                  />
                </div>

                {/* Mobile Number */}
                <div className="flex flex-col gap-1">
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="Mobile Number *"
                    className="w-full text-base sm:text-xs bg-white/30 border border-white/40 placeholder-slate-500 focus:border-primary focus:bg-white/80 px-3 py-2 rounded-xl outline-none transition-all font-medium shadow-sm"
                  />
                </div>

                {/* Email (Optional) */}
                <div className="flex flex-col gap-1">
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Email Address (Optional)"
                    className="w-full text-base sm:text-xs bg-white/30 border border-white/40 placeholder-slate-500 focus:border-primary focus:bg-white/80 px-3 py-2 rounded-xl outline-none transition-all font-medium shadow-sm"
                  />
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center justify-between gap-3 mt-1 pt-1 border-t border-white/20">
                <button
                  type="button"
                  onClick={handleMinimize}
                  className="text-[10px] font-bold text-slate-500 hover:text-slate-800 transition-colors uppercase tracking-wider cursor-pointer"
                >
                  Skip
                </button>
                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="inline-flex items-center gap-1.5 bg-primary hover:bg-blue-700 text-white font-semibold text-xs px-4 py-2 rounded-xl shadow-md shadow-blue-500/10 hover:shadow-blue-600/20 transition-all cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed select-none shrink-0"
                >
                  {status === "submitting" ? (
                    <>
                      <Loader2 className="w-3 h-3 animate-spin" />
                      <span>Requesting...</span>
                    </>
                  ) : (
                    <span>Call Me Back</span>
                  )}
                </button>
              </div>
            </form>
          ) : (
            <div className="py-5 text-center flex flex-col items-center gap-3 relative z-10">
              <div className="w-10 h-10 rounded-full bg-green-50/70 backdrop-blur-sm flex items-center justify-center text-green-500 border border-green-150 shadow-sm">
                <CheckCircle2 className="w-5 h-5 animate-pulse" />
              </div>
              <h4 className="font-display font-extrabold text-sm text-dark leading-none">
                Callback Requested!
              </h4>
              <p className="text-[10px] text-slate-600 max-w-[220px] leading-relaxed">
                Thank you! An Xcode Tech engineer will call you back shortly.
              </p>
            </div>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
