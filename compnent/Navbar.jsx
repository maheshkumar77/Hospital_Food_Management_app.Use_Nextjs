"use client"
import Link from 'next/link';
import React, { useState } from 'react';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="w-full bg-blue-500 ">
      <nav className="flex items-center justify-between px-6 py-4 max-w-screen-xl mx-auto ">
        {/* Logo */}
        <div className="text-white font-bold text-2xl float-start">
          <Link href="/">
            <p>Hospital Dashboard</p>
          </Link>
        </div>

        {/* Navigation Links */}
        <div className="flex md:flex gap-7 flex-row float-end border-2 border-emerald-900">
          {/* Signup and Login Buttons */}
          <Link href="/signup">
            <p className="py-2 px-4 bg-green-500 text-white rounded-lg hover:bg-green-400 transition duration-300">
              Signup
            </p>
          </Link>
          <Link href="/login">
            <p className="py-2 px-4 bg-blue-600 text-white rounded-lg hover:bg-blue-500 transition duration-300">
              Login
            </p>
          </Link>
          <Link href="/manager">
            <p className="py-2 px-4 bg-blue-600 text-white rounded-lg hover:bg-blue-500 transition duration-300">
              Manager
            </p>
          </Link>
          <Link href="/pentry">
            <p className="py-2 px-4 bg-blue-600 text-white rounded-lg hover:bg-blue-500 transition duration-300">
              pentry
            </p>
            </Link>
            <Link href="/pentry2">
            <p className="py-2 px-4 bg-blue-600 text-white rounded-lg hover:bg-blue-500 transition duration-300">
              pentry2
            </p>
          </Link>
          
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button className="text-white text-xl" onClick={toggleMenu}>
            <i className={`fas fa-bars ${isMobileMenuOpen ? 'fa-times' : ''}`}></i>
          </button>
        </div>
      </nav>

      {/* Mobile Dropdown (hidden for desktop) */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-blue-600 p-4 flex flex-col gap-4">
         
          <Link href="/signup">
            <p className="text-white py-2 px-4">Signup</p>
          </Link>
          <Link href="/login">
            <p className="text-white py-2 px-4">Login</p>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;
