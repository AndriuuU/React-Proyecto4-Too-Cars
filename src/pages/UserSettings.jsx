import { useContext, useState } from "react"
import { UserContext } from "../context/UserContext"
import { auth, updateUserProfile, deleteUserAccount } from "../config/Firebase"
import { reauthenticateWithCredential, updatePassword } from "firebase/auth"
import { EmailAuthProvider } from "firebase/auth/web-extension"
import Notification from "../components/Notification" // Asegúrate de ajustar la ruta

import "../style/main.scss";


const UserSettings = () => {
  const { user } = useContext(UserContext)
  const [formData, setFormData] = useState({
    displayName: user?.displayName || "",
  })
  const [newPassword, setNewPassword] = useState("")
  const [currentPassword, setCurrentPassword] = useState("")
  const [notification, setNotification] = useState({ message: "", type: "" })

  // Mostrar notificación
  const showNotification = (message, type) => {
    setNotification({ message, type })
    setTimeout(() => {
      setNotification({ message: "", type: "" })
    }, 3000) // La notificación desaparecerá después de 3 segundos
  }

  // Función para reautenticarse
  const reauthenticateUser = async (password) => {
    const credential = EmailAuthProvider.credential(auth.currentUser.email, password)
    await reauthenticateWithCredential(auth.currentUser, credential)
  }

  // Función para actualizar el nombre
  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await updateUserProfile(auth.currentUser, formData.displayName)
      showNotification("Nombre actualizado correctamente.", "success")
    } catch (error) {
      showNotification("Error al actualizar el nombre: " + error.message, "error")
    }
  }

  // Función para cambiar la contraseña
  const handleChangePassword = async () => {
    try {
      if (newPassword.length < 6) {
        showNotification("La contraseña debe tener al menos 6 caracteres.", "warning")
        return
      }
      if (!currentPassword) {
        showNotification("Debe ingresar la contraseña actual.", "warning")
        return
      }

      await reauthenticateUser(currentPassword)
      await updatePassword(auth.currentUser, newPassword)
      showNotification("Contraseña actualizada correctamente.", "success")
    } catch (error) {
      if (error.code === "auth/wrong-password") {
        showNotification("La contraseña actual ingresada es incorrecta.", "error")
      } else if (error.code === "auth/requires-recent-login") {
        showNotification(
          "Por motivos de seguridad, cierre sesión y vuelva a iniciar sesión antes de cambiar su contraseña.",
          "error"
        )
      } else {
        showNotification("Error al actualizar la contraseña: " + error.message, "error")
      }
    }
  }

  // Función para eliminar la cuenta
  const handleDeleteAccount = async () => {
    try {
      if (!currentPassword) {
        showNotification("Debe ingresar la contraseña actual para eliminar su cuenta.", "warning")
        return
      }

      await reauthenticateUser(currentPassword)
      await deleteUserAccount(auth.currentUser)
      showNotification("Cuenta eliminada correctamente.", "success")
    } catch (error) {
      if (error.code === "auth/wrong-password") {
        showNotification("La contraseña actual ingresada es incorrecta.", "error")
      } else {
        showNotification("Error al eliminar la cuenta: " + error.message, "error")
      }
    }
  }

  return (
    <section className="settings">
     
      <div className="settings__notification">
        <Notification
          message={notification.message}
          type={notification.type}
          onClose={() => setNotification({ message: "", type: "" })}
        />
      </div>

      <h1 className="settings__title">Ajustes de Usuario</h1>

      <form className="settings__form" onSubmit={handleSubmit}>
        <label className="settings__form-label">
          Nombre:
          <input
            className="settings__form-input"
            type="text"
            name="displayName"
            value={formData.displayName}
            onChange={(e) => setFormData({ ...formData, displayName: e.target.value })}
          />
        </label>
        <button className="settings__form-button" type="submit">
          Actualizar Nombre
        </button>
      </form>

      <section className="settings__section">
        <h2 className="settings__section-title">Cambiar Contraseña</h2>
        <input
          className="settings__section-input"
          type="password"
          placeholder="Contraseña actual"
          value={currentPassword}
          onChange={(e) => setCurrentPassword(e.target.value)}
        />
        <input
          className="settings__section-input"
          type="password"
          placeholder="Nueva contraseña"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
        />
        <button className="settings__section-button" onClick={handleChangePassword}>
          Actualizar Contraseña
        </button>
      </section>

      <section className="settings__section settings__section--danger">
        <h2 className="settings__section-title">Eliminar Cuenta</h2>
        <input
          className="settings__section-input"
          type="password"
          placeholder="Contraseña actual"
          value={currentPassword}
          onChange={(e) => setCurrentPassword(e.target.value)}
        />
        <button
          className="settings__section-button settings__section-button--danger"
          onClick={handleDeleteAccount}
        >
          Eliminar Cuenta
        </button>
      </section>
    </section>
  )
}

export default UserSettings
