import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { loginService } from "../service/SecurityService";
import {
  saveLoginUserInfo,
  storeToken,
  storeTokenWithOut,
} from "../service/token/TokenSession";
import { jwtDecode } from "jwt-decode";
import * as Yup from "yup";
const LoginComponent = () => {
  const [userNameOrEmail, setuse] = useState("");
  const [password, setPassword] = useState("");
  const navigator = useNavigate();

  const validationSchema = Yup.object().shape({
    userNameOrEmail: Yup.string().required("Email is required"),
    password: Yup.string()
      .min(4, "Password must be at least 4 characters")
      .required("Password is required"),
  });
  const handleSubmit = async (e) => {
    e.preventDefault();
    await validationSchema.validate(
      { userNameOrEmail, password },
      { abortEarly: false }
    );
    const data = {
      userNameOrEmail,
      password,
    };
    loginService(data)
      .then((res) => {
        const token = "Bearer " + res.data.accessToken;
        storeToken(token);
        saveLoginUserInfo(userNameOrEmail);
        console.log(userNameOrEmail);
        const decodeToken = jwtDecode(res.data.accessToken);

        let role = decodeToken.role;
        storeTokenWithOut(role);
        if (role === "[ROLE_ADMIN]") {
          navigator("/admin-view");
        } else if (role === "[ROLE_USER]") {
          navigator("/");
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <div className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg p-8">
            <h2 className="text-3xl font-bold text-center mb-8">Login</h2>
            <form onSubmit={handleSubmit}>
              {/* Email Input */}
              <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2">
                  Email
                </label>
                <input
                  type="text"
                  value={userNameOrEmail}
                  onChange={(e) => setuse(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Your Email"
                  required
                />
              </div>

              {/* Password Input */}
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
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg transition duration-300"
              >
                Login
              </button>
              <div className="d-flex mt-2">
                <p>I don't have Account ! </p>{" "}
                <Link to="/register-page">
                  <p className="text-primary ms-2">Register</p>{" "}
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginComponent;
