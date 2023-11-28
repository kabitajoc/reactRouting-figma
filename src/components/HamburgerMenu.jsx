import React, { useState } from "react";
import { NavLink } from "react-router-dom";

function HamburgerMenu() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="relative">
      <div
        className={`menu-button flex flex-col justify-start items-start  ${
          menuOpen ? "open" : ""
        }`}
        onClick={toggleMenu}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="1em"
          viewBox="0 0 448 512"
          className="text-white left-0"
        >
          <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" />
        </svg>
      </div>
      {menuOpen && (
        <div className="menu-links flex flex-col items-center  w-56  absolute top-5  left-0 h-screen bg-slate-500  text-white font-bold  p-4 ">
          <NavLink
            to="/"
            className="text-white hover:text-gray-400"
            onClick={toggleMenu}
          >
            Home
          </NavLink>
          <NavLink
            to="/blog"
            className="text-white hover:text-gray-400"
            onClick={toggleMenu}
          >
            Blog
          </NavLink>
          <NavLink
            to="/about"
            className="text-white hover:text-gray-400"
            onClick={toggleMenu}
          >
            About
          </NavLink>
          <NavLink
            to="/NavLinks"
            className="text-white hover:text-gray-400"
            onClick={toggleMenu}
          >
            NavLinks
          </NavLink>
          <NavLink
            to="/projects"
            className="text-white hover:text-gray-400"
            onClick={toggleMenu}
          >
            Projects
          </NavLink>
        </div>
      )}
    </div>
  );
}

export default HamburgerMenu;
