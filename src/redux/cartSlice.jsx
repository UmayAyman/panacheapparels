import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const existingItem = state.find((product) => product.id === action.payload.id);
            if (existingItem) {
                existingItem.quantity += 1;
            } else {
                state.push({ ...action.payload, quantity: 1 });
            }
        },
        removeFromCart: (state, action) => {
            const index = state.findIndex((product) => product.id === action.payload.id);
            if (index !== -1) {
                if (state[index].quantity > 1) {
                    state[index].quantity -= 1;
                } else {
                    state.splice(index, 1);
                }
            }
        },
    },
});

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
