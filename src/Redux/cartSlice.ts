import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CartItem, CartState } from '../Utils/Interfaces/InterfacesCart';


const initialState: CartState = {
  items: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    
    AddToCart(state, action: PayloadAction<CartItem>) {
      const existingItem = state.items.find(item => item.id === action.payload.id && item.color === action.payload.color);
      if (existingItem) {
        existingItem.quantity += action.payload.quantity;
      } else {
        state.items.push(action.payload);
      }
    },
    removeItem: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter(item => item.id !== action.payload);
    },
  },
});

export const { AddToCart,removeItem } = cartSlice.actions;

export default cartSlice.reducer;
