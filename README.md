
# 🚗 TooCars - Proyecto de React

**TooCars** es una aplicación desarrollada con React que permite a los usuarios explorar y gestionar información sobre coches. Incluye funcionalidades como agregar coches a favoritos, mostrar detalles de cada coche, tiene opciones de usuario y un sistema de contacto a través de un modal. Este README proporciona una visión general del proyecto, las instrucciones para ejecutarlo y un resumen de las características implementadas.

## 📋 Índice
- [Tecnologías Utilizadas](#-tecnologías-utilizadas)
- [Requisitos Previos](#-requisitos-previos)
- [Instalación](#-instalación)
- [Estructura del Proyecto](#-estructura-del-proyecto)
- [Características Implementadas](#-características-implementadas)
- [Despliegue](#-despliegue)
- [Notas Adicionales](#-notas-adicionales)

---

## 💻 Tecnologías Utilizadas

Este proyecto utiliza las siguientes tecnologías:

- **React**: Biblioteca para construir interfaces de usuario.
- **React Router**: Para gestionar la navegación entre páginas.
- **CSS**: Para los estilos personalizados de los componentes.
- **LocalStorage**: Para persistencia de datos (favoritos).
- **Netlify**: Para desplegar la aplicación.

---

## ✅ Requisitos Previos

Antes de ejecutar el proyecto, asegúrate de tener instalado:

1. **Node.js** (versión 16 o superior).
2. **npm** (gestor de paquetes de Node.js).

Puedes verificar las versiones instaladas con:
```bash
node -v
npm -v
```

---

## ⚙️ Instalación

Sigue estos pasos para ejecutar el proyecto en tu máquina local:

1. Clona el repositorio:
   ```bash
   git clone https://github.com/AndriuuU/React-Proyecto4-Too-Cars
   ```
2. Navega al directorio del proyecto:
   ```bash
   cd too-cars
   ```
3. Instala las dependencias:
   ```bash
   npm install
   ```
4. Inicia el servidor de desarrollo:
   ```bash
   npm start
   ```
5. Abre el navegador y accede a:
   ```
   http://localhost:3000
   ```

---

## 🗂️ Estructura del Proyecto

El proyecto está organizado de la siguiente manera:

```
src/
├── components/          # Componentes reutilizables
│   ├── Footer.jsx       # Pie de página con enlaces y redes sociales
│   ├── Header.jsx       # Encabezado de la página
│   └── Card.jsx         # Card donde todas las tarjetas de coches
├── context/             # Contexto de usuario para manejar estados 
│   └── UserContext.jsx  # Proveedor del contexto de usuario
├── pages/               # Páginas principales del sitio
│   ├── Inicio.jsx       # Página principal con listado de coches
|   ├── Contacto.jsx     # Formulario de contacto
|   ├── Menu.jsx         # Página que permite ver todos los coches
│   ├── Coche.jsx        # Página de detalles de un coche específico
|   └── Auth/            # Página donde esta los formularios de usuario
|       ├── Login.jsx    # Página de acceso
|       └── Register.jsx # Página para registrarse
├── App.jsx              # Archivo principal con la configuración de rutas
├── index.css            # Estilos globales
└── index.js             # Punto de entrada de la aplicación
```

---

## ✨ Características Implementadas

### 1. **Página de Inicio**
   - Muestra una lista de coches con información básica (marca, modelo, precio, imagen, etc.).
   - Permite filtrar o buscar coches.

### 2. **Página de Detalles de un Coche**
   - Información detallada sobre un coche seleccionado (marca, modelo, año, tipo de combustible, transmisión, precio, etc.).
   - Incluye un botón para agregar o eliminar coches de la lista de favoritos.

### 3. **Favoritos**
   - Implementación de LocalStorage para almacenar los coches favoritos del usuario.
   - El icono de estrella cambia de color según el estado de favorito.

### 4. **Modal de Contacto**
   - Al hacer clic en el botón "CONTACTAR", se abre un modal con un formulario de contacto.
   - El formulario incluye los siguientes campos:
     - Nombre
     - Correo electrónico
     - Mensaje
   - Diseño responsivo y elegante con animaciones de apertura y cierre.

### 5. **Footer con Redes Sociales**
   - Incluye enlaces a Instagram, Facebook, WhatsApp y X (antes Twitter).
   - Cada enlace tiene un logotipo personalizado y una etiqueta accesible (ARIA).

### 6. **Despliegue**
   - La aplicación está desplegada en **Netlify**.
   - Proceso automatizado con `npm run build` para generar la carpeta `dist`.

---

## 🚀 Despliegue

Para desplegar la aplicación en Netlify, sigue estos pasos:

1. **Crear una cuenta en Netlify**.
2. **Subir el repositorio a GitHub**:
   Asegúrate de que todo tu código esté versionado en un repositorio de GitHub.
3. **Conectar Netlify con GitHub**:
   - Ve al panel de Netlify y selecciona "New Site from Git".
   - Elige el repositorio correspondiente.
4. **Configurar los ajustes de compilación**:
   - Comando de build: `npm run build`.
   - Directorio de publicación: `dist`.
5. **Desplegar automáticamente**:
   Cada vez que hagas un `git push`, Netlify actualizará el sitio automáticamente.

---

## 📜 Notas Adicionales

### Errores Comunes Durante el Despliegue:
- **Error al resolver rutas relativas de imágenes:**
   Asegúrate de que las rutas sean relativas al entorno de producción. Por ejemplo:
   ```jsx
   <img src={`${process.env.PUBLIC_URL}/assets/logo.png`} alt="Logo" />
   ```
- **Error al importar archivos no encontrados:**
   Comprueba que los nombres de los archivos coincidan exactamente, ya que algunos sistemas (como Linux) son sensibles a mayúsculas/minúsculas.

### Herramientas Adicionales:
- **React Developer Tools:** Para depurar y optimizar componentes.
- **Netlify CLI:** Para pruebas locales del entorno de producción.

---

## Recursos Multimedia

### Video Demostrativo
Hemos preparado un video explicativo y demostrativo del funcionamiento de la aplicación. Puedes verlo en el siguiente enlace:

[![Video Demostrativo](https://img.youtube.com/vi/TU_ID_DE_VIDEO/0.jpg)](https://youtu.be/H6EEBICg6Mw)

> Haz clic en la imagen o en el [enlace aquí](https://youtu.be/H6EEBICg6Mw) para ver el video en YouTube.

### Enlace al Diseño en Figma
El diseño inicial de la aplicación fue realizado en Figma. Puedes revisar el diseño y los prototipos a través del siguiente enlace:

[Figma: Diseño de la Aplicación](https://www.figma.com/design/KCMWScOLeXDy5SJiSevHIG/Proyecto---Too-cars?m=auto&t=f3vAgjlDBbIu27Zl-1)


### Enlace de la página subida 
Aqui se ha ssubido la app para poder utilizarla

[Despliegue de la app](https://toocars.netlify.app/)
> Este enlace te permitirá visualizar los detalles de las pantallas, el esquema de colores y la estructura inicial de la aplicación.
