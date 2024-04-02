import { FaArrowRight, FaMapMarkerAlt } from "react-icons/fa";
import { RiArrowDownSLine } from "react-icons/ri";
import { Link } from "react-router-dom";

const SubNavbar = () => {
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
                <Link to="/dashboard/profile">
                    <button className=" bg-[#2578B4] h-full py-3 px-5 text-white font-bold flex items-center justify-around gap-2">BOOK NOW <FaArrowRight /></button>
                </Link>
            </section>
        </div>
    );
};

export default SubNavbar;