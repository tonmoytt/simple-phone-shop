import React from 'react';
import { FaHeart, FaShoppingCart } from 'react-icons/fa';
import { Link, NavLink, useLocation } from 'react-router-dom';

const Navbar = ({ cartCount = 0, Wishlist = 0 }) => {
    const location = useLocation();
    const isHome = location.pathname === '/';

    return (
        <div className={`fixed z-10 w-[1218px] rounded-t-lg grid grid-cols-3 items-center p-4 shadow-md ${isHome ? 'bg-indigo-500 text-white' : 'bg-white text-black'}`}>

            {/* Logo */}
            <div className="justify-self-start text-2xl font-bold font-sans">
                GadgetHeaven
            </div>

            {/* Nav Links */}
            <div className="flex justify-center space-x-4">
                <NavLink to="/">
                    <button className="btn rounded-xl font-bold font-serif text-sm bg-indigo-500 text-white px-4 py-1 hover:bg-indigo-600">
                        Home
                    </button>
                </NavLink>
                <NavLink to="/statistics">
                    <button className="btn rounded-xl font-bold font-serif text-sm bg-indigo-500 text-white px-4 py-1 hover:bg-indigo-600">
                        Statistics
                    </button>
                </NavLink>
                <NavLink to="/dashboard">
                    <button className="btn rounded-xl font-bold font-serif text-sm bg-indigo-500 text-white px-4 py-1 hover:bg-indigo-600">
                        Dashboard
                    </button>
                </NavLink>
            </div>

            {/* Icons */}
            <div className="flex justify-end items-center space-x-3 relative">
                {/* Cart Icon with badge */}
                <div className="relative">
                    <div className="bg-white rounded-full w-[32px] h-[32px] flex items-center justify-center shadow">
                        <FaShoppingCart className="text-black" />
                    </div>
                    {cartCount > 0 && (
                        <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center shadow-md">
                            {cartCount}
                        </span>
                    )}
                </div>

                {/* Heart Icon */}
                <Link>
                    <div className="bg-white rounded-full w-[32px] h-[32px] flex items-center justify-center shadow">
                        <FaHeart className="text-black" />
                    </div>
                    {Wishlist > 0 && (
                        <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center shadow-md">
                            {Wishlist}
                        </span>
                    )}
                </Link>
            </div>
        </div>
    );
};

export default Navbar;
