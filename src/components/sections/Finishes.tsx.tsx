import { useState } from "react";

import Tabs from "./tabs/Tabs";

import BaseCarousel from "./carrusel/BaseCarousel";
import CarouselImage from "./carrusel/CarouselImage";
import CarouselSideCard from "./carrusel/CarouselSideCard";

import { FINISHES } from "../../constants/finishes";

const Finishes = () => {
  const [current, setCurrent] = useState(0);

  return (
    <section className="finishes-section">
      <h2 className="finishes-title">Acabados</h2>

      <Tabs
        items={FINISHES}
        active={current}
        onChange={setCurrent}
        getLabel={(item) => item.label}
      />

      <BaseCarousel
        items={FINISHES.map((item) => item.images[0])}
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

export default Finishes;
