"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import PremunSection from "@/components/PremunSection";
import CoreSkillsSection from "@/components/CoreSkillsSection";
import CommitteesSection from "@/components/CommitteesSection";
import ConferenceFeeSection from "@/components/ConferenceFeeSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-900 text-slate-100 font-sans selection:bg-[#D9278E] selection:text-white">
      {/* Sticky Smart Header */}
      <Navbar />

      {/* Full-Screen Hero Section */}
      <Hero />

      {/* About Us & Our Mission Section */}
      <AboutSection />

      {/* What is PREMUN? & Why Primary? 2-Column Section */}
      <PremunSection />

      {/* Core Skills Developed at OXCMUN Section */}
      <CoreSkillsSection />

      {/* OXCPREMUN COMMITTEES Section */}
      <CommitteesSection />

      {/* Upcoming Conference & All-Inclusive Pricing Section */}
      <ConferenceFeeSection />

      {/* Minimalist Corporate Footer */}
      <Footer />
    </main>
  );
}
