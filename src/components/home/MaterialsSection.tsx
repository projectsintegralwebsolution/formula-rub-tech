"use client";

import React, { useState } from "react";
import Link from "next/link";
import { TreePine, Sparkles, Droplets, ShieldAlert, Flame, SunMedium, Cog, Wind, ArrowRight, Check } from "lucide-react";
import { rubberMaterials } from "@/data/materials";
import { useEnquiryModal } from "@/context/EnquiryModalContext";

const materialIcons: Record<string, React.ReactNode> = {
  TreePine: <TreePine className="w-5 h-5" />,
  Sparkles: <Sparkles className="w-5 h-5" />,
  Droplets: <Droplets className="w-5 h-5" />,
  ShieldAlert: <ShieldAlert className="w-5 h-5" />,
  Flame: <Flame className="w-5 h-5" />,
  SunMedium: <SunMedium className="w-5 h-5" />,
  Cog: <Cog className="w-5 h-5" />,
  Wind: <Wind className="w-5 h-5" />,
};

export default function MaterialsSection() {
  const { openEnquiryModal } = useEnquiryModal();
  return (
    <section id="materials" className="py-20 lg:py-28 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="inline-flex items-center gap-2 text-xs font-bold tracking-widest text-brand-orange uppercase bg-orange-50 px-3.5 py-1 rounded-full border border-brand-orange/20">
            POLYMER SCIENCE &amp; COMPOUNDING
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-brand-navy tracking-tight">
            The Right Rubber Material for Every Application
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Our material engineering covers a spectrum of 8 specialized elastomers. We compound and vulcanize each formulation to achieve precise Shore A hardness, elongation, chemical resilience, and thermal endurance.
          </p>
        </div>

        {/* 8 Material Cards Grid with pure CSS smooth hover effect */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {rubberMaterials.map((mat) => {
            return (
              <div
                key={mat.id}
                className="group rounded-2xl p-6 border border-slate-200/80 bg-brand-surface text-slate-800 transition-all duration-300 ease-out flex flex-col justify-between hover:bg-brand-navy hover:text-white hover:border-brand-orange hover:shadow-xl hover:-translate-y-1 cursor-default select-none"
              >
                <div className="space-y-4">
                  {/* Top Bar with Icon & Badge */}
                  <div className="flex items-center justify-between">
                    <div className="p-3 rounded-xl bg-orange-50 text-brand-orange border border-brand-orange/20 group-hover:bg-brand-orange group-hover:text-white group-hover:border-transparent transition-all duration-300">
                      {materialIcons[mat.icon] || <Cog className="w-5 h-5" />}
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md bg-slate-200 text-slate-700 group-hover:bg-white/15 group-hover:text-orange-200 transition-colors">
                      {mat.code.split(" ")[0]}
                    </span>
                  </div>

                  <div>
                    <h3 className="font-heading text-lg font-bold text-brand-navy group-hover:text-white transition-colors">
                      {mat.name}
                    </h3>
                    <p className="text-xs mt-1 font-mono text-slate-500 group-hover:text-orange-200 transition-colors">
                      {mat.code}
                    </p>
                  </div>

                  <p className="text-xs leading-relaxed text-slate-600 group-hover:text-slate-300 transition-colors">
                    {mat.shortDesc}
                  </p>

                  {/* Key Properties */}
                  <div className="pt-3 border-t border-slate-200/40 group-hover:border-white/15 transition-colors space-y-1.5">
                    {mat.keyProperties.slice(0, 3).map((prop, idx) => (
                      <div key={idx} className="flex items-start gap-1.5 text-xs">
                        <Check className="w-3.5 h-3.5 shrink-0 mt-0.5 text-brand-orange group-hover:text-brand-orange-light transition-colors" />
                        <span className="leading-tight text-slate-700 group-hover:text-slate-200 transition-colors">
                          {prop}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Best suited */}
                <div className="mt-5 pt-3 border-t border-slate-200/40 group-hover:border-white/15 transition-colors">
                  <span className="text-[11px] font-semibold block text-brand-blue group-hover:text-orange-300 transition-colors">
                    Ideal Applications:
                  </span>
                  <p className="text-[11px] mt-0.5 line-clamp-2 text-slate-500 group-hover:text-slate-300 transition-colors">
                    {mat.bestSuitedFor}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Guidance Strip */}
        <div className="mt-12 bg-slate-900 text-white rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 border border-slate-800">
          <div className="space-y-1 text-center md:text-left">
            <h4 className="font-heading text-lg font-bold text-white">
              Unsure which elastomer matches your chemical or thermal parameters?
            </h4>
            <p className="text-xs sm:text-sm text-slate-400">
              Our engineering team evaluates oil exposure, ozone contact, pressure cycles, and durometer needs.
            </p>
          </div>
          <button
            type="button"
            onClick={() => openEnquiryModal()}
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-heading font-bold text-xs sm:text-sm text-white bg-brand-orange hover:bg-brand-orange-dark transition-colors shrink-0 shadow-sm cursor-pointer"
          >
            <span>Consult Material Specialist</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
