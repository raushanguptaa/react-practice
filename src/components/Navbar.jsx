import React from "react";
import { FaSearch } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className=" bg-black text-white p-4">
      <div className="max-w-full flex justify-between items-center">
        <h1 className="text-2xl font-bold text-red-500">Portfilio</h1>
        <ul className=" flex gap-6 ml-50">
          <li className="text-lg font-semibold hover:text-blue-500 under">
            Home
          </li>
          <li className="text-lg font-semibold hover:text-blue-500 under">
            About
          </li>
          <li className="text-lg font-semibold hover:text-blue-500 under">
            Projects
          </li>
          <li className="text-lg font-semibold hover:text-blue-500 under">
            Contact
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
