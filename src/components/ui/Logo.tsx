import React from "react";
import Image from "next/image";
import Link from "next/link";

interface LogoProps {
  variant?: "light" | "dark";
  className?: string;
  showTagline?: boolean;
}

export default function Logo({
  variant = "dark",
  className = "",
  showTagline = true,
}: LogoProps) {
  // variant: "dark" = dark logo for light background; "light" = light text for dark background
  const isLight = variant === "light";

  return (
    <Link
      href="/"
      className={`group inline-flex items-center gap-3.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange rounded-lg transition-transform duration-200 ${className}`}
      aria-label="Formula Rub Tech - Home"
    >
      {/* Logo Graphic Container */}
      <div className="relative flex items-center justify-center w-12 h-12 md:w-14 md:h-14 rounded-xl bg-white shadow-sm ring-1 ring-slate-200/60 p-1.5 shrink-0 transition-transform duration-300 group-hover:scale-105">
        <Image
          src="/images/logo.avif"
          alt="Formula Rub Tech Logo Emblem"
          width={52}
          height={52}
          priority
          className="object-contain w-full h-full"
        />
      </div>

      {/* Brand Typography */}
      <div className="flex flex-col justify-center">
        <div className="flex items-center gap-1.5">
          <span
            className={`font-heading text-lg md:text-xl font-extrabold tracking-tight leading-none ${
              isLight ? "text-white" : "text-brand-navy"
            }`}
          >
            FORMULA
          </span>
          <span className="font-heading text-lg md:text-xl font-extrabold tracking-tight leading-none text-brand-orange">
            RUB TECH
          </span>
        </div>
        {showTagline && (
          <span
            className={`text-[10px] md:text-[11px] font-semibold tracking-widest uppercase mt-1 ${
              isLight ? "text-slate-300" : "text-brand-slate"
            }`}
          >
            Quality &amp; Craftsmanship
          </span>
        )}
      </div>
    </Link>
  );
}
