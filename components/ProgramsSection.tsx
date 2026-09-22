"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Globe,
  BookOpen,
  Award,
  Users,
  Compass,
  Sparkles,
  ArrowUpRight,
} from "lucide-react";

export default function ProgramsSection() {
  const programs = [
    {
      icon: Globe,
      title: "Model United Nations",
      description:
        "Premier international diplomacy and debate conferences designed to develop public speaking, negotiation, and global policy analysis for future world leaders.",
      tag: "Flagship Program",
    },
    {
      icon: BookOpen,
      title: "Language Mastery",
      description:
        "Advanced academic English and linguistic fluency programs empowering delegates to debate, compose position papers, and articulate complex perspectives with confidence.",
      tag: "Skill Development",
    },
    {
      icon: Award,
      title: "Global Citizenship",
      description:
        "Comprehensive leadership modules instilling empathy, cross-cultural ethics, environmental stewardship, and global awareness in young scholars.",
      tag: "Core Leadership",
    },
    {
      icon: Compass,
      title: "Academic Advisory",
      description:
        "Bespoke consulting for international education pathways, top-tier university prep, and global academic opportunities tailored to each student's goals.",
      tag: "Consulting",
    },
    {
      icon: Users,
      title: "Diplomatic Academy",
      description:
        "Interactive workshops and masterclasses led by seasoned diplomacy, international affairs experts, and distinguished academic leaders.",
      tag: "Executive Learning",
    },
    {
      icon: Sparkles,
      title: "Executive Leadership",
      description:
        "Specialized mentorship in critical thinking, strategic consensus building, resolution drafting, and high-impact parliamentary procedure.",
      tag: "Advanced Track",
    },
  ];

  return (
    <section id="programs" className="py-24 bg-slate-100 text-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-slate-200 text-[#D9278E] text-xs font-bold tracking-wider uppercase shadow-xs">
            <Sparkles className="w-4 h-4" />
            <span>Educational Offerings</span>
          </div>
          <h2 className="font-montserrat font-bold text-3xl sm:text-4xl lg:text-5xl text-slate-900 tracking-tight">
            Our World-Class <span className="text-[#D9278E]">Programs.</span>
          </h2>
          <p className="text-slate-600 text-base sm:text-lg font-normal leading-relaxed">
            Designed to foster intellectual curiosity, international perspective, and leadership capability across all academic stages.
          </p>
        </div>

        {/* 3-Column Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((prog, idx) => {
            const Icon = prog.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group relative bg-slate-50 rounded-2xl p-8 border border-slate-200/80 shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Top Bar: Icon + Tag */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="p-3.5 rounded-xl bg-white text-[#D9278E] border border-slate-200 shadow-sm group-hover:bg-[#D9278E] group-hover:text-white transition-colors duration-300">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 bg-white px-3 py-1 rounded-full border border-slate-200">
                      {prog.tag}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h3 className="font-montserrat font-bold text-xl text-slate-900 mb-3 group-hover:text-[#D9278E] transition-colors">
                    {prog.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed font-normal">
                    {prog.description}
                  </p>
                </div>

                {/* Card Footer Link */}
                <div className="pt-6 mt-6 border-t border-slate-200/60 flex items-center justify-between text-xs font-bold text-slate-800 group-hover:text-[#D9278E] transition-colors">
                  <span>Learn Details</span>
                  <ArrowUpRight className="w-4 h-4 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}