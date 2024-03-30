import BgTitle from "../../../Shared/title/BgTitle";
import brandImg1 from '../../../../assets/Brand/Rectangle 87.png'
import brandImg2 from '../../../../assets/Brand/Rectangle 91.png'
import brandImg3 from '../../../../assets/Brand/Rectangle 93.png'
import brandImg4 from '../../../../assets/Brand/Rectangle 99.png'
import brandImg5 from '../../../../assets/Brand/Rectangle 95.png'
import brandImg6 from '../../../../assets/Brand/Rectangle 96.png'
import brandImgTitle1 from '../../../../assets/Brand/Image 11.png'
import brandImgTitle2 from '../../../../assets/Brand/sprite.png'
import brandImgTitle3 from '../../../../assets/Brand/Image 6.png'
import brandImgTitle4 from '../../../../assets/Brand/Image 4.png'
import brandImgTitle5 from '../../../../assets/Brand/Image 5.png'
import brandImgTitle6 from '../../../../assets/Brand/Image 7.png'

const CamperBrand = () => {
    return (
        <div className="lg:max-w-screen-2xl w-11/12  mx-auto mt-10">
            {/* bg title import from shared component*/}
            <BgTitle title={"Shop by camper brand"}></BgTitle>
            {/* This is brand card section */}
            <section className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mt-5">
                {/* Brand 1 */}
                <div className=" relative">
                    <img className="" src={brandImg1} alt="" />
                    <div className="bg-[#000000B2] absolute top-0 h-full w-full">
                        <div className=" flex flex-col items-end mt-16 md:mt-20 lg:mt-16 xl:mt-28 mr-2">
                            <img className=" h-10" src={brandImgTitle1} alt="" />
                            <p className=" text-right text-white font-bold uppercase">+Shop now</p>
                        </div>
                    </div>
                </div>
                {/* Brand 2 */}
                <div className=" relative">
                    <img className="" src={brandImg2} alt="" />
                    <div className="bg-[#000000B2] absolute top-0 h-full w-full">
                        <div className=" flex flex-col items-end mt-16 md:mt-20 lg:mt-16 xl:mt-28 mr-2">
                            <img className=" h-10" src={brandImgTitle2} alt="" />
                            <p className=" text-right text-white font-bold uppercase">+Shop now</p>
                        </div>
                    </div>
                </div>
                {/* Brand 3 */}
                <div className=" relative">
                    <img className="" src={brandImg3} alt="" />
                    <div className="bg-[#000000B2] absolute top-0 h-full w-full">
                        <div className=" flex flex-col items-end mt-16 md:mt-20 lg:mt-16 xl:mt-28 mr-2">
                            <img className=" h-10" src={brandImgTitle3} alt="" />
                            <p className=" text-right text-white font-bold uppercase">+Shop now</p>
                        </div>
                    </div>
                </div>
                {/* Brand 4 */}
                <div className=" relative">
                    <img className="" src={brandImg4} alt="" />
                    <div className="bg-[#000000B2] absolute top-0 h-full w-full">
                        <div className=" flex flex-col items-end mt-16 md:mt-20 lg:mt-16 xl:mt-28 mr-2">
                            <img className=" h-8" src={brandImgTitle4} alt="" />
                            <p className=" text-right text-white font-bold uppercase">+Shop now</p>
                        </div>
                    </div>
                </div>
                {/* Brand 5 */}
                <div className=" relative">
                    <img className="" src={brandImg5} alt="" />
                    <div className="bg-[#000000B2] absolute top-0 h-full w-full">
                        <div className=" flex flex-col items-end mt-16 md:mt-20 lg:mt-16 xl:mt-28 mr-2">
                            <img className=" h-10" src={brandImgTitle5} alt="" />
                            <p className=" text-right text-white font-bold uppercase">+Shop now</p>
                        </div>
                    </div>
                </div>
                {/* Brand 6 */}
                <div className=" relative">
                    <img className="" src={brandImg6} alt="" />
                    <div className="bg-[#000000B2] absolute top-0 h-full w-full">
                        <div className=" flex flex-col items-end mt-16 md:mt-20 lg:mt-16 xl:mt-28 mr-2">
                            <img className=" h-10" src={brandImgTitle6} alt="" />
                            <p className=" text-right text-white font-bold uppercase">+Shop now</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default CamperBrand;