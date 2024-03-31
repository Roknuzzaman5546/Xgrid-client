import { Link } from 'react-router-dom';
import logoImg from '../../../assets/Logo/Rectangle 77.png'
import { FaFacebookF, FaInstagram } from "react-icons/fa";


const Navbar = () => {
    return (
        <div className=' mt-5'>
            <section className='lg:max-w-screen-2xl w-11/12  mx-auto flex justify-around items-center'>
                {/* Navbar image part */}
                <div>
                    <Link to={"/"}><img className=' h-14' src={logoImg} alt="logo" /></Link>
                </div>
                {/* Navbar svg time and logo part */}
                <div className=' flex items-center justify-around'>
                    <div className=' text-center border-x px-6'>
                        <p className=' text-[#2578B4] text-xl uppercase font-bold'>Las Vegas, NV</p>
                        <p className=' text-slate-400 font-bold'>702-779-3397</p>
                    </div>
                    <div className=' text-center px-6'>
                        <p className=' text-[#2578B4] text-xl uppercase font-bold'>Knoxville, TN</p>
                        <p className='  text-slate-400 font-bold'>865-353-8880</p>
                    </div>
                </div>
                <div className=' flex items-center gap-5 font-bold text-[#2578B4]'>
                    <FaFacebookF />
                    <FaInstagram />
                </div>
                {/* Navbar searcher part */}
                <div className=' border-2 border-[#2578B4] rounded-md'>
                    <input type="text" className=' w-60 font-bold focus:outline-0 border-none pl-2 py-1' placeholder='Search Inventory...' />
                    <button className=' bg-[#2578B4] py-2 px-4 text-white font-bold text-center'>Go</button>
                </div>
            </section>
        </div>
    );
};

export default Navbar;