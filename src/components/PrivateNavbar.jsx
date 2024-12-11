import { NavLink, useNavigate } from "react-router-dom"
import { useContext, useState, useEffect } from "react"
import { UserContext } from "../context/UserContext"
import { logOut } from "../config/Firebase"
import "../style/main.scss"

const PrivateNavbar = () => {
  const { user } = useContext(UserContext)
  const navigate = useNavigate()
  
  // Estado para el modo oscuro
  const [isDarkMode, setIsDarkMode] = useState(false)

  // Función para manejar el logout
  const handleLogout = async () => {
    try {
      await logOut()
      navigate("/login")
    } catch (error) {
      console.error("Error al cerrar sesión:", error)
    }
  }

  // Función para alternar el modo oscuro y guardarlo en localStorage
  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => !prevMode)
    document.body.classList.toggle("dark-mode")

    // Guardar el estado de modo oscuro en localStorage
    localStorage.setItem("isDarkMode", !isDarkMode)
  }

  // Comprobar el modo oscuro al cargar la página
  useEffect(() => {
    const darkModePreference = localStorage.getItem("isDarkMode")

    // Si el modo oscuro está almacenado y es verdadero, activarlo
    if (darkModePreference === "true") {
      setIsDarkMode(true)
      document.body.classList.add("dark-mode")
    } else {
      setIsDarkMode(false)
      document.body.classList.remove("dark-mode")
    }
  }, [])

  return (
    <nav className="navbar private-navbar">
      <div className="navbar__logo">
        <NavLink to="/">
          <img src="src/assets/img/logo.jpeg" alt="Logo" className="navbar__logo-image" />
        </NavLink>
      </div>
      <ul className="navbar__links">
        <li className="navbar__link-item">
          <NavLink to="/" className="navbar__link">Inicio</NavLink>
        </li>
        <li className="navbar__link-item">
          <NavLink to="/ajustes" className="navbar__link">Ajustes</NavLink>
        </li>
        <li className="navbar__link-item">
          <NavLink to="/favoritos" className="navbar__link">Favoritos</NavLink>
        </li>
      </ul>
      <div className="navbar__user-options">
        <span className="navbar__username">{user?.displayName || "Usuario"}</span>
        <button onClick={handleLogout} className="navbar__logout-button">Cerrar sesión</button>
        
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
      </div>
    </nav>
  )
}

export default PrivateNavbar
