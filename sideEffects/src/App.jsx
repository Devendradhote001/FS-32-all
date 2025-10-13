import React, { use, useEffect, useState } from "react";
import axios from "axios";

const App = () => {
  const [count, setCount] = useState(0);
  const [products, setProducts] = useState([]);
  console.log(products);

  let fetchProducts = async () => {
    try {
      let res = await axios.get("https://fakestoreapi.com/products");
      setProducts(res.data);
    } catch (error) {
      console.log("error in fetching products...", error);
    }
  };

  console.log("hello me chlne wala hu");

  useEffect(() => {
    fetchProducts();
    console.log("me andr hu");
  }, []);

  return (
    <div>
      <h1>Hello</h1>
      <h1>count - {count}</h1>
      <input
        type="text"
        placeholder="entre"
        onChange={(e) => setValue(e.target.value)}
      />
      <button onClick={() => setCount(count + 1)}>inceee</button>
    </div>
  );
};

export default App;
