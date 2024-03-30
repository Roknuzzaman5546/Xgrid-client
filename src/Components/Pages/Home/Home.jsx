import HomeBanner from "./HomeBanner";

import CamperBrand from "./CamperBrand/CamperBrand";
import ProductsType from "./ProductsType/ProductsType";
import ShopALl from "./ShopAll/ShopALl";

const Home = () => {
    return (
        <div>
            <HomeBanner></HomeBanner>
            <CamperBrand></CamperBrand>
            <ProductsType></ProductsType>
            <ShopALl></ShopALl>
        </div>
    );
};

export default Home;