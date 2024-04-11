import { Link } from "react-router-dom";
import { MdApartment } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";

const PropertyCard = ({ property }) => {
    const { id, estate_title, segment_name, description, price, status, area, location, facilities, image } = property;

    return (
        <div className="card bg-base-100 shadow-xl flex flex-col h-full">
            <figure><img className="w-full h-[280px]" src={image} alt={estate_title} /></figure>
            <div className="card-body flex-grow">
                <h2 className="card-title">
                    {estate_title}
                    <div className="badge badge-secondary">{status}</div>
                </h2>
                <p>{description.slice(0, 80)}
                    <Link to={`/property/${id}`}
                    className="text-blue-600 font-bold">  Read More...</Link>
                </p>
                <div>
                    <div className="card-actions justify-center">
                        <div className="badge badge-outline"><MdApartment /> {area}</div>
                        <div className="badge badge-outline"><FaLocationDot />{location}</div>
                        <div className="badge badge-outline">{price}</div>
                    </div>
                    <Link to={`/property/${id}`}>
                    <button className="mt-2 btn btn-block 
                    btn-secondary bg-[#2CCCD3] text-xl">View Property</button></Link>
                </div>
            </div>
        </div>
    );
};

export default PropertyCard;
