import { useCarouselAnimation } from "../../../hooks/useCarouselAnimation";
import { useCarouselNavigation } from "../../../hooks/useCarouselNavigation";
import { useDragSwipe } from "../../../hooks/useDragSwipe";
import type { BaseCarouselProps } from "../../../types/carousel.types";
import CarouselDots from "./CarouselDots";

const BaseCarousel = <T,>({
  items,
  current,
  onChange,
  renderCenter,
  renderSide,
}: BaseCarouselProps<T>) => {
  const total = items.length;

  const { animState, triggerAnimation } = useCarouselAnimation();

  const { prev, next, goTo, prevIndex, nextIndex } = useCarouselNavigation({
    total,
    current,
    onChange,
    triggerAnimation,
  });

  const { isDragging, mouseHandlers, touchHandlers } = useDragSwipe({
    onNext: next,
    onPrev: prev,
  });

  return (
    <div className="carousel-root">
      <div
        className="carousel-stage"
        {...mouseHandlers}
        {...touchHandlers}
        style={{
          cursor: isDragging() ? "grabbing" : "grab",
        }}
      >
        {renderSide(items[prevIndex], "prev", prev)}

        {renderCenter(items[current], animState.direction)}

        {renderSide(items[nextIndex], "next", next)}
      </div>

      <CarouselDots total={total} current={current} goTo={goTo} />
    </div>
  );
};

export default BaseCarousel;
