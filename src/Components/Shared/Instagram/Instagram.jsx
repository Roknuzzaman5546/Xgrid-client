import instargramImg1 from '../.../../../../assets/Onther/Rectangle 1.png'
import instargramImg2 from '../.../../../../assets/Onther/Rectangle 2.png'
import instargramImg3 from '../.../../../../assets/Onther/Rectangle 3.png'
import instargramImg4 from '../.../../../../assets/Onther/Rectangle 4.png'
import instargramImg5 from '../.../../../../assets/Onther/Rectangle 5.png'
import instargramImg6 from '../.../../../../assets/Onther/Rectangle 6.png'

const Instagram = () => {
    return (
        <div className=' w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6'>
            <img className=' h-40 w-full' src={instargramImg1} alt="" />
            <img className=' h-40 w-full' src={instargramImg2} alt="" />
            <img className=' h-40 w-full' src={instargramImg3} alt="" />
            <img className=' h-40 w-full' src={instargramImg4} alt="" />
            <img className=' h-40 w-full' src={instargramImg5} alt="" />
            <img className=' h-40 w-full' src={instargramImg6} alt="" />
        </div>
    );
};

export default Instagram;