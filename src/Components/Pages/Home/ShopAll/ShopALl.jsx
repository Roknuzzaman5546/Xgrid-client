import BgTitle from "../../../Shared/title/BgTitle";

const ShopALl = () => {
    return (
        <div className="lg:max-w-screen-2xl w-11/12  mx-auto mt-10 mb-10">
            <BgTitle title={"Shop all"}></BgTitle>
            <section className=" grid grid-cols-1 md:grid-cols-12 mt-5">
                {/* Shop all left part*/}
                <div className=" w-full col-span-3 border-2 p-2">
                    {/* filter header part  */}
                    <div className=" flex justify-between items-center mt-2">
                        <h2 className=" text-black font-bold">Filter</h2>
                        <p className=" text-slate-400 font-bold">Clear</p>
                    </div>
                    {/* Bundle types filter part */}
                    <div>
                        <h2 className=" uppercase text-[#2578B4] mb-1">Bundle types</h2>
                        <div className=" flex justify-start items-center gap-1 cursor-pointer">
                            <input type="checkbox" name="" id="" />
                            <p>Accessories</p>
                        </div>
                        <div className=" flex justify-start items-center gap-1 cursor-pointer">
                            <input type="checkbox" name="" id="" />
                            <p>Charging Systems</p>
                        </div>
                        <div className=" flex justify-start items-center gap-1 cursor-pointer">
                            <input type="checkbox" name="" id="" />
                            <p>Inverters</p>
                        </div>
                        <div className=" flex justify-start items-center gap-1 cursor-pointer">
                            <input type="checkbox" name="" id="" />
                            <p>Lighting</p>
                        </div>
                        <div className=" flex justify-start items-center gap-1 cursor-pointer">
                            <input type="checkbox" name="" id="" />
                            <p>Lithium Upgrade</p>
                        </div>
                        <div className=" flex justify-start items-center gap-1 cursor-pointer">
                            <input type="checkbox" name="" id="" />
                            <p>Recovery</p>
                        </div>
                        <div className=" flex justify-start items-center gap-1 cursor-pointer">
                            <input type="checkbox" name="" id="" />
                            <p>Solar Panels</p>
                        </div>
                    </div>
                    <div className=" border-2 font-bold border-[#2578B4] w-full my-3"></div>
                    {/*Camper make | model filter part */}
                    <div>
                        <h2 className=" uppercase text-[#2578B4] mb-1">Camper make | model</h2>
                        <div className=" flex justify-start items-center gap-1 cursor-pointer">
                            <input type="checkbox" name="" id="" />
                            <p>Australian Off Road | Sierra</p>
                        </div>
                        <div className=" flex justify-start items-center gap-1 cursor-pointer">
                            <input type="checkbox" name="" id="" />
                            <p>Australian Off Road | Sierra ZR</p>
                        </div>
                        <div className=" flex justify-start items-center gap-1 cursor-pointer">
                            <input type="checkbox" name="" id="" />
                            <p>Boreas | EOS12</p>
                        </div>
                        <div className=" flex justify-start items-center gap-1 cursor-pointer">
                            <input type="checkbox" name="" id="" />
                            <p>Boreas | XT</p>
                        </div>
                        <div className=" flex justify-start items-center gap-1 cursor-pointer">
                            <input type="checkbox" name="" id="" />
                            <p>Mission Overland | Summit</p>
                        </div>
                        <div className=" flex justify-start items-center gap-1 cursor-pointer">
                            <input type="checkbox" name="" id="" />
                            <p>Opus | OP15</p>
                        </div>
                        <div className=" flex justify-start items-center gap-1 cursor-pointer">
                            <input type="checkbox" name="" id="" />
                            <p>Opus | OP2</p>
                        </div>
                        <div className=" flex justify-start items-center gap-1 cursor-pointer">
                            <input type="checkbox" name="" id="" />
                            <p>Opus | OP4</p>
                        </div>
                        <div className=" flex justify-start items-center gap-1 cursor-pointer">
                            <input type="checkbox" name="" id="" />
                            <p>Opus | OPLite</p>
                        </div>
                        <div className=" flex justify-start items-center gap-1 cursor-pointer">
                            <input type="checkbox" name="" id="" />
                            <p>Taxa | Cricket</p>
                        </div>
                        <div className=" flex justify-start items-center gap-1 cursor-pointer">
                            <input type="checkbox" name="" id="" />
                            <p>Taxa | Mantis</p>
                        </div>
                        <div className=" flex justify-start items-center gap-1 cursor-pointer">
                            <input type="checkbox" name="" id="" />
                            <p>Taxa | Tiger Moth</p>
                        </div>
                        <div className=" flex justify-start items-center gap-1 cursor-pointer">
                            <input type="checkbox" name="" id="" />
                            <p>Xpedition Trailers | Voyager</p>
                        </div>
                    </div>
                    <div className=" border-2 font-bold border-[#2578B4] w-full my-3"></div>
                    {/*Camper upgrades filter part  */}
                    <div>
                        <h2 className=" uppercase text-[#2578B4] mb-1">Camper upgrades</h2>
                        <div className=" flex justify-start items-center gap-1 cursor-pointer">
                            <input type="checkbox" name="" id="" />
                            <p>Accessories</p>
                        </div>
                        <div className=" flex justify-start items-center gap-1 cursor-pointer">
                            <input type="checkbox" name="" id="" />
                            <p>Batteries</p>
                        </div>
                        <div className=" flex justify-start items-center gap-1 cursor-pointer">
                            <input type="checkbox" name="" id="" />
                            <p>Chargers/Converters</p>
                        </div>
                        <div className=" flex justify-start items-center gap-1 cursor-pointer">
                            <input type="checkbox" name="" id="" />
                            <p>Inverters</p>
                        </div>
                        <div className=" flex justify-start items-center gap-1 cursor-pointer">
                            <input type="checkbox" name="" id="" />
                            <p>Solar</p>
                        </div>
                    </div>
                    <div className=" border-2 font-bold border-[#2578B4] w-full my-3"></div>
                    {/* Products & gear filter part */}
                    <div>
                        <h2 className=" uppercase text-[#2578B4] mb-1">Products & gear</h2>
                        <div className=" flex justify-start items-center gap-1 cursor-pointer">
                            <input type="checkbox" name="" id="" />
                            <p>Accessories</p>
                        </div>
                        <div className=" flex justify-start items-center gap-1 cursor-pointer">
                            <input type="checkbox" name="" id="" />
                            <p>Coolers</p>
                        </div>
                        <div className=" flex justify-start items-center gap-1 cursor-pointer">
                            <input type="checkbox" name="" id="" />
                            <p>Firepits</p>
                        </div>
                        <div className=" flex justify-start items-center gap-1 cursor-pointer">
                            <input type="checkbox" name="" id="" />
                            <p>Kitchen</p>
                        </div>
                        <div className=" flex justify-start items-center gap-1 cursor-pointer">
                            <input type="checkbox" name="" id="" />
                            <p>Lighting</p>
                        </div>
                        <div className=" flex justify-start items-center gap-1 cursor-pointer">
                            <input type="checkbox" name="" id="" />
                            <p>Merchandise &</p>
                        </div>
                        <div className=" flex justify-start items-center gap-1 cursor-pointer">
                            <input type="checkbox" name="" id="" />
                            <p>Recovery</p>
                        </div>
                        <div className=" flex justify-start items-center gap-1 cursor-pointer">
                            <input type="checkbox" name="" id="" />
                            <p>Roof Top Tents</p>
                        </div>
                        <div className=" flex justify-start items-center gap-1 cursor-pointer">
                            <input type="checkbox" name="" id="" />
                            <p>Storage</p>
                        </div>
                        <div className=" flex justify-start items-center gap-1 cursor-pointer">
                            <input type="checkbox" name="" id="" />
                            <p>Toilets</p>
                        </div>
                    </div>
                    <div className=" border-2 font-bold border-[#2578B4] w-full my-3"></div>
                    {/* manufacturers filter part */}
                    <div>
                        <h2 className=" uppercase text-[#2578B4] mb-1">manufacturers</h2>
                        <div className=" flex justify-start items-center gap-1 cursor-pointer">
                            <input type="checkbox" name="" id="" />
                            <p>Accessories</p>
                        </div>
                        <div className=" flex justify-start items-center gap-1 cursor-pointer">
                            <input type="checkbox" name="" id="" />
                            <p>Coolers</p>
                        </div>
                        <div className=" flex justify-start items-center gap-1 cursor-pointer">
                            <input type="checkbox" name="" id="" />
                            <p>Firepits</p>
                        </div>
                        <div className=" flex justify-start items-center gap-1 cursor-pointer">
                            <input type="checkbox" name="" id="" />
                            <p>Kitchen</p>
                        </div>
                        <div className=" flex justify-start items-center gap-1 cursor-pointer">
                            <input type="checkbox" name="" id="" />
                            <p>Lighting</p>
                        </div>
                        <div className=" flex justify-start items-center gap-1 cursor-pointer">
                            <input type="checkbox" name="" id="" />
                            <p>Merchandise &</p>
                        </div>
                        <div className=" flex justify-start items-center gap-1 cursor-pointer">
                            <input type="checkbox" name="" id="" />
                            <p>Accessories</p>
                        </div>
                        <div className=" flex justify-start items-center gap-1 cursor-pointer">
                            <input type="checkbox" name="" id="" />
                            <p>Roof Top Tents</p>
                        </div>
                    </div>
                </div>
                {/* Shop all right side */}
                <div className=" w-full col-span-9 border-2 ml-2">
                    <h2>card part</h2>
                </div>
            </section>
        </div>
    );
};

export default ShopALl;