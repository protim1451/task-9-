import { Link } from "react-router-dom";


const PropertyCard = ({property}) => {
    
    const {id, estate_title, segment_name, description, price, status, area, location, facilities, image} = property;

    return (
        <div>
            <div className="card bg-base-100 shadow-xl">
                <figure><img className="w-full h-[280px]" src={image} alt={estate_title} /></figure>
                <div className="card-body">
                    <h2 className="card-title">
                        {estate_title}
                        <div className="badge badge-secondary">{status}</div>
                    </h2>
                    <p>{description.slice(0,80)}
                    <Link
                         className="text-blue-600 font-bold">  Read More...</Link></p>
                    <div className="card-actions justify-end">
                        <div className="badge badge-outline">{area}</div>
                        <div className="badge badge-outline">{location}</div>
                        <div className="badge badge-outline">{price}</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PropertyCard;