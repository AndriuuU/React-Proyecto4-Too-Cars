import { NavLink, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { UserContext } from "../context/UserContext";
import { auth } from "../config/Firebase";
import "./Navbar.css";

const Navbar = () => {
  const { user } = useContext(UserContext);
  const navigate = useNavigate();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleLogout = async () => {
    try {
      await auth.signOut(); // Cerrar sesión con Firebase
      navigate("/login");
    } catch (error) {
      console.error("Error al cerrar sesión:", error);
    }
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleDarkMode = () => {
    document.body.classList.toggle("dark-mode");
  };

  return (
    <nav className="navbar">
      <header className="navbar-logo">
        <img src="src/components/img/logo.jpeg" alt="Logo" className="logo" />
        <ul className="navbar-links">
          <NavLink to="/" className="nav-link">Inicio</NavLink>
          <NavLink to="/menu" className="nav-link">Menu</NavLink>
          {user && <NavLink to="/favoritos" className="nav-link">Favoritos</NavLink>}
          {user && <NavLink to="/ajustes" className="nav-link">Ajustes</NavLink>}
          <NavLink to="/contacto" className="nav-link">Contacto</NavLink>
        </ul>
      </header>
      <ul className="navbar-buttons">
        {user ? (
          <div className="user-menu">
            <button onClick={toggleDropdown} className="user-button">
              {user.displayName || "Usuario"}
            </button>
            {isDropdownOpen && (
              <ul className="dropdown-menu">
                <li onClick={handleDarkMode}>Modo oscuro</li>
                <li onClick={() => navigate("/ajustes")}>Ajustes</li>
                <li onClick={handleLogout}>Cerrar sesión</li>
              </ul>
            )}
          </div>
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
