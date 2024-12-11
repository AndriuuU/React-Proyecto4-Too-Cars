import { useState, useContext, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import { auth } from "../config/Firebase";
import "../style/main.scss";

const Navbar = () => {
  const { user } = useContext(UserContext);
  const navigate = useNavigate();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Función para manejar el logout
  const handleLogout = async () => {
    try {
      await auth.signOut();
      navigate("/login");
    } catch (error) {
      console.error("Error al cerrar sesión:", error);
    }
  };

  // Función para alternar el menú desplegable
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  // Función para alternar el modo oscuro y guardarlo en localStorage
  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
    document.body.classList.toggle("dark-mode");

    // Guardar el estado de modo oscuro en localStorage
    localStorage.setItem("isDarkMode", !isDarkMode);
  };

  // Comprobar el modo oscuro al cargar la página
  useEffect(() => {
    const darkModePreference = localStorage.getItem("isDarkMode");
    
    // Si el modo oscuro está almacenado y es verdadero, activarlo
    if (darkModePreference === "true") {
      setIsDarkMode(true);
      document.body.classList.add("dark-mode");
    } else {
      setIsDarkMode(false);
      document.body.classList.remove("dark-mode");
    }
  }, []);

  return (
    <nav className="navbar">
      <header className="navbar__logo">
        <img src="D:/2 DAW 24-25/Desarrollo web en entorno cliente/React/React Proyecto4 Too Cars/public/img/logo.jpeg" alt="Logo" className="navbar__logo-image" />
        <ul className="navbar__links">
          <NavLink to="/" className="navbar__link">Inicio</NavLink>
          <NavLink to="/menu" className="navbar__link">Menu</NavLink>
          {user && <NavLink to="/favoritos" className="navbar__link">Favoritos</NavLink>}
          {user && <NavLink to="/ajustes" className="navbar__link">Ajustes</NavLink>}
          <NavLink to="/contacto" className="navbar__link">Contacto</NavLink>
        </ul>
      </header>
      <ul className="navbar__buttons">
        <li className="navbar__toggle">
          <label className="navbar__darkmode-label">
            <input
              type="checkbox"
              checked={isDarkMode}
              onChange={toggleDarkMode}
              className="navbar__darkmode-checkbox"
            />
          </label>
        </li>
        {user ? (
          <details className="navbar__user-menu">
            <summary className="navbar__user-button">
              {user.displayName || "Usuario"}
            </summary>
            <ul className={`navbar__dropdown-menu ${isDropdownOpen ? "navbar__dropdown-menu--visible" : ""}`}>
              <li 
                className="navbar__dropdown-item" 
                onClick={handleLogout}>
                Cerrar sesión
              </li>
            </ul>
          </details>
        ) : (
          <>
            <NavLink to="/login" className="navbar__button">Acceder</NavLink>
            <NavLink to="/register" className="navbar__button">Registrar</NavLink>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
