import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { FaLocationDot } from "react-icons/fa6";
import 'animate.css';

const PropertyDetails = () => {
    const { id } = useParams();
    const [property, setProperty] = useState(null);

    useEffect(() => {
        const fetchPropertyDetails = async () => {
            try {
                const response = await fetch('/property.json');
                if (response.ok) {
                    const propertyData = await response.json();
                    const selectedProperty = propertyData.find(prop => prop.id === parseInt(id));
                    if (selectedProperty) {
                        setProperty(selectedProperty);
                    } else {
                        throw new Error("Property not found");
                    }
                } else {
                    throw new Error("Failed to fetch property details");
                }
            } catch (error) {
                console.error("Error fetching property details:", error);
            }
        };

        fetchPropertyDetails();
    }, [id]);
    return (
        <div>
            {property ? (
                <div className="hero bg-base-200 animate__animated animate__fadeInUp">
                    <div className="hero-content flex-col lg:flex-row">
                        <img src={property.image} className="rounded-lg shadow-2xl lg:w-1/2" alt={property.estate_title} />
                        <div className="lg:w-1/2">
                            <h1 className="text-5xl font-bold">{property.estate_title}</h1>
                            <p className="py-3">{property.description}</p>
                            <div className="py-2">
                                <h2 className="text-xl font-bold">Facilities:</h2>
                                <ul className="list-disc ml-6">
                                    {property.facilities.map((facility, index) => (
                                        <li key={index}>{facility}</li>
                                    ))}
                                </ul>
                            </div>
                            <p className="badge badge-outline"><FaLocationDot />{' '}{property.location}</p>
                        </div>
                    </div>
                </div>
            ) : (
                <div>Loading...</div>
            )}
        </div>
    );
};

export default PropertyDetails;