import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";

import {
  NavLink,
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

import About from "./components/about/About.jsx";
import Projects from "./components/projects/Projects.jsx";
import Login from "./components/login/Login.jsx";
import Datas from "./components/data/Datas.jsx";
import App from "./App";
import ProtectedRoutes from "./components/ProtectedRoutes";
import HeroSection from "./components/hero/HeroSection.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
  
    <Route path="/" element={<App />}>
      <Route path="/" element={<HeroSection/>} />
      <Route path="login" element={<Login />} />
      
      <Route
        path="about"
        element={
          <ProtectedRoutes>
            <About />
          </ProtectedRoutes>
        }
      />
      <Route
        path="blog"
        element={
          <ProtectedRoutes>
            <Datas />
          </ProtectedRoutes>
        }
      />
      <Route
        path="navlinks"
        element={
          <ProtectedRoutes>
            {" "}
            <NavLink />
          </ProtectedRoutes>
        }
      />
      <Route
        path="projects"
        element={
          <ProtectedRoutes>
            <Projects />
          </ProtectedRoutes>
        }
      />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
