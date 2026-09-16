import React from "react";
import OurServices from "./OurServices";

function ServicesHome() {
  return (
    <section className="py-20 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">

        {/* Image */}
        <div className="relative mb-16 mt-5 overflow-hidden rounded-3xl shadow-xl">
          <img
            src="https://images.unsplash.com/photo-1510798831971-661eb04b3739?auto=format&fit=crop&w=1600&q=80"
            alt="Beautiful mountain house"
            className="w-full h-[300px] md:h-[450px] object-cover"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/20"></div>

          {/* Image Text */}
          <div className="absolute inset-0 flex items-center justify-center text-center">
            <div className="text-white px-6">
              <h2 className="text-3xl md:text-5xl font-bold mb-3">
                Travel With Confidence
              </h2>

              <p className="text-base md:text-lg">
                Everything you need for a perfect journey
              </p>
            </div>
          </div>
        </div>

        {/* Heading */}
        <OurServices />

        {/* Services Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {/* Card 1 */}
          <div className="bg-white rounded-2xl p-8 text-center shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
            <div className="w-16 h-16 mx-auto mb-5 rounded-full bg-blue-100 flex items-center justify-center text-3xl">
              ✈️
            </div>

            <h3 className="text-xl font-bold text-gray-800 mb-3">
              Flight Booking
            </h3>

            <p className="text-gray-600 leading-relaxed">
              Find and book comfortable flights at affordable prices for your
              next adventure.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-2xl p-8 text-center shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
            <div className="w-16 h-16 mx-auto mb-5 rounded-full bg-blue-100 flex items-center justify-center text-3xl">
              🏨
            </div>

            <h3 className="text-xl font-bold text-gray-800 mb-3">
              Hotel Booking
            </h3>

            <p className="text-gray-600 leading-relaxed">
              Stay at comfortable and carefully selected hotels that fit your
              travel needs.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-2xl p-8 text-center shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
            <div className="w-16 h-16 mx-auto mb-5 rounded-full bg-blue-100 flex items-center justify-center text-3xl">
              🗺️
            </div>

            <h3 className="text-xl font-bold text-gray-800 mb-3">
              Travel Planning
            </h3>

            <p className="text-gray-600 leading-relaxed">
              Let us help you plan your perfect trip with a smooth and
              memorable travel experience.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}

export default ServicesHome;