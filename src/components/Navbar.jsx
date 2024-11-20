//import React from 'react';
import { NavLink } from "react-router-dom";
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src="src/components/img/logo.jpeg" alt="Logo" className="logo" />
      </div>
      <div className="navbar-links">
        <NavLink to="/" className="nav-link">Inicio</NavLink>
        <NavLink to="/menu" className="nav-link">Menu</NavLink>
        <NavLink to="/contacto" className="nav-link">Contacto</NavLink>
      </div>
      <div className="navbar-buttons">
        <NavLink to="/login" className="nav-button">Acceder</NavLink>
        <NavLink to="/register" className="nav-button">Registrar</NavLink>
      </div>
    </nav>
  );
}

export default Navbar;
