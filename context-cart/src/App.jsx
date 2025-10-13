import React, { useContext, useState } from "react";
import ProductCard from "./components/ProductCard";
import Navbar from "./components/Navbar";
import Modal from "./components/Modal";
import { MyStore } from "./context/MyContext";

const App = () => {
  let { toggle, products } = useContext(MyStore);

  return (
    <div className="min-h-screen w-full p-4 flex flex-col gap-5">
      <Navbar />
      <div className="flex flex-wrap gap-5">
        {products.map((elem) => {
          return <ProductCard key={elem.id} elem={elem} />;
        })}
      </div>
      {toggle ? <Modal /> : ""}
    </div>
  );
};

export default App;
