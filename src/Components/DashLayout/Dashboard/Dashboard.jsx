import { FaBars, FaHouseDamage, } from "react-icons/fa";
import { MdManageHistory } from "react-icons/md";
import { FaHouse } from "react-icons/fa6";
import { NavLink, Outlet } from "react-router-dom";
import SubNavbar from "../../Shared/Navbar/SubNavbar";
import { useState } from "react";

const Dashboard = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);
    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
        // console.log(isSidebarOpen);
    };

    return (
        <div>
            <div className=" md:block hidden mt-2">
                <SubNavbar></SubNavbar>
            </div>
            <div className=" block lg:hidden" onClick={toggleSidebar}>
                <FaBars></FaBars>
            </div>
            <div className="flex ">
                <div className={`min-h-screen w-60 xs:fixed z-[99999] lg:z-0 text-white transition-all duration-300 ${isSidebarOpen ? "-ml-60 lg:ml-0" : "lg:-ml-64 xl:-ml-[300px]"
                    }`}>
                    {/* dashNav profile */}
                    <div className="w-60 flex items-center justify-center gap-2 overflow-hidden bg-[#2578B4] rounded-lg border-2 p-5 mb-1 mt-2">
                        <img className=" w-16 h-10 rounded-full" src="https://i.ibb.co/B6zjvx1/profile-pic-4.png" alt="" />
                        <div>
                            <h2 className=" font-bold text-black">{"Rokon khan"}</h2>
                            <p className=" text-xs font-bold text-black">{"Rokonkhan45@gamil.com"}</p>
                        </div>
                    </div>
                    {/* dashNavbar menu */}
                    <div className=" w-60 min-h-screen shadow-md bg-[#2578B4] text-black font-mono font-bold text-xl flex flex-col items-center rounded-md border-2 pb-5 pt-3">
                        {/* Xgrid logo */}
                        <div className=" flex items-center justify-between">
                            <h2 className=" font-bold text-black">Dashboard</h2>
                        </div>
                        <div className="divider"></div>
                        <ul className="menu">
                            {
                                <>
                                    <li><NavLink to="/dashboard/profile">
                                        <FaHouse></FaHouse>
                                        Profile</NavLink>
                                    </li>
                                    <li><NavLink to="/dashboard/manegeProducts">
                                        <MdManageHistory />
                                        Manege Products</NavLink>
                                    </li>
                                    <li><NavLink to="/dashboard/addProducts">
                                        <MdManageHistory />
                                        Add Products</NavLink>
                                    </li>
                                </>
                            }
                            <div className="divider"></div>
                            <li><NavLink to="/">
                                <FaHouseDamage></FaHouseDamage>
                                Home</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
                {/* outlet for lg device */}
                <div className=" flex-1">
                    <Outlet></Outlet>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;