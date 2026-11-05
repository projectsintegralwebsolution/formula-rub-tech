# Formula Rub Tech – Premium Industrial Manufacturing Website

A modern, high-performance, international-level corporate industrial homepage built for **Formula Rub Tech**, an industrial rubber products manufacturer based in Vasai East, Palghar, Maharashtra.

Reference Website: [formularubtech.com](https://www.formularubtech.com/)

---

## 🏗️ Tech Stack

- **Framework:** Next.js 15 (App Router, Server & Client Components)
- **Language:** TypeScript 5
- **Styling:** Tailwind CSS 3.4
- **Icons:** Lucide React
- **Animations:** CSS3 Keyframe Animations & Transitions
- **Backend / API:** Next.js Route Handlers (`POST /api/enquiry`)
- **Fonts:** Manrope (Headings), Inter (Body) via `next/font/google`
- **SEO & Structured Data:** Schema.org Organization JSON-LD, Dynamic OpenGraph, Canonical URLs, Robots.txt, and Sitemap.xml

---

## 🎨 Visual Identity & Brand Palette

Derived directly from the verified Formula Rub Tech logo and industrial equipment:
- **Primary Foundation:** Deep Industrial Navy (`#0A1128`, `#050B18`)
- **Signature Brand Accent:** Industrial Precision Vermilion Orange-Red (`#E23008`, `#FF4D26`)
- **Industrial Blue Accent:** Precision Blue (`#0284C7`, `#0369A1`)
- **Clean Surfaces:** Clean Crisp White (`#FFFFFF`) & Slate Surfaces (`#F8FAFC`, `#F1F5F9`)
- **Borders & Dividers:** Refined Slate (`#E2E8F0`, `#CBD5E1`)

---

## 📑 Homepage Architecture & Sections

1. **Pre-Header:** Location (Vasai East), direct phone lines (`+91 9503220778 / +91 8087140778`), email, and operational timings.
2. **Main Header & Mega Menu:** 
   - High-contrast logo with proper aspect ratio and typography.
   - Interactive 9-category **Mega Menu** with image thumbnails, icons, and direct specification links.
   - Sticky navigation with scroll state and mobile slide-out drawer with accordion.
3. **Hero Slider:**
   - 3 full-width industrial slides with custom headings, verified manufacturing imagery, manual arrows, and pagination dots.
4. **Trust & Company Highlights:** Modern 6-card feature strip right below the hero.
5. **About Formula Rub Tech:** Split layout highlighting founder Mr. Abhin Dhananjay, 2017 founding year, and multi-polymer formulation.
6. **Product Showcase:** All 9 verified categories (`Rubber O-Rings`, `Rubber Gaskets`, `Rubber U-Seals`, `Rubber Bellows`, `Rubber Profiles`, `Anti-Vibrators`, `Rubber Diaphragms`, `Rubber Sheets`, `Rubber Pads`) with `object-fit: contain` image frames and an interactive **Technical Detail Modal**.
7. **Materials & Rubber Compounds:** Technical overview of 8 polymers (`NR`, `Silicone`, `NBR`, `Neoprene`, `Viton / FKM`, `EPDM`, `SBR`, `Butyl`).
8. **Manufacturing Capabilities:** Machinery showcase featuring continuous extrusion, two-roll mixing mills, high-tonnage hydraulic compression presses, and in-house tooling.
9. **Industries & Applications:** Automotive, Industrial Machinery, Heavy Engineering, Electrical & Electronics, Construction, and General Manufacturing.
10. **Why Choose Formula Rub Tech:** 6 verified competitive differentiators.
11. **Quality Assurance:** 4-stage ISO process timeline (Raw Material, Process Checks, Product Inspection, Final Verification) with inspection visual.
12. **Gallery Preview:** Asymmetric media grid with lightbox preview modal.
13. **Technical RFQ & Enquiry Section:** Validated 7-field form connected to `/api/enquiry` + direct factory contact panel.
14. **Final Call to Action:** Bold full-width section with background visual.
15. **Rich Corporate Footer:** Multi-column layout with quick links, product catalog, factory address, and copyright.
16. **Floating Widgets:** Fixed WhatsApp button with pre-filled enquiry message (`+919503220778`) and a Back to Top button.

---

## 🚀 Running the Project

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm run start
```
The application will run on `http://localhost:3000`.
