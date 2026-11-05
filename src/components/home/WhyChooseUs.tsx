import React from "react";
import Image from "next/image";
import { Factory, Cpu, Repeat, Layers, ShieldCheck, Compass, CheckCircle2 } from "lucide-react";

interface CapabilityItem {
  id: string;
  cardNumber: string;
  title: string;
  desc: string;
  icon: React.ReactNode;
  isQualityCard?: boolean;
}

const capabilities: CapabilityItem[] = [
  {
    id: "manufacturing",
    cardNumber: "01",
    title: "Industrial Rubber Manufacturing",
    desc: "Established production infrastructure in Vasai-Virar producing precision components since 2017.",
    icon: <Factory className="w-7 h-7 sm:w-8 sm:h-8 stroke-[1.75]" />,
  },
  {
    id: "moulding",
    cardNumber: "02",
    title: "Custom Moulding Solutions",
    desc: "High-tonnage hydraulic compression moulding for intricate dimensional parts and bonded components.",
    icon: <Cpu className="w-7 h-7 sm:w-8 sm:h-8 stroke-[1.75]" />,
  },
  {
    id: "extrusion",
    cardNumber: "03",
    title: "Rubber Extrusion Capabilities",
    desc: "Continuous profile processing delivering uniform solid, sponge, and channel geometries in long runs.",
    icon: <Repeat className="w-7 h-7 sm:w-8 sm:h-8 stroke-[1.75]" />,
  },
  {
    id: "materials",
    cardNumber: "04",
    title: "Multiple Material Options",
    desc: "In-house compounding across Silicone, Natural, Nitrile, Neoprene, Viton, EPDM, SBR, and Butyl.",
    icon: <Layers className="w-7 h-7 sm:w-8 sm:h-8 stroke-[1.75]" />,
  },
  {
    id: "quality",
    cardNumber: "05",
    title: "Quality-Focused Production",
    desc: "Strict raw material inspection and multi-stage process checks designed to ISO quality standards.",
    icon: <ShieldCheck className="w-7 h-7 sm:w-8 sm:h-8 stroke-[1.75]" />,
    isQualityCard: true,
  },
  {
    id: "custom",
    cardNumber: "06",
    title: "Customer-Specific Solutions",
    desc: "Direct translation of customer engineering drawings, CAD files, or physical samples into tooling.",
    icon: <Compass className="w-7 h-7 sm:w-8 sm:h-8 stroke-[1.75]" />,
  },
];

