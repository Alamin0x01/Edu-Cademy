import NavBar from "../Pages/Shared/NavBar";
import Footer from "../Pages/Shared/Footer";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div>
      <NavBar></NavBar>
      <Outlet />

      <Footer></Footer>
    </div>
  );
};

export default MainLayout;
