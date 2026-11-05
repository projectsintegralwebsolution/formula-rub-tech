"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Maximize2, X, Eye } from "lucide-react";

interface GalleryItem {
  id: string;
  title: string;
  category: string;
  image: string;
  aspect: string;
}

const galleryItems: GalleryItem[] = [
  {
    id: "g1",
    title: "Rubber Extrusion Production Line",
    category: "Machinery & Infrastructure",
    image: "/images/machinery-extrusion.jpg",
    aspect: "col-span-1 lg:col-span-2 row-span-1",
  },
  {
    id: "g2",
    title: "Moulded Convoluted Rubber Bellows",
    category: "Finished Components",
    image: "/images/rubber-bellows.jpg",
    aspect: "col-span-1 row-span-1",
  },
  {
    id: "g3",
    title: "Heavy Two-Roll Polymer Mixing Mill",
    category: "Compounding Machinery",
    image: "/images/machinery-mixing-mill.jpg",
    aspect: "col-span-1 row-span-1",
  },
  {
    id: "g4",
    title: "Precision O-Ring & Seal Formulations",
    category: "Fluid Sealing",
    image: "/images/rubber-o-rings.jpg",
    aspect: "col-span-1 row-span-1",
  },
  {
    id: "g5",
    title: "High-Tonnage Hydraulic Compression Press",
    category: "Moulding Equipment",
    image: "/images/machinery-hydraulic-press.jpg",
    aspect: "col-span-1 lg:col-span-2 row-span-1",
  },
  {
    id: "g6",
    title: "Continuous Extruded Rubber Sealing Profiles",
    category: "Extrusions",
    image: "/images/rubber-profiles.jpg",
    aspect: "col-span-1 row-span-1",
  },
];

export default function GalleryPreview() {
  const [activeImage, setActiveImage] = useState<GalleryItem | null>(null);

  return (
    <section id="gallery" className="py-20 lg:py-28 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div className="max-w-2xl space-y-3">
            <span className="inline-flex items-center gap-2 text-xs font-bold tracking-widest text-brand-orange uppercase bg-orange-50 px-3.5 py-1 rounded-full border border-brand-orange/20">
              FACILITY &amp; PRODUCT GALLERY
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-brand-navy tracking-tight">
              A Glimpse Into Our Manufacturing &amp; Products
            </h2>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              Explore our workshop floor, active extrusion and moulding lines, and finished elastomeric components manufactured at our Vasai East facility.
            </p>
          </div>

          <Link
            href="#enquiry"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-heading font-bold text-sm text-brand-navy hover:text-brand-orange bg-slate-100 hover:bg-slate-200 transition-colors shrink-0 self-start md:self-end"
          >
            <span>Request Full Workshop Catalog</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Asymmetric Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setActiveImage(item)}
              className="group relative h-72 rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer bg-slate-100"
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />

              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-brand-navy-deep/90 via-brand-navy-deep/30 to-transparent opacity-80 group-hover:opacity-95 transition-opacity duration-300" />

              {/* Overlay Content */}
              <div className="absolute inset-0 p-6 flex flex-col justify-between z-10">
                <div className="flex justify-between items-start">
                  <span className="text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-white border border-white/20">
                    {item.category}
                  </span>
                  <div className="p-2 rounded-lg bg-white/20 backdrop-blur-md text-white opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                    <Eye className="w-4 h-4" />
                  </div>
                </div>

                <div>
                  <h3 className="font-heading text-lg font-bold text-white group-hover:text-brand-orange transition-colors">
                    {item.title}
                  </h3>
                  <span className="text-xs text-slate-300 mt-1 inline-flex items-center gap-1 font-medium">
                    <span>Click to inspect preview</span>
                    <Maximize2 className="w-3 h-3 ml-1" />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Gallery CTA */}
        <div className="mt-14 text-center">
          <Link
            href="#enquiry"
            className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-heading font-bold text-sm text-white bg-brand-orange hover:bg-brand-orange-dark shadow-md transition-colors group"
          >
            <span>View Our Manufacturing Portfolio &amp; Request Samples</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>

      {/* Lightbox Preview Modal */}
      {activeImage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-brand-navy-deep/90 backdrop-blur-md animate-fade-in">
          <div className="fixed inset-0" onClick={() => setActiveImage(null)} />
          <div className="relative max-w-4xl w-full bg-brand-navy-deep rounded-2xl overflow-hidden shadow-2xl border border-white/20 z-10 flex flex-col">
            {/* Modal Header */}
            <div className="flex items-center justify-between p-4 border-b border-white/10">
              <div>
                <span className="text-xs text-brand-orange font-bold uppercase tracking-wider block">
                  {activeImage.category}
                </span>
                <h4 className="font-heading text-lg font-bold text-white">
                  {activeImage.title}
                </h4>
              </div>
              <button
                onClick={() => setActiveImage(null)}
                className="p-2 rounded-xl text-slate-300 hover:text-white hover:bg-white/10 transition-colors"
                aria-label="Close image preview"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Modal Image View */}
            <div className="relative w-full h-[60vh] max-h-[500px] bg-black/60 p-4 flex items-center justify-center">
              <Image
                src={activeImage.image}
                alt={activeImage.title}
                fill
                sizes="1000px"
                className="object-contain"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
