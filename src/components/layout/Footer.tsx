"use client";

import React from "react";
import Link from "next/link";
import { MapPin, Phone, Mail, Clock, ArrowRight, ShieldCheck, ChevronRight } from "lucide-react";
import Logo from "../ui/Logo";
import { companyInfo } from "@/data/company";
import { productsData } from "@/data/products";
import { useEnquiryModal } from "@/context/EnquiryModalContext";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const { openEnquiryModal } = useEnquiryModal();

  return (
    <footer className="bg-brand-navy-deep text-slate-300 border-t border-white/10 relative overflow-hidden">
      {/* Subtle top industrial accent bar */}
      <div className="h-1.5 w-full bg-gradient-to-r from-brand-orange via-amber-500 to-brand-blue" />

      {/* Main Footer Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
          {/* Col 1: Brand Info (4 cols) */}
          <div className="lg:col-span-4 space-y-5">
            <Logo variant="light" />
            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              Formula Rub Tech is an established Indian industrial rubber manufacturer specializing in high-precision rubber moulding, continuous extrusions, and custom tooling solutions engineered for demanding global applications.
            </p>

            <div className="pt-2 flex items-center space-x-3 text-xs text-slate-400">
              <div className="p-2 rounded-lg bg-white/5 border border-white/10">
                <span className="block text-white font-bold text-sm">2017</span>
                <span className="text-[10px] text-slate-400">Est. Year</span>
              </div>
              <div className="p-2 rounded-lg bg-white/5 border border-white/10">
                <span className="block text-white font-bold text-sm">9+</span>
                <span className="text-[10px] text-slate-400">Product Lines</span>
              </div>
              <div className="p-2 rounded-lg bg-white/5 border border-white/10">
                <span className="block text-white font-bold text-sm">8 Polymers</span>
                <span className="text-[10px] text-slate-400">Formulated</span>
              </div>
            </div>
          </div>

          {/* Col 2: Quick Links (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="font-heading text-sm font-bold tracking-wider text-white uppercase border-b border-white/10 pb-2">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/" className="hover:text-brand-orange transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-brand-orange" />
                  <span>Home</span>
                </Link>
              </li>
              <li>
                <Link href="#about" className="hover:text-brand-orange transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-brand-orange" />
                  <span>About Us</span>
                </Link>
              </li>
              <li>
                <Link href="#products" className="hover:text-brand-orange transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-brand-orange" />
                  <span>Products</span>
                </Link>
              </li>
              <li>
                <Link href="#manufacturing" className="hover:text-brand-orange transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-brand-orange" />
                  <span>Manufacturing</span>
                </Link>
              </li>
              <li>
                <Link href="#materials" className="hover:text-brand-orange transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-brand-orange" />
                  <span>Materials</span>
                </Link>
              </li>
              <li>
                <Link href="#quality" className="hover:text-brand-orange transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-brand-orange" />
                  <span>Quality Assurance</span>
                </Link>
              </li>
              <li>
                <Link href="#gallery" className="hover:text-brand-orange transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-brand-orange" />
                  <span>Gallery</span>
                </Link>
              </li>
              <li>
                <Link href="#enquiry" className="hover:text-brand-orange transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-brand-orange" />
                  <span>Contact Us</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Product Range (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-heading text-sm font-bold tracking-wider text-white uppercase border-b border-white/10 pb-2">
              Rubber Components
            </h4>
            <ul className="grid grid-cols-1 gap-2 text-sm">
              {productsData.map((prod) => (
                <li key={prod.id}>
                  <Link
                    href={`#product-${prod.slug}`}
                    className="hover:text-brand-orange transition-colors flex items-center gap-1.5 text-slate-300"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-orange shrink-0" />
                    <span className="truncate">{prod.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Contact & Location Info (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-heading text-sm font-bold tracking-wider text-white uppercase border-b border-white/10 pb-2">
              Factory Location
            </h4>
            <div className="space-y-3.5 text-xs text-slate-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-brand-orange shrink-0 mt-0.5" />
                <p className="leading-relaxed">
                  {companyInfo.fullAddress}
                </p>
              </div>

              <div className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-brand-orange shrink-0 mt-0.5" />
                <div className="space-y-1">
                  {companyInfo.phoneNumbers.map((phone, i) => (
                    <a
                      key={i}
                      href={`tel:${phone.raw}`}
                      className="block font-semibold hover:text-white transition-colors"
                    >
                      {phone.display}
                    </a>
                  ))}
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-brand-orange shrink-0" />
                <a
                  href={`mailto:${companyInfo.email}`}
                  className="hover:text-white transition-colors truncate"
                >
                  {companyInfo.email}
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-brand-orange shrink-0" />
                <span>{companyInfo.workingHours}</span>
              </div>
            </div>

            <div className="pt-2">
              <button
                type="button"
                onClick={() => openEnquiryModal()}
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg text-xs font-bold text-white bg-white/10 hover:bg-brand-orange transition-colors border border-white/15 cursor-pointer"
              >
                <span>Send Technical RFQ</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Copyright & Verification Notice */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>
            &copy; {currentYear} Formula Rub Tech. All Rights Reserved. Industrial Rubber Solutions.
          </p>
          <div className="flex items-center space-x-6 text-slate-400">
            <span>Designed in accordance with ISO Standards</span>
            <span>•</span>
            <span>
              Developed by{" "}
              <a
                href="https://integralwebsolution.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-300 hover:text-brand-orange underline underline-offset-2 transition-colors font-medium"
              >
                Integral Web Solution
              </a>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
