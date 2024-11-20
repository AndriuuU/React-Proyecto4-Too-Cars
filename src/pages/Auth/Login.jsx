//import React from "react";
import "./Auth.css";

const Login = () => {
  return (
    <div className="auth-container">
      <div className="auth-tabs">
        <div className="auth-tab">REGISTRAR</div>
        <div className="auth-tab active">ACCEDER</div>
      </div>
      <form className="auth-form">
        <label>
          <input type="email" name="email" placeholder="Correo" />
        </label>

        <label>
          <input type="password" name="password" placeholder="Contraseña" />
        </label>

        <button type="submit" className="auth-button">
          ACCEDER
        </button>

        <p className="auth-footer">
          ¿No tienes cuenta? <a href="/register">Crear cuenta</a>
        </p>
      </form>
    </div>
  );
};

export default Login;
