import React from "react";
import { useNavigate } from "react-router";

const RecipeCard = ({ elem }) => {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/recipe/detail/${elem.recipeName}`)}
      className="w-[20%] h-[60%] flex flex-col gap-4 border border-gray-300 shadow-md p-3 rounded-xl"
    >
      <div className="h-[70%] w-full rounded-xl overflow-hidden">
        <img className="h-full w-full object-contain" src={elem.image} alt="" />
      </div>
      <div className="flex flex-col gap-2">
        <h1 className="text-xl font-bold">{elem.recipeName}</h1>
        <p className="text-gray-500">{elem.recipeItems} </p>
        <p className="text-gray-500">{elem.ingridients}</p>
        <p className="mb-2">{elem.cookingTime}mins</p>
        <button className="px-4 py-2 text-xl text-white bg-green-600/70 rounded-xl w-full">
          Buy Now
        </button>
      </div>
    </div>
  );
};

export default RecipeCard;
