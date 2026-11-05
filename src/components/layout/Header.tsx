"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ChevronDown, Menu, ArrowRight, PhoneCall } from "lucide-react";
import Logo from "../ui/Logo";
import MegaMenu from "./MegaMenu";
import MobileNav from "./MobileNav";
import PreHeader from "./PreHeader";
import { useEnquiryModal } from "@/context/EnquiryModalContext";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [megaMenuOpen, setMegaMenuOpen] = useState(false);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const { openEnquiryModal } = useEnquiryModal();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="sticky top-0 z-40 w-full">
      {/* Pre-header above main nav */}
      <PreHeader />

      {/* Main Navbar */}
      <div
        className={`relative w-full transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-md py-3.5 border-b border-slate-200/80"
            : "bg-white py-5 border-b border-slate-100"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* 1. Logo (Left) */}
            <div className="shrink-0">
              <Logo variant="dark" />
            </div>

            {/* 2. Main Navigation (Center - Desktop) */}
            <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
              <Link
                href="/"
                className="px-3.5 py-2 text-sm font-bold text-brand-navy hover:text-brand-orange transition-colors rounded-lg"
              >
                Home
              </Link>

              <Link
                href="#about"
                className="px-3.5 py-2 text-sm font-semibold text-slate-700 hover:text-brand-orange transition-colors rounded-lg"
              >
                About Us
              </Link>

              {/* Products with Mega Menu dropdown trigger */}
              <div
                className="relative"
                onMouseEnter={() => setMegaMenuOpen(true)}
              >
                <button
                  type="button"
                  onClick={() => setMegaMenuOpen(!megaMenuOpen)}
                  className={`inline-flex items-center gap-1.5 px-3.5 py-2 text-sm font-semibold rounded-lg transition-colors focus:outline-none ${
                    megaMenuOpen
                      ? "text-brand-orange bg-orange-50/80"
                      : "text-slate-700 hover:text-brand-orange"
                  }`}
                  aria-expanded={megaMenuOpen}
                >
                  <span>Products</span>
                  <ChevronDown
                    className={`w-4 h-4 transition-transform duration-200 ${
                      megaMenuOpen ? "rotate-180 text-brand-orange" : "text-slate-400"
                    }`}
                  />
                </button>
              </div>

              <Link
                href="#manufacturing"
                className="px-3.5 py-2 text-sm font-semibold text-slate-700 hover:text-brand-orange transition-colors rounded-lg"
              >
                Manufacturing
              </Link>

              <Link
                href="#materials"
                className="px-3.5 py-2 text-sm font-semibold text-slate-700 hover:text-brand-orange transition-colors rounded-lg"
              >
                Materials
              </Link>

              <Link
                href="#quality"
                className="px-3.5 py-2 text-sm font-semibold text-slate-700 hover:text-brand-orange transition-colors rounded-lg"
              >
                Quality Assurance
              </Link>

              <Link
                href="#gallery"
                className="px-3.5 py-2 text-sm font-semibold text-slate-700 hover:text-brand-orange transition-colors rounded-lg"
              >
                Gallery
              </Link>

              <Link
                href="#enquiry"
                className="px-3.5 py-2 text-sm font-semibold text-slate-700 hover:text-brand-orange transition-colors rounded-lg"
              >
                Contact
              </Link>
            </nav>

            {/* 3. Right CTA & Mobile Toggle */}
            <div className="flex items-center space-x-3">
              <button
                type="button"
                onClick={() => openEnquiryModal()}
                className="hidden sm:inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl font-heading font-bold text-sm text-white bg-brand-orange hover:bg-brand-orange-dark shadow-sm hover:shadow-md transition-all duration-200 group cursor-pointer"
              >
                <span>Get a Quote</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>

              {/* Mobile menu trigger */}
              <button
                type="button"
                onClick={() => setMobileNavOpen(true)}
                className="lg:hidden p-2 rounded-xl text-brand-navy hover:bg-slate-100 transition-colors focus:outline-none"
                aria-label="Open mobile navigation"
              >
                <Menu className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>

        {/* Mega Menu Dropdown */}
        <MegaMenu
          isOpen={megaMenuOpen}
          onClose={() => setMegaMenuOpen(false)}
        />
      </div>

      {/* Mobile Drawer */}
      <MobileNav
        isOpen={mobileNavOpen}
        onClose={() => setMobileNavOpen(false)}
      />
    </header>
  );
}
