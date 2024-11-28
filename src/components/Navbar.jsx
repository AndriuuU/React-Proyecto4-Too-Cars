import { NavLink, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import { auth } from "../config/firebase";
import './Navbar.css';

const Navbar = () => {
  const { user } = useContext(UserContext);
  const navigate = useNavigate();


  const handleLogout = async () => {
    
    try {
      await auth.signOut(); // Cerrar sesión con Firebase
      navigate("/login");


    } catch (error) {
      console.error("Error al cerrar sesión:", error);
    }
  };

  return (
    <nav className="navbar">
      <header className="navbar-logo">
        <img src="src/components/img/logo.jpeg" alt="Logo" className="logo" />
        <ul className="navbar-links">
          <NavLink to="/" className="nav-link">Inicio</NavLink>
          <NavLink to="/menu" className="nav-link">Menu</NavLink>
          {user && <NavLink to="/favoritos" className="nav-link">Favoritos</NavLink>}
          <NavLink to="/contacto" className="nav-link">Contacto</NavLink>
        </ul>
      </header>
      <ul className="navbar-buttons">
        {user ? (
          <button onClick={handleLogout}  to="/login" className="nav-button">Cerrar sesión</button>
        ) : (
          <>
            <NavLink to="/login" className="nav-button">Acceder</NavLink>
            <NavLink to="/register" className="nav-button">Registrar</NavLink>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
