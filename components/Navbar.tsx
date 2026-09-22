"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Menu, X, Search, ArrowRight } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "HOME", href: "#home" },
    { label: "ABOUT", href: "#about" },
    { label: "CONFERENCES", href: "#conference" },
    { label: "OUR IMPACT", href: "#premun" },
    { label: "NEWS", href: "#skills" },
    { label: "CONTACT", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-black/85 backdrop-blur-md shadow-2xl py-3 md:py-4 border-b border-white/10"
          : "bg-transparent py-4 md:py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-12">
        <div className="flex items-center justify-between">
          
          {/* Left Side: Enlarged Logo + Vertical Divider + ANKARA (Serif) */}
          <a href="#home" className="flex items-center group focus:outline-none">
            <div className="relative flex items-center shrink-0">
              <Image
                src="/oc beyaz(1).png"
                alt="Oxford Corridor Logo"
                width={180}
                height={60}
                priority
                className="h-8 md:h-12 lg:h-16 w-auto object-contain transition-transform group-hover:scale-105"
              />
            </div>

            {/* Thin Vertical Line Divider */}
            <div className="h-6 md:h-8 border-l border-white/30 mx-3 md:mx-4" />

            {/* Elegant Serif ANKARA */}
            <span className="font-serif text-white font-medium text-xs sm:text-base md:text-lg tracking-wider">
              ANKARA
            </span>
          </a>

          {/* Center Links: HOME (Pink), Others (White) */}
          <nav className="hidden md:flex items-center space-x-6 lg:space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={`text-xs font-semibold tracking-widest uppercase transition-colors duration-200 relative group ${
                  link.label === "HOME"
                    ? "text-[#D9278E]"
                    : "text-white/90 hover:text-[#D9278E]"
                }`}
              >
                <span>{link.label}</span>
                <span
                  className={`absolute -bottom-1 left-0 h-0.5 bg-[#D9278E] transition-all duration-300 ${
                    link.label === "HOME" ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                />
              </a>
            ))}
          </nav>

          {/* Right Side: Search Icon + Outline Pink REGISTER NOW Button */}
          <div className="hidden md:flex items-center space-x-5">
            <button
              aria-label="Search"
              className="text-white hover:text-[#D9278E] transition-colors p-1.5 focus:outline-none"
            >
              <Search className="w-5 h-5" />
            </button>

            <a
              href="/apply"
              className="inline-flex items-center gap-2 border-2 border-[#D9278E] text-[#D9278E] hover:bg-[#D9278E] hover:text-white text-xs font-bold uppercase tracking-wider px-5 py-2.5 rounded-full transition-all duration-300 shadow-sm hover:shadow-lg hover:shadow-[#D9278E]/30 transform hover:-translate-y-0.5"
            >
              <span>REGISTER NOW</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Hamburger Menu Toggle Button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-white hover:bg-white/10 rounded-lg transition-colors focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7 text-white" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-slate-950/95 backdrop-blur-xl border-b border-white/10 px-6 pt-6 pb-8 space-y-5 shadow-2xl animate-fade-in">
          <nav className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`font-semibold text-sm uppercase tracking-widest py-2 border-b border-white/10 transition-colors ${
                  link.label === "HOME" ? "text-[#D9278E]" : "text-white hover:text-[#D9278E]"
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="pt-3">
            <a
              href="/apply"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full inline-flex items-center justify-center gap-2 border-2 border-[#D9278E] bg-[#D9278E] text-white font-bold text-xs uppercase tracking-wider px-6 py-3.5 rounded-full shadow-lg transition-all"
            >
              <span>REGISTER NOW</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}