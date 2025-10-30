import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "count",
  initialState: {
    value: 10,
  },
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    addValue: (state, action) => {
      state.value += Number(action.payload);
    },
  },
});

export const { increment, decrement, addValue } = counterSlice.actions;

export default counterSlice.reducer;
