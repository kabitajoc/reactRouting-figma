import React from "react";
import "./Nav.css";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <div className="navbar">
      <div className="logo">
        <img src="Images/NordicLogo.png" />
      </div>
      <div className="nav-links">
        <ul>
          <li>
            <a className="blog-list">Blog</a>
          </li>
          <li>
            <a> About</a>

            {/* </Link> */}
          </li>
          <li>
            {/* <Link to="/links"> */}
            Links
            {/* </Link> */}
          </li>
          <li>
            {/* <Link to="/projects"> */}
            Projects
            {/* </Link> */}
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Nav;
