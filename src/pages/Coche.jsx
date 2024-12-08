import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useLoaderData } from "react-router-dom";
import "./Coche.css"; // Importamos los estilos
import Contacto from "./Contacto"; // Asegúrate de tener este componente

const Coche = () => {
  const { id } = useParams();
  const car = useLoaderData(); // Cargar los datos del coche
  const [isFavorite, setIsFavorite] = useState(false);
  const [showContactForm, setShowContactForm] = useState(false); // Estado del formulario
  const [closing, setClosing] = useState(false); // Para animación de cierre

  // Cargar favoritos desde localStorage
  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    if (favorites.some((fav) => fav.id === car.id)) {
      setIsFavorite(true); // El coche está en favoritos
    }
  }, [car.id]);

  // Función para agregar o eliminar coche de favoritos
  const toggleFavorite = () => {
    const favorites = JSON.parse(localStorage.getItem("favorites")) || [];

    if (isFavorite) {
      // Eliminar de favoritos
      const updatedFavorites = favorites.filter((fav) => fav.id !== car.id);
      localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
    } else {
      // Agregar a favoritos
      favorites.push(car);
      localStorage.setItem("favorites", JSON.stringify(favorites));
    }

    setIsFavorite(!isFavorite); // Actualizar el estado del botón
  };

  // Función para cerrar el modal
  const closeModal = () => {
    setClosing(true);
    setTimeout(() => {
      setShowContactForm(false);
      setClosing(false);
    }, 300);
  };

  return (
    <div className="coche-card">
      <div className="coche-card-image">
        <img src={car.image} alt={`${car.make} ${car.model}`} />

        <button
          className={`favorite-button ${isFavorite ? "favorited" : ""}`}
          onClick={toggleFavorite}
        >
          ★
        </button>
      </div>
      <div className="coche-card-info">
        <h2>{`${car.make} ${car.model}`}</h2>
        <p className="price">{car.price} €</p>
        <p>
          <strong>Año:</strong> {car.year}
        </p>
        <p>
          <strong>Tipo de combustible:</strong> {car.fuelType}
        </p>
        <p>
          <strong>Tipo de cambio:</strong> {car.transmission}
        </p>

        <button
          className="contact-button"
          onClick={() => setShowContactForm(true)} // Mostrar el formulario
        >
          CONTACTAR
        </button>
      </div>

      {/* Modal para el formulario de contacto */}
      {showContactForm && (
        <div className="modal-overlay" onClick={closeModal}>
          <div
            className={`modal-content ${closing ? "closing" : ""}`}
            onClick={(e) => e.stopPropagation()}
          >
            <button className="close-button" onClick={closeModal}>
              ✖
            </button>
            <Contacto />
          </div>
        </div>
      )}
    </div>
  );
};

export default Coche;
