"use client";

import React from "react";
import { MessageSquare, Users, Crown, Heart, Sparkles, GraduationCap, Lightbulb, ShieldCheck } from "lucide-react";

export default function AboutPremun() {
  const pillars = [
    {
      title: "Communication",
      description:
        "Delegates express ideas clearly, articulate arguments in English, and practice active listening in structured committee discussions.",
      icon: MessageSquare,
    },
    {
      title: "Teamwork",
      description:
        "Students collaborate with peers from different schools to draft resolutions, build alliances, and solve global challenges together.",
      icon: Users,
    },
    {
      title: "Leadership",
      description:
        "Encourages young learners to take initiative, guide discussions, and embrace responsibility in a supportive, diplomatic environment.",
      icon: Crown,
    },
    {
      title: "Empathy",
      description:
        "By representing different countries, primary students step outside their own perspectives and understand global diversity.",
      icon: Heart,
    },
    {
      title: "Confidence",
      description:
        "Public speaking in front of peers transforms self-doubt into self-assurance, empowering students inside and outside the classroom.",
      icon: Sparkles,
    },
  ];

  return (
    <section id="pillars" className="py-28 text-slate-900 relative overflow-hidden">
      <div className="max-w-[1650px] mx-auto px-6 sm:px-12 lg:px-16 xl:px-20 relative z-10">
        
        {/* Section Header - Glassmorphism Badge */}
        <div className="text-center max-w-4xl mx-auto space-y-5 mb-20">
          <div className="inline-flex items-center px-5 py-2 rounded-full bg-white/70 backdrop-blur-lg border border-white/50 shadow-xl text-slate-900 text-xs sm:text-sm font-black tracking-widest uppercase">
            <span>WHAT IS OXC PREMUN?</span>
          </div>

          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-tight">
            Building Foundational Skills for <br />
            <span className="text-[#D9278E]">
              Tomorrow's Global Leaders
            </span>
          </h2>

          <p className="text-lg sm:text-xl text-slate-700 font-medium leading-relaxed">
            PREMUN is Oxford Corridor’s Model United Nations experience specially crafted for primary school students. Through age-appropriate debates and interactive activities, students develop essential lifelong capabilities.
          </p>
        </div>

        {/* 2-Column Overview Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-14 mb-24">
          
          {/* Card 1: Primary School Design */}
          <div className="bg-white/70 backdrop-blur-lg border border-white/50 p-10 sm:p-12 rounded-3xl shadow-xl hover:shadow-2xl hover:bg-white/80 transition-all duration-300 relative group flex flex-col justify-between">
            <div>
              <div className="w-16 h-16 rounded-2xl bg-[#D9278E] text-white flex items-center justify-center mb-8 shadow-lg shadow-[#D9278E]/20 group-hover:scale-110 transition-transform">
                <GraduationCap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl sm:text-3xl font-black text-slate-900 font-display mb-4">
                Designed Exclusively For Primary Students
              </h3>
              <p className="text-slate-600 leading-relaxed text-base sm:text-lg font-medium">
                At OXCMUN, we believe early learning shapes future leaders. Our delegates engage in tailored committee sessions where complex global topics are transformed into accessible, inspiring debates suited for primary level learners.
              </p>
            </div>
            <div className="mt-8 pt-6 border-t border-slate-200 flex items-center gap-3 text-xs sm:text-sm font-extrabold text-[#D9278E] uppercase tracking-wider">
              <ShieldCheck className="w-4 h-4 text-[#D9278E]" />
              <span>Interactive Committees</span>
              <span>•</span>
              <span>English Language Focus</span>
            </div>
          </div>

          {/* Card 2: Why Start Early */}
          <div className="bg-white/70 backdrop-blur-lg border border-white/50 p-10 sm:p-12 rounded-3xl shadow-xl hover:shadow-2xl hover:bg-white/80 transition-all duration-300 relative group flex flex-col justify-between">
            <div>
              <div className="w-16 h-16 rounded-2xl bg-[#D9278E] text-white flex items-center justify-center mb-8 shadow-lg shadow-[#D9278E]/20 group-hover:scale-110 transition-transform">
                <Lightbulb className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl sm:text-3xl font-black text-slate-900 font-display mb-4">
                Why Begin Diplomatic Debate Early?
              </h3>
              <p className="text-slate-600 leading-relaxed text-base sm:text-lg font-medium">
                Primary school is a key stage for developing communication, confidence, and social skills. PREMUN introduces these skills early through discussion, collaboration, and self-expression, preparing students for tomorrow's world.
              </p>
            </div>
            <div className="mt-8 pt-6 border-t border-slate-200 flex items-center gap-3 text-xs sm:text-sm font-extrabold text-[#D9278E] uppercase tracking-wider">
              <span>Early Age Empowerment</span>
              <span>•</span>
              <span>Global Perspective</span>
            </div>
          </div>

        </div>

        {/* 5 GLASSMORPHISM CORE PILLAR CARDS (English Only Titles) */}
        <div className="space-y-12">
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-xs font-black uppercase tracking-widest text-[#D9278E] bg-white/80 backdrop-blur-lg border border-slate-200 shadow-md px-4 py-1.5 rounded-full">
              5 CORE PILLARS OF PREMUN
            </span>
            <h3 className="text-3xl sm:text-4xl font-black text-slate-900 font-display mt-3">
              The Fundamental Competencies
            </h3>
            <p className="text-sm sm:text-base text-slate-700 mt-2 font-medium">
              Every committee session is crafted around five essential pillars of growth.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 xl:gap-8">
            {pillars.map((pillar, index) => {
              const IconComp = pillar.icon;
              return (
                <div
                  key={index}
                  className="bg-white/70 backdrop-blur-lg border border-white/50 p-8 rounded-3xl shadow-xl hover:shadow-2xl hover:bg-white/85 hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between group relative overflow-hidden"
                >
                  <div className="relative z-10">
                    <div className="w-14 h-14 rounded-2xl bg-[#D9278E] text-white flex items-center justify-center shadow-md group-hover:scale-110 transition-transform mb-6">
                      <IconComp className="w-7 h-7 text-white" />
                    </div>
                    
                    <h4 className="text-2xl font-black text-slate-900 font-display mb-4 group-hover:text-[#D9278E] transition-colors">
                      {pillar.title}
                    </h4>

                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-medium">
                      {pillar.description}
                    </p>
                  </div>

                  <div className="mt-8 pt-4 border-t border-slate-200 flex items-center justify-between text-xs font-extrabold text-[#D9278E] relative z-10">
                    <span>Pillar 0{index + 1}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
