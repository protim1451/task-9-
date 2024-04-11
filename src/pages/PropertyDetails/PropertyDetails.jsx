import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const PropertyDetails = () => {
    const { id } = useParams();
    const [property, setProperty] = useState(null);

    useEffect(() => {
        const fetchPropertyDetails = async () => {
            try {
                const response = await fetch('/property.json');
                if (response.ok) {
                    const propertyData = await response.json();
                    // Find the property with the matching id
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
                <div className="hero bg-base-200">
                    <div className="hero-content flex-col lg:flex-row">
                        <img src={property.image} className="rounded-lg shadow-2xl lg:w-1/2" alt={property.estate_title} />
                        <div className="lg:w-1/2">
                            <h1 className="text-5xl font-bold">{property.estate_title}</h1>
                            <p className="py-6">{property.description}</p>
                            <button className="btn btn-primary">Get Started</button>
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
