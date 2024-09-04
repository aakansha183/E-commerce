import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Register from "../Pages/PageSignup/Signup";
import Login from "../Pages/PageLogin/Login";
import ProductDetail from "../Pages/PageProductDetails/ProductDetailPage";
import HomePage from "../Pages/PageHome/HomePage";
import CategoryDetails from "../Pages/PageCategory/CategoryDetails";

const AppRoutes: React.FC = () => {
  return (
    <Router>
      <ToastContainer />
      <Routes>
        <Route>
          <Route path ='/' element={<HomePage/>}/>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/Home" element={<HomePage />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default AppRoutes;