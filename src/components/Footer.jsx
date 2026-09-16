import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-6 py-14">

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">

          {/* Logo & About */}
          <div>
            <h1 className="text-2xl font-bold">
              Travel<span className="text-blue-500">Site</span>
            </h1>

            <p className="mt-4 max-w-sm text-gray-400 leading-relaxed">
              Discover beautiful destinations, explore amazing places, and
              create unforgettable memories around the world.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h2 className="text-lg font-bold mb-5">
              Quick Links
            </h2>

            <ul className="flex flex-col gap-3">
              <li>
                <Link
                  to="/"
                  className="text-gray-400 hover:text-blue-500 transition"
                >
                  Home
                </Link>
              </li>

              <li>
                <Link
                  to="/about"
                  className="text-gray-400 hover:text-blue-500 transition"
                >
                  About
                </Link>
              </li>

              <li>
                <Link
                  to="/services"
                  className="text-gray-400 hover:text-blue-500 transition"
                >
                  Services
                </Link>
              </li>

              <li>
                <Link
                  to="/contact"
                  className="text-gray-400 hover:text-blue-500 transition"
                >
                  Contact US
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h2 className="text-lg font-bold mb-5">
              Follow Us
            </h2>

            <div className="flex flex-col gap-4">
              <a
                href="#"
                className="text-gray-400 hover:text-blue-500 transition"
              >
                Facebook
              </a>

              <a
                href="#"
                className="text-gray-400 hover:text-blue-500 transition"
              >
                Instagram
              </a>

              <a
                href="#"
                className="text-gray-400 hover:text-blue-500 transition"
              >
                Twitter
              </a>
            </div>
          </div>

        </div>

        {/* Bottom */}
        <div className="border-t border-gray-700 mt-5 pt-6 text-center">
          <p className="text-gray-500 text-sm">
            © 2026 Travel Site. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
}

export default Footer;