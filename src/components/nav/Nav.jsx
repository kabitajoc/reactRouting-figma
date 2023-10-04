import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import logo from "../../assets/Images/NordicLogo.png";
import HamburgerMenu from "../HamburgerMenu";
import { useMediaQuery } from "react-responsive";

function Nav() {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const isMediumOrSmallScreen = useMediaQuery({ maxWidth: 768 }); // Define screen size

  useEffect(() => {
    const email = localStorage.getItem("email");
    const password = localStorage.getItem("password");
    const loggedIn = !!email && !!password;

    setIsLoggedIn(loggedIn);
  }); // Add an empty dependency array to useEffect to run it once on component mount

  const handleLogout = () => {
    localStorage.removeItem("email");
    localStorage.removeItem("password");
    setIsLoggedIn(false);
    navigate("/login");
  };
  const logoWidthClass = isMediumOrSmallScreen ? "w-32" : "w-40";

  return (
    <div className="bg-slate-300 relative text-black px-4 py-2 gap-20  text-center items-center">
      <div className=" inline-block absolute left-3 top-7 ">
        {isMediumOrSmallScreen && (
          <HamburgerMenu /> // Render HamburgerMenu on small screens
        )}
      </div>
      <div className=" inline-block items-center justify-center mx-5 my-auto">
        <img src={logo} className={`${logoWidthClass} h-auto`} alt="Logo" />
      </div>

      {!isMediumOrSmallScreen && ( // Render navigation links only on medium and large screens
        <div className=" space-x-6 inline-block ">
          <NavLink to="/" className="ml-4 text-lg font-semibold">
            Home
          </NavLink>
          <NavLink to="/blog" className="blog-list">
            Blog
          </NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/NavLinks">NavLinks</NavLink>
          <NavLink to="/projects">Projects</NavLink>
        </div>
      )}
      {isLoggedIn ? (
        <div
          className={`inline-block justify-end items-center ${
            isMediumOrSmallScreen ? "ml-4" : "ml-16"
          }`}
        >
          <button
            onClick={handleLogout}
            className="w-20 rounded-md bg-slate-800 text-white flex items-center justify-center"
          >
            Logout
          </button>
        </div>
      ) : (
        <span className=" ml-8">
          <NavLink to="/login">Login</NavLink>
        </span>
      )}
    </div>
  );
}

export default Nav;
