import React, { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "../components/ProductCard";

const Home = () => {
  const [productsData, setProductsData] = useState([]);

  const getProductData = async () => {
    try {
      let res = await axios.get("https://fakestoreapi.com/products");
      if (res) {
        setProductsData(res?.data);
      }
    } catch (error) {
      console.log("Error in pa", error);
    }
  };

  useEffect(() => {
    getProductData();
  }, []);

  return (
    <div>
      <h1>Home</h1>
      {productsData?.map((val) => {
        return <ProductCard key={val.id} val={val} />;
      })}
    </div>
  );
};

export default Home;
