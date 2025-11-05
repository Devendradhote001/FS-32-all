import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartItems: [],
  },
  reducers: {
    addToCart: (state, action) => {
      const product = action.payload;

      const exists = state.cartItems.find((val) => val.id === product.id);

      if (exists) {
        exists.quantity += 1;
      } else {
        state.cartItems.push({ ...product, quantity: 1 });
      }
    },
    removeFromCart: (state, action) => {
      const product = action.payload;

      const exists = state.cartItems.find((val) => val.id === product.id);
      let updatedData = (exists.quantity -= 1);
      state.cartItems.push({ ...updatedData });
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
