import React from 'react'
import '../style/main.scss'  // Asegúrate de importar el archivo de CSS
import coche from '../../public/img/cocheVolcado.png'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

const Error404 = () => {
  return (
    <div>
      <Navbar /> {/* Asegúrate de que el navbar esté aquí */}
      
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
        <img src={coche} alt="Coche" className="error-image" />
        <a href="/" className="error-button">Volver al inicio</a>
      </section>

      <Footer /> {/* Asegúrate de que el footer esté aquí */}
    </div>
  )
}

export default Error404
