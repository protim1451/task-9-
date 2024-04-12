import { Helmet } from "react-helmet-async";
import Navbar from "../Shared/Navbar";
import Banner from "./Banner";
import { useLoaderData } from "react-router-dom";
import PropertyCard from "./PropertyCard";
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles
import { useEffect } from "react";



const Home = () => {

    useEffect(() => {
        AOS.init();
    }, []);
    

    const properties = useLoaderData();
    console.log(properties);
    return (
        <div>
            <Helmet>
                <title>CozyHome | Homepage</title>
            </Helmet>
            <Banner></Banner>
            <h2 className="my-4 text-center font-bold text-4xl">Explore Our Properties</h2>
            <p className="mb-5 text-center px-3 md:px-5 lg:px-48">Discover a diverse range of homes and apartments suited to your lifestyle. Whether you're searching for a cozy townhouse, a modern loft, or a spacious family home, we have the perfect property for you. Browse through our collection and find your dream living space today!</p>
            <div className="grid grid-cols-1 md:grid-cols-2 
            lg:grid-cols-3 gap-6" 
            data-aos="fade-up" data-aos-anchor-placement="top-center">
                {
                    properties.map(aProperty => (
                        <PropertyCard key={aProperty.id} property={aProperty} />
                    ))
                }
            </div>
        </div>
    );
};

export default Home;