//import React from 'react'

import { Outlet } from "react-router-dom"
import Navbar from "../components/Navbar"

const Layout = () => {
  return (
    <div>
        <Navbar/>
        <Outlet/>
        <footer>Footer</footer>
    </div>
  )
}

export default Layout