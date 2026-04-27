export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer-content">
        {/* Linha 2: Crédito do Desenvolvedor */}
        <p className="footer-text">
          Site desenvolvido por{" "}
          <a
            href="https://www.linkedin.com/in/joaovitorbeskow"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link"
          >
            João Vitor Beskow
          </a>
        </p>

        {/* Linha 3: Copyright */}
        <p className="footer-text copyright">© {currentYear} Buffet Família</p>
      </div>
    </footer>
  );
}
