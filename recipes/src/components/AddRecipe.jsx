import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";
import { MyStore } from "../context/MyContext";

const AddRecipe = () => {
  const navigate = useNavigate();
  const { setRecipes } = useContext(MyStore);
  let { register, handleSubmit, reset } = useForm();

  const formSubmit = (data) => {
    console.log(data);
    setRecipes((prev) => [...prev, data]);

    toast.success("Recipe added successfully");
    navigate("/");
    reset();
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-md rounded-lg mt-10">
      <h1 className="text-3xl font-semibold mb-6 text-center">
        Add a New Recipe
      </h1>
      <form onSubmit={handleSubmit(formSubmit)} className="space-y-4">
        <div>
          <label className="block mb-1 font-medium text-gray-700">
            Recipe Name
          </label>
          <input
            {...register("recipeName")}
            type="text"
            placeholder="Enter recipe name"
            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        {/* Recipe Items */}
        <div>
          <label className="block mb-1 font-medium text-gray-700">
            Recipe Items
          </label>
          <textarea
            {...register("recipeItems")}
            rows={3}
            placeholder="Describe the recipe steps"
            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        {/* Ingredients */}
        <div>
          <label className="block mb-1 font-medium text-gray-700">
            Ingredients
          </label>
          <textarea
            {...register("ingridients")}
            rows={3}
            placeholder="List ingredients"
            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        {/* Cooking Time */}
        <div>
          <label className="block mb-1 font-medium text-gray-700">
            Cooking Time (Minutes)
          </label>
          <input
            {...register("cookingTime")}
            type="number"
            placeholder="e.g., 30"
            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        {/* Image Upload */}
        <div>
          <label className="block mb-1 font-medium text-gray-700">
            Recipe Image
          </label>
          <input
            {...register("image")}
            type="url"
            placeholder="image url"
            accept="image/*"
            className="border p-2 rounded w-full"
          />
        </div>

        {/* Submit Button */}
        <div className="mt-4 text-center">
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddRecipe;
