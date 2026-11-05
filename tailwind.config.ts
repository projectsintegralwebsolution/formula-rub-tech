import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          orange: "#E23008",
          "orange-dark": "#C02504",
          "orange-light": "#FF4D26",
          navy: "#0A1128",
          "navy-deep": "#050B18",
          "navy-light": "#132147",
          blue: "#0284C7",
          "blue-dark": "#0369A1",
          charcoal: "#1E293B",
          slate: "#475569",
          muted: "#64748B",
          surface: "#F8FAFC",
          "surface-alt": "#F1F5F9",
          border: "#E2E8F0",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        heading: ["var(--font-manrope)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        card: "0 10px 30px -10px rgba(10, 17, 40, 0.08)",
        "card-hover": "0 20px 40px -15px rgba(10, 17, 40, 0.16)",
        dropdown: "0 25px 50px -12px rgba(10, 17, 40, 0.25)",
      },
      animation: {
        "fade-in": "fadeIn 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        "pulse-subtle": "pulseSubtle 3s infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        pulseSubtle: {
          "0%, 100%": { transform: "scale(1)", opacity: "1" },
          "50%": { transform: "scale(1.05)", opacity: "0.95" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
