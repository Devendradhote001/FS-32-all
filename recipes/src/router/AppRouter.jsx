import React from "react";
import { Route } from "react-router";
import { Routes } from "react-router";
import Home from "../components/Home";
import Chef from "../components/Chef";
import AddRecipe from "../components/AddRecipe";
import RecipeDetail from "../components/RecipeDetail";
import AddChef from "../components/AddChef";

const AppRouter = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/chef" element={<Chef />} />
        <Route path="/add-recipe" element={<AddRecipe />} />
        <Route path="/recipe/detail/:chacha" element={<RecipeDetail />} />
        <Route path="/add-chef" element={<AddChef />} />
      </Routes>
    </div>
  );
};

export default AppRouter;
