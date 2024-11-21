# Documentación del Proyecto React

## Tabla de Contenidos
1. [Introducción](#introducción)
2. [Estructura del Proyecto](#estructura-del-proyecto)
3. [Proceso Realizados](#proceso-realizados)

---

## Introducción

Como mencioné anteriormente, el proyecto está dirigido a un espacio de coches japoneses. Este documento tiene como objetivo informar sobre el desarrollo del proyecto y mostrar los avances realizados hasta el momento. 

En la primera semana trabajé en la idea del proyecto, organizando su estructura y definiendo las pantallas necesarias. Durante esta segunda semana, he implementado varios formularios como el de **contacto**, **acceso** y **registro**.

## Estructura del Proyecto

La estructura básica del proyecto se organiza en carpetas para facilitar la gestión y reutilización del código:

1. **Carpeta `/componentes`**:
   - Contiene componentes reutilizables y multifuncionales, lo que permite evitar la duplicación de código.
   - Actualmente incluye el **Navbar**, que gestiona la navegación de la página. En el futuro, se agregarán más componentes para optimizar la funcionalidad del sitio.

2. **Carpeta `/layouts`**:
   - Por ahora, solo cuenta con un layout principal.
   - La idea es implementar dos layouts en el futuro: uno para usuarios registrados y otro para usuarios no registrados.

3. **Carpeta `/pages`**:
   - Contiene las páginas principales del proyecto. Actualmente incluye:
     - **`/auth`**: Maneja la autenticación de usuarios, incluyendo las páginas de **acceso** y **registro**.
     - **Contacto**: Formulario para que los usuarios puedan enviar mensajes.
     - **Error404**: Página de error para rutas inexistentes.
     - **Inicio**: Página principal del proyecto.
     - **Menú**: Página que muestra las opciones principales del sitio.
   - A futuro, se añadirán páginas para gestionar el control del usuario y los favoritos de coches.

4. **Carpeta `/router`**:
   - Centraliza todas las rutas del proyecto, lo que permite organizar y acceder fácilmente a las páginas existentes.


## Proceso Realizados

Para poder llegar al estado actual, he tenido que seguir los siguientes pasos:

1. **Creación del Proyecto**: 
   - Utilicé **Create React App** para inicializar la estructura base del proyecto, facilitando el desarrollo de componentes y la gestión del entorno.

2. **Diseño del Formulario**:
   - Estructuré los campos necesarios basándome en los datos que debía recolectar, como nombre, correo, teléfono, género, mensaje y aceptación de términos.

3. **Implementación de Estados**:
   - Creé los estados `formData` y `errors` para manejar la lógica del formulario y su validación en tiempo real.

4. **Configuración de Validaciones**:
   - Implementé la función `validateField` para verificar los datos ingresados por el usuario y mostrar mensajes de error específicos.

5. **Interactividad del Formulario**:
   - Agregué la función `handleChange` para capturar las modificaciones en los campos y actualizar el estado correspondiente.
   - Configuré el botón de "Enviar" para que solo estuviera activo si todos los datos eran válidos.

6. **Estilización**:
   - Definí los estilos del formulario en el archivo `Contacto.css` para que fuera visualmente claro y fácil de usar.

7. **Pruebas y Correcciones**:
   - Realicé pruebas de funcionalidad para asegurarme de que las validaciones y el manejo de errores funcionaran correctamente.
   - Ajusté los mensajes de error para que fueran comprensibles y útiles para el usuario.

Este proceso me permitió construir un formulario robusto, funcional y fácil de usar.