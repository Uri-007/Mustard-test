import type { AmenityImage } from "./animateImage.types";
import type { SlideDirection } from "./slideDirection.types";

export interface PropsCarouselImage {
  image: AmenityImage;
  animKey: number;
  direction: SlideDirection;
}

export interface PropsSlide {
  image: AmenityImage;
  animKey: number;
  direction: SlideDirection;
}

export interface Slide {
  image: AmenityImage;
  id: number;
}