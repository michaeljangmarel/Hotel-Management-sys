import React, { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import {} from "@heroicons/react";
import {
  getLoggedUserData,
  getRole,
  isUserLogIn,
  logoutSession,
} from "../service/token/TokenSession";
import { CalendarIcon, UserIcon } from "@heroicons/react/16/solid";

const NavbarComponent = () => {
  const isAuth = isUserLogIn();
  const navigate = useNavigate();
  const userInfo = getLoggedUserData();
  const role = getRole();

  const logout = () => {
    logoutSession();
    navigate("/");
  };

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  return (
    <>
      <nav className="bg-gray-800 text-white shadow-lg">
        <div className="container mx-auto flex justify-between items-center py-4 px-6">
          <div className="flex items-center">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgYyr0j48HfR985xhvdr3ybe3RobM0B3mfUg&s"
              alt="Logo"
              className="h-10 w-10 rounded-full"
            />
            <span className="text-2xl font-bold ml-3">UB Hotel</span>
          </div>

          <ul className="hidden md:flex space-x-6">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? "text-orange-400 font-bold"
                    : "text-white hover:text-orange-400 transition duration-300"
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive
                    ? "text-orange-400 font-bold"
                    : "text-white hover:text-orange-400 transition duration-300"
                }
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/service"
                className={({ isActive }) =>
                  isActive
                    ? "text-orange-400 font-bold"
                    : "text-white hover:text-orange-400 transition duration-300"
                }
              >
                Service
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact-us"
                className={({ isActive }) =>
                  isActive
                    ? "text-orange-400 font-bold"
                    : "text-white hover:text-orange-400 transition duration-300"
                }
              >
                Contact
              </NavLink>
            </li>
            {!isAuth && role == "[ROLE_ADMIN]" ? (
              <li>
                <NavLink
                  to="/admin-view"
                  className={({ isActive }) =>
                    isActive
                      ? "text-orange-400 font-bold"
                      : "text-white hover:text-orange-400 transition duration-300"
                  }
                >
                  DashBoard
                </NavLink>
              </li>
            ) : (
              <p></p>
            )}
          </ul>

          {/* Search and Book Now */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Search"
                className="bg-gray-700 text-white rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              <button className="absolute right-0 top-0 bg-blue-600 text-white rounded-full px-4 py-2 hover:bg-blue-500 transition duration-300">
                Search
              </button>
            </div>
            {!isAuth && (
              <div className="flex items-center space-x-4">
              {/* My Reservation Button */}
              <Link
                to="/my-reservation"
                className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded-full transition duration-300 flex items-center space-x-2"
              >
                <span>My Reservation</span>
                <CalendarIcon className="w-5 h-5 text-white" />
              </Link>
            </div>
            )}
          </div>

          {/* Auth Links */}
          <div className="hidden md:flex items-center space-x-4">
            {!isAuth ? (
              <>
                <button className="bg-orange-500 text-white font-bold py-2 px-4 rounded-full flex items-center space-x-2 transition duration-300">
                  <UserIcon className="w-5 h-5 text-white" />
                  <span>{userInfo.toUpperCase()}</span>
                </button>
                <button
                  onClick={logout}
                  className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-full transition duration-300"
                >
                  Logout
                </button>
              </>
            ) : (
              <Link
                to="/register-page"
                className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-full transition duration-300"
              >
                Register
              </Link>
            )}
          </div>
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMobileMenu}
              className="text-white focus:outline-none"
            >
              {isMobileMenuOpen ? "Close" : "Menu"}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden flex flex-col items-center px-6 py-4 space-y-4 bg-gray-700">
            <NavLink
              to="/"
              className="text-white hover:text-orange-400 transition duration-300"
              onClick={toggleMobileMenu}
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              className="text-white hover:text-orange-400 transition duration-300"
              onClick={toggleMobileMenu}
            >
              About
            </NavLink>
            <NavLink
              to="/service"
              className="text-white hover:text-orange-400 transition duration-300"
              onClick={toggleMobileMenu}
            >
              Service
            </NavLink>
            <NavLink
              to="/contact-us"
              className="text-white hover:text-orange-400 transition duration-300"
              onClick={toggleMobileMenu}
            >
              Contact
            </NavLink>

            <div className="flex flex-col space-y-4">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search"
                  className="bg-gray-600 text-white rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
                <button className="absolute right-0 top-0 bg-blue-600 text-white rounded-full px-4 py-2 hover:bg-blue-500 transition duration-300">
                  Search
                </button>
              </div>

              {!isAuth ? (
                <>
                  <button
                    className="bg-orange-500 text-white font-bold py-2 px-4 rounded-full transition duration-300"
                    onClick={toggleMobileMenu}
                  >
                    {userInfo.toLocaleUpperCase()}
                  </button>
                  <button
                    onClick={logout}
                    className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-full transition duration-300"
                  >
                    Logout
                  </button>
                </>
              ) : (
                <Link
                  to="/register-page"
                  className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-full transition duration-300"
                  onClick={toggleMobileMenu}
                >
                  Register
                </Link>
              )}
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default NavbarComponent;
