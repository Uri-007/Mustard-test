import { Icon } from "@iconify/react";
import "../../styles/contact.css";

const Contact = () => {
  return (
    <>
      <section className="contact" id="contacto">
        <div className="contactContainer">
          <h2 className="contactTitle">CONTÁCTANOS</h2>

          <div className="contactInfo">
            <a href="mailto:xael@inside.com" className="contactItem">
              <Icon icon="mdi:email" />

              <span>xael@inside.com</span>
            </a>

            <a href="tel:5525386374" className="contactItem">
              <Icon icon="mdi:phone" />

              <span>5525386374</span>
            </a>
          </div>

          <a href="#" className="contactButton">
            Agenda tu cita
          </a>
        </div>
      </section>
    </>
  );
};

export default Contact;
