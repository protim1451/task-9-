import React from "react";
import { Link, NavLink } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import "./Navbar.css";

const Navbar = () => {
    const { logOut, user } = useAuth();

    const navlinks = (
        <>
            <li><NavLink to='/'>Home</NavLink></li>
            <li><NavLink to='/login'>Login</NavLink></li>
            <li><NavLink to='/contact'>Contact Us</NavLink></li>
            <li><NavLink to="/blogs">Blogs</NavLink></li>
        </>
    );

    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navlinks}
                        </ul>
                    </div>
                    <a className="btn btn-ghost font-bold text-3xl text-[#2CCCD3]">CozyHomes</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navlinks}
                    </ul>
                </div>
                {user?.email ? (
                    <div className="navbar-end relative">
                        <div className="profile-wrapper">
                            <img className="rounded-full w-10 h-10 cursor-pointer" src={user.photoURL} alt={user.displayName} />
                            <span className="profile-name">{user.displayName}</span>
                        </div>
                        <Link>
                            <button onClick={logOut} className="btn bg-[#2CCCD3]">Log Out</button>
                        </Link>
                    </div>
                ) : (
                    <div className="navbar-end">
                        <Link to='/login'>
                            <button className="btn bg-[#2CCCD3]">Log In</button>
                        </Link>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Navbar;
