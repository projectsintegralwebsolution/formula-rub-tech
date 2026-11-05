"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, SlidersHorizontal, Repeat, Compass, Wrench } from "lucide-react";
import { manufacturingCapabilities } from "@/data/machinery";
import { useEnquiryModal } from "@/context/EnquiryModalContext";

const iconMap: Record<string, React.ReactNode> = {
  Repeat: <Repeat className="w-5 h-5 text-brand-orange" />,
  SlidersHorizontal: <SlidersHorizontal className="w-5 h-5 text-brand-orange" />,
  Compass: <Compass className="w-5 h-5 text-brand-orange" />,
  Wrench: <Wrench className="w-5 h-5 text-brand-orange" />,
};

export default function ManufacturingSection() {
  const { openEnquiryModal } = useEnquiryModal();
  return (
    <section id="manufacturing" className="py-20 lg:py-28 bg-brand-surface relative overflow-hidden">
      {/* Background Subtle Technical Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:36px_36px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-16 space-y-4">
          <span className="inline-flex items-center gap-2 text-xs font-bold tracking-widest text-brand-orange uppercase bg-orange-50 px-3.5 py-1 rounded-full border border-brand-orange/20">
            MACHINERY &amp; INFRASTRUCTURE
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-brand-navy tracking-tight">
            Manufacturing Capabilities That Deliver Precision
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Our manufacturing facility at Vasai East is equipped with advanced machinery to execute precision rubber extrusion, two-roll polymer mixing, high-tonnage compression moulding, and custom die tooling.
          </p>
        </div>

        {/* Editorial Layout: Alternating 2-column feature blocks for the machinery */}
        <div className="space-y-12 lg:space-y-16">
          {manufacturingCapabilities.map((item, idx) => {
            const isReversed = idx % 2 === 1;
            return (
              <div
                key={item.id}
                className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center bg-white rounded-3xl p-6 sm:p-8 lg:p-10 border border-slate-200/90 shadow-sm hover:shadow-card-hover transition-all duration-300 ${
                  isReversed ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* Image Column (5 cols) */}
                <div
                  className={`lg:col-span-5 relative rounded-2xl overflow-hidden border border-slate-200 shadow-md aspect-[4/3] bg-slate-100 ${
                    isReversed ? "lg:order-2" : "lg:order-1"
                  }`}
                >
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    className="object-cover transition-transform duration-700 hover:scale-105"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-full bg-brand-navy/90 backdrop-blur-md text-white text-xs font-bold tracking-wider uppercase border border-white/10">
                      {item.tag}
                    </span>
                  </div>
                </div>

                {/* Content Column (7 cols) */}
                <div
                  className={`lg:col-span-7 space-y-5 ${
                    isReversed ? "lg:order-1" : "lg:order-2"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-orange-50 border border-brand-orange/20 shrink-0">
                      {iconMap[item.icon] || <Repeat className="w-5 h-5 text-brand-orange" />}
                    </div>
                    <div>
                      <span className="text-xs font-bold uppercase tracking-wider text-brand-orange block">
                        {item.category}
                      </span>
                      <h3 className="font-heading text-2xl sm:text-3xl font-extrabold text-brand-navy">
                        {item.name}
                      </h3>
                    </div>
                  </div>

                  <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                    {item.description}
                  </p>

                  {/* Bullet points */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                    {item.capabilities.map((cap, cIdx) => (
                      <div key={cIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                        <CheckCircle2 className="w-4 h-4 text-brand-orange shrink-0 mt-0.5" />
                        <span>{cap}</span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-2">
                    <button
                      type="button"
                      onClick={() => openEnquiryModal()}
                      className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-brand-blue hover:text-brand-orange transition-colors group cursor-pointer"
                    >
                      <span>Inquire about {item.name} production capacity</span>
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <button
            type="button"
            onClick={() => openEnquiryModal()}
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-heading font-bold text-sm sm:text-base text-white bg-brand-orange hover:bg-brand-orange-dark shadow-md hover:shadow-lg transition-all duration-200 group cursor-pointer"
          >
            <span>Discuss Manufacturing Requirements</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </button>
        </div>
      </div>
    </section>
  );
}
