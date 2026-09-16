import React from "react";
import { Link } from "react-router-dom";

function HeroImage() {
  return (
    <section
      className="
        min-h-screen
        flex items-center justify-center
        px-6 pt-24
        bg-cover bg-center bg-no-repeat
        relative
      "
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1555881400-74d7acaacd8b?auto=format&fit=crop&w=1600&q=80')",
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/70"></div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-3xl mx-auto">
        
        {/* Small Heading */}
        <p className="text-blue-600 font-semibold text-lg md:text-xl mb-4">
          ✈️ Explore <span className="text-white">The World</span>
        </p>

        {/* Main Heading */}
        <h1
          className="
            text-4xl
            sm:text-5xl
            md:text-7xl
            font-bold
            text-white
            leading-tight
          "
        >
          Discover Your Next
          <span className="text-blue-600"> Adventure</span>
        </h1>

        {/* Description */}
        <p
          className="
            mt-6
            text-white
            text-base
            sm:text-lg
            md:text-xl
            leading-relaxed
          "
        >
          Explore beautiful destinations, discover amazing places,
          and create unforgettable memories around the world.
        </p>

        {/* Buttons */}
        <div
          className="
            mt-8
            flex
            flex-col
            sm:flex-row
            gap-4
            justify-center
            items-center
          "
        >
          {/* Explore Button */}
          <button
            className="
              w-full sm:w-auto
              bg-blue-600
              hover:bg-blue-700
              text-white
              px-8 py-3
              rounded-full
              font-semibold
              transition duration-300
              shadow-md
              hover:shadow-lg
            "
          >
            Explore Now
          </button>

          {/* Services / Packages Button */}
          <Link
            to="/services"
            className="
              w-full sm:w-auto
              border border-gray-300
              bg-white
              hover:bg-gray-50
              text-gray-700
              px-8 py-3
              rounded-full
              font-semibold
              transition duration-300
              shadow-sm
              text-center
            "
          >
            View Packages
          </Link>
        </div>
      </div>
    </section>
  );
}

export default HeroImage;