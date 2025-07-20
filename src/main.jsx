import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
import Home from "./Components/Home";
import About from "./Components/About.jsx";
import Contact from "./Components/Contact.jsx";
import User from "./Components/User/User.jsx";
import Login from "./Components/User/Login.jsx";
import Layout from "./Components/Layout.jsx";
import SignUp from "./Components/User/Signup.jsx";
import GitHub, { githubInfoLoader } from "./Components/GitHub.jsx";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <App />,
//     children: [
//       {
//         path: "",
//         element: <Home />,
//       },
//       {
//         path: "/About",
//         element: <About />,
//       },
//       {
//         path: "/Contact",
//         element: <Contact/>,
//       }
//     ],
//   },
// ]);

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<App />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route loader={githubInfoLoader} path="github" element={<GitHub />} />
      </Route>

      <Route element={<Layout />}>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Route>
        <Route path="user/:username" element={<User />} />
    </>
  )
);

createRoot(document.getElementById("root")).render(
    <RouterProvider router={router} />
);
