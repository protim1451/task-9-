import { useState } from "react";
import { Helmet } from "react-helmet-async";


const ContactUs = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', { name, email, message });
        setSubmitted(true);
    };

    return (
        <div className="container mx-auto py-8">
            <Helmet>
                <title>Contact Us</title>
            </Helmet>
            <h1 className="text-3xl font-bold mb-4 text-center">Contact Us</h1>
            {submitted ? (
                <div className="bg-green-200 text-green-800 p-4 rounded-md mb-4">
                    Thank you for contacting us! We will get back to you soon.
                </div>
            ) : (
                <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
                    <div className="mb-4">
                        <label htmlFor="name" className="block font-medium text-gray-700">Your Name</label>
                        <input type="text" id="name" className="form-input mt-1 block w-full" value={name} onChange={(e) => setName(e.target.value)} required />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="email" className="block font-medium text-gray-700">Your Email</label>
                        <input type="email" id="email" className="form-input mt-1 block w-full" value={email} onChange={(e) => setEmail(e.target.value)} required />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="message" className="block font-medium text-gray-700">Message</label>
                        <textarea id="message" className="form-textarea mt-1 block w-full" rows="4" value={message} onChange={(e) => setMessage(e.target.value)} required></textarea>
                    </div>
                    <button type="submit" className="bg-[#2CCCD3] hover:bg-teal-600 text-white py-2 px-4 rounded-md">Submit</button>
                </form>
            )}
        </div>
    );
};

export default ContactUs;