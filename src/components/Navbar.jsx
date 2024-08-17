import React from "react";
import { Link } from "react-router-dom";
import PersonIcon from "@mui/icons-material/Person";

const Navbar = () => {
  return (
    <nav className="flex flex-row border-b border-1 border-b-purple-400 justify-between w-full px-24 py-6 bg-purple-400 items-center">
      <Link to="/">
        <h1 className="font-medium text-2xl">BlogMe</h1>
      </Link>
      <div className="flex flex-row gap-6 items-center">
        <Link to="/create" className="text-[#FFFFFF]">
          Create a blog
        </Link>
        <Link
          to="/your-blogs"
          className="text-[#FFFFFF] bg-black p-[6px] rounded-full flex items-center justify-center"
        >
          <PersonIcon />
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
