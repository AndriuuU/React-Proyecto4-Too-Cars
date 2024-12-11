import { NavLink, useNavigate } from "react-router-dom"
import { useContext } from "react"
import { UserContext } from "../context/UserContext"
import { logOut } from "../config/Firebase" 
import "../style/main.scss"

const PrivateNavbar = () => {
  const { user } = useContext(UserContext)
  const navigate = useNavigate()

  const handleLogout = async () => {
    try {
      await logOut()
      navigate("/login")
    } catch (error) {
      console.error("Error al cerrar sesión:", error)
    }
  }

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
      </div>
    </nav>
  )
}

export default PrivateNavbar
