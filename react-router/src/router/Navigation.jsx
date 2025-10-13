import React from "react";
import { NavLink } from "react-router";

const Navigation = () => {
  return (
    <div className="h-14 bg-zinc-400 text-white px-10 flex justify-between items-center">
      <h1 className="text-2xl text-white font-bold">Logo</h1>
      <nav className="flex gap-10 text-xl">
        <NavLink
          className={({ isActive }) =>
            isActive ? "text-white" : "text-gray-300"
          }
          to={"/"}
        >
          Home
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? "text-white" : "text-gray-300"
          }
          to={"/about"}
        >
          About
        </NavLink>
      </nav>
      <div className="flex gap-5">
        <p>Profile</p>
        <p>Cart</p>
      </div>
    </div>
  );
};

export default Navigation;
