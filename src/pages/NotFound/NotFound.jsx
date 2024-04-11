import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <div className="text-center">
            <Helmet>
                <title>404</title>
            </Helmet>
            <h1 className="mt-12 text-5xl text-red-800 font-bold ">OOOPSSS</h1>
            <h2 className="text-5xl font-bold text-teal-600  my-12">404</h2>
            <h3 className="text-3xl text-red-700 font-bold">Not Found</h3>
            <Link to="/"><button className=" mt-10 btn bg-[#2CCCD3]">Home</button></Link>
        </div>
    );
};

export default NotFound;