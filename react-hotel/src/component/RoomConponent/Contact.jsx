import React, { useState } from "react";
import { getLoggedUserData, isUserLogIn } from "../service/token/TokenSession";
import Middleware from "../service/token/Middleware";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { saveContact } from "../service/Room.service";

const Contact = () => {
  const isAuth = isUserLogIn();
  const username = getLoggedUserData();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [guest, setGuest] = useState(username);
  const [error, setError] = useState({});
  const navigator = useNavigate();
  const [isSuceess, setSuccess] = useState(false);
  const contactSubmit = (e) => {
    e.preventDefault();
    const validateError = {};
    if (!name) validateError.name = "Name is required";
    if (!email) validateError.email = "Email is required";
    if (!message) validateError.message = "Message is required";

    if (Object.keys(validateError).length > 0) {
      setError(validateError);
    } else {
      setError({});
      const data = {
        name,
        email,
        message,
        guest,
      };
      console.log(data);

      saveContact(data)
        .then((res) => {
          setSuccess(true);
          setName("");
          setEmail("");
          setMessage("")
        })
        .catch((err) => console.log(err));
    }
  };
  return (
    <>
      <div className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          {isSuceess && (
            <div
              className="mt-4 bg-green-100 mb-3 border-t border-b border-green-500 text-green-700 px-4 py-3"
              role="alert"
            >
              <p className="font-bold">Success!</p>
              <p>Thank You For Your Review. Have A Great Day.</p>
            </div>
          )}
          <h2 className="text-3xl text-orange-400 text-center mb-12">
            Contact Us
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Contact Form */}
            <div className="bg-white shadow-lg rounded-lg p-8">
              <h3 className="text-2xl font-bold mb-6">Send Us a Message</h3>
              <form>
                <div className="mb-4">
                  <label className="block text-gray-700 font-bold mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Your Name"
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                  />
                  {error.name && (
                    <span className="text-red-500">{error.name}</span>
                  )}
                </div>

                <div className="mb-4">
                  <label className="block text-gray-700 font-bold mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Your Email"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                  />
                  {error.email && (
                    <span className="text-red-500">{error.email}</span>
                  )}
                </div>

                <div className="mb-4">
                  <label className="block text-gray-700 font-bold mb-2">
                    Message
                  </label>
                  <textarea
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    rows="5"
                    placeholder="Your Message"
                    onChange={(e) => setMessage(e.target.value)}
                    value={message}
                  ></textarea>
                  {error.message && (
                    <span className="text-red-500">{error.message}</span>
                  )}
                </div>

                {!isAuth ? (
                  <button
                    type="submit"
                    onClick={contactSubmit}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg transition duration-300"
                  >
                    Submit
                  </button>
                ) : (
                  <Link
                    to="/login-page"
                    type="submit"
                    className="w-full text-center bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg transition duration-300"
                  >
                    Submit
                  </Link>
                )}
              </form>
            </div>

            {/* Contact Details */}
            <div className="bg-white shadow-lg rounded-lg p-8">
              <h3 className="text-2xl font-bold mb-6">Get in Touch</h3>
              <p className="text-gray-600 mb-4">
                Have questions or need assistance? Feel free to contact us.
              </p>
              <ul className="text-gray-700">
                <li className="mb-4">
                  <strong>Address:</strong> 123 Luxury Lane, Cityville, 12345
                </li>
                <li className="mb-4">
                  <strong>Phone:</strong> +1 (555) 123-4567
                </li>
                <li className="mb-4">
                  <strong>Email:</strong> contact@luxuryhotel.com
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
