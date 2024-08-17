import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex flex-row border-b border-1 border-b-purple-400 justify-between w-full px-24 py-6 bg-purple-400 items-center">
      <Link to="/">
        <h1 className="font-medium text-2xl">BlogMe</h1>
      </Link>
      <Link to="/create" className="text-[#FFFFFF]">
        Create a blog
      </Link>
    </nav>
  );
};

export default Navbar;
