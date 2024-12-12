//import React from 'react'
import "../style/main.scss"
import fondo from '../../public/img/Fondo.png';

import coche1 from '../../public/img/coche1.png';
import coche2 from '../../public/img/coche2.png';
import coche3 from '../../public/img/coche3.jpg';
import { useNavigate } from "react-router-dom";




const Inicio = () => {
  const navigate = useNavigate();

  const handleRedirect = () => {
    navigate("/menu");
  }

  return (
    
    <main className="page">
      <header className="hero">
        <img
          src={fondo}
          alt="Fondo con coches modificados"
          className="hero__background"
        />
        <h1 className="hero__title">Too Cars</h1>
        <h3 className="hero__subtitle">
          Página dedicada a todo tipo de coches modificados japoneses, donde
          podrás ver los distintos coches y sus descripción.
        </h3>
        <nav className="hero__scroll">
          <span>&#8595;</span>
        </nav>
      </header>

      <section className="categories">
        <h1 className="categories__title">Categorías</h1>
        <div className="categories__list">
        
          <article className="categories__item">
            <img
              src={coche1}
              alt="Coche primero"
              className="categories__image"
              onClick={handleRedirect}
            />
            <div className="categories__info">
              <p className="categories__description">
                Lorem ipsum dolor sit amet consectetur. <br />
                Nunc mauris mattis urna facilisi risus consectetur.
              </p>
              <button className="categories__button" onClick={handleRedirect}>
                VER
              </button>
            </div>
          </article>

        
          <article className="categories__item">
            <img
              src={coche2}
              alt="Coche segundo"
              className="categories__image"
              onClick={handleRedirect}
            />
            <div className="categories__info">
              <p className="categories__description">
                Lorem ipsum dolor sit amet consectetur. <br />
                Nunc mauris mattis urna facilisi risus consectetur.
              </p>
              <button className="categories__button" onClick={handleRedirect}>
                VER
              </button>
            </div>
          </article>
          <article className="categories__item">
            <img
              src={coche3}
              alt="Coche terdecro"
              className="categories__image"
              onClick={handleRedirect}
            />
            <div className="categories__info">
              <p className="categories__description">
                Lorem ipsum dolor sit amet consectetur. <br />
                Nunc mauris mattis urna facilisi risus consectetur.
              </p>
              <button className="categories__button" onClick={handleRedirect}>
                VER
              </button>
            </div>
          </article>
        </div>
      </section>
    </main>
  )
}
export default Inicio