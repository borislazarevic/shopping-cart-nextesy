import "react-toastify/ReactToastify.css";
import { Cart, Navbar, ShopHome } from "./components";
import { Routes, Route } from "react-router-dom";
import { RoutePath } from "./constants";
import { ToastContainer } from "react-toastify";

export const App = () => {
  return (
    <>
      <ToastContainer />
      <Navbar />
      <div className="body-container">
        <Routes>
          <Route path={RoutePath.shopHome} element={<ShopHome />} />
          <Route path={RoutePath.cart} element={<Cart />} />
          <Route />
        </Routes>
      </div>
    </>
  );
};
