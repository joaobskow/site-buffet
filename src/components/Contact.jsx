import { useScrollReveal } from "../hooks/useScrollReveal";

export default function Contact() {
  const sectionRef = useScrollReveal();

  const whatsappNumber = import.meta.env.VITE_WHATSAPP_NUMBER || "5511999999999";
  const message = "Olá! Gostaria de solicitar um orçamento para o Buffet Família.";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

  return (
    <section id="contato" className="section contact-section reveal-section" ref={sectionRef}>
      <div className="container contact-container">
        <div className="contact-info-centered reveal-up">
          <h2 className="section-title">Fale Conosco</h2>

          <p className="contact-desc">
            Entre em contato conosco e planeje seu evento da melhor forma
            possível. Nossa equipe está pronta para te atender e transformar
            cada detalhe em uma experiência inesquecível. <br />
            <br /> Faça seu orçamento pelo WhatsApp!
          </p>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-whatsapp"
          >
            <i className="fa-brands fa-whatsapp" />
            Solicitar Orçamento no WhatsApp
          </a>

          <div className="contact-details-row">
            <p>
              <i className="fa-solid fa-envelope" /> buffetfamilia05@email.com
            </p>
            <span className="divider-dot">•</span>
            <p>
              <i className="fa-solid fa-location-dot" /> Cerro Branco - RS
            </p>
            <span className="divider-dot">•</span>
            <a
              href="https://www.instagram.com/buffetfamillia/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
            >
              <i className="fa-brands fa-instagram" /> @buffetfamillia
            </a>
            <span className="divider-dot">•</span>
            <a
              href="https://www.facebook.com/profile.php?id=61586294786122/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
            >
              <i className="fa-brands fa-facebook" /> Buffet Família
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
