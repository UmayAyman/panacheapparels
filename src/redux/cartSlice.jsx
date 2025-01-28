import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const existingItem = state.find((product) => product.id === action.payload.id);
            if (existingItem) {
                return state.map((product) =>
                    product.id === action.payload.id
                        ? { ...product, quantity: product.quantity + 1 }
                        : product
                );
            } else {
                return [...state, { ...action.payload, quantity: 1 }];
            }
        },
        removeFromCart: (state, action) => {
            const existingItem = state.find((product) => product.id === action.payload.id);
            if (existingItem) {
                if (existingItem.quantity > 1) {
                    return state.map((product) =>
                        product.id === action.payload.id
                            ? { ...product, quantity: product.quantity - 1 }
                            : product
                    );
                } else {
                    return state.filter((product) => product.id !== action.payload.id);
                }
            }
            return state;
        },
    },
});

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
