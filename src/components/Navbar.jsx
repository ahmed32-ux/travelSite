import React from 'react'
import { Link, Links, NavLink } from "react-router-dom";
import { useState } from 'react';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navLinks = [
    { name: "Home", path: "/"},
    { name: "About", path: "/about"},
    { name: "Contact", path: "/contact"},
    { name: "Services", path: "/services"},
  ]
  return (
    <NavLink>
        <nav className="fixed top-0 left-0 w-full z-50 bg-white/95 backdrop-blur-md shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

          {/* Logo */}
          <div>
            <Link to="/"><h1 className="text-2xl font-bold text-gray-800">
              Travel<span className="text-blue-600">Site</span>
            </h1></Link>
          </div>

      {/*Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `transition duration-300 ${
                  isActive
                    ? "text-blue-500 font-medium"
                    : "text-gray-600"
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </div>
          {/* Mobile Links  */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-700 text-3xl focus:outline-none"
            >
            {isOpen? "✕" : "☰"}
          </button>
          {/* Mobile Menu */}
            {isOpen && (
            <div className="md:hidden absolute top-full right-0 w-full bg-white shadow-lg border-t border-gray-100">
              
              <div className="flex flex-col px-6 py-6 gap-5">

                {navLinks.map((link) => (
                  <NavLink
                    key={link.path}
                    to={link.path}
                    onClick={() => setIsOpen(false)}
                    className={({ isActive }) =>
                      `transition duration-300 hover:border-b ${
                        isActive
                          ? "text-blue-500 font-medium"
                          : "text-gray-600 hover:text-blue-500"
                      }`
                    }
                  >
                    {link.name}
                  </NavLink>
                ))}

                {/* Sign Up */}
                <button
                  className="bg-blue-600 hover:bg-blue-700 text-white font-medium
                  px-6 py-3 rounded transition duration-300
                  shadow-md hover:shadow-lg"
                >
                  Sign Up
                </button>

              </div>
            </div>
          )}

        {/* SignUp Button */}
          <div className="hidden md:block " >
            <button
              className="bg-blue-600 hover:bg-blue-700 text-white font-medium
              px-6 py-3 rounded transition duration-300
              shadow-md hover:shadow-lg "
            >
              Sign Up
            </button>
          </div>

        </div>
      </nav>

    </NavLink>
  )
}

export default Navbar