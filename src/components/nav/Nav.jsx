import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import logo from "../../assets/Images/NordicLogo.png";

function Nav() {
  const navigate = useNavigate();
  let [isLoggedIn, setIsLoggedIn] = useState(false);

  isLoggedIn = !!localStorage.getItem("email" && "password");

  const handleLogout = () => {
    localStorage.removeItem("email");
    localStorage.removeItem("password");
    setIsLoggedIn(false);
    navigate("/login");
  };

  return (
    <div className="navbar">
      <div className="logo">
        <img src={logo} />
      </div>
      <ul>
        <li>
          <NavLink to="/" className="blog-list">
            Home
          </NavLink>
        </li>

        {isLoggedIn ? (
          <>
            <li>
              <NavLink to="/blog" className="blog-list">
                Blog
              </NavLink>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
            <li>
              <NavLink to="/NavLinks">NavLinks</NavLink>
            </li>
            <li>
              <NavLink to="/projects">Projects</NavLink>
            </li>
            <li>
              <button onClick={handleLogout}>Logout</button>
            </li>
          </>
        ) : (
          <li>
            <NavLink to="/login">Login</NavLink>
          </li>
        )}
      </ul>
    </div>
  );
}

export default Nav;
