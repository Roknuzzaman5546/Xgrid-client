import { FaFacebook } from "react-icons/fa";

const Footer = () => {
    return (
        <>
            {/* Main footer  */}
            <div className=" lg:max-w-screen-2xl w-11/12  mx-auto">
                <footer className="footer p-10 text-base-content">
                    <nav>
                        <div className=" border font-bold border-[#2578B4] w-full my-3"></div>
                        <h6 className="footer-title">Services</h6>
                        <a className="link link-hover">Branding</a>
                        <a className="link link-hover">Design</a>
                        <a className="link link-hover">Marketing</a>
                        <a className="link link-hover">Advertisement</a>
                    </nav>
                    <nav>
                        <div className=" border font-bold border-[#2578B4] w-full my-3"></div>
                        <h6 className="footer-title">Knoxville, TN</h6>
                        <a className="link link-hover">About us</a>
                        <a className="link link-hover">Contact</a>
                        <a className="link link-hover">Jobs</a>
                        <a className="link link-hover">Press kit</a>
                    </nav>
                    <nav>
                        <div className=" border font-bold border-[#2578B4] w-full my-3"></div>
                        <h6 className="footer-title">Find Your Ride</h6>
                        <a className="link link-hover">Terms of use</a>
                        <a className="link link-hover">Privacy policy</a>
                        <a className="link link-hover">Cookie policy</a>
                    </nav>
                    <form>
                        <div className=" border font-bold border-[#2578B4] w-full my-3"></div>
                        <h6 className=" font-bold text-black">Get Social</h6>
                        <h2 className=" flex justify-start gap-2">
                            <FaFacebook></FaFacebook>
                            <span>Facebook</span>
                        </h2>
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