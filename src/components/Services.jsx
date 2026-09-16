import ServicesHome from "./ServicesHome";
import ReadyButton from "./ReadyButton";

import flightImage from "../assets/flight.jpg";
import hotelImage from "../assets/hotel2.jpg";
import tourImage from "../assets/t1.jpg";
import carImage from "../assets/cars.jpg";
import guideImage from "../assets/flight1.jpg";
import planningImage from "../assets/about.jpg";
function Services() {
  const services = [
    {
      image: flightImage,
      title: "Flight Booking",
      description:
        "Find and book affordable flights to your favorite destinations with ease.",
    },
    {
      image: hotelImage,
      title: "Hotel Booking",
      description:
        "Book comfortable hotels and stays at the best prices for your trip.",
    },
    {
      image: tourImage,
      title: "Tour Packages",
      description:
        "Explore our exciting tour packages designed for unforgettable travel experiences.",
    },
    {
      image: carImage,
      title: "Car Rental",
      description:
        "Rent reliable and comfortable cars to explore your destination freely.",
    },
    {
      image: guideImage,
      title: "Travel Guide",
      description:
        "Get useful travel guides, tips, and recommendations for your journey.",
    },
    {
      image: planningImage,
      title: "Travel Planning",
      description:
        "Let us help you plan your perfect trip from start to finish.",
    },
  ];

  return (
    <>
      {/* Services Hero Section */}
      <ServicesHome />

      {/* Services Cards Section */}
      <section className="bg-gray-50 px-6 py-16">
        <div className="max-w-7xl mx-auto">

          {/* Heading */}
          <div className="text-center mb-12">
            <p className="text-blue-600 font-semibold uppercase tracking-wider mb-3">
              What We Offer
            </p>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Our <span className="text-blue-600">Services</span>
            </h1>

            <p className="max-w-2xl mx-auto text-gray-600 text-base sm:text-lg leading-relaxed">
              Everything you need for a comfortable, exciting, and
              unforgettable journey.
            </p>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div
                key={service.title}
                className="
                  bg-white
                  rounded-2xl
                  overflow-hidden
                  border border-gray-100
                  shadow-sm
                  hover:shadow-xl
                  hover:-translate-y-2
                  transition-all
                  duration-300
                "
              >
                {/* Image */}
                <div className="overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="
                      w-full
                      h-52
                      sm:h-56
                      object-cover
                      hover:scale-105
                      transition-transform
                      duration-500
                    "
                  />
                </div>

                {/* Card Content */}
                <div className="p-6 sm:p-8">
                  <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-3">
                    {service.title}
                  </h2>

                  <p className="text-gray-600 leading-relaxed mb-6">
                    {service.description}
                  </p>

                  <button
                    className="
                      text-blue-600
                      font-semibold
                      hover:text-blue-800
                      transition-colors
                      duration-300
                    "
                  >
                    Learn More →
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-16 sm:mt-20">
            <ReadyButton />
          </div>

        </div>
      </section>
    </>
  );
}

export default Services;