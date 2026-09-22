"use client";

import React, { useState } from "react";
import { Search, X, Calendar, MapPin, Sparkles, ArrowRight } from "lucide-react";

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SearchModal({ isOpen, onClose }: SearchModalProps) {
  const [query, setQuery] = useState("");

  if (!isOpen) return null;

  const quickLinks = [
    { title: "24-25 October Ankara Conference", tag: "Event", icon: Calendar },
    { title: "New Park Hotel Venue Details", tag: "Location", icon: MapPin },
    { title: "5 Core Pillars of PREMUN", tag: "Curriculum", icon: Sparkles },
    { title: "Primary School Delegate Guide", tag: "Booklet", icon: ArrowRight },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-24 px-4 bg-slate-900/60 backdrop-blur-md animate-in fade-in duration-200">
      <div className="w-full max-w-2xl bg-white border-4 border-amber-300/90 rounded-3xl shadow-2xl overflow-hidden space-y-4">
        
        {/* Search Input Bar */}
        <div className="p-5 border-b-2 border-amber-200 flex items-center gap-3 bg-[#FFFDF9]">
          <Search className="w-5 h-5 text-pink-600 shrink-0" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search PREMUN events, committees, booklets, skills..."
            className="w-full bg-transparent text-slate-900 placeholder-slate-400 text-sm sm:text-base font-bold focus:outline-none"
            autoFocus
          />
          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-slate-900 rounded-lg hover:bg-amber-100/60 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Search Recommendations */}
        <div className="p-6 space-y-4 bg-[#FFFDF9]">
          <span className="text-xs font-black uppercase tracking-wider text-amber-700 bg-amber-100/60 px-3 py-1 rounded-md inline-block border border-amber-200">
            Popular Searches
          </span>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {quickLinks.map((item, idx) => {
              const IconComp = item.icon;
              return (
                <a
                  key={idx}
                  href="#events"
                  onClick={onClose}
                  className="p-4 rounded-2xl bg-amber-50/50 border-2 border-amber-200/70 hover:border-pink-400 flex items-center justify-between group transition-all"
                >
                  <div className="flex items-center gap-3">
                    <IconComp className="w-4 h-4 text-pink-600" />
                    <span className="text-xs font-extrabold text-slate-800 group-hover:text-pink-600 transition-colors">
                      {item.title}
                    </span>
                  </div>
                  <span className="text-[10px] bg-pink-100 text-pink-700 font-black px-2 py-0.5 rounded-full uppercase border border-pink-200">
                    {item.tag}
                  </span>
                </a>
              );
            })}
          </div>
        </div>

        {/* Modal Footer */}
        <div className="p-4 bg-amber-100/50 border-t border-amber-200 flex items-center justify-between text-xs text-slate-600 font-bold">
          <span>Press ESC or click close to dismiss</span>
          <span className="text-pink-600 font-black">OXCPREMUN Search</span>
        </div>

      </div>
    </div>
  );
}
