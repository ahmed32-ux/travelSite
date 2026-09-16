
import React from "react";
import AboutImage from "./AboutImage";
import TravelPartner from "./TravelPartner"

function About() {
  return (
    <>
      <AboutImage />
      <TravelPartner /> 


      {/* Stats */}
      <section className="bg-gray-50 px-6 py-16">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">

          <div>
            <h3 className="text-3xl font-bold text-blue-600">50+</h3>
            <p className="text-gray-600 mt-2">Destinations</p>
          </div>

          <div>
            <h3 className="text-3xl font-bold text-blue-600">10K+</h3>
            <p className="text-gray-600 mt-2">Happy Travelers</p>
          </div>

          <div>
            <h3 className="text-3xl font-bold text-blue-600">100+</h3>
            <p className="text-gray-600 mt-2">Travel Packages</p>
          </div>

          <div>
            <h3 className="text-3xl font-bold text-blue-600">5+</h3>
            <p className="text-gray-600 mt-2">Years Experience</p>
          </div>

        </div>
      </section>

    </>
  );
}

export default About;