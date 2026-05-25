import { REASONS } from "../../constants/reasons";
import sectionImg from "../../assets/images/fachada.png";
import "../../styles/reasons.css";

const Reasons = () => {
  return (
    <section className="reasons-section">
      <div className="reasons-green-bg" aria-hidden="true" />

      <div className="reasons-inner">
        {/* Left: text content */}
        <div className="reasons-content">
          <h2 className="reasons-title">
            Razones para elegir comprar en{" "}
            <span className="reasons-title-highlight">
              High Point Querétaro
            </span>
          </h2>

          <ul className="reasons-list">
            {REASONS.map((r) => (
              <li className="reasons-item" key={r.title}>
                <p className="reasons-text">
                  <strong>{r.title}:</strong> {r.desc}
                </p>
              </li>
            ))}
          </ul>
        </div>

        {/* Right: image collage */}
        <div className="reasons-media">
          <img
            src={sectionImg}
            alt="High Point Querétaro vista y edificio"
            className="reasons-img"
          />
        </div>
      </div>
    </section>
  );
};

export default Reasons;
