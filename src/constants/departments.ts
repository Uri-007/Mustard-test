import type { Department } from "../types/department.types";

export const DEPARTMENTS: Department[] = [
  {
    id: 1,
    tab: "48.5m²",
    prototype: "Prototipo",
    levels: "Niveles N2 A N3",
    area: "48.50 m²",
    dimensions: "25.30m² PB + 23.20m² PA",
    labels: [
      { key: "A", label: "ESCALERA" },
      { key: "B", label: "SALA" },
      { key: "C", label: "BARRA-COMEDOR" },
      { key: "D", label: "COCINA" },
      { key: "E", label: "CUARTO DE LAVADO" },
      { key: "F", label: "1 RECÁMARA" },
      { key: "G", label: "1 BAÑO" },
      { key: "H", label: "ESCALERA" },
    ],
    smallPlan: {
      src: "/src/assets/images/departments/Container1.png",
      alt: "Plano pequeño",
    },
    largePlan: {
      src: "/src/assets/images/departments/Capa1.png",
      alt: "Plano grande",
    },
  },

  {
    id: 2,
    tab: "52m²",
    prototype: "Prototipo",
    levels: "Nivel N2",
    area: "52.00 m²",
    dimensions: "26.00m² PB + 26.00m² PA",
    labels: [
      { key: "A", label: "SALA" },
      { key: "B", label: "COMEDOR" },
      { key: "C", label: "COCINA" },
      { key: "D", label: "BAÑO" },
    ],
    smallPlan: {
      src: "/src/assets/images/departments/Container2.png",
      alt: "Plano pequeño",
    },
    largePlan: {
      src: "/src/assets/images/departments/Capa2.png",
      alt: "Plano grande",
    },
  },

  {
    id: 3,
    tab: "60m²",
    prototype: "Prototipo",
    levels: "Nivel N3",
    area: "60.00 m²",
    dimensions: "30.00m² PB + 30.00m² PA",
    labels: [
      { key: "A", label: "RECÁMARA" },
      { key: "B", label: "BAÑO" },
      { key: "C", label: "COCINA" },
    ],
    smallPlan: {
      src: "/src/assets/images/departments/Container3.png",
      alt: "Plano pequeño",
    },
    largePlan: {
      src: "/src/assets/images/departments/Capa3.png",
      alt: "Plano grande",
    },
  },

  {
    id: 4,
    tab: "65m²",
    prototype: "Prototipo",
    levels: "Nivel N4",
    area: "65.00 m²",
    dimensions: "32.50m² PB + 32.50m² PA",
    labels: [
      { key: "A", label: "TERRAZA" },
      { key: "B", label: "SALA" },
      { key: "C", label: "COCINA" },
    ],
    smallPlan: {
      src: "/src/assets/images/departments/Container4.png",
      alt: "Plano pequeño",
    },
    largePlan: {
      src: "/src/assets/images/departments/Capa4.png",
      alt: "Plano grande",
    },
  },

  {
    id: 5,
    tab: "70m²",
    prototype: "Prototipo",
    levels: "Nivel N5",
    area: "70.00 m²",
    dimensions: "35.00m² PB + 35.00m² PA",
    labels: [
      { key: "A", label: "RECÁMARA PRINCIPAL" },
      { key: "B", label: "BAÑO" },
    ],
    smallPlan: {
      src: "/src/assets/images/departments/Container5.png",
      alt: "Plano pequeño",
    },
    largePlan: {
      src: "/src/assets/images/departments/Capa5.png",
      alt: "Plano grande",
    },
  },

  {
    id: 6,
    tab: "75m²",
    prototype: "Prototipo",
    levels: "Nivel N6",
    area: "75.00 m²",
    dimensions: "37.50m² PB + 37.50m² PA",
    labels: [
      { key: "A", label: "SALA" },
      { key: "B", label: "COMEDOR" },
      { key: "C", label: "TERRAZA" },
    ],
    smallPlan: {
      src: "/src/assets/images/departments/Container6.png",
      alt: "Plano pequeño",
    },
    largePlan: {
      src: "/src/assets/images/departments/Capa6.png",
      alt: "Plano grande",
    },
  },

  {
    id: 7,
    tab: "80m²",
    prototype: "Prototipo",
    levels: "Nivel N7",
    area: "80.00 m²",
    dimensions: "40.00m² PB + 40.00m² PA",
    labels: [
      { key: "A", label: "2 RECÁMARAS" },
      { key: "B", label: "2 BAÑOS" },
    ],
    smallPlan: {
      src: "/src/assets/images/departments/Container7.png",
      alt: "Plano pequeño",
    },
    largePlan: {
      src: "/src/assets/images/departments/Capa7.png",
      alt: "Plano grande",
    },
  },

  {
    id: 8,
    tab: "85m²",
    prototype: "Prototipo",
    levels: "Nivel N8",
    area: "85.00 m²",
    dimensions: "42.50m² PB + 42.50m² PA",
    labels: [
      { key: "A", label: "COCINA INTEGRAL" },
      { key: "B", label: "LAVANDERÍA" },
    ],
    smallPlan: {
      src: "/src/assets/images/departments/Container8.png",
      alt: "Plano pequeño",
    },
    largePlan: {
      src: "/src/assets/images/departments/Capa8.png",
      alt: "Plano grande",
    },
  },
];
