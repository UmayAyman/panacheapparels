import { configureStore } from '@reduxjs/toolkit';
import cartReducer from '../redux/cartSlice';
import productsReducer from '../redux/productSlice';
import authReducer from './authSlice';

const store = configureStore({
    reducer: {
        products: productsReducer,
        cart: cartReducer,
        auth: authReducer,
    },
});

export default store;