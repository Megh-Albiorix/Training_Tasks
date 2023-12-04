import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, action) {
      state = state.cart.push(action.payload);
    },
    deleteItem(state, action) {
      state.cart = state.cart.filter((item) => action.payload !== item.pizzaId);
    },
    increaseItemQty(state, action) {
      const item = state.cart.find((item) => item.pizzaId === action.payload);
      item.quantity++;
      item.totalPrice = item.quantity * item.unitPrice;
    },
    decreaseItemQty(state, action) {
      const item = state.cart.find((item) => item.pizzaId === action.payload);
      if (item.quantity === 1) {
        state.cart = state.cart.filter(
          (item) => action.payload !== item.pizzaId,
        );
      }
      item.quantity--;
      item.totalPrice = item.quantity * item.unitPrice;
    },
    clearCart(state) {
      state.cart = [];
    },
  },
});

export const {
  decreaseItemQty,
  increaseItemQty,
  addItem,
  clearCart,
  deleteItem,
} = cartSlice.actions;

export default cartSlice.reducer;
