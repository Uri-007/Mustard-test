import Plants from "./Plants";
import Finishes from "./Finishes.tsx";
import "../../styles/gallery.css";

const Gallery = () => {
  return (
    <section className="gallery-section" id="galeria">
      <div className="gallery-content">
        <Finishes />
        <Plants />
      </div>
    </section>
  );
};

export default Gallery;
