import { Helmet } from "react-helmet-async";
import Navbar from "../Shared/Navbar";
import Banner from "./Banner";


const Home = () => {
    return (
        <div>
            <Helmet>
                <title>CozyHome | Homepage</title>
            </Helmet>
            <Banner></Banner>
        </div>
    );
};

export default Home;