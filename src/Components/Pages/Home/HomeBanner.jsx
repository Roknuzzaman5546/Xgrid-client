import bannerImg1 from '../../../assets/Onther/banner.webp'
import bannerImg2 from '../../../assets/Onther/sideBanner.webp'

const HomeBanner = () => {
    return (
        <div>
            <section className=' flex items-center'>
                <img src={bannerImg1} alt="" />
                <div>
                    <img src={bannerImg2} alt="" />
                </div>
            </section>
        </div>
    );
};

export default HomeBanner;