import { useState } from 'react'
import '../style/main.scss'

const Contacto = () => {
  const [formData, setFormData] = useState({
    nombreCompleto: '',
    email: '',
    telefono: '',
    sexo: '',
    mensaje: '',
    terminos: false,
  })

  const [errors, setErrors] = useState({
    nombreCompleto: '',
    email: '',
    telefono: '',
    sexo: '',
    mensaje: '',
    terminos: '',
  })

    /**
   * Recibe el nombre del campo (`name`) y su valor actual (`value`).
   * Retorna un mensaje de error si el valor no es válido de lo contrario, retorna una cadena vacía.
   */
  const validateField = (name, value) => {
    switch (name) {
      case 'nombreCompleto':
        return value.trim() === '' ? 'El nombre completo es obligatorio.' : ''
      case 'email':
        return !/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(value)  ? 'Ingresa un correo válido.' : ''
      case 'telefono':
        return !/^\d{9}$/.test(value) ? 'El teléfono debe contener 9 dígitos numéricos.' : ''
      case 'sexo':
        return value === '' ? 'Por favor selecciona tu sexo.' : ''
      case 'mensaje':
        return value.trim() === '' ? 'El mensaje no puede estar vacío.' : ''
      case 'terminos':
        return value === false ? 'Debes aceptar los términos y políticas.' : ''
      default:
        return ''
    }
  }

   //Actualiza los valores en el estado `formData` y valida el campo modificado.
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    const inputValue = type === 'checkbox' ? checked : value

    setFormData({
      ...formData,
      [name]: inputValue,
    })

    setErrors({
      ...errors,
      [name]: validateField(name, inputValue),
    })
  }
  

  // Valida todos los campos antes de enviar y detiene el envío si hay errores.
  const handleSubmit = (e) => {
    e.preventDefault()

    const newErrors = Object.keys(formData).reduce((acc, field) => {
      acc[field] = validateField(field, formData[field])
      return acc
    }, {})

    setErrors(newErrors)

    // Si alguno de los campos tiene errores, detiene el envío

    if (Object.values(newErrors).some((error) => error !== '')) {
      return
    }

    // Si no hay errores, se procesan los datos (aquí se puede enviar a un servidor, por ejemplo)
    alert('¡Formulario enviado con éxito!')
  }

  return (
    <div className="form-container">
      <h2 className="form-title">CONTACTO</h2>
      <form onSubmit={handleSubmit} className="form-content">
        <div className="form-group">
          <input
            type="text"
            id="nombreCompleto"
            name="nombreCompleto"
            value={formData.nombreCompleto}
            onChange={handleChange}
            placeholder="Nombre completo"
          />
          {errors.nombreCompleto && <div className="error">{errors.nombreCompleto}</div>}
        </div>

        <div className="form-group">
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Correo"
          />
          {errors.email && <div className="error">{errors.email}</div>}
        </div>

        <div className="form-group">
          <input
            type="text"
            id="telefono"
            name="telefono"
            value={formData.telefono}
            onChange={handleChange}
            placeholder="Teléfono"
          />
          {errors.telefono && <div className="error">{errors.telefono}</div>}
        </div>

       

        <h4>Sexo</h4>
        <div className="form-group">
          <div className="sexo">
            
            <label>
              <input
                type="radio"
                name="sexo"
                value="Hombre"
                checked={formData.sexo === 'Hombre'}
                onChange={handleChange}
              />{' '}
              Hombre
            </label>
            <label>
              <input
                type="radio"
                name="sexo"
                value="Mujer"
                checked={formData.sexo === 'Mujer'}
                onChange={handleChange}
              />{' '}
              Mujer
            </label>
            <label>
              <input
                type="radio"
                name="sexo"
                value="Otro"
                checked={formData.sexo === 'Otro'}
                onChange={handleChange}
              />{' '}
              Otro
            </label>
          </div>
          {errors.sexo && <div className="error">{errors.sexo}</div>}
        </div>

        <div className="form-group">
          <textarea
            id="mensaje"
            name="mensaje"
            value={formData.mensaje}
            onChange={handleChange}
            placeholder="Mensaje"
          />
          {errors.mensaje && <div className="error">{errors.mensaje}</div>}
        </div>

        <div className="form-group politica">
          <input
            type="checkbox"
            name="terminos"
            checked={formData.terminos}
            onChange={handleChange}
          />
          <label>Aceptar políticas</label>
          {errors.terminos && <div className="error">{errors.terminos}</div>}
        </div>


        <button
          type="submit"
          className="form-button"
          disabled={Object.values(errors).some((error) => error !== '')}
        >
          ENVIAR
        </button>
      </form>
    </div>
  )
}

export default Contacto
