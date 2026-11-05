"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { X, ChevronDown, Phone, Mail, ArrowRight, ShieldCheck, MapPin } from "lucide-react";
import { productsData } from "@/data/products";
import { companyInfo } from "@/data/company";
import Logo from "../ui/Logo";
import { useEnquiryModal } from "@/context/EnquiryModalContext";

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileNav({ isOpen, onClose }: MobileNavProps) {
  const [productsOpen, setProductsOpen] = useState(true);
  const { openEnquiryModal } = useEnquiryModal();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 lg:hidden flex">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-brand-navy-deep/80 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Slide-out drawer */}
      <div className="relative ml-auto w-full max-w-md bg-white h-full shadow-2xl flex flex-col z-10 overflow-y-auto">
        {/* Drawer Header */}
        <div className="flex items-center justify-between p-4 border-b border-slate-100">
          <Logo showTagline={false} />
          <button
            onClick={onClose}
            className="p-2 rounded-lg text-slate-500 hover:text-brand-navy hover:bg-slate-100 transition-colors focus:outline-none"
            aria-label="Close navigation menu"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Navigation Links */}
        <div className="flex-1 px-4 py-6 space-y-1">
          <Link
            href="/"
            onClick={onClose}
            className="block px-3 py-2.5 rounded-lg text-base font-bold text-brand-navy hover:bg-slate-50 hover:text-brand-orange transition-colors"
          >
            Home
          </Link>

          <Link
            href="#about"
            onClick={onClose}
            className="block px-3 py-2.5 rounded-lg text-base font-bold text-slate-700 hover:bg-slate-50 hover:text-brand-orange transition-colors"
          >
            About Us
          </Link>

          {/* Products Accordion */}
          <div className="rounded-xl border border-slate-200/80 overflow-hidden my-2">
            <button
              onClick={() => setProductsOpen(!productsOpen)}
              className="w-full flex items-center justify-between px-3.5 py-3 text-left font-bold text-brand-navy bg-slate-50 hover:bg-slate-100/80 transition-colors"
            >
              <span className="flex items-center gap-2">
                <span>Products &amp; Components</span>
                <span className="text-[11px] font-semibold px-2 py-0.5 rounded-full bg-brand-orange/10 text-brand-orange">
                  9 Categories
                </span>
              </span>
              <ChevronDown
                className={`w-4 h-4 text-slate-500 transition-transform duration-200 ${
                  productsOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {productsOpen && (
              <div className="bg-white divide-y divide-slate-100 p-2 space-y-1 max-h-72 overflow-y-auto">
                {productsData.map((item) => (
                  <Link
                    key={item.id}
                    href={`#product-${item.slug}`}
                    onClick={onClose}
                    className="flex items-center gap-3 p-2 rounded-lg hover:bg-slate-50 text-slate-700 hover:text-brand-orange transition-colors"
                  >
                    <div className="relative w-10 h-10 rounded bg-slate-100 border border-slate-200 p-0.5 shrink-0">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        sizes="40px"
                        className="object-contain"
                      />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="text-sm font-semibold text-brand-navy truncate">
                        {item.name}
                      </p>
                      <p className="text-[11px] text-slate-400 truncate">
                        {item.materials.slice(0, 3).join(", ")}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link
            href="#manufacturing"
            onClick={onClose}
            className="block px-3 py-2.5 rounded-lg text-base font-bold text-slate-700 hover:bg-slate-50 hover:text-brand-orange transition-colors"
          >
            Manufacturing
          </Link>

          <Link
            href="#materials"
            onClick={onClose}
            className="block px-3 py-2.5 rounded-lg text-base font-bold text-slate-700 hover:bg-slate-50 hover:text-brand-orange transition-colors"
          >
            Materials &amp; Compounds
          </Link>

          <Link
            href="#quality"
            onClick={onClose}
            className="block px-3 py-2.5 rounded-lg text-base font-bold text-slate-700 hover:bg-slate-50 hover:text-brand-orange transition-colors"
          >
            Quality Assurance
          </Link>

          <Link
            href="#gallery"
            onClick={onClose}
            className="block px-3 py-2.5 rounded-lg text-base font-bold text-slate-700 hover:bg-slate-50 hover:text-brand-orange transition-colors"
          >
            Gallery
          </Link>

          <Link
            href="#enquiry"
            onClick={onClose}
            className="block px-3 py-2.5 rounded-lg text-base font-bold text-slate-700 hover:bg-slate-50 hover:text-brand-orange transition-colors"
          >
            Contact Us
          </Link>
        </div>

        {/* Mobile Contact & CTA Footer */}
        <div className="p-4 border-t border-slate-100 bg-slate-50 space-y-3">
          <button
            type="button"
            onClick={() => {
              onClose();
              openEnquiryModal();
            }}
            className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl font-heading font-bold text-sm text-white bg-brand-orange hover:bg-brand-orange-dark shadow-md transition-colors cursor-pointer"
          >
            <span>Get a Quote / Enquire Now</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <div className="pt-2 text-xs text-slate-600 space-y-2">
            <a
              href={`tel:${companyInfo.phoneNumbers[0].raw}`}
              className="flex items-center gap-2 text-brand-navy font-semibold hover:text-brand-orange"
            >
              <Phone className="w-3.5 h-3.5 text-brand-orange" />
              <span>{companyInfo.phoneNumbers[0].display}</span>
            </a>
            <a
              href={`mailto:${companyInfo.email}`}
              className="flex items-center gap-2 text-slate-600 hover:text-brand-orange"
            >
              <Mail className="w-3.5 h-3.5 text-brand-orange" />
              <span className="truncate">{companyInfo.email}</span>
            </a>
            <div className="flex items-start gap-2 text-slate-500 text-[11px] pt-1">
              <MapPin className="w-3.5 h-3.5 text-brand-orange shrink-0 mt-0.5" />
              <span>Vasai East, Palghar, Maharashtra - 401210</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
