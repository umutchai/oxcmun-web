"use client";

import React from "react";
import { motion } from "framer-motion";
import { Calendar, MapPin, Award, Users, ChevronRight, FileText } from "lucide-react";

export default function OXCMUNSection() {
  return (
    <section id="oxcmun" className="py-24 bg-slate-900 text-white relative overflow-hidden">
      {/* Glow Effects */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#D9278E]/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-2xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-gradient-to-br from-slate-800/90 to-slate-900/90 border border-slate-700/80 rounded-3xl p-8 sm:p-12 lg:p-16 shadow-2xl backdrop-blur-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-7 space-y-6"
            >
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#D9278E]/20 border border-[#D9278E]/40 text-[#D9278E] text-xs font-bold tracking-wider uppercase">
                <Award className="w-4 h-4" />
                <span>Signature Flagship Conference</span>
              </div>


              <h2 className="font-montserrat font-extrabold text-3xl sm:text-4xl lg:text-5xl tracking-tight leading-tight">
                OXCMUN & PREMUN <br />
                <span className="text-[#D9278E]">Diplomacy Conference</span>
              </h2>


              <p className="text-slate-300 text-base sm:text-lg leading-relaxed font-normal">
                Oxford Corridor's flagship Model United Nations conference brings together primary and secondary school delegates for an unparalleled diplomatic experience. Engaging debates, structured parliamentary procedure, and hands-on global problem solving.
              </p>


              {/* Event Quick Specs */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 text-sm text-slate-200">
                <div className="flex items-center gap-3 bg-slate-800/60 p-3.5 rounded-xl border border-slate-700">
                  <Calendar className="w-5 h-5 text-[#D9278E] shrink-0" />
                  <div>
                    <span className="text-xs text-slate-400 block">Upcoming Edition</span>
                    <span className="font-semibold">OXCMUN 2026</span>
                  </div>
                </div>


                <div className="flex items-center gap-3 bg-slate-800/60 p-3.5 rounded-xl border border-slate-700">
                  <MapPin className="w-5 h-5 text-[#D9278E] shrink-0" />
                  <div>
                    <span className="text-xs text-slate-400 block">Venue</span>
                    <span className="font-semibold">New Park Hotel, Ankara</span>
                  </div>
                </div>
              </div>


              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-4">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 bg-[#D9278E] hover:bg-[#be1b78] text-white font-bold text-sm uppercase px-8 py-3.5 rounded-full shadow-lg shadow-[#D9278E]/30 transition-all transform hover:-translate-y-0.5"
                >
                  <span>Apply as Delegation</span>
                  <ChevronRight className="w-4 h-4" />
                </a>


                <a
                  href="/oxcpremun booklet.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 font-bold text-sm uppercase px-6 py-3.5 rounded-full transition-all"
                >
                  <FileText className="w-4 h-4 text-[#D4AF37]" />
                  <span>Download Booklet</span>
                </a>
              </div>
            </motion.div>


            {/* Right Card Feature */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-5"
            >
            <div className="bg-slate-800/90 rounded-2xl p-6 sm:p-8 border border-slate-700 space-y-6 shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#D9278E]/10 rounded-bl-full pointer-events-none" />

              <div className="flex items-center gap-3">
                <Users className="w-6 h-6 text-[#D4AF37]" />
                <h3 className="font-montserrat font-bold text-xl text-white">
                  Delegate Empowerment
                </h3>
              </div>

              <div className="space-y-4 text-sm text-slate-300">
                <div className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-[#D9278E] mt-2 shrink-0" />
                  <p><strong className="text-white">Primary School Track (Grades 2-5):</strong> Specialized committee formats tailored to young debaters.</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-[#D4AF37] mt-2 shrink-0" />
                  <p><strong className="text-white">English Language Debate:</strong> Elevates vocabulary, research skills, and public speaking confidence.</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-[#D9278E] mt-2 shrink-0" />
                  <p><strong className="text-white">Mentorship & Guidance:</strong> Experienced chairs providing constructive feedback throughout.</p>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-700 text-center">
                <span className="text-xs text-slate-400 uppercase tracking-widest block mb-1">
                  Oxford Corridor Educational Philosophy
                </span>
                <p className="text-sm font-semibold italic text-slate-200">
                  "Content can be delivered, experience must be designed."
                </p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </div>
  </section>
  );
}