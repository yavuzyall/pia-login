import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import PrivateRoute from "../auth/PrivateRoute";
import LoginPage from "../pages/LoginPage/LoginPage";
import DashboardPage from "../pages/DashboardPage/DashboardPage";
import ProductsPage from "../pages/ProductsPage/ProductsPage";

const MainRoute = () => {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route element={<PrivateRoute />}>
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="*" element={<Navigate to="/dashboard" />} />
      </Route>
    </Routes>
  );
};

export default MainRoute;
