import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

const ProductDetail = () => {
  let { id } = useParams();
  console.log(id);

  const [details, setDetails] = useState(null);
  console.log(details);

  const getDetail = async () => {
    try {
      let res = await axios.get(`https://fakestoreapi.com/products/${id}`);
      if (res) {
        setDetails(res.data);
      }
    } catch (error) {
      console.log("error in detail", error);
    }
  };

  useEffect(() => {
    getDetail();
  }, [id]);

  return (
    <div>
      <img width={200} src={details?.image} alt="" />
      <h1>{details?.title}</h1>
      <p>{details?.description}</p>
      <p>{details?.price}</p>
    </div>
  );
};

export default ProductDetail;
