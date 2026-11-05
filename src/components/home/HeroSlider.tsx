"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight, ArrowRight, ShieldCheck, Cog, CheckCircle2 } from "lucide-react";
import { useEnquiryModal } from "@/context/EnquiryModalContext";

interface Slide {
  id: number;
  eyebrow: string;
  heading: string;
  description: string;
  primaryCtaText: string;
  primaryCtaHref: string;
  secondaryCtaText: string;
  secondaryCtaHref: string;
  image: string;
  badgeText: string;
}

const slides: Slide[] = [
  {
    id: 1,
    eyebrow: "INDUSTRIAL RUBBER EXCELLENCE",
    heading: "Precision Engineered Rubber Solutions for Every Industry",
    description:
      "Delivering dependable rubber components through advanced manufacturing, quality materials and customized engineering.",
    primaryCtaText: "Explore Our Products",
    primaryCtaHref: "#products",
    secondaryCtaText: "Request Technical Quote",
    secondaryCtaHref: "#enquiry",
    image: "/images/hero-banner.jpg",
    badgeText: "Moulded & Extruded Elastomers",
  },
  {
    id: 2,
    eyebrow: "CUSTOM TOOLING & MOULDING",
    heading: "Custom Rubber Components. Built Around Your Requirements.",
    description:
      "Specialized rubber moulding and extrusion solutions designed to meet diverse industrial applications.",
    primaryCtaText: "Discuss Your Requirement",
    primaryCtaHref: "#enquiry",
    secondaryCtaText: "Discover Machinery",
    secondaryCtaHref: "#manufacturing",
    image: "/images/hero-slide-2.jpg",
    badgeText: "In-House Tooling & Formulation",
  },
];

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const { openEnquiryModal } = useEnquiryModal();

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  }, []);

  // Automatic transition every 6 seconds unless hovered
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      nextSlide();
    }, 6000);
    return () => clearInterval(interval);
  }, [isPaused, nextSlide]);

  return (
    <section
      className="relative w-full h-[620px] sm:h-[660px] lg:h-[720px] bg-brand-navy-deep overflow-hidden select-none"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      aria-label="Formula Rub Tech Industrial Rubber Solutions Showcase"
    >
      {/* Slides Background Images */}
      {slides.map((slide, index) => {
        const isActive = index === currentSlide;
        return (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              isActive ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
            }`}
          >
            {/* Background Image with Next.js Optimization */}
            <Image
              src={slide.image}
              alt={slide.heading}
              fill
              priority={index === 0}
              className="object-cover object-center transform scale-105 transition-transform duration-10000"
              sizes="100vw"
            />

            {/* Carefully engineered gradient overlays to preserve image clarity while ensuring pristine readability */}
            <div
              className={`absolute inset-0 bg-gradient-to-r ${
                index === 0
                  ? "from-brand-navy-deep/90 via-brand-navy-deep/45 to-transparent"
                  : "from-brand-navy-deep/95 via-brand-navy-deep/75 to-transparent"
              }`}
            />
            <div
              className={`absolute inset-0 bg-gradient-to-t ${
                index === 0
                  ? "from-brand-navy-deep/60 via-transparent to-transparent"
                  : "from-brand-navy-deep/80 via-transparent to-brand-navy-deep/40"
              }`}
            />

            {/* Slide Content - Positioned cleanly with upward shift to prevent lower obstruction */}
            <div className="relative z-20 h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center pb-16 sm:pb-20 lg:pb-24">
              <div className="max-w-2xl lg:max-w-3xl space-y-5">
                {/* Eyebrow badge */}
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-white text-xs font-bold tracking-widest uppercase">
                  <span className="w-2 h-2 rounded-full bg-brand-orange animate-pulse" />
                  <span>{slide.eyebrow}</span>
                  <span className="text-white/40">•</span>
                  <span className="text-slate-300 font-medium">{slide.badgeText}</span>
                </div>

                {/* Main Heading - H1 on active first slide */}
                {index === 0 ? (
                  <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-extrabold text-white tracking-tight leading-[1.12]">
                    {slide.heading}
                  </h1>
                ) : (
                  <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-extrabold text-white tracking-tight leading-[1.12]">
                    {slide.heading}
                  </h2>
                )}

                {/* Supporting description */}
                <p className="text-base sm:text-lg text-slate-200/90 font-normal leading-relaxed max-w-xl">
                  {slide.description}
                </p>

                {/* Action CTAs */}
                <div className="pt-3 flex flex-wrap items-center gap-4">
                  {slide.primaryCtaHref === "#enquiry" ? (
                    <button
                      type="button"
                      onClick={() => openEnquiryModal()}
                      className="inline-flex items-center justify-center gap-2.5 px-6 sm:px-7 py-3.5 rounded-xl font-heading font-bold text-sm sm:text-base text-white bg-brand-orange hover:bg-brand-orange-dark shadow-lg hover:shadow-orange-500/20 transition-all duration-200 group cursor-pointer"
                    >
                      <span>{slide.primaryCtaText}</span>
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </button>
                  ) : (
                    <Link
                      href={slide.primaryCtaHref}
                      className="inline-flex items-center justify-center gap-2.5 px-6 sm:px-7 py-3.5 rounded-xl font-heading font-bold text-sm sm:text-base text-white bg-brand-orange hover:bg-brand-orange-dark shadow-lg hover:shadow-orange-500/20 transition-all duration-200 group"
                    >
                      <span>{slide.primaryCtaText}</span>
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  )}

                  {slide.secondaryCtaHref === "#enquiry" ? (
                    <button
                      type="button"
                      onClick={() => openEnquiryModal()}
                      className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-heading font-semibold text-sm sm:text-base text-white bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 transition-all duration-200 cursor-pointer"
                    >
                      <span>{slide.secondaryCtaText}</span>
                    </button>
                  ) : (
                    <Link
                      href={slide.secondaryCtaHref}
                      className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-heading font-semibold text-sm sm:text-base text-white bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 transition-all duration-200"
                    >
                      <span>{slide.secondaryCtaText}</span>
                    </Link>
                  )}
                </div>

                {/* Trust Points Mini-row - Shifted upward to be completely visible */}
                <div className="pt-4 flex flex-wrap items-center gap-4 sm:gap-6 text-xs text-slate-300 font-medium">
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-brand-orange" />
                    <span>8 Polymers Formulated</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-brand-orange" />
                    <span>Custom Moulds &amp; Dies</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-brand-orange" />
                    <span>Vasai Industrial Facility</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}

      {/* Manual Navigation Arrows - Shifted upward cleanly */}
      <div className="absolute z-20 bottom-16 sm:bottom-20 right-4 sm:right-8 flex items-center space-x-3">
        <button
          type="button"
          onClick={prevSlide}
          className="p-3 rounded-xl bg-brand-navy-deep/80 hover:bg-brand-orange text-white border border-white/15 backdrop-blur-md transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-brand-orange"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        <button
          type="button"
          onClick={nextSlide}
          className="p-3 rounded-xl bg-brand-navy-deep/80 hover:bg-brand-orange text-white border border-white/15 backdrop-blur-md transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-brand-orange"
          aria-label="Next slide"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      {/* Pagination Indicators - Shifted upward cleanly */}
      <div className="absolute z-20 bottom-16 sm:bottom-20 left-4 sm:left-8 flex items-center space-x-2">
        {slides.map((slide, idx) => (
          <button
            key={slide.id}
            type="button"
            onClick={() => setCurrentSlide(idx)}
            className={`h-2 transition-all duration-300 rounded-full focus:outline-none ${
              idx === currentSlide
                ? "w-8 bg-brand-orange"
                : "w-2 bg-white/40 hover:bg-white/70"
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
