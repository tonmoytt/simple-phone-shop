import React, { useState } from "react";
import {
  FaHeart,
  FaShoppingCart,
  FaBars,
  FaTimes,
  FaChevronDown,
  FaTshirt,
  FaMobileAlt,
  FaTags,
  FaStar,
  FaHome,
  FaList,
  FaInfoCircle,
  FaMapMarkerAlt,
  FaPhone,
} from "react-icons/fa";
import { Link, NavLink, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../../assets/Images/modern-gradient-gadget-store-logo-tech-brand_8169-752 (1).avif";

const Navbar = ({ cartCount = 0, Wishlist = 0 }) => {
  const location = useLocation();
  const isHome = location.pathname === "/";

  const [openDropdown, setOpenDropdown] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [mobileDropdown, setMobileDropdown] = useState(false);

  return (
    <div
      className={`fixed top-0 left-0 w-full z-50 shadow-lg transition-colors duration-500 ${
        isHome
          ? "bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white"
          : "bg-white text-gray-900"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3">
        {/* Logo */}
        <div className="flex items-center space-x-2 font-bold text-xl">
          <img
            src={logo}
            alt="logo"
            className="w-10 h-10 rounded-full shadow-lg"
          />
          <span
            className={`tracking-wide ${
              isHome ? "text-white" : "text-indigo-600"
            }`}
          >
            GadgetHeaven
          </span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex space-x-6 font-semibold items-center text-lg">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `px-4 py-2 rounded-xl transition-all duration-300 ${
                isActive
                  ? "bg-gradient-to-r from-indigo-500 to-purple-500 text-white shadow-lg scale-105"
                  : "hover:bg-gradient-to-r hover:from-indigo-500 hover:to-purple-600 hover:text-white shadow-md border border-indigo-200"
              }`
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/electronics"
            className="flex items-center gap-2 px-4 py-2 rounded-xl hover:bg-gradient-to-r hover:from-indigo-500 hover:to-purple-600 hover:text-white shadow-md border border-indigo-200 transition"
          >
            <FaMobileAlt /> Electronics
          </NavLink>

          <NavLink
            to="/fashion"
            className="flex items-center gap-2 px-4 py-2 rounded-xl hover:bg-gradient-to-r hover:from-indigo-500 hover:to-purple-600 hover:text-white shadow-md border border-indigo-200 transition"
          >
            <FaTshirt /> Fashion
          </NavLink>

          <NavLink
            to="/offers"
            className="flex items-center gap-2 px-4 py-2 rounded-xl hover:bg-gradient-to-r hover:from-indigo-500 hover:to-purple-600 hover:text-white shadow-md border border-indigo-200 transition"
          >
            <FaTags /> Offers
          </NavLink>

          <NavLink
            to="/deals"
            className="flex items-center gap-2 px-4 py-2 rounded-xl hover:bg-gradient-to-r hover:from-indigo-500 hover:to-purple-600 hover:text-white shadow-md border border-indigo-200 transition"
          >
            <FaStar /> Deals
          </NavLink>

          {/* Desktop Dropdown */}
          <div className="relative">
            <button
              onClick={() => setOpenDropdown(!openDropdown)}
              className="flex items-center gap-2 px-4 py-2 rounded-xl hover:bg-gradient-to-r hover:from-indigo-500 hover:to-purple-600 hover:text-white shadow-md border border-indigo-200 transition"
            >
              Categories <FaChevronDown className="ml-1 text-sm" />
            </button>
            <AnimatePresence>
              {openDropdown && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="absolute top-full mt-2 w-56 bg-white text-gray-900 shadow-lg rounded-lg overflow-hidden z-40"
                >
                  <Link to="/new" className="flex items-center gap-2 px-4 py-2 hover:bg-indigo-100">
                    <FaTshirt /> New Products
                  </Link>
                  <Link to="/overall" className="flex items-center gap-2 px-4 py-2 hover:bg-indigo-100">
                    <FaStar /> Overall
                  </Link>
                  <Link to="/faq" className="flex items-center gap-2 px-4 py-2 hover:bg-indigo-100">
                    <FaInfoCircle /> FAQ
                  </Link>
                  <Link to="/map" className="flex items-center gap-2 px-4 py-2 hover:bg-indigo-100">
                    <FaMapMarkerAlt /> Shop Map
                  </Link>
                  <Link to="/support" className="flex items-center gap-2 px-4 py-2 hover:bg-indigo-100">
                    <FaPhone /> Support
                  </Link>
                  <Link to="/trending" className="flex items-center gap-2 px-4 py-2 hover:bg-indigo-100">
                    <FaStar /> Trending
                  </Link>
                  <Link to="/contact" className="flex items-center gap-2 px-4 py-2 hover:bg-indigo-100">
                    <FaPhone /> Contact
                  </Link>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Icons + Mobile Hamburger */}
        <div className="flex items-center space-x-4">
          {/* Cart */}
          <div className="relative hidden md:flex">
            <div className="bg-white w-10 h-10 flex items-center justify-center rounded-full shadow-lg hover:scale-110 transition-transform duration-300">
              <FaShoppingCart className="text-indigo-600 text-lg" />
            </div>
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center shadow-md animate-bounce">
                {cartCount}
              </span>
            )}
          </div>

          {/* Wishlist */}
          <div className="relative hidden md:flex">
            <div className="bg-white w-10 h-10 flex items-center justify-center rounded-full shadow-lg hover:scale-110 transition-transform duration-300">
              <FaHeart className="text-pink-500 text-lg" />
            </div>
            {Wishlist > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center shadow-md animate-bounce">
                {Wishlist}
              </span>
            )}
          </div>

          {/* Hamburger */}
          <button
            onClick={() => setMobileMenu(!mobileMenu)}
            className="md:hidden text-2xl"
          >
            {mobileMenu ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenu && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.4 }}
            className="fixed top-0 right-0 w-3/4 h-full bg-white text-gray-900 shadow-2xl p-6 z-50 flex flex-col"
          >
            <NavLink
              to="/"
              onClick={() => setMobileMenu(false)}
              className="flex items-center gap-2 text-lg mb-2"
            >
              <FaHome /> Home
            </NavLink>
            <NavLink
              to="/electronics"
              onClick={() => setMobileMenu(false)}
              className="flex items-center gap-2 text-lg mb-2"
            >
              <FaMobileAlt /> Electronics
            </NavLink>
            <NavLink
              to="/fashion"
              onClick={() => setMobileMenu(false)}
              className="flex items-center gap-2 text-lg mb-2"
            >
              <FaTshirt /> Fashion
            </NavLink>
            <NavLink
              to="/offers"
              onClick={() => setMobileMenu(false)}
              className="flex items-center gap-2 text-lg mb-2"
            >
              <FaTags /> Offers
            </NavLink>
            <NavLink
              to="/deals"
              onClick={() => setMobileMenu(false)}
              className="flex items-center gap-2 text-lg mb-2"
            >
              <FaStar /> Deals
            </NavLink>

            {/* Mobile Dropdown */}
            <div>
              <button
                onClick={() => setMobileDropdown(!mobileDropdown)}
                className="flex items-center gap-2 text-lg font-semibold mb-2"
              >
                <FaList /> Categories <FaChevronDown />
              </button>
              {mobileDropdown && (
                <div className="ml-6 flex flex-col space-y-2">
                  <Link to="/new" onClick={() => setMobileMenu(false)} className="flex items-center gap-2">
                    <FaTshirt /> New Products
                  </Link>
                  <Link to="/overall" onClick={() => setMobileMenu(false)} className="flex items-center gap-2">
                    <FaStar /> Overall
                  </Link>
                  <Link to="/faq" onClick={() => setMobileMenu(false)} className="flex items-center gap-2">
                    <FaInfoCircle /> FAQ
                  </Link>
                  <Link to="/map" onClick={() => setMobileMenu(false)} className="flex items-center gap-2">
                    <FaMapMarkerAlt /> Shop Map
                  </Link>
                  <Link to="/support" onClick={() => setMobileMenu(false)} className="flex items-center gap-2">
                    <FaPhone /> Support
                  </Link>
                  <Link to="/trending" onClick={() => setMobileMenu(false)} className="flex items-center gap-2">
                    <FaStar /> Trending
                  </Link>
                  <Link to="/contact" onClick={() => setMobileMenu(false)} className="flex items-center gap-2">
                    <FaPhone /> Contact
                  </Link>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;
