"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-start overflow-hidden bg-[url('/MUN4.jpg')] bg-cover bg-center bg-no-repeat"
    >
      {/* Lightened Gradient Overlay */}
      <div className="absolute inset-0 z-10 bg-gradient-to-r from-black/70 via-black/30 to-transparent" />

      {/* Hero Content Container */}
      <div className="relative z-20 max-w-7xl w-full mx-auto px-6 sm:px-12 md:px-24 pt-28 sm:pt-32 pb-16 flex flex-col items-start justify-center text-left">

        {/* Strict Single Vertical Alignment Container */}
        <div className="flex flex-col items-start justify-start text-left w-full max-w-5xl space-y-3 sm:space-y-4 m-0 p-0 pl-0 ml-0">

          {/* 1. Top Heading: ANKARA EDITION (Font-Serif to match exact font side-bearing & vertical guide) */}
          <motion.span
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="font-serif text-white/90 text-xs sm:text-sm md:text-base font-semibold tracking-[0.3em] sm:tracking-[0.4em] uppercase block drop-shadow leading-none text-left m-0 p-0 pl-0 ml-0"
          >
            ANKARA EDITION
          </motion.span>

          {/* 2. Main Title: OXFORD CORRIDOR MUN */}
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
            className="font-serif font-extrabold text-4xl sm:text-7xl md:text-8xl lg:text-9xl text-white tracking-tight leading-[0.95] drop-shadow-2xl text-left m-0 p-0 pl-0 ml-0 w-full break-words"
          >
            OXFORD CORRIDOR <span className="text-[#D9278E]">MUN</span>
          </motion.h1>

          {/* 3. Slogan: THE MIRROR WE BUILT */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
            className="font-serif italic uppercase text-white text-lg sm:text-2xl lg:text-3xl tracking-widest font-medium drop-shadow-md leading-relaxed text-left m-0 p-0 pl-0 ml-0 pt-1 pb-2"
          >
            THE MIRROR WE BUILT
          </motion.p>

          {/* 4. Action Button: BE PART OF IT */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45, ease: "easeOut" }}
            className="m-0 p-0 pl-0 ml-0 pt-2 flex justify-start text-left"
          >
            <a
              href="/apply"
              className="inline-flex items-center gap-3 bg-[#D9278E] hover:bg-[#be1b78] text-white font-bold text-xs sm:text-sm uppercase tracking-wider px-8 py-4 rounded-full shadow-xl shadow-[#D9278E]/30 hover:shadow-2xl hover:shadow-[#D9278E]/50 transition-all duration-300 transform hover:-translate-y-1"
            >
              <span>BE PART OF IT</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
