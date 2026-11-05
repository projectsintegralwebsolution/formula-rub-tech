export interface Product {
  id: string;
  name: string;
  slug: string;
  shortDesc: string;
  fullDesc: string;
  image: string;
  categoryIcon: string;
  materials: string[];
  applications: string[];
  features: string[];
}

export const productsData: Product[] = [
  {
    id: "o-rings",
    name: "Rubber O-Rings",
    slug: "rubber-o-rings",
    shortDesc: "Precision molded elastomeric loop seals engineered for reliable static and dynamic fluid sealing across high and low pressure systems.",
    fullDesc: "Our high-precision rubber O-rings provide dependable sealing barriers across hydraulic and pneumatic assemblies. Manufactured in tight dimensional tolerances to prevent fluid and gas leakage under variable operating conditions.",
    image: "/images/rubber-o-rings.jpg",
    categoryIcon: "Disc",
    materials: ["NBR", "Silicone", "EPDM", "Viton / FKM", "Neoprene"],
    applications: ["Hydraulic Cylinders", "Pumps & Valves", "Automotive Fuel Lines", "Pneumatic Tools"],
    features: ["Tight dimensional tolerance", "High pressure resilience", "Wide compound compatibility"]
  },
  {
    id: "gaskets",
    name: "Rubber Gaskets",
    slug: "rubber-gaskets",
    shortDesc: "Custom-cut and molded flat and flanged gaskets designed for leak-proof mating between industrial pipe flanges, enclosures, and casings.",
    fullDesc: "Formula Rub Tech manufactures industrial rubber gaskets built to withstand mechanical clamping pressure and aggressive fluids. Ideal for flange joints, electrical panels, and pipe connections.",
    image: "/images/rubber-gaskets.jpg",
    categoryIcon: "Maximize2",
    materials: ["EPDM", "Neoprene", "Natural Rubber", "Silicone", "Nitrile"],
    applications: ["Pipeline Flanges", "Heat Exchangers", "Electrical Enclosures", "Engine Manifolds"],
    features: ["Exceptional compression recovery", "Flange irregularity conforming", "Fluid-tight seal"]
  },
  {
    id: "u-seals",
    name: "Rubber U-Seals",
    slug: "rubber-u-seals",
    shortDesc: "Asymmetrical and symmetrical U-cup seals designed for reciprocating rod and piston applications in hydraulic and pneumatic equipment.",
    fullDesc: "Engineered with optimized lip geometries, our rubber U-seals ensure minimal friction and maximum lip energization under pressure, preventing fluid bypass in moving cylinder assemblies.",
    image: "/images/rubber-u-seals.jpg",
    categoryIcon: "Shield",
    materials: ["NBR", "Polyurethane", "Viton", "Neoprene"],
    applications: ["Hydraulic Press Rods", "Pneumatic Cylinders", "Linear Actuators", "Pressurized Pistons"],
    features: ["Low breakout friction", "Self-energizing lip design", "High abrasion resistance"]
  },
  {
    id: "bellows",
    name: "Rubber Bellows",
    slug: "rubber-bellows",
    shortDesc: "Flexible convoluted expansion boots protecting reciprocating shafts, linkages, and joints from dust, oil, and atmospheric debris.",
    fullDesc: "Formula Rub Tech rubber bellows provide dynamic dust and environmental shielding while accommodating angular misalignment, thermal expansion, and mechanical stroke.",
    image: "/images/rubber-bellows.jpg",
    categoryIcon: "Layers",
    materials: ["Silicone", "EPDM", "Neoprene", "Nitrile (NBR)"],
    applications: ["Automotive Steering Racks", "Mechanical Couplings", "Expansion Joints", "Machine Tool Guides"],
    features: ["Multi-convolution flexibility", "High fatigue resistance", "Dust & contaminant exclusion"]
  },
  {
    id: "profiles",
    name: "Rubber Profiles",
    slug: "rubber-profiles",
    shortDesc: "Continuous extruded solid and sponge rubber profiles, channels, D-sections, and custom door/window sealing strips.",
    fullDesc: "Produced using our continuous extrusion lines, our custom rubber profiles deliver uniform cross-sections and consistent elasticity for weather-stripping, panel edge protection, and cabinet sealing.",
    image: "/images/rubber-profiles.jpg",
    categoryIcon: "Spline",
    materials: ["EPDM", "Natural Rubber", "Silicone", "Neoprene"],
    applications: ["Control Panel Doors", "Automotive Windows", "Cold Storage Seals", "Architectural Glazing"],
    features: ["Continuous length capability", "Complex cross-section tooling", "Weather & ozone durability"]
  },
  {
    id: "anti-vibrators",
    name: "Anti-Vibrators & Mounts",
    slug: "anti-vibrators",
    shortDesc: "Heavy-duty vibration isolation pads, rubber bushes, and dampeners reducing structural shock and mechanical noise transmission.",
    fullDesc: "Formulated with high-damping elastomeric matrices, our anti-vibration mountings effectively attenuate cyclic oscillation and isolate rotating machinery from supporting frameworks.",
    image: "/images/anti-vibrators.jpg",
    categoryIcon: "Activity",
    materials: ["Natural Rubber (NR)", "Neoprene", "SBR", "EPDM"],
    applications: ["Industrial Compressors", "Generator Sets", "HVAC Units", "Engine Mountings"],
    features: ["High shock absorption", "Elastomer-to-metal bonding option", "Resonance frequency damping"]
  },
  {
    id: "diaphragms",
    name: "Rubber Diaphragms",
    slug: "rubber-diaphragms",
    shortDesc: "Homogeneous and fabric-reinforced flexible membranes designed for pressure sensing, metering valves, and fluid actuators.",
    fullDesc: "Engineered for rapid cyclic response and dimensional stability, our rubber diaphragms accurately isolate working fluids while transmitting hydraulic and pneumatic pressure differential without fatigue.",
    image: "/images/rubber-diaphragm.png",
    categoryIcon: "Cpu",
    materials: ["Nitrile", "Neoprene", "Silicone", "EPDM", "Viton"],
    applications: ["Control Valves", "Diaphragm Pumps", "Gas Regulators", "Pneumatic Actuators"],
    features: ["Fabric reinforcement option", "Cyclic flexural endurance", "Impermeable barrier"]
  },
  {
    id: "sheets",
    name: "Rubber Sheets",
    slug: "rubber-sheets",
    shortDesc: "Industrial grade elastomeric sheeting supplied in various roll thicknesses and polymer formulations for gasketing and lining.",
    fullDesc: "Available in smooth and textured finishes, our industrial rubber sheets provide reliable floor cushioning, electrical insulation, chemical barrier lining, and raw stock for custom gasket fabrication.",
    image: "/images/rubber-sheet.png",
    categoryIcon: "Grid",
    materials: ["Natural Rubber", "Neoprene", "Nitrile", "EPDM", "Silicone", "SBR"],
    applications: ["Gasket Die-Cutting", "Flange Flaps", "Floor Electrical Mats", "Tank Lining"],
    features: ["Uniform gauge thickness", "High tensile elongation", "Available in multiple durometers"]
  },
  {
    id: "pads",
    name: "Rubber Pads",
    slug: "rubber-pads",
    shortDesc: "Molded buffer pads, machine footings, and impact-absorbing bumpers engineered for machinery stability and surface protection.",
    fullDesc: "Designed to absorb concentrated impact energy and protect structural flooring, our solid rubber pads offer long service lives even under heavy machinery deadweights and dynamic loads.",
    image: "/images/rubber-pads.jpg",
    categoryIcon: "Box",
    materials: ["Natural Rubber", "SBR", "Neoprene", "EPDM"],
    applications: ["Heavy Machine Bases", "Dock Bumpers", "Equipment Levelling", "Foundation Isolation"],
    features: ["High compressive modulus", "Abrasion resistant surface", "Non-slip gripping action"]
  }
];
