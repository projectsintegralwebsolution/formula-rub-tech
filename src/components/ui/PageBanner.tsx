import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

interface PageBannerProps {
  title: string;
  subtitle?: string;
  eyebrow?: string;
  image?: string;
  breadcrumbs?: Array<{ label: string; href?: string }>;
}

export default function PageBanner({
  title,
  subtitle,
  eyebrow = "FORMULA RUB TECH",
  image = "/images/hero-banner.jpg",
  breadcrumbs = [{ label: "Home", href: "/" }],
}: PageBannerProps) {
  return (
    // Height reduced by exactly 50px (from standard h-[280px]/[320px]/[360px] to h-[230px]/[270px]/[310px])
    <section className="relative w-full h-[230px] sm:h-[270px] lg:h-[310px] bg-brand-navy-deep text-white overflow-hidden flex items-center">
      {/* Background Image with object-cover */}
      <div className="absolute inset-0 z-0">
        <Image
          src={image}
          alt={title}
          fill
          priority
          sizes="100vw"
          className="object-cover object-center opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-navy-deep via-brand-navy-deep/85 to-brand-navy-deep/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-3xl space-y-2 sm:space-y-3">
          {/* Eyebrow */}
          <span className="inline-block text-[11px] font-bold tracking-widest text-brand-orange uppercase">
            {eyebrow}
          </span>

          {/* Heading */}
          <h1 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
            {title}
          </h1>

          {/* Subtitle */}
          {subtitle && (
            <p className="text-xs sm:text-sm text-slate-300 max-w-2xl leading-relaxed">
              {subtitle}
            </p>
          )}

          {/* Breadcrumb Navigation */}
          {breadcrumbs && breadcrumbs.length > 0 && (
            <nav className="flex items-center gap-1.5 pt-1 text-xs text-slate-400">
              {breadcrumbs.map((crumb, idx) => (
                <React.Fragment key={idx}>
                  {idx > 0 && <ChevronRight className="w-3.5 h-3.5 text-slate-500" />}
                  {crumb.href ? (
                    <Link
                      href={crumb.href}
                      className="hover:text-brand-orange transition-colors"
                    >
                      {crumb.label}
                    </Link>
                  ) : (
                    <span className="text-slate-200 font-semibold">{crumb.label}</span>
                  )}
                </React.Fragment>
              ))}
            </nav>
          )}
        </div>
      </div>
    </section>
  );
}
