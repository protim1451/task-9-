import React from "react";
import useAuth from "../Hooks/useAuth";
import { Link } from "react-router-dom";
import 'animate.css';
import { Helmet } from "react-helmet-async";

const MyProfile = () => {
    const { user } = useAuth();

    return (
        <div className="container mx-auto py-8 flex justify-center items-center">
            <Helmet>
                <title>My Profile</title>
            </Helmet>
            {user ? (
                <div>
                    <h1 className="text-3xl font-bold mb-4 text-center">My Profile</h1>
                    <div className="bg-white shadow-md rounded-md p-6 animate__animated animate__fadeIn animate__delay-1s animate__faster">
                        <div className="flex items-center animate__animated animate__heartBeat animate__slower animate__infinite">
                            {user.photoURL && (
                                <img src={user.photoURL} alt={user.displayName} className="h-52 w-52 rounded-full animate__animated animate__bounceInUp" />
                            )}
                            <div className="ml-4">
                                <h2 className="text-xl"><span className="font-bold">Name:</span> {user.displayName}</h2>
                                <p className="text-gray-500"><span className="font-bold">Email:</span> {user.email}</p>
                            </div>
                        </div>
                        <div className="flex justify-center items-center gap-1 mt-4 animate__animated animate__slideInRight animate__delay-2s">
                            <p className="font-semibold">To change your name or Photo click</p>
                            <Link to="/update" className=" text-teal-500 p-1 bg-slate-200">Update Profile</Link>
                        </div>
                    </div>
                </div>
            ) : (
                <div>Loading...</div>
            )}
        </div>
    );
};

export default MyProfile;
