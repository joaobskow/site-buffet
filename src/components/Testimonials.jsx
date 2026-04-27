import { useScrollReveal } from "../hooks/useScrollReveal";

export default function Testimonials() {
  const sectionRef = useScrollReveal();

  const reviews = [
    { id: 1, name: "Maria Souza",       event: "Festa empresarial",      text: "Maravilhoso buffet, como sempre! Parabéns.",                                              stars: 5 },
    { id: 2, name: "Sirlei Pettermann", event: "Almoço de Aniversário",  text: "Parabéns equipe, como sempre arrasando!",                                               stars: 5 },
    { id: 3, name: "Djulia Gonçalves",  event: "Festa de casamento",     text: "Contratei para o meu casamento e estava tudo ótimo! Nós agradecemos muito a equipe!",  stars: 5 },
  ];

  return (
    <section id="depoimentos" className="section testimonials-section reveal-section" ref={sectionRef}>
      <div className="container">
        <div className="section-header text-center">
          <h2 className="section-title-1">
            O que dizem <span>nossos clientes</span>
          </h2>
          <div className="section-line" />
        </div>

        <div className="testimonials-grid">
          {reviews.map((review, i) => (
            <div key={review.id} className="testimonial-card" style={{ "--t-i": i }}>
              <div className="quote-icon">
                <i className="fa-solid fa-quote-left" />
              </div>
              <p className="review-text">&quot;{review.text}&quot;</p>
              <div className="stars">
                {[...Array(review.stars)].map((_, i) => (
                  <i key={i} className="fa-solid fa-star" />
                ))}
              </div>
              <div className="review-author">
                <h4>{review.name}</h4>
                <span>{review.event}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
