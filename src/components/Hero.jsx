import { useState, useEffect, useCallback } from "react";
import { useScrollReveal } from "../hooks/useScrollReveal";

import img1 from "../assets/gallery/bg/carnes.jpg";
import img2 from "../assets/gallery/bg/buffet_saladas.jpg";
import img3 from "../assets/gallery/perfil.png";
import img4 from "../assets/gallery/bg/boate.jpg";
import img5 from "../assets/gallery/bg/saladas+carnes.jpg";

export default function Hero() {
  const text = "Celebre Momentos Inesquecíveis.";
  const sectionRef = useScrollReveal();

  const cards = [img1, img2, img3, img4, img5];
  const [activeIndex, setActiveIndex] = useState(2);
  const [isPaused, setIsPaused] = useState(false);

  const handleNext = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % cards.length);
  }, [cards.length]);

  const handlePrev = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + cards.length) % cards.length);
  }, [cards.length]);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(handleNext, 3000);
    return () => clearInterval(interval);
  }, [isPaused, handleNext]);

  const getCardStyle = (index) => {
    const total = cards.length;
    let distance = (index - activeIndex + total) % total;
    if (distance > total / 2) distance -= total;
    const xOffset = distance * 130;
    const scale = distance === 0 ? 1.2 : Math.max(0.7, 1 - Math.abs(distance) * 0.15);
    const isActive = distance === 0;
    return {
      zIndex: 10 - Math.abs(distance),
      transform: `translateX(${xOffset}px) scale(${scale})`,
      filter: isActive ? "none" : "blur(2px) brightness(0.7)",
      opacity: Math.abs(distance) > 2 ? 0 : 1,
    };
  };

  return (
    <section id="home" className="hero reveal-section" ref={sectionRef}>
      <div className="container hero-split">
        <div className="hero-text reveal-left">
          <h1>{text}</h1>
          <p>
            Gastronomia sofisticada e ambientes exclusivos. Nós cuidamos de cada
            detalhe para transformar seu evento em uma experiência única e
            memorável.
          </p>
          <div className="hero-btns">
            <a href="#contato" className="btn btn-primary">Reserve Sua Data</a>
            <a href="#cardapios" className="btn btn-outline">Ver Cardápios</a>
          </div>
        </div>

        <div
          className="carousel-container reveal-right"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <button className="nav-arrow prev" onClick={handlePrev} aria-label="Anterior">
            <i className="fa-solid fa-chevron-left" />
          </button>
          {cards.map((img, index) => (
            <div
              key={index}
              className="carousel-card"
              style={getCardStyle(index)}
              onClick={() => setActiveIndex(index)}
            >
              <img src={img} alt={`Destaque ${index}`} />
            </div>
          ))}
          <button className="nav-arrow next" onClick={handleNext} aria-label="Próximo">
            <i className="fa-solid fa-chevron-right" />
          </button>
        </div>
      </div>
    </section>
  );
}
