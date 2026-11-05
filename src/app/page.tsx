import React from "react";
import HeroSlider from "@/components/home/HeroSlider";
import CompanyHighlights from "@/components/home/CompanyHighlights";
import AboutSection from "@/components/home/AboutSection";
import ProductShowcase from "@/components/home/ProductShowcase";
import MaterialsSection from "@/components/home/MaterialsSection";
import ManufacturingSection from "@/components/home/ManufacturingSection";
import IndustriesSection from "@/components/home/IndustriesSection";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import QualityAssurance from "@/components/home/QualityAssurance";
import GalleryPreview from "@/components/home/GalleryPreview";
import EnquirySection from "@/components/home/EnquirySection";
import FinalCta from "@/components/home/FinalCta";

export default function HomePage() {
  return (
    <>
      {/* 1. Full-width Hero Slider */}
      <HeroSlider />

      {/* 2. Trust and Highlights Strip */}
      <CompanyHighlights />

      {/* 3. About Formula Rub Tech */}
      <AboutSection />

      {/* 4. Industrial Rubber Product Showcase (All 9 categories) */}
      <ProductShowcase />

      {/* 5. Materials & Polymer Compounds (8 polymers) */}
      <MaterialsSection />

      {/* 6. Manufacturing Capabilities & Machinery */}
      <ManufacturingSection />

      {/* 7. Industries & Functional Applications */}
      <IndustriesSection />

      {/* 8. Why Choose Formula Rub Tech */}
      <WhyChooseUs />

      {/* 9. Quality Assurance & Inspection Timeline */}
      <QualityAssurance />

      {/* 10. Facility & Product Gallery Preview */}
      <GalleryPreview />

      {/* 11. Technical RFQ & Enquiry Desk */}
      <EnquirySection />

      {/* 12. Final Call To Action */}
      <FinalCta />
    </>
  );
}
