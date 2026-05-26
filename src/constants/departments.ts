import type { Department } from "../types/department.types";

import Container1 from "../assets/images/departments/Container1.png";
import Container2 from "../assets/images/departments/Container2.png";
import Container3 from "../assets/images/departments/Container3.png";
import Container4 from "../assets/images/departments/Container4.png";
import Container5 from "../assets/images/departments/Container5.png";
import Container6 from "../assets/images/departments/Container6.png";
import Container7 from "../assets/images/departments/Container7.png";
import Container8 from "../assets/images/departments/Container8.png";

import Capa1 from "../assets/images/departments/Capa1.png";
import Capa2 from "../assets/images/departments/Capa2.png";
import Capa3 from "../assets/images/departments/Capa3.png";
import Capa4 from "../assets/images/departments/Capa4.png";
import Capa5 from "../assets/images/departments/Capa5.png";
import Capa6 from "../assets/images/departments/Capa6.png";
import Capa7 from "../assets/images/departments/Capa7.png";
import Capa8 from "../assets/images/departments/Capa8.png";

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
    smallPlan: { src: Container1, alt: "Plano pequeño" },
    largePlan: { src: Capa1, alt: "Plano grande" },
  },

  {
    id: 2,
    tab: "43.3m²",
    prototype: "Prototipo",
    levels: "Niveles 4 A 19",
    area: "43.3 m²",
    dimensions: "26.00m² PB + 26.00m² PA",
    labels: [
      { key: "A", label: "1 RECÁMARA" },
      { key: "B", label: "SALA" },
      { key: "C", label: "1 BAÑO" },
      { key: "D", label: "COMEDOR" },
      { key: "E", label: "COCINA" },
    ],
    smallPlan: { src: Container2, alt: "Plano pequeño" },
    largePlan: { src: Capa2, alt: "Plano grande" },
  },

  {
    id: 3,
    tab: "50.9m²",
    prototype: "Prototipo",
    levels: "Niveles 4 A 19",
    area: "50.9 m²",
    dimensions: "30.00m² PB + 30.00m² PA",
    labels: [
      { key: "A", label: "1 RECÁMARA" },
      { key: "B", label: "FAMILY ROOM" },
      { key: "C", label: "1 BAÑO" },
      { key: "D", label: "COMEDOR" },
      { key: "E", label: "COCINA" },
      { key: "F", label: "WALK-IN CLOSET" },
      { key: "G", label: "SALA" },
    ],
    smallPlan: { src: Container3, alt: "Plano pequeño" },
    largePlan: { src: Capa3, alt: "Plano grande" },
  },

  {
    id: 4,
    tab: "65.0m²",
    prototype: "Prototipo",
    levels: "Niveles 4 A 19",
    area: "65.00 m²",
    dimensions: "32.50m² PB + 32.50m² PA",
    labels: [
      { key: "A", label: "2 RECÁMARAS" },
      { key: "B", label: "2 BAÑOS" },
      { key: "C", label: "COMEDOR" },
      { key: "D", label: "COCINA" },
      { key: "E", label: "CUARTO DE LAVADO" },
      { key: "F", label: "SALA" },
    ],
    smallPlan: { src: Container4, alt: "Plano pequeño" },
    largePlan: { src: Capa4, alt: "Plano grande" },
  },

  {
    id: 5,
    tab: "68.4m²",
    prototype: "Prototipo",
    levels: "Niveles 4 A 19",
    area: "68.4 m²",
    dimensions: "35.00m² PB + 35.00m² PA",
    labels: [
      { key: "A", label: "2 RECÁMARAS" },
      { key: "B", label: "2 BAÑOS" },
      { key: "C", label: "COMEDOR" },
      { key: "D", label: "COCINA" },
      { key: "E", label: "CUARTO DE LAVADO" },
      { key: "F", label: "SALA" },
    ],
    smallPlan: { src: Container5, alt: "Plano pequeño" },
    largePlan: { src: Capa5, alt: "Plano grande" },
  },

  {
    id: 6,
    tab: "80.4m²",
    prototype: "Prototipo",
    levels: "Niveles 4 A 19",
    area: "80.4 m²",
    dimensions: "37.50m² PB + 37.50m² PA",
    labels: [
      { key: "A", label: "3 RECÁMARAS" },
      { key: "B", label: "2 BAÑOS" },
      { key: "C", label: "COMEDOR" },
      { key: "D", label: "COCINA" },
      { key: "E", label: "CUARTO DE LAVADO" },
      { key: "F", label: "SALA" },
    ],
    smallPlan: { src: Container6, alt: "Plano pequeño" },
    largePlan: { src: Capa6, alt: "Plano grande" },
  },

  {
    id: 7,
    tab: "84.7m²",
    prototype: "Prototipo",
    levels: "Niveles PB, 1 y 4 al 19",
    area: "84.7 m²",
    dimensions: "40.00m² PB + 40.00m² PA",
    labels: [
      { key: "A", label: "3 RECÁMARAS" },
      { key: "B", label: "2 BAÑOS" },
      { key: "C", label: "COMEDOR" },
      { key: "D", label: "COCINA" },
      { key: "E", label: "CUARTO DE LAVADO" },
      { key: "F", label: "SALA" },
    ],
    smallPlan: { src: Container7, alt: "Plano pequeño" },
    largePlan: { src: Capa7, alt: "Plano grande" },
  },

  {
    id: 8,
    tab: "88.4m²",
    prototype: "Prototipo",
    levels: "Niveles N2 al N3",
    area: "88.4 m²",
    dimensions: "42.50m² PB + 42.50m² PA",
    labels: [
      { key: "A", label: "ESCALERA" },
      { key: "B", label: "SALA" },
      { key: "C", label: "COMEDOR" },
      { key: "D", label: "COCINA" },
      { key: "E", label: "2 RECÁMARAS" },
      { key: "F", label: "3 BAÑOS" },
      { key: "G", label: "WALK-IN CLOSET" },
    ],
    smallPlan: { src: Container8, alt: "Plano pequeño" },
    largePlan: { src: Capa8, alt: "Plano grande" },
  },
];
