import productsTypeImg from '../../../../assets/Products/placeholder.png'
import BgTitle from '../../../Shared/title/BgTitle';

const ProductsType = () => {
    return (
        <div className="lg:max-w-screen-2xl w-11/12  mx-auto mt-10">
            {/* bg title import from shared component*/}
            <BgTitle title={"Product types"}></BgTitle>
            <section className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mt-5'>
                {/* Products card 1 */}
                <div className=" relative">
                    <img className="" src={productsTypeImg} alt="" />
                    <div className="bg-[#111111b2] absolute top-0 h-full w-full">
                        <div className=" flex flex-col items-end mt-16 md:mt-20 lg:mt-16 xl:mt-20 mr-2">
                            <h2 className=' text-3xl text-white uppercase text-right'>Mod kit <br />bundles</h2>
                            <p className=" text-right text-white font-bold uppercase">+Shop now</p>
                        </div>
                    </div>
                </div>
                {/* Products card 1 */}
                <div className=" relative">
                    <img className="" src={productsTypeImg} alt="" />
                    <div className="bg-[#111111b2] absolute top-0 h-full w-full">
                        <div className=" flex flex-col items-end mt-16 md:mt-20 lg:mt-16 xl:mt-20 mr-2 ">
                            <h2 className=' text-3xl text-white uppercase text-right'>Camper <br />upgrade systems</h2>
                            <p className=" text-right text-white font-bold uppercase">+Shop now</p>
                        </div>
                    </div>
                </div>
                {/* Products card 1 */}
                <div className=" relative">
                    <img className="" src={productsTypeImg} alt="" />
                    <div className="bg-[#111111b2] absolute top-0 h-full w-full">
                        <div className=" flex flex-col items-end mt-16 md:mt-20 lg:mt-16 xl:mt-20 mr-2">
                            <h2 className=' text-3xl text-white uppercase text-right'>Products <br />& gear</h2>
                            <p className=" text-right text-white font-bold uppercase">+Shop now</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ProductsType;