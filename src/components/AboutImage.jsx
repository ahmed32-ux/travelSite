import React from "react";

function AboutImage() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">

      {/* Background Image */}
      <img
        src="https://images.unsplash.com/photo-1539037116277-4db20889f2d4?auto=format&fit=crop&w=1600&q=80"
        alt="Beautiful view of Granada"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center px-6">

        {/* Small Heading */}
        <p className="text-white font-semibold text-lg md:text-xl mb-4">
          About TravelSite
        </p>

        {/* Main Heading */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight">
          We Make Your
          <span className="text-blue-600"> Journey Special</span>
        </h1>

        {/* Description */}
        <p className="max-w-2xl mx-auto mt-6 text-white/90 text-base sm:text-lg md:text-xl leading-relaxed">
          TravelSite helps you discover beautiful destinations, plan
          unforgettable trips, and experience the world in a whole
          new way.
        </p>

      </div>
    </section>
  );
}

export default AboutImage;