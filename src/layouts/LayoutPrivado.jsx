import { Navigate, Outlet } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../context/UserContext";

const LayoutPrivado = () => {
  const { user } = useContext(UserContext);

  return (
    <div>
      <h1>Layout Privado</h1>
      {
        // Si el usuario está logueado, muestra el contenido (Outlet)
        user ? (
          <Outlet />
        ) : (
          // Si no está logueado, redirige al login
          <Navigate to="/login" />
        )
      }
    </div>
  );
};

export default LayoutPrivado;
