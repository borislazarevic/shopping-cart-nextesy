import { createSlice } from "@reduxjs/toolkit";
import { Product } from "../types";
import { toast } from "react-toastify";

export interface CartSliceProps {
  cartItems: Product[];
  cartTotalAmount: number;
}

const initialState: CartSliceProps = {
  cartItems: localStorage.getItem("cartItems")
    ? JSON.parse(localStorage.getItem("cartItems")!)
    : [],
  cartTotalAmount: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, { payload }) => {
      const cartIndex = state.cartItems.findIndex(
        (cart) => cart.id === payload.id
      );

      if (cartIndex < 0) {
        state.cartItems.push(payload);
        toast.success(`${payload.title} is successfully added to the cart.`, {
          position: "bottom-left",
        });
      } else {
        toast.info(`${payload.title} is already in the shop cart.`, {
          position: "bottom-left",
        });
      }

      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },
  },
});

export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;
