"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, ShieldCheck, Microscope, Gauge, Scale, ClipboardCheck } from "lucide-react";
import { useEnquiryModal } from "@/context/EnquiryModalContext";

const qualitySteps = [
  {
    step: "01",
    title: "Raw Material Inspection",
    subtitle: "Polymer Purity & Chemical Testing",
    desc: "Every incoming batch of raw synthetic and natural rubber, carbon black, and curing agents is tested for specific gravity, moisture, and chemical purity before mixing.",
    icon: <Scale className="w-5 h-5 text-brand-orange" />,
  },
  {
    step: "02",
    title: "Manufacturing Process Checks",
    subtitle: "Thermal, Curing & Pressure Monitoring",
    desc: "Hydraulic platen temperatures, curing cycle dwell times, and extrusion screw feed rates are tightly monitored to ensure uniform cross-linking across every piece.",
    icon: <Gauge className="w-5 h-5 text-brand-orange" />,
  },
  {
    step: "03",
    title: "Product Quality Inspection",
    subtitle: "Micrometer, Caliper & Shore A Hardness",
    desc: "Moulded and extruded pieces are measured with precision micrometers and calipers against engineering tolerances, accompanied by Shore A durometer hardness verification.",
    icon: <Microscope className="w-5 h-5 text-brand-orange" />,
  },
  {
    step: "04",
    title: "Final Product Verification",
    subtitle: "Zero-Defect Batch Clearance & Dispatch",
    desc: "100% visual screening for flash defects, air inclusions, or surface blemishes ensures only components meeting customer specifications are packaged and dispatched.",
    icon: <ClipboardCheck className="w-5 h-5 text-brand-orange" />,
  },
];

export default function QualityAssurance() {
  const { openEnquiryModal } = useEnquiryModal();
  return (
    <section id="quality" className="py-20 lg:py-28 bg-brand-surface relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="inline-flex items-center gap-2 text-xs font-bold tracking-widest text-brand-orange uppercase bg-orange-50 px-3.5 py-1 rounded-full border border-brand-orange/20">
            QUALITY PROTOCOLS
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-brand-navy tracking-tight">
            Quality Is Built Into Every Stage
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Reliability in high-pressure fluid sealing and critical vibration damping demands uncompromising quality controls. We design and inspect all components in accordance with ISO manufacturing benchmarks.
          </p>
        </div>

        {/* Process Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {qualitySteps.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-6 border border-slate-200/90 shadow-sm hover:shadow-card-hover hover:border-brand-orange/40 transition-all duration-300 relative flex flex-col justify-between group"
            >
              {/* Step Number Accent */}
              <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                <span className="font-heading text-3xl font-extrabold text-slate-200 group-hover:text-brand-orange/30 transition-colors">
                  {item.step}
                </span>
                <div className="p-2.5 rounded-xl bg-orange-50 border border-brand-orange/20">
                  {item.icon}
                </div>
              </div>

              <div className="mt-4 space-y-2 flex-1">
                <h3 className="font-heading text-lg font-bold text-brand-navy group-hover:text-brand-orange transition-colors">
                  {item.title}
                </h3>
                <span className="text-xs font-semibold text-brand-blue block">
                  {item.subtitle}
                </span>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pt-1">
                  {item.desc}
                </p>
              </div>

              <div className="mt-6 pt-3 border-t border-slate-100 flex items-center gap-1.5 text-[11px] font-semibold text-slate-500">
                <CheckCircle2 className="w-3.5 h-3.5 text-brand-orange" />
                <span>Verification Stage {idx + 1}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Quality Highlight Banner with Inspection Photo */}
        <div className="mt-16 bg-white rounded-3xl border border-slate-200 shadow-md overflow-hidden grid grid-cols-1 lg:grid-cols-12 items-center">
          <div className="lg:col-span-5 relative h-72 lg:h-full min-h-[280px]">
            <Image
              src="/images/quality-inspection.jpg"
              alt="Industrial Quality Inspection and Measurement of Rubber Components"
              fill
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white/10" />
          </div>

          <div className="lg:col-span-7 p-8 sm:p-10 space-y-4">
            <div className="inline-flex items-center gap-2 text-xs font-bold text-brand-navy bg-slate-100 px-3 py-1 rounded-md">
              <ShieldCheck className="w-4 h-4 text-brand-orange" />
              <span>ISO Quality Framework Guidelines</span>
            </div>

            <h3 className="font-heading text-2xl sm:text-3xl font-bold text-brand-navy">
              Stringent Dimensional &amp; Shore A Hardness Tolerances
            </h3>

            <p className="text-sm text-slate-600 leading-relaxed">
              Every customer drawing has critical sealing and mounting tolerances. Whether producing Shore 40 A soft silicone bellows or Shore 90 A rigid hydraulic U-seals, our multi-stage inspection eliminates dimensional deviation and assures consistent performance.
            </p>

            <div className="pt-2">
              <button
                type="button"
                onClick={() => openEnquiryModal()}
                className="inline-flex items-center gap-2 text-sm font-bold text-brand-orange hover:text-brand-orange-dark transition-colors cursor-pointer"
              >
                <span>Request Certificate of Analysis &amp; Batch Reports</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
