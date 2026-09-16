import React from "react";

function OurServices() {
  return (
    <section className="bg-gray-50 py-16 px-6">
      <div className="max-w-3xl mx-auto text-center">

        {/* Small Heading */}
        <p className="text-blue-600 font-semibold uppercase tracking-wider mb-3">
          What We Offer
        </p>

        {/* Main Heading */}
        <h1 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-5">
          Our <span className="text-blue-600">Services</span>
        </h1>

        {/* Description */}
        <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
          We provide everything you need to make your journey comfortable,
          exciting, and completely stress-free.
        </p>

      </div>
    </section>
  );
}

export default OurServices;