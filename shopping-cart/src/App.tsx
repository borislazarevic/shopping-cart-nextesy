import { Navbar, ShopHome } from "./components";
import { Routes, Route } from "react-router-dom";
import { RoutePath } from "./constants";

export const App = () => {
  return (
    <>
      <Navbar />
      <div className="body-container">
        <Routes>
          <Route path={RoutePath.shopHome} element={<ShopHome />} />
          <Route
            path={RoutePath.shopHomeCart}
            element={<div>Shop Home Cart</div>}
          />
          <Route path={RoutePath.cart} element={<div>Cart</div>} />
          <Route />
        </Routes>
      </div>
    </>
  );
};
