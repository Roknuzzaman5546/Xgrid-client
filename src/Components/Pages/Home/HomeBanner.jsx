import bannerImg1 from '../../../assets/Onther/banner.webp'
import bannerImg2 from '../../../assets/Onther/sideBanner.webp'

const HomeBanner = () => {
    return (
        <div>
            <section className=' w-full h-full grid grid-cols-1 md:grid-cols-12'>
                {/* banner left part */}
                <div className=' h-full relative col-span-7'>
                    <img className=' h-full' src={bannerImg1} alt="" />
                    <img className=' h-full absolute hidden md:block right-0 -top-0.5' src={bannerImg2} alt="" />
                </div>
                {/* banner right part */}
                <div className=' w-fulls bg-[#2578B4] col-span-5 space-y-3 px-8 py-20'>
                    <span className=' font-bold text-white'>Featured campers</span>
                    <h2 className=' text-5xl text-white'>2023 Australian <br />Off Road Sinergi</h2>
                    <h4 className=' font-bold text-white'>$127,900.00</h4>
                    <p className=' text-white'>The 100% Aussie built AOR Sinergi is arriving in the US in late 2023!. This 18’ fixed roof off-road caravan pushes the boundaries of outback caravan design, exploring new dimensions in comfort and balance. Price shown is Base plus Options. Pre-orders available now</p>
                    <button className=' text-[#2578B4] bg-white py-3 px-5 uppercase rounded-sm'>Get a quote</button>
                </div>
            </section>
        </div>
    );
};

export default HomeBanner;