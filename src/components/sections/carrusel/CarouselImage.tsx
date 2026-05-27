import type {
  CarouselImageItem,
  SlideDirection,
} from "../../../types/carousel.types";

interface Props {
  image: CarouselImageItem;
  direction: SlideDirection;
}

const CarouselImage = ({ image, direction }: Props) => {
  const animationClass =
    direction === "next" ? "carousel-slide-next" : "carousel-slide-prev";

  return (
    <div className="carousel-center">
      <img
        key={image.src}
        src={image.src}
        alt={image.alt}
        className={`carousel-center-img ${animationClass}`}
      />
    </div>
  );
};

export default CarouselImage;
