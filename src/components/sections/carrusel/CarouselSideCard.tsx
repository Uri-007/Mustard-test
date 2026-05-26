import { memo } from "react";

import { Icon } from "@iconify/react";
import type { CarouselImageItem } from "../../../types/carousel.types";

interface Props {
  image: CarouselImageItem;

  side: "prev" | "next";

  onClick: () => void;
}

const CarouselSideCard = memo(({ image, side, onClick }: Props) => {
  const arrowIcon = side === "prev" ? "mdi:chevron-left" : "mdi:chevron-right";

  return (
    <div className={`carousel-side carousel-side--${side}`} onClick={onClick}>
      <img src={image.src} alt={image.alt} className="carousel-side-img" />

      <div className="carousel-side-overlay" />

      <Icon icon={arrowIcon} className="carousel-arrow-icon" />
    </div>
  );
});

CarouselSideCard.displayName = "CarouselSideCard";

export default CarouselSideCard;
