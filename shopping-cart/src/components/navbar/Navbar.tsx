import { iconMap } from "../../utils";
import { NavLink } from "react-router-dom";
import { RoutePath } from "../../constants";

export const Navbar = () => {
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
          <li>
            <NavLink className="navbar-link cart" to={RoutePath.cart}>
              <iconMap.Cart />
              <div className="cart-item-count-wrapper">
                <span className="cart-item-count">0</span>
              </div>
            </NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
};
