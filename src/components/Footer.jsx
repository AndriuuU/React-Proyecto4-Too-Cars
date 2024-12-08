//import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-links">
        <p>ACERCA DE</p>
        <p>TÉRMINOS DE USO</p>
        <p>POLÍTICA DE PRIVACIDAD</p>
      </div>
      <div className="footer-icons">
        <a href="#" aria-label="Instagram"> 
            <img src="public/img/logo-instagram.png" alt="logotipo de instagram" className="footer-icon" />
        </a>
        <a href="#" aria-label="Facebook"> 
            <img src="public/img/logo-facebook.png" alt="logotipo de facebook" className="footer-icon" />
        </a>
        <a href="#" aria-label="WhatsApp">
            <img src="public/img/logo-whatsapp.png" alt="logotipo de whatsapp" className="footer-icon" />
        </a>
        <a href="#" aria-label="X">
        <img src="public/img/logo-x.png" alt="logotipo de x" className="footer-icon" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
