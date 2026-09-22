"use client";

import React from "react";
import { Calendar, MapPin, Clock, Users, ArrowRight, Hotel, ShieldCheck } from "lucide-react";

interface EventCardProps {
  onOpenRegister?: () => void;
}

export default function EventCard({ onOpenRegister }: EventCardProps) {
  return (
    <section id="events" className="py-28 text-slate-900 relative overflow-hidden">
      <div className="max-w-[1650px] mx-auto px-6 sm:px-12 lg:px-16 xl:px-20 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto space-y-5 mb-20">
          <div className="inline-flex items-center px-5 py-2 rounded-full bg-white/70 backdrop-blur-lg border border-white/50 text-slate-900 text-xs sm:text-sm font-black tracking-widest uppercase shadow-xl">
            <span>UPCOMING CONFERENCE 2026</span>
          </div>

          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-tight">
            OXCPREMUN <span className="text-[#D9278E]">Ankara Conference</span>
          </h2>

          <p className="text-lg sm:text-xl text-slate-700 font-medium leading-relaxed">
            Join young delegates across the region for an extraordinary two-day Model United Nations experience.
          </p>
        </div>

        {/* FEATURED MAGNIFICENT ANKARA EVENT CARD WITH GLASSMORPHISM & GOLD BORDERS */}
        <div className="w-full">
          <div className="bg-white/70 backdrop-blur-lg rounded-[2.5rem] border-2 border-white/60 shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden grid grid-cols-1 lg:grid-cols-12 relative">
            
            {/* LEFT COLUMN: Dark Luxury Banner */}
            <div className="lg:col-span-5 bg-slate-950 p-10 sm:p-14 text-white flex flex-col justify-between relative overflow-hidden border-b lg:border-b-0 lg:border-r-2 border-slate-800 backdrop-blur-md">
              <div className="relative z-10 space-y-8">
                {/* Official Tag */}
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-[#D9278E]/20 text-[#D9278E] border border-[#D9278E]/40 text-xs sm:text-sm font-black uppercase tracking-widest shadow-md">
                  <span>Official Flagship Event</span>
                </div>

                {/* Big Date Counter */}
                <div>
                  <span className="text-[#D9278E] font-display text-6xl sm:text-7xl lg:text-8xl font-black block leading-none mb-3 drop-shadow-md">
                    24-25
                  </span>
                  <span className="text-2xl sm:text-3xl font-black uppercase tracking-widest text-slate-100 block">
                    October 2026
                  </span>
                  <span className="text-xs sm:text-sm font-bold text-[#D9278E] uppercase tracking-wider block mt-1">
                    Ankara, Turkey
                  </span>
                </div>

                {/* Venue Details */}
                <div className="space-y-4 pt-8 border-t border-slate-800">
                  <div className="flex items-center gap-4 text-slate-200 text-base">
                    <div className="w-12 h-12 rounded-2xl bg-[#D9278E]/20 border border-[#D9278E]/40 text-[#D9278E] flex items-center justify-center shrink-0">
                      <Hotel className="w-6 h-6 text-[#D9278E]" />
                    </div>
                    <div>
                      <strong className="text-white block font-black text-xl">New Park Hotel</strong>
                      <span className="text-xs sm:text-sm text-slate-300 font-medium">Luxury 5-Star Conference Venue</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 text-slate-200 text-base">
                    <div className="w-12 h-12 rounded-2xl bg-[#D9278E]/20 border border-[#D9278E]/40 text-[#D9278E] flex items-center justify-center shrink-0">
                      <MapPin className="w-6 h-6 text-[#D9278E]" />
                    </div>
                    <div>
                      <strong className="text-white block font-black text-xl">Ankara, Turkey</strong>
                      <span className="text-xs sm:text-sm text-slate-300 font-medium">Capital City Delegate Assembly</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom Tag */}
              <div className="relative z-10 pt-10 mt-8 border-t border-slate-800 flex items-center justify-between text-xs sm:text-sm text-slate-300 font-extrabold">
                <span className="flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  Primary Level (Grades 2 – 5)
                </span>
                <span className="text-[#D9278E] font-black">OXCPREMUN</span>
              </div>
            </div>

            {/* RIGHT COLUMN: Event Content (bg-white/70 backdrop-blur-lg) */}
            <div className="lg:col-span-7 p-10 sm:p-14 flex flex-col justify-between space-y-10 bg-white/70 backdrop-blur-lg">
              
              <div className="space-y-6">
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <span className="text-xs sm:text-sm font-black uppercase tracking-wider text-[#D9278E] bg-white/80 px-4 py-2 rounded-xl border border-[#D9278E]/30 shadow-xs">
                    Primary Level Conference
                  </span>
                  <span className="text-xs sm:text-sm font-bold text-slate-700 bg-white/80 px-3.5 py-1.5 rounded-lg border border-slate-200">
                    Limited Seat Availability
                  </span>
                </div>

                <h3 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 font-display">
                  OXCPREMUN '26 Ankara Edition
                </h3>

                <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-medium">
                  Every element of the conference has been thoughtfully designed to create a truly special experience for young learners. OXCMUN provides an opportunity to discover new abilities, express ideas confidently, and build lifelong memories.
                </p>
              </div>

              {/* Event Features Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-2">
                <div className="p-6 rounded-2xl bg-white/60 border border-white/50 shadow-md">
                  <div className="flex items-center gap-3 text-slate-900 font-black text-lg">
                    <Clock className="w-6 h-6 text-[#D9278E]" />
                    <span>2 Full Days</span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 mt-1 font-medium">
                    Structured committee sessions, debates & gala ceremony.
                  </p>
                </div>

                <div className="p-6 rounded-2xl bg-white/60 border border-white/50 shadow-md">
                  <div className="flex items-center gap-3 text-slate-900 font-black text-lg">
                    <Users className="w-6 h-6 text-[#D9278E]" />
                    <span>Small Committees</span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 mt-1 font-medium">
                    Focused group sizes for maximum speaking time.
                  </p>
                </div>
              </div>

              {/* Action Button Trigger Area */}
              <div className="pt-8 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-6">
                <div>
                  <span className="text-xs sm:text-sm text-slate-500 block font-bold">Ready to participate?</span>
                  <span className="text-base sm:text-lg font-black text-slate-900">Application Open for Schools & Individuals</span>
                </div>

                <button
                  onClick={onOpenRegister}
                  className="w-full sm:w-auto bg-[#D9278E] hover:bg-[#C01F7A] text-white font-black text-base px-9 py-4 rounded-full shadow-xl shadow-[#D9278E]/20 transition-all duration-300 active:scale-95 flex items-center justify-center gap-2.5 shrink-0 uppercase tracking-wide"
                >
                  <span className="text-white font-black">Register Now</span>
                  <ArrowRight className="w-5 h-5 text-white" />
                </button>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
