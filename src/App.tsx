import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import "./App.css";
import LoginPage from "./pages/LoginPage/LoginPage";
import DashboardPage from "./pages/DashboardPage/DashboardPage";
import { AuthProvider, useAuth } from "./auth/AuthContext";
import PrivateRoute from "./auth/PrivateRoute";
import Preloader from "./components/Preloader/Preloader";
import MainRoute from "./routes";

function App() {
  return (
    <AuthProvider>
        <Router>
          <Preloader />
          <MainRoute />
        </Router>
    </AuthProvider>
  );
}

export default App;
