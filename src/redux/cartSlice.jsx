import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: [],
    reducers: {
      addToCart: (state, action) => {
        const existingItem = state.find(item => item.id === action.payload.id);
        if (existingItem) {
          existingItem.quantity += 1; // Increment the quantity if the item already exists
        } else {
          state.push({ ...action.payload, quantity: 1 }); // Add new item if it's not in the cart
        }
      },
      removeFromCart: (state, action) => {
        return state.filter(item => item.id !== action.payload.id);
      },
    },
  });

  

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
