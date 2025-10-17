import React from "react";
import { NavLink, Route, Routes } from "react-router";
import About from "../components/About";
import App from "../App";

const AppRouter = () => {
  return (
    <div>
      <nav>
        <NavLink to={"/"}>App</NavLink>
        <NavLink to={"/about"}>About</NavLink>
      </nav>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
};

export default AppRouter;
