"use client";

import React, { useState } from "react";
import { Send, CheckCircle2, MessageSquare, Calendar as CalendarIcon, Clock, Check } from "lucide-react";
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

  // Cal.com Mock Scheduler States
  const [selectedDate, setSelectedDate] = useState<number | null>(15); // Default June 15
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [meetingBooked, setMeetingBooked] = useState(false);

  const availableTimes = ["10:30 AM", "1:00 PM", "3:30 PM", "5:00 PM"];
  const daysInMonth = Array.from({ length: 30 }, (_, i) => i + 1);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus("sending");
    setTimeout(() => {
      setFormStatus("success");
    }, 1500);
  };

  const handleBookMeeting = () => {
    if (selectedDate && selectedTime) {
      setMeetingBooked(true);
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

              {/* Project Type */}
              <div className="flex flex-col gap-2">
                <label className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">Project Type *</label>
                <select
                  name="service"
                  required
                  value={formData.service}
                  onChange={handleInputChange}
                  className="w-full text-sm bg-slate-50/50 border border-slate-200 focus:border-primary focus:bg-white px-4 py-3 rounded-xl outline-none transition-all appearance-none cursor-pointer"
                >
                  <option value="">Select Project Type...</option>
                  <option value="startup_product">Startup Product</option>
                  <option value="business_software">Business Software</option>
                  <option value="ai_solution">AI Solution</option>
                  <option value="ecommerce_platform">Ecommerce Platform</option>
                  <option value="enterprise_system">Enterprise System</option>
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
                Thank you for reaching out, <strong className="text-slate-800">{formData.name}</strong>. An Xcode tech director will follow up with you at <strong className="text-slate-800">{formData.email}</strong> within 12 hours.
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

      {/* Right Column: Dynamic Meeting Scheduler + WhatsApp (5 columns) */}
      <div className="lg:col-span-5 flex flex-col gap-8">
        
        {/* Cal.com Style Mockup Scheduler */}
        <div className="rounded-2xl glass-panel border border-slate-200/50 p-6 shadow-xl flex flex-col justify-between relative overflow-hidden">
          
          <div className="flex items-center justify-between border-b border-slate-200/40 pb-4 mb-4">
            <div className="flex items-center gap-2">
              <span className="p-1.5 rounded-lg bg-blue-50 text-primary">
                <CalendarIcon className="w-4 h-4" />
              </span>
              <span className="text-xs font-bold text-slate-800">Book Discovery Call</span>
            </div>
            <span className="text-[8px] font-bold bg-slate-100 border border-slate-200 px-2 py-0.5 rounded-full text-slate-500">
              30 MINUTE CONSULTATION
            </span>
          </div>

          <AnimatePresence mode="wait">
            {!meetingBooked ? (
              <motion.div key="scheduler" className="flex flex-col gap-4">
                <p className="text-xs text-slate-500 leading-relaxed mb-1">
                  Schedule a direct 1-on-1 strategy sync with our engineering lead. Pick a date & time.
                </p>

                {/* Calendar Days grid */}
                <div>
                  <div className="flex justify-between items-center text-[10px] font-bold text-slate-400 mb-2 uppercase tracking-wider">
                    <span>June 2026</span>
                    <span>Mon - Fri Slots Only</span>
                  </div>
                  <div className="grid grid-cols-7 gap-1.5 text-center text-xs">
                    {["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"].map((d) => (
                      <span key={d} className="font-semibold text-slate-400 py-1 text-[10px] uppercase">
                        {d}
                      </span>
                    ))}
                    {/* Placeholder pads for Sunday offsets */}
                    <span className="text-slate-200 py-1.5 font-light">31</span>
                    {daysInMonth.map((day) => {
                      // Simple mock block weekends (assume Sun is 31, 7, 14, 21, 28)
                      const isWeekend = day % 7 === 6 || day % 7 === 0;
                      return (
                        <button
                          key={day}
                          onClick={() => !isWeekend && setSelectedDate(day)}
                          disabled={isWeekend}
                          className={`py-1.5 rounded-lg font-semibold transition-colors flex items-center justify-center ${
                            isWeekend
                              ? "text-slate-300 cursor-not-allowed"
                              : selectedDate === day
                              ? "bg-primary text-white shadow-md shadow-blue-500/15"
                              : "bg-slate-50 hover:bg-blue-50/50 text-slate-700"
                          }`}
                        >
                          {day}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Time Slots */}
                <div>
                  <p className="text-[10px] font-bold text-slate-400 mb-2 uppercase tracking-wider flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-slate-400" />
                    Available Times (Asia/Kolkata)
                  </p>
                  <div className="grid grid-cols-2 gap-2">
                    {availableTimes.map((time) => (
                      <button
                        key={time}
                        onClick={() => setSelectedTime(time)}
                        className={`py-2 px-3 border rounded-xl text-xs font-semibold text-center transition-colors ${
                          selectedTime === time
                            ? "bg-primary text-white border-primary shadow-sm"
                            : "border-slate-200 bg-white text-slate-600 hover:border-primary/50"
                        }`}
                      >
                        {time}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Confirm Button */}
                <button
                  disabled={!selectedDate || !selectedTime}
                  onClick={handleBookMeeting}
                  className="w-full mt-2 bg-slate-900 hover:bg-slate-800 disabled:bg-slate-100 disabled:text-slate-300 text-white text-xs font-bold py-3 rounded-xl transition-all cursor-pointer flex items-center justify-center gap-2 shadow-md shadow-slate-900/10"
                >
                  Confirm Booking
                </button>
              </motion.div>
            ) : (
              <motion.div
                key="booked"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="py-12 text-center flex flex-col items-center gap-4"
              >
                <div className="w-12 h-12 rounded-full bg-green-50 flex items-center justify-center text-green-500 border border-green-100 shadow-sm">
                  <Check className="w-6 h-6" />
                </div>
                <h4 className="font-display font-extrabold text-base text-dark">
                  Meeting Confirmed!
                </h4>
                <p className="text-xs text-slate-500 leading-relaxed max-w-xs">
                  Your 30-min discovery call is scheduled for <strong className="text-slate-700">June {selectedDate}, 2026 at {selectedTime}</strong> (Asia/Kolkata timezone). Calendar invite has been sent.
                </p>
                <button
                  onClick={() => {
                    setMeetingBooked(false);
                    setSelectedTime(null);
                  }}
                  className="mt-2 text-xs font-bold text-primary hover:text-blue-700 underline"
                >
                  Reschedule meeting
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* WhatsApp Direct contact card */}
        <div className="rounded-2xl bg-gradient-to-tr from-green-500/5 to-emerald-500/10 border border-green-200/50 p-6 flex items-center justify-between shadow-sm">
          <div>
            <h4 className="font-display font-bold text-slate-800 text-sm">Need immediate support?</h4>
            <p className="text-xs text-slate-500 mt-1 max-w-[200px] leading-relaxed">
              Chat directly with our director on WhatsApp for instant project estimates.
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
