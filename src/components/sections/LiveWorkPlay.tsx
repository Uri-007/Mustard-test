import lwpImg from "../../assets/images/render.png";
import "../../styles/liveworkplay.css";

const LiveWorkPlay = () => {
  return (
    <section className="lwp-section">
      <div className="lwp-label">
        <span>Live, Work & Play</span>
      </div>
      <img
        src={lwpImg}
        alt="Live Work and Play — High Point Querétaro"
        className="lwp-img"
      />
    </section>
  );
};

export default LiveWorkPlay;
