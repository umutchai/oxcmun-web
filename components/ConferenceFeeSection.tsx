"use client";

import React from "react";
import { motion } from "framer-motion";
import { Calendar, MapPin, CheckCircle2, ArrowRight, Shield, Sparkles } from "lucide-react";

export default function ConferenceFeeSection() {
  return (
    <section id="conference" className="py-12 px-4 md:py-24 md:px-12 bg-slate-900 text-white relative overflow-hidden">
      {/* Subtle Background Lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#D9278E]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-10 sm:mb-16 space-y-4">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center justify-center gap-2 px-4 py-1.5 rounded-full bg-slate-800 border border-slate-700 text-[#D4AF37] text-xs font-bold tracking-wider uppercase"
          >
            <span>Flagship Event • Ankara</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="font-montserrat font-extrabold text-2xl sm:text-3xl md:text-4xl text-white tracking-tight leading-tight"
          >
            Oxford Corridor Model United Nations Ankara <br className="hidden sm:inline" />
            <span className="text-[#D9278E]">for Primary School Students PREMUN</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-slate-300 text-base sm:text-lg font-normal"
          >
            Join young delegates across the country for an unforgettable 1-day conference preceded by comprehensive preparatory training.
          </motion.p>
        </div>

        {/* Pricing & Conference Card Container */}
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-slate-800/90 border-2 border-[#D9278E]/40 rounded-3xl p-5 sm:p-12 shadow-2xl backdrop-blur-xl relative overflow-hidden"
          >
            {/* Top Glow Accent Bar */}
            <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-[#D9278E] via-amber-400 to-[#D9278E]" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">

              {/* Left Column: Event Details & Training Note */}
              <div className="lg:col-span-7 space-y-6">

                <div className="space-y-4">
                  <span className="text-xs font-bold uppercase tracking-widest text-[#D9278E]">
                    Upcoming Conference Details
                  </span>

                  {/* Date Badge */}
                  <div className="flex items-center gap-3 text-lg sm:text-xl font-bold text-white">
                    <div className="p-3 rounded-xl bg-[#D9278E]/20 text-[#D9278E] shrink-0">
                      <Calendar className="w-6 h-6" />
                    </div>
                    <span>24 OCTOBER</span>
                  </div>

                  {/* Location Badge */}
                  <div className="flex items-center gap-3 text-base sm:text-lg font-medium text-slate-200">
                    <div className="p-3 rounded-xl bg-amber-500/20 text-amber-400 shrink-0">
                      <MapPin className="w-6 h-6" />
                    </div>
                    <span>New Park Hotel, Ankara</span>
                  </div>
                </div>

                <hr className="border-slate-700/80" />

                {/* What's Included List */}
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#D9278E] shrink-0 mt-0.5" />
                    <span className="text-sm sm:text-base text-slate-200">
                      Full access to 1-day MUN conference sessions & committees
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#D9278E] shrink-0 mt-0.5" />
                    <span className="text-sm sm:text-base text-slate-200">
                      Official delegate materials, certificate, & conference kit
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 font-bold text-amber-400 shrink-0 mt-0.5" />
                    <span className="text-sm sm:text-base text-amber-200 font-semibold">
                      Includes a three-week preparatory training program for all students
                    </span>
                  </div>
                </div>

              </div>

              {/* Right Column: Registration Action */}
              <div className="lg:col-span-5 bg-slate-900/90 border border-slate-700/80 rounded-2xl p-6 sm:p-8 text-center space-y-6 flex flex-col justify-center items-center shadow-lg">
                <div className="space-y-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#D9278E] block">
                    Delegate Registration
                  </span>
                  <h3 className="font-montserrat font-extrabold text-xl sm:text-2xl text-white">
                    Ready to Participate?
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300">
                    Secure your delegate seat for Oxford Corridor PREMUN Ankara.
                  </p>
                </div>

                <div className="w-full space-y-3 pt-2">
                  <a
                    href="/apply"
                    className="w-full inline-flex items-center justify-center gap-2 bg-[#D9278E] hover:bg-[#be1b78] text-white font-bold text-sm uppercase py-4 rounded-xl shadow-lg shadow-[#D9278E]/30 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-0.5"
                  >
                    <span>Register Now</span>
                    <ArrowRight className="w-5 h-5" />
                  </a>

                  <div className="flex items-center justify-center gap-1.5 text-[11px] text-slate-400">
                    <Shield className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Limited delegate seats available</span>
                  </div>
                </div>

              </div>

            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
