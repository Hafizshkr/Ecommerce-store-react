import { createSlice } from "@reduxjs/toolkit";

const initialState = JSON.parse(localStorage.getItem("cart")) || {
  items: [],
  totalPrice: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      const { productId, productTitle, productPrice, quantity, productImage } =
        action.payload;
      const indexProductId = state.items.findIndex(
        (items) => items.productId === productId
      );
      if (indexProductId >= 0) {
        state.items[indexProductId].quantity += quantity;
      } else {
        state.items.push({
          productId,
          productTitle,
          productPrice,
          quantity,
          productImage,
        });
      }
      state.totalPrice = state.items.reduce(
        (productPrice, quantity) => productPrice * quantity
      );
      localStorage.setItem("cart", JSON.stringify(state));
    },
    removeFromCart(state, action) {
      const productId = action.payload;
      state.items = state.items.filter((item) => item.productId !== productId);
      state.totalPrice = state.items.reduce(
        (total, item) => total + item.quantity * item.productPrice,
        0
      );
      localStorage.setItem("cart", JSON.stringify(state));
    },
    quantifierPlus(state, action) {
      const { productId, quantity } = action.payload;
      const indexProductId = state.items.findIndex(
        (items) => items.productId === productId
      );
      if (indexProductId >= 0) {
        state.items[indexProductId].quantity += quantity;
      }
      localStorage.setItem("cart", JSON.stringify(state));
    },
    quantifierMinus(state, action) {
      const { productId, quantity } = action.payload;
      const indexProductId = state.items.findIndex(
        (items) => items.productId === productId
      );
      if (indexProductId >= 0) {
        if (state.items[indexProductId].quantity > quantity) {
          state.items[indexProductId].quantity -= quantity;
        } else {
          state.items = state.items.filter(
            (item) => item.productId !== productId
          );
        }
      }
      localStorage.setItem("cart", JSON.stringify(state));
    },
  },
});

export default cartSlice.reducer;
export const { addToCart, removeFromCart, quantifierPlus, quantifierMinus } =
  cartSlice.actions;
