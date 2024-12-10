import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../../style/main.scss";
import { createUserWithEmailAndPassword, sendEmailVerification } from "firebase/auth";
import { auth } from "../../config/Firebase";
import Notification from "../../components/Notification";

const Register = () => {
  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    birthDate: "",
    acceptPolicies: false,
  });

  const [formErrors, setFormErrors] = useState({});
  const [notification, setNotification] = useState({ message: "", type: "" });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormValues({
      ...formValues,
      [name]: type === "checkbox" ? checked : value,
    });
  };

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

  const handleSubmit = async (e) => {
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
      try {
        // Crear usuario con Firebase
        const userCredential = await createUserWithEmailAndPassword(
          auth,
          formValues.email,
          formValues.password
        );

        // Enviar correo de verificación
        await sendEmailVerification(userCredential.user);
        setNotification({
          message: "Registro exitoso. Verifica tu correo electrónico.",
          type: "success",
        });

        // Redirigir después de unos segundos
        setTimeout(() => {
          setNotification({ message: "", type: "" });
          navigate("/login");
        }, 3000);
      } catch (error) {
        console.error("Error al registrar en Firebase:", error);
        setNotification({
          message: "Error al registrar el usuario. Intente nuevamente.",
          type: "error",
        });

        setTimeout(() => setNotification({ message: "", type: "" }), 3000);
      }
    } else {
      setNotification({
        message: "Corrige los errores antes de continuar.",
        type: "error",
      });
      setTimeout(() => setNotification({ message: "", type: "" }), 3000);
    }
  };

  const isValidAge = (birthDate) => {
    const today = new Date();
    const birthDateObj = new Date(birthDate);
    const age = today.getFullYear() - birthDateObj.getFullYear();
    const monthDifference = today.getMonth() - birthDateObj.getMonth();
    const dayDifference = today.getDate() - birthDateObj.getDate();

    if (monthDifference < 0 || (monthDifference === 0 && dayDifference < 0)) {
      return age - 1 >= 16;
    }

    return age >= 16;
  };

  return (
      <section className="auth">
    <Notification
      message={notification.message}
      type={notification.type}
      onClose={() => setNotification({ message: "", type: "" })}
    />

    <nav className="auth__tabs">
      <span className="auth__tabs__tab auth__tabs__tab--active">REGISTRAR</span>
      <Link to="/login" className="auth__tabs__tab">
        ACCEDER
      </Link>
    </nav>

    <form className="auth__form" onSubmit={handleSubmit}>
      <label className="auth__form__label">
        <input
          type="email"
          name="email"
          placeholder="Correo"
          value={formValues.email}
          onChange={handleChange}
          onBlur={handleBlur}
          className="auth__form__input"
        />
      </label>
      {formErrors.email && (
        <p className="auth__form__error-message">{formErrors.email}</p>
      )}

      <label className="auth__form__label">
        <input
          type="date"
          name="birthDate"
          value={formValues.birthDate}
          onChange={handleChange}
          onBlur={handleBlur}
          className="auth__form__input"
        />
      </label>
      {formErrors.birthDate && (
        <p className="auth__form__error-message">{formErrors.birthDate}</p>
      )}

      <label className="auth__form__label">
        <input
          type="password"
          name="password"
          placeholder="Contraseña"
          value={formValues.password}
          onChange={handleChange}
          onBlur={handleBlur}
          className="auth__form__input"
        />
      </label>
      {formErrors.password && (
        <p className="auth__form__error-message">{formErrors.password}</p>
      )}

      <label className="auth__form__label">
        <input
          type="password"
          name="confirmPassword"
          placeholder="Repita la contraseña"
          value={formValues.confirmPassword}
          onChange={handleChange}
          onBlur={handleBlur}
          className="auth__form__input"
        />
      </label>
      {formErrors.confirmPassword && (
        <p className="auth__form__error-message">{formErrors.confirmPassword}</p>
      )}

      <label className="auth__form__checkbox-container">
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
        <p className="auth__form__error-message">{formErrors.acceptPolicies}</p>
      )}

      <button type="submit" className="auth__button">
        REGISTRAR
      </button>

      <p className="auth__footer">
        ¿Ya tienes cuenta?{" "}
        <Link to="/login" className="auth__footer__link">Iniciar sesión</Link>
      </p>
    </form>
    </section>

  );
};

export default Register;
