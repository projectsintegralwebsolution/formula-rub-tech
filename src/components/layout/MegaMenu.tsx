"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ChevronRight, Layers, ShieldCheck, Cpu, Sliders, Box, Grid, Disc, Maximize2, Spline } from "lucide-react";
import { productsData } from "@/data/products";
import { useEnquiryModal } from "@/context/EnquiryModalContext";

// Icon mapping helper
const iconMap: Record<string, React.ReactNode> = {
  Disc: <Disc className="w-3.5 h-3.5 text-brand-orange" />,
  Maximize2: <Maximize2 className="w-3.5 h-3.5 text-brand-orange" />,
  Shield: <ShieldCheck className="w-3.5 h-3.5 text-brand-orange" />,
  Layers: <Layers className="w-3.5 h-3.5 text-brand-orange" />,
  Spline: <Spline className="w-3.5 h-3.5 text-brand-orange" />,
  Activity: <Sliders className="w-3.5 h-3.5 text-brand-orange" />,
  Cpu: <Cpu className="w-3.5 h-3.5 text-brand-orange" />,
  Grid: <Grid className="w-3.5 h-3.5 text-brand-orange" />,
  Box: <Box className="w-3.5 h-3.5 text-brand-orange" />,
};

interface MegaMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MegaMenu({ isOpen, onClose }: MegaMenuProps) {
  const { openEnquiryModal } = useEnquiryModal();

  if (!isOpen) return null;

  return (
    <div
      className="absolute top-full left-1/2 -translate-x-1/2 w-[94vw] max-w-[1140px] z-50 bg-white rounded-2xl border border-slate-200/90 shadow-2xl mt-1 overflow-hidden animate-mega-menu"
      style={{
        left: "50%",
        transform: "translateX(-50%)",
      }}
      onMouseLeave={onClose}
    >
      {/* Horizontally centered container with responsive width & additional 30px height reduction */}
      <div className="px-4 sm:px-5 py-3 sm:py-3.5">
        {/* Compact Header row inside Mega Menu */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between pb-2 mb-2.5 border-b border-slate-100">
          <div>
            <span className="text-[10px] font-bold tracking-widest text-brand-orange uppercase">
              Precision Industrial Catalogue
            </span>
            <h3 className="font-heading text-base font-bold text-brand-navy">
              Comprehensive Industrial Rubber Product Range
            </h3>
          </div>
          <Link
            href="#products"
            onClick={onClose}
            className="mt-1 sm:mt-0 inline-flex items-center text-xs font-semibold text-brand-blue hover:text-brand-orange transition-colors group"
          >
            <span>View All 9 Product Categories On Homepage</span>
            <ArrowRight className="w-3.5 h-3.5 ml-1 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        {/* 3x3 Grid for all 9 products with optimized compact spacing */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-2.5">
          {productsData.map((product) => {
            return (
              <Link
                key={product.id}
                href={`#product-${product.slug}`}
                onClick={onClose}
                className="group flex items-start gap-2.5 p-2 rounded-xl border border-slate-100 hover:border-brand-orange/40 hover:bg-slate-50/80 transition-all duration-200"
              >
                {/* Product Thumbnail with Contain fit */}
                <div className="relative w-12 h-12 rounded-lg bg-slate-100 border border-slate-200/60 p-1 shrink-0 overflow-hidden flex items-center justify-center group-hover:shadow-sm">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    sizes="48px"
                    className="object-contain transition-transform duration-300 group-hover:scale-105"
                  />
                </div>

                {/* Info */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-1.5 mb-0.5">
                    <span className="p-0.5 rounded bg-orange-50 text-brand-orange shrink-0">
                      {iconMap[product.categoryIcon] || <Layers className="w-3 h-3" />}
                    </span>
                    <h4 className="font-heading text-[13px] font-bold text-brand-navy group-hover:text-brand-orange transition-colors truncate">
                      {product.name}
                    </h4>
                  </div>
                  <p className="text-[11px] text-slate-500 line-clamp-1 leading-snug">
                    {product.shortDesc}
                  </p>
                  <div className="mt-0.5 flex items-center text-[10px] sm:text-[11px] font-semibold text-brand-blue group-hover:text-brand-orange">
                    <span>Inspect specifications</span>
                    <ChevronRight className="w-2.5 h-2.5 ml-0.5 transition-transform group-hover:translate-x-0.5" />
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        {/* Compact Mega Menu Footer Callout */}
        <div className="mt-2.5 pt-2 border-t border-slate-100 flex flex-col md:flex-row items-center justify-between bg-gradient-to-r from-slate-50 via-white to-slate-50 px-3 py-2 rounded-xl border border-slate-200/50">
          <div className="flex items-center space-x-2.5 mb-1.5 md:mb-0">
            <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shrink-0" />
            <p className="text-[11px] sm:text-xs text-slate-600">
              <strong className="text-brand-navy font-semibold">Custom Moulding &amp; Tooling Service:</strong> We formulate custom rubber compounds &amp; machine new tooling to your exact drawings.
            </p>
          </div>
          <button
            type="button"
            onClick={() => {
              onClose();
              openEnquiryModal("Other / Custom Requirement");
            }}
            className="inline-flex items-center px-3 py-1.5 rounded-lg text-xs font-bold text-white bg-brand-navy hover:bg-brand-orange transition-colors shadow-sm shrink-0"
          >
            <span>Request Custom Part Formulation</span>
            <ArrowRight className="w-3 h-3 ml-1.5" />
          </button>
        </div>
      </div>
    </div>
  );
}
