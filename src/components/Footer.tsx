import "../styles/footer.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footerContainer">
        <p className="footerText">
          High Point Querétaro © {currentYear} | Aviso de privacidad
        </p>
      </div>
    </footer>
  );
};

export default Footer;
