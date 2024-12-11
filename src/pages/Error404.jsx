import React from 'react';
import '../style/main.scss';  // Asegúrate de importar el archivo de CSS

const Error404 = () => {
  return (
    <section className="error-404">
      <h1 className="error-title">
        {['E', 'r', 'r', 'o', 'r', ' ', '4', '0', '4'].map((letter, index) => (
          <span key={index} className="error-letter">
            {letter}
          </span>
        ))}
      </h1>
      <p className="error-message">
        Parece que te has perdido, pero no te preocupes, vuelve al inicio y todo estará bien.
      </p>
      <img
        src="https://example.com/car-image.jpg" // Reemplaza con tu imagen de coche
        alt="Coche"
        className="error-image"
      />
      <a href="/" className="error-button">Volver al inicio</a>
    </section>
  );
};

export default Error404;
