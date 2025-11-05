import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../features/cartSlice";

const ProductCard = ({ val }) => {
  const dispatch = useDispatch();
  const { cartItems } = useSelector((state) => state.cart);

  const existingItem = cartItems.find((elem) => elem.id === val.id);

  const handleAddToCart = (data) => {
    dispatch(addToCart(data));
    alert("item added to cart");
  };
  const handleRemoveCart = (data) => {
    dispatch(removeFromCart(data));
    alert("item deleted from cart");
  };

  return (
    <div>
      <h1>Title- {val.title}</h1>

      {existingItem ? (
        <div>
          <button onClick={() => handleRemoveCart(val)}>-</button>
          <p>{existingItem.quantity}</p>
          <button onClick={() => handleAddToCart(val)}>+</button>
        </div>
      ) : (
        <button onClick={() => handleAddToCart(val)}>Add to cart</button>
      )}
    </div>
  );
};

export default ProductCard;
