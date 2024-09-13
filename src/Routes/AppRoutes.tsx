import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import Register from "../Pages/PageSignup/Signup";
import Login from "../Pages/PageLogin/Login";
import HomePage from "../Pages/PageHome/HomePage";
import CategoryDetails from "../Pages/PageCategory/CategoryDetails";
import ProductDetail from "../Pages/PageProductDetails/ProductDetailPage";
import CartPage from "../Pages/PageCart/CartPage";
import CheckoutPage from "../Pages/PageCheckout/PageCheckout";

const AppRoutes: React.FC = () => {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/Home" element={<HomePage />} />
        <Route path="/Category" element={<CategoryDetails />} />
        <Route path="/ProductDetails" element={<ProductDetail />} />
        <Route path="/Cart" element={<CartPage />} />
        <Route path = "/checkout" element = {<CheckoutPage/>}/>
      </Routes>
    </Router></>
  );
};

export default AppRoutes;
