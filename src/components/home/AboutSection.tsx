import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, ShieldCheck, Factory, Award } from "lucide-react";
import { companyInfo } from "@/data/company";

export default function AboutSection() {
  return (
    <section id="about" className="py-20 lg:py-28 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Factory Image & Floating Card (5 cols) */}
          <div className="lg:col-span-5 relative">
            {/* Visual Accent Backing */}
            <div className="absolute -top-4 -left-4 w-72 h-72 bg-orange-100/60 rounded-3xl -z-10 blur-2xl" />

            <div className="relative rounded-2xl overflow-hidden border border-slate-200 shadow-xl aspect-square md:aspect-[4/3] lg:aspect-square">
              <Image
                src="/images/factory-about.jpg"
                alt="Formula Rub Tech Manufacturing Workshop and Rubber Production Equipment"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-navy-deep/60 via-transparent to-transparent" />
            </div>

            {/* Floating Verified Experience Badge */}
            <div className="absolute -bottom-6 -right-4 sm:right-6 bg-brand-navy text-white p-5 rounded-2xl shadow-2xl border border-white/10 max-w-xs z-10">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-brand-orange text-white">
                  <Factory className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs uppercase tracking-wider text-slate-300 font-bold block">
                    Established in {companyInfo.establishedYear}
                  </span>
                  <span className="font-heading text-base font-bold text-white block">
                    Vasai (East), Maharashtra
                  </span>
                </div>
              </div>
              <p className="mt-2.5 text-xs text-slate-300 leading-relaxed border-t border-white/10 pt-2">
                Founded by {companyInfo.founder}, leveraging extensive directorship and technical leadership in industrial rubber compounding and tooling.
              </p>
            </div>
          </div>

          {/* Right Column: Narrative & Values (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <span className="inline-flex items-center gap-2 text-xs font-bold tracking-widest text-brand-orange uppercase bg-orange-50 px-3 py-1 rounded-full border border-brand-orange/20">
                WHO WE ARE
              </span>
              <h2 className="mt-3 font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-brand-navy tracking-tight leading-[1.15]">
                Engineering Reliable Rubber Solutions for Industry
              </h2>
            </div>

            <p className="text-base sm:text-lg text-slate-700 leading-relaxed">
              Formula Rub Tech is an established industrial rubber manufacturing enterprise headquartered in Vasai East, Maharashtra. Founded by <strong>{companyInfo.founder}</strong>, who brings extensive directorship expertise in the rubber sector, our facility is engineered to deliver high-durability rubber components at competitive pricing.
            </p>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              We specialize in the end-to-end production of precision rubber extrusions and compression-moulded components. Formulated from premium synthetic and natural polymers—including Silicone, Nitrile (NBR), Neoprene, Viton (FKM), EPDM, SBR, and Butyl—every component is designed in accordance with strict ISO quality guidelines to endure demanding industrial operating environments.
            </p>

            {/* Capability Checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-brand-orange shrink-0 mt-0.5" />
                <span className="text-sm font-semibold text-brand-navy">
                  Custom In-House Die &amp; Tooling Development
                </span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-brand-orange shrink-0 mt-0.5" />
                <span className="text-sm font-semibold text-brand-navy">
                  High-Tonnage Hydraulic Compression Presses
                </span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-brand-orange shrink-0 mt-0.5" />
                <span className="text-sm font-semibold text-brand-navy">
                  Continuous Rubber Extrusion Lines
                </span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-brand-orange shrink-0 mt-0.5" />
                <span className="text-sm font-semibold text-brand-navy">
                  Multi-Polymer Compounding &amp; Mixing Mills
                </span>
              </div>
            </div>

            {/* CTAs */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <Link
                href="#manufacturing"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-heading font-bold text-sm text-white bg-brand-navy hover:bg-brand-orange transition-all duration-200 shadow-sm hover:shadow group"
              >
                <span>Read More About Our Capabilities</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>

              <Link
                href="#products"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-heading font-semibold text-sm text-brand-navy hover:text-brand-orange bg-slate-100 hover:bg-slate-200/80 transition-colors"
              >
                <span>Explore 9 Product Categories</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
