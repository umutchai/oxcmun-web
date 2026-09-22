"use client";

import React from "react";
import { Award, Crown, Sparkles, Globe, Quote, Star } from "lucide-react";

export default function Ambassadors() {
  const ambassadors = [
    {
      name: "Victoria Sterling",
      role: "Delegate Ambassador • Primary Grade 5",
      country: "United Kingdom",
      flag: "🇬🇧",
      quote:
        "Representing my country in English debate helped me express my ideas without fear. PREMUN gave me true confidence in public speaking!",
      badge: "Best Speaker Award",
    },
    {
      name: "Kenzo Takahashi",
      role: "Delegate Ambassador • Primary Grade 4",
      country: "Japan",
      flag: "🇯🇵",
      quote:
        "Drafting resolutions with delegates from different schools taught me how essential teamwork and empathy are when solving global issues.",
      badge: "Outstanding Delegate",
    },
    {
      name: "Sofia Rossi",
      role: "Delegate Ambassador • Primary Grade 5",
      country: "Italy",
      flag: "🇮🇹",
      quote:
        "The committee environment was so welcoming and inspiring. I made lifelong friends while practicing diplomatic negotiation skills.",
      badge: "Honorable Mention",
    },
    {
      name: "Liam O'Connor",
      role: "Delegate Ambassador • Primary Grade 3",
      country: "Ireland",
      flag: "🇮🇪",
      quote:
        "I was nervous at first, but the chairs were so encouraging! Now I love speaking in front of an audience in English.",
      badge: "Future Leader Award",
    },
  ];

  return (
    <section id="ambassadors" className="py-28 bg-[#FFFDF9] text-slate-900 relative overflow-hidden">
      
      {/* Dynamic Ambient Lighting Lights */}
      <div className="absolute top-1/3 left-10 w-[500px] h-[500px] bg-[#D9278E]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-[1650px] mx-auto px-6 sm:px-12 lg:px-16 xl:px-20 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto space-y-5 mb-20">
          <div className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full bg-white border border-slate-200 text-slate-900 text-xs sm:text-sm font-black tracking-widest uppercase shadow-md">
            <Crown className="w-4 h-4 text-[#D9278E]" />
            <span>HONORARY DELEGATES</span>
          </div>

          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-tight">
            Prestigious PREMUN <br />
            <span className="text-[#D9278E]">
              Young Ambassadors
            </span>
          </h2>

          <p className="text-lg sm:text-xl text-slate-600 font-medium leading-relaxed">
            Meet primary delegates who exemplified diplomacy, teamwork, and confidence during Oxford Corridor MUN sessions.
          </p>
        </div>

        {/* LUXURY FRAMED PORTRAIT CARDS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {ambassadors.map((ambassador, idx) => (
            <div
              key={idx}
              className="bg-white/90 rounded-3xl border border-slate-200 p-7 shadow-xl hover:shadow-2xl hover:border-[#D9278E]/40 transition-all duration-500 flex flex-col justify-between group relative overflow-hidden backdrop-blur-md"
            >
              {/* Top Solid Brand Beam */}
              <div className="absolute inset-x-0 top-0 h-1.5 bg-[#D9278E]" />

              <div>
                {/* PORTRAIT FRAME */}
                <div className="relative mx-auto mb-6 w-32 h-32 rounded-full p-1 bg-[#D9278E] shadow-lg group-hover:scale-105 transition-transform">
                  <div className="w-full h-full rounded-full bg-slate-900 overflow-hidden relative flex items-center justify-center border-2 border-white">
                    <div className="absolute inset-0 bg-[#D9278E] opacity-80" />
                    <span className="relative z-10 text-4xl font-black text-white font-display">
                      {ambassador.name.split(" ").map(n => n[0]).join("")}
                    </span>
                  </div>

                  {/* Flag Ribbon Badge */}
                  <div className="absolute -bottom-1 -right-1 w-9 h-9 rounded-full bg-white border border-slate-200 flex items-center justify-center text-xl shadow-md">
                    {ambassador.flag}
                  </div>
                </div>

                {/* Name & Title */}
                <div className="text-center space-y-1 mb-6">
                  <div className="inline-flex items-center gap-1 text-xs font-black uppercase text-[#D9278E] bg-[#D9278E]/10 border border-[#D9278E]/30 px-3 py-1 rounded-full shadow-xs mb-2">
                    <Star className="w-3 h-3 text-[#D9278E]" />
                    <span>{ambassador.badge}</span>
                  </div>

                  <h3 className="text-2xl font-black text-slate-900 font-display group-hover:text-[#D9278E] transition-colors">
                    {ambassador.name}
                  </h3>

                  <p className="text-xs font-extrabold text-slate-600 uppercase tracking-wider">
                    {ambassador.role}
                  </p>
                </div>

                {/* Quote Box */}
                <div className="p-5 rounded-2xl bg-[#D9278E]/5 border border-[#D9278E]/20 relative">
                  <Quote className="w-6 h-6 text-[#D9278E]/40 absolute top-2 right-2" />
                  <p className="text-xs sm:text-sm text-slate-700 font-medium italic leading-relaxed relative z-10">
                    “{ambassador.quote}”
                  </p>
                </div>
              </div>

              {/* Bottom Footer Info */}
              <div className="mt-6 pt-4 border-t border-slate-200 flex items-center justify-between text-xs font-bold text-slate-500">
                <div className="flex items-center gap-1.5">
                  <Globe className="w-3.5 h-3.5 text-[#D9278E]" />
                  <span>{ambassador.country}</span>
                </div>
                <div className="flex items-center gap-1 text-[#D9278E] font-extrabold">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>OXCPREMUN</span>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
