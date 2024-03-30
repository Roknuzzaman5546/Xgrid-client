import { Outlet } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import SubNavbar from "../Shared/Navbar/SubNavbar";

const MainLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <SubNavbar></SubNavbar>
            <Outlet></Outlet>
        </div>
    );
};

export default MainLayout;