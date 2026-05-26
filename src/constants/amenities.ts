// constants/amenities.ts
import type { Amenity, AmenityImage } from "../types/animateImage.types";

export const AMENITIES: Amenity[] = [
  { icon: "mdi:paw", label: "PET PARK", imageIndex: 8 },
  {
    icon: "mdi:fire",
    label: "FOGATERO",
    subLabel: "(EN NIVEL 20)",
    imageIndex: 9,
  },
  { icon: "mdi:sofa-outline", label: "LOBBY", imageIndex: 6 },
  { icon: "mdi:bookshelf", label: "BIBLIOTECA", imageIndex: 3 },
  { icon: "mdi:controller-classic-outline", label: "LUDOTECA", imageIndex: 0 },
  { icon: "mdi:account-group-outline", label: "FAMILY ROOM", imageIndex: 5 },
  {
    icon: "mdi:television-play",
    label: "SALÓN DE USOS MÚLTIPLES",
    imageIndex: 4,
  },
  { icon: "mdi:dumbbell", label: "GIMNASIO", imageIndex: 7 },
  { icon: "mdi:pool", label: "ALBERCA", imageIndex: 1 },
  { icon: "mdi:microphone-outline", label: "FORO", imageIndex: 2 },
];

export const AMENITY_IMAGES: AmenityImage[] = [
  { src: "/src/assets/images/carrusel/ludoteca.png", alt: "Ludoteca" },
  { src: "/src/assets/images/carrusel/alberca.png", alt: "Alberca" },
  { src: "/src/assets/images/carrusel/foro.png", alt: "Foro" },
  { src: "/src/assets/images/carrusel/biblioteca.png", alt: "Biblioteca" },
  {
    src: "/src/assets/images/carrusel/salon.png",
    alt: "Salón de usos múltiples",
  },
  { src: "/src/assets/images/carrusel/family room.png", alt: "Family Room" },
  { src: "/src/assets/images/carrusel/lobby.png", alt: "Lobby" },
  { src: "/src/assets/images/carrusel/gym.png", alt: "Gimnasio" },
  { src: "/src/assets/images/carrusel/pet.png", alt: "Pet Park" },
  { src: "/src/assets/images/carrusel/firepit.png", alt: "Fogatero" },
];
