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
      {/* Aydınlatılmış Akıllı Renk Geçişli Katman (Lightened Gradient Overlay) */}
      <div className="absolute inset-0 z-10 bg-gradient-to-r from-black/60 via-black/20 to-transparent" />

      {/* Hero İçerik Konteyneri - Sol Hizalı */}
      <div className="relative z-20 max-w-7xl w-full mx-auto pl-6 pr-6 md:pl-24 md:pr-12 pt-28 sm:pt-32 pb-16 flex flex-col items-start justify-center text-left">
        
        {/* Üst Yazı: Geniş Harf Aralıklı Beyaz Metin */}
        <motion.span
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="text-white/90 text-xs sm:text-sm font-light tracking-[0.3em] sm:tracking-[0.5em] uppercase mb-3 block drop-shadow leading-tight"
        >
          ANKARA EDITION
        </motion.span>

        {/* Ana Başlık: Dev Serif OXFORD CORRIDOR (Beyaz) + MUN (Kurumsal Pembe) */}
        <motion.h1
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-serif font-extrabold text-5xl sm:text-7xl md:text-8xl lg:text-9xl text-white tracking-tight leading-none mb-4 drop-shadow-2xl"
        >
          OXFORD CORRIDOR <span className="text-[#D9278E]">MUN</span>
        </motion.h1>

        {/* Slogan: İtalik Küçük Harf Serif Beyaz Metin */}
        <motion.p
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="font-serif italic text-white text-base sm:text-2xl lg:text-3xl tracking-wide mb-8 sm:mb-10 font-normal drop-shadow-md leading-relaxed"
        >
          the mirror we built
        </motion.p>

        {/* Aksiyon Butonu: İçi Dolu Pembe Hap Buton */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
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
    </section>
  );
}
