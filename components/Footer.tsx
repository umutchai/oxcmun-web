"use client";

import React from "react";
import Image from "next/image";
import { Globe, Instagram, ArrowUp } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-slate-950 text-slate-300 border-t border-slate-800 pt-16 pb-10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-12 border-b border-slate-800/80">
          
          {/* Col 1: Brand Info & Logo */}
          <div className="md:col-span-6 space-y-4">
            <div className="flex items-center gap-3">
              <div className="relative flex items-center justify-center">
                <Image
                  src="/Artboard 1.png"
                  alt="Oxford Corridor Logo"
                  width={40}
                  height={40}
                  className="h-10 w-auto object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-montserrat font-bold text-xl tracking-tight text-white">
                  OXFORD <span className="text-[#D9278E]">CORRIDOR</span>
                </span>
                <span className="text-[9px] font-semibold tracking-[0.25em] uppercase text-slate-400">
                  Global Education Institution
                </span>
              </div>
            </div>

            <p className="text-sm text-slate-400 max-w-md leading-relaxed">
              Oxford Corridor is a global educational institution fostering international perspectives, academic excellence, and Primary Model United Nations leadership.
            </p>
          </div>

          {/* Col 2: Quick Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="font-montserrat font-bold text-xs uppercase tracking-wider text-white">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li><a href="#home" className="hover:text-[#D9278E] transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-[#D9278E] transition-colors">About Us</a></li>
              <li><a href="#premun" className="hover:text-[#D9278E] transition-colors">What is PREMUN?</a></li>
              <li><a href="#skills" className="hover:text-[#D9278E] transition-colors">Core Skills</a></li>
              <li><a href="#conference" className="hover:text-[#D9278E] transition-colors">Conference & Fee</a></li>
              <li><a href="#contact" className="hover:text-[#D9278E] transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Col 3: Connect */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="font-montserrat font-bold text-xs uppercase tracking-wider text-white">
              Connect
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a href="https://oxfordcorridor.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#D9278E] transition-colors flex items-center gap-2">
                  <Globe className="w-4 h-4 text-[#D9278E]" />
                  <span>oxfordcorridor.com</span>
                </a>
              </li>
              <li>
                <a href="https://instagram.com/oxc.mun" target="_blank" rel="noopener noreferrer" className="hover:text-[#D9278E] transition-colors flex items-center gap-2">
                  <Instagram className="w-4 h-4 text-[#D9278E]" />
                  <span>@oxc.mun</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} Oxford Corridor. All rights reserved.</p>
          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 text-slate-400 hover:text-white transition-colors"
          >
            <span>Back to top</span>
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
}