"use client";

import React from "react";
import { motion } from "framer-motion";
import { HelpCircle, Sparkles, Lightbulb, Users } from "lucide-react";

export default function PremunSection() {
  return (
    <section id="premun" className="py-12 px-4 md:py-24 md:px-12 bg-slate-900 text-white relative overflow-hidden">
      {/* Background Decorative Gradients */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#D9278E]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-[#D4AF37]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center justify-center gap-2 px-4 py-1.5 rounded-full bg-slate-800 border border-slate-700 text-[#D9278E] text-xs font-bold tracking-wider uppercase mb-4"
          >
            <span>Primary Model United Nations</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-montserrat font-extrabold text-3xl sm:text-4xl lg:text-5xl tracking-tight leading-tight"
          >
            Empowering Young Learners <br />
            <span className="text-[#D9278E]">From Primary School Onward</span>
          </motion.h2>
        </div>

        {/* 2-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {/* Card 1: What is PREMUN? */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-slate-800/80 border border-slate-700/80 rounded-3xl p-8 sm:p-10 shadow-xl backdrop-blur-sm flex flex-col justify-between hover:border-[#D9278E]/50 transition-all duration-300 group"
          >
            <div>
              <div className="w-14 h-14 rounded-2xl bg-[#D9278E]/15 border border-[#D9278E]/30 flex items-center justify-center text-[#D9278E] mb-6 group-hover:scale-110 transition-transform">
                <HelpCircle className="w-7 h-7" />
              </div>
              <h3 className="font-montserrat font-bold text-2xl sm:text-3xl text-white mb-4">
                What is PREMUN?
              </h3>
              <p className="text-slate-300 text-base sm:text-lg leading-relaxed font-normal">
                PREMUN (Primary Model United Nations) is a specialized Model United Nations simulation designed specifically for primary and middle school students. It introduces young learners to global issues, public speaking, diplomacy, and debate in an engaging, age-appropriate environment.
              </p>
            </div>
            <div className="mt-8 pt-6 border-t border-slate-700/60 flex items-center gap-3 text-slate-400 text-sm font-semibold">
              <Users className="w-5 h-5 text-[#D9278E]" />
              <span>Tailored for Primary & Middle School Students</span>
            </div>
          </motion.div>

          {/* Card 2: Why Primary? */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="bg-slate-800/80 border border-slate-700/80 rounded-3xl p-8 sm:p-10 shadow-xl backdrop-blur-sm flex flex-col justify-between hover:border-[#D4AF37]/50 transition-all duration-300 group"
          >
            <div>
              <div className="w-14 h-14 rounded-2xl bg-[#D4AF37]/15 border border-[#D4AF37]/30 flex items-center justify-center text-[#D4AF37] mb-6 group-hover:scale-110 transition-transform">
                <Lightbulb className="w-7 h-7" />
              </div>
              <h3 className="font-montserrat font-bold text-2xl sm:text-3xl text-white mb-4">
                Why Primary?
              </h3>
              <p className="text-slate-300 text-base sm:text-lg leading-relaxed font-normal">
                Starting early builds critical life skills before high school. Young students naturally possess curiosity and openness; PREMUN channels these traits into structured thinking, confidence in speaking English, and a global perspective that lasts a lifetime.
              </p>
            </div>
            <div className="mt-8 pt-6 border-t border-slate-700/60 flex items-center text-slate-400 text-sm font-semibold">
              <span>Building Lifelong Global Mindsets</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
