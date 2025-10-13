import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import axios from "axios";

const Home = () => {
  const [products, setProducts] = useState([]);
  const fetchProducts = async () => {
    try {
      let res = await axios.get("https://fakestoreapi.com/products");

      if (res) {
        setProducts(res.data);
      }
    } catch (error) {
      console.log("error in fetching products", error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="flex p-4 flex-wrap gap-5">
      {products?.map((elem) => {
        return <ProductCard key={elem.id} elem={elem} />;
      })}
    </div>
  );
};

export default Home;
