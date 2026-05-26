// components/AmenityCarousel.tsx
import { useCarouselAnimation } from "../../../hooks/useCarouselAnimation";
import { useCarouselNavigation } from "../../../hooks/useCarouselNavigation";
import { useDragSwipe } from "../../../hooks/useDragSwipe";
import CarouselImage from "./CarouselImage";
import CarouselSideCard from "./CarouselSideCard";
import type { AmenityImage } from "../../../types/animateImage.types";

interface Props {
  images: AmenityImage[];
  current: number;
  onChange: (index: number) => void;
}

const AmenityCarousel = ({ images, current, onChange }: Props) => {
  const total = images.length;

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

  const handleStageClick = (e: React.MouseEvent) => {
    if (isDragging()) e.preventDefault();
  };

  return (
    <div className="carousel-root">
      <div
        className="carousel-stage"
        {...mouseHandlers}
        {...touchHandlers}
        onClick={handleStageClick}
        style={{ cursor: isDragging() ? "grabbing" : "grab" }}
      >
        <CarouselSideCard
          image={images[prevIndex]}
          side="prev"
          onClick={() => {
            prev();
          }}
        />

        <CarouselImage
          image={images[current]}
          direction={animState.direction}
        />

        <CarouselSideCard
          image={images[nextIndex]}
          side="next"
          onClick={() => {
            next();
          }}
        />
      </div>

      <div className="carousel-dots">
        {images.map((_, i) => (
          <button
            key={i}
            className={`carousel-dot${i === current ? " carousel-dot--active" : ""}`}
            onClick={() => goTo(i)}
            aria-label={`Imagen ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default AmenityCarousel;
