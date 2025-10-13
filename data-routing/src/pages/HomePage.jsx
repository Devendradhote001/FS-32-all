import React from "react";
import { NavLink, Outlet } from "react-router";
import App from "../App";

const HomePage = () => {
  return (
    <div style={{display:'flex'}}>
      <nav>
        <NavLink to={"/"}>about</NavLink>
        <NavLink to={"/product"}>Product</NavLink>
      </nav>
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default HomePage;
