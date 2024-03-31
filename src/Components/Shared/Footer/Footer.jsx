import { FaFacebookF, FaInstagram, FaMapMarkerAlt } from "react-icons/fa";

const Footer = () => {
    return (
        <>
            {/* Main footer  */}
            <div className=" lg:max-w-screen-2xl w-11/12  mx-auto">
                <footer className="footer p-10 text-base-content">
                    <nav>
                        <div className=" border font-bold border-[#2578B4] w-full my-3"></div>
                        <h6 className=" font-extrabold text-black">Las Vegas, NV</h6>
                        <a className="link link-hover text-black">6949 Speedway Blvd, Ste 109</a>
                        <a className="link link-hover text-black">Las Vegas, NV</a>
                        <a className=" flex items-center gap-1">
                            <FaMapMarkerAlt className=" text-[#2578B4] font-bold" />
                            <p className=" font-bold text-black">Map & Hours</p>
                        </a>
                        <a className="link link-hover text-xl font-extrabold mt-4">702.779.3397</a>
                    </nav>
                    <nav>
                        <div className=" border font-bold border-[#2578B4] w-full my-3"></div>
                        <h6 className=" font-extrabold text-black">Knoxville, TN</h6>
                        <a className="link link-hover text-black">490 Center Cross Lane</a>
                        <a className="link link-hover text-black">Lenoir City, TN 97771</a>
                        <a className=" flex items-center gap-1">
                            <FaMapMarkerAlt className=" text-[#2578B4] font-bold" />
                            <p className=" font-bold text-black">Map & Hours</p>
                        </a>
                        <a className="link link-hover text-xl font-extrabold mt-4">865.353.8880</a>
                    </nav>
                    <nav>
                        <div className=" border font-bold border-[#2578B4] w-full my-3"></div>
                        <h6 className=" font-extrabold text-black">Find Your Ride</h6>
                        <a className="link link-hover font-bold">Inventory</a>
                        <a className="link link-hover font-bold">Rentals</a>
                        <a className="link link-hover font-bold">Gallery</a>
                        <a className="link link-hover font-bold">Careers</a>
                        <a className="link link-hover font-bold">Contact Us</a>
                    </nav>
                    <form>
                        <div className=" border font-bold border-[#2578B4] w-full my-3"></div>
                        <h6 className=" font-extrabold text-black">Get Social</h6>
                        <h2 className=" flex justify-start gap-2 font-bold">
                            <FaFacebookF></FaFacebookF>
                            <span>Facebook</span>
                        </h2>
                        <h2 className=" flex justify-start gap-2 font-bold">
                            <FaInstagram></FaInstagram>
                            <span>Instagram</span>
                        </h2>
                        <p className=" text-black mt-4 font-bold">Sign Up For Our Newsletter</p>
                        <div className=' border-2 border-[#2578B4] rounded-md'>
                            <input type="text" className=' w-60 font-bold focus:outline-0 border-none pl-2 py-1' placeholder='Email Address...' />
                            <button className=' bg-[#2578B4] py-2 px-4 text-white font-bold text-center'>Go</button>
                        </div>
                    </form>
                </footer>
            </div>
            {/* Footer copyright */}
            <footer className="footer footer-center p-4 bg-[#2578B4] text-base-content">
                <aside>
                    <p>Copyright © 2024 - All right reserved by ACME Industries Ltd</p>
                </aside>
            </footer>
        </>
    );
};

export default Footer;