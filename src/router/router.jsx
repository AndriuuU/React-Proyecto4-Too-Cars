import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Inicio.jsx";
import Login from "../pages/Auth/Login.jsx";
import Register from "../pages/Auth/Register.jsx";
import Error404 from "../pages/Error404";
import Layout from "../layouts/Layout";
import LayoutPrivado from "../layouts/LayoutPrivado";  // LayoutPrivado para rutas protegidas
import Favoritos from "../pages/Favoritos.jsx";  // Página de Favoritos
import Menu, { loaderMenu } from "../pages/Menu.jsx";
import Coche from "../pages/Coche.jsx";
import Contacto from "../pages/Contacto.jsx";
import { loaderCoche } from "../pages/loaderCoche"; // Nuevo import del loader
import UserSettings from "../pages/UserSettings.jsx";




export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,  // Layout para las páginas públicas
    errorElement: <Error404 />,
    children: [
      {
        index: true,
        element: <Home />,  // Página principal
      },
      {
        path: "/login",  // Ruta de login
        element: <Login />,
      },
      {
        path: "/register",  // Ruta de registro
        element: <Register />,
      },
      {
        path: "/menu",
        element: <Menu />,
        loader: loaderMenu,
      },
      {
        path: "/coche/:id",
        element: <Coche />,
        loader: loaderCoche,
      },
      {
        path: "/contacto",
        element: <Contacto />,
      },
    ],
  },
  {
    path: "/", 
    element: <LayoutPrivado />,  
    children: [
      {
        path: "/favoritos",  
        element: <Favoritos />,  
      },
      {
        path: "/ajustes",
        element: <UserSettings />,
      },
    ],
  },
]);
