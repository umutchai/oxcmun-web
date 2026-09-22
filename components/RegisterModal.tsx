"use client";

import React, { useState } from "react";
import { X, UserCheck, CheckCircle2, Sparkles, ArrowRight } from "lucide-react";

interface RegisterModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function RegisterModal({ isOpen, onClose }: RegisterModalProps) {
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-lg animate-in fade-in duration-200">
      <div className="w-full max-w-xl bg-white border-2 border-slate-200 rounded-3xl shadow-2xl overflow-hidden relative">
        
        {/* Header Banner */}
        <div className="p-6 bg-[#D9278E] text-white flex items-center justify-between shadow-md">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-white/20 text-white flex items-center justify-center border border-white/30 backdrop-blur-md">
              <UserCheck className="w-5 h-5 text-white" />
            </div>
            <div>
              <h3 className="text-lg font-black font-display text-white uppercase tracking-wider">
                Register for OXCPREMUN
              </h3>
              <p className="text-xs text-white/90 font-bold">
                24-25 October 2026 • New Park Hotel, Ankara
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-white/80 hover:text-white rounded-lg hover:bg-white/20 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {submitted ? (
          <div className="p-8 text-center space-y-6 bg-[#FFFDF9]">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 border-2 border-emerald-400 flex items-center justify-center mx-auto animate-bounce shadow-md">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <div className="space-y-2">
              <h4 className="text-2xl font-black font-display text-slate-900">
                Registration Preview Complete!
              </h4>
              <p className="text-sm text-slate-600 max-w-md mx-auto font-medium">
                Thank you for testing the visual UI demo. Delegate registration is currently active in frontend showcase mode.
              </p>
            </div>
            <button
              onClick={handleReset}
              className="bg-[#D9278E] hover:bg-[#C01F7A] text-white font-black px-8 py-3 rounded-full shadow-lg uppercase tracking-wide"
            >
              Close Preview
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-7 space-y-4 bg-[#FFFDF9]">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-xs font-bold text-slate-800 block mb-1">
                  Registration Type
                </label>
                <select className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs font-semibold text-slate-900 focus:outline-none focus:border-[#D9278E]">
                  <option>Individual Delegate</option>
                  <option>School Delegation</option>
                  <option>Advisor / Observer</option>
                </select>
              </div>

              <div>
                <label className="text-xs font-bold text-slate-800 block mb-1">
                  Grade Level
                </label>
                <select className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs font-semibold text-slate-900 focus:outline-none focus:border-[#D9278E]">
                  <option>Grade 2</option>
                  <option>Grade 3</option>
                  <option>Grade 4</option>
                  <option>Grade 5</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-xs font-bold text-slate-800 block mb-1">
                  Delegate Full Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Alexander Smith"
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs font-semibold text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#D9278E]"
                />
              </div>

              <div>
                <label className="text-xs font-bold text-slate-800 block mb-1">
                  School Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Oxford Primary School"
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs font-semibold text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#D9278E]"
                />
              </div>
            </div>

            <div>
              <label className="text-xs font-bold text-slate-800 block mb-1">
                Parent / Advisor Email
              </label>
              <input
                type="email"
                required
                placeholder="contact@parent.com"
                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs font-semibold text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#D9278E]"
              />
            </div>

            <div className="p-3.5 rounded-xl bg-slate-100 border border-slate-200 flex items-center justify-between text-xs font-bold">
              <span className="text-slate-700">Selected Event:</span>
              <span className="text-[#D9278E] font-extrabold">24-25 Oct • New Park Hotel Ankara</span>
            </div>

            <div className="pt-2">
              <button
                type="submit"
                className="w-full bg-[#D9278E] hover:bg-[#C01F7A] text-white font-black text-sm py-3.5 rounded-xl shadow-lg flex items-center justify-center gap-2 uppercase tracking-wide"
              >
                <Sparkles className="w-4 h-4 text-white" />
                <span className="text-white font-black">Submit Delegate Application</span>
                <ArrowRight className="w-4 h-4 text-white" />
              </button>
            </div>
          </form>
        )}

      </div>
    </div>
  );
}
