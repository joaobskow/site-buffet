import { useScrollReveal } from "../hooks/useScrollReveal";
import buffet from "../assets/gallery/buffet.jpg";
import buffet2 from "../assets/gallery/buffet2.jpg";
import buffetsaladas from "../assets/gallery/bg/buffet_saladas.jpg";
import boate from "../assets/gallery/bg/boate.jpg";
import buffet4 from "../assets/gallery/bg/buffet4.jpg";
import carnes from "../assets/gallery/bg/carnes.jpg";
import paisagem3 from "../assets/gallery/bg/paisagem3.jpeg";

export default function Gallery() {
  const sectionRef = useScrollReveal();

  const galleryImages = [
    { src: buffet,       alt: "Buffet Completo" },
    { src: buffet2,      alt: "Decoração Buffet" },
    { src: buffetsaladas,alt: "Mesa de Saladas" },
    { src: carnes,       alt: "Churrasco Premium" },
    { src: boate,        alt: "Pista de Dança" },
    { src: buffet4,      alt: "Detalhes do Evento" },
    { src: paisagem3,    alt: "Ambiente Externo" },
  ];

  const duplicatedImages = [...galleryImages, ...galleryImages];

  return (
    <section id="galeria" className="section bg-light reveal-section" ref={sectionRef}>
      <div className="container">
        <div className="section-header text-center reveal-up">
          <h2 className="section-title">
            Nossa <span>Galeria</span>
          </h2>
        </div>
      </div>

      <div className="gallery-wrapper">
        <div className="gallery-track">
          {duplicatedImages.map((item, index) => (
            <div key={index} className="gallery-item">
              <img src={item.src} alt={item.alt} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
