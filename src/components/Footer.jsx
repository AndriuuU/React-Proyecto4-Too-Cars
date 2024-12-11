import "../style/main.scss"
import instagram from '../../public/img/logo-instagram.png';
import facebook from '../../public/img/logo-facebook.png';
import whatsapp from '../../public/img/logo-whatsapp.png';
import x from '../../public/img/logo-x.png';


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
            src={instagram}
            alt="Instagram"
            className="footer__icon"
          />
        </a>
        <a href="#" className="footer__icon-link" aria-label="Facebook">
          <img
            src={facebook}
            alt="Facebook"
            className="footer__icon"
          />
        </a>
        <a href="#" className="footer__icon-link" aria-label="WhatsApp">
          <img
            src={whatsapp}
            alt="WhatsApp"
            className="footer__icon"
          />
        </a>
        <a href="#" className="footer__icon-link" aria-label="X">
          <img
            src={x}
            alt="X"
            className="footer__icon"
          />
        </a>
      </div>
    </footer>
  )
}

export default Footer
