"use client";

import React from "react";
import Link from "next/link";
import {
  Car,
  Cpu,
  Wrench,
  Zap,
  Building2,
  Factory,
  Shield,
  ArrowRight,
  Check,
  Droplets,
  Activity,
  ShieldCheck,
  Layers,
} from "lucide-react";
import { industriesData } from "@/data/industries";
import { useEnquiryModal } from "@/context/EnquiryModalContext";

const industryIcons: Record<string, React.ReactNode> = {
  Car: <Car className="w-6 h-6 text-brand-orange" />,
  Cpu: <Cpu className="w-6 h-6 text-brand-orange" />,
  Wrench: <Wrench className="w-6 h-6 text-brand-orange" />,
  Zap: <Zap className="w-6 h-6 text-brand-orange" />,
  Building2: <Building2 className="w-6 h-6 text-brand-orange" />,
  Factory: <Factory className="w-6 h-6 text-brand-orange" />,
};

const functionalRoles = [
  {
    name: "Sealing",
    icon: <Droplets className="w-5 h-5" />,
    desc: "Fluid containment & pressure isolation across static and dynamic joints.",
  },
  {
    name: "Insulation",
    icon: <Zap className="w-5 h-5" />,
    desc: "High dielectric resistance for high-voltage and control equipment.",
  },
  {
    name: "Vibration Reduction",
    icon: <Activity className="w-5 h-5" />,
    desc: "Attenuation of cyclic mechanical harmonics and acoustic noise.",
  },
  {
    name: "Protection",
    icon: <ShieldCheck className="w-5 h-5" />,
    desc: "Dust, moisture, oil, and atmospheric ozone exclusion.",
  },
  {
    name: "Cushioning",
    icon: <Layers className="w-5 h-5" />,
    desc: "High-modulus deadweight support and concentrated impact absorption.",
  },
];

export default function IndustriesSection() {
  const { openEnquiryModal } = useEnquiryModal();
  return (
    <section className="py-20 lg:py-28 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="inline-flex items-center gap-2 text-xs font-bold tracking-widest text-brand-orange uppercase bg-orange-50 px-3.5 py-1 rounded-full border border-brand-orange/20">
            SECTORS SERVED
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-brand-navy tracking-tight">
            Industries &amp; Engineering Applications
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            From precision O-rings in hydraulic systems to heavy-duty anti-vibrators in industrial plant machinery, Formula Rub Tech rubber components fulfill critical functional roles across industrial sectors.
          </p>
        </div>

        {/* 5 Functional Roles Horizontal Pill Strip with Professional Icons */}
        <div className="mb-14 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {functionalRoles.map((role, idx) => (
            <div
              key={idx}
              className="group bg-brand-surface p-5 rounded-2xl border border-slate-200/90 text-center flex flex-col items-center justify-start hover:border-brand-orange/50 hover:bg-white hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300"
            >
              {/* Icon Container */}
              <div className="w-11 h-11 rounded-xl bg-orange-50 border border-brand-orange/20 flex items-center justify-center mb-3 group-hover:bg-brand-orange transition-all duration-300">
                <span className="text-brand-orange group-hover:text-white transition-colors">
                  {role.icon}
                </span>
              </div>
              <span className="font-heading text-xs font-bold text-brand-navy block uppercase tracking-wider group-hover:text-brand-orange transition-colors">
                {role.name}
              </span>
              <p className="mt-1.5 text-[11px] text-slate-500 leading-relaxed font-normal">
                {role.desc}
              </p>
            </div>
          ))}
        </div>

        {/* 6 Industry Cards (3x2 Grid) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industriesData.map((ind) => (
            <div
              key={ind.id}
              className="group bg-brand-surface rounded-2xl p-7 border border-slate-200/90 shadow-sm hover:shadow-card-hover hover:border-brand-orange/40 hover:bg-white transition-all duration-300 flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="p-3 rounded-xl bg-orange-50 border border-brand-orange/20 shrink-0 group-hover:scale-105 transition-transform">
                    {industryIcons[ind.icon] || <Factory className="w-6 h-6 text-brand-orange" />}
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-white text-slate-700 border border-slate-200 shadow-2xs">
                    {ind.role}
                  </span>
                </div>

                <div>
                  <h3 className="font-heading text-xl font-bold text-brand-navy group-hover:text-brand-orange transition-colors">
                    {ind.name}
                  </h3>
                  <p className="text-xs font-medium text-brand-blue mt-0.5">
                    {ind.summary}
                  </p>
                </div>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {ind.description}
                </p>

                {/* Components Supplied */}
                <div className="pt-3 border-t border-slate-200/70">
                  <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider block mb-2">
                    Key Components Supplied:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {ind.componentsSupplied.map((item, i) => (
                      <span
                        key={i}
                        className="text-[11px] px-2.5 py-0.5 rounded-md bg-white border border-slate-200 text-slate-700"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-200/70">
                <button
                  type="button"
                  onClick={() => openEnquiryModal()}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-navy hover:text-brand-orange transition-colors cursor-pointer"
                >
                  <span>Request Sector RFQ</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
