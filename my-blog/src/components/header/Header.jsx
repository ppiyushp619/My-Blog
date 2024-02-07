import React from "react";
import { Link, Router } from "react-router-dom";
import "./header.css";
const Header = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-nav">
        <Link to="/" className="navbar-brand">
          My App
        </Link>
        <li className="nav-item">
          <Link to="/about" className="nav-link">
            About
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/contact" className="nav-link">
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
