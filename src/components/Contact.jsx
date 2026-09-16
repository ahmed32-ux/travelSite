import React from "react";

function Contact() {
  return (
    <section className="min-h-screen bg-gray-50 px-6 py-28">

      {/* Heading */}
      <div className="max-w-7xl mx-auto text-center mb-14">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
          Get In <span className="text-blue-500">Touch</span>
        </h1>

        <p className="mt-4 max-w-2xl mx-auto text-gray-500 leading-relaxed">
          Have a question or want to plan your next adventure?
          Feel free to contact us. We would love to hear from you.
        </p>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">

        {/* Contact Information */}
        <div className="bg-blue-600 text-white rounded-2xl p-8 md:p-10">

          <h2 className="text-2xl font-bold border-b">
            Contact Information
          </h2>

          <p className="mt-4 text-white leading-relaxed">
            Get in touch with us through any of the following methods.
            Our team is always ready to help you plan your perfect trip.
          </p>

          {/* Email */}
          <div className="mt-8">
            <h3 className="font-semibold text-lg">
              Email
            </h3>

            <p className="mt-2 text-white">
              info@xyz.com
            </p>
          </div>

          {/* Phone */}
          <div className="mt-6">
            <h3 className="font-semibold text-lg">
              Phone
            </h3>

            <p className="mt-2 text-white ">
              +92 300 1234567
            </p>
          </div>

          {/* Location */}
          <div className="mt-6">
            <h3 className="font-semibold text-lg ">
              Location
            </h3>

            <p className="mt-2 text-white">
              Lahore, Pakistan
            </p>
          </div>

        </div>

        {/* Contact Form */}
        <div  className="bg-white rounded-2xl shadow-md p-8 md:p-10">

          <h2 className="text-2xl font-bold text-gray-900">
            Send Us a Message
          </h2>

          <form className="mt-8 space-y-5">

            {/* Name */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Your Name
              </label>

              <input
                type="text"
                placeholder="Enter your name"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email Address
              </label>

              <input
                type="email"
                placeholder="Enter your email"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            {/* Message */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Message
              </label>

              <textarea
                rows="5"
                placeholder="Write your message..."
                className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none resize-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              ></textarea>
            </div>

            {/* Button */}
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition duration-300"
            >
              Send Message
            </button>

          </form>

        </div>

      </div>
    </section>
  );
}

export default Contact;