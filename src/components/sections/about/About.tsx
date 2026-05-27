import "../../../styles/about.css";
import aboutImage from "../../../assets/images/location/fachada.png";

const About = () => {
  return (
    <section className="about">
      {/* LEFT */}
      <div className="aboutContent">
        <div className="aboutInner">
          <h2 className="aboutTitle">¿QUIÉNES SOMOS?</h2>

          <p className="aboutDescription">
            Pertenecemos a la destacada familia de proyectos de OR-B, una
            desarrolladora con un historial de éxitos que incluye Mítikah, The
            St. Regis Mexico City y muchos más. Nuestra dedicación a los
            detalles, calidad y experiencia profesional, nos ha permitido
            colaborar con inversionistas de renombre como Prudential Real Estate
            Investors y LaSalle Investors México, forjando alianzas con
            múltiples grupos institucionales desde 2010.
          </p>
        </div>
      </div>

      <div className="aboutImageContainer">
        <img
          src={aboutImage}
          alt="High Point Querétaro"
          className="aboutImage"
        />
      </div>
    </section>
  );
};

export default About;
