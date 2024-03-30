
const ShopAllDetails = ({ product }) => {
    return (
        <div>
            <img src={product.image} alt="" />
            <div>
                <h1 className=" text-xl text-black">{product.title}</h1>
                <h2 className=" text-xl text-black">{product.place}</h2>
                <p className="  font-bold text-[#2578B4]">$ {product.price}.00</p>
            </div>
        </div>
    );
};

export default ShopAllDetails;