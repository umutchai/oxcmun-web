"use client";

import React from "react";
import { motion } from "framer-motion";
import { Globe, Compass, GraduationCap, Target } from "lucide-react";

export default function AboutSection() {
  return (
    <section id="about" className="py-12 px-4 md:py-24 md:px-12 bg-white text-slate-900 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: About & Mission */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Section Tag */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 text-[#D9278E] text-xs font-bold tracking-wider uppercase">
              <Globe className="w-4 h-4" />
              <span>About Oxford Corridor</span>
            </div>

            {/* Main Section Heading */}
            <h2 className="font-montserrat font-bold text-3xl sm:text-4xl lg:text-5xl text-slate-900 tracking-tight leading-tight">
              Shaping Global Mindsets & <br className="hidden sm:inline" />
              <span className="text-[#D9278E]">Empowering Future Leaders.</span>
            </h2>

            {/* About Oxford Corridor Copy */}
            <div className="space-y-4">
              <h3 className="font-montserrat font-bold text-xl text-slate-900 flex items-center gap-2">
                <Compass className="w-5 h-5 text-[#D9278E]" />
                About Oxford Corridor
              </h3>
              <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-normal">
                As a young, globally-minded team, we create innovative learning experiences that empower future leaders. We bring international education standards and MUN culture to students, combining academic excellence with practical skills.
              </p>
            </div>

            {/* Our Mission Box */}
            <div className="p-6 sm:p-8 rounded-2xl bg-slate-50 border-l-4 border-[#D9278E] space-y-3 shadow-sm">
              <div className="flex items-center gap-2 font-montserrat font-bold text-lg text-slate-900">
                <Target className="w-5 h-5 text-[#D9278E]" />
                <span>Our Mission</span>
              </div>
              <p className="text-slate-700 text-base leading-relaxed">
                Our mission is to create innovative educational experiences that empower young minds to become articulate, empathetic, and confident global citizens. We bridge classroom learning with real-world leadership through high-standard MUN conferences, international training, and skill-building programs.
              </p>
            </div>

          </motion.div>

          {/* Right Column: Institutional Image & Badge */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Background Accent Backdrop */}
              <div className="absolute -inset-4 bg-gradient-to-tr from-[#D9278E]/20 to-amber-500/20 rounded-3xl blur-2xl opacity-70" />
              
              {/* Main Institutional Image */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-100">
                <img
                  src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=1470&auto=format&fit=crop"
                  alt="Oxford Corridor Model United Nations Conference"
                  className="w-full h-[450px] lg:h-[520px] object-cover object-center transform hover:scale-105 transition-transform duration-700"
                />

                {/* Floating Badge */}
                <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-md p-5 rounded-2xl border border-slate-200/80 shadow-xl flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="p-3 rounded-xl bg-[#D9278E]/10 text-[#D9278E]">
                      <GraduationCap className="w-7 h-7" />
                    </div>
                    <div>
                      <h4 className="font-montserrat font-bold text-slate-900 text-sm sm:text-base">
                        Oxford Corridor Education
                      </h4>
                      <p className="text-slate-500 text-xs">
                        Empowering young minds for the global stage
                      </p>
                    </div>
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