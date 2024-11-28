import { useLoaderData, useParams } from "react-router-dom";

const Coche = () => {
  const { id } = useParams();
  const car = useLoaderData();

  if (!car) {
    return <p>Cargando detalles...</p>;
  }

  return (
    <div>
      <h1>{`${car.make} ${car.model}`}</h1>
      <img src={car.image} alt={`${car.make} ${car.model}`} />
      <p>Año: {car.year}</p>
      <p>Precio: {car.price}€</p>
      <p>Color: {car.color}</p>
      <p>Tipo de combustible: {car.fuelType}</p>
      <p>Transicion: {car.transmission}</p>
      <p>Motor: {car.engine}</p>
      <p>Potencia: {car.horsepower} CV</p>
      <p>Extras: {car.features.join(", ")}</p>
      <p>Dueños: {car.owners}</p>
    </div>
  );
};

export default Coche;

// Loader para obtener detalles del coche
export const loaderCoche = async ({ params }) => {
  const { id } = params;
  const response = await fetch(`https://www.freetestapi.com/api/v1/cars/${id}`);

  if (!response.ok) {
    throw new Error(`Error: ${response.statusText}`);
  }

  return response.json();
};
