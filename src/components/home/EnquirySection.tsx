"use client";

import React, { useState } from "react";
import { Send, Phone, Mail, MapPin, Clock, ShieldCheck, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";
import { companyInfo } from "@/data/company";
import { productsData } from "@/data/products";
import { rubberMaterials } from "@/data/materials";

export default function EnquirySection() {
  const [formData, setFormData] = useState({
    fullName: "",
    companyName: "",
    email: "",
    contactNumber: "",
    productCategory: "Rubber O-Rings",
    materialRequirement: "Nitrile Rubber (NBR)",
    message: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [feedbackMessage, setFeedbackMessage] = useState("");

  const validate = () => {
    const errs: Record<string, string> = {};

    if (!formData.fullName.trim()) {
      errs.fullName = "Full name is required.";
    } else if (formData.fullName.trim().length < 2) {
      errs.fullName = "Name must be at least 2 characters.";
    }

    if (!formData.email.trim()) {
      errs.email = "Email address is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      errs.email = "Please enter a valid email address.";
    }

    if (!formData.contactNumber.trim()) {
      errs.contactNumber = "Contact phone number is required.";
    } else if (formData.contactNumber.trim().length < 8) {
      errs.contactNumber = "Please enter a valid telephone number.";
    }

    if (!formData.message.trim()) {
      errs.message = "Please describe your project specifications or quantities.";
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => {
        const copy = { ...prev };
        delete copy[name];
        return copy;
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus("submitting");
    setFeedbackMessage("");

    try {
      const res = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const json = await res.json();

      if (!res.ok) {
        throw new Error(json.error || "Submission failed. Please check your inputs.");
      }

      setStatus("success");
      setFeedbackMessage(
        json.message ||
          "Your technical enquiry has been registered with Formula Rub Tech. Our team will review your specifications."
      );
      setFormData({
        fullName: "",
        companyName: "",
        email: "",
        contactNumber: "",
        productCategory: "Rubber O-Rings",
        materialRequirement: "Nitrile Rubber (NBR)",
        message: "",
      });
    } catch (err: any) {
      setStatus("error");
      setFeedbackMessage(
        err.message || "Failed to submit enquiry. Please call us directly for immediate technical assistance."
      );
    }
  };

  return (
    <section id="enquiry" className="py-20 lg:py-28 bg-brand-surface relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 space-y-4">
          <span className="inline-flex items-center gap-2 text-xs font-bold tracking-widest text-brand-orange uppercase bg-orange-50 px-3.5 py-1 rounded-full border border-brand-orange/20">
            TECHNICAL RFQ &amp; INQUIRY DESK
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-brand-navy tracking-tight">
            Let&apos;s Discuss Your Rubber Component Requirements
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Share your product specifications and manufacturing requirements with our team. We will help you explore a suitable rubber solution, formulate compounds, and estimate tooling costs.
          </p>
        </div>

        {/* 2-Column Split: Form (7 cols) + Information Panel (5 cols) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Form Column */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/90 shadow-md">
            <form onSubmit={handleSubmit} className="space-y-5" noValidate>
              {/* Row 1: Name & Company */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="fullName" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                    Full Name <span className="text-brand-orange">*</span>
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-xl border text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-brand-orange/50 transition-colors ${
                      errors.fullName ? "border-red-500 bg-red-50/20" : "border-slate-200 bg-slate-50/50"
                    }`}
                  />
                  {errors.fullName && (
                    <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      <span>{errors.fullName}</span>
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="companyName" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                    Company Name
                  </label>
                  <input
                    type="text"
                    id="companyName"
                    name="companyName"
                    value={formData.companyName}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50/50 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-brand-orange/50 transition-colors"
                  />
                </div>
              </div>

              {/* Row 2: Email & Contact Number */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="email" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                    Business Email <span className="text-brand-orange">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-xl border text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-brand-orange/50 transition-colors ${
                      errors.email ? "border-red-500 bg-red-50/20" : "border-slate-200 bg-slate-50/50"
                    }`}
                  />
                  {errors.email && (
                    <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      <span>{errors.email}</span>
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="contactNumber" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                    Contact Number <span className="text-brand-orange">*</span>
                  </label>
                  <input
                    type="tel"
                    id="contactNumber"
                    name="contactNumber"
                    value={formData.contactNumber}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-xl border text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-brand-orange/50 transition-colors ${
                      errors.contactNumber ? "border-red-500 bg-red-50/20" : "border-slate-200 bg-slate-50/50"
                    }`}
                  />
                  {errors.contactNumber && (
                    <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      <span>{errors.contactNumber}</span>
                    </p>
                  )}
                </div>
              </div>

              {/* Row 3: Product Category & Material Requirements */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="productCategory" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                    Product Category
                  </label>
                  <select
                    id="productCategory"
                    name="productCategory"
                    value={formData.productCategory}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50/50 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-brand-orange/50 transition-colors"
                  >
                    {productsData.map((prod) => (
                      <option key={prod.id} value={prod.name}>
                        {prod.name}
                      </option>
                    ))}
                    <option value="Custom Tooling / Other Component">
                      Custom Tooling / Other Component
                    </option>
                  </select>
                </div>

                <div>
                  <label htmlFor="materialRequirement" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                    Material Requirement
                  </label>
                  <select
                    id="materialRequirement"
                    name="materialRequirement"
                    value={formData.materialRequirement}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50/50 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-brand-orange/50 transition-colors"
                  >
                    {rubberMaterials.map((mat) => (
                      <option key={mat.id} value={mat.name}>
                        {mat.name} ({mat.code.split(" ")[0]})
                      </option>
                    ))}
                    <option value="Need Material Recommendation">
                      Need Engineering Recommendation
                    </option>
                  </select>
                </div>
              </div>

              {/* Row 4: Message */}
              <div>
                <label htmlFor="message" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                  Message / Project Specifications <span className="text-brand-orange">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-xl border text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-brand-orange/50 transition-colors ${
                    errors.message ? "border-red-500 bg-red-50/20" : "border-slate-200 bg-slate-50/50"
                  }`}
                />
                {errors.message && (
                  <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
                    <AlertCircle className="w-3.5 h-3.5" />
                    <span>{errors.message}</span>
                  </p>
                )}
              </div>

              {/* Privacy Notice */}
              <div className="flex items-start gap-2 text-xs text-slate-500 pt-1">
                <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>
                  <strong>Strict Confidentiality:</strong> Your CAD drawings, proprietary dimensional prints, and contact data are kept strictly confidential.
                </span>
              </div>

              {/* Success / Error Message Banner */}
              {status === "success" && (
                <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs sm:text-sm flex items-start gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="block font-bold">Enquiry Successfully Dispatched!</strong>
                    <span>{feedbackMessage}</span>
                  </div>
                </div>
              )}

              {status === "error" && (
                <div className="p-4 rounded-xl bg-red-50 border border-red-200 text-red-800 text-xs sm:text-sm flex items-start gap-2.5">
                  <AlertCircle className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="block font-bold">Submission Notice:</strong>
                    <span>{feedbackMessage}</span>
                  </div>
                </div>
              )}

              {/* Submit Button */}
              <div>
                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl font-heading font-bold text-sm sm:text-base text-white bg-brand-orange hover:bg-brand-orange-dark shadow-md hover:shadow-lg transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {status === "submitting" ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      <span>Transmitting Technical RFQ...</span>
                    </>
                  ) : (
                    <>
                      <span>Submit Enquiry</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>

          {/* Information Panel (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-brand-navy text-white rounded-3xl p-7 sm:p-8 border border-white/10 shadow-lg space-y-6">
              <div>
                <span className="text-xs font-bold text-brand-orange uppercase tracking-wider block">
                  DIRECT CONTACT DESK
                </span>
                <h3 className="font-heading text-2xl font-bold text-white mt-1">
                  Connect Directly With Manufacturing
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 mt-2 leading-relaxed">
                  Have an urgent production run or need immediate dimensional feedback? Speak directly with our technical team in Vasai East.
                </p>
              </div>

              <div className="space-y-4 pt-2 border-t border-white/10 text-xs sm:text-sm">
                <div className="flex items-start gap-3">
                  <div className="p-2.5 rounded-xl bg-white/10 text-brand-orange shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="font-bold text-white block">Factory &amp; Works:</span>
                    <p className="text-slate-300 leading-relaxed text-xs">
                      {companyInfo.fullAddress}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2.5 rounded-xl bg-white/10 text-brand-orange shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="font-bold text-white block">Call Direct:</span>
                    <div className="space-y-0.5 mt-0.5">
                      {companyInfo.phoneNumbers.map((p, idx) => (
                        <a
                          key={idx}
                          href={`tel:${p.raw}`}
                          className="block text-slate-200 hover:text-brand-orange font-semibold transition-colors"
                        >
                          {p.display}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2.5 rounded-xl bg-white/10 text-brand-orange shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="font-bold text-white block">Direct Email:</span>
                    <a
                      href={`mailto:${companyInfo.email}`}
                      className="text-slate-200 hover:text-brand-orange transition-colors truncate block"
                    >
                      {companyInfo.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2.5 rounded-xl bg-white/10 text-brand-orange shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="font-bold text-white block">Operating Schedule:</span>
                    <p className="text-slate-300 text-xs">
                      {companyInfo.workingHours}
                    </p>
                  </div>
                </div>
              </div>

              {/* Service commitment card */}
              <div className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-2">
                <div className="flex items-center gap-2 text-xs font-bold text-brand-orange">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>24-Hour Engineering Turnaround</span>
                </div>
                <p className="text-[11px] text-slate-300 leading-relaxed">
                  We review dimensional drawings, recommend polymers, and provide initial feasibility estimates within 1 business day.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
