import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

function SignUp() {
  const [name, setName] = useState("");
  const [emailOrPhone, setEmailOrPhone] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignUp = (e) => {
    e.preventDefault();

    if (!name || !emailOrPhone || !password) {
      alert("Please fill in all fields.");
      return;
    }

    alert("Account created successfully!");
    navigate("/login"); // Redirect to login after signup
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-white">
      <div className="w-full max-w-5xl h-[500px] shadow-xl border border-gray-200 rounded-2xl flex overflow-hidden animate-fadeIn">
        
        {/* Left Side: Sign Up Form */}
        <div className="w-full md:w-1/2 bg-white p-10 flex flex-col justify-center items-center">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">Create Account</h2>

          <input
            type="text"
            placeholder="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full max-w-xs p-3 mb-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
            required
          />

          <input
            type="text"
            placeholder="Email or Phone Number"
            value={emailOrPhone}
            onChange={(e) => setEmailOrPhone(e.target.value)}
            className="w-full max-w-xs p-3 mb-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
            required
          />

          <input
            type="password"
            placeholder="Create Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full max-w-xs p-3 mb-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
            required
          />

          <button
            onClick={handleSignUp}
            className="w-full max-w-xs py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold transition"
          >
            Sign Up
          </button>


          <p className="mt-4 text-sm text-gray-600">
            Already have an account?{" "}

                         <Link to="/Login" className="text-blue-600 hover:underline font-medium">
             Log In
            </Link>
         
          </p>
        </div>

        {/* Right Side: Welcome Note */}
        <div className="hidden md:flex w-1/2 bg-gradient-to-tr from-blue-100 to-blue-200 p-10 flex-col justify-center items-center text-center">
          <h1 className="text-4xl font-bold text-blue-800 mb-4">Join Us!</h1>
          <p className="text-gray-700 text-base leading-relaxed max-w-sm">
            Create an account to explore amazing features, manage your profile, and grow with us.
          </p>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
