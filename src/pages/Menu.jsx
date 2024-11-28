import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Card from "../components/Card";
import "./menu.css";

const Menu = () => {
  const [cars, setCars] = useState([]);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1); 
  const carsPerPage = 15; // Número de coches por página
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCars = async () => {
      try {
        const data = await loaderMenu();
        const uniqueCars = filterCars(data);
        setCars(uniqueCars);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchCars();
  }, []);

  const handleCardClick = (id) => {
    navigate(`/coche/${id}`);
  };

  // Calcular los coches que se muestran en la página actual
  const indexOfLastCar = currentPage * carsPerPage;
  const indexOfFirstCar = indexOfLastCar - carsPerPage;
  const currentCars = cars.slice(indexOfFirstCar, indexOfLastCar);

  const totalPages = Math.ceil(cars.length / carsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div>
      
      <div className="card-container">
        {currentCars.length > 0 ? (
          currentCars.map((car) => (
            <Card
              key={car.id}
              title={`${car.make} ${car.model}`}
              image={car.image}
              onClick={() => handleCardClick(car.id)}
            />
          ))
        ) : (
          <p>Cargando coches...</p>
        )}
      </div>
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
    </div>
  );
};

export default Menu;

export const loaderMenu = async () => {
  const response = await fetch(`https://www.freetestapi.com/api/v1/cars`);
  if (!response.ok) {
    throw new Error(`Error: ${response.statusText}`);
  }
  const data = await response.json();
  return data;
};

//tengo un filtro por si hay elementos repetidos
const filterCars = (cars) => {
  const seenTitles = new Set();
  return cars.filter((car) => {
    const title = `${car.make} ${car.model} (${car.year})`;
    if (!car.image || seenTitles.has(title)) {
      return false;
    }
    seenTitles.add(title);
    return true;
  });
};
