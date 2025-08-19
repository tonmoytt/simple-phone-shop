import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaYoutube, FaLinkedinIn, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-200 pt-12">
      {/* Top Section: Logo + About + Newsletter */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        
        {/* Logo + About */}
        <div className="flex flex-col">
          <h2 className="text-2xl font-bold text-white mb-3">GadgetHeaven</h2>
          <p className="text-gray-400 mb-4">
            Leading the way in innovative tech solutions since 1992. We provide reliable devices, accessories, and cutting-edge gadgets.
          </p>
          <div className="flex gap-3 mt-2">
            <a href="#" className="p-2 rounded-full bg-blue-600 hover:bg-blue-700 transition"><FaFacebookF /></a>
            <a href="#" className="p-2 rounded-full bg-sky-400 hover:bg-sky-500 transition"><FaTwitter /></a>
            <a href="#" className="p-2 rounded-full bg-red-600 hover:bg-red-700 transition"><FaYoutube /></a>
            <a href="#" className="p-2 rounded-full bg-blue-800 hover:bg-blue-900 transition"><FaLinkedinIn /></a>
            <a href="#" className="p-2 rounded-full bg-pink-500 hover:bg-pink-600 transition"><FaInstagram /></a>
          </div>
        </div>

        {/* Quick Links */}
        <div className='hidden md:block text-start'>
          <h3 className="text-xl font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-2 text-gray-400">
            <li><Link to="/" className="hover:text-white transition">Home</Link></li>
            <li><Link to="/about" className="hover:text-white transition">About Us</Link></li>
            <li><Link to="/shop" className="hover:text-white transition">Shop</Link></li>
            <li><Link to="/contact" className="hover:text-white transition">Contact</Link></li>
            <li><Link to="/blog" className="hover:text-white transition">Blog</Link></li>
            <li><Link to="/faq" className="hover:text-white transition">FAQ</Link></li>
          </ul>
        </div>

        {/* Newsletter + Contact */}
        <div className="flex flex-col">
          <h3 className="text-xl font-semibold text-white mb-4">Newsletter</h3>
          <p className="text-gray-400 mb-3">Subscribe to our newsletter for latest updates and exclusive offers.</p>
          <form className="flex flex-col sm:flex-row gap-2">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="p-2 rounded-md flex-1 focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 w-full"
            />
            <button 
              type="submit" 
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition w-full sm:w-auto"
            >
              Subscribe
            </button>
          </form>

          <div className="mt-6">
            <h3 className="text-xl font-semibold text-white mb-2">Contact</h3>
            <p className="text-gray-400">123 Tech Avenue, Silicon Valley, CA</p>
            <p className="text-gray-400">Phone: +1 234 567 890</p>
            <p className="text-gray-400">Email: support@gadgetheaven.com</p>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-700 my-8"></div>

      {/* Bottom Section: Legal + Payments */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm gap-4 md:gap-0">
        <p>© 2025 GadgetHeaven. All rights reserved.</p>
        <div className="flex gap-4">
          <img src="https://www.svgrepo.com/show/303279/visa-logo.svg" alt="Visa" className="h-6"/>
          <img src="https://www.svgrepo.com/show/303263/mastercard-logo.svg" alt="MasterCard" className="h-6"/>
          <img src="https://www.svgrepo.com/show/303275/paypal.svg" alt="PayPal" className="h-6"/>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
