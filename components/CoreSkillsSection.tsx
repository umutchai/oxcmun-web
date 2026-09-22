"use client";

import React from "react";
import { motion } from "framer-motion";
import { MessageSquare, Users2, HeartHandshake, ShieldCheck, Crown } from "lucide-react";

export default function CoreSkillsSection() {
  const skills = [
    {
      title: "COMMUNICATION",
      description: "Clear expression of ideas, active listening, and formal speech presentation.",
      icon: MessageSquare,
      color: "text-[#D9278E]",
      bg: "bg-[#D9278E]/10",
      border: "border-[#D9278E]/20",
    },
    {
      title: "TEAMWORK",
      description: "Collaborating with international peers to draft consensus resolutions.",
      icon: Users2,
      color: "text-blue-500",
      bg: "bg-blue-500/10",
      border: "border-blue-500/20",
    },
    {
      title: "EMPATHY",
      description: "Understanding diverse global perspectives and cross-cultural viewpoints.",
      icon: HeartHandshake,
      color: "text-emerald-500",
      bg: "bg-emerald-500/10",
      border: "border-emerald-500/20",
    },
    {
      title: "LEADERSHIP",
      description: "Taking initiative in discussions, guiding working papers, and negotiation.",
      icon: Crown,
      color: "text-amber-500",
      bg: "bg-amber-500/10",
      border: "border-amber-500/20",
    },
    {
      title: "CONFIDENCE",
      description: "Overcoming public speaking anxiety in a supportive, encouraging environment.",
      icon: ShieldCheck,
      color: "text-purple-500",
      bg: "bg-purple-500/10",
      border: "border-purple-500/20",
    },
  ];

  return (
    <section id="skills" className="py-12 px-4 md:py-24 md:px-12 bg-white text-slate-900 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 text-[#D9278E] text-xs font-bold tracking-wider uppercase"
          >
            <span>Essential Competencies</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="font-montserrat font-extrabold text-3xl sm:text-4xl lg:text-5xl text-slate-900 tracking-tight"
          >
            Core Skills Developed at <span className="text-[#D9278E]">OXCMUN</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-slate-600 text-base sm:text-lg leading-relaxed font-normal pt-2"
          >
            At OXCMUN, students learn by doing. Through structured debate, role-play, and team resolution writing, delegates develop essential skills that set them apart academically and personally:
          </motion.p>
        </div>

        {/* 5 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            const isLastRowCenter = index === 3 || index === 4;
            return (
              <motion.div
                key={skill.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`bg-slate-50 border border-slate-200/80 rounded-3xl p-8 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group ${
                  index === 4 ? "md:col-span-2 lg:col-span-1" : ""
                }`}
              >
                <div>
                  <div className={`w-14 h-14 rounded-2xl ${skill.bg} border ${skill.border} flex items-center justify-center ${skill.color} mb-6 group-hover:scale-110 transition-transform`}>
                    <Icon className="w-7 h-7" />
                  </div>
                  <h3 className="font-montserrat font-bold text-xl text-slate-900 mb-3 tracking-wide uppercase">
                    {skill.title}
                  </h3>
                  <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                    {skill.description}
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-slate-200/60 flex items-center justify-between text-xs font-semibold text-slate-400 group-hover:text-[#D9278E] transition-colors">
                  <span>Skill Level: Mastery</span>
                  <span>OXCMUN Core</span>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
