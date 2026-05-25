import { Icon } from "@iconify/react";
import heroImg from "../../assets/images/section.png";
import { ROOMS } from "../../constants/rooms";
import "../../styles/hero.css";
import Reasons from "./Reasons";
import LiveWorkPlay from "./LiveWorkPlay";

const Hero = () => {
  return (
    <>
      <section className="hero" id="hero">
        <img src={heroImg} alt="High Point edificio" className="hero-bg" />

        <div className="hero-card">
          <h1 className="hero-title">Live Work & Play</h1>
          <p className="hero-desc">
            ORB Desarrolladora ha diseñado el único concepto en Querétaro “Live,
            Work and Play”, donde puedes hacer toda tu vida en el mismo lugar.
            El tiempo es lo más valioso en el mundo de hoy, vivir en High Point
            Querétaro potencializará tu rendimiento, invierte en ti, invierte
            inteligente
          </p>
          <button className="hero-cta">Cotiza ahora</button>
        </div>

        <div className="hero-rooms">
          {ROOMS.map((room) => (
            <div className="hero-room-card" key={room.label}>
              <Icon
                icon="material-symbols:bed-outline"
                className="hero-room-icon"
              />
              <div>
                <p className="hero-room-label">{room.label}</p>
                <p className="hero-room-price">{room.price}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className="hero-mobile-text">
        <h2 className="hero-title">Live Work & Play</h2>
        <p className="hero-desc">
          ORB Desarrolladora ha diseñado el único concepto en Querétaro “Live,
          Work and Play”, donde puedes hacer toda tu vida en el mismo lugar. El
          tiempo es lo más valioso en el mundo de hoy, vivir en High Point
          Querétaro potencializará tu rendimiento, invierte en ti, invierte
          inteligente
        </p>
        <button className="hero-cta">Cotiza ahora</button>
      </div>
      <Reasons />
      <LiveWorkPlay />
    </>
  );
};

export default Hero;
