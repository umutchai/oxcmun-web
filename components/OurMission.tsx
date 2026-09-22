"use client";

import React from "react";
import { Target, Globe, CheckCircle2, Quote } from "lucide-react";

export default function OurMission() {
  const commitments = [
    "Fostering English language mastery in diplomacy",
    "Encouraging critical thinking & public speaking",
    "Cultivating global citizenship & mutual respect",
    "Creating safe, inspiring committee environments",
  ];

  return (
    <section id="mission" className="py-28 text-slate-900 relative overflow-hidden">
      <div className="max-w-[1650px] mx-auto px-6 sm:px-12 lg:px-16 xl:px-20 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 xl:gap-24 items-center">
          
          {/* Left Side: Mission Visual & Quote (Glassmorphism) */}
          <div className="lg:col-span-5 relative">
            <div className="p-8 sm:p-12 rounded-3xl bg-white/70 backdrop-blur-lg border border-white/50 shadow-xl relative space-y-7">
              
              <div className="w-16 h-16 rounded-2xl bg-[#D9278E] text-white flex items-center justify-center shadow-lg">
                <Target className="w-8 h-8 text-white" />
              </div>

              <div>
                <span className="text-xs sm:text-sm font-black uppercase tracking-widest text-[#D9278E] block mb-1">
                  OUR MISSION STATEMENT
                </span>
                <h3 className="text-2xl sm:text-3xl font-black font-display text-slate-900">
                  Inspiring Education Beyond the Classroom
                </h3>
              </div>

              <blockquote className="text-slate-700 text-base sm:text-lg leading-relaxed italic border-l-4 border-[#D9278E] pl-5 py-1 font-medium bg-white/60 backdrop-blur-md rounded-r-2xl p-4 shadow-sm">
                <Quote className="w-6 h-6 text-[#D9278E] mb-2" />
                “Our mission is to create innovative educational experiences that inspire students to learn and grow beyond the classroom. At Oxford Corridor, we foster confidence, curiosity, communication, and a strong sense of global citizenship.”
              </blockquote>

              <div className="pt-6 border-t border-slate-200 flex items-center justify-between text-sm text-slate-700 font-extrabold">
                <span className="font-black text-slate-900">Oxford Corridor Team</span>
                <span className="text-[#D9278E] font-extrabold">@oxc.mun</span>
              </div>
            </div>
          </div>

          {/* Right Side: Mission Details & Philosophy */}
          <div className="lg:col-span-7 space-y-8 lg:space-y-10">
            <div className="space-y-4">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/70 backdrop-blur-lg border border-white/50 text-[#D9278E] text-xs sm:text-sm font-black tracking-wider uppercase shadow-md">
                <span>VISION & VALUES</span>
              </div>

              <h2 className="font-display text-3xl sm:text-5xl font-black text-slate-900 tracking-tight leading-tight">
                Globally-Minded Innovation in{" "}
                <span className="text-[#D9278E]">
                  Primary Education
                </span>
              </h2>

              <p className="text-slate-700 text-base sm:text-xl leading-relaxed font-medium">
                As a young, globally-minded team, Oxford Corridor creates learning experiences that bring together language, culture, confidence, and personal growth. We empower students to think beyond the classroom, embrace new perspectives, and approach the world with curiosity.
              </p>
            </div>

            {/* Commitments Checklist (Glassmorphism Cards) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {commitments.map((item, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-2xl bg-white/70 backdrop-blur-lg border border-white/50 shadow-lg flex items-start gap-4 hover:bg-white/85 transition-colors"
                >
                  <CheckCircle2 className="w-6 h-6 text-[#D9278E] shrink-0 mt-0.5" />
                  <span className="text-base font-extrabold text-slate-800">{item}</span>
                </div>
              ))}
            </div>

            {/* Key Quote Box (Glassmorphism) */}
            <div className="p-7 rounded-3xl bg-white/70 backdrop-blur-lg border border-white/50 shadow-xl">
              <div className="flex items-center gap-5">
                <div className="w-12 h-12 rounded-2xl bg-[#D9278E] text-white flex items-center justify-center shrink-0 shadow-md">
                  <Globe className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-lg font-black text-slate-900">Experience Must Be Designed</h4>
                  <p className="text-sm text-slate-600 mt-1 font-medium">
                    Content can be delivered, but meaningful learning requires a thoughtfully tailored conference environment.
                  </p>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
