import React, { useContext } from "react";
import { MyStore } from "../context/MyContext";

const ProductCard = ({ elem }) => {
  let { setCartsData, products, setProducts } = useContext(MyStore);

  const handleDelete = (id) => {
    let filtredArr = products.filter((elem) => elem.id !== id);
    setProducts(filtredArr);
    alert("Item deleted");
  };

  return (
    <div className="w-[23%] h-[40%] border border-gray-200 shadow-md p-3 rounded-md">
      <div className="h-[60%] w-full rounded-md overflow-hidden mb-5">
        <img src={elem.imgUrl} alt="img here" />
      </div>
      <div className="mb-5">
        <h1>{elem.title}</h1>
        <p>₹{elem.price}</p>
        <p>Ratings - {elem.ratings}</p>
      </div>
      <div className="flex w-full justify-between items-center">
        <button
          onClick={() => handleDelete(elem.id)}
          className="p-2 text-white bg-red-500 rounded-md"
        >
          Delete
        </button>
        <button
          onClick={() => {
            setCartsData((prev) => [...prev, elem]);
            alert("Product added in cart");
          }}
          className="p-2 text-white bg-green-700 rounded-md"
        >
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
