import { Helmet } from "react-helmet-async";
import BannerSlider from "./BannerSlider";


const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Human Plannet || Home</title>
            </Helmet>

            <BannerSlider></BannerSlider>
        </div>
    );
};

export default Home;