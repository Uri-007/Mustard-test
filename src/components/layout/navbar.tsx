import { useState, useEffect } from "react";
import { Icon } from "@iconify/react";
import "../../styles/navbar.css";
import { NAV_ITEMS } from "../../constants/navigation";
import { useScrollSpy } from "../../hooks/useScrollSection";
import logo from "../../assets/images/logo.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const sectionIds = NAV_ITEMS.map((item) => item.sectionId);
  const { activeSection, scrollToSection } = useScrollSpy(sectionIds);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (sectionId: string) => {
    scrollToSection(sectionId);
    setMenuOpen(false);
  };

  return (
    <header className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="navbar-container">
        <button
          className="logo-btn"
          onClick={() => scrollToSection("hero")}
          aria-label="Ir al inicio"
        >
          <img src={logo} alt="High Point Querétaro" className="navbar-logo" />
        </button>

        <nav
          className="nav-desktop"
          role="navigation"
          aria-label="Navegación principal"
        >
          {NAV_ITEMS.map((item) => (
            <button
              key={item.sectionId}
              onClick={() => handleNavClick(item.sectionId)}
              className={`nav-link ${
                activeSection === item.sectionId ? "active" : ""
              }`}
            >
              {item.label}
            </button>
          ))}
        </nav>

        <button
          className="hamburger-btn"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={menuOpen}
        >
          <Icon
            icon={menuOpen ? "mdi:close" : "mdi:menu"}
            width={26}
            height={26}
          />
        </button>
      </div>

      <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
        <nav className="mobile-nav" role="navigation" aria-label="Menú móvil">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.sectionId}
              onClick={() => handleNavClick(item.sectionId)}
              className={`nav-mobile-item ${
                activeSection === item.sectionId ? "active" : ""
              }`}
            >
              <span>{item.label}</span>

              <Icon icon="mdi:chevron-right" width={18} height={18} />
            </button>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
