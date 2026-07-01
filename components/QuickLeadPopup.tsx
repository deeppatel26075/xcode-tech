"use client";

import React, { useState, useEffect } from "react";
import { X, PhoneCall, CheckCircle2, Loader2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function QuickLeadPopup() {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
  });
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");

  useEffect(() => {
    // Check if user has already interacted with the popup
    const hasSeen = localStorage.getItem("xcode_quick_lead_seen");
    if (hasSeen === "true") return;

    // Show popup after a 5-second delay
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleClose = () => {
    setIsVisible(false);
    // Suppress showing the popup again for this visitor
    localStorage.setItem("xcode_quick_lead_seen", "true");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name && !formData.phone && !formData.email) return;

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
          message: "Requested a quick callback via popup form.",
        }),
      });

      if (response.ok) {
        setStatus("success");
        // Auto-close after 3 seconds on success
        setTimeout(() => {
          setIsVisible(false);
          localStorage.setItem("xcode_quick_lead_seen", "true");
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

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.95 }}
          transition={{ type: "spring", stiffness: 300, damping: 25 }}
          className="fixed bottom-4 left-4 right-4 sm:left-auto sm:right-6 sm:bottom-6 z-50 w-auto sm:w-[360px] rounded-3xl glass-panel border border-slate-200/50 p-5 shadow-2xl backdrop-blur-md select-none text-slate-800"
          style={{
            background: "rgba(255, 255, 255, 0.85)",
          }}
        >
          {/* Subtle Attention Glow */}
          <div className="absolute top-0 left-1/4 right-1/4 h-[2px] bg-gradient-to-r from-transparent via-primary to-transparent" />

          {/* Close button */}
          <button
            onClick={handleClose}
            className="absolute top-3.5 right-3.5 p-1.5 rounded-xl bg-slate-100/50 hover:bg-slate-100 border border-slate-200/30 text-slate-400 hover:text-slate-700 transition-all cursor-pointer"
            aria-label="Close widget"
          >
            <X className="w-3.5 h-3.5" />
          </button>

          {status !== "success" ? (
            <form onSubmit={handleSubmit} className="flex flex-col gap-4 text-left">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-xl bg-blue-50 border border-blue-100/40 text-primary flex items-center justify-center shadow-sm">
                  <PhoneCall className="w-4 h-4 animate-bounce" style={{ animationDuration: '3s' }} />
                </div>
                <div>
                  <h4 className="font-display font-extrabold text-sm text-dark tracking-tight leading-none">
                    Get a Quick Callback
                  </h4>
                  <p className="text-[9px] text-slate-400 font-bold uppercase tracking-wider mt-1.5">
                    Have a project? Leave your info!
                  </p>
                </div>
              </div>

              <div className="flex flex-col gap-2">
                {/* Name */}
                <div className="flex flex-col gap-1">
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Your Name *"
                    className="w-full text-xs bg-slate-50/50 border border-slate-200/60 focus:border-primary focus:bg-white px-3 py-2 rounded-xl outline-none transition-all font-medium"
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
                    className="w-full text-xs bg-slate-50/50 border border-slate-200/60 focus:border-primary focus:bg-white px-3 py-2 rounded-xl outline-none transition-all font-medium"
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
                    className="w-full text-xs bg-slate-50/50 border border-slate-200/60 focus:border-primary focus:bg-white px-3 py-2 rounded-xl outline-none transition-all font-medium"
                  />
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center justify-between gap-3 mt-1">
                <button
                  type="button"
                  onClick={handleClose}
                  className="text-[10px] font-bold text-slate-400 hover:text-slate-600 transition-colors uppercase tracking-wider cursor-pointer"
                >
                  Skip
                </button>
                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="inline-flex items-center gap-1.5 bg-primary hover:bg-blue-700 text-white font-semibold text-xs px-4 py-2.5 rounded-xl shadow-md shadow-blue-500/10 hover:shadow-blue-600/20 transition-all cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed select-none shrink-0"
                >
                  {status === "submitting" ? (
                    <>
                      <Loader2 className="w-3 h-3 animate-spin" />
                      <span>Submitting...</span>
                    </>
                  ) : (
                    <span>Request Call</span>
                  )}
                </button>
              </div>
            </form>
          ) : (
            <div className="py-6 text-center flex flex-col items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-green-50 flex items-center justify-center text-green-500 border border-green-100 shadow-sm">
                <CheckCircle2 className="w-5 h-5 animate-pulse" />
              </div>
              <h4 className="font-display font-extrabold text-sm text-dark">
                Callback Requested!
              </h4>
              <p className="text-[10px] text-slate-500 max-w-[240px] leading-relaxed">
                Thank you! An engineer will call you back shortly.
              </p>
            </div>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
