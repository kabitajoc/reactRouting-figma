import React from "react";
import "./Nav.css";
import logo from "../../assets/Images/NordicLogo.png";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <div className="navbar">
      <div className="logo">
        <img src={logo} />
      </div>
      <div className="nav-links">
        <ul>
          <li>
            <a className="blog-list">Blog</a>
          </li>
          <li>
            <a> About</a>
          </li>
          <li>
            <a>Links</a>
          </li>
          <li>
            <a>Projects</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Nav;
