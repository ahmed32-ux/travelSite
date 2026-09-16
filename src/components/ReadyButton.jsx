import React from "react";

function ReadyButton() {
  return (
    <section className="my-12 px-6 bg-gray-100 p-15">
      <div
        className="
          max-w-5xl mx-auto
          bg-blue-600
          rounded-3xl
          px-6 py-12
          md:px-12 md:py-16
          text-center text-white
          shadow-lg
        "
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Ready to Start Your Journey?
        </h2>

        <p className="text-blue-100 mb-7 max-w-2xl mx-auto">
          Let us help you create an unforgettable travel experience.
          Plan your next adventure with TravelSite today.
        </p>

        <button
          className="
            bg-white text-blue-600
            font-semibold
            px-8 py-3
            rounded-full
            hover:bg-gray-100
            transition duration-300
            shadow-md
          "
        >
          Plan Your Trip
        </button>
      </div>
    </section>
  );
}

export default ReadyButton;