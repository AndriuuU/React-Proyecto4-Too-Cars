import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { useLoaderData } from "react-router-dom"
import "../style/main.scss"
import Contacto from "./Contacto" // Asegúrate de tener este componente

const Coche = () => {
  const { id } = useParams()
  const car = useLoaderData() // Cargar los datos del coche
  const [isFavorite, setIsFavorite] = useState(false)
  const [showContactForm, setShowContactForm] = useState(false) // Estado del formulario
  const [closing, setClosing] = useState(false) // Para animación de cierre

  // Cargar favoritos desde localStorage
  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem("favorites")) || []
    if (favorites.some((fav) => fav.id === car.id)) {
      setIsFavorite(true) // El coche está en favoritos
    }
  }, [car.id])

  // Función para agregar o eliminar coche de favoritos
  const toggleFavorite = () => {
    const favorites = JSON.parse(localStorage.getItem("favorites")) || []

    if (isFavorite) {
      // Eliminar de favoritos
      const updatedFavorites = favorites.filter((fav) => fav.id !== car.id)
      localStorage.setItem("favorites", JSON.stringify(updatedFavorites))
    } else {
      // Agregar a favoritos
      favorites.push(car)
      localStorage.setItem("favorites", JSON.stringify(favorites))
    }

    setIsFavorite(!isFavorite) // Actualizar el estado del botón
  }

  // Función para cerrar el modal
  const closeModal = () => {
    setClosing(true)
    setTimeout(() => {
      setShowContactForm(false)
      setClosing(false)
    }, 300)
  }

  return (
    <article className="coche">
      <figure className="coche__image">
        <img src={car.image} alt={`${car.make} ${car.model}`} />
        <button
          className={`coche__favorite-btn ${isFavorite ? "coche__favorite-btn--active" : ""}`}
          onClick={toggleFavorite}
        >
          ★
        </button>
      </figure>

      <section className="coche__info">
        <h2 className="coche__title">{`${car.make} ${car.model}`}</h2>
        <p className="coche__price">{car.price} €</p>
        <p className="coche__details">
          <strong>Año:</strong> {car.year}
        </p>
        <p className="coche__details">
          <strong>Tipo de combustible:</strong> {car.fuelType}
        </p>
        <p className="coche__details">
          <strong>Tipo de cambio:</strong> {car.transmission}
        </p>

        <button
          className="coche__contact-btn"
          onClick={() => setShowContactForm(true)}
        >
          CONTACTAR
        </button>
      </section>

      {/* Modal para el formulario de contacto */}
      {showContactForm && (
        <aside className="coche__modal-overlay" onClick={closeModal}>
          <div
            className={`coche__modal-content ${closing ? "coche__modal-content--closing" : ""}`}
            onClick={(e) => e.stopPropagation()}
          >
            <button className="coche__modal-close-btn" onClick={closeModal}>
              ✖
            </button>
            <Contacto />
          </div>
        </aside>
      )}
    </article>
  )
}

export default Coche
