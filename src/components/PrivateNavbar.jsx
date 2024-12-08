import { NavLink, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import { logOut } from "../config/Firebase"; 
import "./PrivateNavbar.css";

const PrivateNavbar = () => {
  const { user } = useContext(UserContext);
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logOut()
      navigate("/login")
    } catch (error) {
      console.error("Error al cerrar sesión:", error)
    }
  };

  return (
    <nav className="private-navbar">
      <div className="navbar-logo">
        <NavLink to="/">
        <img src="public/img/logo.jpeg" alt="Logo" className="logo" />

        </NavLink>
      </div>
      <ul className="navbar-links">
        <li>
          <NavLink to="/" className="nav-link">Inicio</NavLink>
        </li>
        <li>
          <NavLink to="/ajustes" className="nav-link">Ajustes</NavLink>
        </li>
        <li>
          <NavLink to="/favoritos" className="nav-link">Favoritos</NavLink>
        </li>
      </ul>
      <div className="user-options">
        <span className="username">{user?.displayName || "Usuario"}</span>
        <button onClick={handleLogout} className="logout-button">Cerrar sesión</button>
      </div>
    </nav>
  );
};

export default PrivateNavbar
