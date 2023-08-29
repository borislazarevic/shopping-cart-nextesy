import { useSelector } from "react-redux";
import { Button } from "..";

export const Cart = () => {
  const cart = useSelector((state) => state.cart);

  return (
    <div className="cart-container">
      <h1 className="cart-container-title">Your Cart</h1>
      {cart.cartItems.map((cartItem) => (
        <>
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
              <Button className="btn-remove">Remove</Button>
            </div>
          </div>
          <hr className="horizontal-line" />
        </>
      ))}
      <div className="cart-total-amount">
        <h3 className="cart-total-amount-title">Total</h3>
        <p className="cart-total-amount-price">0$</p>
      </div>
    </div>
  );
};
