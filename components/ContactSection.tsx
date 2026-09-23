"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Globe, Phone, Send, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [submitting, setSubmitting] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setShowToast(false);
    setErrorMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (res.ok && data.success) {
        setToastMessage(data.message || "Your message has been delivered to our team. We will get back to you shortly.");
        setShowToast(true);
        setFormData({ name: "", email: "", subject: "", message: "" });

        // Hide toast automatically after 6 seconds
        setTimeout(() => {
          setShowToast(false);
        }, 6000);
      } else {
        setErrorMessage(data.error || "Failed to send your message. Please try again.");
      }
    } catch (err) {
      setErrorMessage("An unexpected error occurred. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-slate-900 text-white relative overflow-hidden">
      {/* Dynamic Background Accents */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-[#D9278E]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 -right-20 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Floating Green Success Toast Notification */}
        {showToast && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20 }}
            className="mb-8 p-4 sm:p-5 rounded-2xl bg-emerald-950/90 border border-emerald-500/50 text-emerald-200 shadow-2xl backdrop-blur-xl flex items-center justify-between gap-4 max-w-2xl mx-auto"
          >
            <div className="flex items-center gap-3">
              <div className="p-2 bg-emerald-500/20 text-emerald-400 rounded-full shrink-0">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-white text-base">Message Sent!</h4>
                <p className="text-emerald-300 text-sm">{toastMessage}</p>
              </div>
            </div>
            <button
              onClick={() => setShowToast(false)}
              className="text-emerald-400 hover:text-white text-xs font-semibold uppercase tracking-wider px-3 py-1.5 rounded-lg bg-emerald-900/50 hover:bg-emerald-900 transition-colors shrink-0"
            >
              Dismiss
            </button>
          </motion.div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">

          {/* Left Side: Corporate Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 space-y-8"
          >
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-800 border border-slate-700 text-[#D9278E] text-xs font-bold tracking-wider uppercase mb-4">
                <Mail className="w-4 h-4" />
                <span>CONTACT US</span>
              </div>
              <h2 className="font-serif font-extrabold text-3xl sm:text-4xl lg:text-5xl tracking-tight leading-tight">
                Get In Touch <br />
                <span className="text-[#D9278E]">OXCMUN Ankara</span>
              </h2>
              <p className="text-slate-300 text-base sm:text-lg font-normal leading-relaxed mt-4">
                Have questions about delegation registrations, conference schedules, or partnership opportunities? Reach out to our executive team.
              </p>
            </div>

            {/* Contact Details Info Cards - Vertically Centered Icons */}
            <div className="space-y-4">

              {/* 1. Official Email */}
              <div className="flex items-center gap-4 p-4 sm:p-4.5 rounded-2xl bg-slate-800/60 border border-slate-700/80 hover:border-[#D9278E]/50 transition-colors">
                <div className="w-12 h-12 shrink-0 flex items-center justify-center rounded-xl bg-[#D9278E]/15 text-[#D9278E] self-center">
                  <Mail className="w-6 h-6" />
                </div>
                <div className="flex flex-col justify-center">
                  <span className="text-xs text-slate-400 uppercase tracking-wider block font-semibold">OFFICIAL EMAIL</span>
                  <a href="mailto:info@oxcmunankara.com" className="text-base font-bold text-white hover:text-[#D9278E] transition-colors block leading-snug">
                    info@oxcmunankara.com
                  </a>
                  <a href="mailto:pelin@oxfordcorridor.com" className="text-xs font-medium text-slate-400 hover:text-white transition-colors block pt-0.5">
                    pelin@oxfordcorridor.com
                  </a>
                </div>
              </div>

              {/* 2. Phone Number */}
              <div className="flex items-center gap-4 p-4 sm:p-4.5 rounded-2xl bg-slate-800/60 border border-slate-700/80 hover:border-[#D9278E]/50 transition-colors">
                <div className="w-12 h-12 shrink-0 flex items-center justify-center rounded-xl bg-emerald-500/15 text-emerald-400 self-center">
                  <Phone className="w-6 h-6" />
                </div>
                <div className="flex flex-col justify-center">
                  <span className="text-xs text-slate-400 uppercase tracking-wider block font-semibold">PHONE NUMBER</span>
                  <a href="tel:05394256167" className="text-base font-bold text-white hover:text-emerald-400 transition-colors block leading-snug">
                    +90 539 425 61 67
                  </a>
                </div>
              </div>

              {/* 3. Location */}
              <div className="flex items-center gap-4 p-4 sm:p-4.5 rounded-2xl bg-slate-800/60 border border-slate-700/80 hover:border-[#D9278E]/50 transition-colors">
                <div className="w-12 h-12 shrink-0 flex items-center justify-center rounded-xl bg-amber-500/15 text-amber-500 self-center">
                  <MapPin className="w-6 h-6" />
                </div>
                <div className="flex flex-col justify-center">
                  <span className="text-xs text-slate-400 uppercase tracking-wider block font-semibold">LOCATION</span>
                  <span className="text-base font-bold text-white block leading-snug">Ankara, Turkey</span>
                </div>
              </div>

              {/* 4. Official Website */}
              <div className="flex items-center gap-4 p-4 sm:p-4.5 rounded-2xl bg-slate-800/60 border border-slate-700/80 hover:border-[#D9278E]/50 transition-colors">
                <div className="w-12 h-12 shrink-0 flex items-center justify-center rounded-xl bg-blue-500/15 text-blue-400 self-center">
                  <Globe className="w-6 h-6" />
                </div>
                <div className="flex flex-col justify-center">
                  <span className="text-xs text-slate-400 uppercase tracking-wider block font-semibold">OFFICIAL WEBSITE</span>
                  <a href="https://oxcmunankara.com" target="_blank" rel="noopener noreferrer" className="text-base font-bold text-white hover:text-[#D9278E] transition-colors block leading-snug">
                    oxcmunankara.com
                  </a>
                </div>
              </div>

            </div>
          </motion.div>

          {/* Right Side: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7"
          >
            <div className="bg-slate-800/90 border border-slate-700/80 rounded-3xl p-6 sm:p-10 lg:p-12 shadow-2xl backdrop-blur-xl">
              <h3 className="font-serif font-bold text-2xl sm:text-3xl text-white mb-2">
                Send Us a Message
              </h3>
              <p className="text-slate-400 text-sm mb-8">
                Fill out the form below to direct your questions and inquiries to our executive team.
              </p>

              {errorMessage && (
                <div className="mb-6 p-4 rounded-xl bg-rose-500/20 border border-rose-500/40 text-rose-300 flex items-center gap-3 text-sm">
                  <AlertCircle className="w-5 h-5 text-rose-400 shrink-0" />
                  <span>{errorMessage}</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5">

                {/* 1. Full Name */}
                <div>
                  <label className="text-xs font-bold text-slate-300 uppercase tracking-wider block mb-2">
                    FULL NAME <span className="text-[#D9278E]">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Your Full Name"
                    className="w-full bg-slate-900/90 border border-slate-700 rounded-xl px-4 py-3.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#D9278E] focus:ring-2 focus:ring-[#D9278E]/30 transition-all"
                  />
                </div>

                {/* 2. Email Address */}
                <div>
                  <label className="text-xs font-bold text-slate-300 uppercase tracking-wider block mb-2">
                    EMAIL ADDRESS <span className="text-[#D9278E]">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="example@domain.com"
                    className="w-full bg-slate-900/90 border border-slate-700 rounded-xl px-4 py-3.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#D9278E] focus:ring-2 focus:ring-[#D9278E]/30 transition-all"
                  />
                </div>

                {/* 3. Subject */}
                <div>
                  <label className="text-xs font-bold text-slate-300 uppercase tracking-wider block mb-2">
                    SUBJECT <span className="text-[#D9278E]">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="Subject of your message"
                    className="w-full bg-slate-900/90 border border-slate-700 rounded-xl px-4 py-3.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#D9278E] focus:ring-2 focus:ring-[#D9278E]/30 transition-all"
                  />
                </div>

                {/* 4. Your Message */}
                <div>
                  <label className="text-xs font-bold text-slate-300 uppercase tracking-wider block mb-2">
                    YOUR MESSAGE <span className="text-[#D9278E]">*</span>
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Write your question or message here..."
                    className="w-full bg-slate-900/90 border border-slate-700 rounded-xl px-4 py-3.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#D9278E] focus:ring-2 focus:ring-[#D9278E]/30 transition-all resize-none"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full bg-[#D9278E] hover:bg-[#be1b78] disabled:opacity-50 text-white font-bold text-sm uppercase tracking-wider py-4 rounded-xl shadow-lg shadow-[#D9278E]/30 hover:shadow-2xl transition-all flex items-center justify-center gap-2 transform hover:-translate-y-0.5 cursor-pointer"
                >
                  {submitting ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <span>SEND MESSAGE</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}