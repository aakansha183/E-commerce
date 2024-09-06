import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../Redux/UserSlice';
import cartReducer from "../Redux/cartSlice";

const store = configureStore({
    reducer: {
        
        users: userReducer,
        cart: cartReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;