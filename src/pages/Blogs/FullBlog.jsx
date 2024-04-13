// FullBlog.jsx
import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { Link, useParams } from "react-router-dom";

const FullBlog = () => {
    const { id } = useParams();
    const [blog, setBlog] = useState(null);

    useEffect(() => {
        fetch(`/blogs.json`)
            .then(response => response.json())
            .then(data => {
                const selectedBlog = data.find(blog => blog.id === parseInt(id));
                setBlog(selectedBlog);
            })
            .catch(error => console.error("Error fetching full blog:", error));
    }, [id]);

    return (
        <div className="container mx-auto py-8 grid grid-cols-1">
            <Helmet>
                <title>Blog</title>
            </Helmet>
            {blog ? (
                <div className="bg-white shadow-md rounded-md p-6">
                    <img src={blog.imageUrl} alt=""/>
                    <h1 className="text-3xl font-bold mb-4">{blog.title}</h1>
                    <p className="text-gray-500 mb-2">{blog.date} by {blog.author}</p>
                    <p className="text-gray-700 mb-4">{blog.content}</p>
                    <Link to='/blogs'>
                        <button className="btn btn-primary bg-[#2CCCD3]">Go to Blogs Page</button>
                    </Link>
                </div>
            ) : (
                <div>Loading...</div>
            )}
        </div>
    );
};

export default FullBlog;
