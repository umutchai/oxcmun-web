"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Send, CheckCircle2, Phone, Mail, UserCheck } from "lucide-react";

export default function ApplyPage() {
  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    institution: "",
    delegationSize: "",
    phone: "",
    email: "",
    position: "",
    role: "Delegation",
  });

  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setErrorMessage(null);

    try {
      const res = await fetch("/api/apply", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Failed to submit application. Please try again.");
      }

      setSubmitted(true);
      window.scrollTo({ top: 0, behavior: "smooth" });
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : "An unexpected error occurred. Please try again.";
      setErrorMessage(message);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen relative bg-slate-900 font-sans text-slate-800 selection:bg-[#D9278E] selection:text-white">
      {/* Background Image with Dark Overlay & Dotted Grid Pattern */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat filter brightness-75 scale-105"
          style={{ backgroundImage: `url('/MUN4.jpg')` }}
        />
        <div className="absolute inset-0 bg-slate-950/80 backdrop-blur-sm" />
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:24px_24px] opacity-15" />
      </div>

      {/* Top Header / Back Link Navigation */}
      <header className="relative z-20 bg-black/60 backdrop-blur-md border-b border-white/10 py-4 px-4 sm:px-8">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-white/80 hover:text-white text-xs sm:text-sm font-semibold uppercase tracking-wider transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Home</span>
          </Link>

          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/oc beyaz(1).png"
              alt="Oxford Corridor Logo"
              width={120}
              height={36}
              className="h-8 w-auto object-contain"
            />
          </Link>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="relative z-10 max-w-3xl mx-auto p-4 md:p-8 py-8 sm:py-16">
        
        {/* Success Alert Banner */}
        {submitted ? (
          <div className="bg-white rounded-2xl shadow-2xl border-t-8 border-emerald-500 p-6 sm:p-12 text-center space-y-6">
            <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mx-auto text-emerald-600">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <h2 className="font-serif font-bold text-2xl sm:text-3xl text-slate-900 leading-snug">
              Your application has been received by our team. Please wait to hear from us.
            </h2>
            <p className="text-slate-600 text-base max-w-lg mx-auto leading-relaxed">
              Thank you for applying to the <span className="font-semibold text-slate-900">OXCMUN PREMUN Conference</span>. Our registration team will review your details and send payment instructions & preparatory program schedules to your email address.
            </p>
            <div className="pt-4">
              <Link
                href="/"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#D9278E] hover:bg-[#be1b78] text-white font-bold text-sm uppercase px-8 py-3.5 rounded-full shadow-lg transition-all"
              >
                <span>Return to Main Website</span>
              </Link>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5">
            
            {/* Header Title Card */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 border-t-4 border-t-[#D9278E] p-5 sm:p-8">
              <div className="space-y-3">
                <span className="text-xs font-bold uppercase tracking-widest text-[#D9278E] block">
                  Official Registration
                </span>
                <h1 className="font-serif font-extrabold text-2xl sm:text-4xl text-blue-950 tracking-tight">
                  OXCMUN ANKARA PREMUN APPLICATION
                </h1>
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed pt-1">
                  Welcome to the official registration portal for Oxford Corridor Model United Nations Ankara. Please fill in your application details below.
                </p>
              </div>
            </div>

            {/* 1. Name */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-5 sm:p-6">
              <label className="text-blue-950 font-bold text-sm sm:text-base block mb-2">
                Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="Your answer here..."
                className="w-full bg-slate-50 border border-gray-200 rounded-lg px-4 py-3.5 text-base text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#D9278E] focus:ring-2 focus:ring-[#D9278E]/20 transition-all"
              />
            </div>

            {/* 2. Surname */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-5 sm:p-6">
              <label className="text-blue-950 font-bold text-sm sm:text-base block mb-2">
                Surname <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                required
                value={formData.surname}
                onChange={(e) => setFormData({ ...formData, surname: e.target.value })}
                placeholder="Your answer here..."
                className="w-full bg-slate-50 border border-gray-200 rounded-lg px-4 py-3.5 text-base text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#D9278E] focus:ring-2 focus:ring-[#D9278E]/20 transition-all"
              />
            </div>

            {/* 3. Institution */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-5 sm:p-6">
              <label className="text-blue-950 font-bold text-sm sm:text-base block mb-2">
                Institution <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                required
                value={formData.institution}
                onChange={(e) => setFormData({ ...formData, institution: e.target.value })}
                placeholder="Your answer here..."
                className="w-full bg-slate-50 border border-gray-200 rounded-lg px-4 py-3.5 text-base text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#D9278E] focus:ring-2 focus:ring-[#D9278E]/20 transition-all"
              />
            </div>

            {/* 4. Delegation size (excluding size) */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-5 sm:p-6">
              <label className="text-blue-950 font-bold text-sm sm:text-base block mb-2">
                Delegation size (excluding size) <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                required
                value={formData.delegationSize}
                onChange={(e) => setFormData({ ...formData, delegationSize: e.target.value })}
                placeholder="Your answer here..."
                className="w-full bg-slate-50 border border-gray-200 rounded-lg px-4 py-3.5 text-base text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#D9278E] focus:ring-2 focus:ring-[#D9278E]/20 transition-all"
              />
            </div>

            {/* 5. Phone number */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-5 sm:p-6">
              <label className="text-blue-950 font-bold text-sm sm:text-base block mb-2">
                Phone number <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                required
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                placeholder="Your answer here..."
                className="w-full bg-slate-50 border border-gray-200 rounded-lg px-4 py-3.5 text-base text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#D9278E] focus:ring-2 focus:ring-[#D9278E]/20 transition-all"
              />
            </div>

            {/* 6. Email account */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-5 sm:p-6">
              <label className="text-blue-950 font-bold text-sm sm:text-base block mb-2">
                Email account <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="Your answer here..."
                className="w-full bg-slate-50 border border-gray-200 rounded-lg px-4 py-3.5 text-base text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#D9278E] focus:ring-2 focus:ring-[#D9278E]/20 transition-all"
              />
            </div>

            {/* 7. Position */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-5 sm:p-6">
              <label className="text-blue-950 font-bold text-sm sm:text-base block mb-2">
                Position <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                required
                value={formData.position}
                onChange={(e) => setFormData({ ...formData, position: e.target.value })}
                placeholder="Your answer here..."
                className="w-full bg-slate-50 border border-gray-200 rounded-lg px-4 py-3.5 text-base text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#D9278E] focus:ring-2 focus:ring-[#D9278E]/20 transition-all"
              />
            </div>

            {/* 8. Role (Select Dropdown: "Delegation" or "Individual Delegate") */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-5 sm:p-6">
              <label className="text-blue-950 font-bold text-sm sm:text-base block mb-2">
                Role <span className="text-red-500">*</span>
              </label>
              <select
                value={formData.role}
                onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                className="w-full bg-slate-50 border border-gray-200 rounded-lg px-4 py-3.5 text-base text-slate-900 font-semibold focus:outline-none focus:border-[#D9278E] focus:ring-2 focus:ring-[#D9278E]/20 transition-all"
              >
                <option value="Delegation">Delegation</option>
                <option value="Individual Delegate">Individual Delegate</option>
              </select>

              {/* Dynamic Alert Info Box for Individual Delegate */}
              {formData.role === "Individual Delegate" && (
                <div className="bg-blue-50 border border-blue-200 p-5 sm:p-6 rounded-lg mt-4 space-y-2 text-sm text-slate-800 shadow-sm animate-fade-in">
                  <p className="font-bold text-blue-950 text-base mb-1">
                    Please Contact us
                  </p>
                  <p className="text-slate-700">
                    <span className="font-semibold text-blue-950">Pelin Onat</span> : Director General of oxford corridor ankara model united nations
                  </p>
                  <p className="text-slate-700 flex items-center gap-1.5 pt-0.5">
                    <Phone className="w-4 h-4 text-blue-600 shrink-0" />
                    <span className="font-semibold text-blue-950">Phone Number</span> :{" "}
                    <a href="tel:05394256167" className="font-semibold text-blue-700 hover:underline">
                      05394256167
                    </a>
                  </p>
                  <p className="text-slate-700 flex items-center gap-1.5 pt-0.5">
                    <Mail className="w-4 h-4 text-blue-600 shrink-0" />
                    <span className="font-semibold text-blue-950">Email Address</span> :{" "}
                    <a href="mailto:pelin@oxfordcorridor.com" className="font-semibold text-blue-700 hover:underline">
                      pelin@oxfordcorridor.com
                    </a>
                  </p>
                </div>
              )}
            </div>

            {/* Submit Application Button */}
            <div className="pt-4 flex flex-col items-center justify-between gap-4">
              <button
                type="submit"
                disabled={submitting}
                className="w-full bg-[#D9278E] hover:bg-[#be1b78] disabled:opacity-60 text-white font-bold text-base uppercase py-4 rounded-xl shadow-lg shadow-[#D9278E]/30 hover:shadow-2xl transition-all duration-300 flex items-center justify-center gap-2 transform hover:-translate-y-0.5"
              >
                {submitting ? (
                  <span>Submitting...</span>
                ) : (
                  <>
                    <span>Submit Application</span>
                    <Send className="w-4 h-4" />
                  </>
                )}
              </button>

              {errorMessage && (
                <div className="w-full bg-red-50 border border-red-200 text-red-700 text-sm px-4 py-3 rounded-xl font-medium text-center shadow-sm">
                  {errorMessage}
                </div>
              )}
            </div>

          </form>
        )}

      </main>
    </div>
  );
}
