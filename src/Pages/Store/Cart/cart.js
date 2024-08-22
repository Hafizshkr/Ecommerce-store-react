import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  totalPrice: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      const { productId, productTitle, productPrice, quantity } =
        action.payload;
      const indexProductId = state.items.findIndex(
        (items) => items.productId === productId
      );
      if (indexProductId >= 0) {
        state.items[indexProductId].quantity += quantity;
      } else {
        state.items.push({ productId, productTitle, productPrice, quantity });
      }
      state.totalPrice = state.items.reduce((productPrice, quantity) => productPrice * quantity)
    },
  },
});

export default cartSlice.reducer;
export const { addToCart } = cartSlice.actions;
