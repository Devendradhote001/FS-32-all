import React from "react";
import { useSelector } from "react-redux";

const Cart = () => {
  const { cartItems } = useSelector((state) => state.cart);

  return (
    <div>
      <h1>Cart items</h1>
      {cartItems?.map((val) => {
        return (
          <div>
            <h1>titile - {val.title}</h1>
            <h2>Quantity - {val.quantity}</h2>
          </div>
        );
      })}
    </div>
  );
};

export default Cart;
