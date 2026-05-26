interface Props {
  total: number;
  current: number;
  goTo: (index: number) => void;
}

const CarouselDots = ({ total, current, goTo }: Props) => {
  return (
    <div className="carousel-dots">
      {Array.from({ length: total }).map((_, i) => (
        <button
          key={i}
          className={`carousel-dot ${
            i === current ? "carousel-dot--active" : ""
          }`}
          onClick={() => goTo(i)}
        />
      ))}
    </div>
  );
};

export default CarouselDots;
