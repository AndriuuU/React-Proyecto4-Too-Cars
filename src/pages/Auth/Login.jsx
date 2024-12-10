import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { auth } from "../../config/Firebase.jsx"
import { signInWithEmailAndPassword } from "firebase/auth"
import Notification from "../../components/Notification" // Importa el componente

import "../../style/main.scss";

const Login = () => {
  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
  })
  const [notification, setNotification] = useState({ message: "", type: "" })
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormValues({ ...formValues, [name]: value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        formValues.email,
        formValues.password
      )

      if (!userCredential.user.emailVerified) {
        setNotification({
          message: "Tienes que verificar el email",
          type: "info",
        })
        return
      }

      navigate("/menu")
    } catch (error) {
      console.log(error)
      setNotification({
        message: "Error al iniciar sesión. Verifica tus credenciales.",
        type: "error",
      })
    }
  }

  return (
    <section className="auth">
      <Notification
        message={notification.message}
        type={notification.type}
        onClose={() => setNotification({ message: "", type: "" })}
      />

      <nav className="auth__tabs">
        <Link className="auth__tabs__tab" to="/register">
          REGISTRAR
        </Link>
        <span className="auth__tabs__tab auth__tabs__tab--active">ACCEDER</span>
      </nav>

      <form className="auth__form" onSubmit={handleSubmit}>
        <label className="auth__form__label">
          <input
            type="email"
            name="email"
            placeholder="Correo"
            value={formValues.email}
            onChange={handleChange}
            className="auth__form__input"
          />
        </label>

        <label className="auth__form__label">
          <input
            type="password"
            name="password"
            placeholder="Contraseña"
            value={formValues.password}
            onChange={handleChange}
            className="auth__form__input"
          />
        </label>

        <button
          type="submit"
          className="auth__button"
          disabled={loading}
        >
          {loading ? "Accediendo..." : "ACCEDER"}
        </button>

        <p className="auth__footer">
          ¿No tienes cuenta?{" "}
          <Link to="/register" className="auth__footer__link">
            Crear cuenta
          </Link>
        </p>
      </form>
    </section>
  )
}

export default Login
