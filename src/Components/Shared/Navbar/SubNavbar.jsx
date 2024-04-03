import { useContext } from "react";
import { FaArrowRight, FaMapMarkerAlt } from "react-icons/fa";
import { RiArrowDownSLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import Swal from "sweetalert2";

const SubNavbar = () => {
    const { user, userLogout } = useContext(AuthContext)

    const handleLogout = () => {
        userLogout()
            .then(() => {
                Swal.fire("User log out!");
            })
            .catch(error => {
                console.log(error)
            })
    }

    return (
        <div className=" bg-[#DDDDDD] h-12">
            <section className="lg:max-w-screen-2xl w-11/12  mx-auto flex justify-around items-around gap-[10px]">
                {/* SubNavbar maps part */}
                <div className=" flex items-center gap-1 ml-7">
                    <FaMapMarkerAlt className=" text-[#2578B4] font-bold" />
                    <p className=" font-bold text-black">Map & Hours</p>
                </div>
                {/* Menu part */}
                <ul className=" flex items-center gap-5 font-bold text-black cursor-pointer uppercase">
                    <li className=" flex justify-center items-center gap-1">Sales <RiArrowDownSLine className=" text-[#2578B4]" /></li>
                    <li>Rentals</li>
                    <Link to={'/brand'}><li>Brands</li></Link>
                    <li>Financing</li>
                    <li>News</li>
                    <li>Gallery</li>
                    <li className=" flex justify-center items-center gap-1">Contact <RiArrowDownSLine className="text-[#2578B4]" /></li>
                </ul>
                {/* Book now btn */}
                {
                    user ?
                        <div>
                            <li>
                                <div className="dropdown dropdown-end">
                                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                        <div className="w-12 rounded-full">
                                            <img src={user?.photoURL} alt="" />
                                        </div>
                                    </label>
                                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] px-2 py-5 shadow bg-[#2578B4] rounded-box w-52 border-black border-x-[2px]">
                                        <li>
                                            <a>
                                                <h2 className=" text-xl text-white font-bold uppercase">{user.displayName}</h2>
                                            </a>
                                        </li>
                                        <li className="my-1">
                                            <Link to="/Dashboard/profile" className=" text-white" >Dashboard</Link>
                                        </li>
                                        <li className=" text-white"><Link onClick={handleLogout}>Logout</Link></li>
                                    </ul>
                                </div>
                            </li>
                        </div> :
                        <Link to="/login">
                            <button className=" bg-[#2578B4] h-full py-3 px-5 text-white font-bold flex items-center justify-around gap-2">BOOK NOW <FaArrowRight /></button>
                        </Link>
                }
            </section>
        </div>
    );
};

export default SubNavbar;