"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronRight, X, Check, Disc, Maximize2, ShieldCheck, Layers, Spline, Sliders, Cpu, Grid, Box } from "lucide-react";
import { productsData, Product } from "@/data/products";
import { useEnquiryModal } from "@/context/EnquiryModalContext";

const iconMap: Record<string, React.ReactNode> = {
  Disc: <Disc className="w-5 h-5" />,
  Maximize2: <Maximize2 className="w-5 h-5" />,
  Shield: <ShieldCheck className="w-5 h-5" />,
  Layers: <Layers className="w-5 h-5" />,
  Spline: <Spline className="w-5 h-5" />,
  Activity: <Sliders className="w-5 h-5" />,
  Cpu: <Cpu className="w-5 h-5" />,
  Grid: <Grid className="w-5 h-5" />,
  Box: <Box className="w-5 h-5" />,
};

export default function ProductShowcase() {
  const [activeModalProduct, setActiveModalProduct] = useState<Product | null>(null);
  const { openEnquiryModal } = useEnquiryModal();

  return (
    <section id="products" className="py-20 lg:py-28 bg-brand-surface border-y border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="inline-flex items-center gap-2 text-xs font-bold tracking-widest text-brand-orange uppercase bg-orange-50 px-3.5 py-1 rounded-full border border-brand-orange/20">
            ENGINEERED ELASTOMERIC COMPONENTS
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-brand-navy tracking-tight">
            Our Industrial Rubber Product Range
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Explore our range of precision-engineered rubber components designed for diverse industrial applications. Built to tight dimensional tolerances in accordance with ISO standards.
          </p>
        </div>

        {/* 9 Product Cards (3x3 on Desktop, 2 on Tablet, 1 on Mobile) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {productsData.map((product) => (
            <div
              key={product.id}
              id={`product-${product.slug}`}
              className="group bg-white rounded-2xl border border-slate-200/90 shadow-sm hover:shadow-card-hover hover:border-brand-orange/40 transition-all duration-300 flex flex-col overflow-hidden"
            >
              {/* Product Image Frame with object-fit: contain to preserve product visibility */}
              <div className="relative w-full h-56 bg-slate-50 border-b border-slate-100 p-6 flex items-center justify-center overflow-hidden">
                <div className="relative w-full h-full">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-contain transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                {/* Category Icon Badge */}
                <div className="absolute top-4 left-4 p-2.5 rounded-xl bg-white shadow-sm border border-slate-200/60 text-brand-orange">
                  {iconMap[product.categoryIcon] || <Layers className="w-5 h-5" />}
                </div>

                {/* Quick Spec Badge */}
                <span className="absolute bottom-4 right-4 text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md bg-brand-navy text-white shadow-sm">
                  {product.materials[0]}
                </span>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <h3 className="font-heading text-xl font-bold text-brand-navy group-hover:text-brand-orange transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed line-clamp-3">
                    {product.shortDesc}
                  </p>
                </div>

                {/* Key Features Pill list */}
                <div className="pt-2 border-t border-slate-100 space-y-1.5">
                  {product.features.slice(0, 2).map((feat, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-slate-500">
                      <Check className="w-3.5 h-3.5 text-brand-orange shrink-0" />
                      <span className="truncate">{feat}</span>
                    </div>
                  ))}
                </div>

                {/* Card Action Link */}
                <div className="pt-3 flex items-center justify-between">
                  <button
                    type="button"
                    onClick={() => setActiveModalProduct(product)}
                    className="inline-flex items-center gap-1.5 text-sm font-bold text-brand-blue hover:text-brand-orange transition-colors focus:outline-none"
                  >
                    <span>View Technical Details</span>
                    <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </button>

                  <button
                    type="button"
                    onClick={() => openEnquiryModal(product.name)}
                    className="text-xs font-semibold px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-brand-orange hover:text-white text-slate-700 transition-colors cursor-pointer"
                  >
                    RFQ
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Products CTA at bottom of section */}
        <div className="mt-16 text-center pt-8 border-t border-slate-200/80">
          <div className="max-w-2xl mx-auto space-y-4">
            <p className="text-sm text-slate-600">
              Need custom durometer hardness, non-standard dimensional tooling, or fabric-reinforced variants?
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <button
                type="button"
                onClick={() => openEnquiryModal()}
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-heading font-bold text-sm text-white bg-brand-orange hover:bg-brand-orange-dark shadow-md hover:shadow-lg transition-all duration-200 group cursor-pointer"
              >
                <span>Request Custom Product Tooling</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
              <Link
                href="#materials"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-heading font-semibold text-sm text-brand-navy hover:text-brand-orange bg-white border border-slate-300 shadow-sm transition-colors"
              >
                <span>Compare Rubber Materials</span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Interactive Product Details Modal */}
      {activeModalProduct && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-brand-navy-deep/80 backdrop-blur-sm animate-fade-in">
          <div
            className="fixed inset-0"
            onClick={() => setActiveModalProduct(null)}
          />
          <div className="relative bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto z-10 border border-slate-200 p-6 sm:p-8">
            {/* Modal Close Button */}
            <button
              onClick={() => setActiveModalProduct(null)}
              className="absolute top-5 right-5 p-2 rounded-xl text-slate-400 hover:text-brand-navy hover:bg-slate-100 transition-colors"
              aria-label="Close dialog"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Modal Content */}
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <span className="p-2.5 rounded-xl bg-orange-50 text-brand-orange border border-brand-orange/20">
                  {iconMap[activeModalProduct.categoryIcon] || <Layers className="w-6 h-6" />}
                </span>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-brand-orange">
                    Formula Rub Tech Catalog
                  </span>
                  <h3 className="font-heading text-2xl font-extrabold text-brand-navy">
                    {activeModalProduct.name}
                  </h3>
                </div>
              </div>

              {/* Product Image Frame */}
              <div className="relative w-full h-64 bg-slate-100 rounded-xl overflow-hidden border border-slate-200 p-4 flex items-center justify-center">
                <Image
                  src={activeModalProduct.image}
                  alt={activeModalProduct.name}
                  fill
                  sizes="600px"
                  className="object-contain"
                />
              </div>

              <div className="space-y-2">
                <h4 className="font-heading text-sm font-bold text-brand-navy uppercase tracking-wider">
                  Technical Overview
                </h4>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {activeModalProduct.fullDesc}
                </p>
              </div>

              {/* Polymers */}
              <div className="space-y-2">
                <h4 className="font-heading text-sm font-bold text-brand-navy uppercase tracking-wider">
                  Available Polymer Formulations
                </h4>
                <div className="flex flex-wrap gap-2">
                  {activeModalProduct.materials.map((m, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 rounded-lg bg-slate-100 text-xs font-semibold text-brand-navy border border-slate-200"
                    >
                      {m}
                    </span>
                  ))}
                </div>
              </div>

              {/* Typical Applications */}
              <div className="space-y-2">
                <h4 className="font-heading text-sm font-bold text-brand-navy uppercase tracking-wider">
                  Industrial Applications
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-600">
                  {activeModalProduct.applications.map((app, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <Check className="w-3.5 h-3.5 text-brand-orange shrink-0" />
                      <span>{app}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action in Modal */}
              <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-3">
                <span className="text-xs text-slate-500">
                  Tooling &amp; sample batches ready upon technical drawing review.
                </span>
                <button
                  type="button"
                  onClick={() => {
                    const prodName = activeModalProduct.name;
                    setActiveModalProduct(null);
                    openEnquiryModal(prodName);
                  }}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-heading font-bold text-sm text-white bg-brand-orange hover:bg-brand-orange-dark shadow-md transition-colors cursor-pointer"
                >
                  <span>Enquire For This Product</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
