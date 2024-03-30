import { Outlet } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import SubNavbar from "../Shared/Navbar/SubNavbar";
import Footer from "../Shared/Footer/Footer";

const MainLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <SubNavbar></SubNavbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;