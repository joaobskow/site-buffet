import { useScrollReveal } from "../hooks/useScrollReveal";
import casamento from "../assets/gallery/bg/carnes.jpg";
import imgAniversario from "../assets/gallery/bg/buffet_saladas.jpg";
import imgCorporativo from "../assets/gallery/bg/saladas+carnes.jpg";
import imgFormatura from "../assets/gallery/bg/boate.jpg";

export default function Services() {
  const sectionRef = useScrollReveal();

  return (
    <section id="servicos" className="section-bg-slider reveal-section" ref={sectionRef}>
      <div className="container content">
        <div className="section-header">
          <h2 className="section-title-1">
            Nossos <span>Eventos</span>
          </h2>
          <div className="section-line" />
        </div>

        <div className="grid-cards">
          {[
            { img: casamento,     alt: "Buffet de Carnes para Casamento", title: "Casamentos",  desc: "Experiência gastronômica inesquecível para o seu grande dia." },
            { img: imgAniversario,alt: "Buffet de Saladas para Aniversário", title: "Aniversários", desc: "Celebre mais um ano de vida com momentos e sabores especiais." },
            { img: imgCorporativo,alt: "Evento Corporativo", title: "Corporativo",  desc: "Eventos empresariais com excelência e sofisticação." },
            { img: imgFormatura,  alt: "Festa de Formatura", title: "Formaturas",   desc: "Comemore suas grandes conquistas com estilo e diversão." },
          ].map((card, i) => (
            <div key={i} className="card" style={{ "--card-i": i }}>
              <div className="card-image">
                <img src={card.img} alt={card.alt} />
              </div>
              <div className="card-content">
                <h3>{card.title}</h3>
                <p>{card.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
