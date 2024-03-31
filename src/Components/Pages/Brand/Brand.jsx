import brandImg1 from '../../../assets/Brand/Rectangle 87.png'
import brandImg2 from '../../../assets/Brand/Rectangle 91.png'
import brandImg3 from '../../../assets/Brand/Rectangle 93.png'
import brandImg4 from '../../../assets/Brand/Rectangle 99.png'
import brandImg5 from '../../../assets/Brand/Rectangle 95.png'
import brandImg6 from '../../../assets/Brand/Rectangle 96.png'
import brandImgTitle1 from '../../../assets/Brand/Rectangle 42.png'
import brandImgTitle2 from '../../../assets/Brand/Rectangle 43.png'
import brandImgTitle3 from '../../../assets/Brand/Rectangle 44.png'
import brandImgTitle4 from '../../../assets/Brand/Rectangle 45.png'
import brandImgTitle5 from '../../../assets/Brand/Rectangle 46.png'
import brandImgTitle6 from '../../../assets/Brand/Rectangle 47.png'
import brandImgTitle7 from '../../../assets/Brand/Rectangle 48.png'
import brandImgTitle8 from '../../../assets/Brand/Rectangle 43.png'

const Brand = () => {
    return (
        <div className="lg:max-w-screen-2xl w-11/12  mx-auto my-16">
            {/* This is brand card section */}
            <section className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 mt-5">
                {/* Brand 1 */}
                <div className=" relative">
                    <img className="" src={brandImg1} alt="" />
                    <div className="bg-[#9c9595b2] absolute top-0 h-full w-full">
                        <div className=" flex flex-col items-end mt-16 md:mt-20 lg:mt-12 xl:mt-20 mr-24 md:mr-32 lg:mr-20 xl:mr-32">
                            <img className=" h-10" src={brandImgTitle1} alt="" />
                        </div>
                    </div>
                </div>
                {/* Brand 2 */}
                <div className=" relative">
                    <img className="" src={brandImg2} alt="" />
                    <div className="bg-[#9c9595b2] absolute top-0 h-full w-full">
                        <div className=" flex flex-col items-end mt-16 md:mt-20 lg:mt-12 xl:mt-20 mr-24 md:mr-32 lg:mr-20 xl:mr-32">
                            <img className=" h-12" src={brandImgTitle2} alt="" />
                        </div>
                    </div>
                </div>
                {/* Brand 3 */}
                <div className=" relative">
                    <img className="" src={brandImg3} alt="" />
                    <div className="bg-[#9c9595b2] absolute top-0 h-full w-full">
                        <div className=" flex flex-col items-end mt-16 md:mt-20 lg:mt-12 xl:mt-20 mr-24 md:mr-32 lg:mr-20 xl:mr-32">
                            <img className=" h-10" src={brandImgTitle3} alt="" />
                        </div>
                    </div>
                </div>
                {/* Brand 4 */}
                <div className=" relative">
                    <img className="" src={brandImg4} alt="" />
                    <div className="bg-[#9c9595b2] absolute top-0 h-full w-full">
                        <div className=" flex flex-col items-end mt-16 md:mt-20 lg:mt-12 xl:mt-20 mr-24 md:mr-32 lg:mr-20 xl:mr-32">
                            <img className=" h-16" src={brandImgTitle4} alt="" />
                        </div>
                    </div>
                </div>
                {/* Brand 5 */}
                <div className=" relative">
                    <img className="" src={brandImg5} alt="" />
                    <div className="bg-[#9c9595b2] absolute top-0 h-full w-full">
                        <div className=" flex flex-col items-end mt-16 md:mt-20 lg:mt-12 xl:mt-20 mr-24 md:mr-32 lg:mr-20 xl:mr-32">
                            <img className=" h-5" src={brandImgTitle5} alt="" />
                        </div>
                    </div>
                </div>
                {/* Brand 6 */}
                <div className=" relative">
                    <img className="" src={brandImg6} alt="" />
                    <div className="bg-[#9c9595b2] absolute top-0 h-full w-full">
                        <div className=" flex flex-col items-end mt-16 md:mt-20 lg:mt-12 xl:mt-20 mr-24 md:mr-32 lg:mr-20 xl:mr-32">
                            <img className=" h-10" src={brandImgTitle6} alt="" />
                        </div>
                    </div>
                </div>
                {/* Brand 7 */}
                <div className=" relative">
                    <img className="" src={brandImg2} alt="" />
                    <div className="bg-[#9c9595b2] absolute top-0 h-full w-full">
                        <div className=" flex flex-col items-end mt-16 md:mt-20 lg:mt-12 xl:mt-20 mr-24 md:mr-32 lg:mr-20 xl:mr-32">
                            <img className=" h-10" src={brandImgTitle7} alt="" />
                        </div>
                    </div>
                </div>
                {/* Brand 8 */}
                <div className=" relative">
                    <img className="" src={brandImg1} alt="" />
                    <div className="bg-[#9c9595b2] absolute top-0 h-full w-full">
                        <div className=" flex flex-col items-end mt-16 md:mt-20 lg:mt-12 xl:mt-20 mr-24 md:mr-32 lg:mr-20 xl:mr-32">
                            <img className=" h-10" src={brandImgTitle8} alt="" />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Brand;