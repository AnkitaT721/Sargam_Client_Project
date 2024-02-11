import React from "react";
import "./Header.css"; // Import CSS file for styling
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="logo">Sargam</div>
        <ul className="nav-menu">
          <li className="nav-item">
            <NavLink className="nav-link" to="/">
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/services">
              Services
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/about">
              About us
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/contact">
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
