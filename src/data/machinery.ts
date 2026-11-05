export interface MachineryItem {
  id: string;
  name: string;
  category: string;
  image: string;
  description: string;
  capabilities: string[];
  icon: string;
  tag: string;
}

export const manufacturingCapabilities: MachineryItem[] = [
  {
    id: "extrusion",
    name: "Rubber Extrusion System",
    category: "Continuous Profile Processing",
    image: "/images/machinery-extrusion.jpg",
    description: "Precision continuous extruder lines designed for producing tight-tolerance solid, hollow, and sponge rubber profiles, channels, and custom sealing strips.",
    capabilities: [
      "Continuous uniform cross-sectional extrusions",
      "Hot-air and microwave vulcanization tunnels",
      "Custom die fabrication for intricate profile geometries",
      "Consistent wall thickness and dimensional control"
    ],
    icon: "Repeat",
    tag: "Continuous Extrusions"
  },
  {
    id: "mixing-mill",
    name: "Rubber Mixing Mill",
    category: "Polymer Compounding & Mastication",
    image: "/images/machinery-mixing-mill.jpg",
    description: "Heavy-duty two-roll mixing mills delivering homogeneous dispersion of raw elastomers, activators, carbon black, and curing agents for balanced physical properties.",
    capabilities: [
      "Accurate ratio compounding across all 8 polymers",
      "Consistent hardness (durometer Shore A) batch repeatability",
      "Enhanced plasticization and mechanical uniformity",
      "Stringent raw batch quality inspection"
    ],
    icon: "SlidersHorizontal",
    tag: "Batch Compounding"
  },
  {
    id: "hydraulic-press",
    name: "Hydraulic Compression Moulding",
    category: "Precision High-Pressure Moulding",
    image: "/images/machinery-hydraulic-press.jpg",
    description: "High-tonnage precision hydraulic presses equipped with multi-zone heated platens to ensure uniform thermal cure across complex cavity geometries.",
    capabilities: [
      "High clamping force to minimize parting-line flash",
      "Multi-cavity high-volume production efficiency",
      "Controlled temperature and dwell time management",
      "Fabric-reinforced and metal-bonded rubber moulding"
    ],
    icon: "Compass",
    tag: "Compression Moulding"
  },
  {
    id: "custom-fabrication",
    name: "Custom Component Tooling",
    category: "Engineering & In-House Tooling",
    image: "/images/factory-about.jpg",
    description: "End-to-end tooling and die development allowing rapid transition from customer technical drawings or sample physical parts to volume manufacturing.",
    capabilities: [
      "Technical drawing interpretation & 2D/3D evaluation",
      "In-house mould design and precision die cutting",
      "Sample prototyping and pilot batch validation",
      "Tailored formulation matching application demands"
    ],
    icon: "Wrench",
    tag: "Custom Solutions"
  }
];
