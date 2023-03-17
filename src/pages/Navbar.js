import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header>
      <nav className="py-4 max-w-screen-2xl mx-auto bg-white shadow-md">
        <div className="flex justify-between items-center px-2">
          <h1 className="text-2xl text-yellow-500 font-black">VOLUNTEER</h1>
          <ul className="flex space-x-6 text-xl justify-center items-center">
            <li>
              <Link to="/home"> Home </Link>
            </li>
            <li>
              <Link to="/events"> Events </Link>
            </li>
            <li>
              <Link to="/blog"> Blog </Link>
            </li>
            <li>
              <Link to="/about"> About </Link>
            </li>
            <li className="bg-[#3F90FC] px-4 py-2 text-white font-semibold rounded-md">
              <Link to="/register"> Register </Link>
            </li>
            <li className="bg-[#434141] px-4 py-2 text-white font-semibold rounded-md">
              <Link to="/admin"> Admin </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
