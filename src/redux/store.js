import { configureStore } from "@reduxjs/toolkit";
import cartReducer from './cart/cartSlice.js'

export const store = configureStore({
  reducer: {
    cart: cartReducer,
  }
})