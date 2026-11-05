"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Phone, ShieldCheck } from "lucide-react";
import { companyInfo } from "@/data/company";
import { useEnquiryModal } from "@/context/EnquiryModalContext";

export default function FinalCta() {
  const { openEnquiryModal } = useEnquiryModal();
  return (
    <section className="relative py-24 lg:py-32 bg-brand-navy-deep text-white overflow-hidden select-none">
      {/* Industrial Background with Parallax/Cover */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/industrial-bg.jpg"
          alt="Heavy Industrial Manufacturing Facility"
          fill
          sizes="100vw"
          className="object-cover object-center opacity-25"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-navy-deep via-brand-navy-deep/90 to-brand-navy-deep/80" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-xs font-bold tracking-widest text-brand-orange uppercase">
          <ShieldCheck className="w-4 h-4 text-brand-orange" />
          <span>FORMULA RUB TECH • VASAI WORKS</span>
        </div>

        <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.12]">
          Looking for Reliable Custom Rubber Manufacturing Solutions?
        </h2>

        <p className="max-w-2xl mx-auto text-base sm:text-lg text-slate-200 leading-relaxed font-normal">
          Connect with Formula Rub Tech to discuss your industrial rubber component requirements, request material samples, or commission custom tooling.
        </p>

        <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
          <button
            type="button"
            onClick={() => openEnquiryModal()}
            className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl font-heading font-bold text-sm sm:text-base text-white bg-brand-orange hover:bg-brand-orange-dark shadow-xl hover:shadow-orange-500/25 transition-all duration-200 group cursor-pointer"
          >
            <span>Request a Quote</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </button>

          <a
            href={`tel:${companyInfo.phoneNumbers[0].raw}`}
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-heading font-semibold text-sm sm:text-base text-white bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 transition-all duration-200"
          >
            <Phone className="w-4 h-4 text-brand-orange" />
            <span>Call {companyInfo.phoneNumbers[0].display}</span>
          </a>
        </div>
      </div>
    </section>
  );
}
