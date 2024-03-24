import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import PrivateRoute from "../auth/PrivateRoute";
import LoginPage from "../pages/LoginPage/LoginPage";
import DashboardPage from "../pages/DashboardPage/DashboardPage";
import ProductsPage from "../pages/ProductsPage/ProductsPage";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Todos from "../pages/Todos/Todos";

const MainRoute = () => {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route element={<PrivateRoute />}>
        <Route path="/" element={<DashboardPage />}/>
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/todos" element={<Todos />} />
      </Route>
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
};

export default MainRoute;
