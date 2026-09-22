"use client";

import React from "react";
import { motion } from "framer-motion";


export default function CommitteesSection() {
  const committees = [
    {
      title: "UNESCO",
      topic: "Digital Learning for Children",
      image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=1200&auto=format&fit=crop",
      alt: "Digital Learning for Children",
    },
    {
      title: "UNEP",
      topic: "Protecting Animal Rights",
      image: "https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=1200&auto=format&fit=crop",
      alt: "Protecting Animal Rights and Wildlife",
    },
    {
      title: "UNICEF",
      topic: "Equal Opportunities for Children",
      image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=1200&auto=format&fit=crop",
      alt: "Equal Opportunities for Children",
    },
    {
      title: "FAO",
      topic: "Protecting Farms and Natural Resources",
      image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=1200&auto=format&fit=crop",
      alt: "Protecting Farms and Natural Resources",
    },
    {
      title: "UN-Habitat",
      topic: "Creating Safe Spaces for Children and Families",
      image: "https://images.unsplash.com/photo-1449844908441-8829872d2607?q=80&w=1200&auto=format&fit=crop",
      alt: "Creating Safe Spaces for Children and Families",
    },
    {
      title: "Human Rights Council",
      topic: "The Right to a Safe Home",
      image: "https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?q=80&w=1200&auto=format&fit=crop",
      alt: "The Right to a Safe Home",
    },
  ];

  return (
    <section id="committees" className="py-12 px-4 md:py-24 md:px-12 bg-slate-900 text-white relative overflow-hidden">
      {/* Background Lighting Accents */}
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-[#D9278E]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16 space-y-3">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="font-serif font-extrabold text-3xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-tight"
          >
            OXCPREMUN <span className="text-[#D9278E]">COMMITTEES</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-serif italic text-slate-300 text-base sm:text-xl font-normal"
          >
            Global Issues for Young Diplomats
          </motion.p>
        </div>

        {/* 3-Column Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {committees.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-[#1A1A24] border border-white/10 rounded-2xl overflow-hidden shadow-xl hover:-translate-y-2 hover:border-[#D9278E]/50 transition-all duration-300 group flex flex-col justify-between"
            >
              {/* Image Container with Hover Scale */}
              <div className="relative h-52 w-full overflow-hidden bg-slate-950">
                <img
                  src={item.image}
                  alt={item.alt}
                  className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A24] via-transparent to-transparent opacity-80" />
              </div>

              {/* Content Body */}
              <div className="p-6 space-y-3 flex-1 flex flex-col justify-between">
                <div>
                  <span className="text-[#D9278E] font-extrabold text-sm uppercase tracking-widest block mb-1">
                    {item.title}
                  </span>
                  <h3 className="text-white font-semibold text-lg sm:text-xl leading-snug">
                    {item.topic}
                  </h3>
                </div>

                <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs text-slate-400 font-medium">
                  <span>Committee Simulation</span>
                  <span className="text-amber-400 font-semibold">PREMUN 2026</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
