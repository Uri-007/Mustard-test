export type SlideDirection = "next" | "prev";

export interface CarouselAnimationState {
  animKey: number;
  direction: SlideDirection;
}

export interface UseCarouselAnimationReturn {
  animState: CarouselAnimationState;
  triggerAnimation: (dir: SlideDirection) => void;
}

export interface AnimState {
  animKey: number;
  direction: SlideDirection;
}
