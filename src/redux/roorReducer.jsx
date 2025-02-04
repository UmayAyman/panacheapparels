import { combineReducers } from 'redux';
import authReducer from './authSlice';
import cartReducer from './cartSlice';

const rootReducer = combineReducers({
    cart: cartReducer,
    auth: authReducer,
});

export default rootReducer;
