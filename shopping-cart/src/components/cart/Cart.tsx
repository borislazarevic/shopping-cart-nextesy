import { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { Button } from "..";
import {
  CartSliceProps,
  RootState,
  getCartTotalAmount,
  removeFromCart,
} from "../../redux-toolkit";
import { Product } from "../../types";

export const Cart = () => {
  const cart: CartSliceProps = useSelector(
    (state) => (state as RootState).cart
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCartTotalAmount());
  }, [cart, dispatch]);

  const handleRemoveFromCart = (cartItem: Product) => {
    dispatch(removeFromCart(cartItem));
  };

  return (
    <div className="cart-container">
      <h1 className="cart-container-title">Your Cart</h1>
      {cart.cartItems.map((cartItem) => (
        <Fragment key={cartItem.id}>
          <div className="cart-items-wrapper">
            <img
              className="cart-items-img"
              src={cartItem.image}
              alt={cartItem.title}
            />
            <div className="cart-items-title-wrapper">
              <h3 className="cart-items-title">{cartItem.title}</h3>
              <p className="cart-items-description">{cartItem.description}</p>
            </div>
            <div className="cart-items-price-wrapper">
              <p className="cart-items-price">{cartItem.price}$</p>
              <Button
                onClick={() => handleRemoveFromCart(cartItem)}
                className="btn-remove"
              >
                Remove
              </Button>
            </div>
          </div>
          <hr className="horizontal-line" />
        </Fragment>
      ))}
      <div className="cart-total-amount">
        <h3 className="cart-total-amount-title">Total</h3>
        <p className="cart-total-amount-price">{cart.cartTotalAmount}$</p>
      </div>
    </div>
  );
};
