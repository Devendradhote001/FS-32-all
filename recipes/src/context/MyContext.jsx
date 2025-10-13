import { createContext, useState } from "react";

export const MyStore = createContext();

export const MyContextProvider = ({ children }) => {
  const [recipes, setRecipes] = useState(
    () => JSON.parse(localStorage.getItem("recipes")) || []
  );

  const [chefData, setChefData] = useState(
    () => JSON.parse(localStorage.getItem("chef ka data")) || []
  );

  return (
    <MyStore.Provider value={{ recipes, setRecipes, chefData, setChefData }}>
      {children}
    </MyStore.Provider>
  );
};
