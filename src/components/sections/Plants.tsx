import { useState } from "react";
import BaseCarousel from "./carrusel/BaseCarousel";
import CarouselImage from "./carrusel/CarouselImage";
import CarouselSideCard from "./carrusel/CarouselSideCard";
import { PLANTS } from "../../constants/plants";

const Plants = () => {
  const [current, setCurrent] = useState(0);

  return (
    <section className="plants-section">
      <h2 className="plants-title">Plantas</h2>

      <BaseCarousel
        items={PLANTS}
        current={current}
        onChange={setCurrent}
        renderCenter={(item, direction) => (
          <CarouselImage image={item} direction={direction} />
        )}
        renderSide={(item, side, onClick) => (
          <CarouselSideCard image={item} side={side} onClick={onClick} />
        )}
      />
    </section>
  );
};

export default Plants;
