import { Outlet } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import PrivateNavbar from "../components/PrivateNavbar";
import Footer from "../components/footer";

const LayoutPrivado = () => {
  const { user } = useContext(UserContext);

  return (
    <div className="private-layout">
    <PrivateNavbar />
    <main className="content">
      <Outlet />
    </main>
    <Footer/>
  </div>
);
};

export default LayoutPrivado;
