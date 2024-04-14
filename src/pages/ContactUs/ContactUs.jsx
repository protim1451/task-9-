import { useState } from "react";
import { Helmet } from "react-helmet-async";

const ContactUs = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [submitted, setSubmitted] = useState(false);
    const [errors, setErrors] = useState({});

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!name || !email || !message) {
            setErrors({ name: !name, email: !email, message: !message });
            return;
        }
        console.log('Form submitted:', { name, email, message });
        setSubmitted(true);
        // Clear form after submission
        setName('');
        setEmail('');
        setMessage('');
    };

    return (
        <div className="container mx-auto py-8">
            <Helmet>
                <title>CozyHome | Contact Us</title>
            </Helmet>
            <h1 className="text-3xl font-bold mb-4 text-center">Contact Us</h1>
            {submitted ? (
                <div className="text-teal-800 p-4 rounded-md mb-4 text-center font-bold">
                    Thank you for contacting us! We will get back to you soon.
                </div>
            ) : (
                <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
                    <div className="mb-4">
                        <label htmlFor="name" className="block font-medium text-gray-700">Your Name</label>
                        <input type="text" id="name" className={`form-input mt-1 block w-full ${errors.name ? 'border-red-500' : ''}`} value={name} onChange={(e) => setName(e.target.value)} required />
                        {errors.name && <p className="text-red-500">Please enter your name</p>}
                    </div>
                    <div className="mb-4">
                        <label htmlFor="email" className="block font-medium text-gray-700">Your Email</label>
                        <input type="email" id="email" className={`form-input mt-1 block w-full ${errors.email ? 'border-red-500' : ''}`} value={email} onChange={(e) => setEmail(e.target.value)} required />
                        {errors.email && <p className="text-red-500">Please enter a valid email address</p>}
                    </div>
                    <div className="mb-4">
                        <label htmlFor="message" className="block font-medium text-gray-700">Message</label>
                        <textarea id="message" className={`form-textarea mt-1 block w-full ${errors.message ? 'border-red-500' : ''}`} rows="4" value={message} onChange={(e) => setMessage(e.target.value)} required></textarea>
                        {errors.message && <p className="text-red-500">Please enter your message</p>}
                    </div>
                    <button type="submit" className="bg-[#2CCCD3] hover:bg-teal-600 text-white py-2 px-4 rounded-md">Submit</button>
                </form>
            )}
         
            <div className="flex justify-center gap-10">
                <div className="mt-8">
                    <p className="text-lg font-semibold mb-2">Contact Information:</p>
                    <ul className="list-disc ml-6">
                        <li>Phone: +1234567890</li>
                        <li>Email: info@cozyhome.com</li>
                        <li>Address: 123 Cozy Lane, City, Country</li>
                    </ul>
                </div>
                <div className="mt-8">
                    <p className="text-lg font-semibold mb-2">Office Hours:</p>
                    <p>Monday - Friday: 9:00 AM - 5:00 PM</p>
                    <p>Saturday: 10:00 AM - 2:00 PM</p>
                    <p>Sunday: Closed</p>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;
