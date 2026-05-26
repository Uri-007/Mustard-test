export interface CarouselImageItem {
  src: string;
  alt: string;
}

export type SlideDirection = "next" | "prev";

export interface AnimState {
  animKey: number;
  direction: SlideDirection;
}

export interface BaseCarouselProps<T> {
  items: T[];

  current: number;

  onChange: (index: number) => void;

  renderCenter: (item: T, direction: SlideDirection) => React.ReactNode;

  renderSide: (
    item: T,
    side: "prev" | "next",
    onClick: () => void,
  ) => React.ReactNode;
}
