import React from "react";

const FooterComponent = () => {
  return (
    <>
      <footer className="bg-gray-900 py-10 text-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between md:space-x-10 space-y-8 md:space-y-0">
            {/* About Section */}
            <div className="md:w-1/3">
              <h3 className="text-xl font-bold mb-3">Message</h3>
              <p className="text-gray-400 leading-relaxed">
                We are a luxury hotel dedicated to providing a first-class
                experience to all our guests. Enjoy modern amenities, fine
                dining, and a welcoming atmosphere.
              </p>
            </div>

            {/* Quick Links */}
            <div className="md:w-1/3">
              <h3 className="text-xl font-bold mb-3">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="/"
                    className="text-gray-400 hover:text-gray-200 transition duration-300"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="/rooms"
                    className="text-gray-400 hover:text-gray-200 transition duration-300"
                  >
                    Rooms
                  </a>
                </li>
                <li>
                  <a
                    href="/reservations"
                    className="text-gray-400 hover:text-gray-200 transition duration-300"
                  >
                    Reservations
                  </a>
                </li>
                <li>
                  <a
                    href="/contact"
                    className="text-gray-400 hover:text-gray-200 transition duration-300"
                  >
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact Information */}
            <div className="md:w-1/3">
              <h3 className="text-xl font-bold mb-3">Contact Us</h3>
              <p className="text-gray-400 leading-relaxed">
                123 Luxury Ave, Hotel City, HT 45678
              </p>
              <p className="text-gray-400">Phone: (123) 456-7890</p>
              <p className="text-gray-400">Email: contact@luxhotel.com</p>
            </div>
          </div>

          <div className="mt-10 text-center text-gray-500">
            &copy; 2024 UB Hotel. All rights reserved.
          </div>
        </div>
      </footer>
    </>
  );
};

export default FooterComponent;
