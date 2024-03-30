import HomeBanner from "./HomeBanner";

import CamperBrand from "./CamperBrand/CamperBrand";
import ProductsType from "./ProductsType/ProductsType";
import ShopALl from "./ShopAll/ShopALl";
import Instagram from "../../Shared/Instagram/Instagram";

const Home = () => {
    return (
        <div>
            <HomeBanner></HomeBanner>
            <CamperBrand></CamperBrand>
            <ProductsType></ProductsType>
            <ShopALl></ShopALl>
            <Instagram></Instagram>
        </div>
    );
};

export default Home;