import React from "react";
import { MapPin, Phone, Mail, Award, Clock } from "lucide-react";
import { companyInfo } from "@/data/company";

export default function PreHeader() {
  return (
    <div className="bg-brand-navy-deep text-slate-300 text-xs border-b border-white/10 hidden md:block select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-10">
          {/* Left: Manufacturing highlight badge & location */}
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-1.5 text-brand-orange-light font-medium">
              <Award className="w-3.5 h-3.5 text-brand-orange" />
              <span>ISO-Standard Industrial Manufacturing • Est. {companyInfo.establishedYear}</span>
            </div>
            <div className="flex items-center space-x-1.5 text-slate-300 hover:text-white transition-colors">
              <MapPin className="w-3.5 h-3.5 text-brand-orange shrink-0" />
              <span className="truncate max-w-xs xl:max-w-md">{companyInfo.location}</span>
            </div>
          </div>

          {/* Right: Direct Phone & Email */}
          <div className="flex items-center space-x-5">
            <a
              href={`tel:${companyInfo.phoneNumbers[0].raw}`}
              className="flex items-center space-x-1.5 text-slate-200 hover:text-brand-orange transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-brand-orange" />
              <span className="font-semibold">{companyInfo.phoneNumbers[0].display}</span>
            </a>
            <span className="text-white/20">|</span>
            <a
              href={`mailto:${companyInfo.email}`}
              className="flex items-center space-x-1.5 text-slate-200 hover:text-brand-orange transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-brand-orange" />
              <span>{companyInfo.email}</span>
            </a>
            <span className="text-white/20">|</span>
            <div className="flex items-center space-x-1 text-slate-400">
              <Clock className="w-3.5 h-3.5" />
              <span className="text-[11px]">Mon–Sat: 9am–7:30pm</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
