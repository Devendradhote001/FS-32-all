import React from "react";
import { NavLink, Route, Routes } from "react-router";
import Home from "./components/Home";
import About from "./components/About";
import Product from "./components/ProductDetail.jsx";
import AppRouter from "./router/AppRouter";
import Navigation from "./router/Navigation";

const App = () => {
  return (
    <div className="h-screen w-full">
      <Navigation />

      <AppRouter />
    </div>
  );
};

export default App;
