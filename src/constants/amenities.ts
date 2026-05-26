// constants/amenities.ts
import type { Amenity, AmenityImage } from "../types/animateImage.types";

import ludoteca from "../assets/images/carrusel/ludoteca.png";
import alberca from "../assets/images/carrusel/alberca.png";
import foro from "../assets/images/carrusel/foro.png";
import biblioteca from "../assets/images/carrusel/biblioteca.png";
import salon from "../assets/images/carrusel/salon.png";
import familyRoom from "../assets/images/carrusel/family room.png";
import lobby from "../assets/images/carrusel/lobby.png";
import gym from "../assets/images/carrusel/gym.png";
import pet from "../assets/images/carrusel/pet.png";
import firepit from "../assets/images/carrusel/firepit.png";

export const AMENITIES: Amenity[] = [
  { icon: "mdi:controller-classic-outline", label: "LUDOTECA", imageIndex: 0 },
  { icon: "mdi:pool", label: "ALBERCA", imageIndex: 1 },
  { icon: "mdi:microphone-outline", label: "FORO", imageIndex: 2 },
  { icon: "mdi:bookshelf", label: "BIBLIOTECA", imageIndex: 3 },
  {
    icon: "mdi:television-play",
    label: "SALÓN DE USOS MÚLTIPLES",
    imageIndex: 4,
  },
  {
    icon: "mdi:account-group-outline",
    label: "FAMILY ROOM",
    imageIndex: 5,
  },
  { icon: "mdi:sofa-outline", label: "LOBBY", imageIndex: 6 },
  { icon: "mdi:dumbbell", label: "GIMNASIO", imageIndex: 7 },
  { icon: "mdi:paw", label: "PET PARK", imageIndex: 8 },
  {
    icon: "mdi:fire",
    label: "FOGATERO",
    subLabel: "(EN NIVEL 20)",
    imageIndex: 9,
  },
];

export const AMENITY_IMAGES: AmenityImage[] = [
  { src: ludoteca, alt: "Ludoteca" },
  { src: alberca, alt: "Alberca" },
  { src: foro, alt: "Foro" },
  { src: biblioteca, alt: "Biblioteca" },
  { src: salon, alt: "Salón de usos múltiples" },
  { src: familyRoom, alt: "Family Room" },
  { src: lobby, alt: "Lobby" },
  { src: gym, alt: "Gimnasio" },
  { src: pet, alt: "Pet Park" },
  { src: firepit, alt: "Fogatero" },
];
