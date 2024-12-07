import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Card from "../components/Card"; 
import "./menu.css"; 

const Favoritos = () => {
  const [favorites, setFavorites] = useState([]); 
  const [currentPage, setCurrentPage] = useState(1); 
  const carsPerPage = 15; 
  const navigate = useNavigate();

  // Cargar los favoritos desde localStorage
  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavorites(storedFavorites);
  }, []);

  // Calcular los favoritos que se muestran en la página actual
  const indexOfLastCar = currentPage * carsPerPage;
  const indexOfFirstCar = indexOfLastCar - carsPerPage;
  const currentFavorites = favorites.slice(indexOfFirstCar, indexOfLastCar);

  // Número total de páginas
  const totalPages = Math.ceil(favorites.length / carsPerPage);

  const handleCardClick = (id) => {
    navigate(`/coche/${id}`); // Navegar a la página de detalles del coche
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber); // Cambiar la página actual
  };

  return (
    <div>
      <h2>Mis Favoritos</h2>
      <div className="card-container">
        {favorites.length > 0 ? (
          currentFavorites.map((car) => (
            <div key={car.id} className="car-card">
              <Card
                title={`${car.make} ${car.model}`}
                image={car.image}
                onClick={() => handleCardClick(car.id)}
              />
            </div>
          ))
        ) : (
          <p>No tienes coches favoritos aún.</p>
        )}
      </div>

    
      {totalPages > 1 && (
        <div className="pagination">
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index + 1}
              onClick={() => handlePageChange(index + 1)}
              className={currentPage === index + 1 ? "active" : ""}
            >
              {index + 1}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default Favoritos;
