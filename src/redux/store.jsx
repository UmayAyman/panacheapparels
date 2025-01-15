import { configureStore } from '@reduxjs/toolkit';
import cartReducer from '../redux/cartSlice';
import productsReducer from '../redux/productSlice';

export const store = configureStore({
    reducer: {
        products: productsReducer,
        cart: cartReducer,
    },
});

export default store;