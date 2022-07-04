import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header>
      <nav className="py-4 bg-white shadow-md">
        <ul className="flex space-x-2">
          <li>
            <Link to="/home"> Home </Link>
          </li>
          <li>
            <Link to="/about"> About </Link>
          </li>
          <li>
            <Link to="/services"> Services </Link>
          </li>
          <li>
            <Link to="/products"> Products </Link>
          </li>
          <li>
            <Link to="/contact"> Contact </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
