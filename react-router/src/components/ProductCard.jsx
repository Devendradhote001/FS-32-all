import React from "react";
import { useNavigate } from "react-router";

const ProductCard = ({ elem }) => {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/products/details/${elem.id}`)}
      className="border h-106 w-70 border-gray-400 shadow-xl rounded-xl p-3"
    >
      <div className="h-70 w-full object-center">
        <img
          className="h-full w-full rounded-xl"
          src={elem.image}
          alt="image here"
        />
      </div>
      <div className="mt-4 flex flex-col gap-1">
        <h1 className="font-bold">{elem.title.slice(0, 20)}</h1>
        <p>${elem.price}</p>
        <div className=" flex w-full justify-between">
          <button className="px-4 py-2 cursor-pointer text-white bg-green-500 rounded-xl">
            Buy Now
          </button>
          <button className="px-4 py-2 cursor-pointer text-white bg-orange-600 rounded-xl">
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
