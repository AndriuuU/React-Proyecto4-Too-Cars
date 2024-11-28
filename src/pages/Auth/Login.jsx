import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../../config/Firebase.jsx"; // Asegúrate de importar tu configuración de Firebase
import { signInWithEmailAndPassword } from "firebase/auth";
import "./Auth.css";

const Login = () => {
  
  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
  });

  const [formErrors, setFormErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormErrors({}); // Limpiar errores previos

    if (!formValues.email || !formValues.password) {
      setFormErrors({ general: "Todos los campos son obligatorios" });
      return;
    }

    try {
      setLoading(true);
      await signInWithEmailAndPassword(auth, formValues.email, formValues.password);
      navigate("/menu");
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setFormErrors({ general: "Correo o contraseña incorrectos" });
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-tabs">
        <Link className="auth-tab" to="/register">
          REGISTRAR
        </Link>
        <div className="auth-tab active">ACCEDER</div>
      </div>
      <form className="auth-form" onSubmit={handleSubmit}>
        <label>
          <input
            type="email"
            name="email"
            placeholder="Correo"
            value={formValues.email}
            onChange={handleChange}
          />
        </label>

        <label>
          <input
            type="password"
            name="password"
            placeholder="Contraseña"
            value={formValues.password}
            onChange={handleChange}
          />
        </label>

        {formErrors.general && (
          <p className="error-message">{formErrors.general}</p>
        )}

        <button type="submit" className="auth-button" disabled={loading}>
          {loading ? "Accediendo..." : "ACCEDER"}
        </button>

        <p className="auth-footer">
          ¿No tienes cuenta? <Link to="/register">Crear cuenta</Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
