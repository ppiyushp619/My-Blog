import React from "react";
import { Link, Router } from "react-router-dom";

const Header = () => {
  return (

<nav className="navbar">
      <a to="/" className="navbar-brand">My App</a>
      <ul className="navbar-nav">
        <li className="nav-item">
          <a to="/about" className="nav-link">About</a>
        </li>
        <li className="nav-item">
          <a to="/contact" className="nav-link">Contact</a>
        </li>
      </ul>
    </nav>
  
  );
};

export default Header;
