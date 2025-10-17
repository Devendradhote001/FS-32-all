import React, { lazy, Suspense, useEffect, useState } from "react";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { fetchProducts } from "./apis/ProductApis";

const App = () => {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [filterdata, setFilterdata] = useState([]);

  const { data, isPending, error } = useQuery({
    queryKey: ["products"],
    queryFn: fetchProducts,
    staleTime: Infinity,
  });

  const handleFilter = () => {
    if (search.trim() === "") return;
    let res = products.filter((elem) =>
      elem.title.toLowerCase().includes(search.toLowerCase())
    );
    setFilterdata(res);
  };

  useEffect(() => {
    setTimeout(() => {
      handleFilter();
    }, 1000);
  }, [search]);

  return (
    <div>
      <h1>App</h1>
      <div>
        <input
          type="text"
          placeholder="Search products..."
          onChange={(e) => setSearch(e.target.value)}
        />
        {data?.map((elem) => {
          return <p key={elem.id}>{elem.title}</p>;
        })}
      </div>
    </div>
  );
};

export default App;
