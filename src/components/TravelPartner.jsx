import React from 'react'

function TravelPartner() {
  return (

      <section className="px-6 py-20">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

          {/* Image */}
          <div className="h-96 rounded-3xl overflow-hidden shadow-lg">
            <img
              src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=900&q=80"
              alt="Travel destination"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text */}
          <div>
            <p className="text-blue-600 font-semibold mb-3">
              Who We Are
            </p>

            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-5">
              Your Trusted Travel Partner
            </h2>

            <p className="text-gray-600 leading-7 mb-5">
              At TravelSite, we believe that traveling is more than just
              visiting new places. It's about creating memories,
              experiencing different cultures, and discovering something
              new about yourself.
            </p>

            <p className="text-gray-600 leading-7 mb-8">
              Our goal is to make travel simple, exciting, and accessible
              for everyone. From beautiful destinations to carefully
              planned travel packages, we're here to help you every step
              of the way.
            </p>

            <button className="bg-blue-600 hover:bg-blue-700 text-white px-7 py-3 rounded-full font-semibold transition duration-300">
              Discover More
            </button>
          </div>

        </div>
      </section>
  )
}

export default TravelPartner