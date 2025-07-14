import { createSlice } from '@reduxjs/toolkit';

export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], // Initialize items as an empty array
  },
  reducers: {
    addItem: (state, action) => {
    const item = action.payload;
    const existingItem = state.items.find(p => p.name === item.name);
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        state.items.push({ ...item, quantity: 1 });
    }
    },
    removeItem: (state, action) => {
    },
    updateQuantity: (state, action) => {

    
    },
  },
});

export const { addItem, removeItem, updateQuantity } = CartSlice.actions;

export default CartSlice.reducer;
