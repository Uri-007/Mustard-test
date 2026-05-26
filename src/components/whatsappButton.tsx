import { Icon } from "@iconify/react";
import "../styles/whatsapp.css"

const PHONE_NUMBER = "5525386374";

const WhatsappButton = () => {
  return (
    <a
      href={`https://wa.me/${PHONE_NUMBER}`}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-button"
      aria-label="WhatsApp"
    >
      <Icon icon="mdi:whatsapp" className="whatsapp-icon" />
    </a>
  );
};

export default WhatsappButton;
