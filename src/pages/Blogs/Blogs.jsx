// Blogs.jsx

import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { useLoaderData } from "react-router-dom";

const Blogs = () => {
    const allBlog = useLoaderData();
    console.log(allBlog);

    return (
        <div className="container mx-auto py-8">
            <Helmet>
                <title>CozyHome | Blogs</title>
            </Helmet>
            <h1 className="text-3xl font-bold mb-4">Latest Blogs</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {allBlog.map((blog, idx) => (
                    <div key={idx} className="bg-white shadow-md rounded-md p-6">
                        <img src={blog.imageUrl} alt="" />
                        <h2 className="text-xl font-bold mb-2">{blog.title}</h2>
                        <p className="text-gray-500 mb-4">{blog.date} by {blog.author}</p>
                        <p className="mb-4">{blog.excerpt}</p>
                        <Link to={`/blog/${blog.id}`} className="text-blue-600">Read more...</Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Blogs;
