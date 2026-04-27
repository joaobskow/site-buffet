import { useState, useEffect } from "react";

const NAV_ITEMS = [
  { label: "Home",       href: "#home",        icon: "fa-house" },
  { label: "Sobre",      href: "#sobre",       icon: "fa-circle-info" },
  { label: "Serviços",   href: "#servicos",    icon: "fa-utensils" },
  { label: "Galeria",    href: "#galeria",     icon: "fa-images" },
  { label: "Comentários",href: "#depoimentos", icon: "fa-star" },
  { label: "Contato",    href: "#contato",     icon: "fa-envelope" },
];

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const whatsappNumber = import.meta.env.VITE_WHATSAPP_NUMBER || "5551999999999";
  const message = "Olá! Gostaria de solicitar um orçamento para o Buffet Família.";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

  // Lock body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isMobileMenuOpen]);

  // Track active section via IntersectionObserver
  useEffect(() => {
    const sections = NAV_ITEMS.map(item =>
      document.querySelector(item.href)
    ).filter(Boolean);

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.4 }
    );

    sections.forEach(s => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  const toggleMenu = () => setIsMobileMenuOpen(prev => !prev);
  const closeMenu  = () => setIsMobileMenuOpen(false);

  return (
    <header className="header">
      <div className="header-container">
        {/* LOGO */}
        <a href="#home" className="logo logo-link" onClick={closeMenu}>
          Buffet <span>Família.</span>
        </a>

        {/* HAMBURGER ICON */}
        <button
          className={`mobile-menu-icon ${isMobileMenuOpen ? "open" : ""}`}
          onClick={toggleMenu}
          aria-label={isMobileMenuOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={isMobileMenuOpen}
        >
          <span className="hamburger-line" />
          <span className="hamburger-line" />
          <span className="hamburger-line" />
        </button>

        {/* BACKDROP */}
        <div
          className={`mobile-backdrop ${isMobileMenuOpen ? "active" : ""}`}
          onClick={closeMenu}
          aria-hidden="true"
        />

        {/* DRAWER NAV */}
        <nav className={`navbar ${isMobileMenuOpen ? "active" : ""}`} aria-label="Menu principal">
          {/* Drawer Header */}
          <div className="drawer-header">
            <span className="drawer-logo">Buffet <span>Família.</span></span>
            <button className="drawer-close" onClick={closeMenu} aria-label="Fechar menu">
              <i className="fa-solid fa-xmark" />
            </button>
          </div>

          {/* Nav Links */}
          <ul>
            {NAV_ITEMS.map((item, i) => (
              <li key={item.href} style={{ "--i": i }}>
                <a
                  href={item.href}
                  onClick={closeMenu}
                  className={activeSection === item.href.replace("#", "") ? "nav-active" : ""}
                >
                  <span className="nav-icon">
                    <i className={`fa-solid ${item.icon}`} />
                  </span>
                  <span className="nav-label">{item.label}</span>
                  <i className="fa-solid fa-chevron-right nav-arrow-icon" />
                </a>
              </li>
            ))}
          </ul>

          {/* Drawer Footer CTA */}
          <div className="mobile-menu-btn">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary full-width"
              onClick={closeMenu}
            >
              <i className="fa-brands fa-whatsapp" />
              Solicitar Orçamento
            </a>
          </div>
        </nav>

        {/* DESKTOP CTA */}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-outline desktop-only"
        >
          Solicitar Orçamento
        </a>
      </div>
    </header>
  );
}
