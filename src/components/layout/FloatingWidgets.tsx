"use client";

import React, { useState, useEffect } from "react";
import { ArrowUp, MessageCircle } from "lucide-react";
import { companyInfo } from "@/data/company";

export default function FloatingWidgets() {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 350);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const whatsappUrl = `https://wa.me/${companyInfo.whatsappNumber.replace("+", "")}?text=${encodeURIComponent(
    companyInfo.whatsappPrefillMessage
  )}`;

  return (
    <aside
      aria-label="Quick actions"
      className="fixed bottom-[64px] right-6 z-40 flex flex-col items-center gap-3 select-none"
    >
      {/* 1. Back to Top Button (Stacked cleanly ABOVE WhatsApp) */}
      <button
        type="button"
        onClick={scrollToTop}
        className={`p-3 rounded-full bg-brand-navy hover:bg-brand-orange text-white shadow-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-brand-orange ring-1 ring-white/20 ${
          showBackToTop
            ? "opacity-100 translate-y-0 scale-100 pointer-events-auto"
            : "opacity-0 translate-y-4 scale-75 pointer-events-none"
        }`}
        aria-label="Back to top of page"
        title="Scroll to Top"
      >
        <ArrowUp className="w-5 h-5" />
      </button>

      {/* 2. Floating WhatsApp Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-110 focus:outline-none focus:ring-4 focus:ring-[#25D366]/40"
        aria-label="Chat on WhatsApp with Formula Rub Tech"
        title="Chat with us on WhatsApp"
      >
        {/* Subtle Pulse Halo */}
        <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-40 animate-ping pointer-events-none" />

        {/* WhatsApp Icon */}
        <MessageCircle className="w-7 h-7 fill-white stroke-none relative z-10" />

        {/* Tooltip on hover */}
        <span className="absolute right-16 top-1/2 -translate-y-1/2 bg-brand-navy text-white text-xs font-semibold px-3 py-1.5 rounded-lg shadow-md whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none hidden sm:block">
          Chat with Technical Team
        </span>
      </a>
    </aside>
  );
}
