import axios from "axios";

export const fetchProducts = async () => {
  console.log("me chlaa hu me api wala fn hu");
  let res = await axios.get("https://fakestoreapi.com/products");
  if (res) {
    return res.data;
  }
};
