import { LOCATION_POINTS } from "../../constants/locationPoints";
import bgImage from "../../assets/images/location/locationbg.png";
import mapImage from "../../assets/images/location/locationmap.png";
import "../../styles/location.css";
import About from "./about/About";

const Location = () => {
  return (
    <>
      <section id="ubicacion" className="location">
        <div className="locationBg">
          <img src={bgImage} alt="Background" className="locationBgImage" />
          <div className="locationOverlay" />
        </div>

        <div className="locationContainer">
          <div className="locationContent">
            <h2 className="locationTitle">UBICACIÓN</h2>

            <p className="locationAddress">
              Centro Sur 76090 Santiago De Querétaro, Querétaro
            </p>

            <ul className="locationList">
              {LOCATION_POINTS.map((item) => (
                <li key={item.id} className="locationItem">
                  <span className="locationItemNumber">{item.id}.</span>
                  <p>
                    {item.name}{" "}
                    <span className="locationItemDistance">
                      {item.distance}
                    </span>
                  </p>
                </li>
              ))}
            </ul>

            <div className="locationButtonWrapper">
              <a
                href="https://maps.google.com/?q=Centro+Sur+Querétaro"
                target="_blank"
                rel="noreferrer"
                className="locationButton"
              >
                Ver en Google Maps
              </a>
            </div>
          </div>

          <div className="locationMap">
            <img src={mapImage} alt="Mapa de ubicación" />
          </div>
        </div>
      </section>
      <About />
    </>
  );
};

export default Location;
