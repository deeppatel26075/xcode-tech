import React, { useState, useEffect } from "react";
import { Send, CheckCircle2, MessageSquare, Calendar as CalendarIcon } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function ContactForm() {
  // Contact Form States
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    country: "",
    email: "",
    phone: "",
    service: "",
    budget: "",
    message: ""
  });
  const [formStatus, setFormStatus] = useState<"idle" | "sending" | "success">("idle");

  // Pre-fill service from URL query param if present
  useEffect(() => {
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      const serviceParam = params.get("service");
      const validServices = ["launch_product", "modernize_business", "automate_operations", "scale_software", "discuss_partnership"];
      if (serviceParam && validServices.includes(serviceParam)) {
        setFormData((prev) => ({ ...prev, service: serviceParam }));
      }
    }
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus("sending");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (response.ok) {
        setFormStatus("success");
      } else {
        alert(data.error || "Failed to submit project brief. Please try again.");
        setFormStatus("idle");
      }
    } catch (error) {
      console.error("Submission error:", error);
      alert("An unexpected error occurred. Please check your connection and try again.");
      setFormStatus("idle");
    }
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
      
      {/* Left Column: Premium Form (7 columns) */}
      <div className="lg:col-span-7 rounded-2xl glass-panel border border-slate-200/50 p-8 shadow-xl relative overflow-hidden">
        {/* Subtle background gradient overlay */}
        <div className="absolute top-0 right-0 w-48 h-48 bg-blue-500/5 rounded-full blur-3xl -z-10" />

        <h3 className="font-display font-extrabold text-2xl text-dark mb-2">
          Project Brief
        </h3>
        <p className="text-xs text-slate-400 font-semibold mb-8 uppercase tracking-wider">
          Let's build something world-class together
        </p>

        <AnimatePresence mode="wait">
          {formStatus !== "success" ? (
            <motion.form
              key="form"
              onSubmit={handleFormSubmit}
              initial={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-5"
            >
              {/* Name */}
              <div className="flex flex-col gap-2">
                <label className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">Full Name *</label>
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="John Doe"
                  className="w-full text-sm bg-slate-50/50 border border-slate-200 focus:border-primary focus:bg-white px-4 py-3 rounded-xl outline-none transition-all"
                />
              </div>

              {/* Company */}
              <div className="flex flex-col gap-2">
                <label className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">Company Name</label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleInputChange}
                  placeholder="Acme Corp"
                  className="w-full text-sm bg-slate-50/50 border border-slate-200 focus:border-primary focus:bg-white px-4 py-3 rounded-xl outline-none transition-all"
                />
              </div>

              {/* Email */}
              <div className="flex flex-col gap-2">
                <label className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">Business Email *</label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="john@company.com"
                  className="w-full text-sm bg-slate-50/50 border border-slate-200 focus:border-primary focus:bg-white px-4 py-3 rounded-xl outline-none transition-all"
                />
              </div>

              {/* Phone */}
              <div className="flex flex-col gap-2">
                <label className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">Phone Number</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="+1 (555) 000-0000"
                  className="w-full text-sm bg-slate-50/50 border border-slate-200 focus:border-primary focus:bg-white px-4 py-3 rounded-xl outline-none transition-all"
                />
              </div>

              {/* Country */}
              <div className="flex flex-col gap-2">
                <label className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">Country</label>
                <input
                  type="text"
                  name="country"
                  value={formData.country}
                  onChange={handleInputChange}
                  placeholder="India / USA"
                  className="w-full text-sm bg-slate-50/50 border border-slate-200 focus:border-primary focus:bg-white px-4 py-3 rounded-xl outline-none transition-all"
                />
              </div>

              {/* What Are You Trying To Build */}
              <div className="flex flex-col gap-2">
                <label className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">What Are You Trying To Build? *</label>
                <select
                  name="service"
                  required
                  value={formData.service}
                  onChange={handleInputChange}
                  className="w-full text-sm bg-slate-50/50 border border-slate-200 focus:border-primary focus:bg-white px-4 py-3 rounded-xl outline-none transition-all appearance-none cursor-pointer"
                >
                  <option value="">Select an option...</option>
                  <option value="launch_product">Launch a new product</option>
                  <option value="modernize_business">Modernize my business</option>
                  <option value="automate_operations">Automate operations</option>
                  <option value="scale_software">Scale existing software</option>
                  <option value="discuss_partnership">Discuss partnership</option>
                </select>
              </div>

              {/* Investment Level */}
              <div className="col-span-1 sm:col-span-2 flex flex-col gap-2">
                <label className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">Investment Level *</label>
                <select
                  name="budget"
                  required
                  value={formData.budget}
                  onChange={handleInputChange}
                  className="w-full text-sm bg-slate-50/50 border border-slate-200 focus:border-primary focus:bg-white px-4 py-3 rounded-xl outline-none transition-all appearance-none cursor-pointer"
                >
                  <option value="">Select Investment Level...</option>
                  <option value="starter">Starter Solution</option>
                  <option value="growth">Growth Solution</option>
                  <option value="professional">Professional Build</option>
                  <option value="enterprise">Enterprise Partnership</option>
                </select>
              </div>

              {/* Message */}
              <div className="col-span-1 sm:col-span-2 flex flex-col gap-2">
                <label className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">Message *</label>
                <textarea
                  name="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Describe your project goals, timelines, and specifications..."
                  className="w-full text-sm bg-slate-50/50 border border-slate-200 focus:border-primary focus:bg-white px-4 py-3 rounded-xl outline-none transition-all resize-none"
                />
              </div>

              {/* Submit button */}
              <div className="col-span-1 sm:col-span-2 mt-4 flex items-center justify-between gap-4">
                <p className="text-[10px] text-slate-400 font-semibold leading-relaxed max-w-[280px]">
                  By submitting, you agree to our privacy policy and secure data handling.
                </p>
                <button
                  type="submit"
                  disabled={formStatus === "sending"}
                  className="inline-flex items-center gap-2 bg-primary hover:bg-blue-700 text-white font-semibold text-xs px-6 py-3.5 rounded-xl shadow-lg shadow-blue-500/10 transition-all cursor-pointer select-none shrink-0"
                >
                  {formStatus === "sending" ? "Sending..." : "Submit Inquiry"}
                  <Send className="w-3.5 h-3.5" />
                </button>
              </div>
            </motion.form>
          ) : (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="py-16 text-center flex flex-col items-center gap-4"
            >
              <div className="w-16 h-16 rounded-full bg-green-50 flex items-center justify-center text-green-500 border border-green-100 shadow-md">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h4 className="font-display font-extrabold text-xl text-dark">
                Inquiry Received Successfully!
              </h4>
              <p className="text-sm text-slate-500 max-w-sm leading-relaxed">
                Thank you for reaching out, <strong className="text-slate-800">{formData.name}</strong>. An Xcode Tech engineer will follow up with you from <strong className="text-primary font-bold">admin@xcodetech.in</strong> at <strong className="text-slate-800">{formData.email}</strong> within 12 hours.
              </p>
              <button
                onClick={() => setFormStatus("idle")}
                className="mt-4 text-xs font-bold text-primary hover:text-blue-700 underline"
              >
                Send another message
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Right Column: Live Calendly Meeting Scheduler + WhatsApp (5 columns) */}
      <div className="lg:col-span-5 flex flex-col gap-8">
        
        {/* Real Calendly Inline Scheduler */}
        <div className="rounded-2xl glass-panel border border-slate-200/50 p-4 shadow-xl flex flex-col justify-between relative overflow-hidden h-[600px] w-full">
          
          <div className="flex items-center justify-between border-b border-slate-200/40 pb-3 mb-3">
            <div className="flex items-center gap-2">
              <span className="p-1.5 rounded-lg bg-blue-50 text-primary">
                <CalendarIcon className="w-4 h-4" />
              </span>
              <span className="text-xs font-bold text-slate-800">Book Discovery Call</span>
            </div>
            <span className="text-[8px] font-bold bg-slate-100 border border-slate-200 px-2 py-0.5 rounded-full text-slate-500">
              GOOGLE MEET ENABLED
            </span>
          </div>

          <div className="w-full flex-grow overflow-hidden rounded-xl bg-white/40">
            <iframe
              src="https://calendly.com/deeppatel26075/30min?hide_event_details=1&background_color=ffffff&text_color=0f172a&primary_color=2563eb"
              width="100%"
              height="100%"
              frameBorder="0"
              className="w-full h-full min-h-[480px]"
              title="Select a Date & Time - Calendly"
            />
          </div>
        </div>

        {/* WhatsApp Direct contact card */}
        <div className="rounded-2xl bg-gradient-to-tr from-green-500/5 to-emerald-500/10 border border-green-200/50 p-6 flex items-center justify-between shadow-sm">
          <div>
            <h4 className="font-display font-bold text-slate-800 text-sm">Need immediate support?</h4>
            <p className="text-xs text-slate-500 mt-1 max-w-[200px] leading-relaxed">
              Chat directly with our team on WhatsApp for instant project estimates.
            </p>
          </div>
          <a
            href="https://wa.me/919825511650"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 bg-green-500 hover:bg-green-600 text-white font-semibold text-xs px-4.5 py-3 rounded-xl transition-all shadow-md shadow-green-500/10 shrink-0"
          >
            <MessageSquare className="w-4 h-4" />
            Chat Now
          </a>
        </div>

      </div>
      
    </div>
  );
}
