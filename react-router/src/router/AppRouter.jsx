import React from "react";
import { Route, Routes } from "react-router";
import Home from "../components/Home";
import About from "../components/About";
import ProductDetail from "../components/ProductDetail.jsx";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/products/details/:id" element={<ProductDetail />} />
    </Routes>
  );
};

export default AppRouter;
