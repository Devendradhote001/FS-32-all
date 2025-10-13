import React from "react";
import { NavLink } from "react-router";

const Navigation = () => {
  return (
    <div className="h-14 w-full justify-between items-center flex px-10 bg-green-600/70 text-white">
      <h1 className="text-2xl font-bold">Recipes</h1>
      <nav className="flex gap-8 text-xl">
        <NavLink
          className={({ isActive }) =>
            isActive ? "text-white font-bold" : "text-white/60"
          }
          to="/"
        >
          Home
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? "text-white font-bold" : "text-white/60"
          }
          to="/chef"
        >
          Chef
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? "text-white font-bold" : "text-white/60"
          }
          to="/add-recipe"
        >
          Add Recipe
        </NavLink>
      </nav>
      <div>
        <p className="text-xl font-bold">Signin</p>
      </div>
    </div>
  );
};

export default Navigation;
