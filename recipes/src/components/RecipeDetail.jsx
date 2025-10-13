import React, { useContext } from "react";
import { useParams } from "react-router";
import { MyStore } from "../context/MyContext";

const RecipeDetail = () => {
  let { chacha } = useParams();

  const { recipes } = useContext(MyStore);

  let recipeDetail = recipes.find((elem) => elem.recipeName === chacha);

  return (
    <div className="w-[60%]">
      <h1>Recipe details - {chacha} </h1>
      <div>
        <img width={400} src={recipeDetail.image} alt="" />
        <h1>Recipe Name - {recipeDetail.recipeName}</h1>
        <h1>
          Description - Lorem ipsum dolor, sit amet consectetur adipisicing
          elit. Temporibus possimus eius saepe ullam molestias cum sint eveniet
          iusto similique voluptatibus dolor, accusamus dolorum sed aut deserunt
          culpa, architecto eum voluptates, natus provident nemo inventore
          facilis! Fugit ut sit blanditiis quasi?
        </h1>
        <h1>Cooking time - {recipeDetail.cookingTime}</h1>
      </div>
    </div>
  );
};

export default RecipeDetail;
