import React from "react";
import { Factory, Layers, Spline, ShieldCheck, Cpu, Cog, CheckCircle2 } from "lucide-react";

const highlights = [
  {
    icon: <Factory className="w-6 h-6 text-brand-orange" />,
    title: "Precision Rubber Manufacturing",
    desc: "Engineered rubber components manufactured with attention to dimensional accuracy, finish and application requirements.",
  },
  {
    icon: <Cpu className="w-6 h-6 text-brand-orange" />,
    title: "Custom Moulding Expertise",
    desc: "Custom-moulded rubber parts developed around specific shapes, dimensions and functional requirements.",
  },
  {
    icon: <Spline className="w-6 h-6 text-brand-orange" />,
    title: "Advanced Extrusion Solutions",
    desc: "Rubber profiles, strips and custom sections designed for varied industrial applications.",
  },
  {
    icon: <Layers className="w-6 h-6 text-brand-orange" />,
    title: "Versatile Rubber Materials",
    desc: "Solutions using NR, Silicone, NBR, EPDM, Neoprene, Viton, SBR and Butyl rubber.",
  },
  {
    icon: <Cog className="w-6 h-6 text-brand-orange" />,
    title: "Made to Your Specifications",
    desc: "Components developed according to customer drawings, samples, dimensions and application needs.",
  },
  {
    icon: <ShieldCheck className="w-6 h-6 text-brand-orange" />,
    title: "Quality-Driven Production",
    desc: "Attention to material selection, production processes and product inspection at every stage.",
  },
];

export default function CompanyHighlights() {
  return (
    <section className="relative z-20 -mt-4 sm:-mt-6 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-white rounded-2xl shadow-xl border border-slate-200/80 p-6 md:p-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {highlights.map((item, idx) => (
            <div
              key={idx}
              className="flex items-start gap-4 p-4 rounded-xl hover:bg-slate-50 transition-colors group"
            >
              <div className="p-3 rounded-xl bg-orange-50/80 border border-brand-orange/15 group-hover:bg-brand-orange group-hover:text-white transition-all duration-200 shrink-0">
                <span className="group-hover:[&>svg]:text-white transition-colors">
                  {item.icon}
                </span>
              </div>
              <div className="space-y-1">
                <h3 className="font-heading text-base font-bold text-brand-navy group-hover:text-brand-orange transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
