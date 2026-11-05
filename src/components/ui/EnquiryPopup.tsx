"use client";

import React, { useState, useEffect, useRef } from "react";
import { X, Send, CheckCircle2, AlertCircle, Loader2, ShieldCheck, PhoneCall, Mail } from "lucide-react";
import { useEnquiryModal } from "@/context/EnquiryModalContext";

const productCategories = [
  "Rubber O-Rings",
  "Rubber Gaskets",
  "Rubber U-Seals",
  "Rubber Bellows",
  "Rubber Profiles",
  "Anti-Vibrators & Mounts",
  "Rubber Diaphragms",
  "Rubber Sheets",
  "Rubber Pads",
  "Other / Custom Requirement",
];

const materialOptions = [
  "Silicone Rubber (VMQ)",
  "Nitrile Rubber (NBR / Buna-N)",
  "EPDM Rubber (Ethylene Propylene)",
  "Viton / FKM (Fluoroelastomer)",
  "Neoprene Rubber (CR / Chloroprene)",
  "Natural Rubber (NR / Polyisoprene)",
  "SBR (Styrene Butadiene)",
  "Butyl Rubber (IIR)",
  "Custom In-House Polymer Blend",
  "Not Sure / Engineering Advice Needed",
];

export default function EnquiryPopup() {
  const { isOpen, prefilledCategory, closeEnquiryModal } = useEnquiryModal();

  const [formData, setFormData] = useState({
    fullName: "",
    companyName: "",
    email: "",
    contactNumber: "",
    productCategory: "Rubber O-Rings",
    materialRequirement: "Silicone Rubber (VMQ)",
    message: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const modalContentRef = useRef<HTMLDivElement>(null);

  // Sync prefilled category when opening modal
  useEffect(() => {
    if (prefilledCategory && productCategories.includes(prefilledCategory)) {
      setFormData((prev) => ({ ...prev, productCategory: prefilledCategory }));
    }
  }, [prefilledCategory]);

  // Lock body scroll when modal is open and handle Escape key
  useEffect(() => {
    if (!isOpen) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        closeEnquiryModal();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, closeEnquiryModal]);

  if (!isOpen) return null;

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.fullName.trim() || formData.fullName.trim().length < 2) {
      newErrors.fullName = "Please enter your full name (at least 2 characters).";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim() || !emailRegex.test(formData.email.trim())) {
      newErrors.email = "Please enter a valid business email address.";
    }

    const phoneDigits = formData.contactNumber.replace(/[^0-9+]/g, "");
    if (!formData.contactNumber.trim() || phoneDigits.length < 8) {
      newErrors.contactNumber = "Please enter a valid phone number with country/area code.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
    if (submitError) setSubmitError("");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isSubmitting) return;

    if (!validateForm()) return;

    setIsSubmitting(true);
    setSubmitError("");

    try {
      const response = await fetch("/api/enquiry", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Failed to submit enquiry. Please try again.");
      }

      setSubmitSuccess(true);
    } catch (err: any) {
      setSubmitError(err.message || "An unexpected error occurred. Please contact us directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setFormData({
      fullName: "",
      companyName: "",
      email: "",
      contactNumber: "",
      productCategory: "Rubber O-Rings",
      materialRequirement: "Silicone Rubber (VMQ)",
      message: "",
    });
    setErrors({});
    setSubmitSuccess(false);
    setSubmitError("");
    closeEnquiryModal();
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-heading"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 md:p-6 overflow-y-auto animate-fade-in"
    >
      {/* Semi-transparent background overlay */}
      <div
        onClick={closeEnquiryModal}
        className="fixed inset-0 bg-slate-950/70 backdrop-blur-sm transition-opacity duration-300"
        aria-hidden="true"
      />

      {/* Modal Dialog Card */}
      <div
        ref={modalContentRef}
        className="relative z-10 w-full max-w-xl bg-white rounded-2xl shadow-2xl border border-slate-200/90 overflow-hidden my-auto max-h-[92vh] flex flex-col transform transition-all duration-300 animate-scale-up"
      >
        {/* Header Bar */}
        <div className="relative px-6 py-5 bg-gradient-to-r from-[#071426] to-[#0A1D3A] text-white shrink-0 border-b border-slate-800">
          <div className="flex items-start justify-between pr-8">
            <div>
              <span className="inline-block text-[11px] font-bold tracking-widest text-[#F04416] uppercase mb-1">
                Formula Rub Tech · Engineering Desk
              </span>
              <h2 id="modal-heading" className="font-heading text-xl sm:text-2xl font-bold text-white tracking-tight">
                Request a Quote
              </h2>
              <p className="mt-1 text-xs sm:text-sm text-slate-300 leading-relaxed">
                Tell us about your rubber component requirements. Our team will get in touch with you.
              </p>
            </div>
          </div>

          {/* Close (X) button */}
          <button
            type="button"
            onClick={closeEnquiryModal}
            className="absolute top-4 right-4 p-2 rounded-xl text-slate-400 hover:text-white hover:bg-white/10 transition-colors focus:outline-none focus:ring-2 focus:ring-[#F04416]"
            aria-label="Close quote modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Form Body */}
        <div className="flex-1 overflow-y-auto p-5 sm:p-6 space-y-4">
          {submitSuccess ? (
            <div className="py-8 text-center space-y-4">
              <div className="w-16 h-16 bg-emerald-50 rounded-full flex items-center justify-center mx-auto border border-emerald-200 text-emerald-600 shadow-sm">
                <CheckCircle2 className="w-9 h-9" />
              </div>
              <h3 className="font-heading text-xl font-bold text-[#071426]">
                Enquiry Submitted Successfully!
              </h3>
              <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                Thank you, <strong className="text-slate-900">{formData.fullName}</strong>. Your technical requirements for{" "}
                <strong className="text-slate-900">{formData.productCategory}</strong> have been registered. Our engineering desk in Vasai will review your details and reach out within 24 business hours.
              </p>
              <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                <button
                  type="button"
                  onClick={handleReset}
                  className="w-full sm:w-auto px-6 py-2.5 rounded-xl font-heading font-bold text-sm text-white bg-[#071426] hover:bg-[#F04416] transition-colors"
                >
                  Done &amp; Close
                </button>
                <a
                  href="tel:+919503220778"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-5 py-2.5 rounded-xl font-heading font-bold text-sm text-[#071426] bg-slate-100 hover:bg-slate-200 transition-colors"
                >
                  <PhoneCall className="w-4 h-4 text-[#F04416]" />
                  <span>Call +91 9503220778</span>
                </a>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate className="space-y-4">
              {submitError && (
                <div className="p-3.5 rounded-xl bg-red-50 border border-red-200 flex items-start gap-2.5 text-xs text-red-700">
                  <AlertCircle className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
                  <span>{submitError}</span>
                </div>
              )}

              {/* 1. Full Name & Company Name */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label htmlFor="modal-fullName" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Full Name <span className="text-[#F04416]">*</span>
                  </label>
                  <input
                    id="modal-fullName"
                    name="fullName"
                    type="text"
                    required
                    value={formData.fullName}
                    onChange={handleChange}
                    className={`w-full px-3.5 py-2.5 rounded-xl text-sm border bg-slate-50/50 text-slate-900 focus:bg-white focus:outline-none focus:ring-2 transition-all ${
                      errors.fullName
                        ? "border-red-400 focus:ring-red-200"
                        : "border-slate-200 focus:border-[#F04416] focus:ring-orange-100"
                    }`}
                  />
                  {errors.fullName && (
                    <p className="mt-1 text-[11px] text-red-600">{errors.fullName}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="modal-companyName" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Company Name
                  </label>
                  <input
                    id="modal-companyName"
                    name="companyName"
                    type="text"
                    value={formData.companyName}
                    onChange={handleChange}
                    className="w-full px-3.5 py-2.5 rounded-xl text-sm border border-slate-200 bg-slate-50/50 text-slate-900 focus:bg-white focus:outline-none focus:border-[#F04416] focus:ring-2 focus:ring-orange-100 transition-all"
                  />
                </div>
              </div>

              {/* 2. Email Address & Contact Number */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label htmlFor="modal-email" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Email Address <span className="text-[#F04416]">*</span>
                  </label>
                  <input
                    id="modal-email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full px-3.5 py-2.5 rounded-xl text-sm border bg-slate-50/50 text-slate-900 focus:bg-white focus:outline-none focus:ring-2 transition-all ${
                      errors.email
                        ? "border-red-400 focus:ring-red-200"
                        : "border-slate-200 focus:border-[#F04416] focus:ring-orange-100"
                    }`}
                  />
                  {errors.email && (
                    <p className="mt-1 text-[11px] text-red-600">{errors.email}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="modal-contactNumber" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Contact Number <span className="text-[#F04416]">*</span>
                  </label>
                  <input
                    id="modal-contactNumber"
                    name="contactNumber"
                    type="tel"
                    required
                    value={formData.contactNumber}
                    onChange={handleChange}
                    className={`w-full px-3.5 py-2.5 rounded-xl text-sm border bg-slate-50/50 text-slate-900 focus:bg-white focus:outline-none focus:ring-2 transition-all ${
                      errors.contactNumber
                        ? "border-red-400 focus:ring-red-200"
                        : "border-slate-200 focus:border-[#F04416] focus:ring-orange-100"
                    }`}
                  />
                  {errors.contactNumber && (
                    <p className="mt-1 text-[11px] text-red-600">{errors.contactNumber}</p>
                  )}
                </div>
              </div>

              {/* 3. Product Category & Material Requirement */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label htmlFor="modal-productCategory" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Product Category <span className="text-[#F04416]">*</span>
                  </label>
                  <select
                    id="modal-productCategory"
                    name="productCategory"
                    value={formData.productCategory}
                    onChange={handleChange}
                    className="w-full px-3.5 py-2.5 rounded-xl text-sm border border-slate-200 bg-slate-50/50 text-slate-900 focus:bg-white focus:outline-none focus:border-[#F04416] focus:ring-2 focus:ring-orange-100 transition-all cursor-pointer"
                  >
                    {productCategories.map((cat) => (
                      <option key={cat} value={cat}>
                        {cat}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="modal-materialRequirement" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Material Requirement
                  </label>
                  <select
                    id="modal-materialRequirement"
                    name="materialRequirement"
                    value={formData.materialRequirement}
                    onChange={handleChange}
                    className="w-full px-3.5 py-2.5 rounded-xl text-sm border border-slate-200 bg-slate-50/50 text-slate-900 focus:bg-white focus:outline-none focus:border-[#F04416] focus:ring-2 focus:ring-orange-100 transition-all cursor-pointer"
                  >
                    {materialOptions.map((mat) => (
                      <option key={mat} value={mat}>
                        {mat}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* 4. Message / Project Requirements */}
              <div>
                <label htmlFor="modal-message" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  Message / Project Requirements
                </label>
                <textarea
                  id="modal-message"
                  name="message"
                  rows={3}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-3.5 py-2 rounded-xl text-sm border border-slate-200 bg-slate-50/50 text-slate-900 focus:bg-white focus:outline-none focus:border-[#F04416] focus:ring-2 focus:ring-orange-100 transition-all resize-none"
                />
              </div>

              {/* Footer row with Submit Enquiry button */}
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-slate-100">
                <div className="flex items-center gap-1.5 text-xs text-slate-500">
                  <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>ISO-standard confidentiality guaranteed</span>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl font-heading font-bold text-sm text-white bg-[#F04416] hover:bg-[#d4370e] transition-all shadow-md hover:shadow-lg disabled:opacity-60 disabled:cursor-not-allowed group"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Submitting Enquiry...</span>
                    </>
                  ) : (
                    <>
                      <span>Submit Enquiry</span>
                      <Send className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </>
                  )}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
