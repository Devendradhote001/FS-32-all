import React from "react";
import { NavLink, Outlet } from "react-router";

const MainLayout = () => {
  return (
    <div>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/cart">Cart</NavLink>
      </nav>
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;
