export interface Industry {
  id: string;
  name: string;
  icon: string;
  role: string; // Sealing, Insulation, Vibration, Protection, Cushioning
  summary: string;
  description: string;
  componentsSupplied: string[];
}

export const industriesData: Industry[] = [
  {
    id: "automotive",
    name: "Automotive & Transportation",
    icon: "Car",
    role: "Sealing & Vibration Damping",
    summary: "Ensuring fluid containment and chassis vibration isolation under harsh dynamic cycles.",
    description: "Automotive systems rely on rubber components to seal fluids, prevent environmental contamination, and decouple road harmonics from passenger cabins and delicate sensor units.",
    componentsSupplied: ["Engine Gaskets", "Steering Bellows", "O-Rings & Fuel Seals", "Suspension Bushes", "Door Weatherstrips"]
  },
  {
    id: "industrial-machinery",
    name: "Industrial Machinery & Hydraulics",
    icon: "Cpu",
    role: "High-Pressure Sealing",
    summary: "Withstanding severe hydraulic pressure spikes and continuous reciprocating wear.",
    description: "From heavy hydraulic presses to industrial pumps, elastomeric U-seals and precision O-rings maintain hydraulic integrity, prevent fluid bypass, and extend machinery rebuild intervals.",
    componentsSupplied: ["Hydraulic U-Seals", "Piston Wipers", "High-Pressure O-Rings", "Flange Gaskets", "Flexible Couplings"]
  },
  {
    id: "engineering",
    name: "Heavy Engineering & Plants",
    icon: "Wrench",
    role: "Vibration Reduction & Cushioning",
    summary: "Isolating rotating equipment resonance and mitigating impact stress.",
    description: "Heavy manufacturing plants use anti-vibration mounts and heavy-duty rubber pads to isolate rotating machinery, preventing destructive structural fatigue and dampening operational noise.",
    componentsSupplied: ["Anti-Vibrator Mounts", "Heavy Machine Pads", "Expansion Joints", "Buffer Stops", "Molded Bumpers"]
  },
  {
    id: "electrical-electronics",
    name: "Electrical & Enclosures",
    icon: "Zap",
    role: "Dielectric Insulation & Ingress Protection",
    summary: "Preventing moisture ingress and providing high dielectric resistance.",
    description: "Extruded silicone and EPDM profiles form watertight IP-rated seals around electrical cabinets, control panels, and outdoor switchgear, protecting critical electronics from dust and water.",
    componentsSupplied: ["Cabinet Gaskets", "Insulation Grommets", "Silicone Enclosure Seals", "Cable Sleeves", "Terminal Caps"]
  },
  {
    id: "construction",
    name: "Construction & Infrastructure",
    icon: "Building2",
    role: "Weatherproofing & Joint Protection",
    summary: "Accommodating thermal structural movement and excluding wind-driven rain.",
    description: "Elastomeric profiles and heavy sheets bridge architectural expansion joints, provide curtain wall glazing seals, and prevent water ingress across buildings and civil works.",
    componentsSupplied: ["Glazing Profiles", "Expansion Joint Seals", "Neoprene Bearing Pads", "Channel Gaskets", "Waterstop Profiles"]
  },
  {
    id: "general-manufacturing",
    name: "General Manufacturing & Processing",
    icon: "Factory",
    role: "Material Flow & Fluid Protection",
    summary: "Providing chemical-resistant barriers and dependable fluid transmission.",
    description: "Chemical processing plants, food lines, and automated packaging systems deploy Viton, Nitrile, and Silicone components to safely handle aggressive media and maintain hygienic boundaries.",
    componentsSupplied: ["Pump Diaphragms", "Process Valve O-Rings", "Conveyor Rubber Skirting", "Sanitary Gaskets", "Custom Molded Parts"]
  }
];
