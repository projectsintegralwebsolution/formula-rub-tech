export interface RubberMaterial {
  id: string;
  name: string;
  code: string;
  icon: string;
  shortDesc: string;
  keyProperties: string[];
  bestSuitedFor: string;
  badge: string;
}

export const rubberMaterials: RubberMaterial[] = [
  {
    id: "nr",
    name: "Natural Rubber",
    code: "NR (Polyisoprene)",
    icon: "TreePine",
    shortDesc: "High elasticity elastomer harvested from latex with unmatched tensile strength, mechanical resilience, and tear resistance.",
    keyProperties: [
      "Superior tensile strength & elongation",
      "Excellent dynamic rebound elasticity",
      "High resistance to tear & fatigue",
      "Outstanding abrasion resistance"
    ],
    bestSuitedFor: "Anti-vibration mounts, heavy duty buffer pads, mechanical bushings",
    badge: "High Elasticity"
  },
  {
    id: "silicone",
    name: "Silicone Rubber",
    code: "VMQ (Silicone)",
    icon: "Sparkles",
    shortDesc: "Inorganic synthetic polymer retaining flexibility and chemical stability across extreme thermal bands without degradation.",
    keyProperties: [
      "Broad thermal range stability",
      "Excellent dielectric & electrical insulation",
      "High ozone & ultraviolet inertness",
      "Non-toxic & food grade suitability"
    ],
    bestSuitedFor: "Thermal seals, electrical enclosures, medical & food processing components",
    badge: "Extreme Thermal Range"
  },
  {
    id: "nbr",
    name: "Nitrile Rubber",
    code: "NBR (Buna-N)",
    icon: "Droplets",
    shortDesc: "The premier workhorse synthetic rubber for applications requiring immersion in petroleum-based oils, fuels, and hydraulic fluids.",
    keyProperties: [
      "Outstanding petroleum & fuel resistance",
      "Low compression set under pressure",
      "Robust mechanical abrasion endurance",
      "Good tensile and shear performance"
    ],
    bestSuitedFor: "Hydraulic O-rings, U-seals, oil seals, automotive fuel gaskets",
    badge: "Oil & Fuel Resistant"
  },
  {
    id: "neoprene",
    name: "Neoprene Rubber",
    code: "CR (Chloroprene)",
    icon: "ShieldAlert",
    shortDesc: "A versatile multi-purpose elastomer balancing chemical inertness, flame retardancy, weather endurance, and mechanical toughness.",
    keyProperties: [
      "Moderate oil & petroleum resistance",
      "Excellent resistance to ozone & weathering",
      "Inherent flame self-extinguishing behavior",
      "Good adhesion to metallic substrates"
    ],
    bestSuitedFor: "Industrial expansion joints, outdoor weather seals, marine bumpers",
    badge: "All-Round Weathering"
  },
  {
    id: "viton",
    name: "Viton / FKM",
    code: "FKM (Fluoroelastomer)",
    icon: "Flame",
    shortDesc: "High-performance fluorinated elastomer providing exceptional resistance to aggressive chemicals, acids, and elevated temperatures.",
    keyProperties: [
      "Superior chemical & solvent inertness",
      "High temperature structural integrity",
      "Extreme oxidation & ozone resistance",
      "Minimal gas permeation properties"
    ],
    bestSuitedFor: "Chemical processing valves, high-spec aerospace seals, severe duty O-rings",
    badge: "Aggressive Chemicals"
  },
  {
    id: "epdm",
    name: "EPDM Rubber",
    code: "EPDM (Ethylene Propylene)",
    icon: "SunMedium",
    shortDesc: "Terpolymer elastomer offering unmatched resistance to direct sunlight exposure, atmospheric ozone, steam, and polar fluids.",
    keyProperties: [
      "Exceptional UV, ozone & weather durability",
      "High resistance to steam & hot water",
      "Good resistance to mild acids & alkalis",
      "High electrical dielectric strength"
    ],
    bestSuitedFor: "Continuous extruded profiles, outdoor weather-stripping, cooling hoses",
    badge: "UV & Steam Resistant"
  },
  {
    id: "sbr",
    name: "SBR Rubber",
    code: "SBR (Styrene-Butadiene)",
    icon: "Cog",
    shortDesc: "Cost-effective general purpose synthetic rubber delivering high abrasion endurance and mechanical cushioning under load.",
    keyProperties: [
      "Excellent abrasion & friction wear resistance",
      "Favorable compression set recovery",
      "Economical for high-volume manufacturing",
      "Good impact absorption capability"
    ],
    bestSuitedFor: "Heavy duty machinery pads, industrial conveyor skirting, structural buffers",
    badge: "High Wear Resistance"
  },
  {
    id: "butyl",
    name: "Butyl Rubber",
    code: "IIR (Isobutylene Isoprene)",
    icon: "Wind",
    shortDesc: "Specialized synthetic copolymer characterized by exceptionally low gas permeation, dampening capacity, and moisture resistance.",
    keyProperties: [
      "Lowest gas & vapor permeability rate",
      "High mechanical vibration damping",
      "Excellent chemical resistance to mineral acids",
      "Superior environmental aging stability"
    ],
    bestSuitedFor: "Pressure diaphragms, pneumatic bladders, vacuum sealing gaskets",
    badge: "Impermeable Barrier"
  }
];
