import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import User from "./User";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  const validUsernames = ["Dhruv", "dhruv@22.com", "9876543210"];
  const validPassword = "123456";

  const handleLogin = () => {
    const isUsernameValid = validUsernames.includes(username);
    if (username.trim() === "" || password.trim() === "") {
      alert("Please enter both username and password.");
    } else if (isUsernameValid && password === validPassword) {
      alert("You are Successfully Logged In");

      localStorage.setItem("isLoggedIn", "true");
      localStorage.setItem("username", username);

      navigate(`/user/${username}`);
    } else {
      alert("Incorrect credentials.");
    }
  };

  return (
    <>
      {!isLoggedIn ? (
        <div className="min-h-screen w-full flex items-center justify-center bg-white">
          <div className="w-full max-w-5xl h-[500px] shadow-xl border border-gray-200 rounded-2xl flex overflow-hidden animate-fadeIn">
            
            {/* Left: Login Form */}
            <div className="w-full md:w-1/2 bg-white p-10 flex flex-col justify-center items-center">
              <h2 className="text-3xl font-bold mb-6 text-gray-800">Login</h2>

              <input
                type="text"
                placeholder="Phone number, username, or email"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full max-w-xs p-3 mb-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                required
              />

              <input
                type="password"
                placeholder="Enter Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full max-w-xs p-3 mb-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                required
              />

              <button
                onClick={handleLogin}
                className="w-full max-w-xs py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold transition"
              >
                Log In
              </button>

              <p className="mt-4 text-sm text-gray-600">
                Don’t have an account?{" "}
             <Link to="/signup" className="text-blue-600 hover:underline font-medium">
  Sign Up
</Link>

              </p>
            </div>

            {/* Right: Welcome Note */}
            <div className="hidden md:flex w-1/2 bg-gradient-to-tr from-blue-100 to-blue-200 p-10 flex-col justify-center items-center text-center">
              <h1 className="text-4xl font-bold text-blue-800 mb-4">Welcome Back!</h1>
              <p className="text-gray-700 text-base leading-relaxed max-w-sm">
                Log in to access your dashboard, manage your profile, and explore exclusive features.
              </p>
            </div>
          </div>
        </div>
      ) : (
        <User />
      )}
    </>
  );
}

export default Login;
