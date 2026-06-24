import React, { useState, useEffect } from "react";
import { Send, CheckCircle2, MessageSquare, Calendar as CalendarIcon, X, Mail, Phone, Globe, MapPin, ArrowRight } from "lucide-react";
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
  const [isModalOpen, setIsModalOpen] = useState(false);

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
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch relative">
      
      {/* Left Column: Simplified Inquiry Form Card (7 columns) */}
      <div className="lg:col-span-7 rounded-3xl bg-white border border-slate-200/50 p-6 sm:p-8 shadow-xl relative overflow-hidden flex flex-col justify-between">
        <div>
          <h3 className="font-display font-extrabold text-2xl text-dark mb-1">
            Start a Project
          </h3>
          <p className="text-[10px] text-slate-400 font-bold mb-6 uppercase tracking-widest">
            Let's build something world-class together
          </p>

          <AnimatePresence mode="wait">
            {formStatus !== "success" ? (
              <motion.form
                key="form"
                onSubmit={handleFormSubmit}
                initial={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="grid grid-cols-1 sm:grid-cols-2 gap-4"
              >
                {/* Name */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">Name *</label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Your name"
                    className="w-full text-sm bg-slate-50/50 border border-slate-200 focus:border-primary focus:bg-white px-4 py-2.5 rounded-xl outline-none transition-all font-medium"
                  />
                </div>

                {/* Email */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">Email *</label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="you@company.com"
                    className="w-full text-sm bg-slate-50/50 border border-slate-200 focus:border-primary focus:bg-white px-4 py-2.5 rounded-xl outline-none transition-all font-medium"
                  />
                </div>

                {/* Company (optional) */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">Company <span className="text-slate-400 font-normal lowercase">(opt)</span></label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    placeholder="Your company"
                    className="w-full text-sm bg-slate-50/50 border border-slate-200 focus:border-primary focus:bg-white px-4 py-2.5 rounded-xl outline-none transition-all font-medium"
                  />
                </div>

                {/* What Are You Trying To Build */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">Service Type *</label>
                  <select
                    name="service"
                    required
                    value={formData.service}
                    onChange={handleInputChange}
                    className="w-full text-sm bg-slate-50/50 border border-slate-200 focus:border-primary focus:bg-white px-4 py-2.5 rounded-xl outline-none transition-all appearance-none cursor-pointer font-medium"
                  >
                    <option value="">Select an option...</option>
                    <option value="launch_product">Launch a new product</option>
                    <option value="modernize_business">Modernize my business</option>
                    <option value="automate_operations">Automate operations</option>
                    <option value="scale_software">Scale existing software</option>
                    <option value="discuss_partnership">Discuss partnership</option>
                  </select>
                </div>

                {/* Budget (User-Filled) */}
                <div className="col-span-1 sm:col-span-2 flex flex-col gap-1.5">
                  <label className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">Estimated Budget *</label>
                  <input
                    type="text"
                    name="budget"
                    required
                    value={formData.budget}
                    onChange={handleInputChange}
                    placeholder="Enter your budget (e.g., $1,200 or ₹1 Lakh)"
                    className="w-full text-sm bg-slate-50/50 border border-slate-200 focus:border-primary focus:bg-white px-4 py-2.5 rounded-xl outline-none transition-all font-medium"
                  />
                </div>

                {/* Message */}
                <div className="col-span-1 sm:col-span-2 flex flex-col gap-1.5">
                  <label className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">Message *</label>
                  <textarea
                    name="message"
                    required
                    rows={3}
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell us about your project goals..."
                    className="w-full text-sm bg-slate-50/50 border border-slate-200 focus:border-primary focus:bg-white px-4 py-2.5 rounded-xl outline-none transition-all resize-none font-medium"
                  />
                </div>

                {/* Submit button */}
                <div className="col-span-1 sm:col-span-2 mt-2 flex items-center justify-between gap-4">
                  <p className="text-[9px] text-slate-400 font-semibold leading-relaxed max-w-[280px]">
                    By submitting, you agree to our privacy policy and secure data handling.
                  </p>
                  <button
                    type="submit"
                    disabled={formStatus === "sending"}
                    className="inline-flex items-center gap-2 bg-primary hover:bg-blue-700 text-white font-semibold text-xs px-5 py-3 rounded-xl shadow-lg shadow-blue-500/10 hover:shadow-blue-600/20 transition-all cursor-pointer select-none shrink-0"
                  >
                    {formStatus === "sending" ? "Sending..." : "Send Inquiry"}
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </motion.form>
            ) : (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="py-12 text-center flex flex-col items-center gap-4"
              >
                <div className="w-14 h-14 rounded-full bg-green-50 flex items-center justify-center text-green-500 border border-green-100 shadow-md">
                  <CheckCircle2 className="w-7 h-7" />
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

        {/* Separator and Blue "Need Quick Assistance?" Banner */}
        {formStatus !== "success" && (
          <div className="mt-6 pt-5 border-t border-slate-100">
            <div className="flex items-center justify-center mb-4">
              <div className="flex-grow border-t border-slate-200/60" />
              <span className="mx-3 text-[9px] font-bold text-slate-400 uppercase tracking-widest">or</span>
              <div className="flex-grow border-t border-slate-200/60" />
            </div>

            <a
              href="tel:+919825511650"
              className="flex flex-col sm:flex-row items-start sm:items-center justify-between p-3.5 bg-blue-50/40 hover:bg-blue-50/70 border border-blue-100/50 rounded-2xl transition-all group gap-3"
            >
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-primary flex items-center justify-center text-white shadow-md shadow-blue-500/10">
                  <Phone className="w-4 h-4" />
                </div>
                <div className="text-left">
                  <span className="text-[9px] font-extrabold text-primary uppercase tracking-wider block leading-none">Need Quick Assistance?</span>
                  <span className="text-xs font-extrabold text-slate-800 block mt-1.5 leading-none">+91 98255 11650</span>
                </div>
              </div>
              <span className="text-[10px] font-bold text-slate-400 group-hover:text-primary transition-colors flex items-center gap-1.5 self-end sm:self-center">
                Immediate discussion • No waiting
                <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
              </span>
            </a>
          </div>
        )}
      </div>

      {/* Right Column: Reach Us Directly Card (5 columns - set to default light glass-panel) */}
      <div className="lg:col-span-5 rounded-3xl glass-panel border border-slate-200/50 p-6 sm:p-8 shadow-xl relative overflow-hidden flex flex-col justify-between min-h-[480px] text-slate-800">
        {/* Soft Glowing Blobs matching the site background */}
        <div className="absolute -top-12 -right-12 w-64 h-64 bg-blue-500/5 rounded-full blur-[80px] pointer-events-none" />
        <div className="absolute -bottom-12 -left-12 w-64 h-64 bg-indigo-500/5 rounded-full blur-[80px] pointer-events-none" />
        
        <div className="relative z-10 flex flex-col gap-6">
          <div>
            <h3 className="font-display font-extrabold text-2xl tracking-tight text-dark">
              Or Reach Us Directly
            </h3>
            <div className="w-10 h-1 bg-gradient-to-r from-primary to-sky-custom rounded-full mt-3" />
          </div>

          <div className="flex flex-col gap-5 mt-2">
            {/* Email */}
            <a
              href="mailto:contact@xcodetech.in"
              className="flex items-center gap-4 group/item hover:translate-x-1 transition-transform"
            >
              <div className="w-9 h-9 rounded-xl bg-slate-50 border border-slate-200/60 group-hover/item:border-primary/50 group-hover/item:bg-blue-50/55 flex items-center justify-center text-slate-500 group-hover/item:text-primary transition-all">
                <Mail className="w-4 h-4" />
              </div>
              <div className="text-left">
                <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest block leading-none">Email Address</span>
                <span className="text-xs sm:text-sm font-semibold text-slate-700 block mt-1.5 leading-none">contact@xcodetech.in</span>
              </div>
            </a>

            {/* Phone */}
            <a
              href="tel:+919825511650"
              className="flex items-center gap-4 group/item hover:translate-x-1 transition-transform"
            >
              <div className="w-9 h-9 rounded-xl bg-slate-50 border border-slate-200/60 group-hover/item:border-primary/50 group-hover/item:bg-blue-50/55 flex items-center justify-center text-slate-500 group-hover/item:text-primary transition-all">
                <Phone className="w-4 h-4" />
              </div>
              <div className="text-left">
                <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest block leading-none">Phone Support</span>
                <span className="text-xs sm:text-sm font-semibold text-slate-700 block mt-1.5 leading-none">+91 98255 11650</span>
              </div>
            </a>

            {/* Website */}
            <a
              href="https://xcodetech.in"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 group/item hover:translate-x-1 transition-transform"
            >
              <div className="w-9 h-9 rounded-xl bg-slate-50 border border-slate-200/60 group-hover/item:border-primary/50 group-hover/item:bg-blue-50/55 flex items-center justify-center text-slate-500 group-hover/item:text-primary transition-all">
                <Globe className="w-4 h-4" />
              </div>
              <div className="text-left">
                <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest block leading-none">Official Website</span>
                <span className="text-xs sm:text-sm font-semibold text-slate-700 block mt-1.5 leading-none">www.xcodetech.in</span>
              </div>
            </a>

            {/* Address */}
            <div className="flex items-center gap-4">
              <div className="w-9 h-9 rounded-xl bg-slate-50 border border-slate-200/60 flex items-center justify-center text-slate-500">
                <MapPin className="w-4 h-4" />
              </div>
              <div className="text-left">
                <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest block leading-none">Headquarters</span>
                <span className="text-xs sm:text-sm font-semibold text-slate-700 block mt-1.5 leading-none">Ahmedabad, Gujarat, India</span>
              </div>
            </div>
          </div>
        </div>

        {/* Book a Strategy Session CTA button */}
        <div className="relative z-10 mt-8">
          <button
            onClick={() => setIsModalOpen(true)}
            className="w-full bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold py-3.5 px-6 rounded-2xl flex items-center justify-center gap-2.5 transition-all shadow-md cursor-pointer"
          >
            <CalendarIcon className="w-4 h-4" />
            Book a 30-min Call
          </button>
        </div>
      </div>

      {/* Calendly Booking Overlay Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-md"
          >
            <motion.div
              initial={{ scale: 0.95, y: 15 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 15 }}
              transition={{ type: "spring", stiffness: 350, damping: 28 }}
              className="relative w-full max-w-4xl bg-white rounded-3xl border border-slate-200 p-5 shadow-2xl flex flex-col justify-between overflow-hidden h-[85vh] max-h-[720px]"
            >
              {/* Modal Header */}
              <div className="flex justify-between items-center border-b border-slate-100 pb-3.5 mb-3.5">
                <div className="flex items-center gap-2.5">
                  <div className="p-1.5 rounded-lg bg-blue-50 text-primary">
                    <CalendarIcon className="w-4.5 h-4.5" />
                  </div>
                  <div>
                    <h4 className="font-display font-extrabold text-sm text-slate-800">Book Discovery Call</h4>
                    <p className="text-[9px] text-slate-400 font-bold uppercase tracking-wider mt-0.5">Strategy Session • Google Meet</p>
                  </div>
                </div>
                
                {/* Close Button */}
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="p-2 rounded-xl bg-slate-50 hover:bg-slate-100 border border-slate-200/50 hover:border-slate-200 text-slate-500 hover:text-slate-800 transition-all cursor-pointer"
                  aria-label="Close scheduler"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Calendly iframe */}
              <div className="w-full flex-grow overflow-hidden rounded-2xl bg-slate-50 border border-slate-200/40">
                <iframe
                  src="https://calendly.com/deeppatel26075/30min?hide_event_details=1&background_color=f8fafc&text_color=0f172a&primary_color=2563eb"
                  width="100%"
                  height="100%"
                  frameBorder="0"
                  className="w-full h-full"
                  title="Select a Date & Time - Calendly"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      
    </div>
  );
}
