import { useState, useRef } from "react";
import { AMENITIES, AMENITY_IMAGES } from "../../constants/amenities";
import AmenityCard from "./carrusel/Amenitycard";
import AmenityCarousel from "./carrusel/Amenitycarousel";
import "../../styles/amenities.css";

const Amenities = () => {
  const [current, setCurrent] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  const handleAmenitySelect = (imageIndex: number) => {
    setCurrent(imageIndex);

    if (carouselRef.current) {
      const rect = carouselRef.current.getBoundingClientRect();
      // Solo scrollea si el carrusel está completamente por debajo del viewport
      const isBelowViewport = rect.top > window.innerHeight;

      if (isBelowViewport) {
        carouselRef.current.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }
  };

  return (
    <section className="amenities-section" id="amenidades">
      <h2 className="amenities-title">Amenidades</h2>

      <div className="amenities-grid">
        {AMENITIES.map((a) => (
          <AmenityCard
            key={a.label}
            amenity={a}
            isActive={a.imageIndex === current}
            onSelect={() => handleAmenitySelect(a.imageIndex)}
          />
        ))}
      </div>

      <div ref={carouselRef}>
        <AmenityCarousel
          images={AMENITY_IMAGES}
          current={current}
          onChange={setCurrent}
        />
      </div>
    </section>
  );
};

export default Amenities;
