import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi'; // Import icons
import logo from '../imagesserts/Union.png';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false); // State to manage menu visibility

  return (
    <div className="w-full bg-white flex items-center justify-between px-6 h-[60px] ">
 
      <div className="flex items-center">
        <img src={logo} alt="Logo" className="w-[105px] h-[25px]" />
      </div>

     
      <div className="hidden xl:flex md:flex sm:flex font-semibold items-center space-x-10">
        <Link to="/products" className="text-black hover:text-orange-500">Products</Link>
        <Link to="/" className="text-black hover:text-orange-500">Home</Link>
        <Link to="/shop" className="text-black hover:text-orange-500">Shop</Link>
        <Link to="/integration" className="text-black hover:text-orange-500">Integration</Link>
        <Link to="/developers" className="text-black hover:text-orange-500">Developers</Link>
      </div>

      
      <div className="lg:hidden flex items-center">
        {menuOpen ? (
          <FiX
            size={24}
            className="cursor-pointer text-black"
            onClick={() => setMenuOpen(false)}
          />
        ) : (
          <FiMenu
            size={24}
            className="cursor-pointer text-black"
            onClick={() => setMenuOpen(true)}
          />
        )}
      </div>

     
      <div className="hidden xl:flex md:flex sm:flex items-center space-x-4">
        <Link to="/login" className="text-black hover:text-orange-500">Login</Link>
        <Link
          to="/register"
          className="bg-orange-500 text-white py-2 px-8 rounded-full text-center hover:bg-orange-600 transition-all"
        >
          Start for Free
        </Link>
      </div>

      
      <div
        className={`absolute top-0 right-0 w-2/3 h-full bg-orange-500 text-white shadow-lg z-50 transform transition-all duration-300 ${menuOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <div className="flex flex-col items-center space-y-4 py-4">
          <Link to="/products" className="text-white hover:text-orange-500" onClick={() => setMenuOpen(false)}>Products</Link>
          <Link to="/" className="text-white hover:text-orange-500" onClick={() => setMenuOpen(false)}>Home</Link>
          <Link to="/shop" className="text-white hover:text-orange-500" onClick={() => setMenuOpen(false)}>Shop</Link>
          <Link to="/integration" className="text-white hover:text-orange-500" onClick={() => setMenuOpen(false)}>Integration</Link>
          <Link to="/developers" className="text-white hover:text-orange-500" onClick={() => setMenuOpen(false)}>Developers</Link>
          <Link to="/login" className="text-white hover:text-orange-500" onClick={() => setMenuOpen(false)}>Login</Link>
          <Link
            to="/register"
            className="bg-orange-500 text-white py-2 px-8 rounded-full text-center hover:bg-orange-600 transition-all"
            onClick={() => setMenuOpen(false)}
          >
            Start for Free
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;