import React, { useContext } from "react";
import { MyStore } from "../context/MyContext";
import RecipeCard from "./RecipeCard";

const Home = () => {
  const { recipes } = useContext(MyStore);

  return (
    <div className="min-h-screen w-full p-4 flex gap-4">
      {recipes.length ? (
        recipes.map((elem, i) => {
          return <RecipeCard key={i} elem={elem} />;
        })
      ) : (
        <div className="h-100 w-full flex justify-center items-center">
          <h1 className="text-4xl font-bold">No recipes added</h1>
        </div>
      )}
    </div>
  );
};

export default Home;
