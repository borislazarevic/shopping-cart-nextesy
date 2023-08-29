import { iconMap } from "../../utils";
import { NavLink } from "react-router-dom";
import { RoutePath } from "../../constants";
import { useSelector } from "react-redux";
import { Button } from "..";
import { useNavigate } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import { CartSliceProps, RootState } from "../../redux-toolkit";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState<boolean | null>(null);
  const cart: CartSliceProps = useSelector(
    (state) => (state as RootState).cart
  );
  const navigate = useNavigate();
  const dropdownRef = useRef<HTMLInputElement>(null);

  const handleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleCheckout = () => {
    navigate("/cart");
    setIsOpen(false);
  };

  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent): void => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as HTMLButtonElement)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  return (
    <>
      <nav className="navbar">
        <span className="navbar-logo">
          <NavLink className="navbar-link" to={RoutePath.shopHome}>
            <iconMap.EtonDigital />
          </NavLink>
        </span>

        <ul className="navbar-ul">
          <li>
            <NavLink className="navbar-link" to={RoutePath.shopHome}>
              Shop
            </NavLink>
          </li>
          <div className="cart-dropdown-container" ref={dropdownRef}>
            <Button onClick={handleDropdown} className="navbar-link cart">
              <iconMap.Cart />
              <div className="cart-item-count-wrapper">
                <span className="cart-item-count">{cart.cartItems.length}</span>
              </div>
            </Button>
            {cart.cartItems.length > 0 && (
              <div
                className={`dropdown-menu ${isOpen ? "active" : "inactive"}`}
              >
                {cart?.cartItems.map((cartItem) => (
                  <div className="dropdown-menu-wrapper">
                    <img
                      className="dropdown-menu-image"
                      src={cartItem.image}
                      alt={cartItem.title}
                    />
                    <h4 className="dropdown-menu-title">{cartItem.title}</h4>
                  </div>
                ))}
                <Button className="btn-checkout" onClick={handleCheckout}>
                  Go to Checkout
                </Button>
              </div>
            )}
          </div>
        </ul>
      </nav>
    </>
  );
};
