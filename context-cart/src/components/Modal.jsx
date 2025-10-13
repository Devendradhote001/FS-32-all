import React, { useContext } from "react";
import { MyStore } from "../context/MyContext";
import ProductCard from "./ProductCard";

const Modal = () => {
  let { setToggle, cartsData } = useContext(MyStore);

  return (
    <div className="w-[98%] h-140 bg-white absolute p-4">
      <div className="flex justify-between">
        <h1>My Carts</h1>
        <button
          onClick={() => setToggle((prev) => !prev)}
          className="text-4xl cursor-pointer"
        >
          x
        </button>
      </div>
      <div className="flex h-full gap-4">
        {cartsData.length ? (
          cartsData.map((elem) => <ProductCard key={elem.id} elem={elem} />)
        ) : (
          <h1 className="text-3xl text-red-500">No items here</h1>
        )}
      </div>
    </div>
  );
};

export default Modal;
