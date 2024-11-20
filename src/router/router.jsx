import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Inicio.jsx";
import Menu /*{ loaderMenu }*/ from "../pages/Menu";
import Coche /*, { loaderCoche } */ from "../pages/Coche";
import Contacto from "../pages/Contacto.jsx";
import Login from "../pages/Auth/Login.jsx";
import Register from "../pages/Auth/Register.jsx";
import Error404 from "../pages/Error404";
import Layout from "../layouts/Layout";

export const router = createBrowserRouter([

    {
        path:"/",
        element: <Layout/>,
        errorElement: <Error404/>,
        children: [
            {
                //path:"/",
                index: true,
                element: <Home/>,
            },
            {
                path:"/menu",
                element: <Menu/>,
                //loader: loaderMenu
            },
            {
                path:"/coche/:id",
                element: <Coche/>,
                //loader: loaderCoche
            },
            {
                path:"/contacto",
                element: <Contacto/>,
            },
            {
                path:"/login",
                element: <Login/>,
            },
            {
                path:"/register",
                element: <Register/>,
            }
            
            
        ]
    }

    
])