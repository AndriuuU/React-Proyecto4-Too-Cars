import "../style/main.scss"

const Footer = () => {
  return (
    <footer className="footer">
      <nav className="footer__nav">
        <ul className="footer__links">
          <li className="footer__link">ACERCA DE</li>
          <li className="footer__link">TÉRMINOS DE USO</li>
          <li className="footer__link">POLÍTICA DE PRIVACIDAD</li>
        </ul>
      </nav>
      <div className="footer__social">
        <a href="#" className="footer__icon-link" aria-label="Instagram">
          <img
            src="src/assets/img/logo-instagram.png"
            alt="Instagram"
            className="footer__icon"
          />
        </a>
        <a href="#" className="footer__icon-link" aria-label="Facebook">
          <img
            src="src/assets/img/logo-facebook.png"
            alt="Facebook"
            className="footer__icon"
          />
        </a>
        <a href="#" className="footer__icon-link" aria-label="WhatsApp">
          <img
            src="src/assets/img/logo-whatsapp.png"
            alt="WhatsApp"
            className="footer__icon"
          />
        </a>
        <a href="#" className="footer__icon-link" aria-label="X">
          <img
            src="src/assets/img/logo-x.png"
            alt="X"
            className="footer__icon"
          />
        </a>
      </div>
    </footer>
  )
}

export default Footer
