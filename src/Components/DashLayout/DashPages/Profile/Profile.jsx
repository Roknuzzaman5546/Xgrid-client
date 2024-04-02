import { FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";
import { MdOutlineEmail, MdOutlineWork } from "react-icons/md";
import ShopAllDetails from "../../../Pages/Home/ShopAll/ShopAllDetails";
import { useEffect, useState } from "react";

const Profile = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch('/products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    return (
        <div>
            <div className=" grid grid-cols-1 w-[97%] mx-auto mt-2">
                <div className=" relative text-transparent rounded-md shadow overflow-hidden">
                    <div className="">
                        <img
                            className=" w-full h-80 object-cover text-transparent opacity-90"
                            style={{ zIndex: -1 }}
                            src="https://i.ibb.co/S5vvBYj/download.webp"
                            alt=""
                        />
                        <div className="absolute inset-0 bg-black/70"></div>
                    </div>
                </div>
            </div>
            <div className=" grid lg:grid-cols-12 md:grid-cols-1 grid-cols-1 w-[97%] mx-auto mt-2">
                {/* Profile card details */}
                <div className="xl:col-span-3 lg:col-span-4 md:col-span-4 mx-6">
                    {/* user condition */}
                    <div className="p-6 relative rounded-md shadow bg-[#2578B4] -mt-48">
                        {/* profile card heading part */}
                        <div className=" flex flex-col justify-center items-center">
                            <div className="relative mx-auto">
                                <img
                                    className="h-24 w-24 rounded-full"
                                    src='https://i.ibb.co/B6zjvx1/profile-pic-4.png'
                                    alt=""
                                />
                            </div>
                            <div className="mt-4 text-center">
                                <h5 className="text-lg font-semibold">{"Rokon khan"}</h5>
                                <p className="text-black">{'rokonkhan45@gmail.com'}</p>
                            </div>
                        </div>
                        {/* profile card body part */}
                        <div className=" border-t-2 mt-5 border-gray-100 dark:border-gray-700">
                            <h5 className="text-xl font-semibold mt-4">Personal Details :</h5>
                            <div className="mt-4">
                                {/* Email */}
                                <div className="flex items-center gap-4 overflow-clip">
                                    <MdOutlineEmail className=" text-2xl text-black"></MdOutlineEmail>
                                    <div className="">
                                        <h6 className="text-[#002172] dark:text-white font-medium mb-0">
                                            Email :
                                        </h6>
                                        <a className="text-black" href="">{'rokonkha..'}</a>
                                    </div>
                                </div>
                                {/* profession */}
                                <div className="flex items-center mt-3 gap-4">
                                    <MdOutlineWork className=" text-2xl text-black"></MdOutlineWork>
                                    <div className="flex-1">
                                        <h6 className="text-[#002172] dark:text-white font-medium mb-0">
                                            Profession :
                                        </h6>
                                        <a className="text-black" href=""> Not added</a>
                                    </div>
                                </div>
                                {/* linkedin */}
                                <div className="flex items-center mt-3 gap-4">
                                    <FaLinkedin className=" text-2xl text-black"></FaLinkedin>
                                    <div className="flex-1">
                                        <h6 className="text-[#002172] dark:text-white font-medium mb-0">
                                            Linkedin :
                                        </h6>
                                        <a className="text-black" href=""> Not added</a>
                                    </div>
                                </div>
                                {/* facebook */}
                                <div className="flex items-center mt-3 gap-4">
                                    <FaFacebook className=" text-2xl text-black"></FaFacebook>
                                    <div className="flex-1">
                                        <h6 className="text-[#002172] dark:text-white font-medium mb-0">
                                            Facebook :
                                        </h6>
                                        <a className="text-black" href="">Not added</a>
                                    </div>
                                </div>
                                {/* twitter */}
                                <div className="flex items-center mt-3 gap-4">
                                    <FaTwitter className=" text-2xl text-black"></FaTwitter>
                                    <div className="flex-1">
                                        <h6 className="text-[#002172] dark:text-white font-medium mb-0">
                                            Twitter :
                                        </h6>
                                        <a className="text-black hover:underline" target="_blank" href={"www.linkedin.com"} rel="noreferrer">Not added</a>
                                    </div>
                                </div>
                                {/* location */}
                                <div className="flex items-center mt-3">
                                    <svg
                                        stroke="currentColor"
                                        fill="none"
                                        strokeWidth="2"
                                        viewBox="0 0 24 24"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="fea icon-ex-md text-black me-3 w-6 h-6"
                                        height="1em"
                                        width="1em"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                                        <circle cx="12" cy="10" r="3"></circle>
                                    </svg>
                                    <div className="flex-1">
                                        <h6 className="text-[#002172] dark:text-white font-medium mb-0">
                                            Location :
                                        </h6>
                                        <a className="text-black" href="">Not added</a>
                                    </div>
                                </div>
                                {/* contact */}
                                <div className="flex items-center mt-3">
                                    <svg
                                        stroke="currentColor"
                                        fill="none"
                                        strokeWidth="2"
                                        viewBox="0 0 24 24"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="fea icon-ex-md text-black me-3 w-6 h-6"
                                        height="1em"
                                        width="1em"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                                    </svg>
                                    <div className="flex-1">
                                        <h6 className="text-[#002172] dark:text-white font-medium mb-0">
                                            Cell No :
                                        </h6>
                                        <a className="text-black" href="">Contact number unavailable</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="xl:col-span-9 lg:col-span-8 md:col-span-8 my-6">
                    {/* Description area */}
                    <div className="grid grid-cols-1 gap-6">
                        <div className="p-6 border-2 relative rounded-md bg-[#2578B4]">
                            <h5 className="text-xl font-semibold">{'Rokon khan'}</h5>
                            <p className="text-black mt-3">
                                I have started my career as a trainee and prove my self and
                                achieve all the milestone with good guidance and reach up to the
                                project manager. In this journey, I understand all the procedure
                                which make me a good developer, team leader, and a project
                                manager.
                            </p>
                        </div>
                        {/* This tab part make by konika */}
                        <div className="p-6 relative border-2 rounded-md">
                            <h5 className="text-xl font-semibold">Yur all products :</h5>
                            {/* blogs card section */}
                            <div className="grid lg:grid-cols-3 md:grid-cols-2 mt-6 gap-6">
                                {
                                    products.map((product, index) => (
                                        <div key={index}>
                                            <ShopAllDetails product={product}></ShopAllDetails>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </div >
    );
};

export default Profile;