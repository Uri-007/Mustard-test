import type { SlideDirection } from "./slideDirection.types";

export interface OptionsNavigation {
  total: number;
  current: number;
  onChange: (index: number) => void;
  triggerAnimation: (dir: SlideDirection) => void;
}

export interface UseCarouselNavigationReturn {
  prev: () => void;
  next: () => void;
  goTo: (index: number) => void;
  prevIndex: number;
  nextIndex: number;
}
