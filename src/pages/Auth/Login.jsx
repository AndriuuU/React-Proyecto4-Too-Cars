import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { auth } from "../../config/firebase.jsx"
import { signInWithEmailAndPassword } from "firebase/auth"
import Notification from "../../components/Notification" // Importa el componente

import "./Auth.css"

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
          message: "Por favor, verifica tu correo electrónico antes de continuar.",
          type: "error",
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
    <div className="auth-container">
      <Notification
        message={notification.message}
        type={notification.type}
        onClose={() => setNotification({ message: "", type: "" })}
      />

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

        <button type="submit" className="auth-button" disabled={loading}>
          {loading ? "Accediendo..." : "ACCEDER"}
        </button>

        <p className="auth-footer">
          ¿No tienes cuenta? <Link to="/register">Crear cuenta</Link>
        </p>
      </form>
    </div>
  )
}

export default Login
