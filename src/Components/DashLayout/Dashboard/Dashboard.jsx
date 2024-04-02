import { FaAddressBook, FaHotel, FaHouseDamage, FaList } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {
    return (
        <div>
            <div className=" lg:flex hidden">
                <div className=" w-64 min-h-screen shadow-md bg-[#2578B4] text-black font-mono font-bold text-xl flex flex-col items-center rounded-md border-2 pb-5">
                    {/* <div className=' flex flex-col items-center mb-2 mt-5'>
                        <img className=' w-28 h-28 rounded-full' src={user?.photoURL} alt="" />
                        <h2 className=' text-2xl mt-2 font-bold font-alfa'>{user?.displayName}</h2>
                        <p className=" text-xs ">{user?.email}</p>
                    </div> */}
                    <ul className="menu">
                        {
                            <>
                                <li><NavLink to="/dashboard/profile">
                                    <FaHotel></FaHotel>
                                    My Choice List</NavLink>
                                </li>
                                <li><NavLink to="/dashboard/choicelist">
                                    <FaList></FaList>
                                    My Choice List</NavLink>
                                </li>
                            </>
                        }
                        <div className="divider"></div>
                        <li><NavLink to="/">
                            <FaHouseDamage></FaHouseDamage>
                            Home</NavLink></li>
                        <li><NavLink to="/allplace">
                            <FaAddressBook></FaAddressBook>
                            All places</NavLink></li>
                        <li><NavLink to="/hotel">
                            <FaHotel></FaHotel>
                            All Hotel</NavLink></li>
                    </ul>
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