import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="w-full py-6 bg-black">
      <div className="container mx-auto flex items-center justify-between">
        <div className="logo text-white font-bold text-lg">
          <Link to="/home">
            <h1>CRASMA</h1>
          </Link>
        </div>
        <div>
          <Link to="/" className="text-white mx-5 font-medium">
            Home
          </Link>
          <Link to="/about" className="text-white mx-5 font-medium">
            About
          </Link>
          <Link to="/services" className="text-white mx-5 font-medium">
            Services
          </Link>
          <Link to="/signin" className="text-white ml-5 font-medium">
            Sign in
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
