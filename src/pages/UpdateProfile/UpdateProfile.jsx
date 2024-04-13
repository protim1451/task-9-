import React, { useState, useEffect } from "react";
import useAuth from "../Hooks/useAuth";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from 'react-toastify';
import { Helmet } from "react-helmet-async";

const UpdateProfile = () => {
    const { updateUserProfile, user } = useAuth();
    const {
        register,
        handleSubmit,
        formState: { errors },
        setValue
    } = useForm();

    useEffect(() => {
        if (user) {
            setValue("name", user.displayName);
            setValue("photoURL", user.photoURL);
        }
    }, [user, setValue]);

    const onSubmit = async (data) => {
        const { name, photoURL } = data;
        try {
            await updateUserProfile(name, photoURL);
            toast.success('Profile updated successfully', {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        } catch (error) {
            console.error(error);
            toast.error('Failed to update profile', {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        }
    };

    return (
        <div className="container mx-auto py-8">
            <Helmet>
                <title>Update Profile</title>
            </Helmet>
            <div className="flex justify-center">
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-12">
                    <div className="flex flex-col justify-center">
                        <div className="text-center">
                            {user && user.photoURL && (
                                <img
                                    src={user.photoURL}
                                    alt={user.displayName}
                                    className="h-52 w-52 rounded-full mx-auto"
                                />
                            )}
                            <h2 className="text-2xl font-bold mt-4">{user && user.displayName}</h2>
                            <p className="text-gray-500">{user && user.email}</p>
                        </div>
                    </div>
                    <div>
                        <h2 className="text-3xl font-bold mb-4">Update Profile</h2>
                        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-700">
                                    Name
                                </label>
                                <input
                                    {...register("name")}
                                    type="text"
                                    className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">
                                    Photo URL
                                </label>
                                <input
                                    {...register("photoURL")}
                                    type="text"
                                    className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                />
                            </div>
                            <div>
                                <button
                                    type="submit"
                                    className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#2CCCD3] hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                >
                                    Update Profile
                                </button>
                            </div>
                        </form>
                        <ToastContainer />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UpdateProfile;
