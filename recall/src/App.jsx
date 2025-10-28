import React from "react";
import { fetchProductsApi } from "./apis/ProductApis";
import { useQuery } from "@tanstack/react-query";
import { productDataHook } from "./hooks/productHook";

const App = () => {
  // 1. api ko alag folder me bnaya or export kiya
  // 2. axios ka instance bnaya ek jagh
  // 3. tanstack query ka use kiya
  // 4. khichdi na pake issiliya customHook bnaya
  // 5. Saari cheex chunks me tod di

  const { data, isPending, error } = productDataHook();

  console.log(data);

  if (error) return <p>Error aya</p>;
  if (isPending) return <h1>Loading.....</h1>;

  return (
    <div> 
      <h1>hello</h1>
    </div>
  );
};

export default App;
