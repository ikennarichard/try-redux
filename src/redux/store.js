import { configureStore } from "@reduxjs/toolkit";
//immport  state slice 
import cartReducer from './cart/cartSlice.js'
import modalReducer from './modal/modalSlice.js'
export const store = configureStore({
  reducer: {
    //cartReducer controls state in 
    //cartSlice
    cart: cartReducer,
    modal: modalReducer,
  }
})