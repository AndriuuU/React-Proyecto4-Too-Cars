import { useState } from "react";
import "./Auth.css";
import { Link } from "react-router-dom";

const Register = () => {
  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    birthDate: "",
    acceptPolicies: false,
  });

  const [formErrors, setFormErrors] = useState({});

  // Manejador para actualizar valores del formulario
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormValues({
      ...formValues,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  // Validar cada campo al salir del foco
  const handleBlur = (e) => {
    const { name, value } = e.target;

    let error = "";

    if (name === "email" && (!value.includes("@") || !value.includes("."))) {
      error = "CORREO INVALIDO";
    }

    if (name === "password" && value.length < 6) {
      error = "La contraseña debe tener al menos 6 caracteres";
    }

    if (name === "confirmPassword" && value !== formValues.password) {
      error = "LAS CONTRASEÑAS NO SON IGUALES";
    }

    if (name === "birthDate" && !isValidAge(value)) {
      error = "Debe tener al menos 16 años.";
    }

    if (name === "acceptPolicies" && !formValues.acceptPolicies) {
      error = "Debe aceptar las políticas.";
    }

    setFormErrors({ ...formErrors, [name]: error });
  };

  // Validar todos los campos al enviar
  const handleSubmit = (e) => {
    e.preventDefault();

    const errors = {};

    if (!formValues.email.includes("@")) {
      errors.email = "CORREO INVALIDO";
    }
    if (formValues.password !== formValues.confirmPassword) {
      errors.confirmPassword = "LAS CONTRASEÑAS NO SON IGUALES";
    }
    if (!formValues.birthDate || !isValidAge(formValues.birthDate)) {
      errors.birthDate = "Debe tener al menos 16 años.";
    }
    if (!formValues.acceptPolicies) {
      errors.acceptPolicies = "Debe aceptar las políticas.";
    }

    setFormErrors(errors);

    if (Object.keys(errors).length === 0) {
      alert("Registro exitoso");
    }
  };

  // Verifica si la fecha de nacimiento cumple con el requisito de edad mínima
  const isValidAge = (birthDate) => {
    const today = new Date();
    const birthDateObj = new Date(birthDate);
    const age = today.getFullYear() - birthDateObj.getFullYear();
    const monthDifference = today.getMonth() - birthDateObj.getMonth();
    const dayDifference = today.getDate() - birthDateObj.getDate();

    // Ajustar la edad si el mes/día actual es anterior al mes/día de nacimiento
    if (monthDifference < 0 || (monthDifference === 0 && dayDifference < 0)) {
      return age - 1 >= 16;
    }

    return age >= 16;
  };

  return (
    <div className="auth-container">
      <div className="auth-tabs">
        <div className="auth-tab active">REGISTRAR</div>
        <Link to="/login" className="auth-tab">
    ACCEDER
  </Link>
      </div>
      <form onSubmit={handleSubmit} className="auth-form">
        <label>
          <input
            type="email"
            name="email"
            placeholder="Correo"
            value={formValues.email}
            onChange={handleChange}
            onBlur={handleBlur}
          />
        </label>
        {formErrors.email && <p className="error-message">{formErrors.email}</p>}

        <label>
          <input
            type="date"
            name="birthDate"
            value={formValues.birthDate}
            onChange={handleChange}
            onBlur={handleBlur}
          />
        </label>
        {formErrors.birthDate && (
          <p className="error-message">{formErrors.birthDate}</p>
        )}

        <label>
          <input
            type="password"
            name="password"
            placeholder="Contraseña"
            value={formValues.password}
            onChange={handleChange}
            onBlur={handleBlur}
          />
        </label>
        {formErrors.password && (
          <p className="error-message">{formErrors.password}</p>
        )}

        <label>
          <input
            type="password"
            name="confirmPassword"
            placeholder="Repita la contraseña"
            value={formValues.confirmPassword}
            onChange={handleChange}
            onBlur={handleBlur}
          />
        </label>
        {formErrors.confirmPassword && (
          <p className="error-message">{formErrors.confirmPassword}</p>
        )}
      

        <label className="checkbox-container">
          <input
            type="checkbox"
            name="acceptPolicies"
            checked={formValues.acceptPolicies}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          Aceptar políticas
        </label>
        {formErrors.acceptPolicies && (
          <p className="error-message">{formErrors.acceptPolicies}</p>
        )}

        <button type="submit" className="auth-button">
          REGISTRAR
        </button>

        <p className="auth-footer">
          ¿Ya tienes cuenta? <Link to="/login">Iniciar sesión</Link>
        </p>
      </form>
    </div>
  );
};

export default Register;
