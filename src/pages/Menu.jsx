import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import Card from "../components/Card"
import "../style/main.scss"

const Menu = () => {
  const [cars, setCars] = useState([])
  const [error, setError] = useState(null)
  const [currentPage, setCurrentPage] = useState(1) 
  const carsPerPage = 15 // Número de coches por página
  const navigate = useNavigate()

  useEffect(() => {
    const fetchCars = async () => {
      try {
        const data = await loaderMenu()
        const uniqueCars = filterCars(data)
        setCars(uniqueCars)
      } catch (err) {
        setError(err.message)
      }
    }

    fetchCars()
  }, [])

  const handleCardClick = (id) => {
    navigate(`/coche/${id}`)
  }

  // Calcular los coches que se muestran en la página actual
  const indexOfLastCar = currentPage * carsPerPage
  const indexOfFirstCar = indexOfLastCar - carsPerPage
  const currentCars = cars.slice(indexOfFirstCar, indexOfLastCar)

  const totalPages = Math.ceil(cars.length / carsPerPage)

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber)
  }

  if (error) {
    return <p>Error: {error}</p>
  }

  return (
    <section className="menu">
      <section className="cars__list">
        {currentCars.length > 0 ? (
          currentCars.map((car) => (
            <article key={car.id} className="cars__list__item">
              <Card
                title={`${car.make} ${car.model}`}
                image={car.image}
                onClick={() => handleCardClick(car.id)}
              />
            </article>
          ))
        ) : (
          <p className="cars__loading">Cargando coches...</p>
        )}
      </section>
      <nav className="menu__pagination">
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index + 1}
            onClick={() => handlePageChange(index + 1)}
            className={`menu__pagination__button ${
              currentPage === index + 1 ? "menu__pagination__button--active" : ""
            }`}
          >
            {index + 1}
          </button>
        ))}
      </nav>
    </section>
  )
}

export default Menu

export const loaderMenu = async () => {
  const response = await fetch(`https://www.freetestapi.com/api/v1/cars`)
  if (!response.ok) {
    throw new Error(`Error: ${response.statusText}`)
  }
  const data = await response.json()
  return data
}

// Filtro para evitar coches duplicados
const filterCars = (cars) => {
  const seenTitles = new Set()
  return cars.filter((car) => {
    const title = `${car.make} ${car.model} (${car.year})`
    if (!car.image || seenTitles.has(title)) {
      return false
    }
    seenTitles.add(title)
    return true
  })
}
