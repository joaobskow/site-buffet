import { useScrollReveal } from "../hooks/useScrollReveal";
import paisagem1 from "../assets/gallery/bg/paisagem1.jpeg";
import paisagem2 from "../assets/gallery/bg/paisagem2.jpeg";
import paisagem4 from "../assets/gallery/bg/paisagem4.jpeg";
import buffet4 from "../assets/gallery/bg/buffet4.jpg";

export default function About() {
  const sectionRef = useScrollReveal();

  return (
    <section id="sobre" className="section reveal-section" ref={sectionRef}>
      <div className="container about-container">
        <div className="about-text reveal-left">
          <h2 className="section-title">Nossa História</h2>
          <p>
            Nossa história tem cheiro de tempero fresco e raízes no{" "}
            <strong>interior</strong>. Descobrimos que nossa verdadeira paixão
            não era apenas cozinhar, mas levar afeto através do sabor.<br />
            Cada prato que criamos é uma homenagem às tradições que nos
            moldaram, com um toque de inovação que reflete nossa jornada.
            <br />
            Hoje, esse cuidado chega até você para tornar seus momentos
            especiais.
          </p>
        </div>

        <div className="about-masonry reveal-right">
          <div className="masonry-item item-tall">
            <img src={paisagem1} alt="Buffet principal" />
          </div>
          <div className="masonry-item">
            <img src={paisagem4} alt="Detalhe" />
          </div>
          <div className="masonry-item item-tall">
            <img src={buffet4} alt="Buffet principal" />
          </div>
          <div className="masonry-item">
            <img src={paisagem2} alt="Ambiente" />
          </div>
        </div>
      </div>
    </section>
  );
}
