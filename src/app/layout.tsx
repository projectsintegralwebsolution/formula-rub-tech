import type { Metadata, Viewport } from "next";
import { Inter, Manrope } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FloatingWidgets from "@/components/layout/FloatingWidgets";
import EnquiryPopup from "@/components/ui/EnquiryPopup";
import { EnquiryModalProvider } from "@/context/EnquiryModalContext";
import { companyInfo } from "@/data/company";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#0A1128",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: "Rubber O-Rings, Rubber U-Seals, Rubber Bellows, and Rubber Gaskets | Formula Rub Tech",
  description:
    "Formula Rub Tech is an established industrial rubber manufacturer in Vasai East, Maharashtra specializing in precision rubber moulding, continuous extrusions, O-rings, gaskets, bellows, profiles, and custom elastomeric tooling.",
  keywords: [
    "Rubber O-Rings",
    "Rubber Gaskets",
    "Rubber U-Seals",
    "Rubber Bellows",
    "Rubber Profiles",
    "Anti-Vibrators",
    "Rubber Diaphragms",
    "Rubber Sheets",
    "Rubber Moulding Manufacturer",
    "Rubber Extrusion Manufacturer",
    "Formula Rub Tech",
    "Vasai Palghar Maharashtra",
  ],
  authors: [{ name: "Formula Rub Tech" }],
  creator: "Formula Rub Tech",
  publisher: "Formula Rub Tech",
  metadataBase: new URL("https://www.formularubtech.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Formula Rub Tech | Precision Industrial Rubber Solutions",
    description:
      "Precision engineered rubber components, O-rings, gaskets, continuous extrusions, and compression moulding built to ISO standards.",
    url: "https://www.formularubtech.com",
    siteName: "Formula Rub Tech",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/images/hero-banner.jpg",
        width: 1920,
        height: 960,
        alt: "Formula Rub Tech Industrial Rubber Manufacturing",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Schema.org Organization Structured Data
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": companyInfo.name,
    "alternateName": "Formula Rub-Tech",
    "url": "https://www.formularubtech.com",
    "logo": "https://www.formularubtech.com/images/logo.avif",
    "description": "Manufacturer and supplier of precision moulded and extruded industrial rubber products.",
    "foundingDate": companyInfo.establishedYear,
    "founder": {
      "@type": "Person",
      "name": companyInfo.founder,
    },
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Gala No. 26, 1st Floor, Rashmi Industrial Estate, Near Ruby Industrial Estate, Navghar",
      "addressLocality": "Vasai East, Palghar",
      "addressRegion": "Maharashtra",
      "postalCode": "401210",
      "addressCountry": "IN",
    },
    "contactPoint": [
      {
        "@type": "ContactPoint",
        "telephone": "+91-9503220778",
        "contactType": "sales",
        "areaServed": "IN",
        "availableLanguage": ["English", "Hindi", "Marathi"],
      },
      {
        "@type": "ContactPoint",
        "telephone": "+91-8087140778",
        "contactType": "customer service",
        "areaServed": "IN",
        "availableLanguage": ["English", "Hindi", "Marathi"],
      },
    ],
  };

  return (
    <html lang="en" className={`scroll-smooth ${inter.variable} ${manrope.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans antialiased text-slate-800 bg-white selection:bg-brand-orange selection:text-white flex flex-col min-h-screen">
        <EnquiryModalProvider>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
          <FloatingWidgets />
          <EnquiryPopup />
        </EnquiryModalProvider>
      </body>
    </html>
  );
}
