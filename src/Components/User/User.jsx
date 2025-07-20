// import { useParams, useNavigate } from "react-router-dom";
// import { useEffect } from "react";

// function User() {
//   const { username } = useParams(); // URL se username nikaal rahe hain
//   const navigate = useNavigate();

//   useEffect(() => {
//     const isLoggedIn = localStorage.getItem("isLoggedIn");
//     const loggedInUsername = localStorage.getItem("username");

//     // ✅ Agar login nahi hai ya username match nahi karta
//     if (isLoggedIn !== "true" || loggedInUsername !== username) {
//       alert("Unauthorized! Please log in first.");
//       navigate("/login");
//     }
    
//   }, [username, navigate]);
  // const handleLogout = () => {
  //   localStorage.removeItem("isLoggedIn");
  //   localStorage.removeItem("username");
  //   alert("You are logged out");
  //   navigate("/");
  // };
//   return (
  //  <div className="min-h-screen flex items-center justify-center bg-gray-100">
  //     <div className="bg-white p-8 rounded-2xl shadow-xl text-center w-[90%] max-w-md">
  //       <h1 className="text-3xl font-bold text-gray-800 mb-2">Welcome, {username} 👋</h1>
  //       <p className="text-gray-600 mb-6">You are successfully logged in!</p>
  //       <button
  //         onClick={handleLogout}
  //         className="bg-red-500 text-white px-6 py-2 rounded-full hover:bg-red-600 transition"
  //       >
  //         Logout
  //       </button>
  //     </div>
  //   </div>
//   );
// }

// export default User;



import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

function User() {
  const { username } = useParams();
  const navigate = useNavigate();
  const [isAuthorized, setIsAuthorized] = useState(null); // null = loading phase

  useEffect(() => {
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    const loggedInUsername = localStorage.getItem("username");

    if (isLoggedIn === "true" && loggedInUsername === username) {
      setIsAuthorized(true); // allow render
    } else {
      alert("Unauthorized! Please log in first.");
      navigate("/login");
    }
  }, [username, navigate]);

  if (isAuthorized === null) return null; // ⏳ wait jab tak auth check ho

    const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("username");
    alert("You are logged out");
    navigate("/");
  };

  return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-2xl shadow-xl text-center w-[90%] max-w-md">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">Welcome, {username} 👋</h1>
        <p className="text-gray-600 mb-6">You are successfully logged in!</p>
        <button
          onClick={handleLogout}
          className="bg-red-500 text-white px-6 py-2 rounded-full hover:bg-red-600 transition"
        >
          Logout
        </button>
      </div>
    </div>
  );
}

export default User;
