import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { registerService } from "../service/SecurityService";
import { saveLoginUserInfo, storeToken } from "../service/token/TokenSession";
import * as Yup from "yup";
const RegisterComponent = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const navigator = useNavigate();
  const [errors, setError] = useState({});

  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    phone: Yup.string()
      .matches(/^\d{10}$/, "Phone number must be 10 digits")
      .required("Phone is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
  });
  const HandleRegister = async (e) => {
    e.preventDefault();
    try {
      // Validate the form fields using Yup
      await validationSchema.validate(
        { name, email, phone, password },
        { abortEarly: false }
      );

      // If validation is successful, clear errors
      setError({});

      // Prepare form data
      const data = { name, email, phone, password };

      // Register user service call
      registerService(data)
        .then((res) => {
          const token = "Basic " + window.btoa(data.name + ":" + data.password);
          storeToken(token);
          saveLoginUserInfo(name);
          navigator("/");
          alert("Register Successful");
          window.location.reload(false);
        })
        .catch((err) => {
          console.error(err);
        });
    } catch (err) {
      // Format and set validation errors for UI display
      const formattedErrors = err.inner.reduce((acc, error) => {
        return { ...acc, [error.path]: error.message };
      }, {});
      setError(formattedErrors);
    }
  };
  // const HandleRegister = async (e) => {
  //   e.preventDefault();
  //   await validationSchema.validate(
  //     { name, email, phone, password },
  //     { abortEarly: false }
  //   );

  //   const data = { name, email, phone, password };
  //   registerService(data)
  //     .then((res) => {
  //       const token = "Basic " + window.btoa(data.name + ":" + data.password);
  //       storeToken(token);
  //       saveLoginUserInfo(name);
  //       navigator("/");
  //       alert("Register Successful");
  //       window.location.reload(false);
  //     })
  //     .catch((err) => {
  //       const formattedErrors = err.inner.reduce((acc, error) => {
  //         return { ...acc, [error.path]: error.message };
  //       }, {});
  //       setError(formattedErrors);
  //     });
  // };
  return (
    <>
      <div className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg p-8">
            <h2 className="text-3xl font-bold text-center mb-8">Register</h2>
            <form>
              <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2">
                  Name
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Your Name"
                  required
                />
              </div>
              {errors.name && (
                <p className="text-red-500 text-sm mt-1">{errors.name}</p>
              )}
              <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2">
                  Email
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className={`w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${errors.name ? "is-invalid" : ""}`}
                  placeholder="Your Email"
                  required
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                )}
              </div>

              {/* Phone Input */}
              <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2">
                  Phone
                </label>
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Your Phone Number"
                  required
                />
                {errors.phone && (
                  <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
                )}
              </div>

              <div className="mb-6">
                <label className="block text-gray-700 font-bold mb-2">
                  Password
                </label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Your Password"
                  required
                />
                {errors.password && (
                  <p className="text-red-500 text-sm mt-1">{errors.password}</p>
                )}
              </div>

              <button
                type="submit"
                onClick={HandleRegister}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg transition duration-300"
              >
                Register
              </button>
              <div className="d-flex mt-2">
                <p>already have Account ?</p>{" "}
                <NavLink
                  to="/login-page"
                  className="text-blue-700 underline-offset-1"
                >
                  Log In here
                </NavLink>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default RegisterComponent;
