"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Globe, Send, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    institution: "",
    email: "",
    message: "",
  });

  const [submitting, setSubmitting] = useState(false);
  const [successMsg, setSuccessMsg] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setSuccessMsg("");
    setErrorMsg("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (res.ok) {
        setSuccessMsg(data.message || "Message sent successfully!");
        setFormData({ name: "", institution: "", email: "", message: "" });
      } else {
        setErrorMsg(data.error || "Failed to send message.");
      }
    } catch (err) {
      setErrorMsg("An unexpected error occurred. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-slate-900 text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Side: Contact Information */}
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
                <span>Contact & Inquiries</span>
              </div>
              <h2 className="font-montserrat font-bold text-3xl sm:text-4xl lg:text-5xl tracking-tight">
                Contact <br />
                <span className="text-[#D9278E]">Oxford Corridor.</span>
              </h2>
              <p className="text-slate-300 text-base sm:text-lg font-normal leading-relaxed mt-4">
                We welcome inquiries from parents, schools, and student delegates. Connect with our team today to learn more about our upcoming programs and conferences.
              </p>
            </div>

            {/* Contact Details Cards */}
            <div className="space-y-4">
              <div className="flex items-start gap-4 p-4.5 rounded-2xl bg-slate-800/60 border border-slate-700/80">
                <div className="p-3.5 rounded-xl bg-[#D9278E]/15 text-[#D9278E] shrink-0">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs text-slate-400 uppercase tracking-wider block">Email Address</span>
                  <a href="mailto:info@oxfordcorridor.com" className="text-base font-semibold text-white hover:text-[#D9278E] transition-colors">
                    info@oxfordcorridor.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4.5 rounded-2xl bg-slate-800/60 border border-slate-700/80">
                <div className="p-3.5 rounded-xl bg-amber-500/15 text-amber-500 shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs text-slate-400 uppercase tracking-wider block">Location & Hub</span>
                  <span className="text-base font-semibold text-white block">Ankara, Turkey</span>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4.5 rounded-2xl bg-slate-800/60 border border-slate-700/80">
                <div className="p-3.5 rounded-xl bg-slate-700 text-slate-200 shrink-0">
                  <Globe className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs text-slate-400 uppercase tracking-wider block">Official Website</span>
                  <a href="https://oxfordcorridor.com" target="_blank" rel="noopener noreferrer" className="text-base font-semibold text-white hover:text-[#D9278E] transition-colors">
                    oxfordcorridor.com
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Side: Modern Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7"
          >
            <div className="bg-slate-800/90 border border-slate-700/80 rounded-3xl p-8 sm:p-12 shadow-2xl backdrop-blur-xl">
              <h3 className="font-montserrat font-bold text-2xl text-white mb-6">
                Submit an Inquiry
              </h3>

              {successMsg && (
                <div className="mb-6 p-4 rounded-xl bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 flex items-center gap-3 text-sm">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                  <span>{successMsg}</span>
                </div>
              )}

              {errorMsg && (
                <div className="mb-6 p-4 rounded-xl bg-rose-500/20 border border-rose-500/40 text-rose-300 flex items-center gap-3 text-sm">
                  <AlertCircle className="w-5 h-5 text-rose-400 shrink-0" />
                  <span>{errorMsg}</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="text-xs font-semibold text-slate-300 uppercase tracking-wider block mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Elena Rossi"
                      className="w-full bg-slate-900/80 border border-slate-700 rounded-xl px-4 py-3.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#D9278E] focus:ring-2 focus:ring-[#D9278E]/30 transition-all"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-slate-300 uppercase tracking-wider block mb-2">
                      School / Organization Name
                    </label>
                    <input
                      type="text"
                      value={formData.institution}
                      onChange={(e) => setFormData({ ...formData, institution: e.target.value })}
                      placeholder="School or Institution Name"
                      className="w-full bg-slate-900/80 border border-slate-700 rounded-xl px-4 py-3.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#D9278E] focus:ring-2 focus:ring-[#D9278E]/30 transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-xs font-semibold text-slate-300 uppercase tracking-wider block mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="elena@oxfordcorridor.com"
                    className="w-full bg-slate-900/80 border border-slate-700 rounded-xl px-4 py-3.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#D9278E] focus:ring-2 focus:ring-[#D9278E]/30 transition-all"
                  />
                </div>

                <div>
                  <label className="text-xs font-semibold text-slate-300 uppercase tracking-wider block mb-2">
                    Your Message *
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="How can Oxford Corridor assist your student or delegation?"
                    className="w-full bg-slate-900/80 border border-slate-700 rounded-xl px-4 py-3.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#D9278E] focus:ring-2 focus:ring-[#D9278E]/30 transition-all resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full bg-[#D9278E] hover:bg-[#be1b78] disabled:opacity-50 text-white font-bold text-sm uppercase py-4 rounded-xl shadow-lg shadow-[#D9278E]/20 transition-all flex items-center justify-center gap-2"
                >
                  {submitting ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <span>Send Inquiry Message</span>
                      <Send className="w-5 h-5" />
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