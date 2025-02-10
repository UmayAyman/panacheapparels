import { configureStore } from '@reduxjs/toolkit';
import cartReducer from '../redux/cartSlice';
import productsReducer from '../redux/productSlice';
import authReducer from './authSlice';
import rootReducer from './rootSlice';

const store = configureStore({
    reducer: {
        products: productsReducer,
        cart: cartReducer,
        auth: authReducer,
        root: rootReducer,
    },
});

export default store;