export default function WhyChooseUs() {
  return (
    <section
      id="why-formula-rub-tech"
      className="relative py-24 lg:py-32 bg-[#F4F7FA] overflow-hidden selection:bg-[#F04416] selection:text-white"
      aria-label="Why Formula Rub Tech - Engineered Capabilities"
    >
      {/* 1. Subtle Dotted Pattern Layer */}
      <div
        className="absolute inset-0 pointer-events-none opacity-40"
        style={{
          backgroundImage: "radial-gradient(#94A3B8 1.1px, transparent 1.1px)",
          backgroundSize: "24px 24px",
        }}
      />

      {/* 2. Soft Ambient Lighting Gradients */}
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-gradient-to-b from-[#F04416]/5 via-[#0284C7]/5 to-transparent blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 left-1/4 w-[500px] h-[300px] bg-slate-200/40 rounded-full blur-3xl pointer-events-none" />

      {/* 3. Technical Blueprint Schematic 1 (Top-Left: Precision O-Ring / Gasket Blueprint) */}
      <svg
        className="absolute top-12 -left-12 lg:left-8 w-80 sm:w-96 h-80 sm:h-96 text-slate-400 pointer-events-none select-none opacity-[0.06]"
        viewBox="0 0 300 300"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        {/* Concentric Circles & Centerlines */}
        <circle cx="150" cy="150" r="130" stroke="currentColor" strokeWidth="1" strokeDasharray="6 4" />
        <circle cx="150" cy="150" r="105" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="150" cy="150" r="75" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="150" cy="150" r="45" stroke="currentColor" strokeWidth="1" strokeDasharray="4 3" />
        <line x1="10" y1="150" x2="290" y2="150" stroke="currentColor" strokeWidth="0.75" strokeDasharray="8 4 2 4" />
        <line x1="150" y1="10" x2="150" y2="290" stroke="currentColor" strokeWidth="0.75" strokeDasharray="8 4 2 4" />
        {/* Dimension callout lines */}
        <path d="M 45 150 L 35 120 L 15 120" stroke="currentColor" strokeWidth="1" />
        <text x="10" y="115" fill="currentColor" fontSize="8" fontFamily="monospace">Ø 150 ±0.05</text>
        <path d="M 225 150 L 240 180 L 265 180" stroke="currentColor" strokeWidth="1" />
        <text x="245" y="192" fill="currentColor" fontSize="8" fontFamily="monospace">SECT A-A</text>
        <circle cx="150" cy="150" r="2" fill="currentColor" />
      </svg>

      {/* 4. Technical Blueprint Schematic 2 (Mid-Right: Extruded Sealing Profile Schematic) */}
      <svg
        className="absolute bottom-16 right-4 lg:right-16 w-80 sm:w-96 h-80 text-slate-400 pointer-events-none select-none opacity-[0.06]"
        viewBox="0 0 320 260"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        {/* Extruded D-Profile / Channel Path */}
        <path
          d="M 40 180 L 40 80 Q 40 40 80 40 L 220 40 Q 260 40 260 80 L 260 180 L 220 180 L 220 90 Q 220 70 200 70 L 100 70 Q 80 70 80 90 L 80 180 Z"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        {/* Dimension Leader Lines */}
        <line x1="30" y1="40" x2="30" y2="180" stroke="currentColor" strokeWidth="0.75" strokeDasharray="3 3" />
        <line x1="25" y1="40" x2="35" y2="40" stroke="currentColor" strokeWidth="1" />
        <line x1="25" y1="180" x2="35" y2="180" stroke="currentColor" strokeWidth="1" />
        <text x="12" y="115" fill="currentColor" fontSize="8" fontFamily="monospace" transform="rotate(-90 12,115)">H 140.0</text>
        <line x1="40" y1="195" x2="260" y2="195" stroke="currentColor" strokeWidth="0.75" strokeDasharray="3 3" />
        <line x1="40" y1="190" x2="40" y2="200" stroke="currentColor" strokeWidth="1" />
        <line x1="260" y1="190" x2="260" y2="200" stroke="currentColor" strokeWidth="1" />
        <text x="135" y="210" fill="currentColor" fontSize="8" fontFamily="monospace">W 220.0</text>
        <circle cx="40" cy="80" r="1.5" fill="currentColor" />
        <circle cx="260" cy="80" r="1.5" fill="currentColor" />
      </svg>

      {/* 5. Subtle Product Component Visual (Bottom-Right Decorative Accent) */}
      <div className="absolute -bottom-10 -right-10 w-72 sm:w-88 h-72 sm:h-88 pointer-events-none select-none opacity-[0.07] mix-blend-multiply">
        <Image
          src="/images/rubber-o-rings.jpg"
          alt="Decorative Rubber Component Engineering Visual"
          fill
          sizes="350px"
          className="object-contain filter grayscale contrast-125"
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        {/* Section Heading Container */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20 space-y-4">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2">
            <span className="text-xs sm:text-sm font-extrabold tracking-[0.2em] text-[#F04416] uppercase font-heading">
              WHY FORMULA RUB TECH
            </span>
          </div>

          {/* Main Heading */}
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-[44px] font-extrabold text-[#071426] tracking-tight leading-[1.18]">
            Engineered Capabilities. Precision in Every Component.
          </h2>

          {/* Subtle Orange Decorative Underline */}
          <div className="flex items-center justify-center gap-1.5 pt-2">
            <span className="w-8 h-[2px] bg-[#F04416]/25 rounded-full" />
            <span className="w-16 h-[3px] bg-[#F04416] rounded-full shadow-[0_1px_6px_rgba(240,68,22,0.4)]" />
            <span className="w-8 h-[2px] bg-[#F04416]/25 rounded-full" />
          </div>
        </div>

        {/* 6 Feature Cards (3 columns x 2 rows on Desktop, 2 cols on Tablet, 1 col on Mobile) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 lg:gap-8">
          {capabilities.map((item) => (
            <div
              key={item.id}
              className={`group relative bg-white rounded-[16px] border transition-all duration-300 ease-out flex flex-col justify-between p-6 sm:p-7 lg:p-8 shadow-[0_4px_20px_-4px_rgba(7,20,38,0.05)] hover:shadow-[0_16px_32px_-8px_rgba(7,20,38,0.1)] hover:-translate-y-1.5 hover:border-[#F04416]/50 ${
                item.isQualityCard
                  ? "border-t-[3px] border-t-[#F04416] border-slate-200/90"
                  : "border-slate-200/90"
              }`}
            >
              {/* Optional Top Accent Highlight for Quality Card */}
              {item.isQualityCard && (
                <div className="absolute top-0 right-6 -translate-y-1/2">
                  <span className="inline-flex items-center gap-1 text-[10px] font-extrabold uppercase tracking-widest px-2.5 py-0.5 rounded-full bg-[#F04416] text-white shadow-sm">
                    <CheckCircle2 className="w-3 h-3" />
                    <span>ISO Alignment</span>
                  </span>
                </div>
              )}

              {/* Card Main Content */}
              <div className="flex flex-col sm:flex-row items-start gap-5 sm:gap-6">
                {/* Large Orange Line Icon in Light Orange Container */}
                <div className="shrink-0 w-14 h-14 sm:w-16 sm:h-16 rounded-[14px] bg-[#FFF5F2] border border-[#F04416]/20 flex items-center justify-center text-[#F04416] transition-all duration-300 group-hover:bg-[#FFEAE2] group-hover:text-[#D9380E] group-hover:shadow-sm">
                  {item.icon}
                </div>

                {/* Subtle Vertical Divider (Visible on desktop & tablet) */}
                <div className="hidden sm:block w-[1px] self-stretch bg-slate-200/80 my-0.5 transition-colors duration-300 group-hover:bg-[#F04416]/30 shrink-0" />

                {/* Title and Short Description */}
                <div className="flex-1 min-w-0">
                  <h3 className="font-heading text-lg sm:text-[19px] font-bold text-[#071426] leading-snug transition-colors duration-300 group-hover:text-[#F04416]">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm text-slate-600 leading-relaxed font-normal">
                    {item.desc}
                  </p>
                </div>
              </div>

              {/* Card Footer Micro-Detail */}
              <div className="mt-5 pt-3.5 border-t border-slate-100 flex items-center justify-between text-xs text-slate-400">
                <span className="font-mono text-[11px] font-semibold text-slate-400 group-hover:text-[#F04416] transition-colors">
                  Capability {item.cardNumber}
                </span>
                <span className="text-[11px] font-medium text-slate-500 flex items-center gap-1 group-hover:text-[#071426] transition-colors">
                  <span>Verified Specification</span>
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
