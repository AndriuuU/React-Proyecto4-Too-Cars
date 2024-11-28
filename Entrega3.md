
# Documentación del Proyecto

## Descripción del Proyecto

En esta parte del proyecto tiene como objetivo permita a los usuarios registrarse, iniciar sesión y acceder a un área privada con información personalizada. La aplicación está construida con React, utiliza Firebase para la autenticación de usuarios y comunica con una API para gestionar datos adicionales.

### Tecnologías utilizadas:
- **Frontend:** React, React Router, JSX, CSS
- **Backend:** Firebase (para la autenticación)
- **API:** Integración de API para la gestión de datos de usuarios y otros recursos del proyecto
- **Control de estado:** React Context API para manejar el estado global de la autenticación

---

## Estructura del Proyecto

### 1. **Autenticación con Firebase**
La autenticación en este proyecto se gestiona a través de **Firebase Authentication**, que proporciona una forma sencilla de autenticar usuarios utilizando correo electrónico y contraseña.

#### Configuración de Firebase

Se configuró Firebase en el archivo `/src/config/firebase.js`. Este archivo contiene las claves de acceso a Firebase y la configuración necesaria para interactuar con los servicios de autenticación.

```javascript
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "TU_API_KEY",
  authDomain: "tu-app.firebaseapp.com",
  projectId: "tu-app",
  storageBucket: "tu-app.appspot.com",
  messagingSenderId: "tu-messaging-id",
  appId: "tu-app-id",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
```

#### Lógica de Registro

Para el registro de nuevos usuarios, creamos un formulario donde los usuarios pueden ingresar su correo electrónico, contraseña y otros detalles. Utilizamos la función `createUserWithEmailAndPassword` de Firebase para registrar a los usuarios:

```javascript
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../config/firebase";

const handleRegister = async (email, password) => {
  try {
    await createUserWithEmailAndPassword(auth, email, password);
    console.log("Usuario registrado");
  } catch (error) {
    console.error("Error al registrar usuario:", error.message);
  }
};
```

#### Lógica de Login

El inicio de sesión se maneja a través de la función `signInWithEmailAndPassword` de Firebase. Esta función permite a los usuarios autenticarse con su correo electrónico y contraseña.

```javascript
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../config/firebase";

const handleLogin = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
    console.log("Usuario autenticado");
  } catch (error) {
    console.error("Error al iniciar sesión:", error.message);
  }
};
```

#### Contexto de Usuario

La autenticación de usuarios se maneja a través del `UserContext`. Este contexto se usa para compartir el estado de autenticación (si el usuario está logueado o no) entre los diferentes componentes.

```javascript
import { createContext, useState, useEffect } from "react";
import { auth } from "../config/firebase";
import { onAuthStateChanged } from "firebase/auth";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  return (
    <UserContext.Provider value={{ user }}>
      {children}
    </UserContext.Provider>
  );
};
```

---

## Integración de la API

En este proyecto, también se integró una API para la gestión de recursos. Esta API se consume de manera asíncrona utilizando `fetch` o bibliotecas como `axios` para realizar solicitudes HTTP.

### Comunicación Asíncrona con la API

La comunicación con la API se maneja de forma asíncrona utilizando funciones `async/await` en combinación con `fetch`. A continuación se muestra un ejemplo de cómo obtener datos de la API:

```javascript
export const loaderMenu = async () => {
  const response = await fetch(`https://www.freetestapi.com/api/v1/cars`);
  if (!response.ok) {
    throw new Error(`Error: ${response.statusText}`);
  }
  const data = await response.json();
  return data;
};
```

En este caso, la función `fetchData` realiza una solicitud GET a la API, y una vez que los datos son recibidos correctamente, se procesan en formato JSON.

---

## Rutas y Navegación

El proyecto utiliza **React Router** para gestionar la navegación entre las diferentes vistas de la aplicación. Dependiendo de si el usuario está autenticado, se le redirige a una vista específica.

### Rutas públicas y privadas

- Las rutas públicas incluyen las páginas de **Login** y **Register**.
- Las rutas privadas, como la página de **Menu**, requieren que el usuario esté autenticado. Esto se controla mediante un componente de Layout Privado que redirige a los usuarios no autenticados al inicio de sesión.

Ejemplo de protección de rutas privadas:

```javascript
import { Navigate, Outlet } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../context/UserContext";

const LayoutPrivado = () => {
  const { user } = useContext(UserContext);

  return (
    <div>
      <h1>Layout Privado</h1>
      {user ? <Outlet /> : <Navigate to="/login" />}
    </div>
  );
};
```

En este caso, si el usuario no está autenticado, se redirige automáticamente a la página de inicio de sesión.

---

## Conclusiones

La integración de Firebase y la comunicación asíncrona con la API han sido fundamentales para la construcción de una aplicación que permite gestionar usuarios de manera eficiente. La estructura del proyecto sigue el patrón de Componentes de Función de React, y la gestión del estado se realiza utilizando **React Context** para almacenar información sobre el estado de autenticación del usuario.

Se ha logrado una implementación exitosa de:
- Registro e inicio de sesión con Firebase.
- Protección de rutas privadas.
- Comunicación asíncrona con la API para la obtención de datos.

Este es solo un esquema básico, y se pueden seguir añadiendo más características como la gestión de errores más robusta, validación de formularios, etc., para mejorar la experiencia del usuario.

---
